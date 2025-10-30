"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Zap,
  Cog,
  Search,
  ShieldCheck,
  Users,
  Clock,
} from "lucide-react";
import clsx from "clsx";

const fade = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.06 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Compare() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* BG Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[60rem] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="aurora inline-flex items-center gap-3 rounded-full px-4 py-2 ring-1 ring-white/10 bg-white/5">
            <span className="text-white/80">Other</span>
            <span className="grid place-items-center size-6 rounded-full bg-white/10 text-xs ring-1 ring-white/15">
              VS
            </span>
            <span className="font-semibold">NEO SPARK</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            ทำไมแบรนด์ถึงเลือกเรา
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            เทียบให้เห็นภาพชัด ๆ ระหว่างรูปแบบการทำงานทั่วไป กับกระบวนการที่วัดผลได้
            โปร่งใส และปลอดภัยของเรา
          </p>
        </div>

        {/* Compare Board */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* OTHER */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className={clsx(
              "rounded-3xl p-6 sm:p-8",
              "bg-gradient-to-b from-white/[0.04] to-transparent",
              "border border-white/10"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold">Other</h3>
              <span className="text-white/50 text-sm">ทั่วไป</span>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                "ค่าบริการสูงแต่ผลงานไม่ต่อเนื่อง",
                "ไม่มีระบบ AI / Workflow ช่วยลดงานซ้ำซ้อน",
                "วัดผลยาก ขาดแดชบอร์ดที่เข้าใจง่าย",
                "ความปลอดภัยต่ำ ต้องขอรหัส/สิทธิ์ที่ไม่จำเป็น",
                "ทีมซัพพอร์ตไม่ตรงเวลา ตอบช้า",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="size-5 mt-0.5 text-rose-400" />
                  <span className="text-white/80">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NEO SPARK */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className={clsx(
              "rounded-3xl p-6 sm:p-8",
              "aurora bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent",
              "border border-purple-400/25"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-8 rounded-xl bg-purple-500/10 ring-1 ring-purple-400/30">
                  <ShieldCheck className="size-4 text-purple-300" />
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">NEO SPARK</h3>
              </div>
              <span className="text-purple-300 text-sm">Recommended</span>
            </div>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 text-purple-400" />
                <span className="text-white/90">
                  <b className="mr-1">ไม่บังคับส่งรหัสหรือสิทธิ์เกินจำเป็น</b>
                  ใช้กระบวนการที่ปลอดภัยตามนโยบายแพลตฟอร์ม
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 text-purple-400" />
                <span className="text-white/90">
                  <Zap className="inline size-4 -mt-0.5 mr-1 opacity-80" />
                  <b>เวิร์กโฟลว์ + AI Automation</b> ครอบคลุมคอนเทนต์ โฆษณา
                  และรายงานผล
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 text-purple-400" />
                <span className="text-white/90">
                  <Search className="inline size-4 -mt-0.5 mr-1 opacity-80" />
                  <b>แดชบอร์ดวัดผล Realtime</b> ดู KPI/Conversion
                  รู้ปัญหาและแนวทางแก้ทันที
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 text-purple-400" />
                <span className="text-white/90">
                  <Cog className="inline size-4 -mt-0.5 mr-1 opacity-80" />
                  <b>เป็นพาร์ทเนอร์จริง</b> ไม่ทิ้งงานกลางคัน มี Milestone/Owner ชัดเจน
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 text-purple-400" />
                <span className="text-white/90">
                  <Users className="inline size-4 -mt-0.5 mr-1 opacity-80" />
                  <b>ทีมดูแลประจำแบรนด์</b> พร้อมคู่มือ/Checklist และ QA คงที่ทุกสัปดาห์
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5 text-purple-400" />
                <span className="text-white/90">
                  <Clock className="inline size-4 -mt-0.5 mr-1 opacity-80" />
                  <b>ซัพพอร์ตตาม SLA</b> ช่องทางสื่อสารเฉพาะ ตอบไว ไม่หาย
                </span>
              </li>
            </ul>

            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-purple-500/90 hover:bg-purple-500 text-black font-semibold px-5 py-3 transition-colors"
              >
                เริ่มต้นคุยงานกับทีม NEO SPARK
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
