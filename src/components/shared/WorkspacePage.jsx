import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./workspace-page.css";

export function WorkspacePage({ section, links, path, title, description, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const originalTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const originalDescription = meta?.content;
    document.title = title + " | Foundry";
    if (meta) meta.content = description;
    return () => {
      document.title = originalTitle;
      if (meta) meta.content = originalDescription;
    };
  }, [title, description]);

  return (
    <article className="work-page">
      <div className="site-container work-layout">
        <aside className="work-directory">
          <nav aria-label={section}>
            <h2>{section}</h2>
            <ul>{links.map(([label, href]) => (
              <li key={href}><NavLink end to={href}>{label}</NavLink></li>
            ))}</ul>
            {section === "Products" && <Link className="work-catalog" to="/products">View catalogue</Link>}
          </nav>
          <label className="work-mobile-directory">
            <span>{section}</span>
            <select value={path} onChange={event => navigate(event.target.value)}>
              {links.map(([label, href]) => <option key={href} value={href}>{label}</option>)}
            </select>
          </label>
        </aside>
        <div className="work-main">
          <header className="work-heading">
            <h1>{title}</h1>
            <p>{description}</p>
          </header>
          {children}
        </div>
      </div>
    </article>
  );
}

export function ReferenceSection({ title, rows }) {
  return (
    <section className="work-reference">
      <h2>{title}</h2>
      {rows.map(([name, detail]) => (
        <details key={name}>
          <summary>{name}<ChevronDown aria-hidden="true" size={16} /></summary>
          <p>{detail}</p>
        </details>
      ))}
    </section>
  );
}

export function ResourceLink({ resource }) {
  const [title, description, href, action = title] = resource;
  return (
    <aside className="work-resource">
      <p>{description}</p>
      <Link to={href}>{action}<ChevronRight size={15} aria-hidden="true" /></Link>
    </aside>
  );
}
