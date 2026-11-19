import { Link } from 'react-router-dom';
import { homeProjects } from '@/mocks/home';
import Reveal from '@/components/base/Reveal';

export default function ProjectsSection() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-5xl leading-none tracking-[0.02em] text-foreground-950 sm:text-6xl md:text-8xl">
              PROJECTS
            </h2>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-foreground-600">
              A selection of films, series and interactive worlds brought to life by our team.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          {homeProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <Link
                to="/projects"
                className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-background-300"
              >
                <img
                  src={project.colorImage}
                  alt={`${project.title} still`}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={project.bwImage}
                  alt={`${project.title} black and white still`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center px-8 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                >
                  <span className="text-center text-lg font-light uppercase leading-relaxed tracking-[0.3em] text-background-50/25 md:text-2xl">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground-950/85 via-foreground-950/40 to-transparent p-5 md:p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-300/90">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-xl text-background-50/70 md:text-2xl">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-foreground-900/25 px-8 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground-900 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-foreground-950"
            >
              More Projects
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}