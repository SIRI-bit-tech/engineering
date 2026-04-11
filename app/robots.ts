import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL || "https://voltaedge.com"}/sitemap.xml`,
  };
}
