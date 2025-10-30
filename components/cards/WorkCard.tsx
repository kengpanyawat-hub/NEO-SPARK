// components/cards/WorkCard.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  category: string;
  cover?: string;
  summary?: string;
};
export function WorkCard({ slug, title, category, cover = "/og.jpg", summary }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10 shadow-glow">
      <Link href={`/works/${slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image src={cover} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs">{category}</span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold group-hover:text-neo-pink">{title}</h3>
          {summary && <p className="mt-2 line-clamp-2 text-white/70">{summary}</p>}
        </div>
      </Link>
    </article>
  );
}
