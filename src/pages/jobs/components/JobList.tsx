import { useState } from 'react';
import { jobs, jobsIntro, jobsApplyContent } from '@/mocks/jobs';
import JobAccordionItem from './JobAccordionItem';
import Reveal from '@/components/base/Reveal';

interface JobListProps {
  onApply: (role: string) => void;
}

export default function JobList({ onApply }: JobListProps) {
  const [openId, setOpenId] = useState<string | null>(jobs[0]?.id ?? null);

  const handleApply = (role: string) => {
    onApply(role);
    const target = document.getElementById('apply');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-background-50 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-background-200 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
                <span className="h-1 w-8 bg-accent-500"></span>
                {jobsIntro.eyebrow}
              </p>
              <h2 className="text-4xl leading-none tracking-[0.02em] text-foreground-950 sm:text-5xl md:text-6xl">
                {jobsIntro.heading}
              </h2>
            </div>
            <div className="flex flex-col gap-3 md:max-w-sm md:items-end md:text-right">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-background-300 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground-700">
                <i className="ri-flashlight-line text-primary-700"></i>
                {jobs.length} open roles
              </span>
              <p className="text-sm leading-relaxed text-foreground-600">
                {jobsIntro.text}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 md:mt-10">
          {jobs.map((job, index) => (
            <Reveal key={job.id} delay={index * 70}>
              <JobAccordionItem
                job={job}
                index={index}
                isOpen={openId === job.id}
                onToggle={() => setOpenId(openId === job.id ? null : job.id)}
                onApply={handleApply}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-4 rounded-lg border border-background-200 bg-background-100 p-6 sm:flex-row sm:items-center sm:justify-between md:mt-12 md:p-7">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-lg text-secondary-800">
                <i className="ri-mail-send-line"></i>
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground-900">
                  {jobsApplyContent.note}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                  Send your reel and CV to {jobsApplyContent.email} and we will take a look.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${jobsApplyContent.email}`}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-foreground-900/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-900 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-foreground-950"
            >
              Email us
              <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}