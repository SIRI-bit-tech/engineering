"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { TEAM_MEMBERS } from "@/constants/constants";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";
import Link from "next/link";

export const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".team-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
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
      className="bg-white py-24 md:py-40 relative overflow-hidden"
    >
      <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
        <SectionHeading
          badge="Elite Engineering Leadership"
          title="The Architects of Industrial Innovation"
          description="Our multidisciplinary engineering leadership brings global expertise to solve the world's most complex energy and infrastructure challenges."
          align="center"
          className="mb-24"
        />

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={member.name}
              className="team-card group relative bg-ice-blue/10 p-12 rounded-none hover:bg-white hover:shadow-hover hover:-translate-y-4 transition-all duration-700 overflow-hidden"
            >
              {/* Tonal Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/5 -mr-16 -mt-16 rounded-none group-hover:scale-[3] transition-transform duration-1000" />

              {/* Technical Marker */}
              <div className="relative z-10 font-mono text-[10px] tracking-[0.2em] text-charcoal/40 mb-12 flex items-center gap-4">
                <span className="text-ocean font-bold">CORE-0{idx + 1}</span>
                <div className="h-px w-8 bg-charcoal/10 group-hover:w-16 transition-all duration-700" />
              </div>

              {/* Avatar - High-End Style */}
              <div className="relative z-10 w-32 h-32 rounded-none bg-white flex items-center justify-center mb-10 mx-auto text-primary font-display font-bold text-4xl group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-button transform group-hover:rotate-6">
                {member.initials}
              </div>

              <div className="text-center relative z-10">
                <h4 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-ocean transition-colors duration-500 leading-tight">
                  {member.name}
                </h4>
                <div className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean mb-4">
                  {member.role}
                </div>
                {member.qualifications && (
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {member.qualifications.map(q => (
                      <span key={q} className="px-2 py-1 bg-surface-container-low text-[8px] font-label font-bold text-primary tracking-widest uppercase">{q}</span>
                    ))}
                  </div>
                )}
                <p className="text-base text-charcoal/60 font-body leading-relaxed mb-10 italic">
                  "{member.bio}"
                </p>

                {/* Social Protocol Links */}
                <div className="flex justify-center gap-6 pt-10 border-t border-charcoal/5">
                  {member.socials?.linkedin && (
                    <Link href={member.socials.linkedin} className="text-primary/40 hover:text-ocean transition-all duration-300">
                      <LinkedinIcon size={18} />
                    </Link>
                  )}
                  {member.socials?.twitter && (
                    <Link href={member.socials.twitter} className="text-primary/40 hover:text-ocean transition-all duration-300">
                      <TwitterIcon size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
