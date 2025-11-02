'use client';

import React, { createElement } from 'react';
import { motion, type Variants } from 'framer-motion';

type RevealProps = React.PropsWithChildren<{
  /** เปลี่ยนแท็ก/คอมโพเนนต์ที่ใช้ เช่น 'section', 'li' หรือคอมโพเนนต์อื่น */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}> & React.HTMLAttributes<HTMLElement>;

export default function Reveal({
  as,
  delay = 0,
  duration = 0.6,
  className,
  viewportAmount = 0.2,
  children,
  ...rest
}: RevealProps) {
  // เลือกคอมโพเนนต์ Motion ตามที่ขอ (ค่าเริ่มต้น = motion.div)
  const Component: any = as ? motion(as as any) : motion.div;

  const variants: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration, delay } },
  };

  // เรนเดอร์ด้วย createElement แทน JSX เพื่อเลี่ยง parser งอแงกับ <Tag/>
  return createElement(
    Component,
    {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: viewportAmount },
      variants,
      className,
      ...rest,
    },
    children
  );
}
