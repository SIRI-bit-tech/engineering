"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/Badge";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export const SectionHeading = ({
  badge,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clip-path reveal animation for the heading
    gsap.fromTo(
      titleRef.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <Badge variant={dark ? "ice-blue" : "ocean"} className="mb-6">
          {badge}
        </Badge>
      )}
      
      <div className="relative inline-block mb-6">
        <h2
          ref={titleRef}
          className={cn(
            "text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]",
            dark ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
        {/* 3px Ocean accent line positioned exactly 8px above the text baseline (simulated with relative positioning) */}
        <div className="absolute -top-4 left-0 w-12 h-[3px] bg-ocean rounded-full" />
      </div>

      {description && (
        <p
          className={cn(
            "text-base md:text-xl font-body leading-relaxed max-w-2xl mt-4",
            dark ? "text-white/70" : "text-charcoal/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
