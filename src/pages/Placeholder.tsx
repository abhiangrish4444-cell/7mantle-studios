import { Link } from 'react-router-dom';
import SiteHeader from '@/components/feature/SiteHeader';
import SiteFooter from '@/components/feature/SiteFooter';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-50">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-32 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-600">
            Coming Soon
          </span>
          <h1 className="mt-4 text-4xl leading-none tracking-[0.02em] text-foreground-950 md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground-600 md:text-base">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400 sm:w-auto"
            >
              <i className="ri-arrow-left-line"></i>
              Back Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-foreground-900/25 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-900 transition-colors hover:border-primary-500 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}