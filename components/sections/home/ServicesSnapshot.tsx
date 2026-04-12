"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/constants/constants";
import { ArrowRight, DraftingCompass, Leaf, Zap, ClipboardCheck, Cpu, BatteryCharging } from "lucide-react";

export const ServicesSnapshot = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <DraftingCompass size={40} />;
      case 1: return <Leaf size={40} />;
      case 2: return <Zap size={40} />;
      case 3: return <ClipboardCheck size={40} />;
      case 4: return <Cpu size={40} />;
      case 5: return <BatteryCharging size={40} />;
      default: return <Zap size={40} />;
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Rule 9: Cards: staggered y: 40 → 0 + opacity: 0 → 1 on scroll enter, 0.1s stagger
    gsap.fromTo(
      ".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-32 bg-[#E1F5FE]"
    >
      <div className="container-wide">
        <div className="mb-20">
          <h2 className="accent-line font-headline text-4xl text-primary tracking-tight leading-tight">
            Technical Engineering<br />Core Services
          </h2>
        </div>
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="service-card bg-surface-container-lowest p-10 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-secondary mb-6">
                {getIcon(idx)}
              </div>
              <h3 className="font-label text-xl font-bold text-primary mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-charcoal/70 mb-8 text-sm leading-relaxed font-body">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-secondary font-label text-xs font-bold tracking-widest group-hover:translate-x-2 transition-transform"
              >
                EXPLORE SERVICE <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .accent-line {
          position: relative;
        }
        .accent-line::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 0;
          width: 48px;
          height: 3px;
          background-color: #005F8D;
        }
      `}</style>
    </section>
  );
};
