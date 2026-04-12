"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_MILESTONES } from "@/constants/constants";

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".milestone-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".milestones-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="bg-ice-blue/10 py-24 md:py-40 overflow-hidden relative"
    >
      {/* Background Technical Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-ocean/20 to-transparent" />

      <div className="container-wide relative z-10">
        <SectionHeading
          badge="Our Journey"
          title="Milestones in Engineering Innovation"
          description="A timeline of our commitment to delivering world-class energy solutions across the globe."
          align="center"
          className="mb-24"
        />

        <div className="milestones-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {COMPANY_MILESTONES.map((milestone, idx) => (
            <div
              key={milestone.year}
              className="milestone-item group relative bg-white p-12 rounded-none shadow-default hover:shadow-hover hover:-translate-y-4 transition-all duration-700"
            >
              {/* Technical Marker */}
              <div className="font-mono text-[10px] tracking-[0.2em] text-ocean mb-8 flex items-center gap-4">
                <span className="font-bold">STEP-0{idx + 1}</span>
                <div className="h-px w-8 bg-ocean/20 group-hover:w-12 transition-all duration-700" />
              </div>

              <div className="text-5xl md:text-6xl font-mono font-bold text-primary mb-8 group-hover:scale-110 transition-transform duration-700 origin-left">
                {milestone.year}
              </div>
              <h4 className="text-2xl font-display font-bold text-primary mb-6 group-hover:text-ocean transition-colors duration-500">
                {milestone.title}
              </h4>
              <p className="text-base text-charcoal/60 font-body leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-ocean/20 to-transparent" />
    </section>
  );
};
