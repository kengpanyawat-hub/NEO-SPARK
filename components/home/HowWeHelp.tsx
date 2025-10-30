"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  GaugeCircle,
  Workflow,
  Bot,
  Users2,
  Database,
  BrainCircuit,
  Headphones,
} from "lucide-react";
import clsx from "clsx";

type Item = { icon: any; title: string; desc: string };

const items: Item[] = [
  {
    icon: Target,
    title: "วิเคราะห์กลุ่มเป้าหมาย",
    desc: "กำหนด Persona/Jobs-to-Be-Done วาง Funnel และ Value Prop ให้ตรงจุด",
  },
  {
    icon: Workflow,
    title: "แผนงานชัดเจน ไม่ต้องปิดกะทันหัน",
    desc: "Roadmap รายสัปดาห์ พร้อม Milestone/Owner/Deadline โปร่งใส",
  },
  {
    icon: ShieldCheck,
    title: "ความปลอดภัยสูงสุด",
    desc: "ปฏิบัติตามนโยบายแพลตฟอร์ม, GA4 + Consent Mode, PII-safe",
  },
  {
    icon: GaugeCircle,
    title: "ตรวจวัดและรายงานผล",
    desc: "แดชบอร์ด Realtime, Weekly Recap, ข้อเสนอแนะ Actionable",
  },
  {
    icon: Bot,
    title: "เวิร์กโฟลว์ช่วยด้วย AI",
    desc: "ใช้ AI สร้าง/คัดกรองไอเดีย คิวเรตคอนเทนต์ และช่วย QA แบบรวดเร็ว",
  },
  {
    icon: Users2,
    title: "ระบบจัดการลูกค้า",
    desc: "เก็บ Lead/CRM, Tag พฤติกรรม, อัปเดตสถานะงานแบบเดียวกับทีม",
  },
  {
    icon: Database,
    title: "เข้าถึงข้อมูลย้อนหลังได้ง่าย",
    desc: "คลังงาน/ไฟล์/รายงานอยู่ที่เดียว ค้นหาเร็ว ไม่ต้องไล่แชต",
  },
  {
    icon: BrainCircuit,
    title: "สเกลแคมเปญได้ไว",
    desc: "ชุดโครงสร้างโฆษณา + Creative System ทำซ้ำได้และขยายได้",
  },
  {
    icon: Headphones,
    title: "ทีมดูแลประจำแบรนด์",
    desc: "ช่องทางสื่อสารเฉพาะ ตอบไว แก้ปัญหาตรงจุด มีคู่มือ/Checklist ให้",
  },
];

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.45 },
  }),
};

export default function HowWeHelp() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="shine inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs sm:text-sm text-white/70">
          Services
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          เราจะช่วยคุณได้อย่างไร?
        </h2>
        <p className="mt-3 text-white/70 max-w-3xl mx-auto">
          โฟกัสผลลัพธ์ที่สำคัญต่อธุรกิจของคุณ
          ด้วยกระบวนการทำงานที่ตรวจวัดได้และยืดหยุ่นสูงของ NEO SPARK AGENCY
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            custom={i}
            variants={itemVar}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={clsx(
              "aurora rounded-2xl border border-white/10 p-6 sm:p-7",
              "bg-gradient-to-b from-white/[0.04] to-transparent hover:from-white/[0.06] hover:border-white/20 transition-colors"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="size-11 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 grid place-items-center">
                <it.icon className="size-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-white/70">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
