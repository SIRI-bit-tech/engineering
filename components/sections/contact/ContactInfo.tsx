"use client";

import React from "react";
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS, SOCIAL_LINKS } from "@/constants/constants";
import { Mail, Phone, MapPin } from "lucide-react";
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
      <div>
        <h4 className="text-xs font-accent font-semibold uppercase tracking-widest text-ocean mb-6">Contact Details</h4>
        <ul className="space-y-8">
          <li className="flex items-start group cursor-pointer">
            <div className="w-12 h-12 bg-ocean/10 flex items-center justify-center rounded-sm mr-6 group-hover:bg-ocean transition-colors duration-300 shrink-0">
              <Mail size={20} className="text-ocean group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs font-accent text-ocean uppercase tracking-wider mb-1 font-bold">Email Us</p>
              <p className="text-lg font-mono text-primary group-hover:text-ocean transition-colors duration-300">{SITE_EMAIL}</p>
            </div>
          </li>
          <li className="flex items-start group cursor-pointer">
            <div className="w-12 h-12 bg-ocean/10 flex items-center justify-center rounded-sm mr-6 group-hover:bg-ocean transition-colors duration-300 shrink-0">
              <Phone size={20} className="text-ocean group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs font-accent text-ocean uppercase tracking-wider mb-1 font-bold">Call Support</p>
              <p className="text-lg font-mono text-primary group-hover:text-ocean transition-colors duration-300">{SITE_PHONE}</p>
            </div>
          </li>
          <li className="flex items-start group cursor-pointer">
            <div className="w-12 h-12 bg-ocean/10 flex items-center justify-center rounded-sm mr-6 group-hover:bg-ocean transition-colors duration-300 shrink-0">
              <MapPin size={20} className="text-ocean group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-xs font-accent text-ocean uppercase tracking-wider mb-1 font-bold">Office Address</p>
              <p className="text-lg font-body text-primary leading-snug group-hover:text-ocean transition-colors duration-300">{SITE_ADDRESS}</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-accent font-semibold uppercase tracking-widest text-ocean mb-6">Follow Our Engineering Insights</h4>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-ocean/20 rounded-sm flex items-center justify-center text-ocean/60 hover:text-white hover:bg-ocean hover:border-ocean transition-all duration-300"
              aria-label={social.label}
            >
              {getIcon(social.icon)}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-8 bg-primary text-white border-l-4 border-ocean">
        <h5 className="font-heading font-bold text-lg mb-4 leading-tight">Emergency Support?</h5>
        <p className="text-sm text-white/70 font-body mb-6 leading-relaxed">
          For critical electrical infrastructure failures or renewable energy system emergencies, contact our 24/7 technical team.
        </p>
        <p className="font-mono text-ocean font-bold text-lg">{SITE_PHONE}</p>
      </div>
    </div>
  );
};
