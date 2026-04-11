import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Engineering Services | ${SITE_NAME}`,
  description: "VoltaEdge Engineering provides end-to-end electrical engineering, solar energy installation, power distribution, and industrial automation solutions.",
  keywords: ["electrical engineering services", "solar energy solutions", "industrial automation", "power distribution systems"],
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Technical Solutions"
        title="Comprehensive Engineering Services"
        description="We deliver precision-engineered energy infrastructure and automated systems designed for high-performance and maximum reliability."
        image="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop"
      />
      
      <ServicesGrid />
      
      <ServiceCTA />
    </div>
  );
}
