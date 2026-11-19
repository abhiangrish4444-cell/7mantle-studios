import { Link } from 'react-router-dom';
import { profileCta } from '@/mocks/profile';
import Reveal from '@/components/base/Reveal';

export default function ProfileCta() {
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
              {profileCta.heading}
            </h2>
            <div className="flex max-w-sm flex-col items-start gap-6 md:items-end md:text-right">
              <p className="text-sm leading-relaxed text-background-100/85">
                {profileCta.text}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={profileCta.primaryCta.path}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400"
                >
                  {profileCta.primaryCta.label}
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link
                  to={profileCta.secondaryCta.path}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-100/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-background-50 transition-colors hover:border-primary-400 hover:text-primary-300"
                >
                  {profileCta.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}