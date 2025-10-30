// app/works/page.tsx
import { works } from "@/data/works";
import { WorkCard } from "@/components/cards/WorkCard";
import Link from "next/link";
import StaggerGrid from "@/components/motion/StaggerGrid";

export const metadata = { title: "ผลงานของเรา | NEO SPARK" };

const cats = ["ทั้งหมด", "Web", "Graphic", "Motion", "Video", "Event", "Ads"] as const;
<StaggerGrid
  items={works}
  cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" // ปรับคอลัมน์ได้
  renderItem={(w) => (
    <a href="#" className="group block rounded-2xl border border-white/10 bg-white/[.04] p-4 hover:bg-white/[.06] transition">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img src={w.cover} alt={w.title} className="w-full h-48 object-cover group-hover:scale-[1.02] transition" />
      </div>
      <h3 className="text-base font-semibold">{w.title}</h3>
      <p className="text-white/70 text-sm">{w.desc}</p>
    </a>
  )}
/>
type Cat = (typeof cats)[number];

function pickActive(cat?: string): Cat {
  if (!cat) return "ทั้งหมด";
  return (cats as readonly string[]).includes(cat) ? (cat as Cat) : "ทั้งหมด";
}
function filterBy(cat: Cat) {
  return cat === "ทั้งหมด" ? works : works.filter((w) => w.category === cat);
}

export default function Page({ searchParams }: { searchParams?: { cat?: string } }) {
  const active = pickActive(searchParams?.cat);
  const list = filterBy(active);

  return (
    <div className="container-xl py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">ผลงานของเรา</h1>
        <p className="mt-2 text-white/70">คัดสรรงานตัวอย่างจากลูกค้าหลากหลายธุรกิจ พร้อมผลลัพธ์จับต้องได้</p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => {
          const href = c === "ทั้งหมด" ? "/works" : `/works?cat=${c}`;
          const isActive = active === c;
          return (
            <Link
              key={c}
              href={href}
              className={`rounded-full border px-4 py-2 text-sm ${
                isActive ? "border-neo-violet bg-neo-violet/20" : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              {c}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((w) => (
          <WorkCard key={w.slug} slug={w.slug} title={w.title} category={w.category} cover={w.cover} summary={w.summary} />
        ))}
      </div>
    </div>
  );
}
