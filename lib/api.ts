/**
 * NEO SPARK API Client
 * --------------------
 * Fetches data from the NEO SPARK Admin Panel Public API.
 * All functions use Next.js fetch with ISR revalidation (60 seconds by default).
 *
 * Base URL: https://neoadmin-ivhumdtn.manus.space/api/public/v1
 */

const API_BASE = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://neoadmin-ivhumdtn.manus.space/api/public/v1";
const API_KEY = process.env.ADMIN_API_KEY || "";
const REVALIDATE = 60; // seconds — adjust per page needs

// ─── Types (matching Admin Panel schema) ─────────────────────────────────────

export type ApiWork = {
  id: number;
  title: string;
  slug: string;
  category: string | null;
  description: string | null;
  imageUrl: string | null;
  imageKey: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ApiPost = {
  id: number;
  title: string;
  slug: string;
  content: string | null;
  coverUrl: string | null;
  coverKey: string | null;
  tags: string | null; // JSON array as string
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ApiTeamMember = {
  id: number;
  name: string;
  position: string | null;
  bio: string | null;
  imageUrl: string | null;
  imageKey: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ApiService = {
  id: number;
  title: string;
  price: string | null;
  description: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ApiTestimonial = {
  id: number;
  clientName: string;
  company: string | null;
  message: string | null;
  rating: number | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ApiCourse = {
  id: number;
  title: string;
  price: string | null;
  description: string | null;
  imageUrl: string | null;
  imageKey: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ApiPartner = {
  id: number;
  name: string;
  logoUrl: string | null;
  logoKey: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ApiSettings = Record<string, string>;

// ─── Core fetch helper ────────────────────────────────────────────────────────

async function apiFetch<T>(
  path: string,
  options: { revalidate?: number } = {}
): Promise<T> {
  const url = `${API_BASE}${path}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (API_KEY) {
    headers["X-API-Key"] = API_KEY;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: options.revalidate ?? REVALIDATE },
  });

  if (!res.ok) {
    console.error(`[API] Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    throw new Error(`API error: ${res.status}`);
  }

  const json = await res.json();
  return json.data as T;
}

// ─── API functions ────────────────────────────────────────────────────────────

/** Get all published works, sorted by order */
export async function getWorks(): Promise<ApiWork[]> {
  try {
    const data = await apiFetch<ApiWork[]>("/works");
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

/** Get a single work by slug */
export async function getWorkBySlug(slug: string): Promise<ApiWork | null> {
  try {
    return await apiFetch<ApiWork>(`/works/${encodeURIComponent(slug)}`);
  } catch {
    return null;
  }
}

/** Get all published blog posts */
export async function getPosts(): Promise<ApiPost[]> {
  try {
    const data = await apiFetch<ApiPost[]>("/blog");
    return data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch {
    return [];
  }
}

/** Get a single blog post by slug */
export async function getPostBySlug(slug: string): Promise<ApiPost | null> {
  try {
    return await apiFetch<ApiPost>(`/blog/${encodeURIComponent(slug)}`);
  } catch {
    return null;
  }
}

/** Get all team members, sorted by order */
export async function getTeamMembers(): Promise<ApiTeamMember[]> {
  try {
    const data = await apiFetch<ApiTeamMember[]>("/team");
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

/** Get all services, sorted by order */
export async function getServices(): Promise<ApiService[]> {
  try {
    const data = await apiFetch<ApiService[]>("/services");
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

/** Get all testimonials, sorted by order */
export async function getTestimonials(): Promise<ApiTestimonial[]> {
  try {
    const data = await apiFetch<ApiTestimonial[]>("/testimonials");
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

/** Get all courses, sorted by order */
export async function getCourses(): Promise<ApiCourse[]> {
  try {
    const data = await apiFetch<ApiCourse[]>("/courses");
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

/** Get a single course by slug — matches by title slug (id-based fallback) */
export async function getCourseBySlug(slug: string): Promise<ApiCourse | null> {
  try {
    const all = await getCourses();
    // Try matching by title-derived slug
    return all.find((c) => slugify(c.title) === slug) ?? null;
  } catch {
    return null;
  }
}

/** Get all partners, sorted by order */
export async function getPartners(): Promise<ApiPartner[]> {
  try {
    const data = await apiFetch<ApiPartner[]>("/partners");
    return data.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

/** Get site settings as a flat key→value map */
export async function getSiteSettings(): Promise<ApiSettings> {
  try {
    return await apiFetch<ApiSettings>("/settings");
  } catch {
    return {};
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Parse tags from JSON string stored in DB */
export function parseTags(tagsJson: string | null): string[] {
  if (!tagsJson) return [];
  try {
    const parsed = JSON.parse(tagsJson);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return tagsJson.split(",").map((t) => t.trim()).filter(Boolean);
  }
}

/** Convert a title to a URL-friendly slug */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w\-ก-๙]/g, "")
    .replace(/\-\-+/g, "-");
}

/** Format date for Thai locale */
export function formatDateTH(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
