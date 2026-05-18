// components/home/BlogPreview.tsx
import Link from "next/link";
import Image from "next/image";
import { getPosts, parseTags } from "@/lib/api";

/**
 * บล็อก "บทความล่าสุด" (Blog Preview)
 * - ป้องกัน error เมื่อบาง post ไม่มี tags/cover/date
 * - รองรับ tags เป็นทั้ง string[] หรือ string
 * - ถ้า cover ว่างจะใช้ภาพ placeholder
 */

type RawPost = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string | null;
  date?: string | null;
  tags?: string[] | string | null;
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  tags: string[];
};

// --- config ---
const LIMIT = 6;
const PLACEHOLDER = "/images/placeholder.jpg"; // สร้าง/ใส่รูปไว้ใน public/images

// แปลง/ทำความสะอาดข้อมูลดิบ → ให้ชนิดเสถียร
function normalize(p: RawPost): Post {
  const safeDate =
    p.date && !Number.isNaN(+new Date(p.date)) ? p.date : new Date().toISOString();

  const safeTags =
    p.tags == null
      ? []
      : Array.isArray(p.tags)
      ? p.tags
      : String(p.tags)
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);

  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? "",
    cover: p.cover || PLACEHOLDER,
    date: safeDate,
    tags: safeTags,
  };
}

// แสดงแท็กเป็นสตริงสวยๆ
function formatTags(tags: string[]) {
  return tags.length ? tags.join(" / ") : "—";
}

export default async function BlogPreview() {
  const allPosts = await getPosts();
  const latest = allPosts
    .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
    .slice(0, LIMIT)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.content?.slice(0, 120) ?? "",
      cover: p.coverUrl || PLACEHOLDER,
      date: p.createdAt,
      tags: parseTags(p.tags),
    }));

  if (latest.length === 0) {
    return (
      <section id="blog" className="container-xl py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">บทความ / อินไซต์ล่าสุด</h2>
            <p className="mt-2 text-white/70">Tips • Case • SEO • UX • Ads • Dev ที่คัดแล้วว่าใช้ได้จริง</p>
          </div>
          <Link href="/blog" className="btn-ghost">อ่านทั้งหมด</Link>
        </div>
        <div className="mt-8 text-center text-white/50 py-12">กำลังเตรียมบทความ — ติดตามได้เร็ว··· นี้</div>
      </section>
    );
  }

  return (
    <section id="blog" className="container-xl py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">บทความ / อินไซต์ล่าสุด</h2>
          <p className="mt-2 text-white/70">
            Tips • Case • SEO • UX • Ads • Dev ที่คัดแล้วว่าใช้ได้จริง
          </p>
        </div>
        <Link href="/blog" className="btn-ghost">
          อ่านทั้งหมด
        </Link>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((p) => (
          <li
            key={p.slug}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition hover:bg-white/[.06]"
          >
            <Link href={`/blog/${p.slug}`} className="block">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("th-TH")}
                  </time>
                  {p.tags.length > 0 && (<><span>•</span><span>{p.tags.join(" / ")}</span></>)}
                </div>
                <h3 className="mt-2 line-clamp-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/70">{p.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
