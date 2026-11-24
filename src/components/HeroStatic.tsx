import './hero.css';

export default function Hero() {
  return (
    <section id="home" className="static-hero" aria-label="Software Engineer portfolio introduction">
      <svg className="static-hero-arcs" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true">
        <path d="M578 0 C566 150 480 300 230 395 C120 435 50 455 0 470" />
        <path d="M1672 578 C1520 612 1380 690 1255 790" />
      </svg>

      <svg className="static-hero-title" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true">
        <text x="62" y="487" fontSize="300" textLength="1550" lengthAdjust="spacingAndGlyphs">SOFTWARE</text>
        <text x="62" y="709" fontSize="300" textLength="1550" lengthAdjust="spacingAndGlyphs">ENGINEER</text>
      </svg>

      <div className="static-hero-intro">
        <span>Freelance</span>
        <span>Software Engineer &amp; Developer</span>
      </div>

      <img
        className="static-hero-portrait"
        src="/duncan-portrait.webp"
        alt="Portrait"
        fetchPriority="high"
        draggable={false}
      />

      <div className="static-hero-skills" aria-label="Specialties">
        <div>Web Development</div>
        <div>Full-Stack Development</div>
        <div>Problem Solving</div>
        <div>Innovative Solutions</div>
      </div>
    </section>
  );
}
