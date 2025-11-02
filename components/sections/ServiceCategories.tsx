"use client";

import { useMemo } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  PenTool, LayoutGrid, Globe, Ruler, Package, BarChart3,
  Smartphone, Mail, Box, Share2, Circle
} from "lucide-react";

const FallbackIcon: LucideIcon = Circle;

type Cat = {
  id: number;
  label: string;
  icon?: LucideIcon;
  slug: string;
};

const CATEGORIES: Cat[] = [
  { id: 1, label: "Logos",            icon: PenTool,    slug: "logos" },
  { id: 2, label: "Landing Pages",    icon: LayoutGrid, slug: "landing-pages" },
  { id: 3, label: "Websites",         icon: Globe,      slug: "websites" },
  { id: 4, label: "Brand Guidelines", icon: Ruler,      slug: "brand-guidelines" },
  { id: 5, label: "Digital Products", icon: Package,    slug: "digital-products" },
  { id: 6, label: "Pitch Decks",      icon: BarChart3,  slug: "pitch-decks" },
  { id: 7, label: "Mobile Apps",      icon: Smartphone, slug: "mobile-apps" },
  { id: 8, label: "Email Design",     icon: Mail,       slug: "email-design" },
  { id: 9, label: "Product Design",   icon: Box,        slug: "product-design" }, // <= เปลี่ยนจาก Cube เป็น Box
  { id: 10,label: "Social Media",     icon: Share2,     slug: "social-media" },
];

function Pill({ item }: { item: Cat }) {
  const Icon = (item.icon ?? FallbackIcon) as LucideIcon;
  return (
    <Link
      href={`/services/${item.slug}`}
      className="group relative inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-neutral-900/60 px-4 backdrop-blur-md ring-1 ring-white/5 transition-colors hover:border-violet-400/20 hover:ring-violet-500/30"
      style={{ boxShadow: "0 1px 0 0 rgba(255,255,255,.06) inset, 0 8px 24px -12px rgba(98,20,217,.25)" }}
    >
      <span className="flex h-5 w-5 items-center justify-center">
        <Icon className="h-4 w-4 text-violet-300 transition-transform duration-500 group-hover:-translate-y-[1px] group-hover:rotate-3 group-hover:text-violet-200" />
      </span>
      <span className="select-none text-sm text-neutral-200 group-hover:text-white">
        {item.label}
      </span>
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(120px_120px_at_0%_0%,rgba(98,20,217,.18),transparent_60%),radial-gradient(120px_120px_at_100%_100%,rgba(147,51,234,.14),transparent_60%)] transition-transform duration-500 group-hover:scale-105" />
    </Link>
  );
}

function MarqueeRow({
  items, direction = "left", speed = 48,
}: { items: Cat[]; direction?: "left" | "right"; speed?: number }) {
  const loopItems = useMemo(() => [...items, ...items], [items]);
  const controls = useAnimationControls();
  const approxItemWidth = 188;
  const distance = approxItemWidth * items.length;

  const animate = () =>
    controls.start({
      x: direction === "left" ? -distance : 0,
      transition: { duration: distance / speed, ease: "linear", repeat: Infinity, repeatType: "loop" },
    });

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      onMouseEnter={() => controls.stop()}
      onMouseLeave={animate}
    >
      <motion.div
        className="flex w-max items-center gap-3 md:gap-4"
        initial={{ x: direction === "left" ? 0 : -distance }}
        animate={controls}
        onUpdate={(latest) => {
          const x = (latest as any).x as number;
          if (direction === "left" && x <= -distance) controls.set({ x: 0 });
          if (direction === "right" && x >= 0) controls.set({ x: -distance });
        }}
        onAnimationComplete={animate}
      >
        {loopItems.map((it, i) => <Pill key={`${it.id}-${i}`} item={it} />)}
      </motion.div>
    </div>
  );
}

export default function ServiceCategories() {
  const top = CATEGORIES.slice(0, 6);
  const bottom = CATEGORIES.slice(4).reverse();
  return (
    <section id="categories" className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-8 text-center">
        <p className="mx-auto inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wider text-neutral-200/80">Categories</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          หมวดงานของ <span className="italic text-violet-300">NEO SPARK</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-300/80">เลื่อนอัตโนมัติ 2 ทิศทาง (หยุดเมื่อโฮเวอร์) คลิกเพื่อดูขั้นตอน + ผลงาน</p>
      </div>
      <div className="space-y-5">
        <MarqueeRow items={top} direction="left" />
        <MarqueeRow items={bottom} direction="right" />
      </div>
    </section>
  );
}
