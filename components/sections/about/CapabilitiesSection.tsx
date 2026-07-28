"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, BatteryCharging, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Zap,
    title: "High-Voltage Distribution & Grid Modernization",
    description: "Designing medium and high-voltage electrical networks, power flow simulation, fault analysis, and grid reliability enhancements for utility-scale applications.",
    features: ["Substation Engineering", "Load Flow & Short-Circuit Analysis", "Transmission Line Optimization"],
  },
  {
    icon: BatteryCharging,
    title: "Renewable Energy & Battery Storage (BESS)",
    description: "Integrating utility-scale solar PV, wind resources, and lithium-ion/flow battery storage solutions to deliver continuous, reliable power generation.",
    features: ["Solar PV Microgrid Design", "BESS Sizing & Integration", "Grid Interconnection Standards"],
  },
  {
    icon: Cpu,
    title: "Industrial SCADA & Digital Twin Systems",
    description: "Architecting real-time Supervisory Control and Data Acquisition (SCADA) telemetry and predictive digital twin software for industrial asset management.",
    features: ["PLC & Automation Programming", "Real-Time Telemetry Systems", "Predictive Diagnostics"],
  },
  {
    icon: ShieldCheck,
    title: "Electrical Safety & Technical Auditing",
    description: "Executing thorough compliance audits, arc flash hazard analysis, thermal imaging inspections, and PE-certified safety documentation.",
    features: ["Arc Flash Hazard Analysis", "IEEE & NEMA Compliance", "PE Certified Audits"],
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="bg-white py-24 md:py-36 border-t border-charcoal/10">
      <div className="container-wide">
        <SectionHeading
          badge="Engineering Excellence"
          title="Core Capabilities & Technical Disciplines"
          description="VoltaEdge Engineering delivers multidisciplinary technical expertise tailored to utility providers, industrial manufacturers, and renewable developers."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="bg-ice-blue/10 border border-charcoal/10 p-8 md:p-10 rounded-2xl hover:border-ocean/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary text-ocean rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-4">
                  {cap.title}
                </h3>

                <p className="text-sm text-charcoal/70 font-body leading-relaxed mb-6">
                  {cap.description}
                </p>

                <div className="space-y-2 border-t border-charcoal/10 pt-4">
                  {cap.features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-xs font-body font-semibold text-primary">
                      <CheckCircle2 size={14} className="text-ocean flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
