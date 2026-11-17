import { ArrowRight, Briefcase } from 'lucide-react';
import { services } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
              <Briefcase className="h-3.5 w-3.5" />
              Freelance Services
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              What I can build
              <br />
              for you.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              style={{ transitionDelay: `${Math.min(services.indexOf(service), 5) * 90}ms` }}
              className={`service-reveal group bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-50 hover:shadow-xl ${visible ? 'service-reveal-visible' : ''}`}
            >
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-ink-mute">
                {String(services.indexOf(service) + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a
            href="#contact"
            className={`service-reveal group flex min-h-[220px] flex-col items-start justify-between bg-ink p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:bg-ink-soft hover:shadow-xl ${visible ? 'service-reveal-visible' : ''}`}
            style={{ transitionDelay: `${services.length * 90}ms` }}
          >
            <p className="max-w-[16rem] font-display text-2xl font-semibold leading-snug tracking-tight">
              Have something else in mind?
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              Let&apos;s discuss it
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
