import { jobsPerks } from '@/mocks/jobs';
import Reveal from '@/components/base/Reveal';

export default function WhyJoin() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
                <span className="h-1 w-8 bg-accent-500"></span>
                {jobsPerks.eyebrow}
              </p>
              <h2 className="max-w-lg text-4xl leading-none tracking-[0.02em] text-foreground-950 sm:text-5xl md:text-6xl">
                {jobsPerks.heading}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-600 md:pb-2 md:text-right">
              {jobsPerks.text}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {jobsPerks.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <div className="group flex h-full min-h-[210px] flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-colors hover:border-primary-400">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl text-primary-800 transition-colors group-hover:bg-primary-500 group-hover:text-foreground-950">
                  <i className={item.icon}></i>
                </span>
                <h3 className="mt-6 text-base uppercase tracking-wide text-foreground-950 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}