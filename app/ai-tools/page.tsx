// app/ai-tools/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CATEGORIES, TOOLS, Tool } from "@/data/ai-tools";
import { Search } from "lucide-react";
import SmmShowcase from "@/components/SmmShowcase";
import { jsonLd, SITE } from "../lib/seo";

export default function AiToolsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "ทั้งหมด">("ทั้งหมด");

  const filtered = useMemo(() => {
    let list = TOOLS;
    if (cat !== "ทั้งหมด") list = list.filter((t) => t.category === cat);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(s) ||
          t.description.toLowerCase().includes(s) ||
          (t.tags ?? []).some((tg) => tg.toLowerCase().includes(s))
      );
    }
    return list;
  }, [q, cat]);

  const breadcrumb = jsonLd.breadcrumb([
    { name: "Home", item: `${SITE.url}/` },
    { name: "AI Tools", item: `${SITE.url}/ai-tools` },
  ]);

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative border-b border-white/10 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(98,20,217,.25),transparent_60%)]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            รวมเครื่องมือ <span className="text-violet-300">AI</span> สำหรับการตลาด & คอนเทนท์
          </h1>
          <p className="mt-2 text-neutral-300">คัดชุดเครื่องมือที่ใช้จริงในงานเอเจนซี่ แบ่งหมวดชัด ค้นหาง่าย กดใช้งานได้ทันที</p>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
            <Search className="h-5 w-5 text-neutral-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ค้นหาเครื่องมือ เช่น blog, seo, ads, video ..."
              className="w-full bg-transparent text-neutral-100 placeholder:text-neutral-400 focus:outline-none"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["ทั้งหมด", ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c as any)}
                className={[
                  "rounded-full px-3 py-1 text-sm border",
                  cat === c ? "border-violet-500/40 bg-violet-500/20 text-violet-200" : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        {filtered.length === 0 ? (
          <p className="text-neutral-400">ไม่พบเครื่องมือที่ตรงกับคำค้น</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t: Tool) => {
              const Icon = t.icon;
              return (
                <Link key={t.id} href={`/ai-tools/${t.id}`} className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
                  <div className="flex items-start gap-3">
                    {Icon ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 ring-1 ring-violet-500/30">
                        <Icon className="h-5 w-5 text-violet-200 group-hover:scale-110 transition" />
                      </div>
                    ) : null}
                    <div>
                      <h3 className="text-white font-medium">{t.title}</h3>
                      <p className="mt-1 text-sm text-neutral-300">{t.description}</p>
                      <div className="mt-2 text-xs text-neutral-400">{t.category}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-violet-500/20 text-violet-200 text-xs px-2 py-0.5">ดูรายละเอียด</span>
                    {t.demoUrl ? <span className="rounded-full bg-white/10 text-neutral-200 text-xs px-2 py-0.5">กดใช้งานได้จริง</span> : null}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
	  {/* วิดเจ็ต KMM */}
	  <SmmShowcase />
    </main>
  );
}
