import { cn } from "@/lib/utils";

export default function PageHero({ eyebrow, title, description, children, className }) {
  return (
    <section className={cn("site-page-hero border-b border-rule bg-surface", className)}>
      <div className="site-container">
        <div className="max-w-3xl">
          {eyebrow && <p className="site-eyebrow mb-4">{eyebrow}</p>}
          <h1 className="site-page-title">{title}</h1>
          {description && <p className="site-page-lead mt-5">{description}</p>}
          {children && <div className="mt-7 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
