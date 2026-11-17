import { Code2 } from 'lucide-react';
import { skills } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="bg-white py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
          <Code2 className="h-3.5 w-3.5" />
          Technical Skills
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          The tools I reach for
          <br />
          every day.
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal ${visible ? 'reveal-visible' : ''} reveal-delay-${Math.min(gi + 1, 4)} border-t-2 border-neutral-900 pt-6`}
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-neutral-400 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
