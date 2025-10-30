// app/courses/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const c = courses.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: `${c.title} | คอร์สออนไลน์ | NEO SPARK`, description: c.summary, openGraph: { images: [c.cover || "/og.jpg"] } };
}

export default function Page({ params }: { params: { slug: string } }) {
  const c = courses.find((x) => x.slug === params.slug);
  if (!c) return notFound();

  return (
    <div className="container-xl py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">{c.title}</h1>
        <div className="mt-1 text-white/60">ราคา {c.price.toLocaleString()} บาท</div>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
          <Image src={c.cover || "/og.jpg"} alt={c.title} fill className="object-cover" />
        </div>

        <p className="mt-6 text-white/80">{c.summary}</p>

        {!!c.syllabus?.length && (
          <>
            <h2 className="mt-8 text-2xl font-semibold">หัวข้อที่ครอบคลุม</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-white/80">
              {c.syllabus.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </>
        )}

        <a href={site.lineOA} className="btn-primary mt-8 inline-flex">สั่งซื้อผ่าน LINE OA</a>
      </div>
    </div>
  );
}
