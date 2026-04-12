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
    icon: "architecture",
    features: ["Load calculation", "Wiring diagrams", "Lighting design", "Safety audits"],
    benefits: ["Optimized energy use", "Compliance with standards", "Future-proof systems"],
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "renewable-integration",
    title: "Renewable Energy Integration",
    slug: "renewable-energy-integration",
    description: "Multi-source renewable solutions including solar, wind, and hydrothermal grid synchronization.",
    icon: "layers",
    features: ["Wind & Solar integration", "Hybrid energy systems", "Grid synchronization", "Sustainable transition planning"],
    benefits: ["Diverse energy portfolio", "Technical resilience", "Long-term sustainability"],
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "power-distribution",
    title: "Power Distribution",
    slug: "power-distribution",
    description: "Optimization of LV/MV/HV distribution networks and substation maintenance.",
    icon: "electric_bolt",
    features: ["Substation design", "Switchgear installation", "Cable management", "Protection systems"],
    benefits: ["Stable power supply", "Minimized downtime", "Scalable infrastructure"],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "energy-audit",
    title: "Energy Audit",
    slug: "energy-audit",
    description: "Comprehensive consumption analysis and efficiency strategy implementation for industrial plants.",
    icon: "fact_check",
    features: ["Efficiency analysis", "Thermal imaging", "Power quality analysis", "Cost-benefit reporting"],
    benefits: ["Lower operational costs", "Improved equipment lifespan", "Regulatory compliance"],
    imageUrl: "https://images.unsplash.com/photo-1516387012670-29a26390172d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    slug: "industrial-automation",
    description: "SCADA systems, PLC programming, and smart grid automation for real-time control.",
    icon: "settings_suggest",
    features: ["PLC programming", "SCADA systems", "Control panel design", "Robotics integration"],
    benefits: ["Increased production speed", "Reduced manual errors", "Real-time monitoring"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ev-charging",
    title: "EV Charging Network",
    slug: "ev-charging",
    description: "Design and deployment of smart electric vehicle charging infrastructure for modern cities.",
    icon: "ev_station",
    features: ["Fast charger installation", "Network management", "Solar-powered charging", "Fleet solutions"],
    benefits: ["Support for green transit", "Attract EV owners", "Smart energy management"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
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
    mainImage: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2070&auto=format&fit=crop",
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
    mainImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
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
    mainImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
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

