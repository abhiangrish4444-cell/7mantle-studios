import { Link } from 'react-router-dom';
import { services, whatWeDoContent } from '@/mocks/home';
import Reveal from '@/components/base/Reveal';

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl leading-none tracking-[0.02em] text-foreground-950 sm:text-5xl md:text-7xl">
              {whatWeDoContent.heading}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-600 md:pb-2 md:text-right">
              {whatWeDoContent.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <Link
                to="/projects"
                className="group flex h-full min-h-[220px] flex-col justify-between rounded-lg border border-background-200 bg-background-50 p-6 transition-colors hover:border-primary-400"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-foreground-950">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </div>
                <div>
                  <h3 className="text-lg uppercase tracking-wide text-foreground-950 md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}