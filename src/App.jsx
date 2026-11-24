import { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import {
  BrowserRouter, Routes, Route, Outlet, Link, Navigate,
  useLocation, useNavigationType,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/layout/CookieBanner";
import PageHero from "./components/shared/PageHero";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import { productSlugs } from "./data/productPages";
import ServicePage from "./pages/ServicePage";
import { servicePages } from "./data/servicePages";
import Financial from "./pages/solutions/Financial";
import PublicSector from "./pages/solutions/PublicSector";
import Healthcare from "./pages/solutions/Healthcare";
import Logistics from "./pages/solutions/Logistics";
import Investors from "./pages/Investors";
import Leadership from "./pages/Leadership";
import Newsroom from "./pages/Newsroom";
import NewsStory from "./pages/NewsStory";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import BridgeIntelligence from "./components/sections/BridgeIntelligence";
import FinancialReports from "./components/investors/FinancialReports";
import StockInfo from "./components/investors/StockInfo";
import GovernanceSnapshot from "./components/investors/GovernanceSnapshot";

function RoutePosition() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const changedPage = previousPath.current !== pathname;
    const frame = requestAnimationFrame(() => {
      previousPath.current = pathname;
      const anchor = hash && document.getElementById(hash.slice(1));
      if (anchor) {
        anchor.scrollIntoView();
        if (changedPage) anchor.focus({ preventScroll: true });
        return;
      }
      if (!changedPage) return;
      if (navigationType !== "POP") window.scrollTo(0, 0);
      document.getElementById("main-content")?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, navigationType]);

  return null;
}

function MainLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export function NotFound() {
  return (
    <PageHero eyebrow="Page not found" title="Let’s get you back on track." description="This address may have changed. Start from the homepage or browse the Foundry platform.">
      <Link className="site-button" to="/">Back to home</Link>
      <Link className="site-button site-button-outline" to="/products">Browse products</Link>
    </PageHero>
  );
}

function InvestorPage({ title, description, children }) {
  return (
    <>
      <PageHero eyebrow="Investor relations" title={title} description={description}>
        <Link to="/investors" className="site-button site-button-outline">Back to investor relations</Link>
      </PageHero>
      {children}
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <RoutePosition />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            {servicePages.map((page) => (
              <Route key={page.id} path={page.path} element={<ServicePage key={page.id} page={page} />} />
            ))}
            {productSlugs.map((slug) => (
              <Route key={slug} path={`/products/${slug}`} element={<ProductPage key={slug} slug={slug} />} />
            ))}
            <Route path="/products/:product" element={<Products />} />
            <Route path="/solutions/financial" element={<Financial />} />
            <Route path="/solutions/public-sector" element={<PublicSector />} />
            <Route path="/solutions/healthcare" element={<Healthcare />} />
            <Route path="/solutions/logistics" element={<Logistics />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/investors/reports" element={<InvestorPage title="Financial reports" description="Browse annual reports, quarterly results, and listing documents."><FinancialReports /></InvestorPage>} />
            <Route path="/investors/filings" element={<InvestorPage title="Stock and listing information" description="Find Foundry’s exchange listings and related information."><StockInfo /></InvestorPage>} />
            <Route path="/investors/governance" element={<InvestorPage title="Corporate governance" description="Learn how the board oversees the company and represents shareholders."><GovernanceSnapshot /></InvestorPage>} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/newsroom/:storyId" element={<NewsStory />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Navigate to="/contact?topic=demo" replace />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/bridge-intelligence" element={<BridgeIntelligence />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
