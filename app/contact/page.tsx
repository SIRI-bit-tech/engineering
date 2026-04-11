import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: "Get in touch with VoltaEdge Engineering for technical consultations, engineering audits, or renewable energy project planning.",
  keywords: ["contact VoltaEdge", "engineering consultation Nigeria", "technical support electrical systems", "energy audit request"],
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Connect with Us"
        title="Engineering Support & Consultations"
        description="Whether you have a technical query or need a comprehensive energy deployment plan, our certified engineers are ready to support your infrastructure needs."
        image="https://images.unsplash.com/photo-1516387012670-29a26390172d?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="bg-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-ice-blue/30 p-10 md:p-16 border border-ocean/5 shadow-default">
                <h3 className="text-3xl font-heading font-bold text-primary mb-10 leading-tight">
                  Request Engineering Consultation
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
