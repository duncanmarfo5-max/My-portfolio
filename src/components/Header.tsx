
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile, navLinks } from '@/config/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((target): target is HTMLElement => Boolean(target));

    if (!targets.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    `relative whitespace-nowrap py-1 text-sm font-medium transition-colors duration-200 hover:text-black ${
      activeSection === href
        ? 'text-black after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:animate-nav-underline after:bg-black'
        : 'text-neutral-500'
    }`;

  return (
    <header className="fixed inset-x-0 top-3 z-[100] px-3 sm:top-4 sm:px-6">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between border-0 bg-transparent px-2 py-2 sm:px-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${profile.name} home`}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black font-display text-sm font-bold text-white transition-transform duration-300 hover:rotate-[-6deg] hover:scale-105 sm:h-11 sm:w-11">
            {profile.initials}
          </span>

          <span className="font-display text-sm font-bold uppercase tracking-tight text-black sm:text-base">
            {profile.brand}
          </span>
        </a>

        {/* Desktop Navigation Pill */}
        <nav
          className={`hidden items-center gap-6 rounded-full border px-7 py-3 backdrop-blur-xl transition-all duration-300 lg:flex ${
            scrolled
              ? 'border-black/10 bg-white/70 shadow-md'
              : 'border-white/30 bg-white/20 shadow-sm'
          }`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.href ? 'page' : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right-side Actions */}
        <div className="flex items-center gap-2">

          {/* GitHub */}
          <a
            href="https://github.com/duncanmarfo5-max"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-black px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg sm:inline-flex"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/duncan-obeng-marfo-72b901418/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-black px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg sm:inline-flex"
          >
            LinkedIn
          </a>

          {/* Hire Me */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-black px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg sm:inline-flex"
          >
            Hire Me
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white/70 text-black backdrop-blur-md transition-transform duration-200 active:scale-95 lg:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="mobile-nav-enter mx-auto mt-2 max-w-[1500px] rounded-2xl border border-neutral-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-neutral-100 ${
                    activeSection === link.href
                      ? 'bg-neutral-100 text-black'
                      : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white transition-transform active:scale-[.99]"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
