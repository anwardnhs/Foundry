import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productPages, productSlugs } from "@/data/productPages";
import { ProductVisual, SpotlightVisual, WorkflowVisual } from "@/components/products/ProductVisuals";
import "./product-page.css";

function ProductNavigation() {
  return (
    <nav className="site-container pf-nav" aria-label="Foundry products">
      <Link to="/products" className="pf-catalog">All products<ChevronRight size={15} aria-hidden="true" /></Link>
      <ul>
        {productSlugs.map((slug) => (
          <li key={slug}><NavLink end to={`/products/${slug}`}>{productPages[slug].nav}</NavLink></li>
        ))}
      </ul>
    </nav>
  );
}

function ProductExplorer({ product, slug }) {
  return (
    <section className="pf-explorer" id="product-explorer" aria-labelledby="explorer-title" tabIndex={-1}>
      <div className="site-container pf-section-space">
        <header className="pf-section-heading">
          <p className="pf-eyebrow">{product.explorerLabel}</p>
          <h2 id="explorer-title">{product.explorerTitle}</h2>
          <p>{product.explorerDescription}</p>
        </header>
        <Tabs defaultValue={product.experiences[0].label} className="pf-tabs">
          <TabsList className="pf-tab-list" aria-label={product.explorerLabel}>
            {product.experiences.map(({ label }) => <TabsTrigger key={label} className="pf-tab" value={label}>{label}</TabsTrigger>)}
          </TabsList>
          {product.experiences.map((experience) => (
            <TabsContent key={experience.label} value={experience.label} className="pf-panel">
              <div className="pf-panel-copy">
                <h3>{experience.title}</h3>
                <p>{experience.body}</p>
              </div>
              <WorkflowVisual slug={slug} experience={experience} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function ProductCapabilities({ product }) {
  return (
    <section className="site-container pf-section-space" aria-labelledby="capabilities-title">
      <header className="pf-section-heading">
        <p className="pf-eyebrow">Capabilities</p>
        <h2 id="capabilities-title">{product.capabilitiesTitle}</h2>
      </header>
      <ul className="pf-capabilities">
        {product.capabilities.map(({ icon: Icon, title, body }) => (
          <li key={title}>
            <span className="pf-icon"><Icon size={21} aria-hidden="true" /></span>
            <div><h3>{title}</h3><p>{body}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProductPage({ slug }) {
  const product = productPages[slug];

  const demo = `/contact?topic=demo&product=${slug}`;

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    document.title = `${product.name} | Foundry`;
    description?.setAttribute("content", product.description);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null && previousDescription !== undefined) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, [product]);

  return (
    <article className={`pf-page pf-${slug}`}>
      <header className="pf-hero">
        <ProductNavigation />
        <div className="site-container pf-hero-grid">
          <div className="pf-hero-copy">
            <p className="pf-product-label">Foundry platform</p>
            <h1>{product.name}</h1>
            <p className="pf-lead">{product.description}</p>
            <div className="pf-actions">
              <Button asChild className="pf-button"><Link to={demo}>{product.action}</Link></Button>
              <Button asChild variant="outline" className="pf-button pf-button-secondary">
                <Link to="#product-explorer">Try the walkthrough <ChevronDown size={16} aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
          <ProductVisual slug={slug} product={product} />
        </div>
      </header>

      {slug === "data" || slug === "security" ? (
        <>
          <ProductExplorer product={product} slug={slug} />
          <ProductCapabilities product={product} />
        </>
      ) : (
        <>
          <ProductCapabilities product={product} />
          <ProductExplorer product={product} slug={slug} />
        </>
      )}

      <section className="site-container pf-spotlight-wrap" aria-labelledby="spotlight-title">
        <div className="pf-spotlight">
          <SpotlightVisual slug={slug} />
          <div className="pf-spot-copy">
            <h2 id="spotlight-title">{product.spotlight.title}</h2>
            <p>{product.spotlight.body}</p>
            <Link to={product.spotlight.link} className="pf-text-link">{product.spotlight.linkLabel}</Link>
          </div>
        </div>
      </section>

      <section className="site-container pf-section-space pf-faq" aria-labelledby="faq-title">
        <header className="pf-section-heading"><h2 id="faq-title">Questions about {product.name}</h2></header>
        <Accordion type="single" collapsible className="pf-accordion">
          {product.faq.map(([question, answer]) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className="pf-question">{question}</AccordionTrigger>
              <AccordionContent className="pf-answer">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="site-container pf-close-wrap" aria-labelledby="closing-title">
        <div className="pf-close">
          <div><h2 id="closing-title">{product.closing}</h2><p>{product.closingBody}</p></div>
          <div className="pf-actions">
            <Button asChild className="pf-button"><Link to={demo}>{product.action}</Link></Button>
            <Link to={slug === "security" ? "/products" : "/pricing"} className="pf-text-link">
              {slug === "security" ? "Explore all products" : "View pricing"}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
