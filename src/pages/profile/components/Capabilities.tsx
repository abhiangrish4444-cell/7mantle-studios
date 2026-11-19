import {
  capabilities,
  capabilitiesContent,
  pipelineTools,
} from '@/mocks/profile';
import Reveal from '@/components/base/Reveal';

export default function Capabilities() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
                {capabilitiesContent.eyebrow}
              </p>
              <h2 className="text-4xl leading-none tracking-[0.02em] text-foreground-950 sm:text-5xl md:text-7xl">
                {capabilitiesContent.heading}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-600 md:pb-2 md:text-right">
              {capabilitiesContent.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-5">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 70}>
              <div className="group flex h-full min-h-[200px] flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-colors hover:border-primary-400">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-800 transition-colors group-hover:bg-primary-500 group-hover:text-foreground-950">
                  <i className={`${capability.icon} text-xl`}></i>
                </span>
                <h3 className="mt-6 text-lg uppercase tracking-wide text-foreground-950 md:text-xl">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                  {capability.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-5 rounded-lg border border-background-200 bg-background-50 p-6 md:mt-14 md:flex-row md:items-center md:gap-8">
            <p className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-foreground-800">
              <i className="ri-tools-line text-accent-600"></i>
              Our Pipeline
            </p>
            <div className="flex flex-wrap gap-2">
              {pipelineTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-secondary-200 bg-secondary-100 px-3.5 py-1.5 text-xs font-medium text-secondary-900"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}