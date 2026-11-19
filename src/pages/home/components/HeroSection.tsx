import { Link } from 'react-router-dom';
import { heroContent } from '@/mocks/home';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden bg-background-950">
        <iframe
          src="https://player.vimeo.com/video/1036613701?background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0"
          title="7Mantle Studios demo reel"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: '100vw', height: '56.25vw', minWidth: '177.78vh', minHeight: '100vh' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background-950/60 via-background-900/50 to-background-950/70"></div>

      <div
        className="film-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        aria-hidden="true"
      ></div>
      <div
        className="hero-vignette pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 w-full px-4 pt-24 text-center md:px-8 md:pt-20">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-background-100/30 bg-background-50/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-background-100 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400"></span>
          {heroContent.eyebrow}
        </p>

        <h1 className="mx-auto max-w-5xl text-4xl leading-[0.95] tracking-[0.02em] text-background-50 sm:text-5xl md:text-7xl lg:text-8xl">
          {heroContent.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-background-100/90 md:mt-8 md:text-base">
          {heroContent.subtitle}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to={heroContent.primaryCta.path}
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400 sm:w-auto"
          >
            {heroContent.primaryCta.label}
            <i className="ri-arrow-right-line"></i>
          </Link>
          <Link
            to={heroContent.secondaryCta.path}
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-100/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-background-50 transition-colors hover:border-primary-400 hover:text-primary-300 sm:w-auto"
          >
            {heroContent.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-background-100/70 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <i className="ri-arrow-down-line animate-bounce text-lg"></i>
      </div>
    </section>
  );
}