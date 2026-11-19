import { contactReasons } from '@/mocks/contact';
import Reveal from '@/components/base/Reveal';

export default function ContactReasons() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
            <span className="h-1 w-8 bg-accent-500"></span>
            How we can help
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactReasons.map((reason, index) => (
            <Reveal key={reason.id} delay={index * 90}>
              <div className="group flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 md:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-2xl text-secondary-800 transition-colors group-hover:bg-primary-500 group-hover:text-foreground-950">
                  <i className={reason.icon}></i>
                </span>
                <h3 className="mt-5 text-xl uppercase tracking-wide text-foreground-950">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}