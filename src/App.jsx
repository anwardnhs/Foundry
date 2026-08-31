import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Financial from "./pages/solutions/Financial";
import PublicSector from "./pages/solutions/PublicSector";
import Healthcare from "./pages/solutions/Healthcare";
import Logistics from "./pages/solutions/Logistics";
import Investors from "./pages/Investors";
import Leadership from "./pages/Leadership";
import Newsroom from "./pages/Newsroom";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import BridgeIntelligence from "./components/sections/BridgeIntelligence";
import FinancialReports from "./components/investors/FinancialReports";
import StockInfo from "./components/investors/StockInfo";
import GovernanceSnapshot from "./components/investors/GovernanceSnapshot";

// ─── Layout wrapper — Navbar + Footer for all pages except Login ──────────────
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

// ─── Placeholder for unbuilt routes ──────────────────────────────────────────
const PlaceholderPage = ({ title }) => (
  <main className="site-container py-32 text-center">
    <h1 className="text-4xl font-black text-ink">{title}</h1>
    <p className="text-subtle mt-4">This page is coming soon.</p>
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        {/* ── Login — standalone, no Navbar or Footer ── */}
        <Route path="/login" element={<Login />} />

        {/* ── All other pages — wrapped with Navbar + Footer ── */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:product" element={<Products />} />
          <Route path="/solutions/financial" element={<Financial />} />
          <Route path="/solutions/public-sector" element={<PublicSector />} />
          <Route path="/solutions/healthcare" element={<Healthcare />} />
          <Route path="/solutions/logistics" element={<Logistics />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/investors/reports" element={<FinancialReports />} />
          <Route path="/investors/filings" element={<StockInfo />} />
          <Route
            path="/investors/governance"
            element={<GovernanceSnapshot />}
          />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* ── Placeholder routes ── */}
          <Route
            path="/products/cloud"
            element={<PlaceholderPage title="Cloud Infrastructure" />}
          />
          <Route
            path="/products/data"
            element={<PlaceholderPage title="Data & Analytics" />}
          />
          <Route
            path="/products/enterprise"
            element={<PlaceholderPage title="Bridgesoft Enterprise" />}
          />
          <Route
            path="/products/security"
            element={<PlaceholderPage title="Security & Compliance" />}
          />
          <Route path="/bridge-intelligence" element={<BridgeIntelligence />} />
          <Route
            path="/solutions/migration"
            element={<PlaceholderPage title="Zero-Downtime Migration" />}
          />
          <Route
            path="/solutions/compliance"
            element={<PlaceholderPage title="Regulatory Compliance" />}
          />
          <Route
            path="/solutions/automation"
            element={<PlaceholderPage title="AI Process Automation" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
