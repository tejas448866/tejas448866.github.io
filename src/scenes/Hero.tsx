import React from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowDown, Github, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-between pt-28 pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="w-full lg:w-3/5 z-20 flex flex-col items-start">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sage" />
          <span>(01) — INTRODUCTION</span>
        </div>

        {/* Name */}
        <div className="font-mono text-sm tracking-[0.25em] text-muted uppercase mb-2">
          PORTFOLIO ARCHIVE // 2025–2029
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-charcoal leading-[0.9] mb-4">
          TEJAS <span className="text-sage">GOWDA</span>
        </h1>

        {/* Main Headline */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-charcoal/90 tracking-wide uppercase leading-tight mb-6">
          BUILDING SMART SOLUTIONS.
          <br />
          <span className="text-sage">EXPLORING BOLD IDEAS.</span>
        </h2>

        {/* Supporting Identity Line */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs md:text-sm text-charcoal/80 bg-charcoal/5 px-4 py-2 rounded-lg border border-charcoal/10 mb-6">
          <span className="font-semibold text-charcoal">Student Developer</span>
          <span>·</span>
          <span>BNMIT</span>
          <span>·</span>
          <span className="text-muted">Information Science and Engineering</span>
        </div>

        {/* Tagline */}
        <blockquote className="border-l-2 border-sage pl-4 my-2 font-body text-base md:text-lg text-charcoal/85 italic max-w-xl">
          "{PERSONAL_INFO.tagline}"
        </blockquote>

        {/* Concise Description */}
        <p className="font-body text-sm md:text-base text-muted max-w-lg mt-4 mb-8 leading-relaxed">
          {PERSONAL_INFO.heroDescription}
        </p>

        {/* Primary Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onExploreWork}
            className="btn-cinematic btn-primary"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="btn-cinematic btn-outline"
          >
            <Github className="w-4 h-4" />
            View GitHub
          </a>
        </div>
      </div>

      {/* Floating Meta Coordinate for Cinematic Feel */}
      <div className="hidden lg:flex flex-col items-end absolute right-12 bottom-12 font-mono text-[11px] text-muted space-y-1 text-right pointer-events-none">
        <div>LAT 12.9716° N / LON 77.5946° E</div>
        <div>BANGALORE, INDIA</div>
        <div className="text-sage font-medium">STATUS: READY FOR COLLABORATION</div>
      </div>
    </section>
  );
};
