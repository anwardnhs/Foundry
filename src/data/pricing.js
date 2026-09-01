// ─── Currency Config ──────────────────────────────────────────────────────────
export const currency = {
  primary: "NGN",
  secondary: "USD",
  symbol: "₦",
  usdSymbol: "$",
  annualDiscount: 0.20,
}

// ─── Unified Platform Tiers ───────────────────────────────────────────────────
export const unifiedTiers = [
  {
    id: "starter",
    name: "Starter",
    tag: null,
    description: "For small teams and startups looking to get started with Foundry's core infrastructure and data services.",
    monthlyNGN: 485000,
    monthlyUSD: 299,
    enterprise: false,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Up to 50 users",
      "Foundry Cloud — 500GB storage",
      "Foundry Data — Basic warehousing",
      "Foundry Enterprise — Core modules",
      "Foundry Integration — Standard connectors",
      "Priority support (24/5)",
      "NGN billing",
    ],
    notIncluded: [
      "BridgeIntelligence AI",
      "Custom LLM layers",
      "Dedicated account manager",
      "On-premise deployment",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tag: "Most Popular",
    description: "For established organisations scaling operations across multiple functions.",
    monthlyNGN: 1200000,
    monthlyUSD: 740,
    enterprise: false,
    cta: "Get Started",
    ctaHref: "/contact",
    features: [
      "Up to 500 users",
      "Foundry Cloud — 5TB storage",
      "Foundry Data — Full warehousing + analytics",
      "Foundry Enterprise — ERP & HRMS modules",
      "BridgeIntelligence AI — Standard tier",
      "Foundry Integration — Advanced connectors",
      "Dedicated account manager",
      "Priority support (24/5)",
      "NGN & USD billing",
      "Advanced onboarding",
    ],
    notIncluded: [
      "Custom LLM layers",
      "On-premise deployment",
      "Sovereign cloud option",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tag: null,
    description: "For large institutions and government agencies requiring a fully custom solution with dedicated support and deployment options.",
    monthlyNGN: null,
    monthlyUSD: null,
    enterprise: true,
    cta: "Contact Sales",
    ctaHref: "/contact",
    features: [
      "Unlimited users",
      "Custom storage allocation",
      "Full Foundry platform access",
      "BridgeIntelligence AI — Custom LLM layers",
      "On-premise or sovereign cloud deployment",
      "Custom SLA (up to 99.99% uptime)",
      "Dedicated engineering team",
      "24/7 priority support",
      "Custom billing — NGN, USD or multi-currency",
      "Regulatory compliance package",
      "Government & institutional procurement support",
    ],
    notIncluded: [],
  },
]

// ─── Per-Division Tiers ───────────────────────────────────────────────────────
export const divisionPricing = {
  cloud: {
    label: "Foundry Cloud",
    description: "IaaS, PaaS, SaaS and sovereign cloud infrastructure.",
    tiers: [
      {
        id: "cloud-starter",
        name: "Starter",
        monthlyNGN: 195000,
        monthlyUSD: 120,
        enterprise: false,
        cta: "Get Started",
        features: [
          "500GB cloud storage",
          "Basic IaaS provisioning",
          "99.9% uptime SLA",
          "Standard support",
        ],
      },
      {
        id: "cloud-growth",
        name: "Growth",
        tag: "Most Popular",
        monthlyNGN: 520000,
        monthlyUSD: 321,
        enterprise: false,
        cta: "Get Started",
        features: [
          "5TB cloud storage",
          "Full IaaS + PaaS access",
          "Cloud migration support",
          "99.95% uptime SLA",
          "Priority support",
        ],
      },
      {
        id: "cloud-enterprise",
        name: "Enterprise",
        monthlyNGN: null,
        monthlyUSD: null,
        enterprise: true,
        cta: "Contact Sales",
        features: [
          "Custom storage",
          "Sovereign cloud option",
          "Government infrastructure mandate",
          "Custom SLA",
          "Dedicated team",
        ],
      },
    ],
  },
  data: {
    label: "Foundry Data",
    description: "Database-as-a-service, data warehousing and AI analytics.",
    tiers: [
      {
        id: "data-starter",
        name: "Starter",
        monthlyNGN: 165000,
        monthlyUSD: 102,
        enterprise: false,
        cta: "Get Started",
        features: [
          "Basic database-as-a-service",
          "BridgeSync replication engine",
          "Standard analytics dashboard",
          "Email support",
        ],
      },
      {
        id: "data-growth",
        name: "Growth",
        tag: "Most Popular",
        monthlyNGN: 440000,
        monthlyUSD: 272,
        enterprise: false,
        cta: "Get Started",
        features: [
          "Full data warehousing",
          "AI-powered analytics",
          "Real-time data pipelines",
          "Priority support",
        ],
      },
      {
        id: "data-enterprise",
        name: "Enterprise",
        monthlyNGN: null,
        monthlyUSD: null,
        enterprise: true,
        cta: "Contact Sales",
        features: [
          "Custom data architecture",
          "BridgeIntelligence integration",
          "Sovereign data residency",
          "Dedicated data engineering team",
        ],
      },
    ],
  },
  enterprise: {
    label: "Foundry Enterprise",
    description: "ERP, CRM, HRMS and financial management suites.",
    tiers: [
      {
        id: "ent-starter",
        name: "Starter",
        monthlyNGN: 225000,
        monthlyUSD: 139,
        enterprise: false,
        cta: "Get Started",
        features: [
          "Core ERP modules",
          "Up to 50 users",
          "Standard HRMS",
          "Email support",
        ],
      },
      {
        id: "ent-growth",
        name: "Growth",
        tag: "Most Popular",
        monthlyNGN: 580000,
        monthlyUSD: 358,
        enterprise: false,
        cta: "Get Started",
        features: [
          "Full ERP + CRM + HRMS",
          "Supply chain module",
          "Financial management suite",
          "Up to 500 users",
          "Priority support",
        ],
      },
      {
        id: "ent-enterprise",
        name: "Enterprise",
        monthlyNGN: null,
        monthlyUSD: null,
        enterprise: true,
        cta: "Contact Sales",
        features: [
          "Unlimited users",
          "Full suite customisation",
          "Localised regulatory compliance",
          "Dedicated implementation team",
        ],
      },
    ],
  },
  consulting: {
    label: "Foundry Consulting",
    description: "Strategy, digital transformation and managed services.",
    tiers: [
      {
        id: "cons-starter",
        name: "Starter",
        monthlyNGN: null,
        monthlyUSD: null,
        enterprise: true,
        cta: "Contact Sales",
        features: [
          "IT strategy advisory",
          "Initial systems assessment",
          "Digital transformation roadmap",
        ],
      },
      {
        id: "cons-growth",
        name: "Growth",
        monthlyNGN: null,
        monthlyUSD: null,
        enterprise: true,
        cta: "Contact Sales",
        features: [
          "Full systems integration",
          "Change management support",
          "Managed services — 12 month",
        ],
      },
      {
        id: "cons-enterprise",
        name: "Enterprise",
        monthlyNGN: null,
        monthlyUSD: null,
        enterprise: true,
        cta: "Contact Sales",
        features: [
          "Long-term managed services",
          "Dedicated consulting team",
          "Multi-year transformation programme",
          "Executive advisory retainer",
        ],
      },
    ],
  },
}

// ─── Feature Comparison Table ─────────────────────────────────────────────────
export const featureCategories = [
  {
    category: "Platform Access",
    features: [
      { name: "Foundry Cloud", starter: "Basic", growth: "Full", enterprise: "Custom" },
      { name: "Foundry Data", starter: "Basic", growth: "Full", enterprise: "Custom" },
      { name: "Foundry Enterprise", starter: false, growth: "Core modules", enterprise: "Full suite" },
      { name: "BridgeIntelligence AI", starter: false, growth: "Standard", enterprise: "Custom LLM" },
    ],
  },
  {
    category: "Infrastructure",
    features: [
      { name: "Cloud storage", starter: "500GB", growth: "5TB", enterprise: "Custom" },
      { name: "Uptime SLA", starter: "99.9%", growth: "99.95%", enterprise: "99.99%" },
      { name: "On-premise deployment", starter: false, growth: false, enterprise: true },
      { name: "Sovereign cloud option", starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: "Users & Access",
    features: [
      { name: "Users included", starter: "Up to 50", growth: "Up to 500", enterprise: "Unlimited" },
      { name: "Role-based access control", starter: true, growth: true, enterprise: true },
      { name: "SSO / SAML", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Support hours", starter: "Business hours", growth: "24/5", enterprise: "24/7" },
      { name: "Dedicated account manager", starter: false, growth: true, enterprise: true },
      { name: "Dedicated engineering team", starter: false, growth: false, enterprise: true },
      { name: "Onboarding support", starter: "Standard", growth: "Advanced", enterprise: "Custom" },
    ],
  },
  {
    category: "Billing",
    features: [
      { name: "NGN billing", starter: true, growth: true, enterprise: true },
      { name: "USD billing", starter: false, growth: true, enterprise: true },
      { name: "Multi-currency billing", starter: false, growth: false, enterprise: true },
      { name: "Annual discount", starter: "20%", growth: "20%", enterprise: "Negotiable" },
    ],
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "Can I pay in Naira?",
    a: "Yes. NGN is our primary billing currency. All Starter and Growth plans are billed in Nigerian Naira by default. USD billing is available on Growth and Enterprise plans.",
  },
  {
    q: "What is the minimum contract length?",
    a: "Monthly plans have no minimum commitment — cancel anytime. Annual plans are billed upfront and save you 20% compared to monthly billing.",
  },
  {
    q: "Can I start with one division and expand later?",
    a: "Yes. You can subscribe to any individual division — Cloud, Data, or Enterprise — and add more divisions or upgrade to the unified platform at any point. Your data and configuration carry over.",
  },
  {
    q: "What does the Enterprise plan include?",
    a: "Enterprise is fully custom — pricing, storage, SLA, deployment model, and support structure are all negotiated based on your institution's specific requirements. Contact our sales team to start the conversation.",
  },
  {
    q: "How is data residency handled?",
    a: "Starter and Growth plans are hosted on Foundry's regional cloud infrastructure. Enterprise plans can be deployed on-premise or via our sovereign cloud option, meaning your data never leaves your institution's control.",
  },
  {
    q: "Do you offer procurement support for government institutions?",
    a: "Yes. Enterprise plans include government and institutional procurement support — we have experience with federal tender processes and can provide the documentation required for public sector engagements.",
  },
]