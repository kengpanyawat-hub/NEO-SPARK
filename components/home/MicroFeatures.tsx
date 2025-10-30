"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Rocket,
  MessagesSquare,
  Megaphone,
  Sparkles,
  Clock3,
} from "lucide-react";
import clsx from "clsx";

const features = [
  {
    icon: BarChart3,
    title: "วิเคราะห์ทราฟฟิกเว็บไซต์",
    desc: "เช็กแหล่งที่มา ประเมินประสิทธิภาพแคมเปญ ปรับปรุงคอนเวอร์ชัน",
  },
  {
    icon: Rocket,
    title: "เว็บกระจายสินค้า",
    desc: "หน้า Landing/Bundle พร้อมปุ่ม CTA ชัดเจน ช่วยเพิ่มยอดคลิก",
  },
  {
    icon: MessagesSquare,
    title: "ทักคอมเมนต์ 24 ชั่วโมง",
    desc: "บอทตอบแชต/คอมเมนต์ อัปเดตสถานะอัตโนมัติ ลดงานแอดมิน",
  },
  {
    icon: Megaphone,
    title: "ระบบยิงโฆษณา",
    desc: "ตั้งค่า Media Plan, Creative Set และ Optimize รายวัน ครบจบ",
  },
  {
    icon: Sparkles,
    title: "Seeding เว็บไซต์/รีวิว",
    desc: "ทำ SEO Off-page อย่างปลอดภัย เพิ่ม E-E-A-T อย่างค่อยเป็นค่อยไป",
  },
  {
    icon: Clock3,
    title: "ดูแลเพจ/เว็บไซต์รายเดือน",
    desc: "อัปเดตคอนเทนต์ รายงานผล สรุป KPI และข้อเสนอแนะทุกสัปดาห์",
  },
];

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.05 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function MicroFeatures() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="shine inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs sm:text-sm text-white/70">
          Features
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          ฟีเจอร์ย่อยที่ลูกค้านิยมเลือกใช้บริการ
        </h2>
        <p className="mt-3 text-white/70 max-w-3xl mx-auto">
          เสริมความครบเครื่องให้กลยุทธ์ดิจิทัล — บริการเสริมที่ช่วยเร่งผลลัพธ์
          ลดงานซ้ำซ้อน และยกระดับภาพลักษณ์แบรนด์ให้ดูมืออาชีพ
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            className={clsx(
              "aurora group relative rounded-2xl border border-white/10",
              "bg-gradient-to-b from-white/[0.04] to-transparent",
              "p-6 sm:p-7 hover:border-white/20 hover:from-white/[0.06] transition-colors"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-xl bg-violet-500/10 ring-1 ring-violet-400/30 grid place-items-center group-hover:bg-violet-500/20 transition-colors">
                <f.icon className="size-5 text-violet-300" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
            </div>
            <p className="mt-3 text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
