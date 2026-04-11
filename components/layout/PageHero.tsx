"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/Badge";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  image?: string;
  dark?: boolean;
}

export const PageHero = ({
  badge,
  title,
  description,
  image = "https://images.unsplash.com/photo-1466611653911-954ff21b6748?q=80&w=2070&auto=format&fit=crop",
  dark = true,
}: PageHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      ".hero-bg",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 0.3, duration: 2 }
    );

    tl.fromTo(
      ".hero-content > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
      "-=1.2"
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative pt-48 pb-24 md:pt-64 md:pb-40 bg-primary overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="hero-bg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/50 to-primary" />
      </div>

      {/* Content Layer */}
      <div className="hero-content relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <Badge variant="ocean" className="mb-8">
            {badge}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Engineering Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-ocean to-transparent opacity-30" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-ocean/10 to-transparent opacity-20" />
    </section>
  );
};
