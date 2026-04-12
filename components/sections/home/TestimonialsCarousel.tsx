"use client";

import React, { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TESTIMONIALS } from "@/constants/constants";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export const TestimonialsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-play effect
  useEffect(() => {
    if (!emblaApi) return;

    let intervalId: NodeJS.Timeout;

    const startAutoPlay = () => {
      stopAutoPlay(); // Prevent multiple intervals
      intervalId = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 4000); // 4 seconds for better readability but noticeable movement
    };

    const stopAutoPlay = () => {
      if (intervalId) clearInterval(intervalId);
    };

    // Events for better interaction handling
    emblaApi.on("pointerDown", stopAutoPlay);
    emblaApi.on("pointerUp", startAutoPlay);
    emblaApi.on("select", startAutoPlay); // Reset timer on manual selection too

    const emblaNode = emblaApi.rootNode();
    if (emblaNode) {
      emblaNode.addEventListener("mouseenter", stopAutoPlay);
      emblaNode.addEventListener("mouseleave", startAutoPlay);
    }

    startAutoPlay();

    return () => {
      stopAutoPlay();
      emblaApi.off("pointerDown", stopAutoPlay);
      emblaApi.off("pointerUp", startAutoPlay);
      emblaApi.off("select", startAutoPlay);
      if (emblaNode) {
        emblaNode.removeEventListener("mouseenter", stopAutoPlay);
        emblaNode.removeEventListener("mouseleave", startAutoPlay);
      }
    };
  }, [emblaApi]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".testimonial-heading",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".embla",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".embla",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-32 bg-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="testimonial-heading flex justify-between items-end mb-20">
          <div>
            <span className="font-label text-secondary text-xs font-bold tracking-[0.3em] uppercase block mb-4">Engineering Trust</span>
            <h2 className="font-headline text-5xl text-primary tracking-tight leading-tight">Client Technical<br />Validation</h2>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.author}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 px-6"
              >
                <div className="h-full bg-ice-blue/10 p-12 md:p-16 flex flex-col justify-between group hover:bg-white hover:shadow-hover transition-all duration-700 relative">
                  {/* Technical Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-ocean/5 -mr-12 -mt-12 rounded-none group-hover:scale-150 transition-transform duration-700" />

                  <div>
                    <Quote size={48} className="text-secondary/20 mb-10 group-hover:text-secondary/40 transition-colors" />
                    <blockquote className="font-display italic text-2xl text-primary leading-relaxed mb-12">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>

                  <div className="flex items-center space-x-6 pt-10 border-t border-charcoal/5">
                    <Avatar className="w-16 h-16 shadow-lg border border-primary/10">
                      <AvatarFallback className="bg-primary text-white font-headline text-xl group-hover:bg-ocean transition-colors duration-500">
                        {testimonial.author.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-headline text-xl text-primary mb-1">{testimonial.author}</h4>
                      <p className="font-label text-secondary text-[10px] font-bold tracking-widest uppercase">
                        {testimonial.role} <span className="text-charcoal/30 mx-2">|</span> {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
