import { PageHero } from "@/components/layout/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Request a Technical Quote | ${SITE_NAME}`,
  description: "Request a detailed engineering quote for your electrical, renewable, or industrial automation project from VoltaEdge Engineering.",
  keywords: ["engineering quote", "renewable energy cost estimate", "industrial automation pricing", "electrical design quotation", "certified engineers USA", "PE certified"],
};

export default function QuotePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Quotation"
        title="Request an Engineering Quote"
        description="Provide us with your project specifications, and our elite engineering team will architect a comprehensive technical proposal and cost estimate for your deployment."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYf6pC3p86pP198B7R9E2B-u4G1D237J281v9R8E3B6C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9"
      />

      <div className="bg-white py-24 md:py-40 overflow-hidden relative">
        {/* Background Architectural Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-ice-blue/10 -skew-x-12 translate-x-1/2 z-0" />

        <div className="container-wide px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-12 md:p-24 rounded-none shadow-[0_32px_64px_rgba(0,37,59,0.1)] border border-primary/10 border-l-8">
              <div className="mb-20">
                <div className="relative inline-block mb-8">
                  <h3 className="font-headline text-3xl md:text-5xl text-primary leading-tight">
                    Detailed Project <br /> <span className="italic text-secondary">Specification Protocol</span>
                  </h3>
                  <div className="absolute -top-4 left-0 w-12 h-[3px] bg-secondary rounded-none" />
                </div>
                <p className="text-xl text-charcoal/60 font-body leading-relaxed italic max-w-3xl">
                  &quot;Please provide your project parameters below. For large-scale industrial or renewable energy deployments, we recommend attaching technical schematics (.dwg, .pdf) or equipment lists (.xlsx) for a more precise engineering audit.&quot;
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
