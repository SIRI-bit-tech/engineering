import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Team | ${SITE_NAME}`,
  description: "Meet the certified engineering team at VoltaEdge, delivering precision-led power and renewable energy solutions across Africa.",
};

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Expertise"
        title="Meet the Engineering Team"
        description="Our certified engineering team brings global expertise to solve Africa's most complex energy and infrastructure challenges."
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?q=80&w=2070&auto=format&fit=crop"
      />
      <TeamSection />
    </div>
  );
}
