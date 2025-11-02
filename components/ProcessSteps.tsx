"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Rocket, LucideIcon } from "lucide-react";
import React from "react";

export type ServiceStep = { title: string; desc: string };

type Props = {
  steps: ServiceStep[];
  /** เปลี่ยนไอคอนหัวข้อใหญ่ได้ (ไม่ใส่ก็ได้) */
  headingIcon?: LucideIcon;
  heading?: string;
  subheading?: string;
};

const card = {
  hidden: { y: 24, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.05 * i, duration: 0.35, ease: "easeOut" },
  }),
};

export default function ProcessSteps({
  steps,
  headingIcon: HeadingIcon = Rocket,
  heading = "Process",
  subheading = "ขั้นตอนการทำงาน",
}: Props) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-14">
      {/* heading */}
      <div className="mb-10 flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 ring-1 ring-violet-500/30">
          <HeadingIcon className="h-5 w-5 text-violet-200" />
        </span>
        <div>
          <p className="text-sm text-neutral-400">{heading}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {subheading}
          </h2>
        </div>
      </div>

      {/* steps */}
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, idx) => (
          <motion.li
            key={idx}
            custom={idx}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-5"
          >
            {/* glass glow */}
            <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                 style={{
                   background:
                     "radial-gradient(600px 200px at 10% 0%, rgba(98,20,217,.35), transparent 60%)",
                 }}
            />

            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 ring-1 ring-violet-500/30">
                <Sparkles className="h-4 w-4 text-violet-200 transition-transform duration-300 group-hover:-rotate-6" />
              </span>
              <span className="text-sm font-medium text-neutral-300">
                ขั้นตอน {idx + 1}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-1 text-sm leading-6 text-neutral-300/85">
              {s.desc}
            </p>

            <div className="mt-4 flex items-center gap-2 text-violet-300/90">
              <CheckCircle2 className="h-4 w-4 animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs">พร้อมอัปเดตสถานะงานทุกขั้น</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
