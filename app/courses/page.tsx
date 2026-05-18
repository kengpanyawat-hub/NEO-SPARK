// app/courses/page.tsx
import { getCourses, slugify } from "@/lib/api";
import { CourseCard } from "@/components/cards/CourseCard";

export const metadata = { title: "คอร์สออนไลน์ | NEO SPARK" };
export const revalidate = 60;

export default async function Page() {
  const courses = await getCourses();

  return (
    <div className="container-xl py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">คอร์สออนไลน์</h1>
        <p className="mt-2 text-white/70">เรียนรู้แบบลงมือทำ เห็นผลได้จริงในงานประจำวัน</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            slug={slugify(c.title)}
            title={c.title}
            price={c.price ? Number(c.price) : 0}
            cover={c.imageUrl ?? "/og.jpg"}
            summary={c.description ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
