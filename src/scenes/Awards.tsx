import React from 'react';
import { ACHIEVEMENTS, CURRENTLY_EXPLORING } from '../data';
import { TiltCard } from '../components/TiltCard';
import { Trophy, CheckCircle2, Bookmark, Compass } from 'lucide-react';

export const Awards: React.FC = () => {
  const runnerUp = ACHIEVEMENTS.find((a) => a.id === 'evox');
  const hackathon = ACHIEVEMENTS.find((a) => a.id === 'hackathon');
  const learningItems = ACHIEVEMENTS.filter((a) => a.category === 'learning');

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
        <span>(06) — ACHIEVEMENTS</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.92] mb-12">
        PROGRESS OVER
        <br />
        <span className="text-sage">PRETENCE.</span>
      </h2>

      {/* Prominent Recognition Banner: Runner-Up EVOX 1.0 */}
      {runnerUp && (
        <div className="mb-12">
          <TiltCard maxTilt={4}>
            <div className="glass-panel-dark p-8 md:p-12 relative overflow-hidden border border-sage/30">
              <div className="absolute top-0 right-0 w-80 h-80 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/20 border border-sage/40 text-sage font-mono text-xs tracking-widest uppercase mb-4">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>COMPETITION PODIUM RECOGNITION</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl text-offwhite tracking-wide mb-3">
                    {runnerUp.title}
                  </h3>
                  <div className="font-mono text-sm text-sage mb-2 font-medium">
                    {runnerUp.team} · {runnerUp.organization}
                  </div>
                  <p className="font-body text-sm text-offwhite/80 max-w-2xl leading-relaxed">
                    {runnerUp.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[160px]">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">RESULT</span>
                  <span className="font-display text-4xl text-sage tracking-wider my-1">RUNNER-UP</span>
                  <span className="font-mono text-[11px] text-offwhite/60">UNSTOP SUBMISSION</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      )}

      {/* 2-Column Grid: Hackathon Participation & Completed Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Hackathon Participation */}
        {hackathon && (
          <TiltCard maxTilt={5}>
            <div className="glass-panel p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    HACKATHON PARTICIPATION
                  </span>
                  <Compass className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-2">
                  {hackathon.title}
                </h3>
                <div className="font-mono text-xs text-muted mb-4 font-medium">
                  {hackathon.organization}
                </div>
                <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                  {hackathon.description}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/5 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>STATUS</span>
                <span className="text-sage font-medium">ACTIVE PARTICIPANT</span>
              </div>
            </div>
          </TiltCard>
        )}

        {/* Completed Learning Achievements */}
        <div className="glass-panel p-8 border border-charcoal/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                COMPLETED LEARNING ACHIEVEMENTS
              </span>
              <Bookmark className="w-5 h-5 text-sage" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-2">
              FOUNDATIONAL MASTERY
            </h3>
            <p className="font-body text-xs text-muted mb-6">
              Verified completion of core web development subjects.
            </p>

            <div className="space-y-3">
              {learningItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-offwhite border border-charcoal/10 hover:border-sage transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <span className="font-mono text-sm text-charcoal font-medium">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-sage font-medium">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-charcoal/5 font-mono text-[11px] text-muted flex justify-between">
            <span>WEB STANDARDS</span>
            <span className="text-sage">3 / 3 COMPLETED</span>
          </div>
        </div>
      </div>

      {/* Tasteful "Currently Exploring" Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-sage animate-ping" />
          <h3 className="font-mono text-xs text-muted tracking-widest uppercase">
            CURRENTLY EXPLORING // ACTIVE HORIZONS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-charcoal/5 border border-charcoal/10 hover:border-sage/40 transition-colors"
            >
              <div className="font-mono text-[10px] text-sage tracking-widest mb-2">
                0{idx + 1} — ACTIVE INVESTIGATION
              </div>
              <h4 className="font-display text-lg text-charcoal tracking-wide mb-2">
                {item.title}
              </h4>
              <p className="font-body text-xs text-muted leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
