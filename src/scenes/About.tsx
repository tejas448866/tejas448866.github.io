import React from 'react';
import { ABOUT_THEMES } from '../data';
import { TiltCard } from '../components/TiltCard';
import { Compass, Hammer, Sparkles, RefreshCw } from 'lucide-react';

export const About: React.FC = () => {
  const getThemeIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-6 h-6 text-sage" />;
      case '02':
        return <Hammer className="w-6 h-6 text-charcoal" />;
      case '03':
        return <RefreshCw className="w-6 h-6 text-sage" />;
      default:
        return <Sparkles className="w-6 h-6 text-sage" />;
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
        <span>(02) — ABOUT ME</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.92] mb-12">
        CURIOUS BY NATURE.
        <br />
        <span className="text-sage">BUILDER BY PRACTICE.</span>
      </h2>

      {/* Progressive Text Reveal / Manifesto with Sage Highlights */}
      <div className="max-w-3xl mb-16">
        <p className="font-body text-xl sm:text-2xl md:text-3xl text-charcoal/90 leading-relaxed font-normal">
          “I'm a{' '}
          <span className="font-semibold text-charcoal bg-sage/20 px-1 rounded">
            passionate tech enthusiast
          </span>{' '}
          who loves exploring{' '}
          <span className="text-sage font-medium">innovative ideas</span>,
          building{' '}
          <span className="text-sage font-medium">creative projects</span>, and
          using technology to solve{' '}
          <span className="font-semibold text-charcoal underline decoration-sage decoration-2 underline-offset-4">
            real-world problems
          </span>
          . My goal is to become a{' '}
          <span className="font-semibold text-charcoal">
            skilled software developer
          </span>{' '}
          who builds{' '}
          <span className="text-sage font-medium">
            intelligent, impactful, and user-friendly solutions
          </span>{' '}
          that make a difference.”
        </p>
      </div>

      {/* 3 Visual Themes with Subtle 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {ABOUT_THEMES.map((theme) => (
          <TiltCard key={theme.number} maxTilt={6}>
            <div className="glass-panel p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage/50 transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-muted tracking-widest">
                    THEME {theme.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-charcoal/5">
                    {getThemeIcon(theme.number)}
                  </div>
                </div>
                <h3 className="font-display text-2xl text-charcoal tracking-wide mb-3">
                  {theme.number} — {theme.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/5 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>CORE PILLAR</span>
                <span className="text-sage">ACTIVE</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
