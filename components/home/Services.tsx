// components/home/Services.tsx
// ✅ วางทับได้ทั้งไฟล์: เพิ่ม motion/effect ให้การ์ดบริการ
// - Stagger reveal: การ์ดโผล่ไล่กันเมื่อเลื่อนถึง
// - Mouse glow: ไล่แสงตามตำแหน่งเมาส์บนการ์ด
// - Hover micro-interaction: ลอยนิด ๆ, ลูกศรเลื่อนนุ่ม ๆ
// - เข้ากับธีมดำ-ม่วงเดิมของโปรเจ็กต์

"use client";

import {
  Globe2,
  PenTool,
  Clapperboard,
  Megaphone,
  Presentation,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  href?: string; // ลิงก์ไปแพ็กเกจเฉพาะหมวด
};

/* ------------------------------- ข้อมูลบริการ ------------------------------ */
const SERVICES: Service[] = [
  {
    slug: "website",
    title: "รับทำเว็บไซต์",
    desc: "เว็บองค์กร/ขายของ/แลนด์ดิ้งเพจ โหลดไว-สวย-วัดผลได้",
    icon: <Globe2 size={22} />,
    href: "/services#website",
  },
  {
    slug: "design",
    title: "กราฟิกดีไซน์",
    desc: "โปสเตอร์ แบนเนอร์ โซเชียล คีย์วิชวล และ CI",
    icon: <PenTool size={22} />,
    href: "/services#design",
  },
  {
    slug: "motion",
    title: "โมชัน & วิดีโอ",
    desc: "โมชั่นกราฟิก ตัดต่อ ถ่ายทำ ครบวงจร",
    icon: <Clapperboard size={22} />,
    href: "/services#motion",
  },
  {
    slug: "ads",
    title: "โฆษณาออนไลน์",
    desc: "วางแผน ยิงแอด ครอสแพลตฟอร์ม + วัดผลด้วย Analytics",
    icon: <Megaphone size={22} />,
    href: "/services#ads",
  },
  {
    slug: "event",
    title: "งานอีเวนต์",
    desc: "โปรดักชันครบ—ไฟ แสง เสียง จอ ทีมงานมืออาชีพ",
    icon: <Presentation size={22} />,
    href: "/services#event",
  },
  {
    slug: "retainer",
    title: "ดูแลรายเดือน",
    desc: "แพ็กเกจดูแลเว็บไซต์/คอนเทนต์/แอด แบบรายเดือน",
    icon: <LifeBuoy size={22} />,
    href: "/services#retainer",
  },
];

/* ------------------------------- UI ชิ้นส่วนย่อย ------------------------------- */
// ป้ายไอคอนแบบกลอสซี่+วงแหวน
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        relative grid h-12 w-12 place-items-center rounded-2xl text-white
        bg-[conic-gradient(from_210deg,theme(colors.purple.500),theme(colors.pink.500))]
        ring-1 ring-white/15 shadow-[0_0_24px_0_rgba(168,85,247,.25)]
        before:absolute before:inset-[2px] before:rounded-[14px] before:bg-[#0f0d13]/85 before:content-['']
      "
      aria-hidden
    >
      <div className="relative z-10 text-neo-violet">{children}</div>
    </div>
  );
}

/* -------------------------------- Motion variants ------------------------------- */
// คอนเทนเนอร์: แค่ไว้ทำ stagger
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};
// รายการ: โผล่เลื่อนขึ้นนิด ๆ + blur จางออก
const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)", scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  // ใช้ useInView เพื่อเริ่มเล่น stagger เมื่อสกอร์ลถึงกริด
  const rootRef = useRef<HTMLElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={rootRef} id="services" className="container-xl py-16 md:py-20">
      {/* หัวข้อ: fade-in นุ่ม ๆ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="shine text-3xl md:text-4xl font-extrabold">บริการของเรา</h2>
        <p className="text-white/70 mt-2">
          ครบจบในที่เดียว—เว็บไซต์ ดีไซน์ โมชัน โฆษณา อีเวนต์ และดูแลต่อเนื่อง
        </p>
      </motion.div>

      {/* กริดรายการ: เปิด stagger เมื่อมองเห็น */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="aurora grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
      </motion.div>

      {/* CTA รวมไปยังราคากลาง */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-center mt-10"
      >
        <Link
          href="/services#pricing"
          className="btn-primary inline-flex items-center gap-2 rounded-2xl px-5 py-3"
        >
          ดูแพ็กเกจทั้งหมด
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}

/* -------------------------------- การ์ดบริการ -------------------------------- */
// แยกเป็นคอมโพเนนต์เพื่อให้มี mouse glow ต่อการ์ด
function ServiceCard({ s }: { s: Service }) {
  return (
    <motion.article
      variants={item}
      className="
        group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] p-5
        transition will-change-transform hover:-translate-y-0.5 hover:border-neo-violet/50
      "
      // อัปเดตตำแหน่งเมาส์เป็น CSS variable --x/--y ให้วงกลม glow ตามตำแหน่ง
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--x", `${x}%`);
        el.style.setProperty("--y", `${y}%`);
      }}
    >
      {/* glow เบาๆ ที่พื้นหลังการ์ด (แสดงเมื่อ hover) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
                   group-hover:opacity-100"
        // ใช้ radial-gradient จุดศูนย์ตาม --x/--y ที่อัปเดตจาก onMouseMove
        style={{
          background:
            "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(139,92,246,.12), transparent 60%)",
        }}
      />

      <div className="flex items-start gap-4">
        <Badge>{s.icon}</Badge>
        <div>
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="mt-1 text-white/70 leading-relaxed">{s.desc}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        {/* เส้น gradient ไล่เฉดม่วง→ชมพู ให้ความรู้สึก flow */}
        <div className="h-px w-24 rounded-full bg-gradient-to-r from-neo-violet/40 to-neo-pink/40" />

        {/* ปุ่มเล็ก: ลูกศรเลื่อนนิด ๆ เมื่อ hover */}
        <Link
          href={s.href ?? `/services#${s.slug}`}
          className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1.5 text-sm
                     transition group-hover:bg-white/20"
        >
          <span className="relative">ดูแพ็กเกจ</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex"
          >
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}
