"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { REASONS } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Award, ShieldCheck, Globe } from "lucide-react";

export const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "target": return <Target className="w-8 h-8 text-ocean" />;
      case "award": return <Award className="w-8 h-8 text-ocean" />;
      case "shield-check": return <ShieldCheck className="w-8 h-8 text-ocean" />;
      case "globe": return <Globe className="w-8 h-8 text-ocean" />;
      default: return null;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered reveal for cards
    gsap.fromTo(
      ".reason-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reasons-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <SectionHeading
              badge="Our Competitive Edge"
              title="Why Industry Leaders Trust VoltaEdge"
              description="We combine deep technical expertise with a commitment to innovation, ensuring every project meets the highest global engineering standards."
            />
            
            <div className="reasons-grid grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {REASONS.map((reason) => (
                <div 
                  key={reason.title}
                  className="reason-card group p-8 border border-ocean/5 bg-ice-blue/30 transition-all duration-300 hover:bg-white hover:shadow-hover hover:border-ocean/10"
                >
                  <div className="mb-6 p-3 bg-white w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {getIcon(reason.icon)}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-ocean transition-colors duration-300">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-charcoal/70 font-body leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative aspect-square w-full max-w-lg lg:max-w-none">
            <div className="absolute inset-0 border-2 border-ocean/20 translate-x-6 translate-y-6" />
            <div className="relative h-full w-full bg-primary overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                alt="Electrical engineering control systems"
                className="object-cover h-full w-full opacity-60 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-white font-display text-2xl font-bold mb-2">"Engineered for Reliability"</div>
                <div className="text-ocean font-accent text-xs uppercase tracking-widest font-bold">Standard Operating Protocol</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
