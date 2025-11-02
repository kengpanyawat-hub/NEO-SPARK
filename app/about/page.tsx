// app/about/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import AboutImpact from "@/components/about/AboutImpact";

/* ---------------------------------- SEO ---------------------------------- */
// ปรับแต่ง Meta ให้ครบถ้วน และคงโครงเรื่อง/คำอธิบายที่คุณใช้อยู่
export const metadata: Metadata = {
  metadataBase: new URL("https://neo-spark.agency"),
  title: {
    default: "About | NEO SPARK",
    template: "%s | NEO SPARK",
  },
  description:
    "NEO SPARK AGENCY — เอเจนซี่ดิจิทัลครบวงจร ออกแบบ-พัฒนาเว็บไซต์ โมชัน/วิดีโอ โฆษณาออนไลน์ และดูแลต่อเนื่อง โฟกัสความเร็ว ประสบการณ์ใช้งาน และผลลัพธ์ทางธุรกิจ",
  applicationName: "NEO SPARK AGENCY",
  keywords: [
    "NEO SPARK",
    "เอเจนซี่ทำเว็บ",
    "ออกแบบเว็บไซต์",
    "Next.js",
    "UI/UX",
    "Motion",
    "โฆษณาออนไลน์",
    "SEO",
    "Performance",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://neo-spark.agency/about",
    title: "About | NEO SPARK",
    description:
      "ทำความรู้จักทีม NEO SPARK — เร็ว สวย และได้ผลลัพธ์ ออกแบบ/พัฒนาเว็บ โมชัน วิดีโอ โฆษณา และดูแลต่อเนื่อง",
    siteName: "NEO SPARK AGENCY",
    images: [
      {
        url: "/og/og-about.jpg", // แนะนำใส่รูป 1200x630px
        width: 1200,
        height: 630,
        alt: "About NEO SPARK",
      },
    ],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | NEO SPARK",
    description:
      "ทำความรู้จักทีม NEO SPARK — เร็ว สวย และได้ผลลัพธ์ ออกแบบ/พัฒนาเว็บ โมชัน วิดีโอ โฆษณา และดูแลต่อเนื่อง",
    images: ["/og/og-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

/* -------------------- DATA -------------------- */
const CERT_IMAGES = [
  { title: "Gemini Certified Educator", src: "/certs/gemini-educator.png" },
  { title: "Google AdWords Display", src: "/certs/cer-google-adwords.jpg" },
  { title: "Instagram for Business (Facebook Blueprint)", src: "/certs/cer-instagram.jpg" },
  { title: "e-Commerce Level 4 (SMART MOOC)", src: "/certs/certified.jpg" },
  { title: "Create Facebook Ads (Blueprint)", src: "/certs/create-facebook.jpg" },
  { title: "Google Analytics Certification", src: "/certs/google-analytics.jpg" },
  { title: "Google Ads Video Certification", src: "/certs/youtube-ads.jpg" },
  { title: "All Content Learning Path (Facebook Blueprint)", src: "/certs/cer-facebook.jpg" },
];

const EXPERTISE = [
  "Next.js / React • Tailwind • Motion",
  "Design System & Brand Guideline",
  "Content / Graphic / Motion / Video",
  "Ads & Growth: Meta • Google • TikTok • LINE",
  "Analytics & Conversion: GA4 • GTM • Pixel / CAPI",
  "Headless CMS (Directus / Strapi / Sanity) + Integrations",
  "SEO • Core Web Vitals • Performance",
  "Automation / CRM • Email • LINE OA",
  "E-commerce • Payment • Booking",
];

const TEAM = [
  { name: "Keng Panyawat", role: "Founder & Tech Lead", img: "/team/keng.jpg" },
  { name: "Mint R.",        role: "Creative Director",  img: "/team/mint.jpg" },
  { name: "Beam S.",        role: "UI/UX Designer",     img: "/team/beam.jpg" },
  { name: "Top T.",         role: "Frontend Engineer",  img: "/team/top.jpg" },
  { name: "Proud C.",       role: "Motion/Video",       img: "/team/proud.jpg" },
  { name: "Ben A.",         role: "Ads Specialist",     img: "/team/ben.jpg" },
];

const PARTNERS6 = [
  { name: "IRVING",         src: "/partners/1.png"  },
  { name: "VIQUA",          src: "/partners/5.png"  },
  { name: "FILTER VISION",  src: "/partners/10.png" },
  { name: "IDEMITSU",       src: "/partners/16.png" },
  { name: "LONGTRADE",      src: "/partners/31.png" },
  { name: "MK RESTAURANT",  src: "/partners/34.png" },
];

/* ------------------ JSON-LD (Organization / WebPage / Breadcrumb) ------------------ */
function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEO SPARK AGENCY",
    url: "https://neo-spark.agency",
    logo: "https://neo-spark.agency/og/logo-neo.png",
    sameAs: [
      "https://www.facebook.com/…", // ใส่ลิงก์จริงของคุณ
      "https://www.youtube.com/@…",
      "https://www.linkedin.com/company/…",
      "https://www.instagram.com/…",
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About | NEO SPARK",
    url: "https://neo-spark.agency/about",
    description:
      "NEO SPARK AGENCY — เอเจนซี่ดิจิทัลครบวงจร ออกแบบ-พัฒนาเว็บไซต์ โมชัน/วิดีโอ โฆษณาออนไลน์ และดูแลต่อเนื่อง",
    inLanguage: "th-TH",
    breadcrumb: { "@id": "https://neo-spark.agency/about#breadcrumb" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://neo-spark.agency/about#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://neo-spark.agency/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://neo-spark.agency/about" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

/* ---------------------------------- PAGE --------------------------------- */
export default function AboutPage() {
  return (
    <main className="pb-20">
      {/* JSON-LD */}
      <StructuredData />

      {/* Hero */}
      <section className="container-xl pt-28 md:pt-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-white/5 ring-1 ring-white/10 mb-3">
              <span className="h-2 w-2 rounded-full bg-neo-violet" />
              About us
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              เราคือ <span className="gradient-text">NEO SPARK AGENCY</span>
            </h1>
            <p className="mt-4 text-white/75 leading-relaxed">
              เอเจนซี่ดิจิทัลครบวงจรที่เชื่อในการผสาน{" "}
              <span className="text-white">ความเร็ว ความสวย และผลลัพธ์</span> เข้าด้วยกัน
              เราออกแบบและพัฒนาเว็บไซต์ที่ใช้งานได้จริง เชื่อมต่อระบบที่มีอยู่แล้ว
              ทำคอนเทนต์/โมชั่น และวางแผนยิงแอดแบบวัดผลได้ครบวงจร
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/works" className="btn-primary btn-float">ดูผลงาน</a>
              <a href="/contact" className="btn-ghost btn-float">ติดต่อทีมงาน</a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]
                          bg-[radial-gradient(60%_120%_at_0%_0%,rgba(139,92,246,.12),transparent_55%),radial-gradient(60%_120%_at_100%_0%,rgba(236,72,153,.12),transparent_55%)]">
            <Image
              src="/about/cover.jpg"
              alt="NEO SPARK Team"
              width={1200}
              height={800}
              className="h-full w-full object-cover opacity-95"
              priority
            />
          </div>
        </div>
      </section>
	  <AboutImpact />

      {/* ค่านิยม / ข้อความทำงานร่วมกัน (แถบด้านบน + กล่อง Quote + 3 เสาหลัก) */}
      <section className="container-xl mt-10">
        {/* แถบข้อความ */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm text-white/80">
          ทำงานร่วมกับลูกค้าแบบ <b>“พาร์ทเนอร์”</b> → สื่อสารตรงไปตรงมา อัปเดตเป็นสปรินต์ และรายงาน KPI อย่างโปร่งใส
        </div>

        {/* กล่อง Quote + 3 เสาหลัก */}
        <div className="mt-5 rounded-3xl border border-white/10 p-6 md:p-10
                        bg-[radial-gradient(60%_120%_at_0%_0%,rgba(139,92,246,.10),transparent_55%),radial-gradient(60%_120%_at_100%_0%,rgba(236,72,153,.10),transparent_55%)]">
          <blockquote className="text-center text-xl md:text-2xl font-semibold leading-relaxed">
            “เราให้คุณค่ากับความคิดสร้างสรรค์ที่ไร้ข้อจำกัด การร่วมมือกันเพื่อขับเคลื่อนนวัตกรรม
            และความมุ่งมั่นสู่ความเป็นเลิศในทุกโปรเจกต์ที่เราดำเนินการ”
          </blockquote>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "ความคิดสร้างสรรค์",
                desc: "เรามุ่งหาแนวทางใหม่ ๆ ที่มีประโยชน์ ผ่านแนวคิดเชิงผู้ใช้และการคิดอย่างสร้างสรรค์",
              },
              {
                n: "02",
                title: "ความร่วมมือ",
                desc: "เปิดมุมมองที่หลากหลาย ทำงานเป็นทีมร่วมกับประคองเป้าหมาย เพื่อให้งานเสร็จอย่างแท้จริง",
              },
              {
                n: "03",
                title: "ความเป็นเลิศ",
                desc: "โฟกัสคุณภาพ รายละเอียด และผลลัพธ์ที่วัดได้ เพื่อให้ลูกค้าได้รับผลลัพธ์ที่ยอดเยี่ยมเสมอ",
              },
            ].map((b) => (
              <div key={b.n} className="relative card overflow-hidden">
                <div className="absolute -left-3 -top-2 text-6xl font-black text-white/5 select-none">
                  {b.n}
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do / Expertise */}
      <section className="container-xl mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold">เราทำอะไร</h3>
            <ul className="mt-3 space-y-2 text-white/80 leading-relaxed">
			  <li>• ออกแบบ/พัฒนาเว็บไซต์ Next.js + Tailwind + Motion รองรับ SEO & Performance</li>
			  <li>• วางระบบดีไซน์ (Design System) พร้อม Brand Guideline ให้ใช้งานต่อได้จริง</li>
			  <li>• ผลิตคอนเทนต์–กราฟิก–โมชั่น–วิดีโอ สำหรับเว็บ/เพจ/โฆษณา</li>
			  <li>• โฆษณาออนไลน์ครบวงจร (Meta/Google/TikTok/LINE) เน้นวัดผล Conversion</li>
			  <li>• เชื่อมต่อระบบ CRM/LINE OA/Payment/Headless CMS และทำ Automations</li>
			  <li>• แพ็กเกจดูแลรายเดือน: อัปเดตเว็บ, คอนเทนต์, ยิงแอด, รายงานผล & ปรับปรุงต่อเนื่อง</li>
			</ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">ความเชี่ยวชาญ</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {EXPERTISE.map((e) => (
                <div key={e} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates — Gallery (ภาพ 4:3 แนะนำ 1200x900px หรือ 1600x1200px) */}
      <section id="certs" className="container-xl mt-14 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Certificates</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERT_IMAGES.map((c, i) => (
            <figure key={c.title + i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={c.src}
                  alt={c.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 py-2 text-sm text-white/85">{c.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Team (ภาพ 4:3 แนะนำ 1200x900px) */}
      <section id="team" className="container-xl mt-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-5">ทีมงานของเรา</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <div key={m.name} className="card">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={m.img}
                  alt={m.name}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3">
                <div className="font-semibold">{m.name}</div>
                <div className="text-white/70 text-sm">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners (6 companies) */}
      <section id="partners" className="container-xl mt-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {PARTNERS6.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex items-center justify-center"
              title={p.name}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={240}
                height={96}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain opacity-85"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA — คุยโปรเจกต์ */}
      <section className="container-xl mt-16">
        <div className="rounded-3xl border border-white/10 p-6 md:p-10 text-center
                        bg-[radial-gradient(60%_120%_at_0%_0%,rgba(139,92,246,.16),transparent_55%),radial-gradient(60%_120%_at_100%_0%,rgba(236,72,153,.16),transparent_55%)]">
          <h3 className="text-2xl md:text-3xl font-extrabold">คุยโจทย์โปรเจกต์หรือขอคำปรึกษา</h3>
          <p className="mt-2 text-white/75">
            ถ้าคุณกำลังวางระบบเว็บ ดีไซน์/คอนเทนต์ หรืออยากยกระดับ Performance & SEO—ยินดีช่วยครับ
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://lin.ee/pORMgWT"
              target="_blank"
              className="inline-flex items-center justify-center rounded-2xl bg-neo-violet px-5 py-3 font-medium shadow-glow hover:brightness-110 btn-float"
            >
              ติดต่อทาง LINE
            </a>
            <a href="/contact" className="btn-ghost btn-float">ส่งบรีฟเบื้องต้น</a>
          </div>
        </div>
      </section>
    </main>
  );
}
