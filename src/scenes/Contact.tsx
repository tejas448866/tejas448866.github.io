import React from 'react';
import { PERSONAL_INFO } from '../data';
import { TiltCard } from '../components/TiltCard';
import { Mail, Github, Linkedin, ArrowUp, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactProps {
  onViewProjects: () => void;
  onBackToTop: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onViewProjects,
  onBackToTop,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-28 pb-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-between"
    >
      <div className="my-auto">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/20 border border-sage/40 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
          <span>(07) — CONTACT</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-charcoal leading-[0.9] mb-6">
          HAVE AN IDEA?
          <br />
          <span className="text-sage">LET’S BUILD.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-body text-lg md:text-2xl text-charcoal/85 max-w-2xl mb-12 font-normal leading-relaxed">
          “Interested in building something meaningful, exploring new ideas, or collaborating on a technical project? Let’s connect.”
        </p>

        {/* Contact Links & Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-12">
          {/* Email Card */}
          <TiltCard maxTilt={5}>
            <div className="glass-panel p-6 sm:p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    DIRECT EMAIL
                  </span>
                  <Mail className="w-5 h-5 text-sage" />
                </div>
                <div className="font-mono text-sm sm:text-base text-charcoal font-semibold break-all mb-4">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-charcoal/5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 btn-cinematic btn-primary py-2 px-3 text-xs justify-center"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full border border-charcoal/15 hover:bg-black/5 text-charcoal transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-sage" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </TiltCard>

          {/* GitHub Card */}
          <TiltCard maxTilt={5}>
            <div className="glass-panel p-6 sm:p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    OPEN SOURCE
                  </span>
                  <Github className="w-5 h-5 text-charcoal" />
                </div>
                <h3 className="font-display text-2xl text-charcoal tracking-wide mb-1">
                  GITHUB
                </h3>
                <p className="font-mono text-xs text-muted mb-4">
                  github.com/tejas448866
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-cinematic btn-outline py-2 px-3 text-xs justify-between"
                >
                  <span>View Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* LinkedIn Card */}
          <TiltCard maxTilt={5}>
            <div className="glass-panel p-6 sm:p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-muted tracking-widest uppercase">
                    PROFESSIONAL
                  </span>
                  <Linkedin className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-display text-2xl text-charcoal tracking-wide mb-1">
                  LINKEDIN
                </h3>
                <p className="font-mono text-xs text-muted mb-4">
                  linkedin.com/in/tejas-gowda-25902a386
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-cinematic btn-outline py-2 px-3 text-xs justify-between"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* View My Projects Action */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onViewProjects}
            className="btn-cinematic btn-outline text-xs"
          >
            ← View My Projects
          </button>
        </div>
      </div>

      {/* Editorial Footer */}
      <footer className="mt-24 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-charcoal">{PERSONAL_INFO.fullName}</span>
          <span className="hidden sm:inline">·</span>
          <span>{PERSONAL_INFO.role} · {PERSONAL_INFO.collegeShort}</span>
          <span className="hidden sm:inline">·</span>
          <span>© {PERSONAL_INFO.copyrightYear}</span>
        </div>

        <button
          type="button"
          onClick={onBackToTop}
          className="flex items-center gap-1.5 text-charcoal hover:text-sage transition-colors cursor-pointer group"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
        </button>
      </footer>
    </section>
  );
};
