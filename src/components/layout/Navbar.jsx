import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiArrowRightLine, RiArrowDownSLine, RiMenuLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import brandMark from "@/assets/images/logo2.svg";

const groups = [
  { id: "products", label: "Products", links: [
    ["All products", "/products"],
    ["Cloud", "/products/cloud"],
    ["Data & Analytics", "/products/data"],
    ["Enterprise", "/products/enterprise"],
    ["Security", "/products/security"],
    ["BridgeIntelligence AI", "/bridge-intelligence"],
  ] },
  { id: "solutions", label: "Solutions", links: [
    ["Financial services", "/solutions/financial"],
    ["Public sector", "/solutions/public-sector"],
    ["Healthcare", "/solutions/healthcare"],
    ["Logistics", "/solutions/logistics"],
  ] },
  { id: "company", label: "Company", links: [
    ["About", "/about"],
    ["Leadership", "/leadership"],
    ["Newsroom", "/newsroom"],
    ["Investors", "/investors"],
    ["Careers", "/careers"],
  ] },
];

const demoUrl = "/contact?topic=demo";
const menuLink = "block rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-surface hover:text-accent aria-[current=page]:bg-accent/10 aria-[current=page]:text-accent";

function isInGroup(pathname, href) {
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20);
  const [dropdown, setDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigation = useRef(null);
  const mobileNavigation = useRef(null);
  const location = useLocation();
  const transparent = location.pathname === "/" && !scrolled && !dropdown;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setDropdown(null);
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const closeOutside = (event) => {
      if (!navigation.current?.contains(event.target)) setDropdown(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnResize = (event) => {
      if (event.matches) setMobileOpen(false);
      else setDropdown(null);
    };
    desktop.addEventListener("change", closeOnResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnResize);
    };
  }, []);

  const navLink = cn(
    "inline-flex min-h-11 items-center gap-1 rounded-md px-2.5 text-sm font-semibold transition-colors",
    transparent ? "text-white/90 hover:bg-white/10 hover:text-white" : "text-navy hover:bg-surface hover:text-accent",
  );

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 border-b transition-colors",
      transparent ? "border-transparent" : "border-rule bg-white/95 shadow-sm backdrop-blur",
    )}>
      <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-3">
        <Link to="/" className={cn("inline-flex shrink-0 items-center gap-2 rounded-md", transparent ? "text-white" : "text-navy")}>
          <img src={brandMark} alt="" className="h-8 w-auto" />
          <span className="text-[22px] font-bold tracking-tight">Foundry</span>
        </Link>

        <nav
          ref={navigation}
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex xl:gap-3"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape" && dropdown) {
              event.stopPropagation();
              document.getElementById("nav-trigger-" + dropdown)?.focus();
              setDropdown(null);
            }
          }}
        >
          {groups.map(({ id, label, links }) => {
            const open = dropdown === id;
            const active = links.some(([, href]) => isInGroup(location.pathname, href));
            return (
              <div key={id} className="relative">
                <button
                  type="button"
                  id={"nav-trigger-" + id}
                  aria-expanded={open}
                  aria-controls={"nav-panel-" + id}
                  className={cn(navLink, (active || open) && "bg-accent/10 text-accent")}
                  onClick={() => setDropdown(open ? null : id)}
                >
                  {label}
                  <RiArrowDownSLine aria-hidden="true" className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
                </button>
                <ul
                  id={"nav-panel-" + id}
                  hidden={!open}
                  aria-labelledby={"nav-trigger-" + id}
                  className="absolute left-0 top-full mt-2 w-56 space-y-0.5 rounded-xl border border-rule bg-white p-2 shadow-xl"
                >
                  {links.map(([name, href]) => (
                    <li key={href}><NavLink end={href === "/products"} to={href} className={menuLink} onClick={() => setDropdown(null)}>{name}</NavLink></li>
                  ))}
                </ul>
              </div>
            );
          })}
          <NavLink to="/pricing" className={cn(navLink, "aria-[current=page]:bg-accent/10 aria-[current=page]:text-accent")} onClick={() => setDropdown(null)}>Pricing</NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <NavLink to="/login" className={cn(navLink, "hidden lg:inline-flex")}>Log in</NavLink>
          <Link to={demoUrl} className={cn("site-button", transparent && "site-button-light")}>
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Request a demo</span>
            <RiArrowRightLine aria-hidden="true" className="hidden h-4 w-4 sm:block" />
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button type="button" aria-label="Open navigation" className={cn("grid h-11 w-11 place-items-center rounded-lg lg:hidden", transparent ? "text-white hover:bg-white/10" : "text-navy hover:bg-surface")}>
                <RiMenuLine aria-hidden="true" className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              aria-describedby={undefined}
              className="z-[60] flex h-dvh w-full max-w-sm flex-col gap-4 overflow-y-auto overscroll-contain lg:hidden"
              onOpenAutoFocus={(event) => {
                event.preventDefault();
                mobileNavigation.current?.focus();
              }}
              onCloseAutoFocus={(event) => {
                if (document.activeElement?.id === "main-content") event.preventDefault();
              }}
            >
              <SheetTitle className="pr-10 text-navy">Explore Foundry</SheetTitle>
              <nav ref={mobileNavigation} tabIndex={-1} aria-label="Mobile navigation" className="space-y-4 focus:outline-none">
                {groups.map(({ id, label, links }) => (
                  <div key={id} className="border-b border-rule pb-3">
                    <p className="site-eyebrow mb-1 px-3">{label}</p>
                    <ul className="grid grid-cols-2">
                      {links.map(([name, href]) => (
                        <li key={href}><NavLink end={href === "/products"} to={href} className={menuLink} onClick={() => setMobileOpen(false)}>{name}</NavLink></li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="grid grid-cols-2">
                  <NavLink to="/pricing" className={menuLink} onClick={() => setMobileOpen(false)}>Pricing</NavLink>
                  <NavLink to="/login" className={menuLink} onClick={() => setMobileOpen(false)}>Log in</NavLink>
                </div>
                <Link to={demoUrl} className="site-button w-full" onClick={() => setMobileOpen(false)}>Request a demo</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
