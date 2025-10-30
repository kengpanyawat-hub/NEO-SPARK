// components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

/**
 * Hero: คงเลย์เอาต์เดิม แต่เปลี่ยนพรีวิวล่างเป็น "รูปภาพจริง"
 * - แนะนำวางไฟล์รูปที่ public/images/hero-preview.jpg
 * - หากใช้พาธอื่น ให้แก้ค่า src ด้านล่าง
 */
export default function Hero() {
  return (
    <Reveal>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-10">
        {/* สปอตไลต์หลังฮีโร่ */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_10%,#000_0%,transparent_70%)]"
        >
          <div className="absolute inset-x-0 -top-40 mx-auto h-[520px] w-[980px] rounded-full blur-3xl opacity-60
                          bg-[conic-gradient(at_50%_50%,#a855f7,25%,#7c3aed,50%,#d946ef,75%,#ec4899,100%,#a855f7)]" />
        </div>

        {/* คอนเทนต์กึ่งกลาง */}
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="gradient-text">NEO SPARK AGENCY</span>
              <br />
              One-Stop Creative &amp; Performance
            </h1>

            <p className="shine mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/80">
              รับทำเว็บไซต์ กราฟิก โมชัน วิดีโอ โฆษณา และอีเวนต์ — รายเดือนและรายครั้ง ครบจบในที่เดียว
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/services" className="btn-primary btn-float">ดูบริการทั้งหมด</Link>
              <Link href="/works" className="btn-ghost btn-float">ชมผลงาน</Link>
            </div>

            <div className="mt-4 text-xs text-white/60">
              รองรับทุกอุปกรณ์ • โหลดเร็ว • ดีไซน์มืออาชีพ
            </div>
          </div>

          {/* พรีวิวเป็นรูปภาพจริง */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div
              className="
                aurora relative rounded-3xl border border-white/10 bg-white/[.03] backdrop-blur
                shadow-[0_30px_80px_rgba(0,0,0,.45)] ring-1 ring-white/10
              "
            >
              {/* แถบหัวการ์ดคล้ายหน้าต่าง */}
              <div className="flex items-center gap-2 px-5 pt-4 pb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
              </div>

              {/* รูปพรีวิว */}
              <div className="px-5 pb-5">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <Image
                    src="/subhero.png" // ← เปลี่ยนพาธรูปของคุณได้ที่นี่
                    alt="NEO SPARK Preview"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 960px"
                  />
                </div>
              </div>

              {/* เส้น/ไอคอนด้านข้าง (ตกแต่ง) */}
              <div aria-hidden className="hidden md:block">
                {/* ซ้าย */}
                <div className="absolute -left-24 top-1/2 hidden -translate-y-1/2 md:flex items-center gap-6">
                  <div className="h-px w-24 bg-white/10" />
                </div>
                {/* ขวา */}
                <div className="absolute -right-24 top-1/2 hidden -translate-y-1/2 md:flex items-center gap-6">
                  <div className="h-px w-24 bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

/** ไอคอนกลมเล็ก ๆ สำหรับเส้นด้านข้าง */
function CircleIcon({ src }: { src: string }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur">
      <Image src={src} alt="" width={18} height={18} className="opacity-90" />
    </span>
  );
}
