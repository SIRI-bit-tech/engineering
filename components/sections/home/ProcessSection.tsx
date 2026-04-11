"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROCESS_STEPS } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveal for cards
    gsap.fromTo(
      ".process-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-ice-blue py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeading
          badge="Execution Excellence"
          title="Our Engineering Workflow"
          description="We follow a rigorous, precision-led process from initial consultation to final technical handover."
          align="center"
          className="mb-20"
        />

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.number}
              className="process-card group relative bg-white p-10 border border-ocean/5 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
            >
              {/* Number/Indicator */}
              <div className="flex justify-between items-start mb-10">
                <span className="text-5xl md:text-6xl font-mono font-bold text-ocean/10 group-hover:text-ocean/20 transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-12 h-12 border border-ocean/20 rounded-sm flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-all duration-300">
                  <span className="font-mono text-xs">VE-{step.number}</span>
                </div>
              </div>

              <h4 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-ocean transition-colors duration-300 leading-tight">
                {step.title}
              </h4>
              <p className="text-charcoal/70 font-body text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Progress Line - Desktop only */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-ocean/20 z-0 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
