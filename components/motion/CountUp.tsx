"use client";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ to, duration = 1.2, prefix="", suffix="", className="" }:{
  to:number; duration?:number; prefix?:string; suffix?:string; className?:string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0%" });
  const mv = useMotionValue(0);
  const sv = useSpring(mv, { stiffness: 90, damping: 16, mass: .25 });
  const [val, setVal] = useState(0);
  useEffect(() => { if (inView) mv.set(to); }, [inView, mv, to]);
  useEffect(() => sv.on("change", v => setVal(Math.round(v))), [sv]);
  return <motion.span ref={ref} className={className}>{prefix}{val.toLocaleString()}{suffix}</motion.span>;
}
