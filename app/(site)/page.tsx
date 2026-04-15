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
  title: `${SITE_NAME} | Precision Power & Energy Engineering`,
  description: "VoltaEdge Engineering provides high-performance electrical design, renewable energy integration, and industrial automation. Specializing in power distribution and infrastructure for global industry leaders.",
  keywords: "electrical engineering, power infrastructure, renewable energy integration, industrial automation, power distribution systems, grid modernization, energy infrastructure solutions, BIM modeling engineering, electrical system design",
  openGraph: {
    title: `${SITE_NAME} | Precision Power & Energy Engineering`,
    description: "VoltaEdge Engineering provides high-performance electrical design, renewable energy integration, and industrial automation.",
    url: "https://voltaeedge.com",
    siteName: SITE_NAME,
    images: [
      {
        url: "https://voltaeedge.com/og-image.png",
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
    images: ["https://voltaeedge.com/og-image.png"],
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "EngineeringBusiness",
    "name": SITE_NAME,
    "alternateName": "VoltaEdge",
    "description": SITE_DESCRIPTION,
    "url": "https://voltaeedge.com",
    "logo": "https://voltaeedge.com/logo.png",
    "image": "https://voltaeedge.com/og-image.png",
    "sameAs": [
      "https://linkedin.com/company/voltaedge",
      "https://twitter.com/voltaedge",
      "https://instagram.com/voltaedge"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (800)-VOLTAEDGE",
      "contactType": "technical support",
      "email": "info@voltaeedge.com",
      "availableLanguage": ["English"]
    },
    "knowsAbout": [
      "Electrical Engineering",
      "Renewable Energy Infrastructure",
      "Power Distribution Systems",
      "Industrial Automation",
      "Grid Modernization",
      "Sustainable Energy Solutions",
      "HVDC Engineering",
      "Energy Efficiency Audits"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": "https://voltaeedge.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://voltaeedge.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
