// /components/blog/PostCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Cat } from "@/data/posts";

export function PostCard({
  slug,
  title,
  excerpt,
  cover,
  date,
  category,
}: {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  date: string;
  category: Cat;
}) {
  const d = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 hover:bg-white/[0.08] transition">
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt={title} className="w-full h-44 object-cover" />
      ) : (
        <div className="h-44 w-full bg-white/5" />
      )}
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 text-[11px] text-white/60">
          <span className="inline-flex rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-white/10">
            {category}
          </span>
          <span>•</span>
          <span>{d}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug line-clamp-2">{title}</h3>
        {excerpt && <p className="mt-2 text-sm text-white/70 line-clamp-2">{excerpt}</p>}
        <Link
          href={`/blog/${slug}`}
          className="mt-3 inline-block text-sm text-neo-violet hover:underline"
        >
          อ่านต่อ →
        </Link>
      </div>
    </article>
  );
}
