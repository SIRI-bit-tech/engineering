"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/constants/constants";
import { ArrowUpRight, MapPin, Calendar, Filter } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const CATEGORIES = ["All", "Renewable Energy", "Industrial Automation", "Power Distribution"];

export const ProjectsGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef, dependencies: [activeCategory] });

  return (
    <section 
      ref={containerRef}
      className="bg-white py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-ocean/10 pb-8">
          <div className="flex items-center space-x-3 text-ocean">
            <Filter size={18} />
            <span className="font-accent font-bold uppercase tracking-widest text-sm">Filter Projects</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-accent text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-ocean text-white shadow-button" 
                  : "bg-ice-blue/50 text-primary hover:bg-ocean/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card group relative bg-white border border-ocean/10 overflow-hidden shadow-default hover:shadow-hover transition-all duration-300"
            >
              {/* Image Layer */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute top-6 left-6 z-10">
                  <Badge variant="ocean" size="md">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content Layer */}
              <div className="relative p-10 z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary group-hover:text-ocean transition-colors duration-300 max-w-md leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-12 h-12 border border-ocean/30 flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-8 text-charcoal/40 font-mono text-xs uppercase tracking-widest">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-ocean" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-ocean" />
                    {project.completionDate}
                  </div>
                </div>

                <p className="text-charcoal/70 font-body mb-8 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats Row */}
                {project.stats && (
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ocean/10">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-mono font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-[10px] font-accent font-semibold text-ocean uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover description reveal overlay - Slide up effect as per Rule 10 */}
              <div className="absolute bottom-0 left-0 w-full bg-ocean translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 p-8 flex justify-between items-center z-20">
                <span className="text-white font-accent font-bold uppercase tracking-widest text-sm">View Technical Case Study</span>
                <ArrowUpRight size={24} className="text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
