import { UserRound, MapPin } from 'lucide-react';
import { profile } from '@/config/site';

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-24 sm:py-32">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-10"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <h2 className="flex items-center gap-3 font-display text-4xl font-bold uppercase leading-none tracking-tight text-ink sm:text-5xl lg:text-6xl">
              <UserRound className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
              About Me
            </h2>
            <div className="mt-8 flex items-center gap-2 text-sm text-ink-mute">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            <div className="mb-8">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Hi, I&apos;m
              </p>
              <h3 className="mt-1 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {profile.name}
              </h3>
            </div>
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
