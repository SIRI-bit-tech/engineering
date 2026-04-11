"use client";

import React, { useRef } from "react";
import Link from "next/image";
import NextLink from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/constants/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service) => (
            <NextLink 
              key={service.id} 
              href={`/services/${service.slug}`}
              className="service-card group flex flex-col bg-white border border-ocean/10 p-10 hover:-translate-y-2 hover:shadow-hover transition-all duration-300 hover:border-l-4 hover:border-l-ocean"
            >
              <div className="w-16 h-16 bg-ocean/10 flex items-center justify-center mb-10 group-hover:bg-ocean transition-colors duration-300">
                <span className="text-ocean group-hover:text-white transition-colors duration-300 font-mono text-2xl font-bold uppercase">
                  {service.id.split("-").map(w => w[0]).join("")}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 group-hover:text-ocean transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-charcoal/70 font-body mb-10 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-auto">
                <ul className="space-y-4 mb-12">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm font-body text-charcoal/60">
                      <CheckCircle2 size={16} className="mr-3 text-ocean shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center text-ocean font-accent font-semibold text-sm uppercase tracking-widest group/link">
                  <span>View Technical Details</span>
                  <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover/link:translate-x-2" />
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
