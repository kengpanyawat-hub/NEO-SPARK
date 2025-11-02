// app/robots.txt/route.ts
import { NextResponse } from "next/server";
import { SITE } from "../lib/seo"; // ใช้ SITE.url แทน domain

export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`.trim();

  return new NextResponse(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
