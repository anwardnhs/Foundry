// ─── Key Metrics ──────────────────────────────────────────────────────────────
export const metrics = [
  {
    id: "revenue",
    label: "FY2025 Revenue",
    value: "$3.80B",
    change: "+14.5% YoY",
    positive: true,
  },
  {
    id: "marketcap",
    label: "Market Capitalisation",
    value: "~$28.5B",
    change: "As of 31 Dec 2025",
    positive: null,
  },
  {
    id: "fcf",
    label: "Free Cash Flow",
    value: "$498M",
    change: "+15.8% YoY",
    positive: true,
  },
  {
    id: "employees",
    label: "Group Employees",
    value: "14,200",
    change: "FY2025",
    positive: null,
  },
]

// ─── Stock Listings ───────────────────────────────────────────────────────────
export const listings = [
  {
    id: "ngx",
    exchange: "Nigerian Exchange Group",
    ticker: "FDRY",
    prefix: "NGX",
    sharesInIssue: "15,000,000,000",
    closingPrice: "NGN 3,078",
    closingPriceUSD: "$1.90",
    dividendYield: "0.42%",
    asOf: "31 December 2025",
    parValue: "NGN 0.50 per share",
    flag: "🇳🇬",
  },
  {
    id: "lse",
    exchange: "London Stock Exchange",
    ticker: "FDRY",
    prefix: "LSE",
    sharesInIssue: "15,000,000,000",
    closingPrice: "—",
    closingPriceUSD: "—",
    dividendYield: "0.42%",
    asOf: "31 December 2025",
    parValue: "NGN 0.50 per share",
    flag: "🇬🇧",
  },
]

// ─── Shareholding ─────────────────────────────────────────────────────────────
export const shareholders = [
  {
    name: "Bytemark Capital",
    classification: "Founding Shareholder",
    type: "founder",
    percent: "12.60%",
    
  },
  {
    name: "Saro Holdings Limited",
    classification: "Founding Shareholder",
    type: "founder",
    percent: "8.20%",

  },
  {
    name: "Stanbic IBTC Asset Management",
    classification: "Institutional — Domestic",
    type: "institutional",
    percent: "7.01%",
    note: null,
  },
  {
    name: "FBNQuest Asset Management",
    classification: "Institutional — Domestic",
    type: "institutional",
    percent: "3.00%",
    note: null,
  },
  {
    name: "Coronation Asset Management",
    classification: "Institutional — Domestic",
    type: "institutional",
    percent: "3.00%",
    note: null,
  },
  {
    name: "African Capital Alliance",
    classification: "Institutional — Private Equity",
    type: "institutional",
    percent: "4.50%",
    note: null,
  },
  // Hidden behind accordion
  {
    name: "BlackRock Investment Management UK",
    classification: "Institutional — International",
    type: "institutional",
    percent: "4.00%",
    note: null,
    hidden: true,
  },
  {
    name: "Nigeria Sovereign Investment Authority",
    classification: "Sovereign Wealth Fund",
    type: "sovereign",
    percent: "2.50%",
    note: null,
    hidden: true,
  },
  {
    name: "Public Investment Corporation (PIC)",
    classification: "Institutional — Pan-African",
    type: "institutional",
    percent: "2.00%",
    note: null,
    hidden: true,
  },
  {
    name: "Vanguard Emerging Markets Equity Fund",
    classification: "Institutional — International",
    type: "institutional",
    percent: "1.50%",
    note: null,
    hidden: true,
  },
  {
    name: "All Other Shareholders",
    classification: "Retail & Public Float",
    type: "public",
    percent: "51.69%",
    note: null,
    hidden: true,
  },
]

// ─── Financial Reports ────────────────────────────────────────────────────────
export const reports = [
  {
    id: "fy2025-annual",
    title: "FY2025 Annual Report",
    subtitle: "Full year results and strategic review",
    date: "March 2026",
    type: "Annual Report",
    size: "PDF · 4.2MB",
  },
  {
    id: "fy2025-q4",
    title: "Q4 2025 Results",
    subtitle: "Quarter four trading update",
    date: "January 2026",
    type: "Quarterly Results",
    size: "PDF · 1.1MB",
  },
  {
    id: "fy2025-q3",
    title: "Q3 2025 Results",
    subtitle: "Quarter three trading update",
    date: "October 2025",
    type: "Quarterly Results",
    size: "PDF · 980KB",
  },
  {
    id: "fy2024-annual",
    title: "FY2024 Annual Report",
    subtitle: "Full year results and strategic review",
    date: "March 2025",
    type: "Annual Report",
    size: "PDF · 3.9MB",
  },
  {
    id: "fy2024-q4",
    title: "Q4 2024 Results",
    subtitle: "Quarter four trading update",
    date: "January 2025",
    type: "Quarterly Results",
    size: "PDF · 1.0MB",
  },
  {
    id: "prospectus",
    title: "LSE Listing Prospectus",
    subtitle: "Original 2015 London Stock Exchange listing document",
    date: "October 2015",
    type: "Prospectus",
    size: "PDF · 8.7MB",
  },
]

// ─── Governance ───────────────────────────────────────────────────────────────
export const governance = [
  { label: "Board Members", value: "11", note: "Diverse expertise across technology, finance, and industry" },
  { label: "Independent NEDs", value: "6", note: "Over 50% of board are independent non-executive directors" },
  { label: "Board Committees", value: "4", note: "Audit, Risk, Remuneration, and Nominations Committees" },
]