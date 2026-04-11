"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PARTNERS } from "@/constants/constants";

export const PartnersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Rule 9: Partner logo ticker: infinite GSAP loop, no pause
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Clone the logos for a seamless loop
    const logos = ticker.querySelectorAll(".logo-item");
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      ticker.appendChild(clone);
    });

    const tickerWidth = ticker.scrollWidth / 2;

    gsap.to(ticker, {
      x: -tickerWidth,
      duration: 30, // Adjust speed as needed
      ease: "none",
      repeat: -1,
      paused: false,
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-20 md:py-24 border-t border-b border-ocean/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xs font-accent font-semibold uppercase tracking-widest text-ocean mb-2">Our Engineering Partners</h4>
            <p className="text-sm font-body text-charcoal/60">Collaborating with global technology leaders for sustainable energy deployments.</p>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[10px] font-mono font-medium text-ocean/40 uppercase tracking-widest">
            <span>COREN CERTIFIED</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ocean/20" />
            <span>ISO 9001 COMPLIANT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ocean/20" />
            <span>NEMSA ACCREDITED</span>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        
        {/* Logo Ticker */}
        <div 
          ref={tickerRef}
          className="flex items-center whitespace-nowrap py-4"
        >
          {PARTNERS.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="logo-item flex flex-col items-center justify-center px-12 md:px-20 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-8 md:h-12 w-auto flex items-center justify-center mb-2">
                {/* SVG Placeholders since we don't have real logos */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-ocean/20 rounded-sm flex items-center justify-center group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                    <span className="font-heading font-bold text-[8px] md:text-xs">{partner.name[0]}</span>
                  </div>
                  <span className="font-heading font-bold text-sm md:text-lg text-primary">{partner.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};
