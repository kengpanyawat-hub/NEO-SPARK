// components/home/WhyUs.tsx
"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Zap,
  Shield,
  Wrench,
  Megaphone,
  Search,
  Camera,
  LineChart,
  type LucideIcon,
} from "lucide-react";

/** -----------------------------------------------------------
 * WHY US – NEO SPARK (เวอร์ชันไอคอนขยับ/แสงเรือง เหมือนเดโม)
 * - มีแอนิเมชัน 3 โหมด: floatGlow | bouncePulse | tinyOrbit
 * - มี "แม่เหล็ก" ตอนโฮเวอร์ (คอร์ซอร์ลากไอคอนตามเล็กน้อย)
 * - การ์ดมีกรอบไล่เฉด + inner glow + parallax เล็ก ๆ
 * ---------------------------------------------------------- */

type AnimMode = "floatGlow" | "bouncePulse" | "tinyOrbit";
type WhyItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  anim: AnimMode;
};

const ITEMS: WhyItem[] = [
  {
    icon: Rocket,
    title: "Speed-first Delivery",
    desc:
      "สโคปชัด ไทม์ไลน์ชัด อัปเดตสภานะทุกสัปดาห์ ส่งงานไวแต่คุมคุณภาพ—ถึงเป้าไว",
    anim: "tinyOrbit",
  },
  {
    icon: Sparkles,
    title: "Design + Motion ที่มีชีวิต",
    desc:
      "Micro-interaction / Parallax / Smooth reveal ให้เว็บดูพรีเมียมและเชื่อใจได้",
    anim: "tinyOrbit",
  },
  {
    icon: Wrench,
    title: "Modern Stack พร้อมต่อยอด",
    desc:
      "Next.js 14 • TypeScript • Tailwind • shadcn/ui • Framer Motion • Vercel",
    anim: "tinyOrbit",
  },
  {
    icon: Zap,
    title: "Performance & CWV",
    desc:
      "โหลดไว Lighthouse สวย Code-split, Image opt, SEO meta ครบ",
    anim: "tinyOrbit",
  },
  {
    icon: Search,
    title: "SEO & Content Foundation",
    desc:
      "On-page, Schema, Internal Link, Social preview + OG พร้อมขึ้นบทความ",
    anim: "tinyOrbit",
  },
  {
    icon: Megaphone,
    title: "Full-funnel Marketing",
    desc:
      "Awareness → Conversion → Remarketing พร้อมตั้งค่า Analytics/Pixel",
    anim: "tinyOrbit",
  },
  {
    icon: Camera,
    title: "Photo/Video & Social Assets",
    desc:
      "ทีมถ่ายทำ/ตัดต่อ ให้โทนภาพคงที่ ใช้ได้ทั้งเว็บ โพสต์ และแอด",
    anim: "tinyOrbit",
  },
  {
    icon: Shield,
    title: "Security & Aftercare",
    desc:
      "SSL, Backup, WAF, PDPA-ready, Uptime monitor + แพ็กเกจดูแลรายเดือน",
    anim: "tinyOrbit",
  },
  {
    icon: LineChart,
    title: "ผลลัพธ์วัดได้จริง",
    desc:
      "GA4/GTM Events, Conversion, Heatmap/Replay (ออปชัน) เพื่อปรับปรุงต่อ",
    anim: "tinyOrbit",
  },
];

/* ---------- Animated Icon (3 โหมด) ---------- */
function AnimatedIcon({
  Icon,
  mode = "floatGlow",
}: {
  Icon: LucideIcon;
  mode?: AnimMode;
}) {
  // magnet hover
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [ -24, 24 ], [ 6, -6 ]);
  const ry = useTransform(mx, [ -24, 24 ], [ -6, 6 ]);

  const common =
    "relative grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-md";

  const glow =
    "before:absolute before:inset-[-2px] before:rounded-2xl before:bg-[conic-gradient(var(--c1),transparent_30%,transparent_70%,var(--c2))] " +
    "before:opacity-60 before:blur before:-z-10";

  // ไฟล์นี้ใช้ CSS ตัวแปรสีผ่าน inline style เพื่อกินธีมม่วง/ฟ้า
  const style = { ["--c1" as any]: "#6d28d9", ["--c2" as any]: "#60a5fa" };

  const variants: Record<
    AnimMode,
    { animate: any; transition: any }
  > = {
    floatGlow: {
      animate: {
        y: [0, -6, 0],
        boxShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 28px rgba(109,40,217,.25)",
          "0 0 0 rgba(0,0,0,0)",
        ] as string[],
      },
      transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
    },
    bouncePulse: {
      animate: {
        scale: [1, 1.08, 1],
        filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"] as string[],
      },
      transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
    },
    tinyOrbit: {
      animate: { rotate: [0, 8, 0] },
      transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      style={{ rotateX: rx, rotateY: ry }}
      onMouseMove={(e) => {
        const el = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - (el.left + el.width / 2));
        my.set(e.clientY - (el.top + el.height / 2));
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={`${common} ${glow}`}
    >
      {/* วงโคจรเล็ก ๆ */}
      {mode === "tinyOrbit" && (
        <motion.span
          className="absolute size-16 rounded-full"
          style={{ border: "1px dashed rgba(255,255,255,.12)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <motion.span
            className="absolute right-[-3px] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-white/70"
            animate={{ y: [ -6, 6, -6 ] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.span>
      )}

      {/* แสงเนียนหลังไอคอน */}
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl blur-2xl"
        style={{
          background:
            "radial-gradient(120px 120px at 50% 30%, rgba(109,40,217,.35), rgba(96,165,250,.0))",
        }}
      />

      <motion.span
        {...variants[mode]}
        style={style}
        whileHover={{ scale: 1.06 }}
        className="relative grid size-12 place-items-center text-white"
      >
        <Icon className="size-6" />
      </motion.span>
    </motion.div>
  );
}

/* ---------- Card ---------- */
function WhyCard({ item, i }: { item: WhyItem; i: number }) {
  return (
    <motion.article
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-6 backdrop-blur
                 hover:bg-white/[.05] hover:border-white/20 transition-all"
    >
      {/* เส้นกรอบไล่เฉด */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
            style={{
              background:
                "linear-gradient(120deg, rgba(109,40,217,.25), rgba(96,165,250,.15) 40%, rgba(109,40,217,.25))",
              mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              padding: 1,
              boxSizing: "border-box",
            }}
      />

      <div className="flex items-start gap-4">
        <AnimatedIcon Icon={item.icon} mode={item.anim} />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-white/70">{item.desc}</p>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- Section ---------- */
export default function WhyUs() {
  return (
    <section id="why-us" className="container-xl py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          ทำไมต้อง <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">NEO SPARK</span>
        </h2>
        <p className="mt-3 text-white/70">
          จุดเด่นที่ลูกค้าบอกต่อ — เร็ว โปร มีระบบ และผลลัพธ์วัดได้
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it, i) => (
          <WhyCard key={it.title} item={it} i={i} />
        ))}
      </div>
    </section>
  );
}
