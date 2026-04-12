"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PARTNERS } from "@/constants/constants";

export const TrustBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Continuous infinite ticker animation
    const ticker = containerRef.current?.querySelector(".ticker-content");
    if (ticker) {
      const width = ticker.scrollWidth;
      gsap.to(ticker, {
        x: -width / 2,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-12 bg-surface overflow-hidden border-b border-surface-container"
    >
      <div className="ticker-content flex whitespace-nowrap items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        {/* Double the list for seamless looping */}
        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
          <div 
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 px-12 flex items-center justify-center"
          >
            <div className="relative h-12 w-32 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
