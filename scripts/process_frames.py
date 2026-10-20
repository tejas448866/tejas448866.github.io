"""
Video to Transparent WebP Frame Pipeline
Implementation of Section 1 of the Master Specification:
- Frame extraction
- Rembg u2net_human_seg + props chroma distance mask
- Connected component filtering & dilation
- De-fringing against white background (unpremultiply)
- Alpha erosion, remapping, luminance-based edge softening
- Shot-based union bounding box cropping
- Exporting to lg/ (q80) and sm/ (q78) WebP
- Manifest.json generation with cx calculation
"""

import os
import sys
import json
import math
import subprocess
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter

def extract_frames(video_path: str, output_dir: str):
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg", "-y", "-i", video_path,
        "-start_number", "0",
        os.path.join(output_dir, "f%03d.png")
    ]
    print(f"Extracting frames: {' '.join(cmd)}")
    subprocess.run(cmd, check=True)

def process_single_frame(img_pil: Image.Image, bg_color=247):
    """
    Combines rembg human mask with props mask, removes white fringe, cleans alpha.
    """
    from rembg import remove, new_session
    from scipy.ndimage import binary_opening, binary_dilation, label

    # 1. Person mask
    session = new_session("u2net_human_seg")
    person_mask = remove(img_pil, session=session, only_mask=True)
    person_arr = np.array(person_mask).astype(np.float32) / 255.0

    # 2. Props mask from background color distance
    rgb_arr = np.array(img_pil.convert("RGB")).astype(np.float32)
    # Channel distance from corner sampled bg_color
    corner_samples = [
        rgb_arr[:20, :20, :],
        rgb_arr[:20, -20:, :],
        rgb_arr[-20:, :20, :],
        rgb_arr[-20:, -20:, :]
    ]
    sampled_bg = np.mean([np.mean(c, axis=(0, 1)) for c in corner_samples], axis=0)
    
    diff = np.max(np.abs(rgb_arr - sampled_bg), axis=2)
    # Ramp from 14 to 40
    props_mask = np.clip((diff - 14.0) / 26.0, 0.0, 1.0)

    # Clean props mask: binary opening (3), retain blobs > 4000 px, dilate by 4
    binary_props = props_mask > 0.5
    opened_props = binary_opening(binary_props, structure=np.ones((3, 3)))
    labeled, num_features = label(opened_props)
    cleaned_props = np.zeros_like(opened_props, dtype=bool)
    for i in range(1, num_features + 1):
        if np.sum(labeled == i) > 4000:
            cleaned_props[labeled == i] = True
    dilated_props = binary_dilation(cleaned_props, structure=np.ones((4, 4))).astype(np.float32)

    # 3. Combine masks: alpha = max(personMask, propsMask)
    alpha = np.maximum(person_arr, dilated_props)

    # 4. Remove white fringe by un-premultiplying against white
    # rgb = (rgb - (1 - a) * 247) / a where a > 0.05
    out_rgb = rgb_arr.copy()
    mask_valid = alpha > 0.05
    for c in range(3):
        out_rgb[..., c] = np.where(
            mask_valid,
            np.clip((rgb_arr[..., c] - (1.0 - alpha) * 247.0) / np.maximum(alpha, 0.05), 0, 255),
            rgb_arr[..., c]
        )

    # 5. Erode alpha: alpha = 0.35 * alpha + 0.65 * MinFilter(3)(alpha)
    alpha_pil = Image.fromarray((alpha * 255).astype(np.uint8), mode="L")
    min_alpha_pil = alpha_pil.filter(ImageFilter.MinFilter(3))
    alpha_min_arr = np.array(min_alpha_pil).astype(np.float32) / 255.0
    alpha = 0.35 * alpha + 0.65 * alpha_min_arr

    # 6. Remap alpha: alpha = clip((alpha - 0.14) / 0.86) ^ 1.4
    alpha = np.power(np.clip((alpha - 0.14) / 0.86, 0.0, 1.0), 1.4)

    # 7. Edge softening: For edge pixels (alpha < 0.95), multiply alpha by 1 - 0.8 * clip((lum - 150) / 70)
    lum = 0.299 * rgb_arr[..., 0] + 0.587 * rgb_arr[..., 1] + 0.114 * rgb_arr[..., 2]
    edge_factor = 1.0 - 0.8 * np.clip((lum - 150.0) / 70.0, 0.0, 1.0)
    alpha = np.where(alpha < 0.95, alpha * edge_factor, alpha)

    # Blur 0.8px
    alpha_final_pil = Image.fromarray((np.clip(alpha, 0, 1) * 255).astype(np.uint8), mode="L")
    alpha_final_pil = alpha_final_pil.filter(ImageFilter.GaussianBlur(0.8))

    rgba = np.dstack([out_rgb.astype(np.uint8), np.array(alpha_final_pil)])
    return Image.fromarray(rgba, mode="RGBA")

def calculate_cx(alpha_arr: np.ndarray, is_laptop_shot=False) -> float:
    """
    Measures person's horizontal centre (0..1) as the alpha-weighted mean x of the top 45% of rows.
    """
    h, w = alpha_arr.shape
    top_rows = int(h * 0.45)
    sub_alpha = alpha_arr[:top_rows, :].astype(np.float32)
    
    total_weight = np.sum(sub_alpha)
    if total_weight < 1e-4:
        return 0.5
    
    x_indices = np.arange(w)
    col_weights = np.sum(sub_alpha, axis=0)
    cx = np.sum(x_indices * col_weights) / total_weight
    return float(cx / w)

def run_pipeline(video_path: str, output_base: str):
    """
    Full pipeline to output public/frames/lg, public/frames/sm, and manifest.json
    """
    base_dir = Path(output_base)
    full_dir = base_dir / "full_frames"
    lg_dir = base_dir / "lg"
    sm_dir = base_dir / "sm"
    lg_dir.mkdir(parents=True, exist_ok=True)
    sm_dir.mkdir(parents=True, exist_ok=True)

    extract_frames(video_path, str(full_dir))
    frame_files = sorted(list(full_dir.glob("f*.png")))
    count = len(frame_files)
    print(f"Processing {count} extracted frames...")

    # Define shots (default to 4 shots across 10s video)
    # S1: 0 - 2.5s (frames 0 to 25% of count)
    # S2: 2.5 - 5s (25% to 50%)
    # S3: 5 - 7.5s (50% to 75%)
    # S4: 7.5 - 10s (75% to 100%)
    shot_ranges = [
        (0, int(count * 0.25) - 1),
        (int(count * 0.25), int(count * 0.50) - 1),
        (int(count * 0.50), int(count * 0.75) - 1),
        (int(count * 0.75), count - 1),
    ]

    processed_frames = []
    for f_idx, f_path in enumerate(frame_files):
        print(f"Matting frame {f_idx + 1}/{count}: {f_path.name}")
        with Image.open(f_path) as im:
            # Resize to virtual space 1600x900
            im_resized = im.resize((1600, 900), Image.Resampling.LANCZOS)
            rgba = process_single_frame(im_resized)
            processed_frames.append(rgba)

    manifest_shots = []

    # Calculate union bounding box per shot
    for s_idx, (start_f, end_f) in enumerate(shot_ranges):
        shot_alpha_max = np.zeros((900, 1600), dtype=np.uint8)
        cx_accum = []
        is_laptop = (s_idx == 2)

        for i in range(start_f, end_f + 1):
            alpha = np.array(processed_frames[i])[:, :, 3]
            shot_alpha_max = np.maximum(shot_alpha_max, alpha)
            cx_accum.append(calculate_cx(alpha, is_laptop_shot=is_laptop))

        # Union bounding box where alpha > 6
        mask_active = shot_alpha_max > 6
        rows = np.any(mask_active, axis=1)
        cols = np.any(mask_active, axis=0)

        if np.any(rows) and np.any(cols):
            y_min, y_max = np.where(rows)[0][[0, -1]]
            x_min, x_max = np.where(cols)[0][[0, -1]]
        else:
            x_min, y_min, x_max, y_max = 0, 0, 1599, 899

        # Pad by 2px safe margin
        x_min = max(0, int(x_min) - 2)
        y_min = max(0, int(y_min) - 2)
        x_max = min(1600, int(x_max) + 2)
        y_max = min(900, int(y_max) + 2)
        box = [x_min, y_min, x_max - x_min, y_max - y_min]
        mean_cx = float(np.mean(cx_accum))

        manifest_shots.append({
            "from": start_f,
            "to": end_f,
            "box": box,
            "cx": round(mean_cx, 4)
        })

        # Save cropped frames for this shot
        for i in range(start_f, end_f + 1):
            crop_img = processed_frames[i].crop((x_min, y_min, x_max, y_max))
            # Save lg
            lg_path = lg_dir / f"f{i:03d}.webp"
            crop_img.save(lg_path, "WEBP", quality=80, alpha_quality=90)

            # Save sm (half size)
            sm_w = max(1, crop_img.width // 2)
            sm_h = max(1, crop_img.height // 2)
            sm_img = crop_img.resize((sm_w, sm_h), Image.Resampling.LANCZOS)
            sm_path = sm_dir / f"f{i:03d}.webp"
            sm_img.save(sm_path, "WEBP", quality=78)

    manifest = {
        "w": 1600,
        "h": 900,
        "count": count,
        "shots": manifest_shots
    }

    manifest_path = base_dir / "manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"Done! Manifest saved to {manifest_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python process_frames.py <path_to_video.mp4> <output_directory>")
        sys.exit(1)
    run_pipeline(sys.argv[1], sys.argv[2])
