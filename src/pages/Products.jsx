import { Link, useParams } from "react-router-dom";
import {
  RiArrowRightLine, RiBarChartBoxLine, RiBriefcaseLine, RiCloudLine,
  RiFlashlightLine, RiRocketLine, RiShieldCheckLine, RiStackLine,
} from "react-icons/ri";
import PageHero from "@/components/shared/PageHero";
import { divisions } from "@/data/divisions";

const icons = {
  cloud: RiCloudLine,
  data: RiBarChartBoxLine,
  enterprise: RiStackLine,
  security: RiShieldCheckLine,
  consulting: RiBriefcaseLine,
  ventures: RiRocketLine,
  "bridge-intelligence": RiFlashlightLine,
};

const catalog = [
  ...divisions.slice(0, 3),
  {
    id: "security",
    slug: "security",
    name: "Foundry Protector",
    tagline: "Security and compliance for your digital operations",
    description: "Protect systems and data from threats and give teams a clearer view of their security posture.",
  },
  {
    id: "bridge-intelligence",
    name: "BridgeIntelligence AI",
    description: "Enterprise AI for regulated teams, with answers shaped by your policies and a traceable audit record.",
    href: "/bridge-intelligence",
  },
  ...divisions.slice(3),
];

function ProductCards({ items }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = icons[item.id];
        return (
          <li key={item.id}>
            <Link
              to={item.slug ? "/products/" + item.slug : item.href}
              className="group flex h-full flex-col rounded-2xl border border-rule bg-white p-6 shadow-sm transition hover:border-accent/30 hover:shadow-md sm:p-8"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-semibold tracking-tight text-navy">{item.name}</h2>
              <p className="mb-5 mt-2 text-body-md text-muted">{item.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Explore <span className="sr-only">{item.name}</span>
                <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Products() {
  const { product } = useParams();
  const current = catalog.find((item) => item.slug && item.slug === product);

  if (product && !current) {
    return (
      <PageHero eyebrow="Products" title="Product not found" description="Browse the product catalog to find what you’re looking for.">
        <Link className="site-button" to="/products">Browse products</Link>
      </PageHero>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={current ? "Foundry platform" : "Products and services"}
        title={current?.name ?? "Explore the Foundry platform"}
        description={current?.tagline ?? "Explore cloud infrastructure, enterprise software, data, security, and AI, plus the services that help organizations put them to work."}
      >
        {current ? (
          <>
            <Link className="site-button" to="/contact?topic=demo">Request a demo <RiArrowRightLine aria-hidden="true" /></Link>
            <Link className="site-button site-button-outline" to="/products">All products</Link>
          </>
        ) : (
          <Link className="site-button" to="/pricing">Explore pricing <RiArrowRightLine aria-hidden="true" /></Link>
        )}
      </PageHero>
      <section className="site-container py-12 sm:py-20" aria-label={current ? "Product details" : "Product catalog"}>
        {current && (
          <div className="mb-10 max-w-2xl sm:mb-14">
            <h2 className="text-2xl font-semibold tracking-tight text-navy">Overview</h2>
            <p className="mt-3 text-body-xl text-muted">{current.description}</p>
            <h2 className="mt-10 text-xl font-semibold tracking-tight text-navy">Explore more products</h2>
          </div>
        )}
        <ProductCards items={catalog.filter((item) => item !== current)} />
      </section>
    </>
  );
}
