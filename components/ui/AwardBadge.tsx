"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Zap, Sparkles, Trophy, Globe, Flame } from "lucide-react";

interface AwardBadgeProps {
  code?: string;
  badgeType?: string;
  imageUrl?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const AwardBadge: React.FC<AwardBadgeProps> = ({
  code = "",
  badgeType = "",
  imageUrl,
  title = "",
  size = "md",
  className = "",
}) => {
  const typeKey = (code || badgeType || "").toUpperCase();

  // If custom uploaded/provided image URL exists
  if (imageUrl && (imageUrl.startsWith("http") || imageUrl.startsWith("/"))) {
    const dimensions = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-16 h-16" : "w-12 h-12";
    return (
      <div className={`relative ${dimensions} rounded-xl overflow-hidden shadow-md flex-shrink-0 bg-white/10 ${className}`}>
        <Image src={imageUrl} alt={title || "Award Badge"} fill className="object-cover" />
      </div>
    );
  }

  // IEEE Senior Member & Fellow Badge (Official IEEE Navy & Diamond Vector)
  if (typeKey.includes("IEEE") || typeKey.includes("TROPHY")) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#006699] to-[#003366] text-white border border-[#0099CC]/40 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <svg viewBox="0 0 24 24" className="w-3/5 h-3/5 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* IEEE Diamond Badge Logo */}
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l7 7-7 7-7-7 7-7z" fill="currentColor" opacity="0.4" />
          <path d="M12 5L4.5 12.5 12 20l7.5-7.5L12 5zm-1 3.5h2v3h3v2h-3v5h-2v-5H8v-2h3v-3z" fill="currentColor" />
        </svg>
        <span className="absolute bottom-0.5 text-[7px] font-mono font-bold tracking-tighter uppercase text-cyan-200">IEEE</span>
      </div>
    );
  }

  // NCEES Registered Professional Engineer (PE Seal - Gold Metallic Embossed)
  if (typeKey.includes("PE") || typeKey.includes("MEDAL")) {
    return (
      <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#78350F] text-amber-100 border-2 border-amber-300/60 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <div className="absolute inset-1 rounded-full border border-dashed border-amber-200/40" />
        <svg viewBox="0 0 24 24" className="w-3/5 h-3/5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
          <polygon points="12 3 15 9 9 9" fill="currentColor" />
        </svg>
        <span className="absolute bottom-1 text-[8px] font-black tracking-widest text-amber-100">PE</span>
      </div>
    );
  }

  // Energy Globe Sustainability Award (Emerald & Gold Earth Sphere)
  if (typeKey.includes("ENERGY_GLOBE") || typeKey.includes("SPARKLES")) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#059669] via-[#047857] to-[#064E3B] text-emerald-100 border border-emerald-300/40 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <Globe className="w-3/5 h-3/5 text-emerald-200" />
        <Sparkles className="w-3.5 h-3.5 absolute top-1 right-1 text-amber-300 animate-pulse" />
      </div>
    );
  }

  // S&P Global Energy Excellence Award (Platinum & Sapphire Flame)
  if (typeKey.includes("SP_GLOBAL") || typeKey.includes("SP_")) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#1D4ED8] to-[#1E3A8A] text-blue-100 border border-cyan-300/40 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <Flame className="w-3/5 h-3/5 text-amber-300 fill-amber-400" />
      </div>
    );
  }

  // NFPA 70E Certified Electrical Safety Worker (Red & Gold Shield)
  if (typeKey.includes("NFPA") || typeKey.includes("SHIELD")) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#7F1D1D] text-red-100 border border-red-300/40 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <ShieldCheck className="w-3/5 h-3/5 text-amber-300" />
        <span className="absolute bottom-0.5 text-[6.5px] font-black tracking-widest text-white uppercase">NFPA 70E</span>
      </div>
    );
  }

  // ASME Power Engineering Westinghouse Medal (Bronze Power Gear & Turbine)
  if (typeKey.includes("ASME") || typeKey.includes("ZAP")) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#EA580C] via-[#C2410C] to-[#7C2D12] text-orange-100 border border-amber-400/40 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <Zap className="w-3/5 h-3/5 text-amber-300 fill-amber-300" />
        <span className="absolute bottom-0.5 text-[6.5px] font-black tracking-widest text-amber-100 uppercase">ASME</span>
      </div>
    );
  }

  // PMI PMP® Project Management Professional (Teal & Navy Crest)
  if (typeKey.includes("PMP") || typeKey.includes("CROWN")) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0C4A6E] text-cyan-100 border border-cyan-300/40 shadow-lg ${getSizeClasses(size)} ${className}`}>
        <Trophy className="w-3/5 h-3/5 text-amber-300" />
        <span className="absolute bottom-0.5 text-[7px] font-black tracking-widest text-cyan-100 uppercase">PMP</span>
      </div>
    );
  }

  // Default Fallback Award Emblem
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0F172A] to-[#334155] text-amber-400 border border-amber-400/30 shadow-lg ${getSizeClasses(size)} ${className}`}>
      <Award className="w-3/5 h-3/5 text-amber-400" />
    </div>
  );
};

function getSizeClasses(size: "sm" | "md" | "lg") {
  switch (size) {
    case "sm":
      return "w-8 h-8 text-xs";
    case "lg":
      return "w-16 h-16 text-xl";
    case "md":
    default:
      return "w-12 h-12 text-base";
  }
}
