import { useMemo, useState } from 'react';
import { projects } from '@/mocks/projects';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import Reveal from '@/components/base/Reveal';

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const counts = useMemo(() => {
    const tally: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      tally[p.category] = (tally[p.category] ?? 0) + 1;
    });
    return tally;
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="w-full bg-background-50">
      <CategoryFilter
        active={activeCategory}
        onChange={setActiveCategory}
        counts={counts}
      />

      <div className="w-full px-4 py-12 md:px-8 md:py-16">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-600">
              {filtered.length} {filtered.length === 1 ? 'Project' : 'Projects'}
              {activeCategory !== 'All' && (
                <span className="ml-1 text-foreground-400">in {activeCategory}</span>
              )}
            </p>
            {activeCategory !== 'All' && (
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className="flex cursor-pointer items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground-500 transition-colors hover:text-primary-700 whitespace-nowrap"
              >
                <i className="ri-close-line"></i>
                Clear filter
              </button>
            )}
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <Reveal>
            <div className="flex h-48 flex-col items-center justify-center gap-3 text-center">
              <i className="ri-film-line text-4xl text-background-400"></i>
              <p className="text-sm text-foreground-500">No projects in this category yet.</p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {filtered.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}