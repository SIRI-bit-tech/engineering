

export const SITE_NAME = "VoltaEdge Engineering";
export const SITE_TAGLINE = "High-Performance Energy Infrastructure & Architecture";
export const SITE_DESCRIPTION = "VoltaEdge Engineering provides elite electrical engineering, renewable energy integration, power distribution, and industrial automation services for the modern infrastructure.";
export const SITE_EMAIL = "[EMAIL_ADDRESS]";
export const SITE_PHONE = "+1 (800)-VOLTAEDGE";
export const SITE_ADDRESS = "United States, Canada, Mexico, Europe, Asia, Australia";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://voltaedge.com";
export const MISSION_STATEMENT = "To deliver elite-tier electrical engineering and renewable energy infrastructure through technical precision, innovative design, and unwavering integrity, architecting a resilient future for global industry.";
export const VISION_STATEMENT = "To become the definitive global benchmark for technical authority in energy architecture, pioneering the transition to sustainable industrial autonomy through elite energy engineering.";

export const KEYWORDS = [
  "Electrical Engineering",
  "Renewable Integration",
  "Power Distribution",
  "Industrial Automation",
  "Energy Audit",
  "EV Charging",
  "BIM Modeling",
  "PLC Programming",
  "SCADA",
  "HVDC",
  "Grid Modernization"
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Electrical Design", href: "/services/electrical-design" },
      { label: "Renewable Integration", href: "/services/renewable-energy-integration" },
      { label: "Power Distribution", href: "/services/power-distribution" },
      { label: "Sustainability Audit", href: "/services/energy-audit" },
      { label: "Industrial Automation", href: "/services/industrial-automation" },
      { label: "EV Infrastructure", href: "/services/ev-charging" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "electrical-design",
    title: "Electrical System Design",
    slug: "electrical-design",
    description: "High-precision schematics and blueprint development for complex infrastructure projects.",
    longDescription: "Our Electrical System Design department specializes in the architectural blueprinting of high-performance energy networks. Using modern BIM (Building Information Modeling) and CAD software, we create scalable, safety-first electrical infrastructures for industrial complexes and commercial high-rises. Our designs prioritize future-proofing, allowing for seamless capacity upgrades as your operational needs evolve.",
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
    title: "Sustainability Audit",
    slug: "energy-audit",
    description: "Detailed utility analysis and decarbonization roadmaps for high-consumption entities.",
    longDescription: "Our Sustainability Audit is a deep-tier diagnostic dive into your facility's energy DNA. We don't just look at bills; we perform thermal imaging, load profile analysis, and harmonic distortion testing to identify exactly where your energy is being wasted. Every audit culminates in an investment-grade decarbonization roadmap that prioritizes high-ROI efficiency upgrades and renewable transitions.",
    technicalAnalysis: [
      "ASHRAE Level I, II & III Energy Audits",
      "Thermal Imaging & Building Envelope Analysis",
      "ISO 50001 Energy Management Consulting",
      "Harmonic Profile & Power Quality Testing",
      "HVAC & Boiler System Efficiency Prototyping",
      "Compressed Air System Leakage Localization"
    ],
    icon: "assessment",
    features: [
      "Energy Consumption Base-lining",
      "Utility Bill Forensic Analysis",
      "Operational Efficiency Modeling",
      "ROI-Based Retrofit Recommendations",
      "Carbon Footprint Measurement",
      "Federal & State Incentive Mapping"
    ],
    benefits: [
      "Immediate Reduction in Operational Utility Costs",
      "Enhanced ESG Reporting & Transparency",
      "Extended Lifespan of Mechanical Assets",
      "Shielding against Future Energy Price Spikes",
      "Certification for LEED & ISO Energy Standards",
      "Data-Backed Justification for CapEx Projects"
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
  { label: "Projects Delivered", value: 150, suffix: "+", description: "Successful engineering deployments across the globe." },
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
  }
];

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
  // --- RENEWABLE INTEGRATION (6 Total) ---
  {
    id: "gulf-coast-grid-modernization",
    title: "Gulf Coast Grid Modernization",
    slug: "gulf-coast-grid-modernization",
    category: "Renewable Integration",
    location: "Houston, TX",
    completionDate: "2018-01",
    description: "Advanced electrical system design and high-voltage grid integration for complex industrial operations.",
    challenge: "Upgrading transmission infrastructure while integrating diverse renewable sources.",
    solution: "Custom high-voltage switchgear and AI-driven load balancing systems.",
    results: ["Enhanced grid stability for 1M+ consumers", "Integrated 500MW of diverse renewable energy", "20% reduction in transmission losses"],
    mainImage: "/images/projects/gulf-coast.png",
    // gallery: ["/images/projects/gulf-coast.png", "/images/projects/gulf-coast-1.png", "/images/projects/gulf-coast-2.png"],
    stats: [{ label: "Renewable Integration", value: "500MW" }, { label: "Loss Reduction", value: "20%" }],
    // Extended project details
    technicalAnalysis: [
      "345kV transmission line reinforcement with advanced conductor technology",
      "Implementation of wide-area measurement system (WAMS) for real-time grid monitoring",
      "Custom FACTS devices for reactive power compensation and voltage stability",
      "Advanced protection relaying schemes with differential and distance protection",
      "Integration of 150MW solar PV and 200MW wind generation assets",
      "Deployment of microgrid controllers for industrial park islanding capability"
    ],
    implementationTimeline: [
      "Phase 1 (Q1-Q2 2017): Transmission line audit and capacity analysis",
      "Phase 2 (Q3 2017): Substation equipment procurement and site preparation",
      "Phase 3 (Q4 2017): Installation of advanced protection and control systems",
      "Phase 4 (Q1 2018): Renewable energy integration and commissioning",
      "Phase 5 (Q1 2018): Final testing and commercial operation"
    ],
    keyTechnologies: [
      "GE P30 breakers with digital protection relays",
      "Siemens SIPROTEC protection systems",
      "Schweitzer Engineering Laboratory (SEL) phasor measurement units",
      "ABB FACTS devices and STATCOM systems",
      "Custom SCADA integration with Predictive Analytics",
      "Distributed Energy Resource Management System (DERMS)"
    ],
    environmentalImpact: [
      "Reduced CO2 emissions by 450,000 tons annually through renewable integration",
      "Minimized land disturbance through existing right-of-way utilization",
      "Enhanced grid resilience reducing fossil fuel backup requirements",
      "Implementation of avian protection measures for wildlife safety"
    ]
  },
  {
    id: "north-sea-offshore-wind",
    title: "North Sea Offshore Wind Sync",
    slug: "north-sea-offshore-wind",
    category: "Renewable Integration",
    location: "Stavanger, Norway",
    completionDate: "2018-07",
    description: "Subsea high-voltage cabling and grid synchronization for a major offshore wind array.",
    challenge: "The primary engineering constraint involved the deployment of subsea high-voltage cabling across the technically challenging North Sea floor, where extreme maritime currents and variable seafloor topography posed significant risks to cable integrity. Additionally, the project required the seamless synchronization of variable wind power with the national grid, necessitating a solution that could handle massive fluctuations in frequency without compromising grid stability.",
    solution: "VoltaEdge implemented a state-of-the-art HVDC (High Voltage Direct Current) converter system that utilized VSC (Voltage Sourced Converter) technology. This allowed for precise reactive power control and black-start capability. Our team engineered custom cable protection systems using high-density polyurethane shells and integrated real-time maritime signal processing to monitor cable temperature and strain via fiber-optic sensory arrays embedded within the power lines.",
    results: [
      "Successful synchronization of 1.2GW of renewable energy into the national grid with 99.98% stability.",
      "Implementation of the world's first VSC-HVDC link in an extreme maritime environment.",
      "Reductions in transmission losses by 15% compared to traditional AC link alternatives.",
      "Established a 25-year predictive maintenance cycle using AI-driven fiber optic monitoring.",
      "Minimized environmental impact on local seabed ecosystems through precision deep-bore directional drilling.",
      "Achieved ISO-14001 certification for underwater infrastructure sustainability."
    ],
    mainImage: "/images/projects/north-sea-wind.png",
    // gallery: ["/images/projects/north-sea-wind.png", "/images/projects/north-sea-wind-1.png"],
    stats: [{ label: "Capacity", value: "1.2GW" }, { label: "Standard", value: "ISO-14001" }],
    // Extended project details
    technicalAnalysis: [
      "±320kV VSC-HVDC converter stations with black-start capability",
      "180km subsea cable installation with dynamic positioning vessels",
      "Real-time fiber optic temperature and strain monitoring systems",
      "Advanced corrosion protection with cathodic protection systems",
      "Grid code compliance with Norwegian TSO (Statnett) requirements",
      "Marine mammal protection systems with acoustic monitoring"
    ],
    implementationTimeline: [
      "Phase 1 (Q1-Q2 2017): Marine survey and route optimization studies",
      "Phase 2 (Q3 2017): Cable manufacturing and converter station construction",
      "Phase 3 (Q4 2017-Q1 2018): Subsea cable installation and burial",
      "Phase 4 (Q2 2018): Converter station commissioning and grid connection",
      "Phase 3 (Q3 2018): Full system testing and commercial operation"
    ],
    keyTechnologies: [
      "Siemens HVDC PLUS converter technology",
      "Nexans submarine cable systems with XLPE insulation",
      "ABB MACH control and protection systems",
      "Custom fiber optic distributed temperature sensing (DTS)",
      "Real-time SCADA integration with Norwegian grid operator",
      "Advanced weather prediction systems for wind forecasting"
    ],
    environmentalImpact: [
      "Zero seabed disturbance through horizontal directional drilling",
      "Marine ecosystem monitoring with underwater acoustic sensors",
      "Reduced aviation fuel consumption through renewable energy",
      "Support for Norway's 2030 carbon neutrality goals",
      "Enhanced biodiversity through artificial reef integration"
    ]
  },
  {
    id: "brazil-solar-hydro",
    title: "Amazon Basin Solar-Hydro Hybrid",
    slug: "brazil-solar-hydro-hybrid",
    category: "Renewable Integration",
    location: "Manaus, Brazil",
    completionDate: "2019-11",
    description: "Multi-node hybrid integration of floating solar arrays on existing hydroelectric reservoirs.",
    challenge: "The integration of floating solar arrays onto a legacy hydroelectric reservoir required a complete redesign of the substation's reactive power management. The extreme humidity and variable water levels of the Amazon basin necessitated high-integrity, corrosion-resistant electrical coupling systems that could withstand tropical storm surges while maintaining consistent power output.",
    solution: "Our engineering team designed a custom floating racking system coupled with high-efficiency bifacial modules. We implemented a hybrid inverter system that dynamically balances the solar output with the hydroelectric turbines, effectively using the reservoir as a massive natural battery to buffer solar intermittency during the rainy season.",
    results: [
      "Increased total facility nameplate capacity by 150MW without additional land clearing.",
      "Reduced evaporation rates of the reservoir by 10% in covered areas, preserving hydro potential.",
      "Successful deployment of IP68-rated underwater cabling systems in a high-humidity tropical environment.",
      "Established a remote-monitoring satellite link for real-time performance tracking in the Amazon interior."
    ],
    mainImage: "/images/projects/brazil-solar.png",
    // gallery: ["/images/projects/brazil-solar.png", "/images/projects/brazil-solar-1.png"],
    stats: [{ label: "Output Boost", value: "+35%" }, { label: "Homes Powered", value: "200k" }],
    // Extended project details
    technicalAnalysis: [
      "Floating solar array design with wave-resistant anchoring systems",
      "Hybrid inverter technology for seamless solar-hydro integration",
      "Advanced water quality monitoring to prevent ecosystem disruption",
      "Custom mooring systems for 10-meter water level fluctuations",
      "High-efficiency bifacial solar panels with anti-reflective coating",
      "Real-time power flow optimization algorithms"
    ],
    implementationTimeline: [
      "Phase 1 (Q1-Q2 2019): Environmental impact assessment and permitting",
      "Phase 2 (Q3 2019): Floating platform manufacturing and testing",
      "Phase 3 (Q3-Q4 2019): Installation of 50,000 floating solar panels",
      "Phase 4 (Q4 2019): Grid integration and control system commissioning",
      "Phase 5 (November 2019): Performance optimization and commercial operation"
    ],
    keyTechnologies: [
      "SunPower X-Series floating solar modules",
      "Sungrow hybrid inverters with MPPT technology",
      "Custom HDPE floating platforms with UV stabilization",
      "Schneider Electric microgrid controllers",
      "Real-time SCADA integration with national grid operator",
      "Advanced weather prediction systems for Amazon basin"
    ],
    environmentalImpact: [
      "Reduced reservoir evaporation by 10% increasing hydro efficiency",
      "Zero land use impact through floating deployment",
      "Enhanced water quality through reduced algae growth",
      "Support for Brazil's 2030 renewable energy targets",
      "Minimal ecosystem disruption through careful design"
    ]
  },
  {
    id: "japan-smart-grid-cluster",
    title: "Yokohama Smart Grid Cluster",
    slug: "japan-smart-grid-cluster",
    category: "Renewable Integration",
    location: "Yokohama, Japan",
    completionDate: "2019-08",
    description: "Hyper-localized smart grid implementation for a high-density industrial district.",
    challenge: "Balancing peak industrial loads with locally generated rooftop solar and geothermal energy.",
    solution: "Block-chain based energy trading protocol and utility-scale battery buffers.",
    results: ["40% reduction in peak-hour grid reliance", "Implemented zero-blackout industrial logic", "Enhanced regional energy autonomy"],
    mainImage: "/images/projects/japan-grid.png",
    // gallery: ["/images/projects/japan-grid.png", "/images/projects/japan-grid-1.png"],
    stats: [{ label: "Peak Shaving", value: "40%" }, { label: "Battery Cap", value: "100MWh" }],
    // Extended project details
    technicalAnalysis: [
      "Blockchain-based peer-to-peer energy trading platform",
      "AI-driven load forecasting with machine learning algorithms",
      "Advanced battery management systems with predictive analytics",
      "Real-time demand response automation for industrial clients",
      "Microgrid controller with islanding capability",
      "Advanced metering infrastructure (AMI) deployment"
    ],
    implementationTimeline: [
      "Phase 1 (Q1-Q2 2019): Industrial audit and energy profiling",
      "Phase 2 (Q3 2019): Battery storage system installation",
      "Phase 3 (Q4 2019): Smart grid controller deployment",
      "Phase 4 (Q1 2020): Blockchain platform integration",
      "Phase 2 (Q2 2020): Full system testing and commercial operation"
    ],
    keyTechnologies: [
      "Tesla Megapack battery storage systems",
      "Custom blockchain energy trading platform",
      "Siemens digital grid controllers",
      "IBM Watson IoT for predictive analytics",
      "Advanced metering infrastructure with real-time pricing",
      "Machine learning algorithms for demand forecasting"
    ],
    environmentalImpact: [
      "Reduced peak demand stress on national grid",
      "Increased renewable energy utilization by 60%",
      "Zero blackout incidents in industrial district since implementation",
      "Support for Japan's 2050 carbon neutrality goals",
      "Enhanced grid resilience during natural disasters"
    ]
  },
  {
    id: "germany-industrial-decarbonization",
    title: "Bavarian Industrial Decarbonization",
    slug: "germany-industrial-decarbonization",
    category: "Renewable Integration",
    location: "Munich, Germany",
    completionDate: "2020-03",
    description: "Retrofitting legacy manufacturing plants with hybrid solar and hydrogen storage systems.",
    challenge: "Integrating green hydrogen fuel cells with existing high-demand electrical machinery.",
    solution: "Development of specialized power converters and hydrogen-electrical sync controllers.",
    results: ["Achieved 85% energy self-sufficiency", "Eliminated on-site coal-based steam reliance", "Certified carbon-neutral facility"],
    mainImage: "/images/projects/germany-decarb.png",
    // gallery: ["/images/projects/germany-decarb.png", "/images/projects/germany-decarb-1.png"],
    stats: [{ label: "Self-Sufficiency", value: "85%" }, { label: "CO2 Saving", value: "80%" }],
    // Extended project details
    technicalAnalysis: [
      "Green hydrogen electrolysis system with PEM technology",
      "Hybrid solar-hydrogen storage with fuel cell backup",
      "Advanced power converters for industrial machinery compatibility",
      "Real-time hydrogen production optimization algorithms",
      "Carbon capture and utilization systems integration",
      "Smart energy management with predictive load balancing"
    ],
    implementationTimeline: [
      "Phase 1 (Q2-Q3 2019): Industrial energy audit and system design",
      "Phase 2 (Q4 2019): Solar panel installation and hydrogen electrolyzer setup",
      "Phase 3 (Q1 2020): Fuel cell integration and power converter deployment",
      "Phase 4 (Q2 2020): Control system commissioning and grid connection",
      "Phase 5 (Q1 2020): Performance optimization and carbon neutrality certification"
    ],
    keyTechnologies: [
      "Siemens Green Hydrogen electrolysis systems",
      "Bloom Energy solid oxide fuel cells",
      "Custom power electronics for industrial applications",
      "Advanced battery storage systems for load balancing",
      "Real-time carbon monitoring and reporting systems",
      "AI-driven energy optimization algorithms"
    ],
    environmentalImpact: [
      "Achieved 85% energy self-sufficiency for manufacturing operations",
      "Eliminated 50,000 tons of CO2 emissions annually",
      "Zero coal consumption since March 2020",
      "Support for Germany's 2045 climate neutrality goals",
      "Established model for industrial decarbonization in Europe"
    ]
  },
  {
    id: "australia-outback-storage",
    title: "Australian Outback Redundant Storage",
    slug: "australia-outback-storage",
    category: "Renewable Integration",
    location: "Kalgoorlie, Australia",
    completionDate: "2020-09",
    description: "Installing the world's largest industrial-scale lithium-ion battery buffer for a mining complex.",
    challenge: "Extreme temperature management for battery cells and 24/7 mission-critical uptime.",
    solution: "Subterranean cooling tunnels and redundant liquid thermal management systems.",
    results: ["Zero downtime during regional grid failures", "Optimized solar capture for 24-hour mining operations", "Reduced fuel costs by $2M/year"],
    mainImage: "/images/projects/australia-storage.png",
    // gallery: ["/images/projects/australia-storage.png", "/images/projects/australia-storage-1.png"],
    stats: [{ label: "Storage Capacity", value: "250MWh" }, { label: "ROI Delay", value: "3 Yrs" }],
    // Extended project details
    technicalAnalysis: [
      "Industrial-scale lithium-ion battery storage with thermal management",
      "Subterranean cooling systems for extreme temperature protection",
      "Redundant power conversion systems for 99.99% uptime",
      "Advanced battery management with predictive analytics",
      "Real-time monitoring with fiber optic temperature sensors",
      "Grid-forming inverter technology for microgrid capability"
    ],
    implementationTimeline: [
      "Phase 1 (Q1-Q2 2020): Site preparation and cooling system installation",
      "Phase 2 (Q3 2020): Battery rack assembly and power converter setup",
      "Phase 3 (Q3 2020): Control system integration and testing",
      "Phase 4 (Q3 2020): Grid connection and commercial commissioning",
      "Phase 5 (September 2020): Performance optimization and ROI validation"
    ],
    keyTechnologies: [
      "Tesla Megapack 2XL battery storage systems",
      "Custom liquid cooling systems with redundant pumps",
      "ABB grid-forming inverters with black-start capability",
      "Advanced battery management system (BMS) with predictive analytics",
      "Real-time SCADA integration with mining operations",
      "Fiber optic distributed temperature sensing (DTS)"
    ],
    environmentalImpact: [
      "Eliminated 2 million liters of diesel fuel consumption annually",
      "Reduced mining operation carbon footprint by 40%",
      "Zero power outages during regional grid failures",
      "Enhanced grid stability for remote mining communities",
      "Support for Australia's 2030 renewable energy targets"
    ]
  },

  // --- INFRASTRUCTURE (6 Total) ---
  {
    id: "ohare-airport-power",
    title: "O'Hare International Airport Power Upgrade",
    slug: "ohare-airport-power",
    category: "Infrastructure",
    location: "Chicago, IL",
    completionDate: "2021-04",
    description: "Modernizing the electrical backbone of one of the world's busiest airports for enhanced reliability.",
    challenge: "Upgrading legacy power systems while maintaining 24/7 airport operations.",
    solution: "Phased implementation of smart distribution panels and redundant power backups.",
    results: ["99.99% power uptime achieved", "Modernized substation infrastructure", "Enhanced safety compliance"],
    mainImage: "/images/projects/ohare.png",
    // gallery: ["/images/projects/ohare.png", "/images/projects/ohare-1.png", "/images/projects/ohare-2.png"],
    stats: [{ label: "Uptime", value: "99.99%" }, { label: "Efficiency", value: "+25%" }]
  },
  {
    id: "singapore-port-electrification",
    title: "Singapore Mega-Port Electrification",
    slug: "singapore-port-electrification",
    category: "Infrastructure",
    location: "Singapore",
    completionDate: "2021-10",
    description: "Electrifying thousands of automated guided vehicles (AGVs) and wharf cranes in a major logistics hub.",
    challenge: "Implementing high-speed docking and wireless power transfer for thousands of moving assets.",
    solution: "Development of underground wireless charging loops and smart load orchestration.",
    results: ["Fully automated, 100% electric port operations", "24/7 peak load management implemented", "Reduced port-wide noise pollution by 60%"],
    mainImage: "/images/projects/singapore-port.png",
    // gallery: ["/images/projects/singapore-port.png", "/images/projects/singapore-port-1.png"],
    stats: [{ label: "Autonomous Assets", value: "2,000+" }, { label: "Noise Reduction", value: "60%" }]
  },
  {
    id: "london-crossrail-power",
    title: "London Crossrail Traction Power",
    slug: "london-crossrail-power",
    category: "Infrastructure",
    location: "London, UK",
    completionDate: "2022-05",
    description: "Designing the high-voltage traction power network for a new 100km urban rail system.",
    challenge: "Integrating new high-voltage rail infrastructure with 150-year-old Victorian tunnels.",
    solution: "Compact, custom-designed sub-stations and predictive thermal monitoring for deep-level cabling.",
    results: ["Powering 200 million annual passenger journeys", "Achieved 100% electromagnetic compatibility", "Reduced energy loss via smart braking sync"],
    mainImage: "/images/projects/london-crossrail.png",
    // gallery: ["/images/projects/london-crossrail.png", "/images/projects/london-crossrail-1.png"],
    stats: [{ label: "Tunnels Synced", value: "100km" }, { label: "System Load", value: "150MVA" }]
  },
  {
    id: "dubai-smart-city-grid",
    title: "Dubai Smart City Power Spine",
    slug: "dubai-smart-city-grid",
    category: "Infrastructure",
    location: "Dubai, UAE",
    completionDate: "2022-11",
    description: "Laying the electrical foundation for a major high-tech urban expansion project.",
    challenge: "Managing massive cooling loads in extreme heat while ensuring high-aesthetic urban integration.",
    solution: "Underground high-voltage DC (HVDC) backbone and decentralized solar aesthetic structures.",
    results: ["Optimized power for 3M+ sq. ft. of smart buildings", "Integrated world-first solar architectural cooling", "Zero visible power cabling across the district"],
    mainImage: "/images/projects/dubai-grid.png",
    // gallery: ["/images/projects/dubai-grid.png", "/images/projects/dubai-grid-1.png"],
    stats: [{ label: "HVDC Spine", value: "400kV" }, { label: "Smart Meters", value: "50k+" }],
    // Extended project details
    technicalAnalysis: [
      "400kV underground HVDC transmission backbone with minimal visual impact",
      "Decentralized solar building integration with aesthetic architecture",
      "Advanced cooling load management for desert climate conditions",
      "Smart grid automation with real-time demand response",
      "Integrated building management systems (BMS) optimization",
      "Predictive load forecasting for extreme temperature events"
    ],
    implementationTimeline: [
      "Phase 1 (Q2 2022): Underground utility corridor installation",
      "Phase 2 (Q3 2022): HVDC converter station construction",
      "Phase 3 (Q3 2022): Smart grid deployment and building integration",
      "Phase 4 (Q4 2022): Solar architecture integration and testing",
      "Phase 5 (Q4 2022): Full system commissioning and performance optimization"
    ],
    keyTechnologies: [
      "Siemens HVDC PLUS transmission technology",
      "Custom solar-integrated building facade systems",
      "Schneider Electric EcoStruxure smart grid platform",
      "Advanced building management systems with AI optimization",
      "Real-time SCADA integration with Dubai Electricity & Water Authority",
      "Predictive analytics for cooling load management"
    ],
    environmentalImpact: [
      "Zero visible power infrastructure across smart city district",
      "Reduced cooling energy consumption by 30% through smart management",
      "Integrated renewable energy for 40% of district power needs",
      "Support for Dubai's 2050 Clean Energy Strategy",
      "Enhanced urban aesthetics with hidden utility infrastructure"
    ]
  },
  {
    id: "shanghai-industrial-park",
    title: "Shanghai Megascale Industrial Park",
    slug: "shanghai-industrial-park",
    category: "Infrastructure",
    location: "Shanghai, China",
    completionDate: "2023-06",
    description: "Unified power management system for a 20-factory industrial cluster.",
    challenge: "Preventing voltage dips across sensitive high-precision fabrication lines.",
    solution: "Implementation of a centralized power quality monitoring hub and localized UPS buffers.",
    results: ["Eliminated voltage distortion by 95%", "Reduced aggregate utility costs by 22%", "Certified for high-precision semi-conductor fabrication"],
    mainImage: "/images/projects/shanghai-park.png",
    // gallery: ["/images/projects/shanghai-park.png", "/images/projects/shanghai-park-1.png"],
    stats: [{ label: "Factories Synced", value: "20" }, { label: "Distortion Drop", value: "95%" }]
  },
  {
    id: "new-york-substation-hardening",
    title: "NYC Resilient Substation Modernization",
    slug: "new-york-substation-hardening",
    category: "Infrastructure",
    location: "New York, NY",
    completionDate: "2023-12",
    description: "Physically and digitally hardening shoreline substations against flooding and cyber-threats.",
    challenge: "Protecting critical grid assets in flood zones while maintaining 24/7 power to Lower Manhattan.",
    solution: "Water-tight mechanical sealing and enterprise-grade OT firewall implementation.",
    results: ["Certified for Category 4 flood resilience", "Passed intensive federal cybersecurity stress tests", "Continuous uptime during 3 major storm events"],
    mainImage: "/images/projects/nyc-hardening.png",
    // gallery: ["/images/projects/nyc-hardening.png", "/images/projects/nyc-hardening-1.png"],
    stats: [{ label: "Resilience Level", value: "CAT-4" }, { label: "Cyber Rating", value: "NIST-Comp" }],
    // Extended project details
    technicalAnalysis: [
      "Category 4 hurricane-rated substation hardening systems",
      "Water-tight mechanical sealing with redundant protection",
      "Enterprise-grade OT cybersecurity with zero-trust architecture",
      "Advanced flood monitoring and predictive alert systems",
      "Redundant power routing with automatic load transfer",
      "Real-time thermal monitoring with predictive maintenance"
    ],
    implementationTimeline: [
      "Phase 1 (Q3-Q4 2023): Flood vulnerability assessment and design",
      "Phase 2 (Q1 2023): Physical hardening and water protection systems",
      "Phase 3 (Q2 2024): Cybersecurity infrastructure deployment",
      "Phase 4 (Q3 2024): Testing and certification with federal authorities",
      "Phase 5 (Q4 2024): Full commissioning and operational readiness"
    ],
    keyTechnologies: [
      "Custom flood barrier systems with automatic deployment",
      "Water-tight electrical enclosures with IP68 rating",
      "Palo Alto Networks OT cybersecurity platform",
      "Real-time flood monitoring with IoT sensor networks",
      "Redundant SCADA systems with hot-swappable components",
      "Advanced thermal imaging for predictive maintenance"
    ],
    environmentalImpact: [
      "Enhanced grid resilience for Lower Manhattan during extreme weather",
      "Zero power outages during 3 major storm events in 2023",
      "Reduced emergency response costs through proactive protection",
      "Support for New York's climate adaptation strategies",
      "Established model for coastal infrastructure resilience"
    ]
  },

  // --- RURAL ELECTRIFICATION (6 Total) ---
  {
    id: "arizona-smart-microgrid",
    title: "Arizona Desert Smart-Microgrid Initiative",
    slug: "arizona-smart-microgrid",
    category: "Rural Electrification",
    location: "Phoenix, AZ",
    completionDate: "2018-02",
    description: "Pioneering a sustainable microgrid solution for remote communities in the Southwest.",
    challenge: "Providing reliable power to remote areas with limited grid access.",
    solution: "Hybrid solar-wind microgrid with community-wide distribution and smart metering.",
    results: ["Clean energy for 5,000+ homes", "Local economic growth stimulated", "Scalable model for rural power"],
    mainImage: "/images/projects/arizona.png",
    // gallery: ["/images/projects/arizona.png", "/images/projects/arizona-1.png", "/images/projects/arizona-2.png"],
    stats: [{ label: "Homes Powered", value: "5,000+" }, { label: "Clean Energy", value: "100%" }],
    // Extended project details
    technicalAnalysis: [
      "Hybrid solar-wind microgrid with battery storage integration",
      "Advanced demand response systems for residential load management",
      "Smart metering infrastructure with real-time monitoring",
      "Predictive weather integration for renewable optimization",
      "Grid-forming inverter technology for island operation",
      "Advanced distribution automation with self-healing capabilities"
    ],
    implementationTimeline: [
      "Phase 1 (Q2-Q3 2017): Community energy assessment and system design",
      "Phase 2 (Q4 2017): Solar panel and wind turbine installation",
      "Phase 3 (Q1 2018): Battery storage system deployment",
      "Phase 4 (Q1 2018): Smart grid integration and community training",
      "Phase 5 (Q1 2018): Full commissioning and performance optimization"
    ],
    keyTechnologies: [
      "SunPower residential solar arrays with tracking systems",
      "GE wind turbines designed for desert conditions",
      "Tesla Powerwall residential battery storage",
      "Schneider Electric smart grid controllers",
      "Advanced metering infrastructure with real-time pricing",
      "Predictive weather forecasting systems"
    ],
    environmentalImpact: [
      "100% renewable energy for 5,000+ rural homes",
      "Reduced diesel generator usage by 95%",
      "Eliminated 15,000 tons of CO2 emissions annually",
      "Created local jobs in renewable energy maintenance",
      "Established model for rural electrification across Southwest"
    ]
  },
  {
    id: "philippines-archipelago-link",
    title: "Philippines Archipelago Energy Link",
    slug: "philippines-archipelago-link",
    category: "Rural Electrification",
    location: "Palawan, Philippines",
    completionDate: "2018-08",
    description: "Creating an inter-island power bridge for remote fishing villages.",
    challenge: "Subsea cabling across unstable sea-beds and extreme weather resilience.",
    solution: "Reinforced subsea HVDC cabling and modular village-level solar buffers.",
    results: ["First-time energy access for 15,000 residents", "Enabled local cold-storage for fishing industry", "Reduced energy costs by 70% vs. generators"],
    mainImage: "/images/projects/philippines-link.png",
    // gallery: ["/images/projects/philippines-link.png", "/images/projects/philippines-link-1.png"],
    stats: [{ label: "Residents Impacted", value: "15,000" }, { label: "Cost Saving", value: "70%" }]
  },
  {
    id: "swiss-alpine-mini-grid",
    title: "Swiss Alpine High-Altitude Hub",
    slug: "swiss-alpine-mini-grid",
    category: "Rural Electrification",
    location: "Zermatt, Switzerland",
    completionDate: "2019-03",
    description: "Reliable energy for high-altitude research stations and remote mountain resorts.",
    challenge: "Extreme snow accumulation and logistical access to peak-level infrastructure.",
    solution: "Heated solar racking and modular energy storage units lifted by heavy-lift helicopters.",
    results: ["100% energy autonomy for research peaks", "Zero performance drop during record snowfall", "Reduced on-site fuel transport costs by 85%"],
    mainImage: "/images/projects/swiss-alps-power.png",
    // gallery: ["/images/projects/swiss-alps-power.png", "/images/projects/swiss-alps-power-1.png"],
    stats: [{ label: "Altitude", value: "3,100m" }, { label: "Snow Load", value: "800kg/m2" }],
    // Extended project details
    technicalAnalysis: [
      "Heated solar racking systems for extreme snow conditions",
      "Modular energy storage units designed for helicopter transport",
      "Advanced avalanche protection systems with predictive monitoring",
      "Redundant power systems for critical research operations",
      "Real-time weather monitoring with automated shutdown protocols",
      "Custom thermal management for sub-zero operations"
    ],
    implementationTimeline: [
      "Phase 1 (Q4 2018): Alpine site assessment and avalanche risk analysis",
      "Phase 2 (Q1 2019): Modular system manufacturing and testing",
      "Phase 3 (Q1 2019): Helicopter transport and installation at 3,100m",
      "Phase 4 (Q1 2019): System integration and extreme weather testing",
      "Phase 5 (March 2019): Full commissioning and research station operations"
    ],
    keyTechnologies: [
      "Custom heated solar mounting systems with automatic snow removal",
      "Modular lithium iron phosphate battery storage systems",
      "Advanced avalanche detection and protection systems",
      "Satellite communications for remote monitoring and control",
      "Predictive weather modeling for Alpine conditions",
      "Redundant power conversion systems with hot-swappable components"
    ],
    environmentalImpact: [
      "100% renewable energy for high-altitude research stations",
      "Zero helicopter fuel usage after initial installation",
      "Enhanced safety for Alpine researchers through reliable power",
      "Support for climate change research in sensitive ecosystems",
      "Established model for sustainable high-altitude infrastructure"
    ]
  },
  {
    id: "andes-remote-electrification",
    title: "Andean High-Altitude Power",
    slug: "andes-remote-electrification",
    category: "Rural Electrification",
    location: "Puno, Peru",
    completionDate: "2019-09",
    description: "Deploying renewable power to mining and farming communities at 4,000m elevation.",
    challenge: "Thin air affecting equipment cooling and logistical transport to high peaks.",
    solution: "Oversized cooling systems and modular, helicopter-liftable technical housing.",
    results: ["Safe, reliable power for high-altitude schools", "Reduced reliance on timber for heating and cooking", "Integrated reliable satellite comms via grid power"],
    mainImage: "/images/projects/peru-power.png",
    // gallery: ["/images/projects/peru-power.png", "/images/projects/peru-power-1.png"],
    stats: [{ label: "Altitude", value: "4,000m" }, { label: "Villages", value: "12" }]
  },
  {
    id: "bali-resort-microgrid",
    title: "Bali Eco-Resort Renewable Network",
    slug: "bali-resort-microgrid",
    category: "Rural Electrification",
    location: "Ubud, Indonesia",
    completionDate: "2020-04",
    description: "A decentralized solar-storage network for high-end sustainable tourism clusters.",
    challenge: "Maintaining a zero-noise grid architecture in a quiet, high-sensitivity eco-zone.",
    solution: "Liquid-cooled silent battery arrays and aesthetic solar architecture integration.",
    results: ["Powered 30 luxury eco-villas with 100% renewables", "Zero noise pollution from energy assets", "Established local micro-economy for sustainable energy"],
    mainImage: "/images/projects/bali-microgrid.png",
    // gallery: ["/images/projects/bali-microgrid.png", "/images/projects/bali-microgrid-1.png"],
    stats: [{ label: "Villages/Villas", value: "30" }, { label: "Renewable %", value: "100%" }]
  },
  {
    id: "india-himalayan-microgrid",
    title: "Himalayan Hydro-Solar Hybrid",
    slug: "india-himalayan-microgrid",
    category: "Rural Electrification",
    location: "Ladakh, India",
    completionDate: "2024-07",
    description: "Combining small-scale hydro with high-altitude solar for year-round reliability.",
    challenge: "Frozen water sources in winter and intense UV degradation in summer.",
    solution: "Insulated hydro channels and UV-hardened solar coating systems.",
    results: ["First reliable 24/7 power in North Ladakh", "Zero winter performance degradation in year one", "Reduced diesel generator usage by 90%"],
    mainImage: "/images/projects/ladakh-hybrid.png",
    // gallery: ["/images/projects/ladakh-hybrid.png", "/images/projects/ladakh-hybrid-1.png"],
    stats: [{ label: "Diesel Drop", value: "90%" }, { label: "Winter Uptime", value: "100%" }]
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
    description: "Expert modeling and electrical architectural planning for maximum efficiency."
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
    year: "2023",
    title: "Storage Innovation",
    description: "Pioneering the first utility-scale battery storage solution in the industrial sector."
  },
  {
    year: "2024",
    title: "Digital Twin Tech",
    description: "Launch of our proprietary predictive maintenance software for industrial asset management."
  },
  {
    year: "2025",
    title: "Future-Proofing",
    description: "Leading the transition to green hydrogen infrastructure across coastal regions."
  }
];
