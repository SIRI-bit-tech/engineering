"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Compositor-friendly entrance timeline (opacity + transform translate3d)
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Badge entrance
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    // Headline entrance
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

    // Subheadline entrance
    tl.fromTo(
      subheadlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.4"
    );

    // Buttons
    tl.fromTo(
      actionsRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.3"
    );

    // Floating stats card
    tl.fromTo(
      statsRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );

    // Subtle parallax on hero image
    gsap.to(".hero-parallax-img", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center bg-[#001D2F] text-white overflow-hidden pt-28 pb-16"
    >
      {/* Dynamic Background Energy Mesh & Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/40 rounded-full blur-[140px]" />
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.04]">
          <defs>
            <pattern id="hero-mesh" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-mesh)" />
        </svg>
      </div>

      <div className="container-wide w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <div
            ref={badgeRef}
            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-ocean animate-ping" />
            <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-ocean">
              Leading energy transition & power engineering
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight text-balance"
          >
            Precision Power <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ice-blue to-ocean">
              & Energy Engineering
            </span>
          </h1>

          <p
            ref={subheadlineRef}
            className="text-base sm:text-lg text-white/70 font-body max-w-2xl leading-relaxed text-pretty"
          >
            Architecting high-performance power distribution networks, utility-scale renewable integration, and industrial SCADA automation for global infrastructure leaders.
          </p>

          {/* Action CTAs */}
          <div
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-ocean hover:bg-ocean/90 text-white font-accent font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/services" className="inline-flex items-center justify-center">
                <span>Explore Solutions</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-accent font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <Link href="/projects">View Projects Portfolio</Link>
            </Button>
          </div>

          {/* Core Feature Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-xl">
            <div className="flex items-center space-x-2 text-white/80">
              <Zap size={18} className="text-ocean flex-shrink-0" />
              <span className="text-xs font-accent font-bold uppercase tracking-wider">HV/MV Power</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Layers size={18} className="text-ocean flex-shrink-0" />
              <span className="text-xs font-accent font-bold uppercase tracking-wider">Grid Automation</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <ShieldCheck size={18} className="text-ocean flex-shrink-0" />
              <span className="text-xs font-accent font-bold uppercase tracking-wider">ISO Certified</span>
            </div>
          </div>
        </div>

        {/* Right Column Parallax Visual & Glass Stats */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] lg:h-[560px] w-full">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#00253B] shadow-2xl">
            <Image
              src="/images/hero/main.png"
              alt="High-voltage electrical grid infrastructure"
              fill
              priority
              className="hero-parallax-img object-cover scale-110"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Tonal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D2F] via-transparent to-transparent opacity-80" />
          </div>

          {/* Floating Glassmorphic Stat Badge */}
          <div
            ref={statsRef}
            className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-2xl shadow-2xl hidden sm:block max-w-xs"
          >
            <div className="flex items-baseline space-x-2 mb-1">
              <span className="font-display font-bold text-3xl md:text-4xl text-white">150</span>
              <span className="text-ocean text-2xl font-bold">+</span>
            </div>
            <p className="text-xs font-accent font-bold uppercase tracking-wider text-white/80">
              Utility & Industrial Projects Deployed
            </p>
            <p className="text-[10px] text-white/50 font-body mt-1">
              Delivered across 20+ countries with 99.99% system uptime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
