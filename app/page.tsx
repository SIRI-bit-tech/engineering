import React from "react";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { ServicesSnapshot } from "@/components/sections/home/ServicesSnapshot";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { PartnersSection } from "@/components/sections/home/PartnersSection";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { SITE_NAME, SITE_DESCRIPTION } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Energy Infrastructure & Power Systems Solutions`,
  description: "Advanced energy infrastructure services specializing in renewable integration, power systems, and industrial automation. Professional engineers delivering comprehensive energy solutions across North America and beyond.",
  keywords: "energy infrastructure, power systems, renewable energy, industrial automation, solar energy, wind power, energy consulting, power distribution, infrastructure solutions, professional engineers, energy systems",
  openGraph: {
    title: `${SITE_NAME} | Energy Infrastructure & Power Systems Solutions`,
    description: "Advanced energy infrastructure services specializing in renewable integration, power systems, and industrial automation.",
    url: "https://voltaedge.com",
    siteName: SITE_NAME,
    images: [
      {
        url: "https://voltaedge.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Energy Infrastructure & Power Systems Solutions`,
    description: "Advanced energy infrastructure services specializing in renewable integration, power systems, and industrial automation.",
    images: ["https://voltaedge.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "description": SITE_DESCRIPTION,
    "url": "https://voltaedge.com",
    "logo": "https://voltaedge.com/logo.png",
    "areaServed": ["US", "CA", "MX", "EU", "AS", "AU"],
    "serviceType": ["Electrical Engineering", "Renewable Energy", "Power Distribution", "Industrial Automation"],
    "keywords": "electrical engineering, renewable energy, power systems, industrial automation, solar energy, wind power, electrical infrastructure, energy consulting, power distribution systems",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (800)-VOLTAEDGE",
      "contactType": "technical support",
      "email": "info@voltaedge.com",
      "availableLanguage": ["English"]
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
            <BlogPreview />
      <PartnersSection />
      <HomeCTA />
    </div>
  );
}
