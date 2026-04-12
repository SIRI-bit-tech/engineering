import { PageHero } from "@/components/layout/PageHero";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Technical Portfolio | ${SITE_NAME}`,
  description: "Explore VoltaEdge Engineering's portfolio of successful renewable energy hubs, industrial automation systems, and power distribution projects across the United States.",
  keywords: ["engineering case studies", "renewable energy portfolio", "industrial automation projects", "power distribution deployments", "certified engineers USA", "PE certified"],
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Portfolio"
        title="Infrastructural Impact & Engineering Excellence"
        description="Our case studies demonstrate our commitment to delivering high-performance electrical infrastructure and renewable energy systems for world-class industrial and commercial clients across the country."
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
      />
      
      <ProjectsGrid />
    </div>
  );
}
