"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SITE_TAGLINE, SITE_DESCRIPTION } from "@/constants/constants";
import { Button } from "@/components/ui/Button";
import { SplitText } from "gsap/SplitText";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Background Image Zoom Out
    tl.fromTo(
      ".hero-bg",
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 0.4, duration: 2.5 }
    );

    // Headline Character Stagger
    // Rule 9: Hero headline: SplitText character stagger reveal, 0.04s delay per char
    const split = new SplitText(headlineRef.current, { type: "chars" });
    
    tl.from(
      split.chars,
      { 
        y: 100, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.04 
      },
      "-=1.5"
    );

    // Subheadline
    tl.fromTo(
      subheadlineRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

    // Buttons
    tl.fromTo(
      actionsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.6"
    );

    // Floating animation for decorative elements
    gsap.to(".hero-decoration", {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/solar-farm.jpg" // Note: This is a placeholder path as per project rules
          alt="Aerial view of a large-scale solar engineering project"
          fill
          priority
          className="hero-bg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        <h1 
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6"
        >
          {SITE_TAGLINE}
        </h1>

        <p 
          ref={subheadlineRef}
          className="text-lg md:text-2xl text-white/70 font-body mb-12 max-w-2xl leading-relaxed"
        >
          {SITE_DESCRIPTION}
        </p>

        <div 
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <Button href="/services" size="lg" className="w-full sm:w-auto">
            Our Engineering Solutions
          </Button>
          <Button 
            href="/contact/get-a-quote" 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary"
          >
            Request a Technical Quote
          </Button>
        </div>
      </div>

      {/* Decorative Elements (Engineering Lines/Grids) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-0 opacity-20 pointer-events-none">
        <div className="hero-decoration absolute top-10 left-10 w-40 h-40 border-l border-t border-ocean" />
        <div className="hero-decoration absolute bottom-10 right-10 w-60 h-60 border-r border-b border-ocean" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-ocean to-transparent" />
      </div>
    </section>
  );
};
