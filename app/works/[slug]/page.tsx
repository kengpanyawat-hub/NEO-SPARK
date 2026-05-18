// app/works/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorks, getWorkBySlug } from "@/lib/api";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const w = await getWorkBySlug(params.slug);
  if (!w) return {};
  return {
    title: `${w.title} | NEO SPARK`,
    description: w.description,
    openGraph: { images: [w.imageUrl || "/og.jpg"] },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const w = await getWorkBySlug(params.slug);
  if (!w) return notFound();

  // Parse description as content paragraphs if it contains newlines
  const contentParagraphs = w.description
    ? w.description.split("\n").filter((p) => p.trim())
    : [];

  return (
    <article className="container-xl py-10">
      <h1 className="text-3xl font-bold">{w.title}</h1>
      <div className="mt-2 text-white/60">{w.category}</div>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={w.imageUrl || "/og.jpg"}
          alt={w.title}
          fill
          className="object-cover"
        />
      </div>

      {contentParagraphs.length > 0 && (
        <div className="prose prose-invert mt-8 max-w-3xl">
          {contentParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </article>
  );
}
