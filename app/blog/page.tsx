// app/blog/page.tsx  — Server Component (ไม่มี "use client")
import Link from "next/link";
import { posts as allPosts } from "@/data/posts";
import { PostCard } from "@/components/blog/PostCard";

export const metadata = { title: "บทความ | NEO SPARK" } as const;

const categories = ["ทั้งหมด", "Marketing", "Design", "Web", "Video", "Ads", "Event"] as const;
type Cat = (typeof categories)[number];

function pickActive(cat?: string): Cat {
  if (!cat) return "ทั้งหมด";
  return (categories as readonly string[]).includes(cat) ? (cat as Cat) : "ทั้งหมด";
}

function filterPosts(cat: Cat) {
  return cat === "ทั้งหมด" ? allPosts : allPosts.filter((p) => p.category === cat);
}

export default function Page({ searchParams }: { searchParams?: { cat?: string } }) {
  const active = pickActive(searchParams?.cat);
  const posts = filterPosts(active);

  return (
    <div className="container-xl py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">บทความ</h1>
        <p className="mt-2 text-white/70">
          อัพเดตกลยุทธ์การตลาดออนไลน์ การออกแบบ เว็บไซต์ วิดีโอ โฆษณา และงานอีเวนต์—คัดสรรเพื่อแบรนด์ไทย
        </p>
      </header>

      {/* Category pills (ลิงก์เปลี่ยน query string ?cat=... เพื่อให้ Server render และยังเป็น SSR/ISR ได้) */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const href = c === "ทั้งหมด" ? "/blog" : `/blog?cat=${encodeURIComponent(c)}`;
          const isActive = active === c;
          return (
            <Link
              key={c}
              href={href}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-neo-violet bg-neo-violet/20 text-white"
                  : "border-white/10 bg-white/5 hover:bg-white/10 text-white/80"
              }`}
            >
              {c}
            </Link>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            excerpt={p.excerpt}
            cover={p.cover}
            date={p.date}
            category={p.category}
          />
        ))}
      </div>
    </div>
  );
}
