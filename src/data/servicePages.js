export const servicePages = [
  {
    id: "consulting",
    name: "Strategic Consulting",
    path: "/products/consulting",
    topic: "consulting",
    intro: "Scope an advisory, migration or integration project and prepare a brief for Foundry Consulting.",
    worksheet: {
      title: "Project brief",
      field: "Workstream",
      prompt: "What decision or deadline is driving the project?",
    },
    options: [
      ["Technology strategy", "Build a roadmap your team can execute", "Review the current estate, clarify business priorities and compare investment options against cost, risk and delivery capacity.", "Prioritised roadmap", ["Application and dependency inventory", "Options with trade-offs and decision owners", "Delivery sequence and investment brief"]],
      ["Cloud modernisation", "Plan the move around live operations", "Group workloads by dependency and sensitivity, then design a migration sequence with testing, cutover and rollback built in.", "Migration plan", ["Workload and data classification", "Landing-zone requirements and migration waves", "Cutover, rollback and operational handover"]],
      ["Systems integration", "Connect workflows across systems", "Map how information is created, approved and reconciled. Use that map to define the interfaces and ownership each team needs.", "Integration design", ["Process and data-flow maps", "Interface contracts and error handling", "End-to-end test and release plan"]],
      ["Managed services", "Set up the team that will run it", "Define support ownership, monitoring and change procedures around the systems that matter most to day-to-day operations.", "Service transition plan", ["Service ownership and coverage map", "Monitoring and incident runbooks", "Handover criteria and review cadence"]],
    ],
    processTitle: "How an engagement takes shape",
    steps: [
      ["Discover", "Map the systems, constraints and people involved. Agree what a successful change would look like."],
      ["Design", "Compare options, record the trade-offs and agree the first deliverable and how it will be accepted."],
      ["Deliver", "Test the change in a bounded environment, manage the rollout and document the handover."],
    ],
    resource: ["Foundry Cloud", "Explore the infrastructure behind a Foundry cloud migration.", "/products/cloud"],
    questions: [
      ["Can we start with an assessment?", "Yes. Describe the decision you need to make, the systems involved and any deadline. The initial discussion can focus on defining an assessment and the decisions it should support."],
      ["Can Foundry work with our existing technology?", "Share your current platforms, vendors and internal standards. The scope can account for systems you plan to retain, integrate, replace or operate alongside Foundry products."],
      ["Who should join the first conversation?", "Bring the person accountable for the outcome and someone familiar with the current systems. For projects with sensitive data or critical services, include the person responsible for risk or operations."],
    ],
  },
  {
    id: "ventures",
    name: "Startup Ventures",
    path: "/products/ventures",
    topic: "ventures",
    intro: "Prepare an introduction to Foundry Ventures, which makes strategic minority investments in African technology companies.",
    worksheet: {
      title: "Founder brief",
      field: "Focus area",
      prompt: "What milestone would you like to reach next?",
    },
    options: [
      ["Financial infrastructure", "Make business payments and financial workflows easier to run", "Relevant products include payment infrastructure, reconciliation, treasury tools and software that helps institutions manage operational risk.", "What to describe", ["Who uses the product and how often", "Which workflows or institutions it connects", "Evidence of adoption and your approach to regulatory requirements"]],
      ["Enterprise software", "Improve how organisations run core operations", "Show how your product solves a specific problem for an identifiable buyer, how it fits existing systems and what repeat use looks like.", "What to describe", ["The buyer, user and purchase decision", "How customers deploy or integrate the product", "What customers keep using after the pilot"]],
      ["Cloud and data", "Build tools that make infrastructure easier to operate", "Products in this area can span cloud operations, data platforms, security tooling and infrastructure for applied AI.", "What to describe", ["The technical problem and who owns it", "How your approach performs in real deployments", "What a Foundry relationship could help validate"]],
      ["Sector technology", "Solve a specific problem in an essential industry", "Explain where your product fits in a real healthcare, logistics or public-service workflow, who pays for it and how you reach users.", "What to describe", ["The problem and how it is handled today", "The data, distribution or integration requirements", "A milestone that shows you can scale beyond the first deployment"]],
    ],
    processTitle: "From introduction to evaluation",
    steps: [
      ["Introduce", "Share your company, markets, product, current traction and the milestone you are working toward."],
      ["Explore the fit", "A follow-up conversation can cover the team, customers, commercial model and where working together would make sense."],
      ["Evaluate together", "Where there is mutual interest, agree the information needed for diligence and how next steps will be decided."],
    ],
    resource: ["SwiftPay in the newsroom", "Read Foundry’s announcement about portfolio company SwiftPay’s Series C.", "/newsroom/swiftpay-unicorn"],
    questions: [
      ["Do I need to be fundraising now?", "You can describe a planned raise or start with a strategic introduction. Include the timing, your next milestone and what you would like to discuss."],
      ["What should I include in the first message?", "Include a short company overview, the markets you serve, a product or deck link you are comfortable sharing, evidence of traction and your proposed use of capital."],
      ["Should I share confidential material up front?", "Start with a non-confidential overview. Discuss any confidentiality requirements before sharing restricted documents or customer information."],
    ],
  },
  {
    id: "partners",
    name: "Partner Network",
    path: "/partners",
    topic: "partnership",
    intro: "Outline a technology, delivery or channel partnership around a specific customer need.",
    worksheet: {
      title: "Partnership brief",
      field: "Partner route",
      prompt: "What could the two teams deliver together?",
    },
    options: [
      ["Technology partners", "Connect a product to the Foundry platform", "Bring a connector, application or technical capability that addresses a clear customer need. Start by validating the interfaces, security requirements and ownership of the integrated experience.", "First discussion", ["Target customer workflow and product scope", "Integration architecture and data access", "Testing and ongoing maintenance ownership"]],
      ["Delivery partners", "Implement and operate solutions with customers", "Bring sector knowledge, implementation capacity or managed operations experience. Define responsibilities across discovery, implementation, training and handover.", "First discussion", ["Relevant deployments and delivery capacity", "Customer responsibilities and escalation", "Acceptance criteria and handover documentation"]],
      ["Channel partners", "Bring a relevant solution to a customer market", "Describe the industry or geography you serve, the customer need you see repeatedly and how your team can support the commercial and delivery process.", "First discussion", ["Target customers and market coverage", "Commercial roles and customer ownership", "Enablement and after-sales responsibilities"]],
    ],
    processTitle: "Design the partnership around a real use case",
    steps: [
      ["Share the opportunity", "Describe the customer need, your capabilities and the Foundry products or services involved."],
      ["Define the joint work", "Agree who owns each part of delivery, what needs validating and where teams hand work over."],
      ["Review a pilot", "Use a bounded integration or customer engagement to test the approach and decide whether to expand it."],
    ],
    resource: ["Foundry product catalogue", "Identify the products your team wants to integrate, implement or bring to market.", "/products"],
    questions: [
      ["Can we start with one customer opportunity?", "Yes. A specific opportunity makes it easier to discuss scope, delivery responsibilities and what a successful pilot would look like."],
      ["Should our first message include a technical design?", "A short solution outline is enough to begin. Share the workflow, products involved, known dependencies and any deadlines."],
      ["What if more than one partnership route fits?", "Choose the route closest to your immediate goal and include any additional capabilities in the enquiry so they can be discussed together."],
    ],
  },
  {
    id: "success",
    name: "Customer Success",
    path: "/success",
    topic: "customer-success",
    intro: "Prepare for onboarding, review adoption or plan the next rollout with your customer success team.",
    worksheet: {
      title: "Rollout checklist",
      field: "Stage",
      prompt: "Add an owner, target date or question for your next review.",
    },
    options: [
      ["Plan onboarding", "Agree how the deployment will be accepted", "Set a baseline, identify the first group of users and agree who owns configuration, access, testing and go-live.", "Bring to your rollout discussion", ["Target outcome and first user group", "Access, integration and training dependencies", "Go-live criteria and handover owners"]],
      ["Improve adoption", "Find where users need more support", "Look at how teams use the product and where work still happens outside it. Prioritise the changes that would make everyday tasks easier.", "Bring to your adoption review", ["Usage by team or workflow", "Examples of recurring friction or manual work", "Training gaps and internal champions"]],
      ["Review and expand", "Decide what to optimise or roll out next", "Compare current performance against the goals set at launch. Identify where process, capacity or configuration needs to change before expanding.", "Bring to your review", ["Current performance and original success measures", "New user groups, workloads or integrations", "Decision owners and planned review dates"]],
    ],
    processTitle: "Build a success plan your team can revisit",
    steps: [
      ["Agree the outcome", "Choose a result the deployment should support and find a baseline you can compare it with."],
      ["Assign the work", "Document the next actions, owners and checkpoints. Include dependencies from other teams."],
      ["Review the evidence", "Use feedback and usage or operational data to decide what to fix, continue or expand."],
    ],
    resource: ["Active service incidents", "If you have a service disruption, use the support or escalation channel in your agreement. If you need help identifying the right route, prepare a technical enquiry.", "/contact?topic=technical", "Prepare a technical enquiry"],
    questions: [
      ["What’s the difference between a success enquiry and technical support?", "Use a success enquiry for onboarding, adoption and planning. For an active incident or service disruption, use the support or escalation channel specified in your agreement."],
      ["Can we ask for help after go-live?", "Yes. Describe the deployment, what has changed since launch and what you would like guidance on. Include any usage or performance measures already available."],
      ["What information should we leave out?", "Keep credentials, personal data and production records out of your message. Refer to your organisation, product and environment without including secrets."],
    ],
  },
];

export const serviceLinks = servicePages.map(({ name, path }) => [name, path]);
