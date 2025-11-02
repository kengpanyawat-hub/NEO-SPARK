// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/works", "/blog", "/contact", "/ai-tools"].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : 0.7,
  }));
  return routes;
}
