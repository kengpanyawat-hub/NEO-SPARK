// src/data/ai-tools.ts
import {
  Sparkles,
  Palette,
  Type as TypeIcon,
  PenTool,
  Megaphone,
  MonitorSmartphone,
  Lightbulb,
  Target,
  FileText,
  Mail,
  MessageCircle,
  LineChart,
  Globe,
  Rocket,
  Image as ImageIcon,
  NotebookPen,
  BadgeCheck,
  Variable,
  Workflow,
  Users,   // ✅ เพิ่ม
  Tag,     // ✅ เพิ่ม (ใช้ใน hashtag-bundle)
} from "lucide-react";

export type Tool = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags?: string[];
  icon?: any;
  demoUrl?: string;
};

export const CATEGORIES = [
  "การตลาดทั่วไป",
  "สร้างงานเขียน",
  "งานโฆษณา",
  "การทำคอนเทนท์",
  "โซเชียลมีเดีย",
  "อื่น ๆ",
] as const;

const mk = (
  id: string,
  title: string,
  description: string,
  category: typeof CATEGORIES[number],
  icon: any,
  demoUrl?: string,
  tags: string[] = []
): Tool => ({ id, title, description, category, icon, demoUrl, tags });

export const TOOLS: Tool[] = [
  // ===== การตลาดทั่วไป (10) =====
  mk("brand-tone", "แนะนำบุคลิก & โทนแบรนด์", "ได้โทนเสียงและบุคลิกแบรนด์เบื้องต้น", "การตลาดทั่วไป", Palette, "https://www.copy.ai/"),
  mk("usp-analyzer", "วิเคราะห์จุดขาย (USP)", "แตกต่างให้ปังด้วย USP ที่ชัดเจน", "การตลาดทั่วไป", Target, "https://www.copysmith.ai/"),
  mk("value-prop", "เขียน Value Proposition", "สรุปคุณค่าให้เข้าใจง่าย", "การตลาดทั่วไป", BadgeCheck, "https://www.jasper.ai/"),
  mk("audience-persona", "จับกลุ่มเป้าหมาย", "สร้าง Persona อย่างรวดเร็ว", "การตลาดทั่วไป", Users, "https://www.make.com/"),
  mk("market-research", "สรุป Insight ตลาด", "สแกนตลาดเบื้องต้นจากคีย์เวิร์ด", "การตลาดทั่วไป", LineChart, "https://trends.google.com"),
  mk("competitor-brief", "สรุปคู่แข่ง", "สรุปจุดแข็งจุดอ่อนของคู่แข่งหลัก", "การตลาดทั่วไป", Workflow, "https://www.perplexity.ai/"),
  mk("slogan-maker", "ตั้งสโลแกน", "ตั้งสโลแกนหลากสไตล์", "การตลาดทั่วไป", Sparkles, "https://www.namelix.com/"),
  mk("brand-story", "ร่าง Brand Story", "เล่าเรื่องแบรนด์ให้จับใจ", "การตลาดทั่วไป", NotebookPen, "https://notebooklm.google/"),
  mk("faq-builder", "สร้าง FAQ ธุรกิจ", "รวมคำถามพบบ่อยแนบหน้าเว็บ", "การตลาดทั่วไป", FileText, "https://gemini.google.com/"),
  mk("roadmap-90", "วาง Roadmap 90 วัน", "ลำดับแผนการตลาดแบบสั้นกระชับ", "การตลาดทั่วไป", Rocket, "https://www.trello.com/"),

  // ===== สร้างงานเขียน (10) =====
  mk("blog-seo", "เขียนบล็อกเชิง SEO", "หัวข้อ/โครงเรื่อง/Meta พร้อมใช้งาน", "สร้างงานเขียน", TypeIcon, "https://www.neuroflash.com/"),
  mk("landing-copy", "คอนเทนต์ Landing Page", "ส่วนหัว ► โซเชียลพรูฟ ► CTA ครบ", "สร้างงานเขียน", PenTool, "https://typedream.com/ai"),
  mk("email-writer", "Email/EDM Writer", "ร่างอีเมลขาย/ชวนเข้ากิจกรรม", "สร้างงานเขียน", Mail, "https://www.mailmeteor.com/"),
  mk("press-release", "ข่าวประชาสัมพันธ์", "PR ครบฟอร์แมต", "สร้างงานเขียน", FileText, "https://www.notion.so/"),
  mk("product-desc", "คำอธิบายสินค้า", "เขียนรายละเอียดสินค้าหลายโทน", "สร้างงานเขียน", Variable, "https://www.shopify.com/tools"),
  mk("ebook-outline", "โครงร่าง E-book", "ทำสารบัญ/หัวข้อย่อยเร็วมาก", "สร้างงานเขียน", NotebookPen, "https://docs.google.com/"),
  mk("howto-guide", "คู่มือ/How-to", "แปลงประเด็นเป็นคู่มือขั้นตอน", "สร้างงานเขียน", BadgeCheck, "https://www.docsify.js.org/"),
  mk("microcopy", "ไมโครคอปปี้", "ปุ่ม/ข้อความสั้น ๆ ให้คลิก", "สร้างงานเขียน", Sparkles, "https://www.buttonoptimizer.com/"),
  mk("terms-helper", "ร่างเงื่อนไข/ข้อกำหนด", "ร่างโครงสร้างปรับใช้ภายใน", "สร้างงานเขียน", FileText, "https://www.termly.io/"),
  mk("translate-proof", "แปล & เกลา", "ช่วยแปล/ปรับสำนวนหลายภาษา", "สร้างงานเขียน", Globe, "https://www.deepl.com/translator"),

  // ===== งานโฆษณา (10) =====
  mk("google-ads-headline", "หัวข้อโฆษณา Google Ads", "Headline/Description หลายเวอร์ชัน", "งานโฆษณา", Megaphone, "https://ads.google.com/home/tools/ads-editor/"),
  mk("fb-primary-text", "ข้อความหลัก Facebook Ads", "ข้อความยาว/สั้น พร้อม Hook", "งานโฆษณา", MessageCircle, "https://www.facebook.com/ads/library/"),
  mk("ab-test-ideas", "ไอเดีย A/B Test", "เสนอครีเอทีฟ/ตัวแปรที่ควรลอง", "งานโฆษณา", Variable, "https://www.adalysis.com/"),
  mk("ad-angles", "Ad Angles Builder", "มุมโฆษณาหลายแนวทาง", "งานโฆษณา", Lightbulb, "https://angles.framer.website/"),
  mk("keyword-expander", "ขยายคีย์เวิร์ด", "แตกคีย์เวิร์ดทำแคมเปญ", "งานโฆษณา", Target, "https://keywordtool.io/"),
  mk("hook-swipe", "Hook Swipefile", "รวม Hook ที่พิสูจน์แล้ว", "งานโฆษณา", Sparkles, "https://swipefile.com/"),
  mk("cta-matrix", "CTA Matrix", "วางแผน Call-to-Action", "งานโฆษณา", Rocket, "https://www.calltoidea.com/"),
  mk("ad-brief", "สรุปบรีฟโฆษณา", "แปลง requirement เป็นบรีฟสั้น", "งานโฆษณา", FileText, "https://docs.google.com/"),
  mk("ugc-script", "สคริปต์ UGC 60 วิ", "สคริปต์อินฟลูฯถ่ายเอง", "งานโฆษณา", NotebookPen, "https://scribehow.com/"),
  mk("remarketing-copy", "ข้อความรีมาร์เก็ต", "ข้อความกลับมาปิดการขาย", "งานโฆษณา", Megaphone, "https://www.klaviyo.com/"),

  // ===== การทำคอนเทนท์ (10) =====
  mk("calendar-30", "คอนเทนท์แผน 30 วัน", "ไอเดีย/ธีม/หัวข้อรายวัน", "การทำคอนเทนท์", NotebookPen, "https://www.contentcal.io/"),
  mk("content-pillar", "Content Pillars", "แตกเสาเนื้อหาให้ต่อยอดง่าย", "การทำคอนเทนท์", Workflow, "https://miro.com/app/"),
  mk("outline-video", "โครงวิดีโอสั้น", "Hook ► เนื้อหา ► CTA", "การทำคอนเทนท์", MonitorSmartphone, "https://clipchamp.com/"),
  mk("script-long", "สคริปต์ยาว 3-5 นาที", "วิดีโอ/พอดแคสต์", "การทำคอนเทนท์", PenTool, "https://podcast.adobe.com/"),
  mk("idea-generator", "ไอเดียคอนเทนท์เร็ว", "แตกหัวข้อจากคำเดียว", "การทำคอนเทนท์", Lightbulb, "https://answerthepublic.com/"),
  mk("content-brief", "บรีฟคอนเทนท์", "สรุปให้ทีมผลิตงาน", "การทำคอนเทนท์", FileText, "https://www.notion.so/"),
  mk("repurpose", "Repurpose Content", "แยกชิ้น/สรุป/ดัดแปลงอัตโนมัติ", "การทำคอนเทนท์", Variable, "https://www.pika.art/"),
  mk("thumbnail-ideas", "ไอเดียภาพปก", "แนวทาง/ข้อความบนปก", "การทำคอนเทนท์", ImageIcon, "https://www.canva.com/"),
  mk("title-score", "วัดคะแนนพาดหัว", "ทดสอบ CTR คร่าว ๆ", "การทำคอนเทนท์", LineChart, "https://coschedule.com/headline-analyzer"),
  mk("content-checklist", "เช็กลิสต์ก่อนโพสต์", "สิ่งที่ควรตรวจทุกครั้ง", "การทำคอนเทนท์", BadgeCheck, "https://www.checklist.design/"),

  // ===== โซเชียลมีเดีย (10) =====
  mk("caption-ig", "แคปชัน IG หลายสไตล์", "เลือกโทน/อีโมจิ/แฮชแท็ก", "โซเชียลมีเดีย", MessageCircle, "https://www.buffer.com/"),
  mk("thread-starter", "กระทู้/เธรดเปิดประเด็น", "ยาว/สั้น/ลิสต์หัวข้อ", "โซเชียลมีเดีย", TypeIcon, "https://www.typefully.com/"),
  mk("reels-hook", "Hook สำหรับ Reels/TikTok", "Hook 1 บรรทัดปัง ๆ", "โซเชียลมีเดีย", Sparkles, "https://www.tubics.com/"),
  mk("qa-comment", "ตอบคอมเมนต์แนวสุภาพ", "เทมเพลตตอบไว", "โซเชียลมีเดีย", MessageCircle, "https://www.zendesk.com/"),
  mk("post-ideas", "ไอเดียโพสต์รายสัปดาห์", "สรุป 7 โพสต์/อาทิตย์", "โซเชียลมีเดีย", NotebookPen, "https://www.hootsuite.com/"),
  mk("hashtag-bundle", "ชุดแฮชแท็ก", "แตกชุดแฮชแท็ก 3 ระดับ", "โซเชียลมีเดีย", Tag, "https://ritetag.com/"),
  mk("carousel-outline", "โครงสไลด์ Carousel", "Title ► Bullets ► CTA", "โซเชียลมีเดีย", MonitorSmartphone, "https://www.figma.com/"),
  mk("bio-writer", "Bio/หน้าโปรไฟล์", "แนะนำตัวแบบมืออาชีพ", "โซเชียลมีเดีย", FileText, "https://bio.link/"),
  mk("cta-comment", "CTA สำหรับคอมเมนต์", "ปิดท้ายชวนคุย/DM", "โซเชียลมีเดีย", MessageCircle, "https://manychat.com/"),
  mk("social-guideline", "แนวทางโทนช่อง", "กำหนดสไตล์ช่อง/ทีมนำไปใช้", "โซเชียลมีเดีย", Palette, "https://www.notion.so/"),

  // ===== อื่น ๆ (10) =====
  mk("prompt-helper", "Prompt ช่วยงาน", "เขียน Prompt ให้ได้ผล", "อื่น ๆ", Sparkles, "https://www.aiflow.site/"),
  mk("image-prompt", "เทมเพลตภาพ/ปก", "Prompt สำหรับสร้างภาพ/ปก", "อื่น ๆ", ImageIcon, "https://www.craiyon.com/"),
  mk("policy-draft", "ร่างนโยบายภายใน", "โครงเอกสารกฎระเบียบ", "อื่น ๆ", FileText, "https://www.google.com/docs/about/"),
  mk("meeting-minutes", "สรุปประชุม", "Bullet/Action Item อัตโนมัติ", "อื่น ๆ", NotebookPen, "https://otter.ai/"),
  mk("qa-knowledge", "ฐานความรู้ Q&A", "แปลงเนื้อหาเป็นถาม-ตอบ", "อื่น ๆ", BadgeCheck, "https://www.notion.so/"),
  mk("calc-kpi", "คำนวน KPI เบื้องต้น", "ปรับฟอร์ม KPI คร่าว ๆ", "อื่น ๆ", LineChart, "https://www.sheets.new/"),
  mk("flowchart", "ไดอะแกรม/Flow", "ลากวาดไอเดียไว", "อื่น ๆ", Workflow, "https://excalidraw.com/"),
  mk("brand-assets", "รายการทรัพย์สินแบรนด์", "ลิสต์โลโก้/ฟอนต์/โทนสี", "อื่น ๆ", Palette, "https://www.figma.com/"),
  mk("name-idea", "ตั้งชื่อแบรนด์/แคมเปญ", "ไอเดียชื่อหลายภาษา", "อื่น ๆ", Sparkles, "https://namelix.com/"),
  mk("policy-cookie", "นโยบายคุกกี้เบื้องต้น", "โครงสร้างเอกสารพร้อมปรับ", "อื่น ๆ", FileText, "https://www.cookiebot.com/"),
];

export const getToolById = (id: string) => TOOLS.find((t) => t.id === id);
export const getToolsByCategory = (cat: typeof CATEGORIES[number]) =>
  TOOLS.filter((t) => t.category === cat);
