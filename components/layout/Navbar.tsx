"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS } from "@/constants/constants";
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
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-primary/5 transition-all duration-500"
    >
      <nav className="container-wide h-24 flex items-center justify-between">
        {/* Logo (Industrial Architect Style) */}
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl bg-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <span className="text-white font-display font-bold text-2xl z-10">V</span>
            <div className="absolute inset-0 bg-linear-to-tr from-ocean to-transparent opacity-50" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-display font-bold text-xl md:text-2xl tracking-tight leading-none">
              VoltaEdge
            </span>
            <span className="text-ocean font-accent text-[10px] font-bold uppercase tracking-[0.3em] mt-1">
              Engineering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center space-x-1 font-accent font-bold text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${pathname === link.href ? "text-ocean" : "text-charcoal/60 hover:text-primary"
                  }`}
              >
                <span>{link.label}</span>
                {link.children && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-500 text-ocean" />}
              </Link>

              {/* Dropdown (Tonal Layering) */}
              {link.children && (
                <ul className="absolute top-full left-0 mt-4 w-64 bg-white/95 backdrop-blur-2xl shadow-hover rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 border border-primary/5">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-6 py-4 text-xs font-accent font-bold uppercase tracking-widest text-charcoal/60 hover:text-primary hover:bg-ice-blue/30 rounded-xl transition-all duration-300"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Hover Indicator (3px Ocean line) */}
              <span className={`absolute -bottom-8 left-0 h-[3px] bg-ocean transition-all duration-500 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-ocean text-white font-accent font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-xl shadow-button transition-all duration-500 hover:-translate-y-1"
          >
            <Link href="/contact/get-a-quote">Request Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2 hover:bg-ocean/10 rounded-xl transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-primary z-40 lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
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
            <Button asChild className="w-full text-center py-4">
              <Link href="/contact/get-a-quote" onClick={() => setIsMobileMenuOpen(false)}>
                Request Engineering Quote
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
