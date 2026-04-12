"use client";

import React, { useRef } from "react";
import Link from "next/image";
import NextLink from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/constants/constants";
import { ArrowRight, CheckCircle2, DraftingCompass, Sun, Zap, ClipboardCheck, Cpu, BatteryCharging } from "lucide-react";

export const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <DraftingCompass size={32} />;
      case 1: return <Sun size={32} />;
      case 2: return <Zap size={32} />;
      case 3: return <ClipboardCheck size={32} />;
      case 4: return <Cpu size={32} />;
      case 5: return <BatteryCharging size={32} />;
      default: return <Zap size={32} />;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-24 md:py-40 overflow-hidden"
    >
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {SERVICES.map((service, idx) => (
            <NextLink 
              key={service.id} 
              href={`/services/${service.slug}`}
              className="service-card group relative flex flex-col bg-ice-blue/10 p-12 rounded-none hover:bg-white hover:shadow-hover hover:-translate-y-4 transition-all duration-700 overflow-hidden"
            >
              {/* Tonal Card Accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-ocean/5 -mr-20 -mt-20 rounded-none group-hover:scale-[3] transition-transform duration-1000" />
              
              {/* Technical Marker */}
              <div className="relative z-10 font-mono text-[10px] tracking-[0.2em] text-charcoal/40 mb-12 flex items-center gap-4">
                <span className="text-ocean font-bold">0{idx + 1}</span>
                <div className="h-px w-8 bg-charcoal/10 group-hover:w-16 transition-all duration-700" />
                <span>SPEC-ID: {service.id.toUpperCase()}</span>
              </div>

              <div className="relative z-10 w-16 h-16 bg-white rounded-none flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-700 shadow-sm group-hover:shadow-button">
                <div className="text-primary group-hover:text-white transition-colors duration-500">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="relative z-10 text-2xl md:text-3xl font-display font-bold text-primary mb-6 leading-tight group-hover:text-ocean transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-base text-charcoal/60 font-body mb-12 leading-relaxed italic">
                {service.description}
              </p>

              <div className="relative z-10 mt-auto">
                <ul className="space-y-5 mb-14">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm font-body text-charcoal/60">
                      <div className="w-1.5 h-1.5 bg-ocean/30 mr-4 rounded-full mt-1.5 group-hover:bg-ocean transition-colors duration-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center text-ocean font-accent font-bold text-xs uppercase tracking-[0.3em] group/link">
                  <span>View Technical Case Study</span>
                  <ArrowRight size={14} className="ml-4 transition-transform duration-500 group-hover/link:translate-x-4" />
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
