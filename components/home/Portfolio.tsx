"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/motion/Reveal";

type Work = { title: string; cover: string; href?: string };

const WORKS: Work[] = [
  { title: "Longtrade Academy",           cover: "/portfolio/web/longtrade.png", href: "https://longtradeacademy.com" },
  { title: "Code.Keng",   cover: "/portfolio/web/code.keng.png", href: "/portfolio/web/code.keng" },
  { title: "Lawyer-TH",  cover: "/portfolio/web/lawyer.png",  href: "https://www.lawyer-th.com/" },
  { title: "Hippo-Air",           cover: "/portfolio/web/hippo-air.png", href: "https://hippo-air.com/" },
  { title: "Alisa-Ints",   cover: "/portfolio/web/Alisa-Ints.png", href: "https://alisa-ints.com/" },
  { title: "tanhombrand",  cover: "/portfolio/web/tanhombrand.png",  href: "https://tanhombrand.com/" },
  { title: "Finorganizer",           cover: "/portfolio/web/Finorganizer.png", href: "https://www.finorganizer.com/home" },
  { title: "lambda-scientific",   cover: "/portfolio/web/lambda-scientific.png", href: "https://www.lambda-scientific.co.th/" },
  { title: "candsassist",  cover: "/portfolio/web/candsassist.png",  href: "https://candsassist.com/" },
  { title: "plantnery",  cover: "/portfolio/web/plantnery.png",  href: "https://plantnery.com/" },
  { title: "Heath Planner",  cover: "/portfolio/web/HeathPlanner.png",  href: "https://www.heathplanner.com/" },
  // เพิ่มได้เรื่อย ๆ …
];

export default function Portfolio() {
  // ความเร็วมาตรฐาน: ต่อการ์ด ~6s ถ้ามี 6 งาน = 36s ต่อรอบ
  const duration = useMemo(() => `${Math.max(1, WORKS.length) * 5}s`, []);
  const [paused, setPaused] = useState(false);

  return (
  <Reveal>
    <section className="aurora rounded-3xl border border-white/10 p-8 container-xl py-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-white/5 ring-1 ring-white/10">
          <span className="h-2 w-2 rounded-full bg-neo-violet" />
          Portfolio
        </span>
        <h2 className="shine text-3xl md:text-4xl font-extrabold mt-3">ตัวอย่างผลงานเว็บไซต์</h2>
        <p className="shine text-white/70 mt-1">
          คัดสรรตัวอย่างจริงจากหลายอุตสาหกรรม ออกแบบ–พัฒนาให้เร็ว สวย และใช้งานได้จริง
        </p>
      </div>

      {/* Marquee container */}
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* แถบ gradient ซ้าย/ขวา */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f0d13] to-transparent rounded-l-3xl" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f0d13] to-transparent rounded-r-3xl" />

        {/* Track ที่เลื่อนเอง (ซ้ำ 2 ชุดเพื่อให้ลูปเนียน) */}
        <div
          className={[
            "marquee-track flex items-stretch gap-6",
            paused ? "marquee-paused" : "",
          ].join(" ")}
          style={{ animationDuration: duration }}
        >
          {[...WORKS, ...WORKS].map((w, i) => (
            <Card key={w.title + i} {...w} />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/contact" className="btn-primary">ขอคำปรึกษา/ตีราคา</Link>
      </div>
    </section>
	</Reveal>
  );
}

function Card({ title, cover, href }: Work) {
  const inner = (
    <>
      <div className="relative aspect-[16/10] w-[340px] sm:w-[420px] overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(min-width:1024px) 420px, 340px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-2 text-sm text-white/85">{title}</div>
    </>
  );

  return (
    <div className="group shrink-0">
      {href ? <Link href={href} className="block">{inner}</Link> : <div>{inner}</div>}
    </div>
  );
}
