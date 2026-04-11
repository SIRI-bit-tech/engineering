"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS, SITE_NAME } from "@/constants/constants";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar hide/show on scroll
    const showAnim = gsap.from(headerRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out",
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-ocean/20 transition-all duration-300"
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-ocean flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-heading font-bold text-xl">V</span>
          </div>
          <span className="text-white font-heading font-bold text-lg md:text-xl tracking-tight">
            {SITE_NAME.split(" ")[0]}
            <span className="text-ocean">{SITE_NAME.split(" ")[1]}</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center space-x-1 font-body font-medium text-sm tracking-wide transition-colors duration-300 ${
                  pathname === link.href ? "text-ocean" : "text-white/80 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {link.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {/* Dropdown */}
              {link.children && (
                <ul className="absolute top-full left-0 mt-2 w-56 bg-primary border border-ocean/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-6 py-3 text-sm font-body text-white/80 hover:text-white hover:bg-ocean/10 transition-colors duration-300"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Hover Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ocean transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button href="/contact/get-a-quote" variant="secondary" size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:bg-ocean/10 rounded-md transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-primary z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col p-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-ocean/10 pb-4">
              <Link
                href={link.href}
                className="text-xl font-heading font-semibold text-white hover:text-ocean transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className="mt-4 ml-4 space-y-4">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-white/60 hover:text-white transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="pt-4">
            <Button href="/contact/get-a-quote" className="w-full text-center py-4" onClick={() => setIsMobileMenuOpen(false)}>
              Request Engineering Quote
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
