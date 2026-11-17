import { Github, Linkedin, Mail } from 'lucide-react';
import { profile, navLinks } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-ink py-12 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="inline-flex items-center gap-3" aria-label="Back to top">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white font-display text-sm font-semibold text-ink">
              {profile.initials}
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-semibold text-white">{profile.name}</span>
              <span className="text-xs tracking-wide text-neutral-500">{profile.brand}</span>
            </span>
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-3">
            {profile.email && <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition-colors hover:border-white hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </li>}
            {profile.linkedin && <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition-colors hover:border-white hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </li>}
            {profile.github && <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition-colors hover:border-white hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </li>}
          </ul>
        </div>

        <p className="text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
