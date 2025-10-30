"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";

type QAItem = { q: string; a: string };
type FAQGroup = { title: string; items: QAItem[] };

// ------------------------------------------------------
// ข้อมูล FAQ (เหมือนชุดก่อนหน้า แต่สรุปไว้ครบทุกหมวด)
// ------------------------------------------------------
const FAQ_GROUPS: FAQGroup[] = [
  {
    title: "เว็บไซต์ & ระบบออนไลน์",
    items: [
      { q: "ใช้เวลาในการทำเว็บไซต์กี่วัน?", a: "เว็บไซต์ทั่วไปใช้เวลา 10–21 วัน ขึ้นอยู่กับขอบเขตงานและความพร้อมของข้อมูล เช่น เนื้อหา รูปภาพ โลโก้ และโดเมน" },
      { q: "เว็บไซต์รองรับมือถือไหม?", a: "ทุกเว็บไซต์ออกแบบแบบ Responsive 100% รองรับทุกอุปกรณ์ มือถือ แท็บเล็ต และเดสก์ท็อป" },
      { q: "สามารถแก้ไขเนื้อหาเองได้ไหม?", a: "เลือกได้ทั้งแบบมี CMS เพื่ออัปเดตเอง หรือแบบ Static เพื่อความเร็วสูงสุด" },
      { q: "รองรับ SEO ไหม?", a: "รองรับ SEO ครบ มี meta tag, OG tag, sitemap, robots.txt และเชื่อม GA4 ได้ทันที" },
      { q: "ทำเว็บไซต์หลายภาษาได้ไหม?", a: "รองรับ i18n พร้อมโครงสร้าง URL ที่เหมาะกับ SEO สากล" },
      { q: "มีระบบร้านค้าและชำระเงินไหม?", a: "เชื่อมต่อ Omise, GB Prime Pay, PromptPay และ e-Commerce เต็มรูปแบบ" },
      { q: "หากมีโดเมนเดิม ใช้ต่อได้ไหม?", a: "ได้ เพียงเปลี่ยนค่า DNS หรือชี้โดเมน ไม่ต้องเสียใหม่" },
      { q: "หลังส่งมอบมีบริการดูแลไหม?", a: "มีแพ็กเกจดูแลรายเดือน/รายปี พร้อมอัปเดต Security และ Backup อัตโนมัติ" },
      { q: "เว็บไซต์โหลดเร็วไหม?", a: "ใช้ Next.js + Tailwind + Vercel ผ่าน CDN ทั่วโลก โหลดเร็วมาก" },
      { q: "เชื่อม CRM หรือ LINE OA ได้ไหม?", a: "เชื่อมต่อ CRM, Chatbot, LINE OA ได้ครบทั้งระบบ" },
    ],
  },
  {
    title: "โฆษณาออนไลน์ & การตลาดดิจิทัล",
    items: [
      { q: "ลงโฆษณาได้กี่แพลตฟอร์ม?", a: "ครบทุกแพลตฟอร์ม Facebook, Instagram, TikTok, YouTube, Google, LINE Ads Platform" },
      { q: "มีทีมวางแผนกลยุทธ์ไหม?", a: "มี Media Planner และ Performance Specialist วิเคราะห์กลุ่มเป้าหมายให้ก่อนยิงจริง" },
      { q: "ช่วยสร้าง Creative โฆษณาได้ไหม?", a: "เรามีทีมออกแบบ Graphic + Motion และ Copywriter มืออาชีพ" },
      { q: "รายงานผลโฆษณาได้อย่างไร?", a: "ส่ง Dashboard เรียลไทม์ หรือรายงาน PDF สรุป KPI/ROI/ROAS ทุกสัปดาห์" },
      { q: "มีบริการ Retarget หรือไม่?", a: "ติดตั้ง Pixel/CAPI เพื่อ Retarget ผู้ชมเก่าได้แม่นยำ" },
      { q: "มีการรับประกันผลไหม?", a: "รับประกันคุณภาพการจัดการและการวัดผล หากไม่ตรงเป้า มีปรับกลยุทธ์ฟรี" },
      { q: "เหมาะกับธุรกิจแบบไหน?", a: "เหมาะกับทุกขนาด ตั้งแต่ SME จนถึง Enterprise ที่ต้องการผลลัพธ์วัดได้" },
      { q: "ทำ Influencer หรือ Seeding ได้ไหม?", a: "มีบริการเลือก Influencer ตรงกลุ่ม พร้อมรายงานผลหลังจบแคมเปญ" },
      { q: "โฆษณาใช้ AI ช่วยวิเคราะห์ไหม?", a: "ใช้ AI ช่วยจัดงบและปรับ Target/Creative อัตโนมัติ เพิ่ม Efficiency" },
      { q: "ทำโฆษณาหลายภาษาได้ไหม?", a: "ได้ทั้งไทย อังกฤษ และภาษาอื่น พร้อมแปลคอนเทนต์และแคปชัน" },
    ],
  },
  {
    title: "โมชัน & วิดีโอ (ตัดต่อ / ถ่ายทำ)",
    items: [
      { q: "รับถ่ายทำวิดีโอประเภทไหน?", a: "รับทั้ง Video โปรโมชัน Reels/TikTok Ads วิดีโอรีวิว และ Corporate Video" },
      { q: "มีบริการเขียนสคริปต์ไหม?", a: "ทีมคอนเทนต์ช่วยเขียนสคริปต์และวางโครงเรื่องให้สอดคล้องกับแบรนด์" },
      { q: "ใช้อุปกรณ์ถ่ายทำระดับไหน?", a: "กล้อง 4K Full Frame พร้อม Lighting, Sound และ Gimbal มืออาชีพ" },
      { q: "มีบริการ Motion Graphic ไหม?", a: "มีทั้ง 2D/3D Motion, Logo Animation และ Explainer Video" },
      { q: "ระยะเวลาการตัดต่อเท่าไร?", a: "เฉลี่ย 3–7 วัน ขึ้นกับความยาวและรายละเอียดงาน" },
      { q: "มีบริการใส่เสียงพากย์ไหม?", a: "มีทีม Voice Over มืออาชีพ พร้อมเลือกโทนเสียงได้" },
      { q: "รับถ่ายนอกสถานที่ไหม?", a: "รับทั่วประเทศ รวมถึงงาน Event Outdoor และ On Site" },
      { q: "ทำ Short Form Content ไหม?", a: "มีบริการสร้างคลิปไวรัล Vertical: Reels/TikTok/Shorts ครบวงจร" },
      { q: "ลูกค้าต้องเตรียมอะไรบ้าง?", a: "บอกเป้าหมาย Mood & Tone และ Brand Reference ที่ชอบก็เริ่มได้" },
      { q: "ส่งไฟล์สุดท้ายในรูปแบบไหน?", a: "ส่ง MP4/MOV 4K พร้อม Thumbnail และไฟล์ซับ (SRT)" },
    ],
  },
  {
    title: "ออกแบบกราฟิก & แบรนด์ดิ้ง",
    items: [
      { q: "มีบริการออกแบบโลโก้ไหม?", a: "มีทั้ง Starter Logo, Brand Identity Set และ Corporate Branding" },
      { q: "ทำ Moodboard ให้ไหม?", a: "เราสร้าง Moodboard + ชุดสี เพื่อใช้ในทุกสื่อให้สอดคล้องกัน" },
      { q: "ออกแบบเทมเพลตโพสต์ได้ไหม?", a: "ออกแบบเทมเพลต Facebook/IG/TikTok พร้อมใช้งานใน Canva" },
      { q: "รับออกแบบ Packaging ไหม?", a: "ออกแบบกล่อง/ฉลาก + 3D Mockup พร้อมไฟล์พร้อมผลิต" },
      { q: "มี Brand Guideline ไหม?", a: "จัดทำคู่มือแบรนด์ PDF/Canva ให้ทีมใช้งานต่อได้" },
      { q: "ทำ Presentation/Proposal ได้ไหม?", a: "มีบริการออกแบบ Pitch Deck / Company Profile ครบชุด" },
      { q: "รับทำ Infographic ไหม?", a: "มีทีม Motion/Infographic เพื่อการสื่อสารออนไลน์" },
      { q: "รีแบรนด์เก่าได้ไหม?", a: "รีดีไซน์โลโก้ โทนสี และ Brand Tone ให้ทันสมัย" },
      { q: "ให้ไฟล์ต้นฉบับไหม?", a: "ให้ไฟล์ AI/PSD/Canva ครบ พร้อมสิทธิ์ใช้งานเต็ม" },
      { q: "ใช้เวลาทำนานไหม?", a: "กราฟิกเฉลี่ย 3–7 วัน ขึ้นกับความซับซ้อน" },
    ],
  },
  {
    title: "งานอีเวนต์ & โปรดักชัน",
    items: [
      { q: "รับจัดอีเวนต์อะไรบ้าง?", a: "งานเปิดตัวสินค้า คอนเสิร์ต สัมมนา และงานบริษัทครบวงจร" },
      { q: "ทีมโปรดักชันครบไหม?", a: "ครบทั้ง แสง เสียง เวที จอ พร็อพ และทีมถ่ายทำ" },
      { q: "ช่วยออกแบบธีมงานได้ไหม?", a: "ออกแบบธีม Mood & Tone ให้สอดคล้องกับแบรนด์และงบประมาณ" },
      { q: "มีบริการดูแลแขกไหม?", a: "มีทีม MC, Staff และ Reception ดูแลแขกตลอดงาน" },
      { q: "ทำสคริปต์พิธีกรให้ไหม?", a: "มีทีมคอนเทนต์เขียนสคริปต์และวางลำดับพิธี" },
      { q: "มีบริการไลฟ์สดไหม?", a: "มี Live Streaming Multi-camera พร้อม Switcher & Graphic" },
      { q: "จัดงานต่างจังหวัดได้ไหม?", a: "ได้ทั่วประเทศ มีเครือข่ายทีมงานท้องถิ่นครบ" },
      { q: "มีประกันความเสียหายไหม?", a: "มีประกันอุปกรณ์และความเสียหายตามมาตรฐานอีเวนต์" },
      { q: "ช่วยหาสถานที่ได้ไหม?", a: "ช่วยแนะนำและจองสถานที่ให้เหมาะกับสเกลงาน" },
      { q: "ทำสื่อโฆษณาร่วมกับงานได้ไหม?", a: "ทำ Banner/VDO/PR และ Social Campaign ก่อน-หลังงานได้" },
    ],
  },
  {
    title: "ระบบ CRM & AI Automation",
    items: [
      { q: "มี CRM แบบไหนให้ใช้?", a: "ใช้ CRM พัฒนาเอง เชื่อม LINE OA และ Meta ได้ครบ" },
      { q: "ทำ Chatbot ได้ไหม?", a: "มีบริการ AI Chatbot ตอบอัตโนมัติ ทั้งไทย/อังกฤษ" },
      { q: "เก็บข้อมูลลูกค้าเรียลไทม์ไหม?", a: "มี Dashboard Realtime พร้อม Filter และ Export" },
      { q: "ส่งอีเมล/SMS อัตโนมัติได้ไหม?", a: "ทำ Marketing Automation แจ้งโปรโมชัน/ขอบคุณ/นัดหมาย" },
      { q: "ตั้ง Pixel/Tracking ให้ไหม?", a: "ติดตั้ง GA4, CAPI, Pixel ครบทุกช่องทาง" },
      { q: "ข้อมูลปลอดภัยไหม?", a: "เก็บบน Cloud มาตรฐาน PDPA พร้อม Backup รายวัน" },
      { q: "เชื่อม Google Sheet หรือ API ได้ไหม?", a: "รับ-ส่งข้อมูลกับระบบอื่นผ่าน API ได้" },
      { q: "มีระบบรายงานยอดขายไหม?", a: "สรุปยอดขาย ลูกค้าใหม่ และ Conversion แบบเรียลไทม์" },
      { q: "ระบบใช้งานยากไหม?", a: "อินเทอร์เฟซเรียบง่าย มีคู่มือและวิดีโอสอน ใช้เป็นใน 10 นาที" },
      { q: "มีซัพพอร์ตหลังใช้งานไหม?", a: "มีทีมเทคนิคคอยดูแลและอัปเดตฟีเจอร์ใหม่ให้ต่อเนื่อง" },
    ],
  },
  {
    title: "ถ่ายทำวิดีโอ & คอนเทนต์ (Storytelling)",
    items: [
      { q: "ทำ Storytelling แนวไวรัลได้ไหม?", a: "เชี่ยวชาญคอนเทนต์เล่าเรื่อง สั้น ไหลลื่น ไวรัลได้จริง" },
      { q: "มีบริการเขียนสคริปต์ไหม?", a: "ช่วยเขียนสคริปต์และโครงเรื่อง พร้อมคิดมุกสร้างแรงบันดาลใจ" },
      { q: "ทีมถ่ายทำใช้กี่คน?", a: "โดยเฉลี่ย 3–6 คน ครบทั้งกล้อง ไฟ เสียง และผู้กำกับ" },
      { q: "มี Behind The Scenes ไหม?", a: "มีทีมเก็บฟุตเทจ Behind และ Interview เสริมคอนเทนต์หลัก" },
      { q: "ทำ Short Series ได้ไหม?", a: "ผลิต Mini Series หรือ Episodic Content ได้ครบวงจร" },
      { q: "ตัดต่อใช้เวลานานไหม?", a: "เฉลี่ย 2–5 วัน ขึ้นกับความยาวและเอฟเฟกต์" },
      { q: "ใส่ซับไทย/อังกฤษ ได้ไหม?", a: "ได้ทั้งสองภาษา พร้อมปรับฟอนต์ให้เข้ากับแบรนด์" },
      { q: "รองรับ Vertical (9:16) ไหม?", a: "รองรับแนวตั้งทุกแพลตฟอร์ม Reels/TikTok/Shorts" },
      { q: "ถ่ายต่างจังหวัดได้ไหม?", a: "มีทีม Production เคลื่อนที่ทั่วประเทศ" },
      { q: "ส่งงานอย่างไร?", a: "ส่งผ่าน Google Drive/Dropbox พร้อม Thumbnail/Caption" },
    ],
  },
  {
    title: "ดูแลรายเดือน / รายครั้ง",
    items: [
      { q: "มีแพ็กเกจดูแลเพจไหม?", a: "มีแพ็กเกจโพสต์คอนเทนต์ ยิงแอด และวิเคราะห์ Performance รายเดือน" },
      { q: "ซื้อแบบรายครั้งได้ไหม?", a: "ได้ เลือกเฉพาะงาน เช่น ออกแบบ/ตัดต่อ/แก้เว็บ" },
      { q: "รายเดือนครอบคลุมอะไรบ้าง?", a: "ครอบคลุม Graphic, Motion, Content, SEO และ Report" },
      { q: "ปรับแพ็กเกจเองได้ไหม?", a: "เลือกเพิ่ม/ลดบริการได้ตามงบ" },
      { q: "มีรายงานสรุปทุกเดือนไหม?", a: "มี Monthly Report พร้อม Insight/ข้อเสนอแนะ" },
      { q: "เหมาะกับธุรกิจแบบไหน?", a: "SME/Brand ที่อยากได้ทีม Marketing ครบโดยไม่ต้องจ้างประจำ" },
      { q: "ยกเลิกเมื่อไหร่ก็ได้ไหม?", a: "แจ้งล่วงหน้า 15 วัน สามารถพักชั่วคราวหรือปรับแผนได้" },
      { q: "มี AM ประจำแบรนด์ไหม?", a: "มี Account Manager ดูแลประสานงานรวดเร็ว" },
      { q: "ค่าบริการเริ่มต้นเท่าไร?", a: "เริ่มต้น 15,000 บาท/เดือน ขึ้นกับขอบเขต" },
      { q: "มีสัญญาระยะยาวไหม?", a: "เลือก 3/6/12 เดือน พร้อมส่วนลดพิเศษ" },
    ],
  },
  {
    title: "คำถามทั่วไป",
    items: [
      { q: "เริ่มงานต้องวางมัดจำเท่าไร?", a: "โดยทั่วไป 40–50% ก่อนเริ่มงาน และชำระส่วนที่เหลือเมื่อส่งมอบ" },
      { q: "ติดต่อทีมงานช่องทางไหน?", a: "LINE OA, โทรศัพท์, อีเมล หรือฟอร์มบนเว็บไซต์" },
      { q: "ออกใบกำกับภาษีได้ไหม?", a: "ออกใบกำกับภาษีเต็มรูปแบบได้สำหรับนิติบุคคล/บุคคลธรรมดา" },
      { q: "มี NDA หรือสัญญาไหม?", a: "สามารถทำ NDA/สัญญาโครงการเพื่อคุ้มครองข้อมูลได้" },
      { q: "แก้งานได้กี่รอบ?", a: "ปกติ 1–2 รอบ ตามแพ็กเกจ หากเกินมีค่าดำเนินการ" },
      { q: "ไฟล์/ทรัพยากรที่ต้องส่งมีอะไร?", a: "โลโก้ ฟอนต์ โทนสี รูปภาพ/วิดีโอ คอนเทนต์ (ถ้ามี)" },
      { q: "มีส่วนลดสำหรับสตาร์ทอัพไหม?", a: "มีเรตราคาและแพ็กเกจพิเศษสำหรับผู้เริ่มต้น" },
      { q: "ทำงานวันไหนบ้าง?", a: "ทีมทำงาน จ-ส 10:00–19:00 (ซัพพอร์ตเร่งด่วนได้)" },
      { q: "สื่อสารและติดตามงานอย่างไร?", a: "ใช้ Trello/Notion/LINE กลุ่ม พร้อมรายงานสถานะทุกสัปดาห์" },
      { q: "รับโปรเจกต์ระยะยาวไหม?", a: "รับแบบ Retainer รายเดือน/รายไตรมาส/รายปี พร้อมเงื่อนไขพิเศษ" },
    ],
  },
];

// ------------------------------------------------------
// Accordion item (วัดความสูงจริง ปลอดภัยกว่า grid-rows)
// ------------------------------------------------------
function Accordion({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: QAItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      setMaxH(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen, item.a]);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-white/20">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="text-base sm:text-lg font-medium">{item.q}</span>
        <span
          className={[
            "grid h-8 w-8 place-items-center rounded-full border transition",
            isOpen ? "rotate-45 border-violet-400 text-violet-300" : "border-white/20 text-white/70",
          ].join(" ")}
        >
          +
        </span>
      </button>

      <div
        id={id}
        ref={ref}
        style={{ maxHeight: maxH }}
        className="overflow-hidden px-5 transition-[max-height] duration-300"
      >
        <div className="pb-5 text-white/80 leading-relaxed">{item.a}</div>
      </div>
    </div>
  );
}

// ------------------------------------------------------
// Main Component
// ------------------------------------------------------
export default function FAQ() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const group = FAQ_GROUPS[activeGroup];

  return (
    <Reveal>
      <section id="faq" className="container mx-auto max-w-6xl px-4 py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            FAQ • คำถามที่พบบ่อย
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            คำถามที่พบบ่อย ครอบคลุมทุกบริการของเรา
          </h2>
          <p className="mt-2 text-white/70">
            เลือกหมวดด้านล่างเพื่อดูคำถาม-คำตอบแบบละเอียด และหากยังสงสัย ทักเราได้ทันทีทาง LINE
          </p>
        </div>

        {/* Tabs: รองรับขึ้นหลายบรรทัด + เลื่อนบนมือถือ */}
        <div className="relative">
          <div className="no-scrollbar -mx-4 mb-8 flex flex-wrap gap-2 overflow-x-auto px-4">
            {FAQ_GROUPS.map((g, i) => {
              const active = i === activeGroup;
              return (
                <button
                  key={g.title}
                  onClick={() => {
                    setActiveGroup(i);
                    setOpenIndex(null);
                  }}
                  className={[
                    "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition",
                    active
                      ? "border-violet-500/40 bg-violet-500/20 text-white shadow-[0_0_0_1px_rgba(139,92,246,0.2)_inset]"
                      : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10",
                  ].join(" ")}
                >
                  {g.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* List: Q&A ทั้งหมดจะแสดงครบ 10 ข้อ */}
        <div className="grid grid-cols-1 gap-3">
          {group.items.map((item, idx) => (
            <Accordion
              key={idx}
              id={`faq-panel-${activeGroup}-${idx}`}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://lin.ee/pORMgWT" // TODO: ใส่ลิงก์ LINE OA ของเก่ง
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-95"
          >
            สงสัยเพิ่มเติม? คุยกับทีมงานทาง LINE
            <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
              <path fill="currentColor" d="M14 3l7 7-7 7v-4H3v-6h11V3z" />
            </svg>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
