import './hero-video.css';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-video-section"
      aria-label="Software Engineer portfolio introduction"
    >
      <video
        className="hero-video"
        src="/hero-text-morph-boomerang-muted.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
        aria-hidden="true"
      />
    </section>
  );
}
