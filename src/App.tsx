import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLenisScroll } from './engine/hooks';
import { Chrome } from './components/Chrome';
import { Preloader } from './components/Preloader';
import { Stage } from './components/Stage';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './scenes/Hero';
import { About } from './scenes/About';
import { Work } from './scenes/Work';
import { Journey } from './scenes/Journey';
import { Skills } from './scenes/Skills';
import { Awards } from './scenes/Awards';
import { Contact } from './scenes/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastProgressRef = useRef(0);

  const handleScroll = useCallback((progress: number) => {
    // Avoid redundant renders if change is sub-pixel
    if (Math.abs(progress - lastProgressRef.current) > 0.001) {
      lastProgressRef.current = progress;
      setScrollProgress(progress);
    }
  }, []);

  const { scrollTo } = useLenisScroll(handleScroll);

  // Active section observer
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'work', 'journey', 'skills', 'achievements', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-30% 0px -40% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavigate = (id: string) => {
    scrollTo(`#${id}`, { offset: -40, duration: 1.2 });
  };

  return (
    <div className="relative min-h-screen bg-offwhite text-charcoal font-body selection:bg-sage selection:text-white">
      {/* Cinematic Film Vignette & Ambient Glow */}
      <div className="cinematic-vignette" />
      <div className="ambient-glow top-[10vh] left-[20vw]" />
      <div className="ambient-glow top-[120vh] right-[10vw]" />
      <div className="ambient-glow top-[280vh] left-[5vw]" />

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Cinematic Intro Preloader */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* Fixed Character 3D Stage Layer */}
      <Stage scrollProgress={scrollProgress} />

      {/* Global Navigation & Chrome */}
      <Chrome
        activeSection={activeSection}
        onNavigate={handleNavigate}
        scrollProgress={scrollProgress}
      />

      {/* Main Narrative Scenes Flow */}
      <main className="relative z-20">
        <Hero onExploreWork={() => handleNavigate('work')} />
        <About />
        <Work />
        <Journey />
        <Skills />
        <Awards />
        <Contact
          onViewProjects={() => handleNavigate('work')}
          onBackToTop={() => handleNavigate('hero')}
        />
      </main>
    </div>
  );
};
