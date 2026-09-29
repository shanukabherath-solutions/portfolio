import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  if (siteConfig.siteUrl.includes("YOUR_SITE_URL")) return [];
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
