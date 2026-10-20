import React, { useRef, useEffect } from 'react';
import { getInterpolatedPose } from '../engine/director';
import { useMouseParallax, useIsMobile, useReducedMotion } from '../engine/hooks';

interface StageProps {
  scrollProgress: number; // 0..1
}

export const Stage: React.FC<StageProps> = ({ scrollProgress }) => {
  const isMobile = useIsMobile();
  const mouse = useMouseParallax();
  const reducedMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const bladeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!characterRef.current) return;

    const pose = getInterpolatedPose(scrollProgress, isMobile);

    // Mouse parallax contribution (subtle)
    const mouseX = reducedMotion ? 0 : mouse.x * 12;
    const mouseY = reducedMotion ? 0 : mouse.y * 8;

    const targetX = (pose.cx - 0.5) * window.innerWidth + mouseX;
    const targetY = (pose.offsetY / 100) * window.innerHeight + mouseY;
    const targetRotateY = pose.rotateY + (reducedMotion ? 0 : mouse.x * 5);
    const targetScale = pose.scale;

    characterRef.current.style.transform = `
      translate3d(${targetX.toFixed(1)}px, ${targetY.toFixed(1)}px, ${pose.depthZ}px)
      scale(${targetScale.toFixed(3)})
      rotateY(${targetRotateY.toFixed(2)}deg)
    `;

    // Dynamic opacity based on pose
    const finalOpacity = isMobile ? Math.min(pose.opacity, 0.32) : pose.opacity;
    characterRef.current.style.opacity = finalOpacity.toFixed(2);

    // Blade transition glow effect during scene boundaries
    if (bladeRef.current) {
      bladeRef.current.style.opacity = pose.bladeGlow.toFixed(2);
      bladeRef.current.style.transform = `rotate(${pose.bladeAngle}deg)`;
    }
  }, [scrollProgress, isMobile, mouse, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="character-stage fixed inset-0 pointer-events-none z-10 overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Blade transition line with restrained sage glow */}
      <div
        ref={bladeRef}
        className="pointer-events-none absolute w-[200vw] h-[2px] bg-gradient-to-r from-transparent via-sage to-transparent shadow-[0_0_24px_rgba(135,155,131,0.8)] opacity-0 transition-opacity duration-300"
        style={{ transformOrigin: 'center center' }}
      />

      {/* 3D Character Container */}
      <div
        ref={characterRef}
        className="relative flex flex-col items-center justify-center transform-gpu preserve-3d transition-transform duration-100 ease-out"
        style={{
          width: isMobile ? '280px' : '440px',
          height: isMobile ? '520px' : '780px',
          willChange: 'transform, opacity',
        }}
      >
        {/* Cinematic Rim Lighting Ambient Behind Character */}
        <div
          className="absolute -inset-10 rounded-full blur-3xl opacity-40 transition-colors duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(230,235,226,0.8) 0%, rgba(135,155,131,0.3) 40%, transparent 70%)',
          }}
        />

        {/* Character Image (Tejas Gowda Reference Photo with High-Res WebP + Fallback) */}
        <picture className="relative z-10 w-full h-full flex items-center justify-center">
          <source
            srcSet="./character/tejas-hero-mobile.webp"
            media="(max-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet="./character/tejas-hero.webp"
            type="image/webp"
          />
          <img
            src="./character/tejas-hero.png"
            alt="Tejas Gowda — 3D Character Representation"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(37,41,35,0.18)]"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Soft Ground Contact Shadow */}
        <div
          className="absolute -bottom-6 w-3/4 h-8 bg-charcoal/20 rounded-[100%] blur-md pointer-events-none"
          style={{ transform: 'rotateX(80deg)' }}
        />
      </div>
    </div>
  );
};
