import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Engineering Team | ${SITE_NAME}`,
  description: "Meet the PE-certified engineering team at VoltaEdge, delivering precision-led power and renewable energy solutions across the United States.",
  keywords: ["engineering experts", "certified electrical engineers", "renewable energy team", "PE certified engineers USA", "IEEE fellows"],
};

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Leadership"
        title="The Engineering Council"
        description="Our multidisciplinary engineering team brings global expertise to solve the most complex energy and infrastructure challenges across the country."
        image="/images/about/story.png"
      />
      <TeamSection />
    </div>
  );
}
