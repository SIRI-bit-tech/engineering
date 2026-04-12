"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "gsap/SplitText";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Background Image Reveal
    tl.fromTo(
      ".hero-image-container",
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.8 }
    );

    // Headline Character Stagger
    const split = new SplitText(headlineRef.current, { type: "chars" });

    tl.from(
      split.chars,
      {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.03
      },
      "-=1.2"
    );

    // Subheadline
    tl.fromTo(
      subheadlineRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

    // Buttons
    tl.fromTo(
      actionsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.6"
    );

    // Parallax effect on image
    gsap.to(".hero-image", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24"
    >
      <div className="container-wide w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Left Content (Asymmetric) */}
        <div className="lg:col-span-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-ocean" />
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-ocean">
              Leading the Energy Transition
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[1.05] mb-8"
          >
            Certified Electrical & <br />Renewable Energy <br />Engineering Solutions
          </h1>

          <p
            ref={subheadlineRef}
            className="text-lg md:text-xl text-charcoal/80 font-body mb-12 max-w-xl leading-relaxed"
          >
            Delivering high-performance electrical design, renewable energy integration, and sustainable infrastructure across the United States.
          </p>

          <div
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-ocean hover:bg-primary text-white rounded-none px-8 py-4 transition-all tracking-widest font-label text-xs">
              <Link href="/services">EXPLORE OUR SERVICES</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 rounded-none px-8 py-4 transition-all backdrop-blur-sm tracking-widest font-label text-xs"
            >
              <Link href="/projects">VIEW ENERGY PROJECTS</Link>
            </Button>
          </div>
        </div>

        {/* Right Image (Architectural Layering) */}
        <div className="lg:col-span-6 relative h-[60vh] lg:h-[80vh] w-full">
          <div className="hero-image-container absolute inset-0 overflow-hidden rounded-none">
            <Image
              src="/images/hero/main.png"
              alt="High-voltage transmission lines representing broad electrical engineering"
              fill
              priority
              className="hero-image object-cover scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Tonal Layering Overlay */}
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          </div>

          {/* Technical Stat Accent */}
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-none shadow-hover hidden md:block border-l-4 border-ocean">
            <div className="font-mono text-4xl font-bold text-primary mb-1">
              150<span className="text-ocean">+</span>
            </div>
            <div className="font-accent text-[10px] uppercase tracking-widest text-charcoal/60">
              Projects Delivered
            </div>
          </div>
        </div>
      </div>

      {/* Background Technical Grid (Subtle) */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 w-full bg-surface-container-low/10 backdrop-blur-md py-4 md:py-6 border-t border-white/10">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 opacity-80">
          <span className="font-label text-white/60 text-[8px] md:text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">Certified by:</span>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale brightness-200 contrast-50">
            <span className="font-headline text-white text-sm md:text-lg">IEEE</span>
            <span className="font-headline text-white text-sm md:text-lg">ISO 9001</span>
            <span className="font-headline text-white text-sm md:text-lg">NEC</span>
            <span className="font-headline text-white text-sm md:text-lg">NFPA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
