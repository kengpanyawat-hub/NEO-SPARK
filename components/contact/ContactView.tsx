"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Facebook as Fb,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* -------------------- site info -------------------- */
const site = {
  phone: "0615522545",
  email: "neo.spark@gmail.com",
  address: "Bangkok, Thailand",
  lineOA: "https://lin.ee/pORMgWT",
  facebook: "https://facebook.com/neosparkagency",
  instagram: "https://instagram.com/neosparkagency",
  youtube: "https://youtube.com/@neosparkagency",
  tiktok: "https://tiktok.com/@neosparkagency",
  twitter: "https://x.com/neosparkagency",
  website: "https://www.neo-spark.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.726705194833!2d100.529611!3d13.736717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992c3a4c1a0f%3A0x8bafc67e0e2f0a15!2zQmFuZ2tvaywgVGhhaWxhbmQ!5e0!3m2!1sth!2sth!4v1700000000000",
};

/* -------------------- animations -------------------- */
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.06 * i, duration: 0.45, ease: "easeOut" },
  }),
};

/* ====================================================
   PAGE
==================================================== */
export default function ContactView() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.violet.500/.25),transparent_60%)] blur-3xl" />
        <div className="absolute right-10 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.500/.18),transparent_60%)] blur-2xl" />
      </div>

      <div className="container-xl py-14 md:py-18">
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70 backdrop-blur">
            <MessageCircle size={14} className="text-neo-violet" />
            ติดต่อ / ประเมินราคา / นัดเริ่มงาน
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            ติดต่อ <span className="text-neo-violet">NEO SPARK AGENCY</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            คุยโจทย์ • ประเมินงบ • เริ่มงานไว — ช่องทางหลัก โทร / LINE OA /
            Facebook พร้อมทีมตอบไวในเวลาทำการ
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/60">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <ShieldCheck size={14} className="text-violet-300" />
              ข้อมูลปลอดภัย
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Sparkles size={14} className="text-violet-300" />
              ตอบไวในเวลาทำการ
            </span>
          </div>
        </motion.header>

        {/* Quick contact */}
        <div className="grid gap-6 md:grid-cols-3">
          <ContactCard
            i={0}
            icon={<Phone className="h-5 w-5 text-violet-300" />}
            title="โทรปรึกษา/สอบถาม"
            body={
              <>
                <p className="mt-3 text-lg">
                  <a className="link" href={"tel:" + site.phone}>
                    {site.phone}
                  </a>
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
                  <Clock size={14} /> จ.-ศ. 10:00–18:00 น.
                </p>
              </>
            }
          />

          <ContactCard
            i={1}
            icon={<MessageCircle className="h-5 w-5 text-violet-300" />}
            title="LINE OA"
            body={
              <>
                <p className="mt-4">
                  <a
                    className="btn-primary inline-flex items-center gap-2"
                    href={site.lineOA}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ทักหาเราใน LINE
                    <Send size={16} />
                  </a>
                </p>
                <p className="mt-4 text-sm text-white/60">
                  ปรึกษาฟรี • ส่งบรีฟ/ไฟล์ตัวอย่างได้รวดเร็ว
                </p>
              </>
            }
          />

          <ContactCard
            i={2}
            icon={<Fb className="h-5 w-5 text-violet-300" />}
            title="Facebook"
            body={
              <>
                <p className="mt-4">
                  <a
                    className="btn-ghost inline-flex items-center gap-2"
                    href={site.facebook}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    เปิดแชท Facebook
                    <Send size={16} />
                  </a>
                </p>
                <p className="mt-4 text-sm text-white/60">
                  ติดตามอัปเดตผลงานและบทความใหม่
                </p>
              </>
            }
          />
        </div>

        {/* Form + Map */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* mail/form */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={card}
            className="aurora rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold">อีเมล & แบบฟอร์ม</h2>
            <p className="mt-2 text-white/80">
              อีเมล:{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-5 grid gap-4 md:grid-cols-2"
            >
              <FloatInput name="name" label="ชื่อของคุณ *" required />
              <FloatInput name="phone" label="เบอร์โทร *" required />

              <FloatSelect
                name="service"
                label="บริการที่สนใจ"
                required
                options={[
                  "เว็บไซต์ & ระบบออนไลน์",
                  "ออกแบบแบรนด์ & กราฟิก",
                  "โมชัน/วิดีโอ (ตัดต่อ/ถ่ายทำ)",
                  "โฆษณาออนไลน์ & การตลาดดิจิทัล",
                  "งานอีเวนต์/โปรดักชัน",
                  "ดูแลรายเดือน/รายครั้ง",
                  "CRM/Chatbot/Automation",
                  "Consult/Workshop",
                  "อื่น ๆ (โปรดระบุในรายละเอียด)",
                ]}
                className="md:col-span-2"
              />

              <FloatInput name="subject" label="หัวข้อ" className="md:col-span-2" />
              <FloatTextArea
                name="message"
                label="รายละเอียดงาน / งบประมาณโดยประมาณ"
                rows={6}
                className="md:col-span-2"
              />

              <button
                className="btn-primary md:col-span-2 inline-flex items-center justify-center gap-2"
                type="submit"
              >
                ส่งอีเมล <Mail size={16} />
              </button>
            </form>

            <p className="mt-3 text-xs text-white/50">
              * หากต้องการเก็บลงฐานข้อมูลและส่งเมลอัตโนมัติ
              แนะนำสร้าง API Route แล้วโพสต์ฟอร์มไปยัง API ดังกล่าว
            </p>
          </motion.section>

          {/* Office / map */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={card}
            className="aurora flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold">ที่อยู่ / สถานที่นัดคุย</h2>
              <p className="mt-2 flex items-start gap-2 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                <span>
                  {site.address}{" "}
                  <span className="text-white/50">(นัดหมายล่วงหน้า)</span>
                </span>
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={site.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <Globe size={16} /> Website
                </a>
                <a
                  href={site.lineOA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} /> LINE OA
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <Fb size={16} /> Facebook
                </a>
              </div>
            </div>

            <div className="relative mt-auto h-72 w-full overflow-hidden rounded-t-2xl border-t border-white/10 lg:h-full lg:min-h-[22rem]">
              <iframe
                title="map"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                src={site.mapEmbed}
              />
            </div>
          </motion.section>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.lineOA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200 backdrop-blur transition hover:bg-violet-500/20"
          >
            <MessageCircle size={16} />
            เริ่มคุยงานผ่าน LINE — ตอบไวในเวลาทำการ
            <Send size={15} className="transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ====================================================
   Components
==================================================== */

function ContactCard({
  i,
  icon,
  title,
  body,
}: {
  i: number;
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <motion.article
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={card}
      className="aurora group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-neo-violet/30 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.25)]"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {body}
    </motion.article>
  );
}

/* ---------- Float Input ---------- */
function FloatInput({
  name,
  label,
  className,
  required,
}: {
  name: string;
  label: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`group relative ${className ?? ""}`}>
      <input
        name={name}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none ring-0 transition focus:border-neo-violet/60"
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/40 px-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-white/50 peer-focus:-top-2 peer-focus:bg-black/50 peer-focus:text-white/70">
        {label}
      </span>
    </label>
  );
}

/* ---------- Float TextArea ---------- */
function FloatTextArea({
  name,
  label,
  rows = 5,
  className,
}: {
  name: string;
  label: string;
  rows?: number;
  className?: string;
}) {
  return (
    <label className={`group relative ${className ?? ""}`}>
      <textarea
        name={name}
        rows={rows}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/5 p-3 outline-none focus:border-neo-violet/60"
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/40 px-2 text-xs text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-white/50 peer-focus:-top-2 peer-focus:bg-black/50 peer-focus:text-white/70">
        {label}
      </span>
    </label>
  );
}

/* ---------- Float Select (native & robust) ---------- */
function FloatSelect({
  name,
  label,
  options,
  className,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`group relative ${className ?? ""}`}>
      <select
        name={name}
        defaultValue=""
        required={required}
        className="peer w-full appearance-none rounded-xl border border-white/10 bg-white/5 p-3 pr-10 text-white/90 outline-none transition focus:border-neo-violet/60"
      >
        <option value="" disabled>
          เลือกบริการ
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0b0b0c] text-white">
            {o}
          </option>
        ))}
      </select>
      {/* label */}
      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/40 px-2 text-xs text-white/70 transition-all peer-focus:-top-2 peer-focus:bg-black/50 peer-focus:text-white/70 peer-[&:not(:focus)]:peer-placeholder-shown:top-3 peer-[&:not(:focus)]:peer-placeholder-shown:bg-transparent peer-[&:not(:focus)]:peer-placeholder-shown:text-white/50">
        {label}
        {required ? " *" : ""}
      </span>
      {/* caret */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
        ▾
      </span>
    </label>
  );
}
