"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MILESTONES = [
  { year: "2018", title: "Inception", description: "VoltaEdge Engineering was founded in Lagos as a boutique electrical design firm." },
  { year: "2020", title: "First 5MW Solar Farm", description: "Successfully deployed our first large-scale renewable energy project." },
  { year: "2022", title: "COREN Certification", description: "Achieved full COREN and ISO 9001 accreditation for our engineering processes." },
  { year: "2024", title: "Pan-African Expansion", description: "Opened our first international engineering office to support West African projects." }
];

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".milestone-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".milestones-grid",
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
          badge="Our Journey"
          title="Milestones in Engineering Innovation"
          description="A timeline of our commitment to delivering world-class energy solutions across the continent."
          align="center"
          className="mb-20"
        />

        <div className="milestones-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MILESTONES.map((milestone) => (
            <div 
              key={milestone.year}
              className="milestone-item group relative bg-white p-10 border border-ocean/5 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-mono font-bold text-ocean mb-6 group-hover:scale-110 transition-transform duration-300">
                {milestone.year}
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-ocean transition-colors duration-300">
                {milestone.title}
              </h4>
              <p className="text-sm text-charcoal/70 font-body leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
