"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

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
      className="relative bg-primary py-32 md:py-48 overflow-hidden"
    >
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ocean/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white/5 skew-y-6 -translate-x-1/4 translate-y-1/4 z-0" />

      <div className="cta-content relative z-10 container-wide px-6 md:px-12 lg:px-24 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-4 mb-10">
          <div className="w-12 h-px bg-ocean" />
          <span className="text-[10px] font-accent font-bold uppercase tracking-[0.3em] text-ocean">Technical Consultation</span>
          <div className="w-12 h-px bg-ocean" />
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-10 tracking-tight max-w-5xl leading-[1.05]">
          Ready to Engineer Your Industrial Future?
        </h2>

        <p className="text-lg md:text-2xl text-white/60 font-body mb-16 max-w-3xl leading-relaxed italic">
          &quot;Partner with our elite engineering team for high-precision technical consultations, system design audits, and global energy deployment strategies.&quot;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-ocean hover:text-white font-accent font-bold text-xs uppercase tracking-[0.2em] px-12 py-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2"
          >
            <Link href="/contact/get-a-quote">Request Technical Quote</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="group font-accent font-bold text-xs uppercase tracking-[0.2em] text-white border-b-2 border-transparent hover:border-white transition-all px-0"
          >
            <Link href="/contact">
              <span>Direct Technical Line</span>
              <ArrowRight size={16} className="ml-4 transition-transform duration-500 group-hover:translate-x-4" />
            </Link>
          </Button>
        </div>

        {/* Support Stats Overlay (Architectural Style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 mt-32 pt-20 border-t border-white/10 w-full max-w-5xl">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-white mb-3">24/7</div>
            <div className="text-[10px] font-accent font-bold text-ocean uppercase tracking-[0.3em]">Critical Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-white mb-3">GLOBAL</div>
            <div className="text-[10px] font-accent font-bold text-ocean uppercase tracking-[0.3em]">Certified Expertise</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl font-mono font-bold text-white mb-3">100%</div>
            <div className="text-[10px] font-accent font-bold text-ocean uppercase tracking-[0.3em]">Safety Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};
