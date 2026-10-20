import React from 'react';
import { JOURNEY_TIMELINE } from '../data';
import { GraduationCap, Award, Code2, Compass } from 'lucide-react';

export const Journey: React.FC = () => {
  const getMilestoneIcon = (tag: string) => {
    switch (tag) {
      case 'ACADEMICS':
        return <GraduationCap className="w-5 h-5 text-offwhite" />;
      case 'RECOGNITION':
        return <Award className="w-5 h-5 text-offwhite" />;
      case 'PARTICIPATION':
        return <Compass className="w-5 h-5 text-offwhite" />;
      default:
        return <Code2 className="w-5 h-5 text-offwhite" />;
    }
  };

  return (
    <section
      id="journey"
      className="relative min-h-screen py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
        <span>(04) — MY JOURNEY</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.92] mb-16">
        LEARNING.
        <br />
        <span className="text-sage">BUILDING. REPEATING.</span>
      </h2>

      {/* Vertical Timeline with Animated Marker Line */}
      <div className="relative border-l-2 border-charcoal/15 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 max-w-4xl">
        {JOURNEY_TIMELINE.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Marker Node */}
            <div
              className={`absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                item.isCurrent
                  ? 'bg-sage ring-4 ring-sage/30 scale-110'
                  : 'bg-charcoal group-hover:bg-sage'
              }`}
            >
              {getMilestoneIcon(item.tag)}
            </div>

            {/* Timeline Card */}
            <div className="glass-panel p-6 md:p-8 border border-charcoal/10 hover:border-sage/50 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-charcoal/5 text-charcoal tracking-widest uppercase">
                  {item.yearOrPeriod}
                </span>
                <span className="font-mono text-[11px] text-sage font-medium tracking-widest">
                  [{item.tag}]
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-2">
                {item.title}
              </h3>

              <div className="font-mono text-xs md:text-sm text-muted mb-4 font-medium">
                {item.organization}
                {item.roleOrDegree && (
                  <span className="text-charcoal font-semibold"> · {item.roleOrDegree}</span>
                )}
              </div>

              <p className="font-body text-sm text-charcoal/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
