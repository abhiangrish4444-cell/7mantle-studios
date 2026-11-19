import { useState, type FormEvent } from 'react';
import { contactIntro, contactSubjects } from '@/mocks/contact';

const FORM_ENDPOINT = 'https://readdy.ai/api/form/dal8s1eaff1mn7jrbusg';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');
  const [messageLength, setMessageLength] = useState(0);

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
      const success =
        response.ok && parsed?.code === 'OK' && !isSpam;

      if (success) {
        setStatus('success');
        setFormError('');
        form.reset();
        setMessageLength(0);
      } else {
        setStatus('error');
        setFormError(
          isSpam
            ? 'Your message could not be sent. Please check your details and try again.'
            : serverMsg || 'Something went wrong. Please try again in a moment.',
        );
      }
    } catch {
      setStatus('error');
      setFormError('Network error. Please check your connection and try again.');
    }
  };

  const inputClasses =
    'w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-950 placeholder:text-foreground-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200';

  return (
    <div className="w-full rounded-lg border border-background-200 bg-background-100 p-6 md:p-9">
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
        {contactIntro.eyebrow}
      </span>
      <h2 className="mt-3 text-3xl leading-tight tracking-[0.01em] text-foreground-950 md:text-4xl">
        {contactIntro.heading}
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground-600">
        {contactIntro.text}
      </p>

      {status === 'success' ? (
        <div className="mt-8 flex items-start gap-4 rounded-lg border border-primary-300 bg-primary-50 p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xl text-foreground-950">
            <i className="ri-check-line"></i>
          </span>
          <div>
            <h3 className="text-xl uppercase tracking-wide text-foreground-950">
              Message sent
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-foreground-600">
              Thanks for reaching out. Our team will get back to you within two
              working days.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-foreground-900/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-900 transition-colors hover:border-primary-500"
            >
              Send another
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      ) : (
        <form
          data-readdy-form
          id="contact-form"
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-700"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@studio.com"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="company"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-700"
            >
              Company / Studio
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Optional"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-700"
            >
              What is this about?
            </label>
            <select id="subject" name="subject" required defaultValue="" className={inputClasses}>
              <option value="" disabled>
                Select a topic
              </option>
              {contactSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground-700"
              >
                Project details
              </label>
              <span className="text-xs text-foreground-500">
                {messageLength}/500
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              required
              maxLength={500}
              rows={5}
              placeholder="Tell us about your project, timelines and what you need help with…"
              onChange={(e) => setMessageLength(e.target.value.length)}
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
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'submitting' ? (
                <>
                  <i className="ri-loader-4-line animate-spin"></i>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <i className="ri-arrow-right-line"></i>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}