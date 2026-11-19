import { Link } from 'react-router-dom';
import {
  contactInfo,
  footerInfo,
  siteLogo,
  workWithUsContent,
} from '@/mocks/home';

export default function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-background-900 text-background-100">
      <div
        className="film-grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
        aria-hidden="true"
      ></div>
      <div className="relative w-full px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <img
              src={siteLogo}
              alt="7Mantle Studios logo"
              className="h-9 w-auto object-contain brightness-0 invert md:h-11"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-background-100/80">
              {footerInfo.copyright}
            </p>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="7Mantle Studios on LinkedIn"
              className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-background-100/30 text-background-100 transition-colors hover:border-primary-400 hover:text-primary-300"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>

          <div>
            <h4 className="text-lg uppercase tracking-wide text-background-50">
              Contact Us
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="ri-mail-line mt-0.5 text-primary-400"></i>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-primary-300"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-2-line mt-0.5 text-primary-400"></i>
                <span className="text-background-100/85">{contactInfo.address}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center whitespace-nowrap rounded-full border border-background-100/40 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-background-50 transition-colors hover:border-primary-400 hover:text-primary-300"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h4 className="text-lg uppercase tracking-wide text-background-50">
              {workWithUsContent.heading}
            </h4>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background-100/85">
              {workWithUsContent.text}
            </p>
            <Link
              to="/jobs"
              className="mt-7 inline-flex items-center whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400"
            >
              View Jobs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}