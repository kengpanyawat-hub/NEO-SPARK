"use client";

import Image from "next/image";
import Link from "next/link";

/** ภาพเดโม่ (เปลี่ยนเป็นรูปของคุณภายหลังได้) */
const BANNER_IMG =
  "https://framerusercontent.com/images/nuUwtC4w6VFNBRpsf3unRb0ZOzs.png?width=680&height=526";
const CARD_LEFT_IMG =
  "https://framerusercontent.com/images/G7vnqA5yjIK2Tt32vs8XrDRwg8.png?scale-down-to=1024&width=2348&height=2480";
const CARD_RIGHT_IMG =
  "https://framerusercontent.com/images/i2AnnGCQpfOagA5uUPOPoZvg.png?width=934&height=644";

export default function EcomBoost() {
  return (
    <section aria-label="boost-ecommerce" className="container-xl my-16">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neo-radial shadow-glow">
        <div className="grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-10 md:py-12">
          {/* Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/85 ring-1 ring-white/15 md:text-xs">
              ระบบ Full Data Dynamic
            </span>

            <h2 className="mt-4 text-[28px] font-extrabold leading-tight md:text-5xl">
              เพิ่มโอกาสทางธุรกิจด้วย{" "}
              <span className="text-gradient-brand">เว็บไซต์ออนไลน์</span>
            </h2>

            <p className="mt-3 max-w-xl text-white/75">
              ขายได้ไวขึ้นด้วยข้อมูลแบบเรียลไทม์ รองรับการวิเคราะห์ Conversion และการตลาดครบวงจร
              เชื่อมต่อระบบที่ใช้อยู่แล้วได้ทันที
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary btn-lg">
                ติดต่อทีมงาน →
              </Link>
              <Link href="/works" className="btn-ghost btn-lg">
                ดูผลงาน
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* glow เบาๆ */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(540px_340px_at_60%_10%,rgba(139,92,246,.22),transparent_70%)]" />
            <div className="mask-fade-y relative mx-auto max-w-[520px] rounded-2xl bg-black/30 p-3 ring-1 ring-white/10">
              <Image
                src={BANNER_IMG}
                alt="ตัวอย่างแดชบอร์ดอีคอมเมิร์ซ"
                width={680}
                height={526}
                className="h-auto w-full object-contain drop-shadow-[0_14px_30px_rgba(139,92,246,.35)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* เงาขอบล่างให้มิติ */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[70px] w-[78%] -translate-x-1/2 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(139,92,246,.18),transparent)]" />
      </div>
    </section>
  );
}

/* ---------- การ์ดโทนดาร์ก ---------- */
function DarkCard({
  badge,
  title,
  sub,
  image,
  ctaHref,
}: {
  badge: string;
  title: React.ReactNode;
  sub?: string;
  image: string;
  ctaHref: string;
}) {
  return (
    <div className="card-gradient">
      <div className="inner p-5 md:p-6">
        {/* badge */}
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/85 ring-1 ring-white/10 md:text-xs">
            {badge}
          </span>
        </div>

        {/* title */}
        <h3 className="text-[22px] font-extrabold leading-tight md:text-[26px]">
          {title}
        </h3>
        {sub ? <p className="mt-2 text-white/70">{sub}</p> : null}

        {/* image */}
        <div className="relative mt-4 overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,.35)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_260px_at_10%_0%,rgba(139,92,246,.2),transparent_60%)]" />
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5">
          <Link href={ctaHref} className="btn-primary">
            ติดต่อทีมงาน →
          </Link>
        </div>
      </div>
    </div>
  );
}
