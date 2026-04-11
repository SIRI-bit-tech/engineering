"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/constants/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

export const FeaturedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Rule 9: Cards: staggered y: 40 → 0 + opacity: 0 → 1 on scroll enter, 0.1s stagger
    gsap.fromTo(
      ".project-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-primary py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading
            dark
            badge="Case Studies"
            title="Engineering Success Across the Continent"
            description="Our projects demonstrate our commitment to delivering high-performance electrical infrastructure and renewable energy systems."
            className="mb-0"
          />
          <Button href="/projects" variant="outline" className="mb-2 text-white border-white hover:bg-white hover:text-primary">
            Browse All Projects
          </Button>
        </div>

        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <Link 
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card group relative bg-charcoal/30 border border-ocean/20 overflow-hidden"
            >
              {/* Image Layer */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Rule 10: Project cards → dark overlay slides up from bottom with description + CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 bg-ocean text-white font-accent text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Layer */}
              <div className="relative p-8 md:p-10 z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-ocean transition-colors duration-300 max-w-md leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 border border-ocean/30 flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-8 text-white/50 font-mono text-xs uppercase tracking-widest">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-ocean" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-ocean" />
                    {project.completionDate}
                  </div>
                </div>

                <p className="text-white/70 font-body mb-8 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats Row */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ocean/10">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-mono font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] font-accent font-semibold text-ocean uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover description reveal overlay - Slide up effect as per Rule 10 */}
              <div className="absolute bottom-0 left-0 w-full bg-ocean translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 p-8 flex justify-between items-center z-20">
                <span className="text-white font-accent font-bold uppercase tracking-widest text-sm">View Full Technical Case Study</span>
                <ArrowUpRight size={24} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
