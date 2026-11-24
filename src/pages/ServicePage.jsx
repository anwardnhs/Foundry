import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  RiBriefcaseLine, RiCheckboxCircleLine, RiGitMergeLine,
  RiLinksLine, RiRocketLine, RiSubtractLine, RiAddLine,
} from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import meeting from "@/assets/images/meeting.webp";
import lagos from "@/assets/images/lag.webp";
import { serviceLinks } from "@/data/servicePages";
import "./service-page.css";

const visualStyles = {
  consulting: { icon: RiBriefcaseLine, image: meeting },
  ventures: { icon: RiRocketLine, image: lagos },
  partners: { icon: RiLinksLine },
  success: { icon: RiCheckboxCircleLine },
};

function ServiceVisual({ page }) {
  const { icon: Icon, image } = visualStyles[page.id];
  return (
    <aside className="svc-visual" aria-label={page.visual.label}>
      {image && <img className="svc-visual-image" src={image} alt="" fetchpriority="high" />}
      <div className="svc-visual-content">
        <span className="svc-visual-icon"><Icon size={23} aria-hidden="true" /></span>
        <p className="svc-visual-label">{page.visual.label}</p>
        <p className="svc-visual-title">{page.visual.title}</p>
        <dl>
          {page.visual.items.map(([term, detail]) => (
            <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
          ))}
        </dl>
      </div>
    </aside>
  );
}

function ServiceExplorer({ page }) {
  return (
    <section className="svc-explorer" id="service-explorer" tabIndex={-1} aria-labelledby="svc-explorer-title">
      <div className="site-container">
        <div className="svc-section-heading">
          <h2 id="svc-explorer-title">{page.section}</h2>
          <p>{page.summary}</p>
        </div>
        <Tabs defaultValue={page.options[0][0]} orientation="vertical" className="svc-tabs">
          <TabsList className="svc-tab-list" aria-label={page.section}>
            {page.options.map(([label]) => (
              <TabsTrigger className="svc-tab" key={label} value={label}>{label}</TabsTrigger>
            ))}
          </TabsList>
          {page.options.map(([label, title, body, deliverable, items]) => (
            <TabsContent className="svc-panel" key={label} value={label}>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="svc-deliverable">
                <h4>{deliverable}</h4>
                <ul>
                  {items.map((item) => (
                    <li key={item}><RiCheckboxCircleLine size={18} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function ServiceProcess({ page }) {
  const [resourceName, resourceDescription, resourcePath, resourceAction = resourceName] = page.resource;

  return (
    <section className="site-container svc-process" aria-labelledby="svc-process-title">
      <div className="svc-section-heading"><h2 id="svc-process-title">{page.processTitle}</h2></div>
      <ol className="svc-steps">
        {page.steps.map(([title, description], index) => (
          <li key={title}>
            <span aria-hidden="true" className="svc-step-index">{index + 1}</span>
            <h3>{title}</h3><p>{description}</p>
          </li>
        ))}
      </ol>
      <aside className="svc-resource">
        <RiGitMergeLine size={26} aria-hidden="true" />
        <div><h3>{resourceName}</h3><p>{resourceDescription}</p></div>
        <Link className="site-button site-button-outline" to={resourcePath}>{resourceAction}</Link>
      </aside>
    </section>
  );
}

export default function ServicePage({ page }) {
  const contact = "/contact?topic=" + page.topic;

  useEffect(() => {
    const title = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const description = meta?.content;
    document.title = page.name + " | Foundry";
    if (meta) meta.content = page.intro;
    return () => {
      document.title = title;
      if (meta) meta.content = description;
    };
  }, [page]);

  return (
    <article className={`svc-page svc-${page.id}`}>
      <header className="svc-hero">
        <nav className="svc-nav" aria-label="Services and growth">
          <ul className="site-container">
            {serviceLinks.map(([name, path]) => (
              <li key={path}><NavLink end to={path}>{name}</NavLink></li>
            ))}
          </ul>
        </nav>
        <div className="site-container svc-hero-grid">
          <div className="svc-hero-copy">
            <p className="svc-eyebrow">{page.name}</p>
            <h1>{page.title}</h1>
            <p className="svc-intro">{page.intro}</p>
            <div className="svc-actions">
              <Link className="site-button svc-primary" to={contact}>{page.action}</Link>
              <Link className="svc-jump" to="#service-explorer">{page.explore}</Link>
            </div>
          </div>
          <ServiceVisual page={page} />
        </div>
      </header>

      <ServiceExplorer page={page} />
      <ServiceProcess page={page} />

      <section className="svc-questions" aria-labelledby="svc-questions-title">
        <div className="site-container svc-questions-grid">
          <div className="svc-section-heading"><h2 id="svc-questions-title">Common questions</h2></div>
          <div>
            {page.questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<RiAddLine className="svc-expand" aria-hidden="true" /><RiSubtractLine className="svc-collapse" aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-closing" aria-labelledby="svc-closing-title">
        <div className="site-container svc-closing-grid">
          <div><h2 id="svc-closing-title">{page.closing}</h2><p>{page.preparation}</p></div>
          <Link className="site-button site-button-light" to={contact}>{page.action}</Link>
        </div>
      </section>
    </article>
  );
}
