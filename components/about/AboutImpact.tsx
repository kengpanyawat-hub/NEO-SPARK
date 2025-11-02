// components/about/AboutImpact.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Logo = { src: string; alt: string };
type Props = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  logos?: Logo[];
  // images 4:3 แนะนำ 1200x900 หรือ 1600x1200
  leftImage?: string;
  rightImage?: string;
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutImpact({
  title = "ช่วยให้คุณสร้างผลลัพธ์",
  highlight = "ที่ยั่งยืน",
  subtitle = "เราไม่ได้สร้างแค่เว็บไซต์ — แต่เราสร้าง “ประสบการณ์ดิจิทัล” ที่เชื่อมต่อ ดึงดูด และสร้างผลลัพธ์ที่วัดได้จริงให้กับธุรกิจของคุณ",
  logos = [
    { src: "/partners/1.png", alt: "Partner 1" },
    { src: "/partners/5.png", alt: "Partner 2" },
    { src: "/partners/10.png", alt: "Partner 3" },
    { src: "/partners/16.png", alt: "Partner 4" },
    { src: "/partners/31.png", alt: "Partner 5" },
    { src: "/partners/34.png", alt: "Partner 6" },
  ],
  leftImage = "https://framerusercontent.com/images/0UnsiD4xsSSFWG5vPTlEif4OwH8.png?scale-down-to=512&width=2048&height=2048",
  rightImage = "https://framerusercontent.com/images/4Rn4yt0QSFXEAlJNPRqCgjDjBc0.png?scale-down-to=1024&width=1792&height=2688",
}: Props) {
  return (
    <section className="container-xl mt-16 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
      {/* Headline */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          {title} <span className="shine font-prompt">{highlight}</span> บนโลกออนไลน์.
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-white/75">{subtitle}</p>

        {/* logos */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            ผลงานของเราได้รับการนำเสนอในแบรนด์ชั้นนำต่อไปนี้:
          </p>
          <div className="mt-4 grid grid-cols-3 gap-6 md:grid-cols-6">
            {logos.map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3"
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={160}
                  height={48}
                  className="h-8 w-auto object-contain opacity-85"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Row 1: professional */}
      <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={leftImage}
              alt="Workspace"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5"
        >
          <h3 className="text-xl font-semibold">
            On a <span className="italic font-serif">professional</span> note
          </h3>
          <div className="space-y-4 text-white/80">
            <Block
              title="We’re passionate about digital excellence"
              desc="ทีมโฟกัสงานเว็บที่ทั้งสวยและทำงานเร็ว ใช้เทคนิคทันสมัยเพื่อยกระดับแบรนด์ของคุณ"
            />
            <Block
              title="Quality at the forefront"
              desc="พิถีพิถันตั้งแต่ดีเทลเล็ก ๆ ไปจนถึงภาพรวม ให้ผลลัพธ์ที่โดดเด่นและขับเคลื่อนธุรกิจ"
            />
            <Block
              title="Focus on measurable impact"
              desc="คิดเชิงกลยุทธ์และตั้ง KPI ชัดเจน เพื่อให้ทุกงานมีผลลัพธ์ที่วัดได้จริง"
            />
          </div>
        </motion.div>
      </div>

      {/* Row 2: personal (mirror) */}
      <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 space-y-5 md:order-1"
        >
          <h3 className="text-xl font-semibold">
            On a <span className="italic font-serif">personal</span> note
          </h3>
          <div className="space-y-4 text-white/80">
            <Block
              title="We work hard and have fun"
              desc="บรรยากาศทีมสนุก มีพลัง ครีเอตไอเดียได้ไวทั้งหน้าบอร์ดและหน้าโปรเจกต์"
            />
            <Block
              title="We’re a close-knit team"
              desc="คิดแบบพาร์ทเนอร์ ดูแลกันและกัน และดูแลงานคุณเหมือนเป็นโปรเจกต์ของเราเอง"
            />
            <Block
              title="Celebrating individuality"
              desc="ให้ทุกคนได้โชว์สิ่งที่เก่ง และเติมเต็มกันเพื่อผลลัพธ์ที่ดีที่สุด"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 relative overflow-hidden rounded-3xl border border-white/10 md:order-2"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={rightImage}
              alt="Team"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Block({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-base font-medium">{title}</div>
      <p className="mt-1 text-sm leading-6 text-white/70">{desc}</p>
    </div>
  );
}
