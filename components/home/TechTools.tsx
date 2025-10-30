// components/home/TechTool.tsx
"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  BarChart3,
  Megaphone,
  MessageSquare,
  ServerCog,
  Sparkles,
} from "lucide-react";

/**
 * Tech & Tool – กลุ่มเครื่องมือที่เราใช้งานจริง
 * ดีไซน์: หัวข้อกึ่งกลาง, การ์ดโปร ๆ, glow เบา ๆ, hover ยกนิด ๆ
 * โทน/interaction ไปทิศทางเดียวกับ WhyUs
 */

// ------------------------------
// ข้อมูลเครื่องมือ (แบ่งหมวด)
// ------------------------------
type Tool = { name: string; icon: React.ElementType };

const TOOLSETS: { title: string; icon: React.ElementType; items: Tool[] }[] = [
  {
    title: "Design / Motion",
    icon: Palette,
    items: [
      { name: "Figma", icon: Sparkles },
      { name: "Photoshop", icon: Sparkles },
      { name: "Illustrator", icon: Sparkles },
      { name: "After Effects", icon: Sparkles },
      { name: "Premiere Pro", icon: Sparkles },
      { name: "Blender", icon: Sparkles },
    ],
  },
  {
    title: "Web / Front-end",
    icon: Code2,
    items: [
      { name: "Next.js", icon: Sparkles },
      { name: "React", icon: Sparkles },
      { name: "Tailwind CSS", icon: Sparkles },
      { name: "TypeScript", icon: Sparkles },
      { name: "Framer Motion", icon: Sparkles },
      { name: "Vercel", icon: Sparkles },
    ],
  },
  {
    title: "Analytics / Data",
    icon: BarChart3,
    items: [
      { name: "GA4", icon: Sparkles },
      { name: "Looker Studio", icon: Sparkles },
      { name: "GTM", icon: Sparkles },
      { name: "Search Console", icon: Sparkles },
      { name: "Hotjar", icon: Sparkles },
      { name: "Meta Pixel", icon: Sparkles },
    ],
  },
  {
    title: "Ads / Performance",
    icon: Megaphone,
    items: [
      { name: "Google Ads", icon: Sparkles },
      { name: "Facebook Ads", icon: Sparkles },
      { name: "TikTok Ads", icon: Sparkles },
      { name: "YouTube Ads", icon: Sparkles },
      { name: "LINE Ads", icon: Sparkles },
      { name: "Programmatic", icon: Sparkles },
    ],
  },
  {
    title: "CRM / Messaging",
    icon: MessageSquare,
    items: [
      { name: "LINE OA", icon: Sparkles },
      { name: "ManyChat", icon: Sparkles },
      { name: "Zalo/WA", icon: Sparkles },
      { name: "Klaviyo", icon: Sparkles },
      { name: "Mailchimp", icon: Sparkles },
      { name: "Zendesk", icon: Sparkles },
    ],
  },
  {
    title: "Infra / Back-office",
    icon: ServerCog,
    items: [
      { name: "Notion", icon: Sparkles },
      { name: "Slack", icon: Sparkles },
      { name: "GitHub", icon: Sparkles },
      { name: "Supabase", icon: Sparkles },
      { name: "Stripe", icon: Sparkles },
      { name: "Cloudflare", icon: Sparkles },
    ],
  },
];

// ------------------------------
// UI
// ------------------------------
export default function TechTool() {
  return (
    <section id="tools" className="relative py-16 sm:py-20">
      {/* เบคกราวด์ไลท์วงกลมบาง ๆ ให้ภาพรวมดูหรูขึ้น */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-500/10 via-violet-500/10 to-transparent blur-3xl" />
      </div>

      {/* Container กว้างพิเศษให้บาลานซ์กับหน้า */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* หัวข้อกึ่งกลาง */}
        <div className="mb-10 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles size={14} className="text-purple-300" />
            <span>Tech & Tool</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            เครื่องมือที่เราใช้ทำงานจริง
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            ครอบคลุมการออกแบบ เว็บไซต์ แอนะลิติกส์ โฆษณา CRM และโครงสร้างพื้นฐาน
            ทั้งหมดเชื่อมต่อกันเป็นระบบ เพื่อผลลัพธ์ที่วัดผลได้จริง
          </p>
        </div>

        {/* กริดการ์ด */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.07 } },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TOOLSETS.map((group) => (
            <motion.div
              key={group.title}
              variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[.06]"
            >
              {/* แสงไล่สีมุมการ์ด (glow เบา ๆ) */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-violet-500/10 blur-2xl"
              />

              {/* เฮดเดอร์การ์ด */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-violet-100 ring-1 ring-inset ring-white/10">
                    <group.icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold sm:text-lg">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* รายการเครื่องมือแบบ badge grid */}
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {group.items.map((tool) => (
                  <li key={tool.name}>
                    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.045] px-3 py-2 text-sm text-white/85 shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:border-white/20 hover:bg-white/[.07] hover:shadow-[0_8px_24px_-12px_rgba(118,69,217,.35)]">
                      <tool.icon size={14} className="shrink-0 text-violet-300" />
                      <span className="truncate">{tool.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
