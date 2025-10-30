// components/home/Testimonials.tsx
import Reveal from "@/components/motion/Reveal";
const LIST = [
  {
    name: "คุณพิเชษฐ - Ohayo Cafe",
    text: "ทำเว็บกับ NEO SPARK แล้วภาพลักษณ์ดูโปรขึ้น ลูกค้าหาข้อมูลเจอได้ ยอดสั่งออนไลน์เพิ่มจริง",
  },
  {
    name: "คุณพน - Alpha Logistics",
    text: "ทีมตอบไว แนะนำโครงสร้างคอนเทนต์ดีมาก เว็บโหลดเร็วและพร้อมขยับขยายต่อทันที",
  },
  {
    name: "คุณอธิป - TripMore",
    text: "ระบบจองใช้งานง่าย แก้ไขแพ็กเกจได้เอง มีคู่มือให้ครบ ประหยัดเวลาทีมเราเยอะ",
  },
];

export default function Testimonials() {
  return (
  <Reveal>
    <section className="container-xl py-14">
      <h2 className="shine text-center text-3xl md:text-4xl font-extrabold mb-10">รีวิวจากลูกค้าของเรา</h2>
      <div className="aurora rounded-3xl border border-white/10 p-8 grid gap-6 md:grid-cols-3">
        {LIST.map((t) => (
          <figure key={t.name} className="card hover:border-neo-violet/40 transition">
            <figcaption className="font-semibold mb-3">{t.name}</figcaption>
            <p className="text-white/80 leading-relaxed">“{t.text}”</p>
          </figure>
        ))}
      </div>
    </section>
	</Reveal>
  );
}
