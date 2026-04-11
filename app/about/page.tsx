import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: "VoltaEdge Engineering is a premier electrical and renewable energy engineering firm delivering innovative power solutions across Africa.",
  keywords: ["about VoltaEdge", "electrical engineering firm Nigeria", "sustainable energy experts", "COREN certified engineers"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Engineering Legacy"
        title="Powering Tomorrow, Today"
        description="We are a multidisciplinary engineering firm dedicated to solving Africa's most complex energy and infrastructure challenges through precision, innovation, and global expertise."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
      />
      
      <StorySection />
      
      <TimelineSection />
      
      <ValuesSection />
    </div>
  );
}
