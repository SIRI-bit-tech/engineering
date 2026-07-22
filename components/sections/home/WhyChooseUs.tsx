"use client";

import { CORE_VALUES } from "@/constants/constants";
import { ShieldCheck, Award, Zap, Lightbulb, Handshake, Leaf } from "lucide-react";

const VALUE_ICONS: Record<string, React.ReactNode> = {
  verified_user: <ShieldCheck className="text-ocean" size={26} />,
  health_and_safety: <ShieldCheck className="text-ocean" size={26} />,
  architecture: <Award className="text-ocean" size={26} />,
  eco: <Leaf className="text-ocean" size={26} />,
  lightbulb: <Lightbulb className="text-ocean" size={26} />,
  handshake: <Handshake className="text-ocean" size={26} />,
};

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#001D2F] text-white relative overflow-hidden">
      <div className="container-wide relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-4 py-1.5 rounded-full text-xs font-accent font-bold uppercase tracking-wider">
            Technical Authority & Integrity
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-balance">
            Why Leading Utilities & Industries Choose VoltaEdge
          </h2>
          <p className="text-sm text-white/70 font-body text-pretty leading-relaxed">
            Our engineering council brings over two decades of technical rigor, PE-certified leadership, and safety compliance to complex infrastructure.
          </p>
        </div>

        {/* Grid of Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((val) => (
            <div
              key={val.ref}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-ocean/40 rounded-3xl p-8 space-y-5 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-ocean/20 group-hover:border-ocean/40 transition-colors shadow-inner">
                  {VALUE_ICONS[val.icon] || <Zap className="text-ocean" size={26} />}
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  {val.ref}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white group-hover:text-ocean transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs text-white/70 font-body leading-relaxed text-pretty">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
