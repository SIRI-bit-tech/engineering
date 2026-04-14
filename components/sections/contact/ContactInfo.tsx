"use client";

import React from "react";
import { SOCIAL_LINKS } from "@/constants/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import Link from "next/link";

export const ContactInfo = () => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "linkedin": return <LinkedinIcon size={20} />;
      case "twitter": return <TwitterIcon size={20} />;
      case "instagram": return <InstagramIcon size={20} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Locations */}
        <div className="bg-white p-8 border border-platinum shadow-sm group hover:border-navy transition-colors duration-500">
          <MapPin size={20} className="text-navy mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Locations</h4>
          <p className="text-sm font-body text-navy leading-relaxed">
            United States<br />
            Canada<br />
            Mexico<br />
            Europe<br />
            Asia<br />
            Australia
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-8 border border-platinum shadow-sm group hover:border-navy transition-colors duration-500">
          <Phone size={20} className="text-navy mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Phone</h4>
          <p className="text-sm font-body text-navy leading-relaxed">
            +1 (800)-VOLTAEDGE
          </p>
        </div>

        {/* Email */}
        <div className="bg-white p-8 border border-platinum shadow-sm group hover:border-navy transition-colors duration-500">
          <Mail size={20} className="text-navy mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email</h4>
          <p className="text-sm font-body text-navy leading-relaxed wrap-break-word">
            engineering@voltaeedge.com<br />
            support@voltaeedge.com
          </p>
        </div>

        {/* Hours */}
        <div className="bg-white p-8 border border-platinum shadow-sm group hover:border-navy transition-colors duration-500">
          <Clock size={20} className="text-navy mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Hours</h4>
          <p className="text-sm font-body text-navy leading-relaxed">
            Mon - Fri: 08:00 - 18:00<br />
            Sat: By Appointment Only
          </p>
        </div>
      </div>

      {/* Dark Themed Map Placeholder */}
      <div className="w-full h-80 bg-navy relative overflow-hidden flex items-center justify-center grayscale opacity-90 group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-2000" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <MapPin size={24} className="text-white" />
          </div>
          <span className="text-[10px] font-label font-bold text-white uppercase tracking-[0.4em]">View Technical District Map</span>
        </div>
        {/* Abstract Grid Overlay */}
        <div className="absolute inset-0 border-20 border-white/5 pointer-events-none" />
      </div>

      {SOCIAL_LINKS.length > 0 && (
        <div className="p-8 bg-slate-50 border-l-4 border-navy">
          <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-navy mb-4">Engineering Insights</h4>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-platinum flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300 shadow-sm"
                aria-label={social.label}
              >
                {getIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
