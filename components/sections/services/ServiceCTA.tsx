"use client";

import React, { useRef } from "react";
import Link from "next/link";
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
      className="bg-charcoal py-24 md:py-32 overflow-hidden border-t border-white/10"
    >
      <div className="cta-content relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center flex flex-col items-center">
        <SectionHeading
          dark
          badge="Ready to Begin?"
          title="Engineered for Your Specific Infrastructure Needs"
          description="Whether you're looking for utility-scale renewable integration or complex electrical design, our certified engineering team is ready to deliver precision results."
          align="center"
          className="mb-12"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto bg-ocean text-white hover:bg-ocean/90 font-accent font-bold uppercase tracking-wider"
          >
            <Link href="/contact/get-a-quote">Get Technical Quote</Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-charcoal font-accent font-bold uppercase tracking-wider"
          >
            <Link href="/contact">Contact Engineering Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
