import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-image-section relative isolate overflow-hidden bg-[#f3f3f2] text-neutral-950"
      aria-label="Software Engineer portfolio introduction"
    >
      <video
        className="hero-image-artwork absolute inset-0 h-full w-full"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noremoteplayback noplaybackrate"
        preload="auto"
        poster="/hero-clean.png"
        aria-label="Animated software engineering typography"
        tabIndex={-1}
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      >
        <source src="/hero-text-morph-boomerang-muted.mp4" type="video/mp4" />
      </video>

      <a
        href="#about"
        className="hero-image-scroll group absolute bottom-6 right-6 z-20 flex flex-col items-center gap-2 rounded-full bg-white/90 px-4 py-3 text-xs font-semibold text-neutral-950 shadow-md backdrop-blur-sm transition hover:bg-white sm:bottom-8 sm:right-8 sm:px-5 sm:py-3 sm:text-sm"
        aria-label="Scroll down to About section"
      >
        <span>Scroll down</span>
        <ArrowDown className="h-5 w-5 animate-bounce stroke-[1.6] transition-transform group-hover:translate-y-1" />
      </a>
    </section>
  );
}
