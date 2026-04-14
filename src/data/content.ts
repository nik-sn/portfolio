export const profile = {
  name: "Nik Stagno Navarra",
  title: "Digital Product Manager",
  tagline:
    "Turning ideas into products people love — at the intersection of mobile, payments, and scale.",
  email: "nik.stagnonavarra@gmail.com",
  linkedin: "https://linkedin.com/in/nik-stagno-navarra",
  location: "Melbourne, Australia",
  about: {
    intro:
      "I'm a product leader who ships. From launching #1-ranked apps to building fraud systems that save hundreds of thousands — I obsess over outcomes, not outputs.",
    paragraphs: [
      "Over the past decade, I've led product across fintech, wagering, and gifting — owning wallet integrations, open-loop payments, free-to-play products, fraud prevention, and AI-powered customer experiences.",
      "Currently at Prezzee, I'm driving global mobile expansion across new markets, modernising the tech stack with Kotlin Multiplatform, and building gifting flows that measurably increase retention.",
      "I work best at the seam between strategy and execution — where a clear product vision meets the messy reality of cross-functional delivery.",
    ],
  },
};

export const highlights = [
  {
    metric: "480K+",
    label: "Downloads",
    detail: "Sportsbet Android launch",
    icon: "download",
  },
  {
    metric: "#1",
    label: "App Store",
    detail: "Fantasy Soccer — World Cup",
    icon: "trophy",
  },
  {
    metric: "$300K",
    label: "Saved Annually",
    detail: "Fraud prevention at BetEasy",
    icon: "shield",
  },
  {
    metric: "+12%",
    label: "CSAT Lift",
    detail: "AI chatbot — 10K+ handled",
    icon: "sparkle",
  },
];

export type Project = {
  title: string;
  company: string;
  year: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Taking Mobile Global",
    company: "Prezzee",
    year: "2024–Now",
    problem:
      "Gifting platform needed international expansion with a fragmented mobile codebase.",
    solution:
      "Driving mobile strategy across Canada and Ireland. Leading Kotlin Multiplatform migration for shared mobile logic.",
    outcome: "+8% retention from new gifting flows. 30% engineering efficiency gain.",
    tech: ["International", "Wallet Integration", "KMP", "Retention"],
    featured: true,
  },
  {
    title: "Building a Viral World Cup Product",
    company: "Sportsbet",
    year: "2022",
    problem:
      "Needed a mass-market acquisition play during the FIFA World Cup — zero existing free-to-play products.",
    solution:
      "Designed and shipped Super Fantasy Soccer from 0 → 1 in under 12 weeks, optimising for virality and retention.",
    outcome: "70K+ downloads. #1 ranked app in Australia during the tournament.",
    tech: ["0 → 1", "Gamification", "Growth Marketing", "Cross-functional"],
    featured: true,
  },
  {
    title: "Launching a Top-Ranked Mobile App",
    company: "Sportsbet",
    year: "2021",
    problem:
      "No native Android presence in a market shifting rapidly to mobile-first betting.",
    solution:
      "Owned end-to-end delivery from discovery to launch — aligning engineering, design, and commercial teams around a single mobile-first vision.",
    outcome: "480K+ downloads, 4.47 rating. Became a core revenue channel.",
    tech: ["Mobile Strategy", "Product Delivery", "Growth", "Analytics"],
    featured: true,
  },
  {
    title: "Saving $300K with Fraud Prevention",
    company: "BetEasy",
    year: "2019",
    problem:
      "Fraud losses were climbing across payments and accounts, eroding revenue and user trust.",
    solution:
      "Led integration of a fraud detection platform, bridging product, engineering, and risk stakeholders.",
    outcome: "$300K annual savings. Significant reduction in fraudulent transactions.",
    tech: ["Risk & Fraud", "Payments", "Stakeholder Alignment", "Integration"],
  },
  {
    title: "AI That Actually Improved CSAT",
    company: "BetEasy",
    year: "2019",
    problem:
      "Support teams drowning in repetitive queries. Satisfaction scores stagnating.",
    solution:
      "Implemented an AI chatbot for first-line triage — freeing human agents for complex, high-value conversations.",
    outcome: "10K+ interactions handled autonomously. 12% CSAT improvement.",
    tech: ["AI / ML", "Customer Experience", "Automation", "CSAT"],
  },
];

export type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Product Strategy",
    icon: "compass",
    skills: [
      "Mobile Product Strategy",
      "0 → 1 & Scale",
      "Growth & Personalisation",
      "Roadmap & Prioritisation",
    ],
  },
  {
    category: "Domain Expertise",
    icon: "layers",
    skills: [
      "Payments & Wallets",
      "AI & Customer Experience",
      "Fraud Prevention",
      "Fintech & Wagering",
    ],
  },
  {
    category: "Execution",
    icon: "zap",
    skills: [
      "Cross-functional Delivery",
      "Executive Stakeholder Mgmt",
      "Agile / Scrum",
      "Data-driven Decisions",
    ],
  },
  {
    category: "Leadership",
    icon: "users",
    skills: [
      "Team Leadership",
      "Mentoring & Coaching",
      "Culture Building",
      "Wellbeing Advocacy",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Prezzee",
    role: "Product Manager — Mobile",
    period: "2024 – Present",
    description: "Global mobile expansion, wallet integrations, KMP modernisation.",
  },
  {
    company: "Sportsbet",
    role: "Digital Product Manager",
    period: "2020 – 2024",
    description: "Led Growth, Risk & Free-to-Play. Launched #1 ranked app.",
  },
  {
    company: "BetEasy",
    role: "Product Manager / CS Lead",
    period: "2015 – 2020",
    description: "CRM, fraud prevention, AI chatbot. Tools used by 300+ staff.",
  },
  {
    company: "Result Based Training",
    role: "Operations Manager",
    period: "2013 – 2015",
    description: "Multi-site ops, sales, and retention strategy.",
  },
  {
    company: "Arbor Education",
    role: "Project Manager",
    period: "2012 – 2013",
    description: "Delivered MIS system supporting 4,000+ students.",
  },
  {
    company: "Fitness First",
    role: "Regional Ops Manager",
    period: "2005 – 2011",
    description: "Multi-club management, 3,000+ weekly visits.",
  },
];
