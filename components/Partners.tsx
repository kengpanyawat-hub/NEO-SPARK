"use client";

import Image from "next/image";
import clsx from "clsx";
import Reveal from "@/components/motion/Reveal";

/** ---------- Types ---------- */
type Item = { src: string; name: string };

/** ---------- Static fallback data (ใช้เมื่อ API ไม่มีข้อมูล) ---------- */
const STATIC_PARTNERS: Item[] = [
  { src: "/partners/1.png", name: "IRVING" },
  { src: "/partners/2.png", name: "KTMS" },
  { src: "/partners/3.png", name: "MEDICAL VISION" },
  { src: "/partners/4.png", name: "NEPHRO VISION" },
  { src: "/partners/5.png", name: "VIQUA" },
  { src: "/partners/6.png", name: "PENTEK" },
  { src: "/partners/7.png", name: "MANITOWOC" },
  { src: "/partners/8.png", name: "OASIS" },
  { src: "/partners/9.png", name: "CLARIS" },
  { src: "/partners/10.png", name: "FILTER VISION" },
  { src: "/partners/11.png", name: "EVER PURE" },
  { src: "/partners/12.png", name: "BIOTEK OZONE" },
  { src: "/partners/13.png", name: "INNOVATER" },
  { src: "/partners/14.png", name: "PHETYONT" },
  { src: "/partners/15.png", name: "AUDIONICE CENTER" },
  { src: "/partners/16.png", name: "IDEMITSU" },
  { src: "/partners/17.png", name: "THAI NUMTHIP" },
  { src: "/partners/18.png", name: "WUTTISAK CLINIC" },
  { src: "/partners/19.png", name: "DAZZLING BUILDING" },
  { src: "/partners/20.png", name: "GROWENRICH DEVELOPMENT" },
  { src: "/partners/21.png", name: "FIN ORGANIZER" },
  { src: "/partners/22.png", name: "LS JEWELRY" },
  { src: "/partners/23.png", name: "XM" },
  { src: "/partners/24.png", name: "SORDJAENG LAWYER" },
  { src: "/partners/25.png", name: "PK SAUSAGE" },
  { src: "/partners/26.png", name: "BELIEF" },
  { src: "/partners/27.png", name: "RACEPOINT" },
  { src: "/partners/28.png", name: "LOFT MEDIA AGENCY" },
  { src: "/partners/29.png", name: "COFFEE SLENDER" },
  { src: "/partners/30.png", name: "FLOWERFOOD" },
  { src: "/partners/31.png", name: "LONGTRADE" },
  { src: "/partners/32.png", name: "PUNTHAI" },
  { src: "/partners/33.png", name: "10000GRAPH" },
  { src: "/partners/34.png", name: "MK RESTAURANT" },
  { src: "/partners/35.png", name: "PPT" },
  { src: "/partners/36.png", name: "SEVEN ELEVEN" },
  { src: "/partners/37.png", name: "SWENSENS" },
  { src: "/partners/38.png", name: "MADAM JEWELRY" },
];

/** ---------- คอลัมน์เลื่อนขึ้น/ลงแบบ marquee ---------- */
function Column({
  items,
  direction = "up",
  speed = 18,
}: {
  items: Item[];
  direction?: "up" | "down";
  speed?: number;
}) {
  const list = [...items, ...items];

  return (
    <div
      className={clsx(
        "neo-marquee group",
        direction === "up" ? "neo-marquee--up" : "neo-marquee--down"
      )}
    >
      <ul className="neo-marquee__inner" style={{ animationDuration: `${speed}s` }}>
        {list.map((it, i) => (
          <li key={`${it.name}-${i}`} className="flex items-center justify-center">
            <Image
              src={it.src}
              alt={it.name}
              width={320}
              height={96}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 50vw"
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              priority={i < 4}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** ---------- ส่วนหลัก — รับ apiPartners จาก Server Component ---------- */
export default function Partners({
  apiPartners,
}: {
  apiPartners?: { name: string; logoUrl: string | null }[];
}) {
  // ถ้ามีข้อมูลจาก API และมี logoUrl ให้ใช้ข้อมูลนั้น
  // ถ้าไม่มี logoUrl ให้ใช้ static fallback ตาม index
  const allItems: Item[] =
    apiPartners && apiPartners.length > 0
      ? apiPartners.map((p, i) => ({
          src: p.logoUrl || STATIC_PARTNERS[i % STATIC_PARTNERS.length]?.src || "/partners/1.png",
          name: p.name,
        }))
      : STATIC_PARTNERS;

  // แบ่งเป็น 4 คอลัมน์
  const chunkSize = Math.ceil(allItems.length / 4);
  const col1 = allItems.slice(0, chunkSize);
  const col2 = allItems.slice(chunkSize, chunkSize * 2);
  const col3 = allItems.slice(chunkSize * 2, chunkSize * 3);
  const col4 = allItems.slice(chunkSize * 3);

  return (
    <Reveal>
      <section id="clients" className="container-xl py-16 md:py-24">
        {/* Heading badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-white/5 ring-1 ring-white/10 mb-3">
            <span className="h-2 w-2 rounded-full bg-neo-violet" />
            Clients & Partners
          </div>
          <h2 className="shine text-3xl md:text-4xl font-extrabold">ร่วมเป็นหนึ่งในความสำเร็จของเรา</h2>
          <p className="shine text-white/70 max-w-2xl mx-auto mt-2">
            ขอบคุณลูกค้าและพาร์ทเนอร์จากหลายอุตสาหกรรมที่ไว้วางใจ NEO SPARK ในการออกแบบ/พัฒนาและขับเคลื่อนการตลาดดิจิทัล
          </p>
        </div>

        {/* กรอบใหญ่ + เอฟเฟ็กต์ขอบไล่เฉดตามธีม */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 ring-1 ring-white/10
                        bg-[radial-gradient(60%_120%_at_0%_0%,rgba(139,92,246,.10),transparent_55%),radial-gradient(60%_120%_at_100%_0%,rgba(236,72,153,.10),transparent_55%)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 h-[440px] md:h-[560px]">
            <Column items={col1} direction="up" speed={18} />
            <Column items={col2} direction="down" speed={20} />
            <Column items={col3} direction="up" speed={19} />
            <Column items={col4} direction="down" speed={21} />
          </div>

          {/* tip */}
          <p className="mt-5 text-center text-xs text-white/60">
            เลื่อนเมาส์ค้างเพื่อหยุดเลื่อน • รองรับลดแอนิเมชันสำหรับผู้ใช้งานที่ตั้งค่า{" "}
            <code>prefers-reduced-motion</code>
          </p>
        </div>
      </section>
    </Reveal>
  );
}
