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
      className="py-16 sm:py-20 md:py-24 bg-primary-container relative dot-grid overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center relative z-10">
        {STATS.map((stat, index) => (
          <div 
            key={stat.label} 
            className="stat-item"
          >
            <div 
              className="stat-number font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-primary-container block mb-3 sm:mb-4"
              data-value={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </div>
            <span className="font-label text-white/60 text-[10px] sm:text-xs tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .dot-grid {
          background-image: radial-gradient(rgba(204, 229, 255, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
};
