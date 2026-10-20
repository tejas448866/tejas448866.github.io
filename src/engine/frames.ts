/**
 * Frame Manager & Manifest Engine
 * Handles frame preloading, fractional blending, and fallback to verified high-res photo.
 */

export interface FrameManifestShot {
  from: number;
  to: number;
  box: [number, number, number, number];
  cx: number;
}

export interface FrameManifest {
  w: number;
  h: number;
  count: number;
  shots: FrameManifestShot[];
}

export class FrameEngine {
  private manifest: FrameManifest | null = null;
  private frames: HTMLImageElement[] = [];
  private isLoaded = false;
  private basePath = './frames';

  async init(): Promise<boolean> {
    try {
      const res = await fetch(`${this.basePath}/manifest.json`);
      if (!res.ok) {
        return false;
      }
      this.manifest = await res.json();
      if (!this.manifest || !this.manifest.count) {
        return false;
      }
      this.isLoaded = true;
      return true;
    } catch {
      // Graceful fallback to static verified photograph
      return false;
    }
  }

  getManifest(): FrameManifest | null {
    return this.manifest;
  }

  hasFrames(): boolean {
    return this.isLoaded && this.manifest !== null && this.manifest.count > 0;
  }
}

export const frameEngine = new FrameEngine();
