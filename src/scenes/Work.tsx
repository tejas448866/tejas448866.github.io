import React, { useState } from 'react';
import { ALL_PROJECTS, Project } from '../data';
import { TiltCard } from '../components/TiltCard';
import { Github, ArrowUpRight, Terminal, Eye, Layers, Shield, Cpu, Activity } from 'lucide-react';

export const Work: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  // Render individual project visual concept
  const renderVisualPreview = (project: Project) => {
    switch (project.mockType) {
      case 'horror-game':
        return (
          <div className="relative w-full h-56 md:h-64 rounded-xl bg-neutral-950 border border-red-950/40 p-4 flex flex-col justify-between overflow-hidden font-mono text-xs text-neutral-400 select-none">
            {/* Atmospheric dark environment with stealth radar */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(135,155,131,0.15)_0%,transparent_60%)]" />
            <div className="flex justify-between items-center z-10">
              <span className="flex items-center gap-1.5 text-red-400 text-[11px]">
                <Shield className="w-3.5 h-3.5 animate-pulse" />
                STEALTH HUD // SURVIVAL
              </span>
              <span className="text-[10px] text-neutral-500">ENGINE: TYPESCRIPT 3D</span>
            </div>
            {/* Dark corridor wireframe */}
            <div className="relative my-auto flex items-center justify-center">
              <div className="w-36 h-28 border border-neutral-800 rounded relative flex items-center justify-center">
                <div className="w-20 h-16 border border-neutral-700 rounded relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 animate-ping" />
                </div>
                <div className="absolute top-2 left-2 text-[9px] text-neutral-500">FOV: 85°</div>
                <div className="absolute bottom-2 right-2 text-[9px] text-sage">PUZZLE: [UNLOCKED]</div>
              </div>
            </div>
            <div className="flex justify-between items-center z-10 text-[11px] border-t border-neutral-900 pt-2">
              <span>INVENTORY: [KEYCARD, TORCH]</span>
              <span className="text-red-400">ENEMY DISTANCE: SAFE</span>
            </div>
          </div>
        );

      case 'ai-assistant':
        return (
          <div className="relative w-full h-56 md:h-64 rounded-xl bg-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden font-mono text-xs text-neutral-300 select-none">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5 text-sage text-[11px]">
                <Terminal className="w-3.5 h-3.5" />
                AI ASSISTANT DAEMON
              </span>
              <span className="text-[10px] text-neutral-500">PYTHON · VISION UI</span>
            </div>
            <div className="space-y-1.5 my-auto text-[11px]">
              <div className="text-neutral-500">&gt; Target: Screen Layout & DOM Inspection</div>
              <div className="text-sage">&gt; Vision analysis: 12 interactive nodes identified</div>
              <div className="text-neutral-300">&gt; Browser automation dispatched: searching queries...</div>
              <div className="text-neutral-400">&gt; System check: Memory normal · CPU 14%</div>
            </div>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-2 text-[10px] text-neutral-500">
              <span>WORKFLOW: BROWSER CONTROL</span>
              <span className="text-sage">STATUS: ACTIVE LISTENING</span>
            </div>
          </div>
        );

      case 'financial-engine':
        return (
          <div className="relative w-full h-56 md:h-64 rounded-xl bg-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden font-mono text-xs text-neutral-300 select-none">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <Activity className="w-3.5 h-3.5" />
                DECISION OPTIMIZATION ENGINE
              </span>
              <span className="text-[10px] text-neutral-500">TYPESCRIPT</span>
            </div>
            {/* Scenario comparisons visualization */}
            <div className="my-auto space-y-2">
              <div className="flex justify-between text-[11px]">
                <span>Scenario Alpha (Conservative)</span>
                <span className="text-neutral-400">Risk Low</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sage h-full w-2/3" />
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Scenario Beta (Growth Frontier)</span>
                <span className="text-emerald-400">Optimal Trade-Off</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-5/6" />
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-2 text-[10px] text-neutral-500">
              <span>TRADE-OFF MATRIX: EVALUATED</span>
              <span className="text-emerald-400">RECOMMENDATION: BETA</span>
            </div>
          </div>
        );

      case 'palmpilot':
        return (
          <div className="relative w-full h-56 md:h-64 rounded-xl bg-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden font-mono text-xs text-neutral-300 select-none">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 text-[11px]">
                <Eye className="w-3.5 h-3.5" />
                WEBCAM GESTURE INTERFACE
              </span>
              <span className="text-[10px] text-neutral-500">OPENCV · MEDIAPIPE</span>
            </div>
            <div className="relative my-auto flex items-center justify-center">
              {/* Hand skeleton diagram */}
              <div className="relative w-32 h-24 border border-cyan-500/20 rounded flex items-center justify-center">
                <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-cyan-400" />
                <div className="absolute top-1 left-12 w-2 h-2 rounded-full bg-cyan-400" />
                <div className="absolute top-3 right-8 w-2 h-2 rounded-full bg-cyan-400" />
                <div className="absolute bottom-4 left-14 w-3 h-3 rounded-full bg-sage" />
                <span className="text-[10px] text-cyan-300 tracking-wider">GESTURE: PINCH</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-2 text-[10px] text-neutral-500">
              <span>INPUT: CONTROLLER-FREE</span>
              <span className="text-cyan-400">TRACKING: 21 LANDMARKS</span>
            </div>
          </div>
        );

      case 'timetable':
        return (
          <div className="relative w-full h-56 md:h-64 rounded-xl bg-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden font-mono text-xs text-neutral-300 select-none">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5 text-amber-400 text-[11px]">
                <Layers className="w-3.5 h-3.5" />
                SCHEDULE OPTIMIZATION GRID
              </span>
              <span className="text-[10px] text-neutral-500">JAVASCRIPT</span>
            </div>
            {/* Timetable slots */}
            <div className="my-auto grid grid-cols-4 gap-1.5 text-[10px] text-center">
              <div className="p-1.5 rounded bg-sage/20 border border-sage/40 text-sage">DSA // R102</div>
              <div className="p-1.5 rounded bg-neutral-800 text-neutral-400">AI LAB // L2</div>
              <div className="p-1.5 rounded bg-amber-400/20 border border-amber-400/40 text-amber-300">NET // R204</div>
              <div className="p-1.5 rounded bg-neutral-800 text-neutral-400">OS // R101</div>
            </div>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-2 text-[10px] text-neutral-500">
              <span>FACULTY CONSTRAINTS: MET</span>
              <span className="text-amber-400">CONFLICTS: ZERO</span>
            </div>
          </div>
        );

      case 'volt-relay':
        return (
          <div className="relative w-full h-56 md:h-64 rounded-xl bg-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden font-mono text-xs text-neutral-300 select-none">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5 text-blue-400 text-[11px]">
                <Cpu className="w-3.5 h-3.5" />
                NOTEBOOK ANALYTICS // VOLT-RELAY
              </span>
              <span className="text-[10px] text-neutral-500">JUPYTER NOTEBOOK</span>
            </div>
            <div className="my-auto space-y-1">
              <div className="text-[10px] text-neutral-500">In [1]: import pandas as pd, numpy as np</div>
              <div className="text-[10px] text-neutral-400">Telemetry waveform processed: 10,000 samples</div>
              <div className="w-full h-12 flex items-end gap-1 px-2 pt-2 border-b border-neutral-800">
                {[30, 45, 60, 40, 85, 50, 70, 95, 65, 55, 80, 60, 45, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-sage/60 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-neutral-800 pt-2 text-[10px] text-neutral-500">
              <span>ELECTRICAL DIAGNOSTICS</span>
              <span className="text-blue-400">ANOMALY DETECTED: 0</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className="relative min-h-screen py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
        <span>(03) — SELECTED PROJECTS</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.92] mb-6">
        IDEAS INTO
        <br />
        <span className="text-sage">WORKING SYSTEMS.</span>
      </h2>

      <p className="font-body text-base md:text-lg text-muted max-w-2xl mb-12">
        A curated showcase of 6 distinct technical projects spanning 3D interactive graphics,
        autonomous AI assistants, computer vision gesture systems, constraint optimization, and data science workflows.
      </p>

      {/* Project Selector Pills for Quick Access */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-charcoal/10 overflow-x-auto">
        {ALL_PROJECTS.map((proj, idx) => (
          <button
            key={proj.id}
            type="button"
            onClick={() => setActiveProjectIdx(idx)}
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer ${
              activeProjectIdx === idx
                ? 'bg-charcoal text-offwhite shadow-sm'
                : 'bg-charcoal/5 text-charcoal hover:bg-black/10'
            }`}
          >
            {proj.number} · {proj.title}
          </button>
        ))}
      </div>

      {/* 6 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_PROJECTS.map((project, idx) => {
          const isSelected = activeProjectIdx === idx;
          return (
            <TiltCard key={project.id} maxTilt={6}>
              <div
                className={`glass-panel p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 border ${
                  isSelected
                    ? 'border-sage shadow-xl ring-2 ring-sage/20'
                    : 'border-charcoal/10 hover:border-charcoal/30'
                }`}
                onMouseEnter={() => setActiveProjectIdx(idx)}
              >
                <div>
                  {/* Top Bar: Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-sage tracking-widest">
                      {project.number} / 06
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-charcoal/5 text-charcoal uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl text-charcoal tracking-wide mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Visual Preview Concept */}
                  <div className="mb-6">{renderVisualPreview(project)}</div>
                </div>

                <div>
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-offwhite border border-charcoal/10 text-charcoal/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Functional GitHub Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full btn-cinematic btn-primary py-2.5 px-4 text-xs font-mono justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};
