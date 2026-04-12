"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/constants/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      className="py-32 bg-[#1D1F21] text-white overflow-hidden relative"
    >
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="font-label text-secondary text-xs font-bold tracking-[0.3em] uppercase block mb-4">Portfolio</span>
            <h2 className="font-headline text-5xl tracking-tight leading-tight">Infrastructural Impact</h2>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const PROJECT_IMAGES = [
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBLCcvVadarpxJ6nldK4-VxdLveUxDEwSlQB2wE5F1AkRTXX8pI4LCqUdESKZUKtD3Ywz9CFRtB7SbKzmAC6fthbUBpdHxXxvaqkcMmzX-QqYGstC_HIsVSoIfmnr6lmbLuGTekfQaXdV4PCw9kx1DpWBo3d3jgwBgahvD7bLxU3hF_rD-EJvAEEw1W3Cl5O_JvzyMq7KBiVSoFz_TnjRcPljvBywWSp75OyBbLMRD_1KLlAZ40xW-JdZOd7soJUlupglxz62wBAkL4",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAcFj2FN7YWrRawlsszd4QgDYFhNsttOB0rnUWPFmxJ5HDoh2chQpRSwUTRaimIgeRDGR5v2-3T4arfgbrUQY6ZhSNOvx4YO_r_mO5nFjm2sA3kB2G0FIIj7sZMKRVB2L9A3SCtTDqSLf62fPYYrlyUpJ8pLsmyRNn4ez2qBl-rnWFoXCcU5RKbJHdPasrUk7Cqtd9OapNxcpRkc8gKKYYTmyODEeHpFrHK8t3qCe7peqHHBo38EeBqjlalllV6pD6RmzsC9S0tiz2q",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAxfll1hNDrw9C2yGIiikUnWsQ4uVtM69a1VlRDVNM1j1Wlj9Lm597r7FqcI5LWXMeogF2Zs0HhddceQoOXIpHVrHfKUNKo2HAxwM115Oq7GsVthL2r5Y1qwVANJTLuaTEzYIsXNWhbxZa4CBx0MyP-WjrE0ZPoBbL2ECLXQMYTcRwq9oZrvGC33h0uPD7t0kzCaznUWh7dHV6rpPjiB-9vHa7j8eEErsT_035rLAGgdssKPqyrVZyU8N31MWCLa_jYsDm2Ai0b_mjP",
            ];
            const projectImage = PROJECT_IMAGES[idx] ?? PROJECT_IMAGES[2];

            return (
              <div
                key={project.id}
                className="group relative aspect-4/5 overflow-hidden project-card"
              >
                <Image
                  src={projectImage}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 p-8 w-full">
                  <span className="font-label text-secondary-container text-[10px] tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h4 className="font-headline text-2xl mb-6">{project.title}</h4>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-label text-xs font-bold tracking-widest border-b border-secondary pb-1 group-hover:text-secondary-container transition-colors"
                  >
                    VIEW CASE STUDY
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
