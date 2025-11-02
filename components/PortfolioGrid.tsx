"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export type WorkItem = {
  title: string;
  image?: string;   // path ใน /public/... จะปลอดภัยสุด
  href?: string;
  tags?: string[];
};

type Props = {
  items: WorkItem[];
  heading?: string;
  subheading?: string;
};

export default function PortfolioGrid({
  items,
  heading = "ผลงานที่เกี่ยวข้อง",
  subheading = "ตัวอย่างงานจริงจากเคสใกล้เคียง",
}: Props) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <p className="text-sm text-neutral-400">{heading}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {subheading}
        </h2>
      </div>

      {items?.length ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w, i) => (
            <li
              key={`${w.title}-${i}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={w.image || "/images/placeholder-neo-spark.jpg"}
                  alt={w.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={i < 3}
                />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-1 font-medium text-white">
                  {w.title}
                </h3>
                {w.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-neutral-800/60 px-2 py-0.5 text-xs text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                {w.href ? (
                  <Link
                    href={w.href}
                    className="mt-3 inline-flex items-center text-sm text-violet-300 hover:text-violet-200"
                  >
                    ดูเคสนี้
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-neutral-300">
          ยังไม่มีตัวอย่างงานในหมวดนี้ — เพิ่มรายการที่ฟิลด์ <code>works</code> ใน
          <code>data/services2.ts</code> ได้ทันที
        </div>
      )}
    </section>
  );
}
