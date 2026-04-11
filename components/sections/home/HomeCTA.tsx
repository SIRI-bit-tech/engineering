"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SITE_NAME, SITE_TAGLINE } from "@/constants/constants";
import { Button } from "@/components/ui/Button";
import { Send, ArrowRight } from "lucide-react";

export const HomeCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for content
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
      className="relative bg-primary py-24 md:py-32 overflow-hidden"
    >
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-r border-t border-ocean -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-l border-b border-ocean translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-ocean to-transparent" />
      </div>

      <div className="cta-content relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-ocean/20 border border-ocean/30 rounded-sm mb-8">
          <Send size={14} className="text-ocean" />
          <span className="text-xs font-accent font-bold uppercase tracking-widest text-white">Engineering Consultation</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight max-w-4xl leading-tight">
          Ready to Engineer Your Energy Future?
        </h2>

        <p className="text-lg md:text-xl text-white/70 font-body mb-12 max-w-2xl leading-relaxed">
          Contact our certified engineering team today for a technical consultation, system design audit, or renewable energy deployment plan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <Button href="/contact/get-a-quote" size="lg" className="w-full sm:w-auto">
            Get Technical Quote
          </Button>
          <Button 
            href="/contact" 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary flex items-center group"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>

        {/* Support Stats Overlay */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-20 pt-16 border-t border-white/10 w-full max-w-4xl">
          <div className="text-center">
            <div className="text-xl font-mono font-bold text-white mb-1">24/7</div>
            <div className="text-[10px] font-accent font-semibold text-ocean uppercase tracking-widest">Engineering Support</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-mono font-bold text-white mb-1">COREN</div>
            <div className="text-[10px] font-accent font-semibold text-ocean uppercase tracking-widest">Certified Team</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-xl font-mono font-bold text-white mb-1">100%</div>
            <div className="text-[10px] font-accent font-semibold text-ocean uppercase tracking-widest">Safety Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
