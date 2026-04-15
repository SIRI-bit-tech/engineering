import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: "Get in touch with VoltaEdge Engineering for technical consultations, engineering audits, or renewable energy project planning across the United States.",
  keywords: ["contact VoltaEdge", "engineering consultation", "technical support electrical systems", "energy audit request", "certified engineers USA", "PE certified"],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="CONNECT WITH OUR CONSULTANTS"
        title="Contact Our Engineering Team"
        description="Whether you have a complex technical query or require a structural deployment plan, our elite engineering team is ready to provide precise technical architectural solutions."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="bg-white py-16 sm:py-20 md:py-24 lg:py-40 relative">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start">
            {/* Contact Info (40%) */}
            <div className="lg:w-[40%]">
              <ContactInfo />
            </div>

            {/* Contact Form (60%) */}
            <div className="lg:w-[60%]">
              <div className="bg-white p-8 sm:p-12 md:p-16 shadow-[0_32px_96px_-12px_rgba(0,37,59,0.1)] border border-platinum/50 rounded-none relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-navy" />
                <div className="mb-8 sm:mb-12">
                  <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl text-navy mb-4">
                    Project Inquiry
                  </h3>
                  <p className="text-sm font-body text-slate-500 max-w-md">
                    Complete the form below to connect with a lead structural engineer regarding your infrastructure project.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Additional Protocol Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mt-20 sm:mt-24 md:mt-32 lg:mt-48 pt-16 sm:pt-20 md:pt-24 border-t border-platinum">
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-7xl font-sans font-black text-slate-100/50 group-hover:text-navy/5 transition-colors duration-500">01</span>
              <h4 className="font-headline text-xl text-navy mb-4 relative z-10">Response Protocol</h4>
              <p className="text-sm font-body text-slate-500 leading-relaxed">
                Our team typically initiates structural reviews within 24 business hours. Each inquiry is assigned a unique technical ticket.
              </p>
            </div>
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-7xl font-sans font-black text-slate-100/50 group-hover:text-navy/5 transition-colors duration-500">02</span>
              <h4 className="font-headline text-xl text-navy mb-4 relative z-10">Initial Consultation</h4>
              <p className="text-sm font-body text-slate-500 leading-relaxed">
                Standard project audits include a complimentary 30-minute scope review with a PE-certified structural engineer.
              </p>
            </div>
            <div className="relative group">
              <span className="absolute -top-12 left-0 text-7xl font-sans font-black text-slate-100/50 group-hover:text-navy/5 transition-colors duration-500">03</span>
              <h4 className="font-headline text-xl text-navy mb-4 relative z-10">Site Security</h4>
              <p className="text-sm font-body text-slate-500 leading-relaxed">
                Physical visits require Level-1 safety certification verification 48 hours prior. Access protocols vary by infrastructure type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
