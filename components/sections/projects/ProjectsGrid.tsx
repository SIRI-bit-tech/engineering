"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, MapPin, Calendar, Filter } from "lucide-react";


interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  status?: string;
  completionDate: string;
  coverImage: string;
  mainImage: string;
  stats?: { label: string; value: string }[];
  category?: {
    name: string;
    slug: string;
  };
  challenge?: string;
  solution?: string;
  results?: string[];
  additionalImages?: string[];
}

const CATEGORIES = ["All"];

export const ProjectsGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data: Project[] = await response.json();
        setProjects(data);
        
        // Extract unique categories using an explicit loop to avoid inference issues
        const processedCategories: string[] = [];
        data.forEach((p: Project) => {
          const name = p.category?.name;
          if (name && !processedCategories.includes(name)) {
            processedCategories.push(name);
          }
        });

        setCategories(["All", ...processedCategories]);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category?.name === activeCategory);

  useGSAP(() => {
    if (!loading && filteredProjects.length > 0) {
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
    }
  }, { scope: containerRef, dependencies: [activeCategory, loading, filteredProjects] });

  const gridContent = (() => {
    if (loading) {
      return (
        <div className="col-span-full text-center py-20">
          <div className="w-16 h-16 border-4 border-ocean border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-charcoal/60 font-body">Loading projects...</p>
        </div>
      );
    }

    if (filteredProjects.length === 0) {
      return (
        <div className="col-span-full text-center py-20">
          <p className="text-charcoal/60 font-body">No projects found.</p>
        </div>
      );
    }

    return filteredProjects.map((project) => (
      <Link
        key={project.id}
        href={`/projects/${project.slug}`}
        className="project-card group relative bg-ice-blue/10 overflow-hidden rounded-none transition-all duration-700 hover:shadow-[0_32px_64px_rgba(0,37,59,0.1)]"
      >
        {/* Image Layer */}
        <div className="relative aspect-16/10 overflow-hidden rounded-none m-3 sm:m-4">
          <Image
            src={project.coverImage || "/images/projects/placeholder.png"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10">
            <span className="px-3 sm:px-6 py-1 sm:py-2 bg-white/95 backdrop-blur-md text-primary font-label text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] rounded-none shadow-sm">
              {project.category?.name || 'Uncategorized'}
            </span>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative p-6 sm:p-8 md:p-10 lg:p-14 z-10">
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary group-hover:text-ocean transition-colors duration-500 max-w-lg leading-[1.1]">
              {project.title}
            </h3>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-primary/10 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
              <ArrowUpRight size={16} className="sm:size-20 md:size-28" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-8 mb-6 sm:mb-10 text-charcoal/70 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
            <div className="flex items-center">
              <MapPin size={12} className="sm:size-14 mr-2 sm:mr-3 text-ocean" />
              {project.location}
            </div>
            <div className="flex items-center">
              <Calendar size={12} className="sm:size-14 mr-2 sm:mr-3 text-ocean" />
              {project.completionDate ? new Date(project.completionDate).getFullYear() : 'Ongoing'}
            </div>
            <div className="flex items-center px-2 py-0.5 bg-ocean/10 text-ocean rounded-none">
              <span className="text-[8px] sm:text-[10px]">{project.status || 'COMMISSIONED'}</span>
            </div>
          </div>

          <p className="text-charcoal/60 font-body text-sm sm:text-base md:text-lg mb-8 sm:mb-12 line-clamp-2 leading-relaxed italic">
            {project.description}
          </p>

          {/* Stats Row */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-6 sm:gap-12 pt-6 sm:pt-10 border-t border-charcoal/5">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg sm:text-2xl md:text-3xl font-mono font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-label font-bold text-ocean uppercase tracking-[0.3em]">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hover Overlay - Editorial Style */}
        <div className="absolute inset-0 bg-primary translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] group-hover:translate-y-0 p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center z-20">
          <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 text-center">Detailed Technical Case Study</div>
          <div className="flex items-center gap-3 sm:gap-4 text-white font-label font-bold uppercase tracking-[0.3em] text-xs sm:text-sm">
            <span className="hidden sm:inline">Explore Engineering Data</span>
            <span className="sm:hidden">Explore Data</span>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white text-primary rounded-none flex items-center justify-center">
              <ArrowUpRight size={16} className="sm:size-24" />
            </div>
          </div>
        </div>
      </Link>
    ));
  })();

  return (
    <section
      ref={containerRef}
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-40 overflow-hidden"
    >
      <div className="container-wide">
        {/* Filter Bar (Editorial Style) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 sm:mb-20 md:mb-24 gap-8 sm:gap-12 border-b border-charcoal/5 pb-8 sm:pb-12">
          <div className="flex items-center gap-4 sm:gap-6 text-primary">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-none bg-ocean/10 flex items-center justify-center">
              <Filter size={14} className="sm:size-16 text-ocean" />
            </div>
            <span className="font-label font-bold uppercase tracking-[0.3em] text-[10px] sm:text-[12px]">Filter Portfolio</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-3 font-label text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.3em] transition-all duration-500 rounded-none ${activeCategory === cat
                  ? "bg-primary text-white shadow-button"
                  : "bg-ice-blue/30 text-charcoal/60 hover:bg-ocean hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {gridContent}
        </div>
      </div>
    </section>
  );

};
