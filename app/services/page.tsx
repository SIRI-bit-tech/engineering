import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { SITE_NAME, SERVICES } from "@/constants/constants";
import type { Metadata } from "next";
import { CheckCircle2, Factory, Building2, Zap, Wind, Battery, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: `Engineering Services | ${SITE_NAME}`,
  description: "VoltaEdge Engineering provides end-to-end electrical engineering, renewable energy integration, power distribution, and industrial automation solutions across the United States.",
  keywords: ["electrical engineering services", "renewable energy integration", "industrial automation", "power distribution systems", "certified engineers USA", "PE certified"],
};

const INDUSTRIES = [
  { icon: <Factory className="w-6 h-6" />, title: "Manufacturing", description: "Heavy industrial power systems and automation" },
  { icon: <Building2 className="w-6 h-6" />, title: "Commercial", description: "Office buildings and retail infrastructure" },
  { icon: <Zap className="w-6 h-6" />, title: "Utilities", description: "Grid modernization and distribution" },
  { icon: <Wind className="w-6 h-6" />, title: "Renewable Energy", description: "Solar, wind, and hybrid installations" },
  { icon: <Battery className="w-6 h-6" />, title: "Data Centers", description: "Mission-critical power infrastructure" },
  { icon: <Wrench className="w-6 h-6" />, title: "Infrastructure", description: "Transportation and public works" },
];

const TECHNOLOGIES = [
  "AutoCAD", "ETAP", "MATLAB", "SKM PowerTools", "SCADA", "PLC Programming",
  "Revit MEP", "DIgSILENT", "PSCAD", "HOMER", "PVsyst", "SAP2000"
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Infrastructural Solutions"
        title="Full-Spectrum Electrical Engineering & Renewable Energy Services"
        description="We deliver high-performance energy infrastructure and automated systems designed for maximum reliability and industrial-grade scalability across the United States."
        image="/images/services/design.png"
      />

      {/* Main Services Grid */}
      <ServicesGrid />

      {/* Engineered for Technical Resilience */}
      <section className="bg-ice-blue/20 py-24 md:py-32">
        <div className="container-wide">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-ocean" />
              <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean">Service Excellence</span>
              <div className="w-12 h-px bg-ocean" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Engineered for Technical Resilience
            </h2>
            <p className="text-xl text-charcoal/60 font-body max-w-3xl mx-auto">
              Our comprehensive engineering services are designed to deliver maximum performance, safety, and long-term reliability for critical infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white p-10 rounded-2xl shadow-default hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-xl font-display font-bold text-primary mb-6">
                  {service.title}
                </h3>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ocean shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal/70 font-body">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-charcoal/5">
                  <div className="text-xs font-accent font-bold uppercase tracking-widest text-ocean mb-2">
                    Key Benefits
                  </div>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-charcoal/60 font-body flex items-start">
                        <span className="text-ocean mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-wide">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-ocean" />
              <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean">Sector Expertise</span>
              <div className="w-12 h-px bg-ocean" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Industries Served
            </h2>
            <p className="text-xl text-charcoal/60 font-body max-w-3xl mx-auto">
              We provide specialized engineering solutions across diverse sectors, delivering tailored infrastructure that meets the unique demands of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.title}
                className="group p-8 bg-ice-blue/10 rounded-2xl hover:bg-white hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center mb-6 group-hover:bg-ocean transition-all duration-500">
                  <div className="text-ocean group-hover:text-white transition-colors duration-500">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-ocean transition-colors duration-500">
                  {industry.title}
                </h3>
                <p className="text-base text-charcoal/60 font-body">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="bg-charcoal py-24 md:py-32 text-white">
        <div className="container-wide">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-white/20" />
              <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-white/60">Engineering Stack</span>
              <div className="w-12 h-px bg-white/20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Tools & Technology
            </h2>
            <p className="text-xl text-white/70 font-body max-w-3xl mx-auto">
              We leverage industry-leading software and advanced engineering tools to deliver precise, data-driven solutions for complex infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center"
              >
                <span className="text-sm font-accent font-bold uppercase tracking-widest text-white">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
}
