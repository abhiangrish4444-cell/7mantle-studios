import { useState, type FormEvent } from 'react';
import { jobs, jobsApplyContent } from '@/mocks/jobs';

const FORM_ENDPOINT = 'https://readdy.ai/api/form/dbjou05uhn8hh61rvp00';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface ApplicationFormProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

export default function ApplicationForm({ selectedRole, onRoleChange }: ApplicationFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');
  const [messageLength, setMessageLength] = useState(0);

  const roleOptions = [...jobs.map((job) => job.title), jobsApplyContent.generalRole];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honey = String(formData.get('company_alt') ?? '').trim();
    if (honey) {
      setStatus('success');
      setFormError('');
      form.reset();
      setMessageLength(0);
      return;
    }

    setStatus('submitting');
    setFormError('');

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      if (key === 'company_alt') return;
      const str = String(value);
      if (str.trim() === '') return;
      payload.append(key, str);
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message ||
        parsed?.message ||
        parsed?.meta?.detail ||
        responseText ||
        '';

      const isSpam = /spam/i.test(serverMsg);
      const success = response.ok && parsed?.code === 'OK' && !isSpam;

      if (success) {
        setStatus('success');
        setFormError('');
        form.reset();
        setMessageLength(0);
        onRoleChange('');
      } else {
        setStatus('error');
        setFormError(
          isSpam
            ? 'Your application could not be sent. Please check your details and try again.'
            : serverMsg || 'Something went wrong. Please try again in a moment.',
        );
      }
    } catch {
      setStatus('error');
      setFormError('Network error. Please check your connection and try again.');
    }
  };

  const inputClasses =
    'w-full min-w-0 rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 placeholder:text-foreground-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200';

  const labelClasses =
    'text-xs font-semibold uppercase tracking-[0.14em] text-foreground-700';

  return (
    <section id="apply" className="w-full scroll-mt-24 bg-background-50 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
              <span className="h-1 w-8 bg-accent-500"></span>
              {jobsApplyContent.eyebrow}
            </p>
            <h2 className="text-4xl leading-none tracking-[0.02em] text-foreground-950 sm:text-5xl md:text-6xl">
              {jobsApplyContent.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-600">
              {jobsApplyContent.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 rounded-lg border border-background-200 bg-background-100 p-5">
              <a
                href={`mailto:${jobsApplyContent.email}`}
                className="flex items-center gap-3 text-sm text-foreground-900 transition-colors hover:text-primary-700"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background-50 text-primary-800">
                  <i className="ri-mail-line"></i>
                </span>
                {jobsApplyContent.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground-600">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background-50 text-secondary-800">
                  <i className="ri-map-pin-2-line"></i>
                </span>
                Romaa Paradise, Kuthambakkam, Chennai - 600124
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="w-full rounded-lg border border-background-200 bg-background-100 p-6 md:p-9">
              {status === 'success' ? (
                <div className="flex flex-col items-start gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-xl text-foreground-950">
                    <i className="ri-check-line"></i>
                  </span>
                  <div>
                    <h3 className="text-2xl uppercase tracking-wide text-foreground-950">
                      Application received
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground-600">
                      Thanks for taking the time. Our team reviews every application and will get in
                      touch if there is a fit — usually within two weeks.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-foreground-900/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-900 transition-colors hover:border-primary-500"
                  >
                    Send another
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              ) : (
                <form
                  data-readdy-form
                  id="job-application-form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <div className="flex min-w-0 flex-col gap-2">
                    <label htmlFor="job-name" className={labelClasses}>
                      Full name
                    </label>
                    <input
                      id="job-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex min-w-0 flex-col gap-2">
                    <label htmlFor="job-email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="job-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@studio.com"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex min-w-0 flex-col gap-2">
                    <label htmlFor="job-role" className={labelClasses}>
                      Role
                    </label>
                    <select
                      id="job-role"
                      name="role"
                      required
                      value={selectedRole}
                      onChange={(event) => onRoleChange(event.target.value)}
                      className={inputClasses}
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex min-w-0 flex-col gap-2">
                    <label htmlFor="job-portfolio" className={labelClasses}>
                      Portfolio / showreel
                    </label>
                    <input
                      id="job-portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="https://"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">
                    <div className="flex items-center justify-between gap-4">
                      <label htmlFor="job-message" className={labelClasses}>
                        About you
                      </label>
                      <span className="text-xs text-foreground-500">{messageLength}/500</span>
                    </div>
                    <textarea
                      id="job-message"
                      name="message"
                      required
                      maxLength={500}
                      rows={5}
                      placeholder="Tell us about your experience, the tools you work in and what you would love to work on…"
                      onChange={(event) => setMessageLength(event.target.value.length)}
                      className={`${inputClasses} resize-none`}
                    ></textarea>
                  </div>

                  <input
                    className="field-company-alt"
                    type="text"
                    name="company_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                  />

                  {status === 'error' && formError ? (
                    <p className="sm:col-span-2 rounded-md border border-accent-300 bg-accent-50 px-4 py-3 text-sm text-accent-800">
                      {formError}
                    </p>
                  ) : null}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <i className="ri-loader-4-line animate-spin"></i>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send application
                          <i className="ri-arrow-right-line"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}