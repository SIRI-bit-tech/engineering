import { PROJECTS, SITE_NAME } from "@/constants/constants";
import { notFound } from "next/navigation";
import { MapPin, Zap, Battery, Wind, Gauge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Readonly<ProjectPageProps>) {
  const { params } = props;
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage(props: Readonly<ProjectPageProps>) {
  const { params } = props;
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  // Get other projects for "Related Projects" section
  const relatedProjects = PROJECTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Full Width Technical Header */}
      <section className="relative h-[60vh] md:h-[80vh] bg-navy overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 py-16 md:py-32">
          <div className="container-wide px-6 md:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-4xl">
                <div className="inline-block px-4 py-1 bg-[#0e6492] text-white font-label text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  {project.category}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white mb-8 leading-none">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-body max-w-2xl leading-relaxed italic border-l-4 border-[#0e6492] pl-8">
                  {project.description}
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 text-white min-w-[200px]">
                  <div className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-widest mb-4">Location</div>
                  <div className="text-xl font-headline font-bold">{project.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Indices Stats Bar */}
      <section className="bg-navy border-t border-white/5 py-16">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col">
              <div className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Project Status</div>
              <div className="text-2xl font-headline font-bold text-white">COMMISSIONED</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Metric I</div>
              <div className="text-2xl font-headline font-bold text-[#0e6492]">{project.stats?.[0].value}</div>
              <div className="text-[10px] font-label font-bold text-slate-500 uppercase tracking-widest mt-1">{project.stats?.[0].label}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Metric II</div>
              <div className="text-2xl font-headline font-bold text-[#0e6492]">{project.stats?.[1].value}</div>
              <div className="text-[10px] font-label font-bold text-slate-500 uppercase tracking-widest mt-1">{project.stats?.[1].label}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Timeline</div>
              <div className="text-2xl font-headline font-bold text-white uppercase">{project.completionDate}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Challenge & Solution */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-navy" />
                  <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-navy">Engineering Record</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-12 leading-tight uppercase">
                  Technical Case<br />Study Overview
                </h2>
                <div className="p-8 bg-slate-50 border-l-4 border-navy">
                  <p className="text-sm font-body text-slate-600 leading-relaxed">
                    This document summarizes the technical execution, engineering constraints, and final performance metrics for the {project.slug} deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-24">
              <div>
                <h3 className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.4em] mb-8">01 / The Challenge</h3>
                <p className="text-2xl font-body text-navy leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.4em] mb-8">02 / The Solution</h3>
                <p className="text-2xl font-body text-navy leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[10px] font-label font-bold text-slate-400 uppercase tracking-[0.4em] mb-8">03 / Key Outcomes</h3>
                  <ul className="space-y-6">
                    {project.results.map((result, i) => (
                      <li key={result} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-navy text-white flex items-center justify-center shrink-0 font-label text-[10px] font-bold">
                          {i + 1}
                        </div>
                        <span className="text-sm font-body text-slate-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-80">
                  <Image
                    src={project.mainImage}
                    alt="Technical detail"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 border-20 border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Hybrid Infrastructure Features */}
      <section className="bg-slate-50 py-24 md:py-40">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-navy" />
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-navy">Technical Specification</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy leading-tight">
                Advanced Engineering Protocols & Systems
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
            {[
              { title: "Renewable Sync", desc: "Strategic synchronization of variable renewable sources into static industrial grids.", icon: Zap },
              { title: "Thermal Analysis", desc: "Advanced thermodynamic modeling to ensure cable and transformer longevity.", icon: Gauge },
              { title: "Smart Grid Controls", desc: "SCADA-integrated automation for real-time load balancing and fault detection.", icon: Gauge },
              { title: "Structural Integrity", desc: "High-voltage tower and substation structural analysis for seismic resilience.", icon: Wind },
              { title: "Grid Buffering", desc: "Utility-scale storage integration to mitigate renewable intermittency.", icon: Battery },
              { title: "Digital Twin", desc: "Real-time virtual modeling for predictive maintenance and performance optimization.", icon: Gauge },
            ].map((feature) => (
              <div key={feature.title} className="p-12 bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-colors duration-500">
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center mb-8">
                  <feature.icon className="w-6 h-6 text-navy" />
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

      {/* Visual Documentation (Gallery) */}
      <section className="bg-white py-24 md:py-40">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-navy" />
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-navy">Visual Documentation</span>
              <div className="w-12 h-1 bg-navy" />
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-navy mb-6 uppercase">
              Field Execution Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              project.mainImage,
              "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2070&auto=format&fit=crop",
            ].map((img, i) => (
              <div key={`gallery-${img.slice(-20)}`} className={`relative overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'}`}>
                <Image
                  src={img}
                  alt={`Project execution step ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-2000 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    src={relatedProject.mainImage}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-navy text-[9px] font-bold text-white uppercase tracking-widest">
                      {relatedProject.category}
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

      {/* Ready to Initialize Consultation? */}
      <section className="bg-navy py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container-wide relative z-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white mb-12">
              Ready to architect the future?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-body mb-16 leading-relaxed max-w-2xl mx-auto italic">
              &quot;Engineering integrity is the foundation of global progress. Partner with VoltaEdge to modernize your legacy infrastructure.&quot;
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link
                href="/contact"
                className="px-12 py-6 bg-[#0e6492] text-white font-label text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-navy transition-all duration-500 shadow-xl"
              >
                Initialize Consultation
              </Link>
              <Link
                href="/contact/get-a-quote"
                className="px-12 py-6 border border-white/20 text-white font-label text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-navy transition-all duration-500"
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
