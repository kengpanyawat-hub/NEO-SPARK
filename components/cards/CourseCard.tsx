// components/cards/CourseCard.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  price: number;
  cover?: string;
  summary?: string;
};
export function CourseCard({ slug, title, price, cover = "/og.jpg", summary }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10 shadow-glow">
      <Link href={`/courses/${slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image src={cover} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs">คอร์สออนไลน์</span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold group-hover:text-neo-pink">{title}</h3>
          {summary && <p className="mt-2 line-clamp-2 text-white/70">{summary}</p>}
          <div className="mt-4 text-sm text-white/80">ราคา <span className="text-white font-semibold">{price.toLocaleString()} บาท</span></div>
        </div>
      </Link>
    </article>
  );
}
