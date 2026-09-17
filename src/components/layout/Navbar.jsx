import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiArrowRightSLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import brandMark from "@/assets/images/logo2.svg";

// ─── Simplified Menu Data ────────────────────────────────────────────────────────
const menuData = {
  products: [
    { name: "Cloud", href: "/products/cloud" },
    { name: "Data", href: "/products/data" },
    { name: "Enterprise", href: "/products/enterprise" },
    { name: "Security", href: "/products/security" },
    { name: "BridgeIntelligence AI", href: "/bridge-intelligence" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "Investors", href: "/investors" },
    { name: "Careers", href: "/careers" },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // The crucial "Lights On" logic: Navbar turns dark if not on the homepage,
  // or if scrolled, or if a dropdown / mobile menu is open.
  const isHome = location.pathname === "/";
  const isDarkTheme =
    !isHome || isScrolled || activeDropdown !== null || mobileMenuOpen;

  return (
    <>
      <header
        onMouseLeave={() => setActiveDropdown(null)}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isDarkTheme
            ? "bg-white border-rule shadow-sm"
            : "bg-transparent border-transparent",
        )}
      >
        <div className="site-container flex items-center justify-between h-20">
          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2 relative z-50">
            <img
              src={brandMark}
              alt="Foundry"
              className="h-8 w-auto object-contain"
            />
            <span
              className={cn(
                "font-sans font-bold text-[22px] tracking-tight transition-colors",
                isDarkTheme ? "text-[#0A2540]" : "text-white",
              )}
            >
              Foundry
            </span>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            {/* Products */}
            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveDropdown("products")}
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors flex items-center gap-1",
                  isDarkTheme
                    ? "text-[#0A2540] hover:text-accent"
                    : "text-white/90 hover:text-white",
                )}
              >
                Products {activeDropdown === "products" ? "-" : "+"}
              </span>
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              onMouseEnter={() => setActiveDropdown(null)}
              className={cn(
                "text-[15px] font-medium transition-colors",
                isDarkTheme
                  ? "text-[#0A2540] hover:text-accent"
                  : "text-white/90 hover:text-white",
              )}
            >
              Pricing
            </Link>

            {/* Company */}
            <div
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={() => setActiveDropdown("company")}
            >
              <span
                className={cn(
                  "text-[15px] font-medium transition-colors flex items-center gap-1",
                  isDarkTheme
                    ? "text-[#0A2540] hover:text-accent"
                    : "text-white/90 hover:text-white",
                )}
              >
                Company {activeDropdown === "company" ? "-" : "+"}
              </span>
            </div>
          </nav>

          {/* ── DESKTOP LOG IN ── */}
          <div className="hidden lg:flex items-center gap-6 relative z-50">
            <Link
              to="/login"
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-colors",
                isDarkTheme
                  ? "text-[#0A2540] hover:text-accent"
                  : "text-white hover:text-white/70",
              )}
            >
              Log In
            </Link>
          </div>

          {/* ── ALWAYS VISIBLE CTA & MOBILE TOGGLE ── */}
          <div className="flex items-center gap-4 lg:gap-6 relative z-50">
            <Link
              to="/contact"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-sm text-[12px] lg:text-[13px] font-bold uppercase tracking-widest transition-all",
                isDarkTheme
                  ? "bg-[#0A2540] text-white hover:bg-gray-800"
                  : "bg-white text-[#0A2540] hover:bg-gray-200",
              )}
            >
              Request a Demo
              <RiArrowRightSLine className="w-4 h-4" />
            </Link>

            <button
              className="lg:hidden relative z-50 p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
            {mobileMenuOpen ? (
              <RiCloseLine
                className={cn(
                  "w-7 h-7",
                  isDarkTheme ? "text-[#0A2540]" : "text-white",
                )}
              />
            ) : (
              <RiMenuLine
                className={cn(
                  "w-7 h-7",
                  isDarkTheme ? "text-[#0A2540]" : "text-white",
                )}
              />
            )}
          </button>
        </div>

        {/* ── SIMPLIFIED DROPDOWN MENUS ── */}
        <AnimatePresence>
          {activeDropdown === "products" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-[40%] -translate-x-1/2 w-[260px] bg-white border border-rule shadow-2xl rounded-b-xl rounded-tl-xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {menuData.products.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2.5 text-[15px] font-medium text-[#0A2540] hover:bg-[#F6F9FC] hover:text-accent rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {activeDropdown === "company" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-[60%] -translate-x-1/2 w-[260px] bg-white border border-rule shadow-2xl rounded-b-xl rounded-tl-xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {menuData.company.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-2.5 text-[15px] font-medium text-[#0A2540] hover:bg-[#F6F9FC] hover:text-accent rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 top-20 bottom-0 z-50 bg-white px-6 py-8 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Products
                </span>
                {menuData.products.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  to="/pricing"
                  className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                >
                  Pricing
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-bold text-subtle uppercase tracking-widest">
                  Company
                </span>
                {menuData.company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[18px] font-medium text-[#0A2540] border-b border-rule pb-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-6 border-t border-rule flex flex-col gap-4">
                <Link
                  to="/login"
                  className="text-[16px] font-bold uppercase tracking-widest text-[#0A2540] text-center mb-2"
                >
                  Log In
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-[#0A2540] text-white w-full py-4 rounded-sm text-[14px] font-bold uppercase tracking-widest"
                >
                  Request a Demo <RiArrowRightSLine className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
