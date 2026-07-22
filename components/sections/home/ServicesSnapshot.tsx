"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/constants/constants";
import { ArrowRight, CheckCircle2, Cpu, Zap, Shield, Activity, Layers, BatteryCharging } from "lucide-react";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "electrical-design": <Zap className="text-ocean" size={24} />,
  "renewable-integration": <Layers className="text-ocean" size={24} />,
  "power-distribution": <Activity className="text-ocean" size={24} />,
  "energy-audit": <Shield className="text-ocean" size={24} />,
  "industrial-automation": <Cpu className="text-ocean" size={24} />,
  "ev-charging": <BatteryCharging className="text-ocean" size={24} />,
};

export const ServicesSnapshot = () => {
  return (
    <section className="py-24 bg-[#001D2F] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-3 py-1 rounded-full text-xs font-accent font-bold uppercase tracking-wider">
              Core Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-balance">
              Engineered for Utility-Scale Reliability
            </h2>
          </div>
          <p className="text-sm text-white/70 font-body max-w-md text-pretty">
            Multi-disciplinary power systems, industrial control loops, and zero-carbon grid integration designed for global compliance.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-ocean/50 rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="p-8 space-y-6">
                {/* Header & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-ocean/20 group-hover:border-ocean/40 transition-colors">
                    {SERVICE_ICONS[service.id] || <Zap className="text-ocean" size={24} />}
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    SPEC // {service.id.toUpperCase().slice(0, 8)}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wide text-white group-hover:text-ocean transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/70 font-body leading-relaxed mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  {service.technicalAnalysis?.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] text-white/80">
                      <CheckCircle2 size={13} className="text-ocean flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-accent font-bold uppercase tracking-wider text-ocean hover:text-white transition-colors group/btn"
                >
                  <span>Inspect Capability</span>
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
