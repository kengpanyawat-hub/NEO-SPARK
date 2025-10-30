"use client";

import { Variants, motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

const base: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

type AsTag = keyof JSX.IntrinsicElements;

type RevealProps = {
  /** ระบุ tag ที่อยากให้ motion ครอบ เช่น 'div' | 'section' | 'p' | 'li' ฯลฯ */
  as?: AsTag;
  /** หน่วงเวลาเริ่มอนิเมชัน (วินาที) */
  delay?: number;
  /** ระยะเลื่อนแกน Y ตอนซ่อน (px) */
  y?: number;
  /** ให้เล่นครั้งเดียวเมื่อ scroll ถึง */
  once?: boolean;
  /** เผื่อส่ง className ต่อให้ tag */
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 26,
  as = "div",
  once = true,
  className,
}: PropsWithChildren<RevealProps>) {
  // ✅ แก้ชนิด: cast motion เป็น Record ก่อน แล้วค่อย index ด้วย 'as'
  const MotionMap = motion as unknown as Record<AsTag, any>;
  const Tag = MotionMap[as] ?? motion.div;

  const prefersReduce = useReducedMotion();
  const variants = prefersReduce ? {} : { hidden: { ...base.hidden, y }, visible: base.visible };

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
