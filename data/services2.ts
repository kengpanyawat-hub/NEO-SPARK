// data/services2.ts
import { Rocket, Globe, Monitor, PenTool, Megaphone, Smartphone, Layers, BookOpen, Palette,} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceStep = { title: string; desc: string };
export type WorkItem = { title: string; src?: string; image?: string; href?: string; tags?: string[] };

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  steps: ServiceStep[];
  works: WorkItem[];
};

/** ปรับรายการบริการให้เข้ากับเว็บ NEO SPARK */
export const SERVICES2: Service[] = [
  {
    slug: "logos",
    title: "Logo & Identity",
    subtitle: "ออกแบบโลโก้ + ระบบอัตลักษณ์ให้แบรนด์จดจำง่าย",
    description:
      "วิเคราะห์แก่นแบรนด์, moodboard, สเก็ตช์, refine, คู่มือใช้งานเบื้องต้น (mini brand guide) พร้อมไฟล์ใช้งานครบ",
    icon: PenTool,
    steps: [
      { title: "Discover", desc: "เวิร์กช็อป + ถอดโจทย์แบรนด์ / ตัวตน / กลุ่มเป้า" },
      { title: "Design", desc: "สำรวจทิศทาง + สเก็ตช์ + คัด concept + ปรับแก้" },
      { title: "Deliver", desc: "ส่งไฟล์ .SVG/.PDF/.PNG และ mini brand guide" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    subtitle: "หน้าเดียวปิดการขาย เร็ว แรง วัดผลได้",
    description:
      "ออกแบบ + พัฒนา Next.js/Tailwind + ติด Analytics/Pixel + ฟอร์มเก็บ lead + A/B test พื้นฐาน",
    icon: Rocket,
    steps: [
      { title: "Brief", desc: "กำหนดข้อเสนอ (Offer) + CTA + โครงเนื้อหา" },
      { title: "Build", desc: "ดีไซน์/โค้ด + Motion/Interaction ที่จำเป็น" },
      { title: "Measure", desc: "เชื่อม GA4/GTM + Event/Conversion" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "websites",
    title: "Websites",
    subtitle: "เว็บบริษัท/บริการ เน้นความเร็ว SEO และภาพลักษณ์",
    description:
      "Next.js 14 (App Router) + UI มินิมอลโปร + SEO meta/OG/sitemap/robots + a11y + Lighthouse ดี",
    icon: Globe,
    steps: [
      { title: "IA & Wireframe", desc: "ไล่ผังข้อมูล + โครงหน้าหลัก" },
      { title: "Design & Dev", desc: "UI เข้าธีม NEO SPARK + โค้ดคุณภาพ" },
      { title: "Launch", desc: "Deploy Vercel + ตรวจ Core Web Vitals" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "pitch-decks",
    title: "Pitch Decks",
    subtitle: "สไลด์นำเสนอ/ระดมทุนที่คมและน่าเชื่อถือ",
    description:
      "โครงเรื่อง (narrative) + เค้าโครงสไลด์ + ออกแบบกราฟ/ไอคอน + Export พร้อมส่ง",
    icon: Layers,
    steps: [
      { title: "Story", desc: "วางโครง/Flow/Key messages" },
      { title: "Design", desc: "ออกแบบเลย์เอาต์ กราฟ ฟิกเกอร์" },
      { title: "Polish", desc: "ปรับจูนให้คม เคลียร์ และทรงพลัง" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "social-media",
    title: "Social Media",
    subtitle: "ชุดเทมเพลต + คอนเทนต์กราฟิกพร้อมยิง",
    description:
      "ชุดเทมเพลต IG/FB/TikTok + guideline การใช้งาน + ไฟล์แก้ไขได้ + motion สั้น ๆ",
    icon: Megaphone,
    steps: [
      { title: "Plan", desc: "ธีม/หมวด/โทนภาพ/โพสต์ไทป์" },
      { title: "Design", desc: "ชุดเทมเพลต + ตัวอย่างโพสต์" },
      { title: "Handover", desc: "ไฟล์ต้นฉบับ + คู่มือใช้งาน" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App UI",
    subtitle: "ออกแบบ UI/UX แอป มืออาชีพพร้อม handoff",
    description:
      "โฟลว์หลัก + UI Kit + หน้าตัวอย่างครบ + handoff สำหรับ Dev (Figma specs)",
    icon: Smartphone,
    steps: [
      { title: "Flow", desc: "User flow + ใช้งานหลัก" },
      { title: "UI Kit", desc: "สี ฟอนต์ คอมโพเนนต์" },
      { title: "Screens", desc: "หน้าหลัก/รอง + prototype" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "brand-guidelines",
    title: "Brand Guidelines",
    subtitle: "คู่มือแบรนด์ครบ ใช้งานง่าย ไม่หลุดโทน",
    description:
      "โลโก้/สี/ฟอนต์/การใช้งาน/รูปภาพ/ตัวอย่างคอนเทนต์ + ไฟล์ PDF ส่งทีมได้ทันที",
    icon: BookOpen,
    steps: [
      { title: "Audit", desc: "รวบรวมสินทรัพย์แบรนด์ทั้งหมด" },
      { title: "Compose", desc: "จัดระเบียบกฎและตัวอย่างใช้งาน" },
      { title: "Publish", desc: "ส่งออกเป็น PDF/เว็บคู่มือ" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "product-design",
    title: "Digital Product Design",
    subtitle: "ออกแบบระบบ/แดชบอร์ด/เว็บแอปที่ใช้จริงลื่น",
    description:
      "UX research เบื้องต้น + โฟลว์ + ดีไซน์จอ + Interaction หลัก + handoff",
    icon: Monitor,
    steps: [
      { title: "Define", desc: "Use cases + success criteria" },
      { title: "Design", desc: "โฟลว์ + UI + Interaction" },
      { title: "Handoff", desc: "สเปค + assets + states" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    subtitle: "แพคสินค้า/เทมเพลต/คอร์ส/อีบุ๊กพร้อมขาย",
    description:
      "ภาพลักษณ์ + หน้าโปรดักต์ + mockups + ไฟล์ดิจิทัลพร้อมวางขาย",
    icon: Palette,
    steps: [
      { title: "Plan", desc: "แพ็คเกจ + โครงเนื้อหา/ไฟล์" },
      { title: "Design", desc: "ปก/ภาพโปรโมต/หน้าโปรดักต์" },
      { title: "Publish", desc: "ไฟล์ดาวน์โหลด + ระบบรับเงิน (ถ้าต้องการ)" },
    ],
    works: [
	  { src: "/portfolio/logos/neo-spark.jpg", title: "NEO SPARK" },
      { src: "/portfolio/logos/dot-draft.jpg", title: "Dot & Draft" },
      { src: "/portfolio/logos/fin-organizer.jpg", title: "Fin Organizer" },
	],
  },
];

/** ใช้ค้นหา service จาก slug */
export const getServiceBySlug = (slug: string) =>
  SERVICES2.find((s) => s.slug === slug);
