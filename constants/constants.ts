/**
 * VoltaEdge Engineering - Static Content
 * All strings and configuration constants are defined here.
 * Zero hardcoded strings in JSX/TSX.
 */

export const SITE_NAME = "VoltaEdge Engineering";
export const SITE_TAGLINE = "Certified Electrical & Renewable Energy Engineering Solutions";
export const SITE_DESCRIPTION = "VoltaEdge Engineering provides elite electrical engineering, renewable energy integration, power distribution, and industrial automation services for the modern infrastructure.";
export const SITE_EMAIL = "info@voltaedge.com";
export const SITE_PHONE = "+1 (800) 865-8233";
export const SITE_ADDRESS = "1250 Energy Boulevard, Houston, TX 77002, United States";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://voltaedge.com";

export const KEYWORDS = [
  "electrical engineering services",
  "renewable energy solutions",
  "solar power installation",
  "power distribution systems",
  "industrial automation",
  "energy audit consulting",
  "EV charging infrastructure",
  "wind power integration",
  "hydroelectric solutions",
  "utility-scale battery storage",
  "grid modernization services",
  "industrial power systems design firm"
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Our Team", href: "/about/team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  { label: "Case Studies", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const COLORS = {
  NAVY: "#00253B",
  OCEAN: "#0e6492",
  CHARCOAL: "#1D1F21",
  ICE_BLUE: "#cce5ff",
  WHITE: "#f9f9fc",
};

export const SERVICES: Service[] = [
  {
    id: "electrical-design",
    title: "Electrical System Design",
    slug: "electrical-design",
    description: "High-precision schematics and blueprint development for complex infrastructure projects.",
    longDescription: "Our Electrical System Design department specializes in the architectural blueprinting of high-performance energy networks. Using advanced BIM (Building Information Modeling) and CAD software, we create scalable, safety-first electrical infrastructures for industrial complexes and commercial high-rises. Our designs prioritize future-proofing, allowing for seamless capacity upgrades as your operational needs evolve.",
    technicalAnalysis: [
      "BIM-Integrated Infrastructure Blueprinting",
      "Short Circuit & Coordination Studies",
      "Arc Flash Hazard Analysis (NFPA 70E)",
      "Redundant Power Path Planning",
      "Voltage Drop & Cable Sizing Optimization",
      "Grounding & Lightning Protection Design"
    ],
    icon: "architecture",
    features: [
      "NEC/NFPA 70 Standard Compliance",
      "Load Calculation & Demand Analysis",
      "Three-Phase Logic Design",
      "Emergency Standby System Planning",
      "Lighting & Lux Level Optimization",
      "Digital Twin Infrastructure Mapping"
    ],
    benefits: [
      "Reduced Energy Loss via Optimized Circuitry",
      "Minimized Downtime via Redundancy Planning",
      "Total Regulatory & Safety Compliance",
      "Scalable Infrastructure for Future Growth",
      "Enhanced Reliability in Harsh Environments",
      "Investment-Grade Blueprinting for Insurance"
    ],
    imageUrl: "/images/services/design.png",
  },
  {
    id: "renewable-integration",
    title: "Renewable Energy Integration",
    slug: "renewable-energy-integration",
    description: "Multi-source renewable solutions including solar, wind, and hydrothermal grid synchronization.",
    longDescription: "As the global energy landscape transitions to sustainable sources, VoltaEdge provides the technical bridge for multi-source renewable integration. We design and deploy hybrid energy hubs that combine solar PV, wind turbine arrays, and hydrothermal systems into a single, cohesive industrial grid. Our focus is on stabilization—ensuring that intermittent renewable sources provide a steady, reliable current to sensitive industrial equipment.",
    technicalAnalysis: [
      "Grid Stability & Harmonic Distortion Testing",
      "BESS (Battery Energy Storage Systems) Sizing",
      "Solar Irradiancy & Wind Yield Modeling",
      "Hydrothermal Thermal Gradient Analysis",
      "Microgrid Controller Logic Development",
      "Real-time Solar/Wind Hybrid Forecasting"
    ],
    icon: "layers",
    features: [
      "Utility-Scale Solar PV Engineering",
      "Wind Farm Grid Synchronization",
      "Hybrid Battery Storage Solutions",
      "Microgrid Autonomy Programming",
      "Hydrothermal Thermal Hub Integration",
      "Zero-Carbon Transition Roadmap"
    ],
    benefits: [
      "Drastic Reduction in Scope 2 Emissions",
      "Shielding from Grid Instability & Outages",
      "Long-term Energy Price Certainty",
      "Eligibility for Federal Green Incentives",
      "Maximized ROI on Renewable Assets",
      "Leadership in Corporate Sustainability (ESG)"
    ],
    imageUrl: "/images/services/renewable.png",
  },
  {
    id: "power-distribution",
    title: "Power Distribution",
    slug: "power-distribution",
    description: "Optimization of LV/MV/HV distribution networks and substation maintenance.",
    longDescription: "Our Power Distribution services cover the entire lifecycle of industrial electrical delivery—from high-voltage substations to low-voltage localized distribution. We specialize in distribution network hardening, using state-of-the-art switchgear and monitoring systems to prevent cascading failures. Our engineers have extensive experience in both Greenfield deployments and the modernization of legacy utility assets.",
    technicalAnalysis: [
      "LV/MV/HV Network Load Flow Analysis",
      "Substation Hardening & Physical Security",
      "Transformer Oil & Dissolved Gas Analysis",
      "Circuit Breaker Timing & Contact Resistance",
      "Protection Relay Calibration & Testing",
      "Underground Cable Fault Localization"
    ],
    icon: "electric_bolt",
    features: [
      "Custom Substation Design & Build",
      "Advanced Switchgear Installation",
      "Smart Metering & Grid Edge Tech",
      "Power Factor Correction (Capacitor Banks)",
      "Automatic Transfer Switch (ATS) Integration",
      "Underground Distribution Engineering"
    ],
    benefits: [
      "Elimination of Costly Power Surges",
      "Enhanced Grid Resiliency & Self-Healing",
      "Optimized Voltage Delivery to Assets",
      "Reduced Maintenance via Predictive Monitoring",
      "Maximized Transformer Efficiency",
      "Compliance with Utility-Scale Safety Protocols"
    ],
    imageUrl: "/images/services/distribution.png",
  },
  {
    id: "energy-audit",
    title: "Industrial Energy & Sustainability Audit",
    slug: "energy-audit",
    description: "Deep-dive technical auditing and sustainability mapping for industrial energy infrastructure. We perform comprehensive ASHRAE Level II & III audits to optimize consumption and drive high-performance decarbonization.",
    longDescription: "Our Industrial Energy & Sustainability Audit is an investment-grade analysis designed for complex manufacturing and infrastructure environments. We go beyond simple consumption checks to provide a full-spectrum technical roadmap for grid modernization, energy resiliency, and multi-source transition. By combining advanced diagnostic tools with deep regulatory knowledge, we help partners meet both immediate ROI goals and long-term ESG (Environmental, Social, and Governance) targets.",
    technicalAnalysis: [
      "Dynamic Load Profiling & Predictive Modeling",
      "Thermal Imaging for Building Envelope & HVAC Systems",
      "Detailed Power Quality & Harmonic Distortion Mapping",
      "Compressed Air System Efficiency Benchmarking",
      "Steam & High-Pressure Fluid Leakage Detection",
      "Voltage Stability & Transformer Health Assessment"
    ],
    icon: "fact_check",
    features: [
      "ASHRAE Level II & III Compliance Audits",
      "Carbon Footprint & Scope 1/2 Emission Mapping",
      "Federal (EPA) & State Energy Reporting Compliance",
      "Industrial Smart Grid Load Balancing Strategy",
      "ISO 50001 Energy Management Pathway Design",
      "Technical Cost-Benefit Analysis for CapEx Planning"
    ],
    benefits: [
      "Operational Overhead Reduction (Up to 35% Yearly)",
      "Extended Industrial Asset & Equipment Lifespan",
      "Guaranteed Compliance with Environmental Regulations",
      "Enhanced Corporate ESG & Sustainability Ratings",
      "Risk Mitigation for Grid Instability & Peak Pricing",
      "Eligibility for Federal Energy Efficiency Grants/Tax Credits"
    ],
    imageUrl: "/images/services/audit.png",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    slug: "industrial-automation",
    description: "SCADA systems, PLC programming, and smart grid automation for real-time control.",
    longDescription: "VoltaEdge leads the transition to Industry 4.0 by deploying sophisticated automation layers across the industrial spectrum. We design custom PLC (Programmable Logic Controller) architectures and SCADA (Supervisory Control and Data Acquisition) systems that provide granular, real-time control over every machine and sensor in your facility. Our goal is to replace manual inefficiency with predictive, data-driven operational excellence.",
    technicalAnalysis: [
      "Logic Flow & Control Loop Optimization",
      "HMI (Human-Machine Interface) UX/UI Design",
      "Predictive Failure Analysis Algorithm Design",
      "Industrial IoT (IIoT) Sensor Network Mapping",
      "Cybersecurity Hardening for OT (Operational Tech)",
      "DCS (Distributed Control System) Architecture"
    ],
    icon: "settings_suggest",
    features: [
      "Advanced PLC & HMI Programming",
      "SCADA Enterprise Integration",
      "Robotic Motion Control & Synchronization",
      "Variable Frequency Drive (VFD) Optimization",
      "Custom Control Panel Engineering",
      "Remote Monitoring & Telemetry Systems"
    ],
    benefits: [
      "Dramatic Increase in Theoretical Production Yield",
      "Elimination of Human-Scale Operational Errors",
      "Predictive Maintenance (Fixing BEFORE Failure)",
      "Granular Real-Time Performance Analytics",
      "Enhanced Workplace Safety via Autonomy",
      "Lower Labor-Related Operational Costs"
    ],
    imageUrl: "/images/services/automation.png",
  },
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure",
    slug: "ev-charging",
    description: "Design and deployment of smart electric vehicle charging infrastructure for modern cities.",
    longDescription: "The future of heavy-duty and commercial transport is electric. We provide the high-voltage infrastructure necessary to power fleet-scale EV charging operations. Our designs include smart load management to protect your existing facility grid from peak surges and V2G (Vehicle-to-Grid) readiness to allow your fleet to act as a battery for the facility during outages.",
    technicalAnalysis: [
      "Level 3 DC Fast Charge Heat Dissipation Analysis",
      "Grid Capacity & Transformer Headroom Testing",
      "Smart Load Management Algorithm Development",
      "V2G (Vehicle-to-Grid) Bi-directional Testing",
      "EVSE (EV Supply Equipment) Protocol Verification",
      "Facility Load Shedding & Integration Stress Tests"
    ],
    icon: "ev_station",
    features: [
      "High-Power DC Fast Charging (Level 3)",
      "Commercial Fleet Charging Depots",
      "V2G (Vehicle-to-Grid) Enabled Infrastructure",
      "Dynamic Load Balancing Software",
      "Cloud-Integrated Billing & Monitoring",
      "Renewable-Powered Charging Hubs"
    ],
    benefits: [
      "Future-Proofing for Electric Fleet Transitions",
      "Lowest Total Cost of Fuel for Commercial Fleets",
      "Avoidance of Costly Utility Demand Charges",
      "Enhanced Property Value & ESG Metrics",
      "Fleet Resilience during Local Grid Failures",
      "Seamless Integration with On-site Solar Storage"
    ],
    imageUrl: "/images/services/ev.png",
  },
];

export const STATS: Stat[] = [
  { label: "Projects Delivered", value: 150, suffix: "+", description: "Successful engineering deployments across the continent." },
  { label: "Years Industry Experience", value: 20, suffix: "+", description: "Two decades of power and innovation excellence." },
  { label: "Client Satisfaction", value: 98, suffix: "%", description: "Consistent high-quality project delivery and support." },
  { label: "Senior Engineers", value: 40, suffix: "+", description: "PE-certified experts leading our technical councils." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "VoltaEdge Engineering delivered our renewable hybrid system ahead of schedule and with remarkable technical precision. Their engineering team is second to none in the energy sector.",
    author: "Michael Richardson",
    role: "Director of Infrastructure",
    company: "Texas Energy Solutions",
    avatar: "/images/team/avatar-1.jpg",
  },
  {
    quote: "The power distribution system designed by VoltaEdge has significantly reduced our operational downtime. A truly elite engineering firm.",
    author: "David Miller",
    role: "Managing Director",
    company: "Global Tech Manufacturing",
    avatar: "/images/team/avatar-1.jpg",
  },
  {
    quote: "Their expertise in industrial automation and SCADA systems allowed us to modernize our entire production line with minimal disruption. The ROI has been immediate and significant.",
    author: "Sarah Jenkins",
    role: "Operations Manager",
    company: "Midwest Logistics Hub",
    avatar: "/images/team/avatar-1.jpg",
  },
  {
    quote: "The energy audit provided by VoltaEdge was eye-opening. Their recommendations helped us reduce our utility costs by 30% while improving our facility's overall sustainability profile.",
    author: "Robert Chen",
    role: "Facilities Director",
    company: "Pacific Coast Research Center",
    avatar: "/images/team/avatar-1.jpg",
  },
  {
    quote: "VoltaEdge's approach to EV charging infrastructure is world-class. They managed the entire lifecycle of our nationwide network deployment with technical excellence and on-time delivery.",
    author: "Amanda Thorne",
    role: "Head of Fleet Sustainability",
    company: "TransitAmerica Systems",
    avatar: "/images/team/avatar-1.jpg",
  },
];

export const MISSION_STATEMENT = "To deliver world-class engineering solutions through precision, technical integrity, and innovative design. We empower industries by modernizing legacy systems and integrating renewable energy into the core of global infrastructure.";
export const VISION_STATEMENT = "To be the global architectural benchmark for the carbon-neutral transition. We envision a future where energy infrastructure is invisible, efficient, and entirely sustainable—engineered by VoltaEdge.";

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "Unwavering ethical standards in every calculation and contract. We stand by our work, ensuring transparency and accountability.",
    icon: "verified_user",
    ref: "VE-V01"
  },
  {
    title: "Safety",
    description: "Safety is not a checkbox; it is our culture. We engineer for the highest levels of operational security.",
    icon: "health_and_safety",
    ref: "VE-V02"
  },
  {
    title: "Technical Excellence",
    description: "Harnessing advanced structural analysis and multi-disciplinary expertise to solve complex challenges.",
    icon: "architecture",
    ref: "VE-V03"
  },
  {
    title: "Sustainability",
    description: "Minimizing carbon footprints through intelligent design and seamless renewable integration.",
    icon: "eco",
    ref: "VE-V04"
  },
  {
    title: "Innovation",
    description: "Continuously evolving our methodologies with digital twin technology and AI-driven load balancing.",
    icon: "lightbulb",
    ref: "VE-V05"
  },
  {
    title: "Client Partnership",
    description: "Building long-term relationships through reliability and consistent project delivery.",
    icon: "handshake",
    ref: "VE-V06"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alistair Abernathy",
    role: "Principal Grid Architect",
    bio: "Principal architect of high-performance electrical infrastructure and grid modernization.",
    initials: "AA",
    qualifications: ["PE CERTIFIED", "IEEE FELLOW"],
    socials: { linkedin: "https://linkedin.com/in/alistair-abernathy" }
  },
  {
    name: "Elena Moretti",
    role: "Head of Renewable Systems",
    bio: "Leading the transition to resilient renewable infrastructure through world-class electrical and sustainable engineering.",
    initials: "EM",
    qualifications: ["PH.D RENEWABLES", "NABCEP"],
    socials: { linkedin: "https://linkedin.com/in/elena-moretti" }
  },
  {
    name: "Julian Kwong",
    role: "Lead Systems Engineer",
    bio: "Expert in complex systems synchronization and industrial power optimization.",
    initials: "JK",
    qualifications: ["PE CERTIFIED", "LEED AP"],
    socials: { linkedin: "https://linkedin.com/in/julian-kwong" }
  },
  {
    name: "Sarah Rothschild",
    role: "Operations Director",
    bio: "Directing nationwide infrastructure operations and strategic project management.",
    initials: "SR",
    qualifications: ["MBA INFRASTRUCTURE", "PMP"],
    socials: { linkedin: "https://linkedin.com/in/sarah-rothschild" }
  },
  {
    name: "Marcus Vance",
    role: "Structural Engineer",
    bio: "Specializing in high-voltage structural analysis and infrastructure resilience.",
    initials: "MV",
    qualifications: ["SE CERTIFIED"],
    socials: { linkedin: "https://linkedin.com/in/marcus-vance" }
  },
  {
    name: "Lydia Thorne",
    role: "Energy Storage Specialist",
    bio: "Expert in utility-scale battery storage and energy management systems.",
    initials: "LT",
    qualifications: ["MS ELECTRICAL", "IEEE"],
    socials: { linkedin: "https://linkedin.com/in/lydia-thorne" }
  },
  {
    name: "David Baek",
    role: "Quality Assurance Lead",
    bio: "Ensuring uncompromising technical precision and ISO standards compliance.",
    initials: "DB",
    qualifications: ["ISO 9001 AUDITOR"],
    socials: { linkedin: "https://linkedin.com/in/david-baek" }
  },
  {
    name: "Nora Helder",
    role: "Environmental Consultant",
    bio: "Specialist in environmental impact assessments for large-scale energy projects.",
    initials: "NH",
    qualifications: ["EIA SPECIALIST"],
    socials: { linkedin: "https://linkedin.com/in/nora-helder" }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Path to Grid Decarbonization",
    slug: "grid-decarbonization-path",
    excerpt: "Exploring the multi-disciplinary engineering strategies required to modernize the global energy grid.",
    content: "Full technical article on grid modernization, multi-source renewables, and regulatory frameworks...",
    date: "12 OCT 2024",
    author: "Alistair Abernathy",
    category: "Infrastructure",
    image: "/images/blog/decarbonization.png",
    readTime: "8 min read"
  },
  {
    title: "Smart Grid Automation: Beyond the SCADA",
    slug: "smart-grid-automation",
    excerpt: "How real-time data is optimizing power distribution efficiency across industrial clusters.",
    content: "Detailed analysis of smart grid automation and its impact on industrial efficiency...",
    date: "05 OCT 2024",
    author: "Julian Kwong",
    category: "Industrial Tech",
    image: "/images/blog/smart-grid.png",
    readTime: "10 min read"
  },
  {
    title: "Scaling EV Infrastructure for Urban Centers",
    slug: "scaling-ev-infrastructure",
    excerpt: "A roadmap for city-wide electric vehicle charging networks and load management.",
    content: "A look at the technical challenges and solutions for urban EV infrastructure...",
    date: "28 SEP 2024",
    author: "Lydia Thorne",
    category: "Automation",
    image: "/images/blog/urban-ev.png",
    readTime: "6 min read"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "gulf-coast-grid-modernization",
    title: "Gulf Coast Grid Modernization",
    slug: "gulf-coast-grid-modernization",
    category: "Infrastructure",
    location: "Houston, TX",
    completionDate: "2024-02",
    description: "Advanced electrical system design and high-voltage grid integration for complex industrial operations.",
    challenge: "Upgrading transmission infrastructure while integrating diverse renewable sources.",
    solution: "Custom high-voltage switchgear and AI-driven load balancing systems.",
    results: ["Enhanced grid stability for 1M+ consumers", "Integrated 500MW of diverse renewable energy", "20% reduction in transmission losses"],
    mainImage: "/images/projects/gulf-coast.png",
    stats: [
      { label: "Renewable Integration", value: "500MW" },
      { label: "Loss Reduction", value: "20%" }
    ]
  },
  {
    id: "ohare-airport-power",
    title: "O'Hare International Airport Power Upgrade",
    slug: "ohare-airport-power",
    category: "Power Infrastructure",
    location: "Chicago, IL",
    completionDate: "2024-03",
    description: "Modernizing the electrical backbone of one of the world's busiest airports for enhanced reliability.",
    challenge: "Upgrading legacy power systems while maintaining 24/7 airport operations.",
    solution: "Phased implementation of smart distribution panels and redundant power backups.",
    results: ["99.99% power uptime achieved", "Modernized substation infrastructure", "Enhanced safety compliance"],
    mainImage: "/images/projects/ohare.png",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Efficiency", value: "+25%" }
    ]
  },
  {
    id: "arizona-smart-microgrid",
    title: "Arizona Desert Smart-Microgrid Initiative",
    slug: "arizona-smart-microgrid",
    category: "Rural Electrification",
    location: "Phoenix, AZ",
    completionDate: "2023-11",
    description: "Pioneering a sustainable microgrid solution for remote communities in the Southwest.",
    challenge: "Providing reliable power to remote areas with limited grid access.",
    solution: "Hybrid solar-wind microgrid with community-wide distribution and smart metering.",
    results: ["Clean energy for 5,000+ homes", "Local economic growth stimulated", "Scalable model for rural power"],
    mainImage: "/images/projects/arizona.png",
    stats: [
      { label: "Homes Powered", value: "5,000+" },
      { label: "Clean Energy", value: "100%" }
    ]
  }
];

export const REASONS: { title: string; description: string; icon: string }[] = [
  {
    title: "PE Certified Engineers",
    description: "Every project is managed by licensed professionals with deep technical expertise.",
    icon: "verified_user"
  },
  {
    title: "Turnkey Project Management",
    description: "From initial survey to final commissioning, we handle the entire engineering lifecycle.",
    icon: "assignment"
  },
  {
    title: "ISO 9001 Standards",
    description: "Adherence to international quality benchmarks for safety and reliability.",
    icon: "precision_manufacturing"
  },
  {
    title: "On-Time Completion",
    description: "Rigorous scheduling to ensure critical infrastructure is delivered as promised.",
    icon: "schedule"
  },
  {
    title: "24/7 Technical Support",
    description: "Continuous monitoring and rapid response for all installed systems.",
    icon: "support_agent"
  }
];

export const PROCESS_STEPS: { title: string; description: string; number: string }[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Defining project scope and engineering requirements for technical success."
  },
  {
    number: "02",
    title: "Site Survey",
    description: "Geospatial and technical analysis of physical and electrical constraints."
  },
  {
    number: "03",
    title: "Design",
    description: "Advanced modeling and electrical architectural planning for maximum efficiency."
  },
  {
    number: "04",
    title: "Installation",
    description: "Expert deployment by certified field technical teams under strict oversight."
  },
  {
    number: "05",
    title: "Commissioning",
    description: "Rigorous testing and handover of high-performance, safe engineering systems."
  }
];

export const PARTNERS: Partner[] = [
  { name: "Chevron", logo: "https://api.companyenrich.com/logo/chevron.com" },
  { name: "ExxonMobil", logo: "https://api.companyenrich.com/logo/exxonmobil.com" },
  { name: "Eaton", logo: "https://api.companyenrich.com/logo/eaton.com" },
  { name: "Schneider Electric", logo: "https://api.companyenrich.com/logo/se.com" },
  { name: "Siemens Energy", logo: "https://api.companyenrich.com/logo/siemens-energy.com" },
  { name: "General Electric", logo: "https://api.companyenrich.com/logo/ge.com" },
  { name: "NextEra Energy", logo: "https://api.companyenrich.com/logo/nexteraenergy.com" },
  { name: "Dominion Energy", logo: "https://api.companyenrich.com/logo/dominionenergy.com" },
  { name: "Southern Company", logo: "https://api.companyenrich.com/logo/southerncompany.com" },
  { name: "Duke Energy", logo: "https://api.companyenrich.com/logo/duke-energy.com" }
];

export const FOOTER_LINKS = {
  COMPANY: [
    { label: "About Us", href: "/about" },
    { label: "Our History", href: "/about/our-story" },
    { label: "Leadership", href: "/about/team" },
    { label: "Careers", href: "/careers" },
  ],
  SERVICES: [
    { label: "Structural Analysis", href: "/services/structural-analysis" },
    { label: "Renewable Integration", href: "/services/solar-renewable-energy" },
    { label: "Sustainability Audit", href: "/services/energy-audit" },
    { label: "Global Projects", href: "/projects" },
  ],
  SUPPORT: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/voltaedge", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/voltaedge", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/voltaedge", icon: "instagram" },
];

export const COMPANY_MILESTONES = [
  {
    year: "2004",
    title: "Foundation",
    description: "Incorporation of VoltaEdge in Houston, focused on regional grid optimization."
  },
  {
    year: "2007",
    title: "Regional Expansion",
    description: "First multi-state project launched across the Southwest, establishing our expansion strategy."
  },
  {
    year: "2010",
    title: "Transmission Lab",
    description: "Opening of the High-Voltage Testing Facility, the first private lab of its kind."
  },
  {
    year: "2013",
    title: "Solar Integration",
    description: "Deployment of the first large-scale solar synchronization hub in the Southwest."
  },
  {
    year: "2016",
    title: "West Coast Hub",
    description: "San Francisco headquarters established to manage renewable and hydro infrastructure projects."
  },
  {
    year: "2019",
    title: "Storage Innovation",
    description: "Pioneering the first utility-scale battery storage solution in the industrial sector."
  },
  {
    year: "2021",
    title: "Digital Twin Tech",
    description: "Launch of our proprietary predictive maintenance software for asset management."
  },
  {
    year: "2024",
    title: "Future-Proofing",
    description: "Leading the transition to green hydrogen infrastructure across coastal regions."
  }
];

