import React from "react";
import Link from "next/link";
import { 
  SITE_NAME, 
  SITE_DESCRIPTION, 
  SITE_EMAIL, 
  SITE_PHONE, 
  SITE_ADDRESS, 
  FOOTER_LINKS, 
  SOCIAL_LINKS 
} from "@/constants/constants";
import { Send, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";

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
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-ocean/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-ocean flex items-center justify-center rounded-sm">
                <span className="text-white font-heading font-bold text-xl">V</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                {SITE_NAME.split(" ")[0]}
                <span className="text-ocean">{SITE_NAME.split(" ")[1]}</span>
              </span>
            </Link>
            <p className="text-white/60 font-body text-base leading-relaxed mb-8 max-w-sm">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-ocean/30 rounded-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-ocean hover:border-ocean transition-all duration-300"
                  aria-label={social.label}
                >
                  {getIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Company */}
            <div>
              <h4 className="font-accent font-semibold text-sm tracking-widest uppercase mb-6 text-ocean">Company</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.COMPANY.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="text-sm font-body">{link.label}</span>
                      <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-accent font-semibold text-sm tracking-widest uppercase mb-6 text-ocean">Services</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.SERVICES.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="text-sm font-body">{link.label}</span>
                      <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h4 className="font-accent font-semibold text-sm tracking-widest uppercase mb-6 text-ocean">Support</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.SUPPORT.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="text-sm font-body">{link.label}</span>
                      <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-accent font-semibold text-sm tracking-widest uppercase mb-6 text-ocean">Newsletter</h4>
            <p className="text-white/60 font-body text-sm mb-6">
              Subscribe to our engineering insights and project updates.
            </p>
            <form className="relative mb-8">
              <input 
                type="email" 
                placeholder="Engineering email" 
                className="w-full bg-charcoal/50 border border-ocean/30 py-3 px-4 text-white font-body text-sm focus:outline-none focus:border-ocean transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 w-8 h-8 bg-ocean text-white flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-sm bg-ocean/10 flex items-center justify-center group-hover:bg-ocean transition-colors duration-300">
                  <span className="text-ocean group-hover:text-white transition-colors duration-300 font-mono text-xs">Ph</span>
                </div>
                <div>
                  <p className="text-xs font-accent text-ocean uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-sm font-mono text-white/80">{SITE_PHONE}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-sm bg-ocean/10 flex items-center justify-center group-hover:bg-ocean transition-colors duration-300">
                  <span className="text-ocean group-hover:text-white transition-colors duration-300 font-mono text-xs">Ad</span>
                </div>
                <div>
                  <p className="text-xs font-accent text-ocean uppercase tracking-wider mb-1">Office</p>
                  <p className="text-sm font-body text-white/80 leading-snug">{SITE_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-ocean/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-white/40 font-mono text-xs tracking-widest uppercase">
            © {currentYear} {SITE_NAME}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-8 text-white/40 font-mono text-xs tracking-widest uppercase">
            <span>REGISTRATION: VE-ENG-NG-2024</span>
            <span>ISO 9001 CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
