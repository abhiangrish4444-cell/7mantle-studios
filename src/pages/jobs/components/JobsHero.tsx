import { jobsHero } from '@/mocks/jobs';

export default function JobsHero() {
  return (
    <section className="relative flex min-h-[420px] w-full items-end overflow-hidden pb-0 md:min-h-[540px]">
      <div className="absolute inset-0 bg-background-900">
        <img
          src={jobsHero.backgroundImage}
          alt="7Mantle Studios careers hero background"
          className="h-full w-full object-cover object-top opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-950/45 via-background-900/45 to-background-50"></div>

      <div
        className="film-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        aria-hidden="true"
      ></div>
      <div
        className="hero-vignette pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 w-full px-4 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
        <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-400">
          <span className="h-1 w-8 bg-primary-400"></span>
          {jobsHero.eyebrow}
        </p>
        <h1 className="text-6xl leading-none tracking-[0.02em] text-background-50 sm:text-7xl md:text-9xl">
          {jobsHero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-background-100/80 md:text-base">
          {jobsHero.subtitle}
        </p>
      </div>
    </section>
  );
}