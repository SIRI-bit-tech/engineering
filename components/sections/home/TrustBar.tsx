"use client";

import React from "react";

const CERTIFICATIONS = [
  { name: "IEEE", full: "Institute of Electrical and Electronics Engineers" },
  { name: "NCEES PE", full: "National Council of Examiners for Engineering" },
  { name: "ISO 9001", full: "Quality Management System Certified" },
  { name: "NFPA 70E", full: "Electrical Safety Standard Authority" },
  { name: "ASME", full: "American Society of Mechanical Engineers" },
  { name: "IEC 61850", full: "Substation Automation Standard" },
];

export const TrustBar = () => {
  return (
    <div className="w-full bg-[#00253B] border-y border-white/10 py-5 overflow-hidden relative z-20">
      <div className="container-wide flex items-center">
        <span className="text-[10px] font-accent font-bold uppercase tracking-[0.25em] text-ocean whitespace-nowrap mr-8 hidden md:inline-block">
          Accredited Engineering Standards:
        </span>

        {/* Ticker Container */}
        <div className="flex-1 overflow-hidden relative mask-gradient">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center">
            {CERTIFICATIONS.concat(CERTIFICATIONS).map((cert, index) => (
              <div
                key={`${cert.name}-${index}`}
                className="flex items-center space-x-3 group cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
                <span className="font-display font-bold text-sm tracking-wider text-white/80 group-hover:text-white transition-colors">
                  {cert.name}
                </span>
                <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
                  ({cert.full})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
