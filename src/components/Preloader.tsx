import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // 1.2s total smooth intro

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.floor(ease * 100);
      setPercent(val);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        // Trigger split screen reveal
        setIsRevealing(true);
        setTimeout(() => {
          setIsDone(true);
          onComplete();
        }, 650);
      }
    };

    const id = requestAnimationFrame(frame);

    // Hard safeguard: never hang indefinitely under any circumstances
    const safetyTimer = setTimeout(() => {
      setIsRevealing(true);
      setTimeout(() => {
        setIsDone(true);
        onComplete();
      }, 400);
    }, 2000);

    return () => {
      cancelAnimationFrame(id);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden"
    >
      {/* Top Half of Split Curtain */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 bg-charcoal transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-end justify-center pb-8 border-b border-sage/20"
        style={{
          transform: isRevealing ? 'translateY(-100%)' : 'translateY(0%)',
        }}
      >
        <div className="text-center">
          <div className="font-mono text-xs tracking-[0.3em] text-sage uppercase mb-2">
            INITIALIZING CINEMATIC EXPERIENCE
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-offwhite tracking-wider">
            TEJAS GOWDA
          </h1>
        </div>
      </div>

      {/* Bottom Half of Split Curtain */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-charcoal transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-start justify-center pt-8 border-t border-sage/20"
        style={{
          transform: isRevealing ? 'translateY(100%)' : 'translateY(0%)',
        }}
      >
        <div className="text-center">
          <div className="font-display text-7xl md:text-9xl text-sage tabular-nums tracking-tighter leading-none">
            {percent.toString().padStart(2, '0')}
            <span className="text-2xl text-offwhite/50 font-mono ml-2">%</span>
          </div>
          <div className="font-mono text-xs text-muted tracking-widest mt-4">
            STUDENT DEVELOPER · BNMIT · 2029
          </div>
        </div>
      </div>

      {/* Center glowing blade line */}
      <div
        className={`absolute top-1/2 left-0 right-0 h-[2px] bg-sage -translate-y-1/2 shadow-[0_0_20px_#879B83] transition-opacity duration-300 ${
          isRevealing ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
