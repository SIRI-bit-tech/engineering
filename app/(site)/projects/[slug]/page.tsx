import { SITE_NAME } from "@/constants/constants";
import { notFound } from "next/navigation";
import { MapPin, Zap, Battery, Wind, Gauge, Clock, Wrench, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  completionDate: string;
  coverImage: string;
  stats?: { label: string; value: string }[];
  category?: {
    name: string;
    slug: string;
  };
  challenge?: string;
  solution?: string;
  results?: string[];
  technicalAnalysis?: string[];
  implementationTimeline?: string[];
  keyTechnologies?: string[];
  environmentalImpact?: string[];
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Readonly<ProjectPageProps>) {
  const { params } = props;
  const { slug } = await params;
  
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/projects/${slug}`, {
      cache: 'no-store'
    });
    
    if (response.ok) {
      const project: Project = await response.json();
      return {
        title: `${project.title} | ${SITE_NAME}`,
        description: project.description,
      };
    }
  } catch (error) {
    console.error('Failed to fetch project for metadata:', error);
  }

  return { title: "Project Not Found" };
}

export default async function ProjectDetailPage(props: Readonly<ProjectPageProps>) {
  const { params } = props;
  const { slug } = await params;
  
  // Fetch project from database
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/projects/${slug}`, {
    cache: 'no-store'
  });
  
  if (!response.ok) {
    notFound();
  }
  
  const project: Project = await response.json();
  
  // Get other projects for "Related Projects" section
  const allProjectsResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/projects?limit=3`, {
    cache: 'no-store'
  });
  const allProjects: Project[] = allProjectsResponse.ok ? await allProjectsResponse.json() : [];
  const relatedProjects = allProjects.filter((p: Project) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Dynamic Technical Header */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] bg-navy flex flex-col">
        <Image
          src={project.coverImage || "/images/projects/placeholder.png"}
          alt={project.title}
          fill
          className="object-cover opacity-30 transition-opacity duration-1000"
          priority
          sizes="100vw"
        />
        {/* Maximum Contrast Multi-Layer Overlay */}
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-linear-to-b from-navy via-transparent to-navy/90" />

        <div className="relative z-10 pt-44 md:pt-60 pb-24 md:pb-40 grow">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-16">
              <div className="max-w-5xl">
                <div className="inline-block px-4 py-1 bg-[#0e6492] text-white font-label text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                  {project.category?.name || 'Uncategorized'}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-white mb-12 leading-[1.05] tracking-tight uppercase">
                  {project.title}
                </h1>
                <p className="text-xl md:text-3xl text-white font-body font-semibold max-w-4xl leading-relaxed italic border-l-8 border-[#0e6492] pl-10">
                  {project.description}
                </p>
              </div>
              <div className="hidden lg:block mt-24">
                <div className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 text-white min-w-[280px]">
                  <div className="text-[10px] font-label font-bold text-[#0e6492] uppercase tracking-widest mb-6">Project Location</div>
                  <div className="text-3xl font-headline font-bold">{project.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Indices Stats Bar */}
      <section className="bg-navy border-t border-white/10 py-16">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col">
              <div className="text-[10px] font-label font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Project Status</div>
              <div className="text-2xl font-headline font-bold text-white">COMMISSIONED</div>
            </div>
            {project.stats?.map((stat, i) => (
              <div key={stat.label} className="flex flex-col">
                <div className="text-[10px] font-label font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Metric {i + 1}</div>
                <div className="text-3xl font-headline font-bold text-[#0e6492]">{stat.value}</div>
                <div className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            )) || []}
            <div className="flex flex-col">
              <div className="text-[10px] font-label font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Timeline</div>
              <div className="text-2xl font-headline font-bold text-white uppercase">{project.completionDate ? new Date(project.completionDate).getFullYear() : 'Ongoing'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Challenge & Solution */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0e6492_1px,transparent_1px)] bg-size-[32px_32px]" />
        <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-[#0e6492]" />
                  <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-[#0e6492]">Engineering Record</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-12 leading-tight uppercase">
                  Technical Case<br />Study Overview
                </h2>
                <div className="p-8 bg-slate-50 border-l-4 border-[#0e6492]">
                  <p className="text-sm font-body text-slate-600 leading-relaxed italic">
                    This document summarizes the technical execution, engineering constraints, and final performance metrics for the {project.slug} deployment, verified by VoltaEdge lead engineers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-32">
              <div>
                <h3 className="text-[10px] font-label font-bold text-[#0e6492] uppercase tracking-[0.4em] mb-8">01 / The Challenge</h3>
                <p className="text-2xl font-body text-navy leading-relaxed font-light">
                  {project.challenge || ''}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-label font-bold text-[#0e6492] uppercase tracking-[0.4em] mb-8">02 / The Solution</h3>
                <p className="text-2xl font-body text-navy leading-relaxed font-light">
                  {project.solution || ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-slate-100">
                <div>
                  <h3 className="text-[10px] font-label font-bold text-[#0e6492] uppercase tracking-[0.4em] mb-12">03 / Key Outcomes</h3>
                  <ul className="space-y-8">
                    {project.results?.map((result, i) => (
                      <li key={result} className="flex items-start gap-6 group">
                        <div className="w-8 h-8 bg-navy text-white flex items-center justify-center shrink-0 font-label text-[10px] font-bold group-hover:bg-[#0e6492] transition-colors">
                          {i + 1}
                        </div>
                        <span className="text-base font-body text-slate-600 leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-96 group overflow-hidden">
                  <Image
                    src={project.coverImage || "/images/projects/placeholder.png"}
                    alt="Technical detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 border-24 border-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Hybrid Infrastructure Features */}
      <section className="bg-slate-50 py-24 md:py-40 relative">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#0e6492]" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-[#0e6492]">Technical Specification</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy leading-tight">
                Advanced Engineering Protocols & Systems
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
            {[
              { title: "Renewable Sync", desc: "Strategic synchronization of variable renewable sources into static industrial grids using VSC-HVDC.", icon: Zap },
              { title: "Thermal Analysis", desc: "Advanced thermodynamic modeling to ensure cable and transformer longevity under high load.", icon: Gauge },
              { title: "Smart Grid Controls", desc: "SCADA-integrated automation for real-time load balancing and fault detection.", icon: Gauge },
              { title: "Structural Integrity", desc: "High-voltage tower and substation structural analysis for seismic and maritime resilience.", icon: Wind },
              { title: "Grid Buffering", desc: "Utility-scale storage integration to mitigate renewable intermittency and frequency dip.", icon: Battery },
              { title: "Digital Twin", desc: "Real-time virtual modeling for predictive maintenance and performance optimization.", icon: Gauge },
            ].map((feature) => (
              <div key={feature.title} className="p-12 bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-500">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center mb-8">
                  <feature.icon className="w-6 h-6 text-[#0e6492]" />
                </div>
                <h3 className="text-xl font-headline font-bold text-navy mb-6 uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Analysis Section */}
      {project.technicalAnalysis && project.technicalAnalysis.length > 0 && (
        <section className="bg-white py-24 md:py-40">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <div className="mb-24">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#0e6492]" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-[#0e6492]">Technical Analysis</span>
                <div className="w-12 h-1 bg-[#0e6492]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-6 uppercase">
                Engineering Specifications
              </h2>
              <p className="text-lg text-slate-600 font-body max-w-3xl">
                Deep dive into the technical specifications and engineering innovations that made this project possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.technicalAnalysis?.map((item, index) => (
                <div key={`tech-${item.substring(0, 20)}`} className="flex items-start gap-6 p-8 bg-slate-50 border-l-4 border-[#0e6492]">
                  <div className="w-12 h-12 bg-[#0e6492] rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-white font-mono text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-700 font-body leading-relaxed">{item}</p>
                </div>
              )) || []}
            </div>
          </div>
        </section>
      )}

      {/* Implementation Timeline */}
      {project.implementationTimeline && project.implementationTimeline.length > 0 && (
        <section className="bg-slate-50 py-24 md:py-40">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <div className="mb-24">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#0e6492]" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-[#0e6492]">Project Timeline</span>
                <div className="w-12 h-1 bg-[#0e6492]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-6 uppercase">
                Implementation Phases
              </h2>
              <p className="text-lg text-slate-600 font-body max-w-3xl">
                Step-by-step execution of the project from conception to completion.
              </p>
            </div>
            <div className="space-y-8">
              {project.implementationTimeline?.map((phase, index) => (
                <div key={`phase-${phase.substring(0, 20)}`} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#0e6492] rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    {index < (project.implementationTimeline?.length || 0) - 1 && (
                      <div className="w-0.5 h-24 bg-[#0e6492]/30 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-slate-700 font-body text-lg leading-relaxed">{phase}</p>
                  </div>
                </div>
              )) || []}
            </div>
          </div>
        </section>
      )}

      {/* Key Technologies */}
      {project.keyTechnologies && project.keyTechnologies.length > 0 && (
        <section className="bg-white py-24 md:py-40">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <div className="mb-24">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#0e6492]" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-[#0e6492]">Technology Stack</span>
                <div className="w-12 h-1 bg-[#0e6492]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-6 uppercase">
                Key Technologies
              </h2>
              <p className="text-lg text-slate-600 font-body max-w-3xl">
                Cutting-edge equipment and systems deployed for optimal performance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyTechnologies?.map((tech, index) => (
                <div key={`tech-item-${tech.substring(0, 15)}`} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#0e6492]/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#0e6492]/10 rounded-lg flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-[#0e6492]" />
                    </div>
                    <span className="text-[10px] font-label font-bold text-[#0e6492] uppercase tracking-[0.3em]">TECH {index + 1}</span>
                  </div>
                  <p className="text-slate-700 font-body text-sm leading-relaxed">{tech}</p>
                </div>
              )) || []}
            </div>
          </div>
        </section>
      )}

      {/* Environmental Impact */}
      {project.environmentalImpact && project.environmentalImpact.length > 0 && (
        <section className="bg-slate-50 py-24 md:py-40">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <div className="mb-24">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#0e6492]" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-[#0e6492]">Sustainability</span>
                <div className="w-12 h-1 bg-[#0e6492]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-6 uppercase">
                Environmental Impact
              </h2>
              <p className="text-lg text-slate-600 font-body max-w-3xl">
                Sustainability achievements and environmental benefits delivered by this project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.environmentalImpact?.map((impact) => (
                <div key={`impact-${impact.substring(0, 20)}`} className="flex items-start gap-6 p-8 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-slate-700 font-body leading-relaxed">{impact}</p>
                </div>
              )) || []}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="bg-slate-50 py-24 md:py-40 border-t border-slate-100">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div>
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-navy" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-navy">Exploration</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy leading-tight">
                Similar Infrastructure Records
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[10px] font-label font-bold uppercase tracking-[0.4em] text-[#0e6492] hover:text-navy transition-colors pb-2 border-b-2 border-[#0e6492]/20"
            >
              Back to Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="group bg-white border border-slate-200 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={relatedProject.coverImage || "/images/projects/placeholder.png"}
                    alt={relatedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-navy text-[9px] font-bold text-white uppercase tracking-widest">
                      {relatedProject.category?.name || 'Uncategorized'}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col grow">
                  <h3 className="text-2xl font-display font-bold text-navy leading-tight mb-4 group-hover:text-[#0e6492] transition-colors">
                    {relatedProject.title}
                  </h3>
                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto pt-8 border-t border-slate-50">
                    <MapPin size={12} className="mr-2 text-navy" />
                    {relatedProject.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Initialize Consultation? - Compact Ribbon Layout */}
      <section className="bg-slate-900 py-12 md:py-16 border-t border-white/5">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white mb-2 uppercase tracking-wide">
                Ready to architect the future?
              </h2>
              <p className="text-sm text-slate-500 font-body">
                Partner with VoltaEdge to modernize your technical infrastructure projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#0e6492] text-white font-label text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-[#074566] transition-all duration-300 shadow-md text-center"
              >
                Initialize Consultation
              </Link>
              <Link
                href="/contact/get-a-quote"
                className="px-8 py-3 border border-white/10 text-white font-label text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white/5 transition-all duration-300 text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
