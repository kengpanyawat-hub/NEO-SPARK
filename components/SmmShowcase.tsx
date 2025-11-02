"use client";

import {
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaFacebookSquare,
  FaSpotify,
  FaTiktok,
  FaTelegramPlane,
  FaDiscord,
  FaSnapchatGhost,
  FaApple,
  FaSoundcloud,
  FaRedditAlien,
  FaLinkedinIn,
  FaSteam,
  FaPinterest,
  FaTumblr,
} from "react-icons/fa";

type Brand = { label: string; Icon: React.ComponentType<{ className?: string }> };

const rowTop: Brand[] = [
  { label: "Snapchat", Icon: FaSnapchatGhost },
  { label: "Instagram", Icon: FaInstagram },
  { label: "Twitch", Icon: FaTwitch },
  { label: "Twitter", Icon: FaTwitter },
  { label: "YouTube", Icon: FaYoutube },
  { label: "Facebook", Icon: FaFacebookSquare },
  { label: "Spotify", Icon: FaSpotify },
  { label: "TikTok", Icon: FaTiktok },
  { label: "Telegram", Icon: FaTelegramPlane },
  { label: "Discord", Icon: FaDiscord },
];

const rowBottom: Brand[] = [
  { label: "Apple Music", Icon: FaApple },
  { label: "SoundCloud", Icon: FaSoundcloud },
  { label: "Reddit", Icon: FaRedditAlien },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "Steam", Icon: FaSteam },
  { label: "Pinterest", Icon: FaPinterest },
  { label: "Tumblr", Icon: FaTumblr },
];

function RowMarquee({
  items,
  reverse,
  speed = 45, // วินาที/รอบ
}: {
  items: Brand[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden
    >
      <div
        className={`ns-marquee-track flex gap-4 md:gap-6 items-center ${
          reverse ? "ns-anim-reverse" : "ns-anim"
        }`}
        style={
          {
            // กำหนดระยะเวลาให้ปรับได้
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {doubled.map(({ label, Icon }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-3.5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            role="img"
            aria-label={label}
          >
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white/90" />
            <span className="text-sm md:text-base text-white/90">{label}</span>
          </div>
        ))}
      </div>

      {/* keyframes + บังคับ !important ให้ชนะกฎ global reduce-motion */}
      <style jsx>{`
        @keyframes ns-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* 50% เพราะเราซ้ำรายการ 2 ชุด */
        }
        @keyframes ns-marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ns-marquee-track { width: max-content; will-change: transform; }
        .ns-anim {
          animation: ns-marquee var(--marquee-duration, 45s) linear infinite !important;
        }
        .ns-anim-reverse {
          animation: ns-marquee-reverse var(--marquee-duration, 45s) linear infinite !important;
        }
      `}</style>
    </div>
  );
}

export default function SmmShowcase() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-14 md:py-20">
      {/* BG ไฮไลต์เบา ๆ */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_300px_at_50%_-20%,rgba(129,65,219,0.25),transparent_60%)]" />

      {/* Headline */}
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
          เครื่องมือเพิ่มยอดไลค์ เพิ่มยอดผู้ติดตาม{" "}
          <span className="text-violet-300">สร้างความน่าเชื่อถือ</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-300">
          บริการเว็บปั้มไลค์ คุณภาพสูง รวดเร็ว และราคาต่ำสุดในตลาด ครบทุก Social สั่งงานอัตโนมัติ ได้ตลอด 24 ชม. เพิ่มความน่าเชื่อถือให้โซเชียลมีเดียของคุณ
        </p>

        <div className="mt-6">
          <a
            href="https://kmm-th.com/ref/kt7y7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm md:text-base font-medium text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 hover:opacity-95 transition"
          >
            ใช้งานเลย
          </a>
        </div>
      </div>

      {/* Marquees */}
      <div className="space-y-5 md:space-y-6">
        <RowMarquee items={rowTop} speed={50} />
        <RowMarquee items={rowBottom} reverse speed={40} />
      </div>
    </section>
  );
}
