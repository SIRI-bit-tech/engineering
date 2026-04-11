"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TEAM = [
  { name: "Engr. David Adeyemi", role: "CEO & Principal Engineer", initials: "DA", bio: "20+ years of electrical infrastructure design experience." },
  { name: "Engr. Sarah Adams", role: "Head of Operations", initials: "SA", bio: "Leading large-scale industrial automation and power deployments." },
  { name: "Engr. Michael Chen", role: "Solar Solutions Lead", initials: "MC", bio: "Renewable energy expert with focus on pan-African deployments." },
  { name: "Engr. Fatima Bello", role: "Energy Audit Consultant", initials: "FB", bio: "Certified energy auditor specializing in industrial efficiency." }
];

export const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".team-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
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
        <SectionHeading
          badge="Our Engineering Experts"
          title="The Team Behind the Innovation"
          description="Our certified engineering team brings global expertise to solve Africa's energy challenges."
          align="center"
          className="mb-20"
        />

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div 
              key={member.name}
              className="team-card group relative bg-white border border-ocean/10 p-10 hover:-translate-y-2 hover:shadow-hover transition-all duration-300"
            >
              {/* Avatar - Gradient circle with initials as per Rule 7 */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-ocean flex items-center justify-center mb-8 mx-auto text-white font-heading font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {member.initials}
              </div>

              <div className="text-center">
                <h4 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-ocean transition-colors duration-300 leading-tight">
                  {member.name}
                </h4>
                <div className="text-xs font-accent font-bold uppercase tracking-widest text-ocean mb-6">
                  {member.role}
                </div>
                <p className="text-sm text-charcoal/70 font-body leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
