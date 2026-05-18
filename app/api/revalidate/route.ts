/**
 * Revalidation Route Handler
 * --------------------------
 * Called by NEO SPARK Admin Panel webhook when content is updated.
 * Triggers Next.js ISR revalidation for all dynamic pages.
 *
 * POST /api/revalidate
 * Headers: { "x-revalidate-secret": "<REVALIDATE_SECRET>" }
 * Body: { "paths": ["/works", "/blog", ...] }  (optional — revalidates all if omitted)
 */

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || "";

export async function POST(req: NextRequest) {
  // Verify secret token
  const secret = req.headers.get("x-revalidate-secret");
  if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const paths: string[] = body?.paths ?? [
      "/",
      "/works",
      "/blog",
      "/courses",
      "/services",
      "/about",
    ];

    // Revalidate each path
    for (const p of paths) {
      revalidatePath(p);
    }

    return NextResponse.json({
      success: true,
      revalidated: paths,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[Revalidate] Error:", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}

// Allow GET for health check
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Revalidation endpoint ready. Use POST with x-revalidate-secret header.",
  });
}
