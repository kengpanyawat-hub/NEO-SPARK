// app/blog/page.tsx
import Link from "next/link";
import { getPosts, parseTags } from "@/lib/api";
import { PostCard } from "@/components/blog/PostCard";
import { buildMeta, jsonLd, SITE } from "../lib/seo";
import type { Cat } from "@/components/blog/PostCard";

export const metadata = buildMeta({
  title: "บทความ | NEO SPARK",
  description: "กลยุทธ์การตลาด การออกแบบ เว็บไซต์ วิดีโอ โฆษณา อัปเดตสำหรับแบรนด์ไทย",
  canonical: "/blog",
  image: "/og/og-blog.jpg",
});

export const revalidate = 60;

const categories = ["ทั้งหมด", "Marketing", "Design", "Web", "Video", "Ads", "Event"] as const;
type CatFilter = (typeof categories)[number];

const pickActive = (c?: string): CatFilter =>
  c && (categories as readonly string[]).includes(c) ? (c as CatFilter) : "ทั้งหมด";

export default async function Page({ searchParams }: { searchParams?: { cat?: string } }) {
  const active = pickActive(searchParams?.cat);
  const allPosts = await getPosts();

  // Derive category from first tag for filtering
  const postsWithCat = allPosts.map((p) => ({
    ...p,
    derivedCategory: (parseTags(p.tags)[0] ?? "Marketing") as Cat,
  }));

  const posts =
    active === "ทั้งหมด"
      ? postsWithCat
      : postsWithCat.filter((p) => p.derivedCategory === active);

  const breadcrumb = jsonLd.breadcrumb([
    { name: "Home", item: `${SITE.url}/` },
    { name: "Blog", item: `${SITE.url}/blog` },
  ]);
  const collection = jsonLd.collection({ name: "บทความ | NEO SPARK", url: `${SITE.url}/blog` });

  return (
    <div className="container-xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />

      <header className="mb-8">
        <h1 className="text-3xl font-bold">บทความ</h1>
        <p className="mt-2 text-white/70">
          อัพเดตกลยุทธ์การตลาดออนไลน์ การออกแบบ เว็บไซต์ วิดีโอ โฆษณา และงานอีเวนต์—คัดสรรเพื่อแบรนด์ไทย
        </p>
      </header>

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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length === 0 ? (
          <div className="col-span-full py-16 text-center text-white/50">
            ยังไม่มีบทความในหมวดนี้
          </div>
        ) : (
          posts.map((p) => (
            <PostCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              excerpt={p.content?.slice(0, 120) ?? ""}
              cover={p.coverUrl ?? ""}
              date={p.createdAt}
              category={p.derivedCategory}
            />
          ))
        )}
      </div>
    </div>
  );
}
