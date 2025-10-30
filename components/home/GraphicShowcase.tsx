"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function GraphicCoverflow() {
  const items = useMemo(
    () => [
      { src: "/graphics/g1.jpg", alt: "Landing KV" },
      { src: "/graphics/g2.jpg", alt: "Event Backdrop" },
      { src: "/graphics/g3.jpg", alt: "Product KV" },
      { src: "/graphics/g4.jpg", alt: "OOH Visual" },
      { src: "/graphics/g5.jpg", alt: "Campaign Set" },
      { src: "/graphics/g6.jpg", alt: "Booth Visual" },
      { src: "/graphics/g7.jpg", alt: "Brand Poster" },
      { src: "/graphics/g8.jpg", alt: "Social Ads" },
    ],
    []
  );

  return (
    <section className="relative mt-16">
      {/* container: เว้นซ้าย-ขวาเท่ากับส่วนอื่น */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="mb-6 md:mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-neo-violet/90 text-sm font-medium">Graphics • Motion • KV</p>
            <h3 className="shine text-xl sm:text-2xl md:text-3xl font-extrabold">
              ตัวอย่างผลงานกราฟิกดีไซน์ (3D Carousel)
            </h3>
          </div>
          <a
            href="/work#graphics"
            className="hidden md:inline-flex rounded-2xl bg-neo-violet/90 px-4 py-2 text-sm font-semibold text-white shadow-inner shadow-white/20 hover:bg-neo-violet transition"
          >
            ดูผลงานทั้งหมด
          </a>
        </div>

        {/* overflow-hidden + mask จะมาจาก .neo-coverflow (ดูใน globals.css) */}
        <div className="relative neo-coverflow">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard]}
            effect="coverflow"
            grabCursor
            centeredSlides
            centeredSlidesBounds   /* <<< ล็อคขอบสไลด์ให้อยู่ในกรอบ (ไม่ล้นออกนอกกึ่งกลาง) */
            loop
            loopAdditionalSlides={4}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 24,         // ลดมุมลงเล็กน้อยให้ไม่กินพื้นที่กว้างเกิน
              stretch: 0,
              depth: 140,         // ลด depth เพื่อไม่ดันฉากหน้า-หลังล้นกรอบ
              modifier: 1.08,
              slideShadows: true,
            }}
            breakpoints={{
              /* ปรับ slidesPerView ให้ “พอดีกรอบ” ในทุกจอ */
              0:    { slidesPerView: 1.05, spaceBetween: 12 },
              480:  { slidesPerView: 1.25, spaceBetween: 14 },
              640:  { slidesPerView: 1.6,  spaceBetween: 16 },
              768:  { slidesPerView: 2.1,  spaceBetween: 18 },
              1024: { slidesPerView: 2.6,  spaceBetween: 20 },
              1280: { slidesPerView: 2.9,  spaceBetween: 22 },
            }}
            className="!pb-12"
          >
            {items.map((it, idx) => (
              <SwiperSlide key={idx}>
                <figure
                  className="relative mx-auto w-[82vw] max-w-[640px] aspect-[3/2] overflow-hidden rounded-2xl
                             border border-white/12 bg-black/30 backdrop-blur
                             shadow-[0_10px_30px_rgba(0,0,0,.45)]
                             ring-0 transition-all duration-300 hover:-translate-y-0.5 hover:ring-1 hover:ring-neo-violet/40"
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, 640px"
                    className="object-cover"
                    priority={idx < 2}
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-3 text-center text-sm font-medium text-white">
                    <span className="inline-flex rounded-lg bg-black/45 px-3 py-1 backdrop-blur">
                      {it.alt}
                    </span>
                  </figcaption>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
