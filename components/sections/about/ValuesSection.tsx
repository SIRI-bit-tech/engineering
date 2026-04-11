"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VALUES = [
  { title: "Precision", description: "Every engineering deployment is backed by rigorous calculations and industry-leading standards.", icon: "P" },
  { title: "Innovation", description: "We leverage the latest technology to solve Africa's most complex energy and infrastructure challenges.", icon: "I" },
  { title: "Safety First", description: "Uncompromising safety protocols in every electrical and renewable energy project.", icon: "S" },
  { title: "Reliability", description: "Our systems are built for high performance and maximum durability in any environment.", icon: "R" }
];

export const ValuesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".value-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
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
          badge="Core Values"
          title="The Principles That Drive Our Engineering Excellence"
          description="We combine deep technical expertise with a commitment to innovation, ensuring every project meets the highest global engineering standards."
          align="center"
          className="mb-20"
        />

        <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value) => (
            <div 
              key={value.title}
              className="value-card group relative bg-white p-10 border border-ocean/5 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-ocean/10 flex items-center justify-center mb-8 group-hover:bg-ocean transition-colors duration-300">
                <span className="text-ocean group-hover:text-white transition-colors duration-300 font-mono text-2xl font-bold uppercase">
                  {value.icon}
                </span>
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-ocean transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-sm text-charcoal/70 font-body leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
