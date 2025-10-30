// components/home/WhyUs.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Shield, Zap, Wrench, Sparkles } from "lucide-react";

/**
 * บล็อก "ทำไมต้องเรา / จุดเด่น" (Why Us / Differentiators)
 * - แก้ไขรายการใน WHY_ITEMS ด้านล่างได้เลย
 * - แนะนำวางหลัง Services และก่อน Case Studies/Portfolio เพื่อปิดจุดกังวลก่อนโชว์งาน
 */

const WHY_ITEMS = [
  {
    icon: Rocket,
    title: "Speed-first Delivery",
    desc: "ไทม์ไลน์ชัดเจน อัปเดตสถานะงานทุกสัปดาห์ ส่งงานเร็วแต่ยังคุมคุณภาพ",
  },
  {
    icon: Sparkles,
    title: "Design + Motion พร้อม",
    desc: "ดีไซน์สวย พร้อม Motion/UI interaction ให้เว็บดูโปรและมีชีวิตชีวา",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    desc: "โครงสร้าง On-page, Core Web Vitals, Schema, Internal Link ครบ",
  },
  {
    icon: Wrench,
    title: "Stack ทันสมัย",
    desc: "Next.js / Vercel / Tailwind / GA4 / GTM / Ads Integration พร้อม",
  },
  {
    icon: CheckCircle2,
    title: "Full-funnel Marketing",
    desc: "วางระบบตั้งแต่ Awareness → Conversion → Remarketing → CRM",
  },
  {
    icon: Shield,
    title: "Security & Aftercare",
    desc: "SSL, Backup, WAF, PDPA-ready และมีแพ็กเกจดูแลองค์กรรายเดือน",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="container-xl py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="why-us-title" className="text-3xl sm:text-4xl font-bold">
          ทำไมต้อง <span className="gradient-text">NEO SPARK</span>
        </h2>
        <p className="mt-3 text-white/70">
          จุดเด่นที่ลูกค้าบอกต่อ — เร็ว โปร มีระบบ และผลลัพธ์วัดได้
        </p>
      </div>

      <div className="aurora mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WHY_ITEMS.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 backdrop-blur
                       hover:bg-white/[.05] hover:border-white/20 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/5">
                <item.icon className="size-6 opacity-90" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
