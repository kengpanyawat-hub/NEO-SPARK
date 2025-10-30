// components/Footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneCall, Mail, ArrowUpRight, MessageCircle } from "lucide-react";


/** ------- Config ------- */
const COMPANY = "NEO SPARK AGENCY";
const ADDRESS_LINE_1 =
  "38/1742 KC Village 7, Thai Ramman Road,Sam Wa Tawan Subdistrict,";
const ADDRESS_LINE_2 = "Khlong Sam Wa District, Bangkok 10510";
const TAX_ID = "0125565000041";

const TEL_DISPLAY = "061-552-2545";
const TEL_LINK = "tel:0615522545";
const LINE_ID = "@neo.spark";
const LINE_LINK = "https://lin.ee/pORMgWT";
const EMAIL = "neo.spark@gmail.com";

function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-16" aria-labelledby="site-footer">
      <div className="relative overflow-hidden">
        {/* BG gradient + glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_15%_-10%,hsl(var(--brand)/.28),transparent_45%),radial-gradient(900px_520px_at_90%_120%,hsl(var(--brand-2)/.22),transparent_42%),linear-gradient(180deg,#150c1f,#07060b)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--glow)/.35),transparent_60%)]" />

        {/* Content */}
        <div id="site-footer" className="mx-auto max-w-7xl px-6 py-12 md:py-16 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            {COMPANY}
          </h3>
          <p className="mt-3 text-white/80">
            {ADDRESS_LINE_1}
            <br />
            {ADDRESS_LINE_2}
          </p>
          <p className="mt-1 text-sm text-white/60">Tax id : {TAX_ID}</p>

          {/* divider */}
          <div className="mx-auto my-6 h-px w-[880px] max-w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Contact chips (ไอคอนใหม่) */}
          <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 sm:grid-cols-3">
            <Chip href={TEL_LINK} aria="โทรศัพท์">
              <IconBadge>
                <PhoneCall size={18} strokeWidth={2} />
              </IconBadge>
              <span className="text-lg font-medium">{TEL_DISPLAY}</span>
            </Chip>

            <Chip href={LINE_LINK} aria="LINE OA" external>
			  <IconBadge className="text-white">
				<MessageCircle size={18} strokeWidth={2} />
			  </IconBadge>
			  <span className="text-lg font-medium">LINE : {LINE_ID}</span>
			  <ArrowUpRight size={16} className="ml-1 opacity-70" />
			</Chip>

            <Chip href={`mailto:${EMAIL}`} aria="อีเมล">
              <IconBadge>
                <Mail size={18} strokeWidth={2} />
              </IconBadge>
              <span className="text-lg font-medium">{EMAIL}</span>
            </Chip>
          </div>

          {/* Quick links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Ghost href="/works">ผลงาน</Ghost>
            <Ghost href="/services#pricing">บริการและราคา</Ghost>
            <Ghost href="/#faq">คำถามที่พบบ่อย</Ghost>
            <Ghost href="/privacy">นโยบายความเป็นส่วนตัว</Ghost>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-xs text-white/50">
            © {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
        </div>

        {/* Back to top */}
        {showTop && (
          <button
            aria-label="กลับขึ้นด้านบน"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed left-5 bottom-24 z-40 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black shadow-lg ring-1 ring-black/10 transition hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}

/* ========= UI ========= */

function Chip({
  href,
  children,
  aria,
  external,
}: {
  href: string;
  children: React.ReactNode;
  aria?: string;
  external?: boolean;
}) {
  const isInternal = href.startsWith("/");
  const base =
    "inline-flex items-center gap-3 rounded-full px-5 py-3 " +
    "bg-white/[0.08] text-white ring-1 ring-white/15 backdrop-blur " +
    "hover:bg-white/[0.12] transition shadow-[0_0_18px_hsl(var(--brand)/.25)]";

  if (!isInternal) {
    return (
      <a
        href={href}
        aria-label={aria}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={aria} className={base}>
      {children}
    </Link>
  );
}

function Ghost({ href, children }: { href: string; children: React.ReactNode }) {
  const isInternal = href.startsWith("/");
  const cls =
    "inline-flex items-center justify-center rounded-full px-6 py-3 " +
    "text-white/85 ring-1 ring-white/15 hover:bg-white/10 transition";
  return isInternal ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

function IconBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={
        "inline-grid h-9 w-9 place-items-center rounded-full " +
        "bg-white/10 text-white ring-1 ring-white/15 shadow-sm " +
        className
      }
    >
      {children}
    </span>
  );
}

/* ========= Icons ========= */
/** โลโก้ LINE เวกเตอร์คมชัด */
function LineGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden className={className}>
      <circle cx="24" cy="24" r="24" fill="#00C300" />
      <path
        d="M34.5 20.2c0-5.2-5.2-9.4-11.6-9.4S11.3 15 11.3 20.2c0 3.8 3.3 7.2 8.3 7.8.3.1.8.2.9.6.1.4.1 1 .1 1.4l-.2 1.1c-.1.3-.2 1.1 1 0.6 1.7-.7 7.3-4.2 9.5-6.7 1.9-2 3.6-4.4 3.6-6.6Z"
        fill="#fff"
      />
    </svg>
  );
}

/* ให้ import ได้ทั้ง default และ named */
export default Footer;
export { Footer };
