"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const ServicesSnapshot = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Rule 9: Cards: staggered y: 40 → 0 + opacity: 0 → 1 on scroll enter, 0.1s stagger
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
      className="bg-ice-blue py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading
            badge="Engineering Expertise"
            title="World-Class Energy Solutions"
            description="From industrial power distribution to sustainable solar installations, we deliver precision engineering tailored to Africa's unique infrastructure challenges."
            className="mb-0"
          />
          <Button href="/services" variant="outline" className="mb-2">
            View All Services
          </Button>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service) => (
            <div 
              key={service.id} 
              className="service-card group relative bg-white p-10 border border-ocean/10 shadow-default transition-all duration-300 hover:-translate-y-2 hover:shadow-hover hover:border-l-4 hover:border-l-ocean"
            >
              {/* Icon / Indicator */}
              <div className="w-14 h-14 bg-ocean/5 flex items-center justify-center mb-8 group-hover:bg-ocean transition-colors duration-300">
                <span className="text-ocean group-hover:text-white transition-colors duration-300 font-mono text-xl font-bold">
                  {service.id.split("-").map(w => w[0]).join("").toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-ocean transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-charcoal/70 font-body mb-8 line-clamp-3 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-center text-sm font-body text-charcoal/60">
                    <span className="w-1.5 h-1.5 bg-ocean/40 mr-3 rounded-full group-hover:bg-ocean transition-colors duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={`/services/${service.slug}`} 
                className="inline-flex items-center text-ocean font-accent font-semibold text-sm uppercase tracking-wider group/link"
              >
                <span>Explore Solution</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
