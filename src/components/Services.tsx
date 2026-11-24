
import { ArrowRight, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '@/config/site';
import { useState } from 'react';
import type { CSSProperties } from 'react';

const cardColors = [
  { bg: '#14233B', text: '#FFFFFF', muted: '#D5DCE7' },
  { bg: '#F3EBDD', text: '#242424', muted: '#5F5B55' },
  { bg: '#3B82F6', text: '#FFFFFF', muted: '#E1EDFF' },
  { bg: '#7C3AED', text: '#FFFFFF', muted: '#EDE2FF' },
  { bg: '#D8E2F0', text: '#182338', muted: '#49576B' },
];

export default function Services() {
  const [manualTurn, setManualTurn] = useState(0);

  const nextCard = () => {
    setManualTurn((prev) => prev - 360 / services.length);
  };

  const previousCard = () => {
    setManualTurn((prev) => prev + 360 / services.length);
  };

  return (
    <section id="services" className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="flex items-center gap-3 font-display text-4xl font-bold uppercase leading-none tracking-tight text-ink sm:text-5xl lg:text-6xl">
              <Briefcase className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
              My Services
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Explore the services I offer.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* 3D CAROUSEL */}
        <div className="services-carousel-area mt-16">

          {/* Manual rotation layer */}
          <div
            className="services-carousel"
            style={{
              transform: `rotateY(${manualTurn}deg)`,
            }}
          >

            {/* Automatic rotation layer */}
            <div className="services-carousel-spin">

              {services.map((service, index) => {
                const angle = (360 / services.length) * index;
                const color = cardColors[index % cardColors.length];

                return (
                  <article
                    key={service.title}
                    className="services-carousel-card"
                    style={{
                      '--card-angle': `${angle}deg`,
                      backgroundColor: color.bg,
                      color: color.text,
                      '--card-muted': color.muted,
                    } as CSSProperties}
                  >
                    <div className="flex h-full flex-col">

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                        SERVICE {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-relaxed"
                        style={{ color: color.muted }}
                      >
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-3 text-sm">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#contact"
                        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold"
                      >
                        Discuss this service
                        <ArrowRight className="h-4 w-4" />
                      </a>

                    </div>
                  </article>
                );
              })}

            </div>
          </div>
        </div>

        {/* PREVIOUS AND NEXT CONTROLS */}
        <div className="services-carousel-controls mt-8 flex items-center justify-center gap-5">

          <button
            type="button"
            onClick={previousCard}
            aria-label="Previous service"
            className="services-nav-button"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={nextCard}
            aria-label="Next service"
            className="services-nav-button"
          >
            <span>Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <span className="h-px w-16 bg-neutral-300" />
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            Discover what I can build
          </p>
        </div>

        {/* BOTTOM CONTACT CARD */}
        <a
          href="#contact"
          className="mt-12 flex min-h-[180px] flex-col items-start justify-between rounded-2xl bg-ink p-8 text-white transition-colors hover:bg-ink-soft sm:flex-row sm:items-center"
        >
          <p className="max-w-[16rem] font-display text-2xl font-semibold leading-snug tracking-tight">
            Have something else in mind?
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium sm:mt-0">
            Let's discuss it
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </a>

      </div>
    </section>
  );
}
