// ─── Departments ──────────────────────────────────────────────────────────────
export const departments = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "design", label: "Design" },
  { id: "operations", label: "Operations" },
  { id: "sales", label: "Sales" },
]

// ─── Open Roles ───────────────────────────────────────────────────────────────
export const roles = [
  {
    id: "cloud-engineer",
    title: "Cloud Systems Engineer",
    department: "engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    remote: true,
    href: "/careers/cloud-engineer",
    division: "Foundry Cloud",
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    department: "engineering",
    location: "Kigali, Rwanda",
    type: "Full-time",
    remote: false,
    href: "/careers/ml-engineer",
    division: "BridgeIntelligence",
  },
  {
    id: "backend-engineer",
    title: "Senior Backend Engineer",
    department: "engineering",
    location: "Remote (Africa)",
    type: "Full-time",
    remote: true,
    href: "/careers/backend-engineer",
    division: "Foundry Data",
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure Lead",
    department: "engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    remote: false,
    href: "/careers/devops-lead",
    division: "Foundry Cloud",
  },
  {
    id: "product-designer",
    title: "Senior Product Designer",
    department: "design",
    location: "London, UK",
    type: "Full-time",
    remote: true,
    href: "/careers/product-designer",
    division: "Foundry Enterprise",
  },
  {
    id: "brand-designer",
    title: "Brand & Visual Designer",
    department: "design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    remote: false,
    href: "/careers/brand-designer",
    division: "Corporate",
  },
  {
    id: "product-manager",
    title: "Product Manager — Cloud",
    department: "product",
    location: "Lagos, Nigeria",
    type: "Full-time",
    remote: false,
    href: "/careers/pm-cloud",
    division: "Foundry Cloud",
  },
  {
    id: "product-analyst",
    title: "Product Analyst",
    department: "product",
    location: "Remote (Africa)",
    type: "Full-time",
    remote: true,
    href: "/careers/product-analyst",
    division: "Foundry Data",
  },
  {
    id: "implementation",
    title: "Implementation Expert",
    department: "operations",
    location: "Lagos, Nigeria",
    type: "Full-time",
    remote: false,
    href: "/careers/implementation-expert",
    division: "Foundry Consulting",
  },
  {
    id: "project-manager",
    title: "Technical Project Manager",
    department: "operations",
    location: "Johannesburg, SA",
    type: "Full-time",
    remote: false,
    href: "/careers/tech-pm",
    division: "Foundry Consulting",
  },
  {
    id: "enterprise-sales",
    title: "Enterprise Sales Manager",
    department: "sales",
    location: "Lagos, Nigeria",
    type: "Full-time",
    remote: false,
    href: "/careers/enterprise-sales",
    division: "Corporate",
  },
  {
    id: "solutions-engineer",
    title: "Solutions Engineer",
    department: "sales",
    location: "Nairobi, Kenya",
    type: "Full-time",
    remote: true,
    href: "/careers/solutions-engineer",
    division: "Foundry Cloud",
  },
]

// ─── Why Foundry ───────────────────────────────────────────────────────────
export const reasons = [
  {
    number: "01",
    title: "The work is meaningful.",
    desc: "We build systems that power critical infrastructure and solve real-world problems.",
  },
  {
    number: "02",
    title: "The people are exceptional.",
    desc: "We hire people who think carefully, move deliberately, and care about getting things right. If that sounds like you — you'll fit in immediately.",
  },
  {
    number: "03",
    title: "The mission is important.",
    desc: "We are building the software that will power Africa's digital transformation. The work we do here will impact millions of people across the continent.",
  },
]

// ─── Hiring Process ───────────────────────────────────────────────────────────
export const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    desc: "Submit your application through our careers page. We review every application carefully.",
  },
  {
    step: "02",
    title: "Screening",
    desc: "We'll review your application and reach out if there's a good fit.",
  },
  {
    step: "03",
    title: "Interview",
    desc: "If we think you're a good fit, we'll schedule interviews with the team. We want to get to know you and your skills better.",
  },
  {
    step: "04",
    title: "Offer",
    desc: "If you've made it this far, we'd like to offer you a position. We'll discuss the details and answer any questions you have.",
  },
]

// ─── Perks ────────────────────────────────────────────────────────────────────
export const perks = [
  {
    icon: "RiMoneyDollarCircleLine",
    title: "Competitive Salary",
    desc: "We pay competitive salaries that reflect your experience and the value you bring to the team.",
  },
  {
    icon: "RiStockLine",
    title: "Equity Options",
    desc: "We offer equity options to all full-time employees, so you can share in the success of the company.",
  },
  {
    icon: "RiGlobalLine",
    title: "Remote-First",
    desc: "We operate as a remote-first company, giving you the flexibility to work from anywhere.",
  },
  {
    icon: "RiBookOpenLine",
    title: "Research & Development Grant",
    desc: "We provide a grant for employees to pursue research and development projects that interest them.",
  },
  {
    icon: "RiHeartPulseLine",
    title: "Health Coverage",
    desc: "We provide health coverage for you and your family, so you can focus on your work without worrying about medical expenses.",
  },
  {
    icon: "RiPlaneLine",
    title: "Annual General Meeting",
    desc: "We hold an annual general meeting where the entire company comes together to discuss the year's progress and future plans.",
  },
]

// ─── Life Photos ──────────────────────────────────────────────────────────────
export const lifePhotos = [
  {
    id: "main",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    alt: "Team collaborating",
    size: "large",
  },
  {
    id: "secondary-1",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
    alt: "Office environment",
    size: "small",
  },
  {
    id: "secondary-2",
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop",
    alt: "Team meeting",
    size: "small",
  },
]