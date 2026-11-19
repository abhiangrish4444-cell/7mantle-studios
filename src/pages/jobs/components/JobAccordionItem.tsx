import type { Job } from '@/mocks/jobs';

interface JobAccordionItemProps {
  job: Job;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onApply: (role: string) => void;
}

export default function JobAccordionItem({
  job,
  index,
  isOpen,
  onToggle,
  onApply,
}: JobAccordionItemProps) {
  return (
    <article
      className={`overflow-hidden rounded-lg border bg-background-50 transition-colors duration-300 ${
        isOpen ? 'border-primary-400' : 'border-background-200 hover:border-background-400'
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`job-panel-${job.id}`}
          className="flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left md:gap-6 md:px-7 md:py-6"
        >
          <span className="font-heading text-sm leading-none text-primary-700 md:text-base">
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block font-heading text-xl uppercase leading-tight tracking-[0.02em] text-foreground-950 md:text-3xl">
              {job.title}
            </span>
            <span className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-background-200 bg-background-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-700">
                <i className="ri-briefcase-4-line text-secondary-700"></i>
                {job.experience}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary-200 bg-secondary-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-900">
                <i className="ri-map-pin-line text-secondary-700"></i>
                {job.location}
              </span>
              <span className="hidden items-center gap-1.5 rounded-full border border-background-200 bg-background-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground-700 sm:inline-flex">
                <i className="ri-time-line text-accent-600"></i>
                {job.type}
              </span>
            </span>
          </span>

          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
              isOpen
                ? 'rotate-45 border-primary-500 bg-primary-500 text-foreground-950'
                : 'border-background-300 text-foreground-700'
            }`}
            aria-hidden="true"
          >
            <i className="ri-add-line"></i>
          </span>
        </button>
      </h3>

      <div
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div id={`job-panel-${job.id}`} className="border-t border-background-200">
            <div className="grid grid-cols-1 gap-8 px-5 py-7 md:grid-cols-3 md:gap-8 md:px-7 md:py-9">
              {job.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="text-sm uppercase tracking-[0.16em] text-foreground-950">
                    {section.heading}
                  </h4>
                  <span className="mt-3 block h-px w-8 bg-accent-500"></span>
                  <ul className="mt-4 space-y-3">
                    {section.points.map((point, i) => (
                      <li
                        key={`${section.heading}-${i}`}
                        className="flex gap-2.5 text-sm leading-relaxed text-foreground-600"
                      >
                        <i className="ri-checkbox-blank-circle-fill mt-1.5 shrink-0 text-[5px] text-primary-600"></i>
                        <span>
                          {point.label ? (
                            <strong className="font-semibold text-foreground-900">
                              {point.label}:{' '}
                            </strong>
                          ) : null}
                          {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-background-200 bg-background-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
              <p className="text-xs leading-relaxed text-foreground-600">
                Ready to show us your work? Applications for this role stay open year round.
              </p>
              <button
                type="button"
                onClick={() => onApply(job.title)}
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400"
              >
                Apply for this role
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}