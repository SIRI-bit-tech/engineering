"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PARTNERS } from "@/constants/constants";

export const TrustBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade in reveal
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative z-20 -mt-16 md:-mt-24 mb-12 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24"
    >
      <div className="bg-white p-10 md:p-14 border border-ocean/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <h4 className="text-xs font-accent font-semibold uppercase tracking-widest text-ocean mb-2">Trusted Engineering Solutions</h4>
          <p className="text-sm font-body text-charcoal/60 max-w-sm">Collaborating with global industry leaders to deliver precision energy infrastructure.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-30 grayscale group">
          {PARTNERS.slice(0, 4).map((partner) => (
            <div 
              key={partner.name} 
              className="logo-item flex items-center justify-center hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-ocean/20 rounded-sm flex items-center justify-center">
                  <span className="font-heading font-bold text-xs">{partner.name[0]}</span>
                </div>
                <span className="font-heading font-bold text-lg text-primary">{partner.name.split(" ")[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
