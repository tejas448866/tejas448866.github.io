import React, { useState } from 'react';
import { GENERAL_SKILLS, PROJECT_TECHNOLOGIES } from '../data';
import { TiltCard } from '../components/TiltCard';
import { Code, Globe, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'general' | 'project'>('all');

  return (
    <section
      id="skills"
      className="relative min-h-screen py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
        <span>(05) — TOOLKIT</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.92] mb-6">
        TOOLS I USE.
        <br />
        <span className="text-sage">SKILLS I GROW.</span>
      </h2>

      <p className="font-body text-base md:text-lg text-muted max-w-2xl mb-12">
        A structured breakdown of core programming proficiencies, web engineering fundamentals,
        and project-specific applied technologies. Kept transparent and free from artificial metrics.
      </p>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-10 pb-4 border-b border-charcoal/10">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-charcoal text-offwhite'
              : 'bg-charcoal/5 text-charcoal hover:bg-black/10'
          }`}
        >
          All Technologies
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('general')}
          className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all cursor-pointer ${
            activeTab === 'general'
              ? 'bg-charcoal text-offwhite'
              : 'bg-charcoal/5 text-charcoal hover:bg-black/10'
          }`}
        >
          General Stated Skills
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('project')}
          className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all cursor-pointer ${
            activeTab === 'project'
              ? 'bg-charcoal text-offwhite'
              : 'bg-charcoal/5 text-charcoal hover:bg-black/10'
          }`}
        >
          Project-Specific Technologies
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* General Skills - Programming */}
        {(activeTab === 'all' || activeTab === 'general') && (
          <TiltCard maxTilt={6}>
            <div className="glass-panel p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    CATEGORY 01
                  </span>
                  <div className="p-2.5 rounded-xl bg-charcoal/5 text-charcoal">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-2">
                  PROGRAMMING
                </h3>
                <p className="font-body text-xs text-muted mb-8">
                  Core foundational languages applied across computational logic and backend algorithms.
                </p>

                <div className="space-y-3">
                  {GENERAL_SKILLS[0].skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-offwhite border border-charcoal/10 font-mono text-sm text-charcoal font-medium hover:border-sage transition-colors"
                    >
                      <span>{skill}</span>
                      <span className="text-xs text-sage font-normal">STATED SKILL</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/5 font-mono text-[11px] text-muted flex justify-between">
                <span>FOUNDATIONAL</span>
                <span className="text-sage">ACTIVE</span>
              </div>
            </div>
          </TiltCard>
        )}

        {/* General Skills - Web Development */}
        {(activeTab === 'all' || activeTab === 'general') && (
          <TiltCard maxTilt={6}>
            <div className="glass-panel p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    CATEGORY 02
                  </span>
                  <div className="p-2.5 rounded-xl bg-charcoal/5 text-charcoal">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-2">
                  WEB DEVELOPMENT
                </h3>
                <p className="font-body text-xs text-muted mb-8">
                  The triad of web standards forming semantic structure, design presentation, and client interactivity.
                </p>

                <div className="space-y-3">
                  {GENERAL_SKILLS[1].skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-offwhite border border-charcoal/10 font-mono text-sm text-charcoal font-medium hover:border-sage transition-colors"
                    >
                      <span>{skill}</span>
                      <span className="text-xs text-sage font-normal">STATED SKILL</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/5 font-mono text-[11px] text-muted flex justify-between">
                <span>CORE STANDARDS</span>
                <span className="text-sage">ACTIVE</span>
              </div>
            </div>
          </TiltCard>
        )}

        {/* Project-Specific Technologies (Kept Distinct) */}
        {(activeTab === 'all' || activeTab === 'project') && (
          <TiltCard maxTilt={6} className={activeTab === 'project' ? 'lg:col-span-3' : ''}>
            <div className="glass-panel p-8 h-full flex flex-col justify-between border-2 border-sage/40 bg-sage/5 hover:border-sage transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-sage font-semibold tracking-widest uppercase">
                    DISTINCT DOMAIN
                  </span>
                  <div className="p-2.5 rounded-xl bg-sage/20 text-charcoal">
                    <Wrench className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-2">
                  PROJECT TECHNOLOGIES
                </h3>
                <p className="font-body text-xs text-muted mb-8">
                  Specialized libraries and frameworks leveraged within specific GitHub repositories.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_TECHNOLOGIES.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-offwhite border border-charcoal/10 font-mono text-xs sm:text-sm text-charcoal font-medium hover:border-sage transition-colors"
                    >
                      <span>{skill}</span>
                      <Sparkles className="w-3.5 h-3.5 text-sage" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/5 font-mono text-[11px] text-muted flex justify-between">
                <span>PROJECT REPERTOIRE</span>
                <span className="text-sage">6 IMPLEMENTATIONS</span>
              </div>
            </div>
          </TiltCard>
        )}
      </div>
    </section>
  );
};
