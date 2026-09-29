import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  const hasUrl = !siteConfig.siteUrl.includes("YOUR_SITE_URL");
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    ...(hasUrl ? { sitemap: `${siteConfig.siteUrl}/sitemap.xml` } : {}),
  };
}
