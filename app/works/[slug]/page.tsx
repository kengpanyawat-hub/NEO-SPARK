// app/works/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { works } from "@/data/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const w = works.find((x) => x.slug === params.slug);
  if (!w) return {};
  return { title: `${w.title} | NEO SPARK`, description: w.summary, openGraph: { images: [w.cover || "/og.jpg"] } };
}

export default function Page({ params }: { params: { slug: string } }) {
  const w = works.find((x) => x.slug === params.slug);
  if (!w) return notFound();

  return (
    <article className="container-xl py-10">
      <h1 className="text-3xl font-bold">{w.title}</h1>
      <div className="mt-2 text-white/60">{w.category}</div>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
        <Image src={w.cover || "/og.jpg"} alt={w.title} fill className="object-cover" />
      </div>

      {w.content && (
        <div className="prose prose-invert mt-8 max-w-3xl">
          {w.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {w.gallery?.length ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {w.gallery.map((g, i) => (
            <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
              <Image src={g} alt={`${w.title} ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}
