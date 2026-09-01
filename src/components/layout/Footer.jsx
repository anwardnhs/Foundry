import { Link } from "react-router-dom";
import { RiGlobalLine, RiArrowRightLine } from "react-icons/ri";
import brandMark from "@/assets/images/logo2.svg";

// ─── Humanized Link Labels ───
const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Cloud", href: "/products/cloud" },
      { label: "Data & Analytics", href: "/products/data" },
      { label: "Enterprise", href: "/products/enterprise" },
      { label: "BridgeIntelligence AI", href: "/bridge-intelligence" },
    ],
  },
  {
    title: "Services & Growth",
    links: [
      { label: "Strategic Consulting", href: "/products/consulting" },
      { label: "Startup Ventures", href: "/products/ventures" },
      { label: "Partner Network", href: "/partners" },
      { label: "Customer Success", href: "/success" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership Team", href: "/leadership" },
      { label: "News & Updates", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Investor Relations", href: "/investors" },
      { label: "Financial Reports", href: "/investors/reports" },
      { label: "Corporate Governance", href: "/investors/governance" },
      { label: "SEC Filings", href: "/investors/filings" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-rule pt-16 pb-10 flex flex-col relative z-10"
      aria-label="Footer"
    >
      <div className="site-container">
        {/* ── PRE-FOOTER CTA (The "Stripe" Final Push) ── */}
        <div className="bg-[#0A2540] rounded-none p-10 md:p-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-[28px] md:text-[36px] font-black text-white leading-[1.1] tracking-tight mb-4">
              Ready to build the future of your institution?
            </h2>
            <p className="text-[16px] text-white/70 leading-[1.6]">
              Join the leading institutions building their future on Foundry.
              Get in touch with our team to see how we can help you scale.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center rounded-none px-8 font-bold text-white transition-all w-full sm:w-auto"
            >
              <span>Contact Sales</span>
              <RiArrowRightLine className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── MAIN FOOTER GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Localization */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img
                src={brandMark}
                alt="Foundry"
                className="h-8 w-auto object-contain"
              />
              <span className="font-sans font-black text-[20px] text-[#0A2540] tracking-tight">
                Foundry
              </span>
            </Link>

            <button className="flex items-center gap-2 text-[14px] font-bold text-[#425466] hover:text-[#0A2540] transition-colors mb-4 px-3 py-1.5 rounded-lg hover:bg-[#F6F9FC]">
              <RiGlobalLine className="w-5 h-5 text-subtle" />
              English (NG)
            </button>
            <p className="text-[13px] text-[#425466] leading-[1.6] max-w-[200px] mt-2 pl-3">
              <span className="font-bold">Foundry</span> is a registered
              trademark of Foundry Plc.
            </p>
          </div>

          {/* Columns 2-5: Links (Expanded to 4 columns for balance) */}
          <div className="md:col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-[15px] font-black text-[#0A2540] mb-5 tracking-tight">
                  {section.title}
                </h4>
                <ul className="space-y-3.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.href}
                        className="group text-[14px] font-medium text-[#425466] hover:text-accent transition-colors flex items-center gap-2"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="text-[10px] font-black uppercase tracking-widest bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM STRIP: Legal & Live Tickers ── */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-rule gap-6">
          {/* Legal / Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[13px] font-medium text-[#425466]">
            <span>&copy; {new Date().getFullYear()} Foundry Plc.</span>
            <Link
              to="/privacy"
              className="hover:text-[#0A2540] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#0A2540] transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Live Market Tickers (Pill Design) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#F6F9FC] border border-rule px-3 py-1.5 rounded-full text-[12px] font-mono font-bold text-[#425466] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 "></span>
              </span>
              NGX: BSOFT
            </div>
            <div className="flex items-center gap-2 bg-[#F6F9FC] border border-rule px-3 py-1.5 rounded-full text-[12px] font-mono font-bold text-[#425466] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#030e61] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 "></span>
              </span>
              LSE: BSFT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
