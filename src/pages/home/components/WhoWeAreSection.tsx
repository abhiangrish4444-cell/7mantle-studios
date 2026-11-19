import { whoWeAreContent } from '@/mocks/home';
import Reveal from '@/components/base/Reveal';

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-background-50 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <p className="ml-auto max-w-2xl text-right text-lg font-semibold uppercase leading-snug tracking-wide text-foreground-900 md:text-2xl">
            {whoWeAreContent.intro}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 text-6xl leading-none tracking-[0.02em] text-foreground-950 sm:text-7xl md:mt-10 md:text-9xl">
            <span className="text-outline">{whoWeAreContent.headingOutline} </span>
            {whoWeAreContent.headingSolid}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
          {whoWeAreContent.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 100}>
              <p className="text-sm leading-relaxed text-foreground-700 md:text-base">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}