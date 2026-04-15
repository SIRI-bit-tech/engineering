import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { MISSION_STATEMENT, VISION_STATEMENT, SITE_NAME } from "@/constants/constants";
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
        image="/images/about/vision.png"
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
                Precision. Innovation. <br /> <span className="italic text-ocean">Technical Integrity.</span>
              </h2>
              <div className="text-2xl md:text-3xl text-charcoal/80 font-body leading-relaxed italic border-l-8 border-ocean pl-10 relative">
                <Quote size={60} className="absolute -left-16 top-0 text-ocean/10" />
                &quot;{MISSION_STATEMENT}&quot;
              </div>
            </div>

            {/* Vision (Editorial Style) */}
            <div className="relative lg:mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-ocean" />
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-ocean">Our Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-12 leading-[1.1]">
                Powering the <br /> <span className="italic text-ocean">Industrial Benchmark.</span>
              </h2>
              <div className="text-2xl md:text-3xl text-charcoal/80 font-body leading-relaxed italic border-l-8 border-primary pl-10 relative">
                <Quote size={60} className="absolute -left-16 top-0 text-primary/10" />
                &quot;{VISION_STATEMENT}&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
    </div>
  );
}
