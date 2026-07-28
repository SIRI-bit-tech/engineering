"use client";

import React from "react";
import { ShieldCheck, Award, Globe, Wrench } from "lucide-react";

export const StandardsSection = () => {
  return (
    <section className="bg-primary text-white py-24 md:py-36 relative overflow-hidden">
      <div className="container-wide relative z-10 space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-3 py-1 rounded-full text-xs font-accent font-bold uppercase tracking-wider">
            Global Rigor
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wide">
            Engineering Governance & Compliance Standards
          </h2>
          <p className="text-white/80 font-body text-base md:text-lg leading-relaxed">
            Every electrical schematic, transmission model, and microgrid architecture engineered by VoltaEdge complies strictly with international regulatory authorities and peak industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-ocean/40 transition-colors">
            <ShieldCheck className="text-ocean" size={36} />
            <h3 className="text-lg font-display font-bold uppercase">PE Licensure</h3>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Maintained by licensed Professional Engineers (PE) across multiple states and global jurisdictions with full seal authority.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-ocean/40 transition-colors">
            <Award className="text-ocean" size={36} />
            <h3 className="text-lg font-display font-bold uppercase">IEEE & NEMA Compliant</h3>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Strict adherence to IEEE 1547 microgrid standards, NESC safety codes, and NEMA enclosure guidelines.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-ocean/40 transition-colors">
            <Globe className="text-ocean" size={36} />
            <h3 className="text-lg font-display font-bold uppercase">International Reach</h3>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Cross-border project execution throughout North America, Mexico, Europe, East Asia, South Asia, and Oceania.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:border-ocean/40 transition-colors">
            <Wrench className="text-ocean" size={36} />
            <h3 className="text-lg font-display font-bold uppercase">Zero-Accident Safety</h3>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Uncompromising OSHA/NFPA 70E electrical safety protocols on all site inspections and live-load commissioning tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
