"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Clock,
  Gauge,
  Zap,
  BrainCircuit,
  LineChart,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.25 },
});

const card =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]";

const bullet =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80";

export default function MarketingSystem() {
  return (
    <section className="relative z-0 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 mx-auto max-w-6xl blur-3xl"
      >
        <div className="h-48 w-full rounded-full bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-cyan-400/20" />
      </div>

      {/* Headline */}
      <motion.div
        className="mx-auto max-w-3xl text-center"
        {...fadeUp(0)}
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
          ระบบการตลาดอัจฉริยะ
        </div>
        <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
          Marketing Performance & Automation
        </h2>
        <p className="mt-3 text-white/70">
          เชื่อมต่อทุกแพลตฟอร์ม • วิเคราะห์ผลแบบเรียลไทม์ • ปรับแคมเปญอัตโนมัติด้วย AI
          เพื่อผลลัพธ์ที่วัดได้จริง
        </p>
      </motion.div>

      {/* Top feature cards */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* การเติบโต */}
        <motion.div className={`${card} p-5`} {...fadeUp(0.05)}>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/15 p-2">
              <BarChart3 className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-sm text-white/70">Performance Analytics</div>
          </div>

          <h3 className="mt-3 text-lg font-semibold text-white">
            ดึงความการโพสต์พร้อมกราฟ
          </h3>
          {/* mini chart mock */}
          <div className="mt-4 flex items-end gap-2">
            {[28, 40, 22, 52, 46, 68, 56].map((h, i) => (
              <div
                key={i}
                className="w-6 rounded-md bg-gradient-to-t from-fuchsia-600/30 to-fuchsia-400/70"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="mt-4 text-xs text-emerald-300">
            CTR +32% • CVR +18% • CPA -27%
          </div>
        </motion.div>

        {/* 24/7 Monitor */}
        <motion.div className={`${card} p-5`} {...fadeUp(0.1)}>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-cyan-500/15 p-2">
              <Clock className="h-5 w-5 text-cyan-400" />
            </div>
            <div className="text-sm text-white/70">Automation Monitor</div>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">
            ดูแลผลตลอด 24 ชั่วโมง
          </h3>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Web Lead
              </span>
              <span>11:50</span>
            </div>
            <div className="mt-2 text-sm text-white/90">
              มีคอนเวอร์ชันใหม่ • ระบบส่งแจ้งเตือนทันที
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className={bullet}>
              <Zap className="h-3.5 w-3.5 text-fuchsia-400" />
              Auto-Reply
            </span>
            <span className={bullet}>
              <Gauge className="h-3.5 w-3.5 text-cyan-300" />
              Budget Guard
            </span>
            <span className={bullet}>
              <BrainCircuit className="h-3.5 w-3.5 text-emerald-300" />
              AI Optimize
            </span>
          </div>
        </motion.div>

        {/* Optimization */}
        <motion.div className={`${card} p-5`} {...fadeUp(0.15)}>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-500/15 p-2">
              <LineChart className="h-5 w-5 text-purple-400" />
            </div>
            <div className="text-sm text-white/70">Optimization</div>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">
            เอนกขบนขึ้นตลอด
          </h3>

          <div className="mt-5">
            <div className="relative h-28 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              {/* mock line */}
              <svg
                viewBox="0 0 300 120"
                className="h-full w-full text-fuchsia-400/80"
              >
                <path
                  d="M0 100 C40 85, 60 70, 100 78 C140 86, 170 50, 200 60 C230 70, 260 45, 300 52"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="230" cy="70" r="5" className="fill-emerald-400" />
              </svg>
            </div>
            <div className="mt-3 text-xs text-white/70">
              ตรวจสอบและรีทาร์เก็ตได้ไวขึ้น 3 เท่า
            </div>
          </div>
        </motion.div>
      </div>

      {/* Middle: tool logos + reason cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Tool Logos */}
        <motion.div className={`${card} p-5`} {...fadeUp(0.2)}>
          <div className="mb-2 text-sm text-white/70">
            เครื่องมือการตลาดเชื่อมต่อมากกว่า 20 ระบบ
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* ใช้ Image หรือ <div> วงกลมโลโก้ก็ได้ */}
            {[
              "/logos/meta.svg",
              "/logos/google-ads.svg",
              "/logos/tiktok.svg",
              "/logos/lineoa.svg",
              "/logos/ga4.svg",
              "/logos/looker.svg",
            ].map((src, i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                title={src}
              >
                {/* ถ้าไม่มีไฟล์โลโก้ ให้คงเป็นตัวอักษรไว้ได้ */}
                <Image
                  src={src}
                  alt="tool"
                  width={20}
                  height={20}
                  className="opacity-90"
                  onError={(e) => {
                    // fallback เป็นจุดสี
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Pixel/Tag ครบทุกแพลตฟอร์ม",
              "กำหนด Conversion ที่ใช่",
              "รายงาน Looker Studio",
              "GA4/UTM/Events",
            ].map((t, i) => (
              <span key={i} className={bullet}>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Use-case / Benefit */}
        <motion.div className={`${card} p-5`} {...fadeUp(0.25)}>
          <div className="text-sm text-white/70">เคสที่ใช้งานมากมาย</div>
          <h4 className="mt-1 text-lg font-semibold text-white">
            วางแผนกลยุทธ์ + ผลลัพธ์ที่ชัดเจน
          </h4>
          <p className="mt-2 text-sm leading-6 text-white/70">
            เราช่วยตั้งต้นระบบการตลาด ตั้งแต่ Research → Creative →
            ยิงแอด/SEO → CRM → Dashboard ให้วัดผลได้จริงภายใน 30 วัน
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["ลด CPA เฉลี่ย", "–40%"],
              ["เพิ่ม Conversion", "+185%"],
              ["CTR สูงสุด", "3.2%"],
              ["ROAS สูงสุด", "7.4x"],
            ].map(([k, v], i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="text-xs text-white/60">{k}</div>
                <div className="text-lg font-semibold text-white">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={`${card} flex flex-col justify-between p-5`}
          {...fadeUp(0.3)}
        >
          <div>
            <div className="text-sm text-white/70">พร้อมเริ่มอย่างมืออาชีพ</div>
            <h4 className="mt-1 text-lg font-semibold text-white">
              ขอวิเคราะห์แคมเปญฟรี + Roadmap 30 วัน
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {[
                "Audit พิกเซล/อีเวนต์ • ตรวจติดตั้ง",
                "แผนงบ / กลยุทธ์ / Creative Hook",
                "ตั้งค่า Dashboard รายงานผล",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20"
            >
              เริ่มต้นคุยงาน
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-2 text-xs text-white/60">
              *ตอบกลับภายใน 24 ชม. (จันทร์–ศุกร์)
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bullets */}
      <motion.div
        className="mt-6 flex flex-wrap items-center justify-center gap-2"
        {...fadeUp(0.35)}
      >
        {[
          "ระบบอัตโนมัติ 24 ชม.",
          "วัดผลได้จริง",
          "รองรับทุกแพลตฟอร์ม",
          "พร้อมทีม Creative/Dev",
          "สkalable สำหรับ SMB → Enterprise",
        ].map((t, i) => (
          <span key={i} className={bullet}>
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            {t}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
