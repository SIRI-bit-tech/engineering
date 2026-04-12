"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".story-content > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
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
      className="bg-white py-24 md:py-40 overflow-hidden"
    >
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          {/* Left Content (Editorial Style) */}
          <div className="lg:w-1/2 story-content">
            <SectionHeading
              badge="Our Story"
              title="A Vision for Technical Precision"
              description="Founded on the principles of precision and innovation, VoltaEdge Engineering has grown from a boutique electrical design studio to a multidisciplinary engineering firm leading some of the world's most significant power projects."
            />

            <div className="space-y-10 text-charcoal/70 font-body leading-relaxed max-w-xl text-lg italic">
              <p>
                &quot;We believe that reliable, sustainable power is the bedrock of industrial growth and social development. That&apos;s why we bring global engineering standards to every deployment, ensuring safety, efficiency, and long-term viability.&quot;
              </p>
              <p className="not-italic text-base text-charcoal/60">
                Today, our team of certified engineers works across the United States and beyond, from utility-scale renewable hubs in industrial districts to smart grid deployments in busy international logistics ports. Our commitment to excellence remains the foundation of our engineering legacy.
              </p>
            </div>

            {/* Technical Detail Accent */}
            <div className="mt-16 flex items-center gap-12">
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-bold text-primary">20+</span>
                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-ocean">Years of Experience</span>
              </div>
              <div className="h-12 w-px bg-charcoal/10" />
              <div className="flex flex-col">
                <span className="font-mono text-3xl font-bold text-primary">150+</span>
                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-ocean">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Right Image (Architectural Style) */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-ocean/5 translate-x-12 translate-y-12 rounded-none z-0" />
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-none shadow-default z-10 group">
            <Image
                src="/images/about/story.png"
                alt="Engineering team reviewing high-voltage schematics"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-700" />

              {/* Technical Overlay Tag */}
              <div className="absolute bottom-12 right-0 left-0 px-12 z-20">
                <div className="bg-white/95 backdrop-blur-xl p-8 rounded-none shadow-hover border-l-8 border-ocean">
                  <div className="text-primary font-display text-2xl font-bold mb-3">Technical Integrity</div>
                  <div className="text-ocean font-accent text-[10px] uppercase tracking-[0.3em] font-bold">Protocol Alpha-01</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
