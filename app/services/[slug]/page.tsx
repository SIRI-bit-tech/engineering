import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SERVICES, SITE_NAME } from "@/constants/constants";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
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
              <h2 className="text-3xl font-heading font-bold text-primary mb-10 leading-tight">
                Technical Overview & Engineering Approach
              </h2>
              <div className="space-y-8 text-charcoal/70 font-body leading-relaxed max-w-2xl">
                <p>{service.description}</p>
                <p>
                  Our engineering approach for {service.title} focuses on precision, scalability, and safety. Every system we design is built to meet global standards while addressing Africa's local energy infrastructure requirements.
                </p>
                
                <h3 className="text-2xl font-heading font-bold text-primary pt-8 pb-6">Core Technical Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm font-body text-charcoal/60">
                      <CheckCircle2 size={18} className="mr-3 text-ocean shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-heading font-bold text-primary pt-8 pb-6">Operational Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm font-body text-charcoal/60">
                      <CheckCircle2 size={18} className="mr-3 text-ocean shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 p-10 bg-ice-blue/30 border border-ocean/5 shadow-default">
                <h4 className="text-xl font-heading font-bold text-primary mb-6">Request Technical Specs</h4>
                <p className="text-sm text-charcoal/70 font-body mb-10 leading-relaxed">
                  Provide us with your project details and our engineers will deliver a comprehensive technical proposal and cost estimate.
                </p>
                <Button href="/contact/get-a-quote" className="w-full py-4">
                  Request Quote
                </Button>
                
                <div className="mt-12 pt-12 border-t border-ocean/10">
                  <h5 className="text-xs font-accent font-bold uppercase tracking-widest text-ocean mb-6">Related Solutions</h5>
                  <ul className="space-y-4">
                    {SERVICES.filter(s => s.slug !== slug).slice(0, 3).map(s => (
                      <li key={s.id}>
                        <a href={`/services/${s.slug}`} className="group flex items-center justify-between text-sm font-body text-charcoal/60 hover:text-ocean transition-colors duration-300">
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
