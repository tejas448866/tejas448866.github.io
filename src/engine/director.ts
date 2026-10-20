/**
 * Cinematic Director & Scene Controller
 * Manages scene measurements, scroll progress, blade transition interpolation,
 * and character stage transformations across the 7 scenes.
 */

export interface SceneConfig {
  id: string;
  name: string;
  startProgress: number; // 0..1
  endProgress: number;   // 0..1
  characterPose: {
    cxDesktop: number; // horizontal anchor (0..1)
    cxMobile: number;
    scaleDesktop: number;
    scaleMobile: number;
    offsetYDesktop: number; // in percent of viewport height
    offsetYMobile: number;
    rotateYDesktop: number; // degrees
    opacity: number;
    depthZ: number; // px
    blur: number; // px
  };
  bladeAngle: number; // degrees
  ambientLight: 'warm' | 'sage' | 'charcoal';
}

export const SCENE_CONFIGS: SceneConfig[] = [
  {
    id: 'hero',
    name: 'Introduction',
    startProgress: 0,
    endProgress: 0.15,
    characterPose: {
      cxDesktop: 0.72,
      cxMobile: 0.5,
      scaleDesktop: 1.0,
      scaleMobile: 0.78,
      offsetYDesktop: 0,
      offsetYMobile: 8,
      rotateYDesktop: -6,
      opacity: 1,
      depthZ: 40,
      blur: 0,
    },
    bladeAngle: 12,
    ambientLight: 'warm',
  },
  {
    id: 'about',
    name: 'About Me',
    startProgress: 0.15,
    endProgress: 0.32,
    characterPose: {
      cxDesktop: 0.78,
      cxMobile: 0.5,
      scaleDesktop: 1.05,
      scaleMobile: 0.75,
      offsetYDesktop: 4,
      offsetYMobile: 12,
      rotateYDesktop: -10,
      opacity: 0.92,
      depthZ: 0,
      blur: 0,
    },
    bladeAngle: 18,
    ambientLight: 'sage',
  },
  {
    id: 'work',
    name: 'Selected Projects',
    startProgress: 0.32,
    endProgress: 0.62,
    characterPose: {
      cxDesktop: 0.82,
      cxMobile: 0.5,
      scaleDesktop: 0.88,
      scaleMobile: 0.65,
      offsetYDesktop: 6,
      offsetYMobile: 14,
      rotateYDesktop: -14,
      opacity: 0.65, // Let project cards shine while maintaining character presence
      depthZ: -50,
      blur: 0,
    },
    bladeAngle: 24,
    ambientLight: 'charcoal',
  },
  {
    id: 'journey',
    name: 'My Journey',
    startProgress: 0.62,
    endProgress: 0.76,
    characterPose: {
      cxDesktop: 0.75,
      cxMobile: 0.5,
      scaleDesktop: 0.95,
      scaleMobile: 0.7,
      offsetYDesktop: 2,
      offsetYMobile: 10,
      rotateYDesktop: -8,
      opacity: 0.85,
      depthZ: -10,
      blur: 0,
    },
    bladeAngle: 15,
    ambientLight: 'warm',
  },
  {
    id: 'skills',
    name: 'Toolkit & Orbit',
    startProgress: 0.76,
    endProgress: 0.87,
    characterPose: {
      cxDesktop: 0.5, // Center focal point for orbital tags
      cxMobile: 0.5,
      scaleDesktop: 0.92,
      scaleMobile: 0.72,
      offsetYDesktop: 2,
      offsetYMobile: 6,
      rotateYDesktop: 0,
      opacity: 0.95,
      depthZ: 20,
      blur: 0,
    },
    bladeAngle: 0,
    ambientLight: 'sage',
  },
  {
    id: 'achievements',
    name: 'Achievements',
    startProgress: 0.87,
    endProgress: 0.94,
    characterPose: {
      cxDesktop: 0.8,
      cxMobile: 0.5,
      scaleDesktop: 0.9,
      scaleMobile: 0.68,
      offsetYDesktop: 4,
      offsetYMobile: 10,
      rotateYDesktop: -12,
      opacity: 0.78,
      depthZ: -20,
      blur: 0,
    },
    bladeAngle: 20,
    ambientLight: 'warm',
  },
  {
    id: 'contact',
    name: 'Contact & Build',
    startProgress: 0.94,
    endProgress: 1.0,
    characterPose: {
      cxDesktop: 0.68,
      cxMobile: 0.5,
      scaleDesktop: 1.02,
      scaleMobile: 0.78,
      offsetYDesktop: 0,
      offsetYMobile: 6,
      rotateYDesktop: 4,
      opacity: 1,
      depthZ: 50,
      blur: 0,
    },
    bladeAngle: 8,
    ambientLight: 'sage',
  },
];

/**
 * Returns interpolated pose based on total scroll progress (0..1)
 */
export function getInterpolatedPose(progress: number, isMobile: boolean) {
  const p = Math.max(0, Math.min(1, progress));
  
  // Find current active scene
  let currentIdx = 0;
  for (let i = 0; i < SCENE_CONFIGS.length; i++) {
    if (p >= SCENE_CONFIGS[i].startProgress && p <= SCENE_CONFIGS[i].endProgress) {
      currentIdx = i;
      break;
    }
  }

  const current = SCENE_CONFIGS[currentIdx];
  const next = SCENE_CONFIGS[Math.min(SCENE_CONFIGS.length - 1, currentIdx + 1)];

  // Local progress between current and next
  const span = Math.max(0.001, current.endProgress - current.startProgress);
  const localT = Math.max(0, Math.min(1, (p - current.startProgress) / span));

  // Smooth easeInOut curve
  const ease = localT < 0.5 ? 2 * localT * localT : -1 + (4 - 2 * localT) * localT;

  const cPose = current.characterPose;
  const nPose = next.characterPose;

  const cx = isMobile
    ? cPose.cxMobile + (nPose.cxMobile - cPose.cxMobile) * ease
    : cPose.cxDesktop + (nPose.cxDesktop - cPose.cxDesktop) * ease;

  const scale = isMobile
    ? cPose.scaleMobile + (nPose.scaleMobile - cPose.scaleMobile) * ease
    : cPose.scaleDesktop + (nPose.scaleDesktop - cPose.scaleDesktop) * ease;

  const offsetY = isMobile
    ? cPose.offsetYMobile + (nPose.offsetYMobile - cPose.offsetYMobile) * ease
    : cPose.offsetYDesktop + (nPose.offsetYDesktop - cPose.offsetYDesktop) * ease;

  const rotateY = isMobile
    ? 0
    : cPose.rotateYDesktop + (nPose.rotateYDesktop - cPose.rotateYDesktop) * ease;

  const opacity = cPose.opacity + (nPose.opacity - cPose.opacity) * ease;
  const depthZ = cPose.depthZ + (nPose.depthZ - cPose.depthZ) * ease;

  // Blade transition wave (peaks at scene boundary)
  const boundaryDist = Math.abs(localT - 0.5) * 2; // 0 at center, 1 at edge
  const bladeGlow = Math.max(0, 1 - boundaryDist * 1.8);

  return {
    sceneId: current.id,
    sceneIndex: currentIdx,
    cx,
    scale,
    offsetY,
    rotateY,
    opacity,
    depthZ,
    bladeAngle: current.bladeAngle,
    bladeGlow,
    ambientLight: current.ambientLight,
  };
}
