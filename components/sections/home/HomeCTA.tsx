"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";
import { SITE_EMAIL, SITE_PHONE } from "@/constants/constants";

export const HomeCTA = () => {
  return (
    <section className="py-24 bg-[#001D2F] text-white relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ocean/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl space-y-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-ocean/20 border border-ocean/30 text-ocean px-4 py-1.5 rounded-full text-xs font-accent font-bold uppercase tracking-wider mx-auto">
            <ShieldCheck size={14} />
            <span>Investment-Grade Engineering Blueprints</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-balance text-white">
            Ready to Engineer Your Power & Energy Infrastructure?
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-body max-w-2xl mx-auto leading-relaxed text-pretty">
            Connect directly with our PE-certified technical council to schedule a comprehensive facility load flow audit or discuss utility-scale renewable integration.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-ocean hover:bg-ocean/90 text-white font-accent font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/contact" className="inline-flex items-center justify-center">
                <span>Schedule Engineering Consultation</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-accent font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <Link href="/services">Review All Disciplines</Link>
            </Button>
          </div>

          {/* Direct Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs font-mono text-white/60">
            <a href={`mailto:${SITE_EMAIL}`} className="flex items-center hover:text-ocean transition-colors">
              <Mail size={14} className="mr-2 text-ocean" />
              <span>{SITE_EMAIL}</span>
            </a>
            <a href={`tel:${SITE_PHONE}`} className="flex items-center hover:text-ocean transition-colors">
              <Phone size={14} className="mr-2 text-ocean" />
              <span>{SITE_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
