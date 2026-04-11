import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Engineering Projects | ${SITE_NAME}`,
  description: "Explore VoltaEdge Engineering's portfolio of successful solar farm deployments, industrial automation systems, and power distribution projects across Africa.",
  keywords: ["engineering case studies", "solar farm portfolio", "industrial automation projects", "power distribution deployments"],
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Portfolio"
        title="Engineering Success Across the Continent"
        description="Our case studies demonstrate our commitment to delivering high-performance electrical infrastructure and renewable energy systems for industrial and commercial clients."
        image="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2070&auto=format&fit=crop"
      />
      
      <ProjectsGrid />
    </div>
  );
}
