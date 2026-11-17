import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


function ScrollRevealObserver() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          'main section:not(#home) h2',
          'main section:not(#home) h3',
          'main section:not(#home) p',
          'main section:not(#home) article',
          'main section:not(#home) article img',
          'main section:not(#home) form',
          'main section:not(#home) ol > li',
          'main section:not(#home) .grid > div',
          'main section:not(#home) .space-y-6 > p',
        ].join(',')
      )
    );

    if (!targets.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('scroll-in', 'scroll-in-visible'));
      return;
    }

    // Give sibling content a short stagger so cards and text emerge in sequence.
    const siblingCounters = new Map<HTMLElement, number>();
    targets.forEach((element) => {
      const parent = element.parentElement;
      const index = parent ? (siblingCounters.get(parent) ?? 0) : 0;
      if (parent) siblingCounters.set(parent, index + 1);
      element.classList.add('scroll-in');
      element.style.setProperty('--scroll-delay', `${Math.min(index, 5) * 85}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -7% 0px',
      }
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const distance = root.scrollHeight - window.innerHeight;
        setProgress(distance > 0 ? window.scrollY / distance : 0);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>(
      'main section:not(#home) h2, main section:not(#home) h3, main section:not(#home) p, main section:not(#home) img, main section:not(#home) article, main section:not(#home) form, main section:not(#home) li, main section:not(#home) .service-reveal'
    );

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('scroll-in-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        element.classList.add('scroll-in-visible');
        observer.unobserve(element);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -45px 0px',
    });

    targets.forEach((element) => {
      if (element.closest('.hero-image-section')) return;
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) =>
            child.matches('h2, h3, p, img, article, form, li, .service-reveal')
          )
        : [];
      const stagger = Math.min(Math.max(siblings.indexOf(element), 0), 5);
      element.style.setProperty('--scroll-delay', `${stagger * 85}ms`);
      element.classList.add('scroll-in');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <ScrollRevealObserver />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
