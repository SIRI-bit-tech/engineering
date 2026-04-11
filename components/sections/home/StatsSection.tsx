"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STATS } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Rule 9: Stats: animated number counter 0 → final value, 2s duration, ScrollTrigger
    const statsItems = gsap.utils.toArray(".stat-item");

    statsItems.forEach((item: any) => {
      const numberEl = item.querySelector(".stat-number");
      const targetValue = parseInt(numberEl.getAttribute("data-value"));

      gsap.fromTo(
        numberEl,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            // Formatting with suffix if needed
            const suffix = numberEl.getAttribute("data-suffix") || "";
            numberEl.innerHTML = Math.ceil(this.targets()[0].innerText) + suffix;
          },
        }
      );

      // Card entry animation
      gsap.fromTo(
        item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-24 md:py-32 border-b border-ocean/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {STATS.map((stat, index) => (
            <div 
              key={stat.label} 
              className="stat-item flex flex-col items-center text-center"
            >
              <div 
                className="stat-number text-4xl md:text-6xl font-mono font-bold text-ocean mb-4"
                data-value={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="text-sm font-accent font-semibold uppercase tracking-widest text-primary mb-4 h-12 flex items-center">
                {stat.label}
              </div>
              <p className="text-sm text-charcoal/60 font-body max-w-[220px] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
