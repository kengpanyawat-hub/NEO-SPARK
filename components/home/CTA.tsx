import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function CTA() {
  return (
  <Reveal>
    <section className="container-xl py-10" id="cta">
      {/* กรอบไล่สี + เงา + ปุ่มขวา */}
      <div className="rounded-[1.75rem] p-[2px] bg-gradient-to-r from-neo-violet/50 via-neo-pink/40 to-neo-violet/30 shadow-glow">
        <div className="rounded-[1.65rem] bg-black/40 px-6 sm:px-10 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              <span className="text-neo-pink font-bold">แค่มีสินค้า</span>{" "}
              คุณก็มีเว็บไซต์ <span className="whitespace-nowrap">เป็นของตัวเองได้ทันที</span>
            </h2>
            <p className="mt-2 text-white/70">
              คุยกับทีม NEO SPARK วันนี้ — ประเมินเบื้องต้นฟรีภายใน 24 ชม.
            </p>
          </div>

          <div className="md:pl-8 md:self-stretch md:flex md:items-center">
            <Link
              href="/contact"
              className="btn-primary text-base md:text-lg px-6 py-3 btn-float"
            >
              เริ่มต้นคุยงาน
            </Link>
          </div>
        </div>
      </div>
    </section>
	</Reveal>
  );
}
