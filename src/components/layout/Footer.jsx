import { Link, useLocation } from "react-router-dom";
import { RiGlobalLine, RiArrowRightLine } from "react-icons/ri";
import brandMark from "@/assets/images/logo2.svg";

const footerLinks = [
  ["Platform", [
    ["All products", "/products"],
    ["Cloud", "/products/cloud"],
    ["Data & Analytics", "/products/data"],
    ["Enterprise", "/products/enterprise"],
    ["Security", "/products/security"],
    ["BridgeIntelligence AI", "/bridge-intelligence"],
  ]],
  ["Solutions", [
    ["Financial services", "/solutions/financial"],
    ["Public sector", "/solutions/public-sector"],
    ["Healthcare", "/solutions/healthcare"],
    ["Logistics", "/solutions/logistics"],
  ]],
  ["Company", [
    ["About", "/about"],
    ["Leadership", "/leadership"],
    ["Newsroom", "/newsroom"],
    ["Careers", "/careers"],
    ["Contact", "/contact"],
  ]],
  ["Investors", [
    ["Investor relations", "/investors"],
    ["Financial reports", "/investors/reports"],
    ["Corporate governance", "/investors/governance"],
    ["Stock and listings", "/investors/filings"],
  ]],
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="border-t border-rule bg-surface py-10 sm:py-14">
      <div className="site-container">
        {pathname !== "/contact" && (
          <div className="mb-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-navy p-6 text-white sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Build on Foundry</h2>
              <p className="mt-2 max-w-lg text-body-md text-blue-100">Talk to us about the infrastructure and software your team needs.</p>
            </div>
            <Link to="/contact?topic=sales" className="site-button site-button-light">
              Contact sales <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_3fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-navy">
              <img src={brandMark} alt="" className="h-8 w-auto" /> Foundry
            </Link>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <RiGlobalLine aria-hidden="true" /> English (NG)
            </p>
            <p className="mt-3 max-w-[17rem] text-body-sm text-muted">Foundry is a registered trademark of Foundry Plc.</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
            {footerLinks.map(([heading, links]) => (
              <div key={heading}>
                <h3 className="mb-2 text-sm font-semibold text-navy">{heading}</h3>
                <ul>
                  {links.map(([label, href]) => (
                    <li key={href}><Link to={href} className="inline-block py-1.5 text-sm text-muted hover:text-accent hover:underline">{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <span>© {new Date().getFullYear()} Foundry Plc.</span>
            <Link to="/privacy" className="hover:text-accent hover:underline">Privacy policy</Link>
            <Link to="/terms" className="hover:text-accent hover:underline">Terms of service</Link>
          </div>
          <Link to="/investors/filings" className="flex flex-wrap gap-2 text-xs font-medium text-muted hover:text-accent" aria-label="Foundry listings on NGX and LSE">
            <span className="rounded-full border border-rule bg-white px-3 py-1">NGX · FDRY</span>
            <span className="rounded-full border border-rule bg-white px-3 py-1">LSE · FDRY</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
