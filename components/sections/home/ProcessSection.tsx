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
      className="py-32 bg-[#E1F5FE]"
    >
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="text-center mb-20">
          <span className="font-label text-secondary text-xs font-bold tracking-[0.3em] uppercase block mb-4">Our Workflow</span>
          <h2 className="font-headline text-5xl text-primary tracking-tight leading-tight">The VoltaEdge Blueprint</h2>
        </div>
        <div className="process-grid grid grid-cols-1 md:grid-cols-5 gap-px bg-secondary/10">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={step.number}
              className="process-card bg-surface-container-lowest p-10 hover:bg-secondary group transition-all duration-300"
            >
              <span className="font-mono text-4xl text-secondary/20 group-hover:text-white/20 block mb-8">{step.number}</span>
              <h4 className="font-label font-bold text-primary group-hover:text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
              <p className="text-on-surface-variant group-hover:text-white/80 text-xs leading-relaxed font-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
