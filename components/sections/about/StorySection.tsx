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
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative aspect-video overflow-hidden group border border-ocean/10 shadow-default">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
              alt="Engineering blueprint review"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-500" />
            <div className="absolute bottom-6 right-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-accent text-xs uppercase tracking-widest font-bold">
              Engineering Excellence
            </div>
          </div>

          <div className="lg:w-1/2 story-content">
            <SectionHeading
              badge="Our Story"
              title="A Vision for Africa's Energy Future"
              description="Founded on the principles of precision and innovation, VoltaEdge Engineering has grown from a boutique electrical design studio to a multidisciplinary engineering firm leading some of the continent's most significant power projects."
            />
            
            <div className="space-y-6 text-charcoal/70 font-body leading-relaxed max-w-xl">
              <p>
                We believe that reliable, sustainable power is the bedrock of industrial growth and social development. That's why we bring global engineering standards to every local deployment, ensuring safety, efficiency, and long-term viability.
              </p>
              <p>
                Today, our team of certified engineers works across Africa, from large-scale solar farms in the Nigerian industrial belt to smart grid deployments in West Africa's growing logistics ports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
