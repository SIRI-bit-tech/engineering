"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const TEAM_PREVIEW = [
  { name: "Engr. David Adeyemi", role: "CEO & Principal Engineer", initials: "DA" },
  { name: "Engr. Sarah Adams", role: "Head of Operations", initials: "SA" },
  { name: "Engr. Michael Chen", role: "Renewable Systems Lead", initials: "MC" }
];

export const TeamSnapshot = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".team-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="bg-white py-24 md:py-32 border-t border-ocean/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading
            badge="Engineering Expertise"
            title="The Team Behind the Innovation"
            description="Our certified engineering team brings global expertise to solve Africa's most complex energy and infrastructure challenges."
            className="mb-0"
          />
          <Button asChild variant="outline" className="mb-2 group">
            <Link href="/about/team">
              <span>Meet All Engineers</span>
              <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {TEAM_PREVIEW.map((member) => (
            <div
              key={member.name}
              className="team-item group flex items-center p-10 bg-ice-blue/30 border border-ocean/5 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-linear-to-tr from-primary to-ocean flex items-center justify-center text-white font-heading font-bold text-xl mr-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {member.initials}
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-ocean transition-colors duration-300 leading-tight">
                  {member.name}
                </h4>
                <div className="text-[10px] font-accent font-bold uppercase tracking-widest text-ocean">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
