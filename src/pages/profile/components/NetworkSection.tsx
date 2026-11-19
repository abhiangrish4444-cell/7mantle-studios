import { Link } from 'react-router-dom';
import { networkContent } from '@/mocks/profile';
import Reveal from '@/components/base/Reveal';

export default function NetworkSection() {
  return (
    <section className="w-full bg-background-50 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground-500">
                {networkContent.eyebrow}
              </p>
              <h2 className="text-4xl leading-none tracking-[0.02em] text-foreground-950 sm:text-5xl md:text-7xl">
                <span className="text-outline">{networkContent.headingOutline} </span>
                {networkContent.headingSolid}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-600 md:pb-2 md:text-right">
              {networkContent.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-background-200 bg-background-100 p-6 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
            <p className="max-w-2xl text-base font-semibold uppercase leading-snug tracking-wide text-foreground-900 md:text-xl">
              {networkContent.statement}
            </p>
            <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-secondary-200 bg-secondary-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-900">
              <i className="ri-shield-check-line text-sm"></i>
              Vetted network
            </span>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {networkContent.layers.map((layer, index) => (
            <Reveal key={layer.id} delay={index * 70}>
              <article className="group flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-colors hover:border-primary-400 md:p-7 lg:min-h-[430px]">
                <div className="flex items-start justify-between">
                  <span className="font-heading text-4xl leading-none text-background-300">
                    {layer.index}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-800 transition-colors group-hover:bg-primary-500 group-hover:text-foreground-950">
                    <i className={`${layer.icon} text-lg`}></i>
                  </span>
                </div>

                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-600">
                  {layer.role}
                </p>
                <h3 className="mt-2 text-2xl uppercase tracking-wide text-foreground-950 md:text-3xl">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                  {layer.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex items-end gap-3 border-t border-background-200 pt-5">
                    <span className="font-heading text-4xl leading-none text-foreground-950">
                      {layer.count}
                    </span>
                    <span className="pb-1 text-[11px] uppercase leading-tight tracking-[0.14em] text-foreground-500">
                      {layer.countLabel}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-background-200 bg-background-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-foreground-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-5 lg:grid-cols-2 lg:gap-5">
          <Reveal>
            <div className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl uppercase tracking-wide text-foreground-950 md:text-2xl">
                  {networkContent.regionsHeading}
                </h3>
                <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.16em] text-foreground-500">
                  {networkContent.regionsNote}
                </span>
              </div>
              <div className="mt-6 border-t border-background-200">
                {networkContent.regions.map((region) => (
                  <div
                    key={region.city}
                    className="flex items-center justify-between gap-4 border-b border-background-200 py-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary-500"></span>
                      <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-foreground-900">
                        {region.city}
                      </span>
                      <span className="truncate text-xs text-foreground-500">
                        {region.focus}
                      </span>
                    </div>
                    <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-foreground-500">
                      {region.zone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6 md:p-8">
              <h3 className="text-xl uppercase tracking-wide text-foreground-950 md:text-2xl">
                {networkContent.processHeading}
              </h3>
              <div className="mt-6 flex flex-col gap-5">
                {networkContent.processSteps.map((step) => (
                  <div key={step.index} className="flex gap-4 border-t border-background-200 pt-4 first:border-t-0 first:pt-0">
                    <span className="font-heading text-lg leading-none text-accent-600">
                      {step.index}
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-foreground-900">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-lg border border-background-200 bg-background-100 p-6 md:mt-14 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-800">
                <i className="ri-team-line text-xl"></i>
              </span>
              <div>
                <p className="max-w-xl text-sm leading-relaxed text-foreground-700">
                  {networkContent.calloutText}
                </p>
                <p className="mt-1 max-w-xl text-xs leading-relaxed text-foreground-500">
                  {networkContent.calloutNote}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-background-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-background-50 transition-colors hover:bg-background-800"
              >
                Join the Network
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground-800 transition-colors hover:border-primary-400"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}