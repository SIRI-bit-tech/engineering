"use client";

import { Activity, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Feasibility & Load Flow Audit",
    description: "Conducting thermal imaging, harmonic distortion analysis, and short-circuit coordination studies to baseline facility load profiles.",
    icon: <Activity className="text-ocean" size={24} />,
  },
  {
    number: "02",
    title: "BIM & Schematics Blueprinting",
    description: "Architecting three-phase CAD schematics and BIM digital twin models conforming to NEC and NFPA 70E standards.",
    icon: <Compass className="text-ocean" size={24} />,
  },
  {
    number: "03",
    title: "Deployment & Grid Synchronization",
    description: "Installing switchgear, high-voltage substations, and battery energy storage (BESS) while synchronizing with local TSOs.",
    icon: <ShieldCheck className="text-ocean" size={24} />,
  },
  {
    number: "04",
    title: "Commissioning & SCADA Telemetry",
    description: "Executing SCADA real-time monitoring, protective relay calibration, and issuing investment-grade compliance certification.",
    icon: <CheckCircle2 className="text-ocean" size={24} />,
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-[#00253B] text-white relative overflow-hidden">
      <div className="container-wide relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-4 py-1.5 rounded-full text-xs font-accent font-bold uppercase tracking-wider">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-balance">
            Four-Phase Engineering Lifecycle
          </h2>
          <p className="text-sm text-white/70 font-body text-pretty leading-relaxed">
            From preliminary grid flow audits to SCADA telemetry integration, our systematic workflow guarantees zero-outage execution.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-ocean/40 rounded-3xl p-8 space-y-6 relative transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Step Badge Header */}
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-3xl text-ocean">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-ocean/20 transition-colors">
                  {step.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white group-hover:text-ocean transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-white/70 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
