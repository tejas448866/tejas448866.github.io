import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface ChromeProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  scrollProgress: number; // 0..1
}

export const Chrome: React.FC<ChromeProps> = ({
  activeSection,
  onNavigate,
  scrollProgress,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-sage transition-all duration-75 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        />
      </div>

      {/* Global Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-offwhite/85 backdrop-blur-md border-b border-charcoal/10 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick('hero', e)}
            className="group flex items-center gap-3 text-charcoal no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded"
          >
            <div className="w-9 h-9 rounded-full bg-charcoal text-offwhite flex items-center justify-center font-display text-lg tracking-wider group-hover:bg-sage transition-colors duration-300">
              TG
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base tracking-wider leading-none text-charcoal">
                TEJAS GOWDA
              </span>
              <span className="font-mono text-[10px] text-muted tracking-widest mt-0.5">
                STUDENT DEVELOPER · BNMIT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-charcoal/5 px-3 py-1.5 rounded-full border border-charcoal/10 backdrop-blur-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 no-underline ${
                    isActive
                      ? 'bg-charcoal text-offwhite font-medium shadow-sm'
                      : 'text-charcoal/80 hover:text-charcoal hover:bg-black/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="btn-cinematic btn-primary py-2 px-5 text-xs"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-sage"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-offwhite/98 backdrop-blur-xl border-b border-charcoal/10 shadow-2xl p-6 transition-all duration-300">
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm tracking-wider no-underline transition-all ${
                      isActive
                        ? 'bg-sage text-white font-medium'
                        : 'text-charcoal hover:bg-black/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-charcoal/10 flex justify-between items-center text-xs font-mono text-muted">
                <span>{PERSONAL_INFO.email}</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sage hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
