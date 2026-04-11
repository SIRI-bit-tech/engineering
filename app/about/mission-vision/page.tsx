import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Mission & Vision | ${SITE_NAME}`,
  description: "Explore our core mission and vision to deliver precision-led engineering and sustainable energy across the continent.",
};

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Core Values"
        title="Mission & Vision"
        description="Our commitment to delivering world-class engineering solutions for a sustainable energy future."
        image="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop"
      />
      <ValuesSection />
    </div>
  );
}
