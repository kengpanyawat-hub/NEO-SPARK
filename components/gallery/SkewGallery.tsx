"use client";

import Image from "next/image";
import * as React from "react";

type Item = {
  src: string;
  alt?: string;
  href?: string;
};

type SkewGalleryProps = {
  items: Item[];
  rows?: number;          // จำนวนแถว (แนะนำ 2–3)
  cardWidth?: number;     // ความกว้างการ์ดต่อใบ (px)
  cardHeight?: number;    // ความสูงการ์ดต่อใบ (px)
  gap?: number;           // ระยะห่างการ์ด (px)
  duration?: number;      // ระยะเวลาเลื่อน 1 รอบ (วินาที)
  skewDeg?: number;       // องศา skew ทั้งแถว
  className?: string;     // เพิ่มคลาสภายนอกได้
  title?: string;         // หัวข้อส่วนงาน (ใส่ก็ได้ไม่ใส่ก็ได้)
  id?: string;            // สำหรับลิงก์เมนู (#work)
};

export default function SkewGallery({
  items,
  rows = 3,
  cardWidth = 520,
  cardHeight = 300,
  gap = 24,
  duration = 28,
  skewDeg = 4,
  className = "",
  title,
  id,
}: SkewGalleryProps) {
  // เตรียมข้อมูลให้ครบทุกแถว (วนซ้ำให้พอ)
  const perRow = Math.max(1, Math.ceil(items.length / rows));
  const rowsData = Array.from({ length: rows }, (_, r) => {
    // สลับเริ่มต้นคนละจุด ให้ภาพไม่ซ้ำกันเป๊ะ ๆ ระหว่างแถว
    const offset = Math.floor((r * perRow) / 2);
    const slice = items
      .slice(offset)
      .concat(items.slice(0, offset)); // หมุน array
    return slice;
  });

  return (
    <section id={id} className={`relative ${className}`}>
      {/* หัวข้อ (ถ้าส่งมา) */}
      {title ? (
        <div className="mb-8 text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 backdrop-blur">
            <span className="text-sm text-white/80">Work</span>
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white">
            {title}
          </h2>
        </div>
      ) : null}

      {/* กล่องรวมทั้งหมด + เอฟเฟกต์ขอบเฟด + มุมมอง perspective */}
      <div
        className="mask-edge relative overflow-hidden rounded-3xl from-white/5 to-white/[0.02] p-4"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          className="space-y-8"
          style={{
            // สั่ง skew ทั้งบล็อก (ให้เอียงแบบตัวอย่าง)
            transform: `skewX(${skewDeg}deg) skewY(${skewDeg}deg)`,
          }}
        >
          {rowsData.map((row, rowIndex) => (
            <MarqueeRow
              // เคลื่อนสลับฝั่ง: แถวคู่ไปทางขวา, แถวคี่ไปทางซ้าย
              key={rowIndex}
              items={row}
              reverse={rowIndex % 2 === 1}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              gap={gap}
              duration={duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  cardWidth,
  cardHeight,
  gap,
  duration,
}: {
  items: Item[];
  reverse?: boolean;
  cardWidth: number;
  cardHeight: number;
  gap: number;
  duration: number;
}) {
  // ทำ list ซ้ำ 2 ชุด เพื่อให้เลื่อนไร้รอยต่อ
  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  return (
    <div
      className="skew-marquee-row"
      style={
        {
          // ส่งค่าไปใช้ใน CSS (globals.css)
          // เวลา/ระยะห่าง/ทิศทาง
          ["--marquee-duration" as any]: `${duration}s`,
          ["--marquee-gap" as any]: `${gap}px`,
          ["--marquee-dir" as any]: reverse ? "-1" : "1",
        } as React.CSSProperties
      }
    >
      <ul className="skew-marquee-track">
        {loopItems.map((item, i) => {
          const Card = (
            <figure
              key={`${item.src}-${i}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/8 to-white/[0.04] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                marginRight: `${gap}px`,
              }}
            >
              {/* ภาพงาน */}
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                sizes={`${cardWidth}px`}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i < 6} // เร่งโหลดใบบน ๆ ให้ลื่น
              />

              {/* ไลท์สปอตเบา ๆ */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_-100px,rgba(140,90,255,0.25),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_-20%_120%,rgba(110,150,255,0.2),transparent_55%)]" />

              {/* เส้นไฮไลต์ขอบ */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </figure>
          );

          return item.href ? (
            <li key={`${item.src}-${i}`}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {Card}
              </a>
            </li>
          ) : (
            <li key={`${item.src}-${i}`}>{Card}</li>
          );
        })}
      </ul>
    </div>
  );
}
