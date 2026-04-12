import React from "react";
import Link from "next/link";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_PHONE,
  SITE_ADDRESS,
  FOOTER_LINKS,
  SOCIAL_LINKS
} from "@/constants/constants";
import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "linkedin": return <LinkedinIcon size={20} />;
      case "twitter": return <TwitterIcon size={20} />;
      case "instagram": return <InstagramIcon size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ocean/5 -skew-x-12 translate-x-1/2 z-0" />

      <div className="container-wide relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-20 lg:mb-24">

          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-10 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center overflow-hidden rounded-xl bg-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <span className="text-primary font-display font-bold text-xl sm:text-2xl z-10">V</span>
                <div className="absolute inset-0 bg-linear-to-tr from-ocean/20 to-transparent opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight leading-none">
                  VoltaEdge
                </span>
                <span className="text-ocean font-accent text-[10px] font-bold uppercase tracking-[0.3em] mt-1">
                  Engineering
                </span>
              </div>
            </Link>
            <p className="text-white/50 font-body text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-sm italic">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-ocean transition-all duration-500 hover:-translate-y-2"
                  aria-label={social.label}
                >
                  {getIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-8">
            {/* Column 1: Company */}
            <div>
              <h4 className="font-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-6 sm:mb-10 text-ocean">Company</h4>
              <ul className="space-y-4 sm:space-y-6">
                {FOOTER_LINKS.COMPANY.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/40 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="text-xs font-accent font-bold uppercase tracking-widest">{link.label}</span>
                      <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-ocean" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-6 sm:mb-10 text-ocean">Services</h4>
              <ul className="space-y-4 sm:space-y-6">
                {FOOTER_LINKS.SERVICES.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/40 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="text-xs font-accent font-bold uppercase tracking-widest">{link.label}</span>
                      <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-ocean" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h4 className="font-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-6 sm:mb-10 text-ocean">Support</h4>
              <ul className="space-y-4 sm:space-y-6">
                {FOOTER_LINKS.SUPPORT.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/40 hover:text-white transition-all duration-300 flex items-center group">
                      <span className="text-xs font-accent font-bold uppercase tracking-widest">{link.label}</span>
                      <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-ocean" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact / Technical Support */}
          <div className="lg:col-span-3">
            <h4 className="font-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-6 sm:mb-10 text-ocean">Technical Support</h4>

            <div className="space-y-6 sm:space-y-10">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-ocean transition-all duration-500">
                    <span className="text-ocean group-hover:text-white font-mono text-[10px] sm:text-xs font-bold">PH</span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] font-accent font-bold text-ocean uppercase tracking-[0.2em]">Primary Contact</p>
                </div>
                <p className="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-ocean transition-colors duration-500">{SITE_PHONE}</p>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-ocean transition-all duration-500">
                    <span className="text-ocean group-hover:text-white font-mono text-[10px] sm:text-xs font-bold">AD</span>
                  </div>
                  <p className="text-[8px] sm:text-[10px] font-accent font-bold text-ocean uppercase tracking-[0.2em]">LOCATIONS</p>
                </div>
                <p className="text-sm sm:text-base font-body text-white/60 leading-relaxed group-hover:text-white transition-colors duration-500">{SITE_ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 sm:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-white/30 font-mono text-[8px] sm:text-[10px] tracking-[0.3em] uppercase">
            © {currentYear} {SITE_NAME}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 text-white/30 font-mono text-[8px] sm:text-[10px] tracking-[0.3em] uppercase">
            <span>REGISTRATION: VE-ENG-GLOBAL-2026</span>
            <span>ISO 9001:2015 CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
