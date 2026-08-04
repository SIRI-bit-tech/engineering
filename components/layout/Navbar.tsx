"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NAV_LINKS } from "@/constants/constants";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export const Navbar = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
        if (isMobileMenuOpen) return;
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  }, { scope: headerRef });

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-1000 transition-all duration-500 ${
          isMobileMenuOpen
            ? "bg-[#00253B] border-b border-white/10"
            : "bg-white/80 backdrop-blur-xl border-b border-primary/5 shadow-sm"
        }`}
      >
        <nav className="container-wide h-20 flex items-center justify-between relative z-1001">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="VoltaEdge Logo" 
                width={48} 
                height={48} 
                className="object-contain" 
                style={{ width: '100%', height: 'auto' }} 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-wider leading-none transition-colors duration-500 ${isMobileMenuOpen ? "text-white" : "text-primary"}`}>
                VoltaEdge
              </span>
              <span className="font-accent text-[9px] font-bold uppercase tracking-[0.3em] mt-0.5 text-ocean">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Clean Navigation */}
          <ul className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-1 font-accent font-bold text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? "text-ocean"
                        : isMobileMenuOpen
                        ? "text-white/80 hover:text-white"
                        : "text-charcoal/70 hover:text-ocean"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <ChevronDown
                        size={12}
                        className={`group-hover:rotate-180 transition-transform duration-300 ${
                          isMobileMenuOpen ? "text-white/60" : "text-ocean"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.children && (
                    <ul className="absolute top-full left-0 mt-3 w-60 bg-white/95 backdrop-blur-2xl shadow-xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-primary/5">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-3 text-[11px] font-accent font-bold uppercase tracking-wider text-charcoal/70 hover:text-ocean hover:bg-ice-blue/30 rounded-xl transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Active Line Indicator */}
                  <span
                    className={`absolute -bottom-7 left-0 h-[2px] bg-ocean transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Session Account Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {status === "loading" ? (
              <div className="w-5 h-5 border-2 border-ocean border-t-transparent rounded-full animate-spin" />
            ) : session?.user ? (
              <div className="flex items-center space-x-5">
                <Link
                  href={session.user.role === "admin" ? "/admin/dashboard" : "/profile"}
                  className="flex items-center space-x-2 font-accent font-bold text-[11px] uppercase tracking-wider text-ocean hover:text-primary transition-colors duration-300 bg-ocean/10 border border-ocean/20 px-4 py-2 rounded-xl"
                >
                  <User size={14} />
                  <span>{session.user.role === "admin" ? "Admin Portal" : session.user.name || "My Profile"}</span>
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="font-accent font-bold text-[11px] uppercase tracking-wider text-charcoal/60 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="font-accent font-bold text-[11px] uppercase tracking-wider text-primary hover:text-ocean border border-primary/20 hover:border-ocean/40 px-5 py-2.5 rounded-xl transition-all duration-300"
              >
                Executive Profile
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 border ${
              isMobileMenuOpen
                ? "text-white bg-white/20 border-white/20"
                : "text-primary hover:bg-ocean/10 border-transparent"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-[#00253B] z-999 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="relative z-1000 flex flex-col p-8 pt-28 space-y-6 h-full overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-white/5 pb-5">
              <Link
                href={link.href}
                className={`text-2xl font-display font-bold transition-colors duration-300 ${
                  pathname === link.href ? "text-ocean" : "text-white hover:text-ocean"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className="mt-4 ml-4 space-y-3 border-l-2 border-ocean/20 pl-4">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-white/60 text-base font-body hover:text-white transition-colors duration-300"
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
          <li className="pt-6 mt-auto pb-20 space-y-4">
            {session?.user ? (
              <div className="flex flex-col space-y-3">
                <Link
                  href={session.user.role === "admin" ? "/admin/dashboard" : "/profile"}
                  className="text-center font-accent font-bold text-xs uppercase tracking-wider text-ocean border border-ocean/30 py-3.5 rounded-xl hover:bg-ocean/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {session.user.role === "admin" ? "ADMIN PORTAL" : "MY PROFILE"}
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="text-center font-accent font-bold text-xs uppercase tracking-wider text-white/60 hover:text-red-400 py-3.5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer"
                >
                  SIGN OUT
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="block text-center font-accent font-bold text-xs uppercase tracking-wider text-white border border-white/20 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                EXECUTIVE PROFILE
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
