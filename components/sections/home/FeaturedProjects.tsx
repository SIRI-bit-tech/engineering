"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

export const FeaturedProjects = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = ["ALL", "Renewable Integration", "Infrastructure"];

  const filteredProjects = STATIC_PROJECTS.filter((p) => {
    if (filter === "ALL") return true;
    return p.category.toLowerCase() === filter.toLowerCase();
  }).slice(0, 6);

  return (
    <section className="py-24 bg-[#00253B] text-white relative overflow-hidden">
      <div className="container-wide relative z-10 space-y-12">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block bg-ocean/20 text-ocean border border-ocean/30 px-3 py-1 rounded-full text-xs font-accent font-bold uppercase tracking-wider">
              Engineering Deployment Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-balance">
              Featured Case Studies & Infrastructure
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl font-accent font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-ocean text-white shadow-lg shadow-ocean/30 border border-ocean"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-ocean/50 rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              {/* Image Banner & Category Tag */}
              <div className="relative h-56 w-full bg-[#001D2F] overflow-hidden">
                <Image
                  src={project.mainImage || "/placeholder-project.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00253B] via-transparent to-transparent opacity-80" />

                {/* Status Badge */}
                <span className="absolute top-4 right-4 bg-[#001D2F]/80 backdrop-blur-md border border-white/20 text-white font-accent font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <CheckCircle size={10} className="text-ocean" />
                  <span>{project.completionDate ? "Completed" : "Ongoing"}</span>
                </span>

                <span className="absolute bottom-4 left-4 bg-ocean/90 text-white font-accent font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-white/50 text-[11px] font-mono">
                    <span className="flex items-center">
                      <MapPin size={12} className="mr-1 text-ocean" />
                      {project.location}
                    </span>
                    {project.completionDate && (
                      <span className="flex items-center">
                        <Calendar size={12} className="mr-1 text-ocean" />
                        {project.completionDate}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white group-hover:text-ocean transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-white/70 font-body leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-xs font-accent font-bold uppercase tracking-wider text-ocean hover:text-white transition-colors group/btn"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Action */}
        <div className="text-center pt-6">
          <Button
            asChild
            variant="outline"
            className="border-ocean text-ocean hover:bg-ocean hover:text-white font-accent font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
          >
            <Link href="/projects">Explore Full Projects Archive</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
