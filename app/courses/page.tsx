// app/courses/page.tsx
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/cards/CourseCard";

export const metadata = { title: "คอร์สออนไลน์ | NEO SPARK" };

export default function Page() {
  return (
    <div className="container-xl py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">คอร์สออนไลน์</h1>
        <p className="mt-2 text-white/70">เรียนรู้แบบลงมือทำ เห็นผลได้จริงในงานประจำวัน</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} slug={c.slug} title={c.title} price={c.price} cover={c.cover} summary={c.summary} />
        ))}
      </div>
    </div>
  );
}
