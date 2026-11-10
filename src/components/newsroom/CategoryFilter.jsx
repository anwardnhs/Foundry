import { cn } from "@/lib/utils";
import { categories } from "@/data/newsroom";

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div role="group" aria-label="News category" className="flex flex-wrap gap-2">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          aria-pressed={activeCategory === id}
          onClick={() => setActiveCategory(id)}
          className={cn("min-h-11 rounded-lg border px-3 text-sm font-semibold transition-colors",
            activeCategory === id ? "border-accent bg-accent text-white" : "border-rule bg-white text-navy hover:bg-surface hover:text-accent",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
