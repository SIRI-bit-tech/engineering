import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About VoltaEdge | ${SITE_NAME}`,
  description: "A premier American electrical and renewable energy engineering firm delivering world-class infrastructure through precision and integrity.",
  keywords: ["about VoltaEdge", "electrical engineering firm", "sustainable energy experts", "certified engineers", "PE certified"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Authority"
        title="Engineering Precision & Industrial Legacy"
        description="VoltaEdge is a multidisciplinary engineering firm dedicated to solving complex energy and infrastructure challenges through precision, innovation, and global expertise."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB53GBeWUP6xV_WeW-qhkEfYVsv8-FHd7F39tOKG-gLuPS_256XsQ1hEtwYxB_gc43jxdOfdhpfz0OTDDWnVgPY_Fq161Y_9TlZGWHLY1QkU59TgArQx_YQAenN5jpLnRahixpTx32l8FUdSPc6OGF8Vq6Hcm6a-OxFxsVd8KMfT5qNI9nuCPbxAW2izb7h0n-6Z-YzUbU359Q3slOZ025be9OZtT1Y2hOr9VZ5SqQ46EhbjVEjQ8UAcwgyKRDamdlTOTQzkcueoivA"
      />

      <StorySection />

      <TimelineSection />

      <ValuesSection />
    </div>
  );
}
