// components/ToolRunner.tsx
"use client";

import { useState } from "react";
import { Clipboard, ExternalLink, Sparkles } from "lucide-react";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "textarea";
  required?: boolean;
};

const GENERIC_SCHEMA: Field[] = [
  { name: "topic", label: "หัวข้อ/สิ่งที่ต้องการ", placeholder: "เช่น ทำคอนเทนต์เรื่อง... หรือช่วยคิด...", required: true },
  { name: "goal", label: "เป้าหมาย", placeholder: "เช่น เพิ่มการมีส่วนร่วม/หาลูกค้าใหม่/ให้ความรู้" },
  { name: "notes", label: "ข้อกำหนด/บริบทเพิ่มเติม", placeholder: "โทนภาษา, กลุ่มเป้าหมาย, รูปแบบ, ความยาว ฯลฯ", type: "textarea" },
];

const TOOL_SCHEMAS: Record<string, Field[]> = {
  // การตลาดทั่วไป
  "brand-tone": [
    { name: "brand", label: "ชื่อ/ภาพรวมแบรนด์", placeholder: "เช่น NEO SPARK — เอเจนซี่เว็บดีไซน์" },
    { name: "traits", label: "บุคลิกภาพแบรนด์", placeholder: "เช่น โปร แต่เฟรนด์ลี่ ทันสมัย ไว้ใจได้" },
    { name: "voice", label: "โทนเสียงที่ต้องการ", placeholder: "เช่น ชัดเจน กระชับ เป็นกันเอง" },
  ],
  "usp-analyzer": [
    { name: "product", label: "สินค้า/บริการ", placeholder: "เช่น บริการทำเว็บไซต์ Next.js + SEO", required: true },
    { name: "audience", label: "กลุ่มเป้าหมาย", placeholder: "เช่น เจ้าของธุรกิจที่ต้องการเว็บเร็วและสวย" },
    { name: "proof", label: "หลักฐาน/จุดเด่นที่มี", placeholder: "เช่น โหลดไว, CWV ดี, ดีไซน์มินิมอล, มีเคสผลงาน", type: "textarea" },
  ],
  "value-prop": [
    { name: "offer", label: "ข้อเสนอ/บริการ", placeholder: "คุณขายอะไร" },
    { name: "pain", label: "ปัญหาที่ลูกค้ามี", placeholder: "ลูกค้าเจออะไรอยู่" },
    { name: "gain", label: "ผลลัพธ์ที่ได้รับ", placeholder: "แล้วจะดีขึ้นยังไง" },
  ],

  // สร้างงานเขียน
  "blog-seo": [
    { name: "topic", label: "หัวข้อบล็อก", placeholder: "เช่น 5 กลยุทธ์เพิ่ม Lead ให้เอเจนซี่" },
    { name: "audience", label: "ผู้อ่านเป้าหมาย", placeholder: "เช่น เจ้าของเอเจนซี่ขนาดเล็ก" },
    { name: "notes", label: "คีย์เวิร์ด/โทน/ความยาว", type: "textarea" },
  ],
  "landing-copy": [
    { name: "product", label: "สินค้า/บริการ", placeholder: "เช่น ออกแบบเว็บไซต์บริษัท" },
    { name: "socialProof", label: "Social proof/รางวัล/ลูกค้า", placeholder: "เช่น เคยทำให้ X,Y,Z" },
    { name: "cta", label: "ข้อเสนอ/CTA", placeholder: "เช่น นัดคุย 15 นาที" },
  ],
  "email-writer": [
    { name: "goal", label: "เป้าหมายอีเมล", placeholder: "เช่น เชิญร่วมเวิร์กช็อป/โปรโมชัน" },
    { name: "audience", label: "ผู้รับ", placeholder: "เช่น ลูกค้าเก่า/ลิสต์สมาชิก" },
    { name: "notes", label: "รายละเอียดสำคัญ", type: "textarea" },
  ],

  // งานโฆษณา
  "google-ads-headline": [
    { name: "product", label: "สินค้า/บริการ", placeholder: "สิ่งที่โฆษณา" },
    { name: "benefit", label: "ประโยชน์เด่น", placeholder: "โหลดไว, สวย, วัดผลได้ ฯลฯ" },
    { name: "keywords", label: "คีย์เวิร์ด (ถ้ามี)", placeholder: "คั่นด้วยจุลภาค ," },
  ],
  "ab-test-ideas": [
    { name: "campaign", label: "แคมเปญ/ข้อเสนอ", placeholder: "ชื่อ/เป้าหมายแคมเปญ" },
    { name: "audience", label: "กลุ่มเป้าหมาย", placeholder: "เช่น เจ้าของธุรกิจ SME" },
    { name: "notes", label: "ข้อจำกัด/แพลตฟอร์ม", type: "textarea" },
  ],

  // โซเชียล
  "caption-ig": [
    { name: "topic", label: "หัวข้อโพสต์", placeholder: "จะเล่าเรื่องอะไร" },
    { name: "tone", label: "โทน/สไตล์", placeholder: "เป็นกันเอง, สนุก, ให้ความรู้ ฯลฯ" },
    { name: "hashtags", label: "แฮชแท็กที่อยากได้", placeholder: "ถ้ามี", type: "textarea" },
  ],
  "reels-hook": [
    { name: "theme", label: "ธีมวิดีโอ", placeholder: "วิดีโอพูด/เบื้องหลัง/ทิป 3 ข้อ ฯลฯ" },
    { name: "audience", label: "คนดูเป้าหมาย", placeholder: "ใครจะดูคลิปนี้" },
    { name: "notes", label: "โมเดล/เฟรมเวิร์กที่อยากใช้", type: "textarea" },
  ],
};

const defaultBuilder = (v: Record<string, string>) =>
  [
    `You're a helpful Thai marketing copywriter.`,
    `จงเขียน/ช่วยตามรายละเอียด:`,
    `หัวข้อ: ${v.topic || "-"}`,
    `เป้าหมาย: ${v.goal || "-"}`,
    `ข้อกำหนด/บริบท: ${v.notes || "-"}`,
    `**ตอบเป็นภาษาไทย** และจัดรูปแบบให้อ่านง่าย`,
  ].join("\n");

const PROMPT_BUILDERS: Record<string, (v: Record<string, string>) => string> = {
  "brand-tone": (v) =>
    [
      `Act as a senior brand strategist. Create a concise **Brand Personality & Voice Guide (TH)**`,
      `แบรนด์: ${v.brand || "-"}`,
      `บุคลิกภาพหลัก (3–5 คำ): ${v.traits || "-"}`,
      `โทนเสียงที่ต้องการ: ${v.voice || "-"}`,
      `Output:`,
      `- Brand personality keywords`,
      `- Writing voice & tone (do/don't)`,
      `- Example sentences (3 แบบ)`,
      `ภาษาไทยทั้งหมด กระชับ อ่านง่าย`,
    ].join("\n"),

  "usp-analyzer": (v) =>
    [
      `Act as a positioning expert. สกัด **Unique Selling Proposition (USP)** ภาษาไทยให้ชัดและนำไปใช้บนเว็บ/แอดได้ทันที`,
      `สินค้า/บริการ: ${v.product || "-"}`,
      `กลุ่มเป้าหมาย: ${v.audience || "-"}`,
      `หลักฐาน/จุดเด่นที่มี: ${v.proof || "-"}`,
      `ให้ผลลัพธ์:`,
      `1) USP statement (1 ประโยค)`,
      `2) Supporting bullets (3–5 ข้อ)`,
      `3) Short tagline (3 แบบ)`,
    ].join("\n"),

  "value-prop": (v) =>
    [
      `ช่วยเขียน **Value Proposition (TH)** แบบชัดเจน`,
      `ข้อเสนอ/บริการ: ${v.offer || "-"}`,
      `Pain ของลูกค้า: ${v.pain || "-"}`,
      `Gain/ผลลัพธ์: ${v.gain || "-"}`,
      `ส่งออก: Headline 3 แบบ + Subheadline 3 แบบ + Bullets 5 ข้อ`,
    ].join("\n"),

  "blog-seo": (v) =>
    [
      `คุณเป็นนักเขียน SEO TH แบบมืออาชีพ`,
      `หัวข้อ: ${v.topic || "-"}`,
      `ผู้อ่าน: ${v.audience || "-"}`,
      `ข้อกำหนด: ${v.notes || "-"}`,
      `ให้: โครงเรื่อง H1/H2/H3 + คำอธิบายย่อ + Meta title/description + FAQ 5 ข้อ`,
    ].join("\n"),

  "landing-copy": (v) =>
    [
      `ช่วยร่างคอนเทนต์ Landing Page TH`,
      `สินค้า/บริการ: ${v.product || "-"}`,
      `Social proof: ${v.socialProof || "-"}`,
      `ข้อเสนอ/CTA: ${v.cta || "-"}`,
      `ให้ส่วน: Hero (Headline/Sub/CTA), Features, Proof, Process, Pricing (placeholder), FAQ`,
    ].join("\n"),

  "email-writer": (v) =>
    [
      `ช่วยเขียนอีเมลการตลาดภาษาไทย`,
      `เป้าหมาย: ${v.goal || "-"}`,
      `ผู้รับ: ${v.audience || "-"}`,
      `รายละเอียด: ${v.notes || "-"}`,
      `ส่งออก: Subject 5 แบบ + Email body 1 ฉบับ + PS`,
    ].join("\n"),

  "google-ads-headline": (v) =>
    [
      `คุณเป็นผู้เชี่ยวชาญ Google Ads (ภาษาไทย)`,
      `สินค้า/บริการ: ${v.product || "-"}`,
      `ประโยชน์เด่น: ${v.benefit || "-"}`,
      `คีย์เวิร์ด: ${v.keywords || "-"}`,
      `ให้ Headline 15 แบบ และ Description 4 แบบ (ตามข้อกำหนดอักขระของ Google Ads)`,
    ].join("\n"),

  "ab-test-ideas": (v) =>
    [
      `เสนอ **A/B Test ideas** สำหรับแคมเปญ`,
      `แคมเปญ: ${v.campaign || "-"}`,
      `กลุ่มเป้าหมาย: ${v.audience || "-"}`,
      `ข้อจำกัด/แพลตฟอร์ม: ${v.notes || "-"}`,
      `ให้: Hypothesis, Variant, Metric, ความเสี่ยง/ข้อควรระวัง`,
    ].join("\n"),

  "caption-ig": (v) =>
    [
      `สร้างแคปชัน Instagram ภาษาไทย 5 แบบ`,
      `หัวข้อโพสต์: ${v.topic || "-"}`,
      `โทน/สไตล์: ${v.tone || "-"}`,
      `แฮชแท็กที่อยากได้: ${v.hashtags || "-"}`,
      `แต่ละแบบมี: Hook 1 บรรทัด + ตัวเนื้อหา 2-3 บรรทัด + Hashtag bundle`,
    ].join("\n"),

  "reels-hook": (v) =>
    [
      `ช่วยคิด Hook สำหรับ Reels/TikTok ไทย 20 แบบ`,
      `ธีมวิดีโอ: ${v.theme || "-"}`,
      `กลุ่มเป้าหมาย: ${v.audience || "-"}`,
      `หมายเหตุ: ${v.notes || "-"}`,
      `รูปแบบสั้น ไม่เกิน 10 คำ/บรรทัด`,
    ].join("\n"),
};

export default function ToolRunner({
  toolId,
  title,
  description,
}: {
  toolId: string;
  title: string;
  description: string;
}) {
  const schema = TOOL_SCHEMAS[toolId] ?? GENERIC_SCHEMA;
  const builder = PROMPT_BUILDERS[toolId] ?? defaultBuilder;

  const [values, setValues] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<string>("");

  const onChange = (name: string, val: string) =>
    setValues((s) => ({ ...s, [name]: val }));

  const onGenerate = () => {
    const prompt = builder(values);
    setOutput(prompt);
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const openChatGPT = () => window.open("https://chat.openai.com/", "_blank");
  const openGemini = () => window.open("https://gemini.google.com/app", "_blank");

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <p className="text-sm text-neutral-300/70">← กลับไปรวมเครื่องมือ</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-2 text-neutral-300">{description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
          <h3 className="mb-4 text-lg font-medium text-white">กรอกข้อมูล</h3>
          <div className="space-y-4">
            {schema.map((f) => (
              <div key={f.name} className="space-y-2">
                <label className="block text-sm text-neutral-200">{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-violet-500/60"
                    placeholder={f.placeholder}
                    onChange={(e) => onChange(f.name, e.target.value)}
                  />
                ) : (
                  <input
                    className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-violet-500/60"
                    placeholder={f.placeholder}
                    onChange={(e) => onChange(f.name, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
          <button
            onClick={onGenerate}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
          >
            <Sparkles className="h-4 w-4" />
            Generate Prompt
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
          <h3 className="mb-4 text-lg font-medium text-white">
            ผลลัพธ์ (คัดลอกไปใช้กับ AI ที่คุณถนัดได้เลย)
          </h3>
          <textarea
            className="h-[420px] w-full rounded-xl border border-white/10 bg-neutral-900 p-3 text-sm text-neutral-100 outline-none placeholder:text-neutral-600"
            placeholder="ผลลัพธ์จะปรากฏที่นี่หลังจากกด Generate Prompt"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-neutral-700"
            >
              <Clipboard className="h-4 w-4" />
              คัดลอก
            </button>
            <button
              onClick={openChatGPT}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-neutral-700"
            >
              <ExternalLink className="h-4 w-4" />
              เปิด ChatGPT
            </button>
            <button
              onClick={openGemini}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-neutral-700"
            >
              <ExternalLink className="h-4 w-4" />
              เปิด Gemini
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
