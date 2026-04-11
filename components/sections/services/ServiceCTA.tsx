"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ServiceCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".cta-content",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-primary py-24 md:py-32 overflow-hidden border-t border-ocean/20"
    >
      <div className="cta-content relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center flex flex-col items-center">
        <SectionHeading
          dark
          badge="Ready to Begin?"
          title="Engineered for Your Specific Infrastructure Needs"
          description="Whether you're looking for a full solar farm deployment or a simple energy audit, our certified engineering team is ready to deliver precision results."
          align="center"
          className="mb-12"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <Button href="/contact/get-a-quote" size="lg" className="w-full sm:w-auto">
            Get Technical Quote
          </Button>
          <Button 
            href="/contact" 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary"
          >
            Contact Engineering Support
          </Button>
        </div>
      </div>
    </section>
  );
};
