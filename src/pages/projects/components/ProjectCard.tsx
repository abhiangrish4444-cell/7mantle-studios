import { useState } from 'react';
import type { Project } from '@/mocks/projects';
import Reveal from '@/components/base/Reveal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={Math.min(index * 60, 300)}>
      <article
        className="group relative overflow-hidden rounded-lg bg-background-300 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ${
              hovered ? 'scale-105 saturate-0' : 'scale-100 saturate-100'
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background-950/85 via-background-900/40 to-transparent transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-70'
            }`}
          ></div>

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary-500/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-300/90">
                {project.category}
              </span>
              <span className="text-[10px] font-medium tracking-wide text-background-200/70">
                {project.year}
              </span>
            </div>
            <h3 className="mt-2 text-xl leading-tight text-background-50/70 md:text-2xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div
          className={`overflow-hidden bg-background-900 transition-all duration-500 ${
            hovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="px-5 py-4 text-sm leading-relaxed text-background-100/85 md:px-6">
            {project.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}