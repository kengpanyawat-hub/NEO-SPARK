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

// Map collection names to affected paths
const COLLECTION_PATHS: Record<string, string[]> = {
  works: ["/", "/works"],
  blog: ["/", "/blog"],
  team: ["/about"],
  services: ["/", "/services"],
  testimonials: ["/"],
  courses: ["/courses"],
  partners: ["/"],
  settings: ["/"],
};

export async function POST(req: NextRequest) {
  // Verify secret — supports both X-Webhook-Secret (from Admin Panel) and x-revalidate-secret
  const secret =
    req.headers.get("x-webhook-secret") ||
    req.headers.get("X-Webhook-Secret") ||
    req.headers.get("x-revalidate-secret");

  if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));

    let paths: string[];

    if (body?.collection && COLLECTION_PATHS[body.collection]) {
      // Payload from Admin Panel: { collection, action, id, timestamp }
      paths = COLLECTION_PATHS[body.collection];
      // Also revalidate individual item paths for update/delete
      if (body.action === "update" || body.action === "delete") {
        if (body.collection === "works" && body.id) {
          paths = [...paths, `/works/${body.id}`];
        } else if (body.collection === "blog" && body.id) {
          paths = [...paths, `/blog/${body.id}`];
        } else if (body.collection === "courses" && body.id) {
          paths = [...paths, `/courses/${body.id}`];
        }
      }
    } else if (Array.isArray(body?.paths)) {
      // Legacy payload: { paths: ["/works", ...] }
      paths = body.paths;
    } else {
      // Fallback: revalidate all
      paths = ["/", "/works", "/blog", "/courses", "/services", "/about"];
    }

    for (const p of paths) {
      revalidatePath(p);
    }

    console.log(`[Revalidate] Triggered for: ${paths.join(", ")} | collection: ${body?.collection ?? "all"}`);

    return NextResponse.json({
      success: true,
      revalidated: paths,
      collection: body?.collection ?? null,
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
