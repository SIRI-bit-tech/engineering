"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PARTNERS } from "@/constants/constants";

export const PartnersSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
      duration: 40,
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
            <span>IEEE FELLOWS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ocean/20" />
            <span>ISO 9001 COMPLIANT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-ocean/20" />
            <span>LEED CERTIFIED</span>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Logo Ticker */}
        <div 
          ref={tickerRef}
          className="flex items-center whitespace-nowrap py-8"
        >
          {PARTNERS.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="logo-item flex items-center justify-center px-16 md:px-24 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 group cursor-pointer"
            >
              <div className="relative h-16 md:h-20 w-32 md:w-48 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 192px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
