// app/robots.txt/route.ts
import { NextResponse } from "next/server";
import { SITE } from "@/lib/seo";

export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
  `.trim();

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
