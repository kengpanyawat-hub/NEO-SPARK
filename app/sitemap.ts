// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
// สมมติว่ามี data source ของ services/posts
// เปลี่ยนเป็น fetch จริงหรืออ่านไฟล์ได้
const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/work",
  "/pricing",
  "/courses",
  "/blog",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // ตัวอย่าง dynamic blog
  const posts: { slug: string; updatedAt?: string }[] = []; // เติมข้อมูลจริง
  const postEntries = posts.map((p) => ({
    url: `${SITE.domain}/blog/${p.slug}`,
    lastModified: p.updatedAt || now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
