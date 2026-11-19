import { Link } from 'react-router-dom';
import { projectsCta } from '@/mocks/projects';
import Reveal from '@/components/base/Reveal';

export default function ProjectsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-background-900 py-16 md:py-24">
      <div
        className="film-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        aria-hidden="true"
      ></div>
      <div className="relative w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-5xl leading-none tracking-[0.02em] text-background-50 sm:text-6xl md:text-7xl">
              {projectsCta.heading}
            </h2>
            <div className="flex max-w-sm flex-col items-start gap-6 md:items-end md:text-right">
              <p className="text-sm leading-relaxed text-background-100/85">
                {projectsCta.text}
              </p>
              <Link
                to={projectsCta.ctaPath}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400"
              >
                {projectsCta.ctaLabel}
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 h-px w-full bg-background-100/15"></div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '40+', label: 'Projects Delivered' },
              { value: '12+', label: 'Years in Animation' },
              { value: '3', label: 'Continents Active' },
              { value: '2D & 3D', label: 'Animation Expertise' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl leading-none text-primary-300 md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-background-100/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}