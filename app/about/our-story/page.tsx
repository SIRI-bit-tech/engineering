import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Story | ${SITE_NAME}`,
  description: "Learn about the evolution of VoltaEdge Engineering and our journey in powering Africa's infrastructure.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Company History"
        title="Engineering Africa's Growth Since 2018"
        description="Our journey from a local electrical design firm to a pan-African engineering powerhouse."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
      />
      <StorySection />
    </div>
  );
}
