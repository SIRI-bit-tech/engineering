import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { MISSION_STATEMENT, VISION_STATEMENT, SITE_NAME, CORE_VALUES } from "@/constants/constants";
import type { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: `Mission & Vision | ${SITE_NAME}`,
  description: "Explore our core mission and vision to architect a sustainable future through high-precision electrical engineering and renewable energy innovation.",
  keywords: ["engineering mission", "vision for renewable energy", "global industrial excellence", "technical precision values", "PE certified"],
};

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Strategic Mandate"
        title="Architecting the Future of Energy Infrastructure"
        description="Our commitment to delivering world-class engineering solutions through precision, technical integrity, and innovative design."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYf6pC3p86pP198B7R9E2B-u4G1D237J281v9R8E3B6C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9"
      />
      
      <section className="bg-white py-24 md:py-40 relative overflow-hidden">
        {/* Background Architectural Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ice-blue/10 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            {/* Mission (Editorial Style) */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-ocean">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-12 leading-[1.1]">
                Precision. Innovation. <br/> <span className="italic text-ocean">Technical Integrity.</span>
              </h2>
              <div className="text-2xl md:text-3xl text-charcoal/80 font-body leading-relaxed italic border-l-8 border-ocean pl-10 relative">
                <Quote size={60} className="absolute -left-16 top-0 text-ocean/10" />
                "{MISSION_STATEMENT}"
              </div>
            </div>

            {/* Vision (Editorial Style) */}
            <div className="relative lg:mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-ocean">Our Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-12 leading-[1.1]">
                Powering the <br/> <span className="italic text-ocean">Industrial Benchmark.</span>
              </h2>
              <div className="text-2xl md:text-3xl text-charcoal/80 font-body leading-relaxed italic border-l-8 border-primary pl-10 relative">
                <Quote size={60} className="absolute -left-16 top-0 text-primary/10" />
                "{VISION_STATEMENT}"
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
    </div>
  );
}
