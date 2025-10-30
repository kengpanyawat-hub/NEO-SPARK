// components/SubHero.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/motion/CountUp";

export default function SubHero() {
  // ใช้ ref เพื่อตรวจว่าผู้ใช้เลื่อนถึง section หรือยัง
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative container-xl mt-10 mb-10 rounded-3xl border border-white/10 
      bg-gradient-to-r from-[#2A0F4A]/40 via-[#19072E]/40 to-[#0A0415]/40 p-6 md:p-10
      shadow-[0_0_40px_rgba(140,90,255,0.15)] overflow-hidden"
    >
      {/* เอฟเฟกต์ aurora background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-transparent blur-2xl" />

      {/* โครงกริด 3 คอลัมน์ */}
      <div className="relative grid gap-8 md:grid-cols-3 text-center">
        <StatCard
          isInView={isInView}
          to={7}
          suffix="+"
          label="ปีประสบการณ์"
          delay={0}
        />
        <StatCard
          isInView={isInView}
          to={350}
          suffix="+"
          label="โปรเจกต์สำเร็จ"
          delay={0.15}
        />
        <StatCard
          isInView={isInView}
          to={180}
          suffix="+"
          label="ลูกค้าที่ไว้วางใจ"
          delay={0.3}
        />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Sub Component: StatCard                           */
/* -------------------------------------------------------------------------- */

function StatCard({
  to,
  suffix,
  label,
  isInView,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  label: string;
  isInView: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      // เอฟเฟกต์เลื่อนขึ้น + เฟดอิน
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {isInView ? (
          <CountUp
            to={to}
            suffix={suffix}
            duration={1.8}
            className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
          />
        ) : (
          "0"
        )}
      </div>
      <p className="text-white/70 mt-1 text-base md:text-lg font-medium">
        {label}
      </p>
    </motion.div>
  );
}
