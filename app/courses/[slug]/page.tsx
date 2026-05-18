// app/courses/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCourses, getCourseBySlug, slugify } from "@/lib/api";
import { site } from "@/data/site";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((c) => ({ slug: slugify(c.title) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const c = await getCourseBySlug(params.slug);
  if (!c) return {};
  return {
    title: `${c.title} | คอร์สออนไลน์ | NEO SPARK`,
    description: c.description,
    openGraph: { images: [c.imageUrl || "/og.jpg"] },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const c = await getCourseBySlug(params.slug);
  if (!c) return notFound();

  const price = c.price ? Number(c.price) : 0;

  // Parse description as syllabus if it contains newlines
  const syllabus = c.description
    ? c.description.split("\n").filter((s) => s.trim())
    : [];

  return (
    <div className="container-xl py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">{c.title}</h1>
        <div className="mt-1 text-white/60">ราคา {price.toLocaleString()} บาท</div>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
          <Image src={c.imageUrl || "/og.jpg"} alt={c.title} fill className="object-cover" />
        </div>

        {syllabus.length > 0 && (
          <>
            <h2 className="mt-8 text-2xl font-semibold">หัวข้อที่ครอบคลุม</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-white/80">
              {syllabus.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </>
        )}

        <a href={site.lineOA} className="btn-primary mt-8 inline-flex">
          สั่งซื้อผ่าน LINE OA
        </a>
      </div>
    </div>
  );
}
