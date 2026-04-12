"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CORE_VALUES } from "@/constants/constants";
import { ShieldCheck, Activity, DraftingCompass, Leaf, Lightbulb, Handshake } from "lucide-react";

export const ValuesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "verified_user": return <ShieldCheck size={32} />;
      case "health_and_safety": return <Activity size={32} />;
      case "architecture": return <DraftingCompass size={32} />;
      case "eco": return <Leaf size={32} />;
      case "lightbulb": return <Lightbulb size={32} />;
      case "handshake": return <Handshake size={32} />;
      default: return <Activity size={32} />;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".value-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-24 md:py-40 relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        <SectionHeading
          badge="Core Values"
          title="The Principles of Engineering Excellence"
          description="We combine deep technical expertise with a commitment to innovation, ensuring every project meets the highest global engineering standards."
          align="center"
          className="mb-24"
        />

        <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CORE_VALUES.map((value, idx) => (
            <div 
              key={value.title}
              className="value-card group relative bg-ice-blue/10 p-12 rounded-none hover:bg-white hover:shadow-hover hover:-translate-y-4 transition-all duration-700"
            >
              {/* Technical Marker */}
              <div className="font-mono text-[10px] tracking-[0.2em] text-ocean mb-10 flex items-center gap-4">
                <span className="font-bold">{value.ref || `VALUE-0${idx + 1}`}</span>
                <div className="h-px w-8 bg-ocean/20 group-hover:w-full transition-all duration-700" />
              </div>

              <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-700 shadow-sm group-hover:shadow-button">
                <div className="text-primary group-hover:text-white transition-colors duration-500">
                  {getIcon(value.icon)}
                </div>
              </div>
              
              <h4 className="text-2xl font-display font-bold text-primary mb-6 group-hover:text-ocean transition-colors duration-500">
                {value.title}
              </h4>
              <p className="text-base text-charcoal/60 font-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tonal Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-ocean/5 -skew-y-6 translate-x-1/2 translate-y-1/2 z-0" />
    </section>
  );
};
