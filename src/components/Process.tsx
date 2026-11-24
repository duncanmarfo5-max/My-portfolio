import { Route } from 'lucide-react';
import { process } from '@/config/site';

export default function Process() {
  return (
    <section className="bg-neutral-50 py-24 sm:py-32">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-10"
      >
        <h2 className="flex items-center gap-3 font-display text-4xl font-bold uppercase leading-none tracking-tight text-ink sm:text-5xl lg:text-6xl">
          <Route className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
          My Process
        </h2>

        <ol className="mt-14 space-y-0">
          {process.map((step, i) => (
            <li
              key={step.number}
              className="group flex items-baseline gap-6 border-t border-neutral-200 py-8 transition-colors last:border-b hover:bg-white sm:gap-10 sm:px-4"
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
