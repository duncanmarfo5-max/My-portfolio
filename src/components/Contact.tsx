import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '@/config/site';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMessage('Please fill in every field before sending.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.slice(0, 120),
          email: email.slice(0, 254),
          subject: subject.slice(0, 200),
          message: message.slice(0, 5000),
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'Your message could not be sent right now. Please try again.');
      }

      setStatus('sent');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Your message could not be sent right now. Please try again, or email me directly.'
      );
    }
  }

  return (
    <section id="contact" className="bg-ink py-24 text-white sm:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${visible ? 'reveal-visible' : 'reveal'}`}
      >
        <h2 className="max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Have a project in mind?
          <br />
          <span className="text-neutral-400">Let&apos;s build something great.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div className="space-y-10">
            <ul className="space-y-6 text-sm">
              <li>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Email</p>
                {profile.email ? (
                  <a href={`mailto:${profile.email}`} className="mt-1 inline-flex items-center gap-2 text-base text-white transition-colors hover:text-neutral-300">
                    <Mail className="h-4 w-4" />{profile.email}
                  </a>
                ) : <span className="mt-1 block text-sm text-neutral-400">duncanmarfo5@gmail.com</span>}
              </li>
              <li>
                <p className="text-xs uppercase tracking-widest text-neutral-500">LinkedIn</p>
                {profile.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 text-base text-white transition-colors hover:text-neutral-300">
                    <Linkedin className="h-4 w-4" />View LinkedIn profile
                  </a>
                ) : <span className="mt-1 block text-sm text-neutral-400">https://www.linkedin.com/in/duncan-obeng-marfo-72b901418/</span>}
              </li>
              <li>
                <p className="text-xs uppercase tracking-widest text-neutral-500">GitHub</p>
                {profile.github ? (
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 text-base text-white transition-colors hover:text-neutral-300">
                    <Github className="h-4 w-4" />View GitHub profile
                  </a>
                ) : <span className="mt-1 block text-sm text-neutral-400">https://github.com/duncanmarfo5-max</span>}
              </li>
              <li>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Location</p>
                <span className="mt-1 inline-flex items-center gap-2 text-base text-white">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </span>
              </li>
            </ul>

            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-700 px-5 py-2.5 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                {profile.available && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
                <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${profile.available ? 'bg-emerald-400' : 'bg-neutral-500'}`} />
              </span>
              {profile.available
                ? 'Currently available for freelance projects'
                : 'Currently booked — check back soon'}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-neutral-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-xs uppercase tracking-widest text-neutral-500">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={200}
                className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-400"
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                className="mt-2 w-full resize-y rounded-lg border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-white placeholder-neutral-600 outline-none transition-colors focus:border-neutral-400"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'sent' && (
              <p role="status" className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                Your message has been sent. I will get back to you as soon as possible.
              </p>
            )}
            {status === 'error' && errorMessage && (
              <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
