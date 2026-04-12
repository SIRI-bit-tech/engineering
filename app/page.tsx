import React from "react";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { ServicesSnapshot } from "@/components/sections/home/ServicesSnapshot";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { TeamSnapshot } from "@/components/sections/home/TeamSnapshot";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { PartnersSection } from "@/components/sections/home/PartnersSection";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "description": SITE_DESCRIPTION,
    "url": "https://voltaedge.com",
    "logo": "https://voltaedge.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1250 Energy Boulevard",
      "addressLocality": "Houston, TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (800) 865-8233",
      "contactType": "technical support",
      "email": "info@voltaedge.com"
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <ServicesSnapshot />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsCarousel />
      <TeamSnapshot />
      <BlogPreview />
      <PartnersSection />
      <HomeCTA />
    </div>
  );
}
