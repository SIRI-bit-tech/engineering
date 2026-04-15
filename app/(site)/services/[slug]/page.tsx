import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICES, SITE_NAME } from "@/constants/constants";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Readonly<ServicePageProps>) {
  const { params } = props;
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage(props: Readonly<ServicePageProps>) {
  const { params } = props;
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Engineering Solution"
        title={service.title}
        description={service.description}
        image={service.imageUrl}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3">
              <div className="mb-12">
                <span className="font-label text-secondary text-xs font-bold tracking-[0.3em] uppercase block mb-4">Technical Overview</span>
                <h2 className="font-headline text-4xl text-primary tracking-tight leading-tight">
                  {service.title}<br /><span className="italic text-secondary">Engineering Approach</span>
                </h2>
              </div>
              <div className="space-y-8 text-charcoal/70 font-body leading-relaxed max-w-2xl">
                {service.longDescription ? (
                  <p className="text-lg font-body border-l-4 border-secondary pl-8 py-2 text-primary/80">
                    {service.longDescription}
                  </p>
                ) : (
                  <p className="text-xl italic font-display border-l-4 border-secondary pl-8 py-2">
                    &quot;{service.description}&quot;
                  </p>
                )}
                <p>
                  Our engineering approach for {service.title} focuses on precision, scalability, and safety. Every system we design is built to meet global standards while addressing Africa&apos;s local energy infrastructure requirements.
                </p>

                <h3 className="font-label text-xl font-bold text-primary pt-8 pb-6 uppercase tracking-tighter">Core Technical Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm font-body text-charcoal/60 group">
                      <div className="w-1.5 h-1.5 bg-secondary/30 mr-4 rounded-full mt-1.5 group-hover:bg-secondary transition-colors duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.technicalAnalysis && (
                  <>
                    <h3 className="font-label text-xl font-bold text-primary pt-8 pb-6 uppercase tracking-tighter">Technical Diagnostic Protocol</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {service.technicalAnalysis.map((item) => (
                        <li key={item} className="flex items-start text-sm font-body text-charcoal/60 group">
                          <div className="w-1.5 h-1.5 bg-ocean/30 mr-4 rounded-full mt-1.5 group-hover:bg-ocean transition-colors duration-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <h3 className="font-label text-xl font-bold text-primary pt-8 pb-6 uppercase tracking-tighter">Operational Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm font-body text-charcoal/60 group">
                      <div className="w-1.5 h-1.5 bg-primary/30 mr-4 rounded-full mt-1.5 group-hover:bg-primary transition-colors duration-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 p-12 bg-surface-container-low border-l-4 border-secondary shadow-default rounded-none">
                <h4 className="font-label text-xl font-bold text-primary mb-6 uppercase tracking-tighter">Request Technical Specs</h4>
                <p className="text-sm text-charcoal/70 font-body mb-10 leading-relaxed italic">
                  Provide us with your project details and our engineers will deliver a comprehensive technical proposal and cost estimate.
                </p>
                <Button asChild className="w-full py-4 rounded-none bg-secondary hover:bg-primary tracking-widest font-label text-xs uppercase">
                  <Link href="/contact/get-a-quote">Request Quote</Link>
                </Button>

                <div className="mt-12 pt-12 border-t border-white/20">
                  <h5 className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary mb-6">Related Solutions</h5>
                  <ul className="space-y-6">
                    {SERVICES.filter(s => s.slug !== slug).slice(0, 3).map(s => (
                      <li key={s.id}>
                        <a href={`/services/${s.slug}`} className="group flex items-center justify-between text-xs font-label font-bold uppercase tracking-widest text-primary/60 hover:text-secondary transition-colors duration-300">
                          <span>{s.title}</span>
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
