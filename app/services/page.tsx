// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Palette,
  Film,
  MonitorSmartphone,
  Megaphone,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/data/services";

/* ========== SEO ========== */
const SITE_URL = "https://neo-spark.agency";
const TITLE = "บริการครบวงจร | NEO SPARK";
const DESCRIPTION =
  "ครบทุกขั้นตอน: สร้างแบรนด์ ออกแบบคอนเทนต์ สร้างสื่อ จัดอีเวนต์ ยิงแอดดิจิทัล — เลือกได้ทั้งรายเดือนและรายครั้ง ปรับสโคปตามงบประมาณของคุณ";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/og.jpg`, width: 1200, height: 630, alt: "NEO SPARK – บริการครบวงจร" }],
    siteName: "NEO SPARK",
    locale: "th_TH",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/og.jpg`] },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
};

/* ========== หมวดไอคอน ========== */
const iconMap = {
  web: <MonitorSmartphone className="h-5 w-5" />,
  design: <Palette className="h-5 w-5" />,
  media: <Film className="h-5 w-5" />,
  ads: <Megaphone className="h-5 w-5" />,
  event: <CalendarDays className="h-5 w-5" />,
  dev: <Code className="h-5 w-5" />,
} as const;

/* ========== Types ========== */
type Plan = (typeof services)[number]["plans"][number];
type Service = (typeof services)[number];

/* ========== Helpers ========== */
const currencyTHB = (n: number) => `฿${n.toLocaleString("th-TH")}`;

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-neo-violet" strokeWidth={2.25} />
      <span className="leading-relaxed text-white/85">{children}</span>
    </li>
  );
}

function PriceCard({ plan }: { plan: Plan }) {
  const isHot = plan.label === "แนะนำ" || plan.label === "HOT" || (plan as any).isPopular;

  return (
    <article
      className={[
        "group relative flex h-full flex-col rounded-3xl border p-6 md:p-7",
        "bg-white/5 backdrop-blur-md transition",
        "hover:bg-white/10 hover:shadow-2xl",
        isHot ? "border-neo-violet shadow-glow" : "border-white/10",
      ].join(" ")}
      aria-label={`แพ็กเกจ ${plan.name}`}
    >
      {isHot && (
        <span className="absolute -top-3 right-6 rounded-full bg-neo-violet px-3 py-1 text-xs font-semibold shadow-glow">
          แนะนำ
        </span>
      )}

      <div className="text-sm text-white/60">แพ็กเกจ</div>
      <h3 className="mt-0.5 text-2xl font-bold">{plan.name}</h3>

      <div className="mt-4 flex items-baseline gap-2">
        <div className="text-4xl font-extrabold tracking-tight text-neo-pink">
          {currencyTHB(plan.price)}
        </div>
        {plan.period && <span className="text-base font-semibold text-white/60">{plan.period}</span>}
      </div>

      <ul className="mt-5 grid grow content-start gap-3">
        {plan.features.map((f: string, i: number) => (
          <FeatureItem key={i}>{f}</FeatureItem>
        ))}
      </ul>

      <a href="/contact" className="btn-primary mt-6 inline-flex w-full justify-center">ขอใบเสนอราคา</a>
    </article>
  );
}

function ServiceSection({ svc }: { svc: Service }) {
  const Icon =
    iconMap[svc.slug as keyof typeof iconMap] ?? <MonitorSmartphone className="h-5 w-5" />;

  return (
    <section id={`svc-${svc.slug}`} className="scroll-mt-28">
      <header className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neo-violet/20 text-neo-violet">
            {Icon}
          </span>
          <div>
            <h2 className="text-xl font-semibold leading-tight">{svc.title}</h2>
            {svc.desc && <p className="text-sm text-white/70">{svc.desc}</p>}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a href="/works" className="btn-ghost">ดูผลงาน</a>
          <a href="/contact" className="btn-primary">คุยสโคปงาน</a>
        </div>
      </header>

      <div className="grid items-stretch gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {svc.plans.map((p) => (
          <PriceCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   ✅ การ์ด 6 หมวด — 2 แถว ๆ ละ 3 คอลัมน์ (เดสก์ท็อป)
   - มือถือ: 1 คอลัมน์ (อ่านง่าย)
   - md ขึ้นไป: 3 คอลัมน์ ⇒ 6 ใบ = 2 แถวพอดี
========================================================= */
function OverviewSixCards() {
  const items = [
    {
      title: "รับทำเว็บไซต์",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      bullets: [
        "เว็บองค์กร/ขายของ/แลนดิ้งเพจ เน้นสวย-เร็ว-แม่นยำ",
        "พัฒนาเว็บด้วย Next.js + SEO Optimization",
        "ออกแบบ UX/UI ให้เหมาะกับธุรกิจโดยเฉพาะ",
        "รองรับมือถือ 100% และโหลดไวทุกอุปกรณ์",
      ],
    },
    {
      title: "กราฟิกดีไซน์",
      icon: <Palette className="h-5 w-5" />,
      bullets: [
        "โลโก้ชุด แบนเนอร์ โซเชียล แพ็กเกจ และ CI",
        "ออกแบบจุดขายและคอนเทนต์ต่อเนื่อง",
        "ไฟล์พร้อมใช้งาน / พร้อมผลิตจริง",
        "งานดีไซน์ตามคู่มือ มาตรฐานแบรนด์",
      ],
    },
    {
      title: "โมชั่น & วิดีโอ",
      icon: <Film className="h-5 w-5" />,
      bullets: [
        "โมชั่นกราฟิก ตัดต่อ ถ่ายทำ ครบวงจร",
        "วิดีโอโพรโมชัน / รีวิวสินค้า / เบื้องหลัง / ไลฟ์ขาย",
        "ตัดต่อและทำกราฟิกเคลื่อนไหว",
        "คิดคอนเซ็ปต์และสคริปต์ให้ตรงกลุ่มเป้าหมาย",
      ],
    },
    {
      title: "โฆษณาออนไลน์",
      icon: <Megaphone className="h-5 w-5" />,
      bullets: [
        "วางแผน สร้างสรรค์ และยิงโฆษณา",
        "ออกแบบ Funnel และ Creative Campaign",
        "ติดตั้ง Pixel / Conversion API ครบระบบ",
        "วิเคราะห์ข้อมูลและสรุปรายงานละเอียดทุกเดือน",
      ],
    },
    {
      title: "งานอีเวนต์",
      icon: <CalendarDays className="h-5 w-5" />,
      bullets: [
        "ผลิตงานอีเวนต์ครบตั้งแต่ไฟแสงเสียง ทีมงาน",
        "One-stop Production พร้อมอุปกรณ์ใหม่กันไฟฟ้า",
        "ประสานทีมจัดการ / กำกับแผน",
        "บริหารและควบคุมหน้างานโดยมืออาชีพ",
      ],
    },
    {
      title: "ดูแลรายเดือน",
      icon: <Code className="h-5 w-5" />,
      bullets: [
        "แพ็กเกจรายเดือนสำหรับแบรนด์",
        "วางแผนและออกแบบคอนเทนต์รายสัปดาห์",
        "สร้างภาพ / วิดีโอ / แคปชันครบวงจร",
        "สรุปรายงานผล พร้อมแผนถัดไปเชิงกลยุทธ์",
      ],
    },
  ];

  return (
    <section aria-label="ภาพรวมบริการ" className="mb-10">
      <div
        className="
          grid items-stretch gap-4 md:gap-6
          grid-cols-1 md:grid-cols-3
        "
      >
        {items.map((it) => (
          <article
            key={it.title}
            className="
              flex h-full flex-col rounded-2xl border border-white/10
              bg-white/[0.04] p-5 md:p-6 shadow-sm transition
              hover:bg-white/[0.06]
            "
          >
            <header className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neo-violet/20 text-neo-violet">
                {it.icon}
              </span>
              <h3 className="text-lg font-semibold">{it.title}</h3>
            </header>
            <ul className="grid grow content-start gap-2">
              {it.bullets.map((b, i) => (
                <FeatureItem key={i}>{b}</FeatureItem>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========== Page ========== */
export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "NEO SPARK Services",
        url: `${SITE_URL}/services`,
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        })),
      },
    ],
  };

  return (
    <div className="container-xl py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">บริการครบวงจร</h1>
        <p className="mx-auto mt-2 max-w-3xl text-white/70">
          ครบทุกขั้นตอน: สร้างแบรนด์ ออกแบบคอนเทนต์ สร้างสื่อ จัดอีเวนต์ ยิงแอดดิจิทัล —
          เลือกได้ทั้ง <b>รายเดือน</b> และ <b>รายครั้ง</b> ปรับสโคปตามงบประมาณของคุณ
        </p>
      </header>

      {/* ✅ การ์ด 6 หมวด: 2 แถว × 3 คอลัมน์ */}
      <OverviewSixCards />

      {/* Tabs ลัดไปแต่ละหมวด */}
      <nav
        aria-label="หมวดบริการ"
        className="sticky top-16 z-20 mb-10 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`#svc-${s.slug}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-neo-violet/60"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* แพ็กเกจรายหมวด */}
      <div className="mx-auto grid max-w-6xl gap-14">
        {services.map((svc) => (
          <ServiceSection key={svc.slug} svc={svc} />
        ))}
      </div>

      <section className="mx-auto mt-16 max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h2 className="text-2xl font-semibold">อยากได้แพ็กเกจที่ยืดหยุ่นกว่านี้?</h2>
        <p className="mt-2 text-white/70">
          ปรับรายการงานและงบประมาณให้พอดีเป้าหมายธุรกิจของคุณ — เริ่มจากคุยรายละเอียดสโคปและรับใบเสนอราคา
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="btn-primary btn-float" href="/contact">คุยสโคปงาน</a>
          <a className="btn-ghost btn-float" href="/works">ชมผลงาน</a>
        </div>
      </section>
    </div>
  );
}
