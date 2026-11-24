import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkspacePage, ReferenceSection, ResourceLink } from "@/components/shared/WorkspacePage";
import { productPages, productSlugs } from "@/data/productPages";

const links = productSlugs.map(slug => [productPages[slug].nav, "/products/" + slug]);

export default function ProductPage({ slug }) {
  const product = productPages[slug];
  return (
    <WorkspacePage section="Products" links={links} path={"/products/" + slug}
      title={product.name} description={product.description}>
      <section className="work-tool" id="product-explorer" tabIndex={-1} aria-labelledby="workflow-title">
        <div className="work-tool-heading">
          <h2 id="workflow-title">{product.explorerLabel}</h2>
          <span>Example workflow</span>
        </div>
        <Tabs defaultValue={product.experiences[0].label}>
          <TabsList className="work-tablist" aria-label={product.explorerLabel}>
            {product.experiences.map(({ label }) => <TabsTrigger key={label} value={label} className="work-tab">{label}</TabsTrigger>)}
          </TabsList>
          {product.experiences.map(example => (
            <TabsContent className="work-sheet" value={example.label} key={example.label}>
              <h3>{example.title}</h3>
              <p>{example.body}</p>
              <table className="work-record">
                <caption className="sr-only">{example.label} example record</caption>
                <thead><tr><th scope="col">Step</th><th scope="col">Example record</th></tr></thead>
                <tbody>{example.steps.map(([step, record]) => (
                  <tr key={step}><th scope="row">{step}</th><td>{record}</td></tr>
                ))}</tbody>
              </table>
              <div className="work-result"><strong>Outcome</strong><p>{example.outcome}</p></div>
              <Link className="work-action" to={"/contact?topic=demo&product=" + slug}
                state={{ enquiryBrief: [product.name, example.label, "", "I would like to discuss this workflow:", ...example.steps.map(([step]) => "• " + step)].join("\n") }}>
                Request this demo
              </Link>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <ReferenceSection title="Capabilities" rows={product.capabilities.map(({title, body}) => [title, body])} />
      <ReferenceSection title="Questions" rows={product.faq} />
      <ResourceLink resource={[product.spotlight.title, product.spotlight.body, product.spotlight.link, product.spotlight.linkLabel]} />
    </WorkspacePage>
  );
}
