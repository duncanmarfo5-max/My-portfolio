import { Route } from 'lucide-react';
import { process } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

export default function Process() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-neutral-50 py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
          <Route className="h-3.5 w-3.5" />
          Development Process
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          A clear way of working,
          <br />
          from idea to launch.
        </h2>

        <ol className="mt-14 space-y-0">
          {process.map((step, i) => (
            <li
              key={step.number}
              className={`reveal ${visible ? 'reveal-visible' : ''} reveal-delay-${Math.min(i + 1, 4)} group flex items-baseline gap-6 border-t border-neutral-200 py-8 transition-colors last:border-b hover:bg-white sm:gap-10 sm:px-4`}
            >
              <span className="font-display text-sm font-semibold text-ink-mute transition-colors group-hover:text-ink sm:text-base">
                {step.number}
              </span>
              <h3 className="w-40 shrink-0 font-display text-xl font-semibold tracking-tight text-ink sm:w-64 sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
