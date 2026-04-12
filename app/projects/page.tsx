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
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYf6pC3p86pP198B7R9E2B-u4G1D237J281v9R8E3B6C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9"
      />
      
      <ProjectsGrid />
    </div>
  );
}
