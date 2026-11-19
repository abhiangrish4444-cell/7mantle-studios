import { milestones, studioStory } from '@/mocks/profile';
import Reveal from '@/components/base/Reveal';

export default function StudioStory() {
  return (
    <section className="w-full bg-background-50 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground-500">
            Who We Are
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="text-5xl leading-none tracking-[0.02em] text-foreground-950 sm:text-6xl md:text-8xl">
            <span className="text-outline">{studioStory.headingOutline} </span>
            {studioStory.headingSolid}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <Reveal>
              <p className="text-lg font-semibold uppercase leading-snug tracking-wide text-foreground-900 md:text-2xl">
                {studioStory.lead}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {studioStory.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 90}>
                  <p className="text-sm leading-relaxed text-foreground-700 md:text-base">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-8 flex items-center gap-4 border-t border-background-200 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-800">
                  <i className="ri-quill-pen-line text-xl"></i>
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground-950">
                    {studioStory.founderName}
                  </p>
                  <p className="text-xs uppercase tracking-[0.14em] text-foreground-500">
                    {studioStory.founderRole}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-background-200">
                <img
                  src={studioStory.image}
                  alt="Inside the 7Mantle Studios workspace"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 flex divide-x divide-background-200 rounded-lg border border-background-200 bg-background-50 p-5 sm:left-6 sm:right-auto sm:gap-8">
                {studioStory.badges.map((badge) => (
                  <div key={badge.label} className="flex flex-1 flex-col gap-1 px-3 first:pl-0 last:pr-0 sm:flex-none">
                    <span className="font-heading text-2xl leading-none text-accent-600 md:text-3xl">
                      {badge.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-foreground-500">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-20 grid grid-cols-1 gap-0 border-t border-background-200 sm:grid-cols-2 lg:grid-cols-5 md:mt-24">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col gap-3 border-b border-background-200 py-7 lg:border-b-0 lg:pr-6 ${
                  index !== 0 ? 'lg:border-l lg:pl-6' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                  <span className="font-heading text-2xl leading-none text-foreground-950">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-800">
                  {milestone.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground-600">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}