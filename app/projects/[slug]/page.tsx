import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { PROJECTS, SITE_NAME } from "@/constants/constants";
import { notFound } from "next/navigation";
import { MapPin, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col">
      <PageHero
        badge={project.category}
        title={project.title}
        description={project.description}
        image={project.mainImage}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-heading font-bold text-primary mb-10 leading-tight">
                Technical Case Study & Project Results
              </h2>
              
              <div className="space-y-12 text-charcoal/70 font-body leading-relaxed max-w-2xl">
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-6">Infrastructure Challenge</h3>
                  <p>{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-6">Engineering Solution</h3>
                  <p>{project.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-6">Technical Results</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start text-sm font-body text-charcoal/60">
                        <CheckCircle2 size={18} className="mr-3 text-ocean shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.gallery && (
                <div className="mt-20 pt-20 border-t border-ocean/10">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-10">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-video overflow-hidden group border border-ocean/5 shadow-default">
                        <Image
                          src={img}
                          alt={`${project.title} gallery image ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                <div className="p-10 bg-ice-blue/30 border border-ocean/5 shadow-default">
                  <h4 className="text-xl font-heading font-bold text-primary mb-8">Technical Specification</h4>
                  <ul className="space-y-8">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-ocean/10 flex items-center justify-center rounded-sm mr-4 shrink-0">
                        <MapPin size={18} className="text-ocean" />
                      </div>
                      <div>
                        <p className="text-[10px] font-accent text-ocean uppercase tracking-wider mb-1 font-bold">Project Location</p>
                        <p className="text-sm font-body text-primary">{project.location}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-ocean/10 flex items-center justify-center rounded-sm mr-4 shrink-0">
                        <Calendar size={18} className="text-ocean" />
                      </div>
                      <div>
                        <p className="text-[10px] font-accent text-ocean uppercase tracking-wider mb-1 font-bold">Completion Date</p>
                        <p className="text-sm font-body text-primary">{project.completionDate}</p>
                      </div>
                    </li>
                    {project.stats?.map((stat) => (
                      <li key={stat.label} className="flex items-start">
                        <div className="w-10 h-10 bg-ocean/10 flex items-center justify-center rounded-sm mr-4 shrink-0">
                          <span className="font-mono text-xs font-bold text-ocean">VE</span>
                        </div>
                        <div>
                          <p className="text-[10px] font-accent text-ocean uppercase tracking-wider mb-1 font-bold">{stat.label}</p>
                          <p className="text-lg font-mono text-primary font-bold">{stat.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 bg-primary text-white border-l-4 border-ocean">
                  <h5 className="font-heading font-bold text-lg mb-4">Interested in a similar solution?</h5>
                  <p className="text-sm text-white/70 font-body mb-8 leading-relaxed">
                    Contact our certified engineering team today for a technical consultation or project plan.
                  </p>
                  <Button href="/contact/get-a-quote" className="w-full flex items-center justify-center space-x-3 py-4">
                    <span>Get Technical Quote</span>
                    <ArrowUpRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
