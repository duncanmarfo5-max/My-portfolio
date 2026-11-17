import { UserRound, MapPin } from 'lucide-react';
import { profile } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="bg-neutral-50 py-24 sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-mute">
              <UserRound className="h-3.5 w-3.5" />
              About Me
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Building useful things
              <br />
              with care and clarity.
            </h2>
            <div className="mt-8 flex items-center gap-2 text-sm text-ink-mute">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'text-ink' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
