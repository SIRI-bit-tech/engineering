import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteForm } from "@/components/sections/contact/QuoteForm";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Request a Technical Quote | ${SITE_NAME}`,
  description: "Request a detailed engineering quote for your electrical, solar, or industrial automation project from VoltaEdge Engineering.",
  keywords: ["engineering quote Nigeria", "solar farm cost estimate", "industrial automation pricing", "electrical design quotation"],
};

export default function QuotePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Quotation"
        title="Request an Engineering Quote"
        description="Provide us with your project specifications, and our certified engineering team will deliver a comprehensive technical proposal and cost estimate."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-ice-blue/30 p-10 md:p-20 border border-ocean/5 shadow-default">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
                  Detailed Project Specification
                </h3>
                <p className="text-lg text-charcoal/70 font-body leading-relaxed">
                  Please fill out the form below with your project details. For large-scale industrial or renewable energy deployments, you can attach technical drawings (.dwg, .pdf) or equipment lists (.xlsx).
                </p>
              </div>
              
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
