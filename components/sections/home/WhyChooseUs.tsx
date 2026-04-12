"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { REASONS } from "@/constants/constants";
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
      className="py-32 bg-white overflow-hidden"
    >
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/5 z-0"></div>
          <div className="relative z-10 w-full aspect-square overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB53GBeWUP6xV_WeW-qhkEfYVsv8-FHd7F39tOKG-gLuPS_256XsQ1hEtwYxB_gc43jxdOfdhpfz0OTDDWnVgPY_Fq161Y_9TlZGWHLY1QkU59TgArQx_YQAenN5jpLnRahixpTx32l8FUdSPc6OGF8Vq6Hcm6a-OxFxsVd8KMfT5qNI9nuCPbxAW2izb7h0n-6Z-YzUbU359Q3slOZ025be9OZtT1Y2hOr9VZ5SqQ46EhbjVEjQ8UAcwgyKRDamdlTOTQzkcueoivA"
              alt="High-voltage electrical transmission towers"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary p-8 z-20">
            <span className="font-mono text-white text-5xl block mb-2">20+</span>
            <span className="font-label text-secondary-container text-xs tracking-widest uppercase">Years Experience</span>
          </div>
        </div>

        <div>
          <h2 className="accent-line font-headline text-4xl text-primary mb-12 tracking-tight leading-tight">
            Precision Driven<br />Infrastructure Expertise
          </h2>
          <div className="reasons-grid space-y-8">
            {REASONS.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start space-x-6 reason-card"
              >
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center shrink-0">
                  {getIcon(reason.icon)}
                </div>
                <div>
                  <h4 className="font-label font-bold text-primary text-sm uppercase mb-2">{reason.title}</h4>
                  <p className="text-on-surface-variant text-sm font-body">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .accent-line {
          position: relative;
        }
        .accent-line::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 0;
          width: 48px;
          height: 3px;
          background-color: #005F8D;
        }
      `}</style>
    </section>
  );
};
