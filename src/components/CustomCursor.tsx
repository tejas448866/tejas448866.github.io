import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../engine/hooks';

export const CustomCursor: React.FC = () => {
  const isMobile = useIsMobile();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    document.body.classList.add('custom-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, [role="button"], input, textarea, .interactive-hover')
        );
        if (isInteractive !== isHovering) {
          isHovering = isInteractive;
          if (ringRef.current) {
            if (isHovering) {
              ringRef.current.classList.add('ring-expanded');
            } else {
              ringRef.current.classList.remove('ring-expanded');
            }
          }
        }
      }
    };

    const updateRing = () => {
      // Lerp trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateRing);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 -ml-1 -mt-1 h-2 w-2 rounded-full bg-charcoal transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-50 -ml-4 -mt-4 h-8 w-8 rounded-full border border-sage/60 transition-all duration-200 ease-out"
        style={{ willChange: 'transform' }}
      />
      <style>{`
        .cursor-ring.ring-expanded {
          width: 54px;
          height: 54px;
          margin-left: -27px;
          margin-top: -27px;
          background: rgba(135, 155, 131, 0.18);
          border-color: #879B83;
        }
      `}</style>
    </>
  );
};
