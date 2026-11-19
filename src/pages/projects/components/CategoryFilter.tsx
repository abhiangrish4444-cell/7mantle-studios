import { projectCategories } from '@/mocks/projects';

interface CategoryFilterProps {
  active: string;
  onChange: (cat: string) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="w-full border-b border-background-200 bg-background-50">
      <div className="w-full overflow-x-auto px-4 md:px-8">
        <div className="flex min-w-max items-center gap-2 py-4 md:gap-3">
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            const count = counts[cat] ?? 0;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange(cat)}
                className={`group flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary-500 text-foreground-950'
                    : 'border border-background-300 bg-transparent text-foreground-600 hover:border-primary-400 hover:text-foreground-950'
                }`}
              >
                {cat}
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                    isActive
                      ? 'bg-foreground-950/20 text-foreground-950'
                      : 'bg-background-200 text-foreground-600 group-hover:bg-primary-100 group-hover:text-primary-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}