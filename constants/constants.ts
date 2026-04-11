/**
 * VoltaEdge Engineering - Static Content
 * All strings and configuration constants are defined here.
 * Zero hardcoded strings in JSX/TSX.
 */

export const SITE_NAME = "VoltaEdge Engineering";
export const SITE_TAGLINE = "Powering Tomorrow, Today.";
export const SITE_DESCRIPTION = "VoltaEdge Engineering delivers world-class electrical engineering, solar energy solutions, power distribution, and industrial automation services across Africa and beyond.";
export const SITE_EMAIL = "info@voltaedge.com";
export const SITE_PHONE = "+234 800 123 4567";
export const SITE_ADDRESS = "12 Power Avenue, Victoria Island, Lagos, Nigeria";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://voltaedge.com";

export const KEYWORDS = [
  "electrical engineering Nigeria",
  "renewable energy solutions",
  "solar power installation",
  "power distribution systems",
  "industrial automation Africa",
  "energy audit consulting",
  "EV charging infrastructure",
  "sustainable energy engineering",
  "certified electrical engineers Lagos",
  "commercial solar panel installation Africa",
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
    children: [
      { label: "Electrical Design", href: "/services/electrical-design" },
      { label: "Solar & Renewable", href: "/services/solar-renewable-energy" },
      { label: "Power Distribution", href: "/services/power-distribution" },
      { label: "Energy Audit", href: "/services/energy-audit" },
      { label: "Industrial Automation", href: "/services/industrial-automation" },
      { label: "EV Charging", href: "/services/ev-charging" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const COLORS = {
  NAVY: "#003B5C",
  OCEAN: "#005F8D",
  CHARCOAL: "#1D1F21",
  ICE_BLUE: "#E1F5FE",
  WHITE: "#FFFFFF",
};

export const SERVICES: Service[] = [
  {
    id: "electrical-design",
    title: "Electrical System Design",
    slug: "electrical-design",
    description: "Comprehensive electrical engineering services for commercial and industrial facilities, ensuring safety and efficiency.",
    icon: "circuit-board",
    features: ["Load calculation", "Wiring diagrams", "Lighting design", "Safety audits"],
    benefits: ["Optimized energy use", "Compliance with standards", "Future-proof systems"],
    imageUrl: "/images/hero/electrical-design.jpg",
  },
  {
    id: "solar-renewable",
    title: "Solar & Renewable Energy",
    slug: "solar-renewable-energy",
    description: "Cutting-edge solar power installation and renewable energy solutions for sustainable power generation.",
    icon: "sun",
    features: ["Solar panel installation", "Battery storage systems", "Inverter systems", "Hybrid solutions"],
    benefits: ["Reduced carbon footprint", "Energy independence", "Long-term cost savings"],
    imageUrl: "/images/hero/solar-renewable.jpg",
  },
  {
    id: "power-distribution",
    title: "Power Distribution",
    slug: "power-distribution",
    description: "Robust power distribution systems designed for reliability and scalability in demanding environments.",
    icon: "zap",
    features: ["Substation design", "Switchgear installation", "Cable management", "Protection systems"],
    benefits: ["Stable power supply", "Minimized downtime", "Scalable infrastructure"],
    imageUrl: "/images/hero/power-distribution.jpg",
  },
  {
    id: "energy-audit",
    title: "Energy Audit & Consulting",
    slug: "energy-audit",
    description: "Expert energy audit consulting to identify inefficiencies and implement cost-effective energy solutions.",
    icon: "search",
    features: ["Efficiency analysis", "Thermal imaging", "Power quality analysis", "Cost-benefit reporting"],
    benefits: ["Lower operational costs", "Improved equipment lifespan", "Regulatory compliance"],
    imageUrl: "/images/hero/energy-audit.jpg",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    slug: "industrial-automation",
    description: "Advanced industrial automation services to streamline processes and enhance productivity through technology.",
    icon: "cpu",
    features: ["PLC programming", "SCADA systems", "Control panel design", "Robotics integration"],
    benefits: ["Increased production speed", "Reduced manual errors", "Real-time monitoring"],
    imageUrl: "/images/hero/industrial-automation.jpg",
  },
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure",
    slug: "ev-charging",
    description: "Smart EV charging infrastructure solutions for businesses and public spaces, supporting the future of mobility.",
    icon: "battery-charging",
    features: ["Fast charger installation", "Network management", "Solar-powered charging", "Fleet solutions"],
    benefits: ["Support for green transit", "Attract EV owners", "Smart energy management"],
    imageUrl: "/images/hero/ev-charging.jpg",
  },
];

export const STATS: Stat[] = [
  { label: "Completed Projects", value: 450, suffix: "+", description: "Successful engineering deployments across Africa." },
  { label: "MW Solar Capacity", value: 125, suffix: "MW", description: "Total renewable energy capacity installed." },
  { label: "Certified Engineers", value: 35, suffix: "+", description: "In-house experts with global certifications." },
  { label: "Clients Served", value: 200, suffix: "+", description: "Satisfied industrial and commercial partners." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "VoltaEdge Engineering transformed our industrial facility with their solar solutions. Their expertise in electrical design is unparalleled in the region.",
    author: "Chief Emeka Okafor",
    role: "Managing Director",
    company: "Lagos Manufacturing Corp",
    avatar: "/images/team/avatar-1.jpg",
  },
  {
    quote: "The power distribution system designed by VoltaEdge has significantly reduced our operational downtime. A truly professional engineering firm.",
    author: "Engr. Sarah Adams",
    role: "Head of Operations",
    company: "West Africa Logistics",
    avatar: "/images/team/avatar-2.jpg",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "solar-farm-lagos",
    title: "15MW Solar Farm Deployment",
    slug: "solar-farm-lagos",
    category: "Renewable Energy",
    location: "Lagos, Nigeria",
    completionDate: "2024-03",
    description: "Full-scale solar farm installation providing sustainable energy to the Lagos industrial zone.",
    challenge: "Developing a stable power grid interface for a fluctuating energy source in a high-density area.",
    solution: "Implemented advanced hybrid inverters and a robust battery storage system with real-time SCADA monitoring.",
    results: ["15MW clean energy generated", "40% reduction in local industrial power costs", "Zero downtime since deployment"],
    mainImage: "/images/projects/solar-farm.jpg",
    stats: [
      { label: "Capacity", value: "15MW" },
      { label: "Homes Powered", value: "50,000+" }
    ]
  },
  {
    id: "industrial-automation-port",
    title: "Smart Port Automation System",
    slug: "industrial-automation-port",
    category: "Industrial Automation",
    location: "Port Harcourt, Nigeria",
    completionDate: "2023-11",
    description: "Automating container handling and power distribution for one of West Africa's busiest ports.",
    challenge: "Integrating legacy electrical systems with modern PLC and robotic control units.",
    solution: "Custom control panel design and high-speed fiber optic data backbone for system synchronization.",
    results: ["25% increase in operational efficiency", "Reduced manual handling errors by 60%", "Enhanced safety compliance"],
    mainImage: "/images/projects/port-automation.jpg",
    stats: [
      { label: "Efficiency Gain", value: "25%" },
      { label: "Safety Rating", value: "100%" }
    ]
  }
];

export const REASONS: { title: string; description: string; icon: string }[] = [
  {
    title: "Precision Engineering",
    description: "Every deployment is backed by rigorous calculations and industry-leading standards.",
    icon: "target"
  },
  {
    title: "Certified Expertise",
    description: "Our team holds COREN and global engineering certifications for all core disciplines.",
    icon: "award"
  },
  {
    title: "Safety First",
    description: "Uncompromising safety protocols in every electrical and renewable energy project.",
    icon: "shield-check"
  },
  {
    title: "Local Knowledge, Global Standards",
    description: "We understand the local energy landscape while delivering world-class engineering solutions.",
    icon: "globe"
  }
];

export const PROCESS_STEPS: { title: string; description: string; number: string }[] = [
  {
    number: "01",
    title: "Technical Consultation",
    description: "We begin with a deep dive into your infrastructure needs and energy requirements."
  },
  {
    number: "02",
    title: "System Design & Audit",
    description: "Our engineers develop a precise blueprint, optimized for efficiency and safety."
  },
  {
    number: "03",
    title: "Implementation & Deployment",
    description: "Expert execution using the highest-grade components and professional oversight."
  },
  {
    number: "04",
    title: "Testing & Handover",
    description: "Rigorous system testing followed by a seamless handover and technical documentation."
  }
];

export const PARTNERS: Partner[] = [
  { name: "Global Power Solutions", logo: "/images/partners/global-power.svg" },
  { name: "SolarTech Africa", logo: "/images/partners/solartech.svg" },
  { name: "Industrial Dynamics", logo: "/images/partners/industrial.svg" },
  { name: "EcoGrid Nigeria", logo: "/images/partners/ecogrid.svg" },
  { name: "Advanced Automation", logo: "/images/partners/advanced.svg" },
  { name: "Energy Metrics", logo: "/images/partners/metrics.svg" }
];

export const FOOTER_LINKS = {
  COMPANY: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about/team" },
    { label: "Our Story", href: "/about/our-story" },
    { label: "Careers", href: "/careers" },
  ],
  SERVICES: [
    { label: "Electrical Design", href: "/services/electrical-design" },
    { label: "Solar Energy", href: "/services/solar-renewable-energy" },
    { label: "Power Distribution", href: "/services/power-distribution" },
    { label: "Automation", href: "/services/industrial-automation" },
  ],
  SUPPORT: [
    { label: "Contact Us", href: "/contact" },
    { label: "Get a Quote", href: "/contact/get-a-quote" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/voltaedge", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/voltaedge", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/voltaedge", icon: "instagram" },
];
