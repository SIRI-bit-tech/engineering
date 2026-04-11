"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TESTIMONIALS } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export const TestimonialsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".testimonial-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-24 md:py-32 overflow-hidden border-t border-ocean/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeading
          badge="Engineering Trust"
          title="What Our Partners Say"
          description="We build long-term relationships with industrial and commercial leaders through precision and reliability."
          align="center"
          className="mb-20"
        />

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((testimonial, i) => (
            <div 
              key={i}
              className="testimonial-card relative bg-ice-blue/30 p-12 md:p-16 border border-ocean/5 shadow-default hover:shadow-hover hover:-translate-y-2 transition-all duration-300 group"
            >
              <Quote size={48} className="text-ocean/10 group-hover:text-ocean/20 transition-colors duration-300 mb-8" />
              
              <blockquote className="text-xl md:text-2xl font-body italic text-primary/80 mb-12 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center pt-10 border-t border-ocean/10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-ocean flex items-center justify-center text-white font-heading font-bold text-lg mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-lg font-heading font-bold text-primary mb-1">{testimonial.author}</div>
                  <div className="text-xs font-accent font-bold uppercase tracking-widest text-ocean">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
