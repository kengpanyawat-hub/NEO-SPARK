"use client";

import * as React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  MessageCircle,
  X,
  Link2,
  Facebook,
  Youtube,
  Globe,
  ArrowUpRight,
  Bot,
} from "lucide-react";

// ====== (ออปชัน) นำเข้าลิงก์จากไฟล์คอนฟิกของโปรเจกต์ ======
let EXTERNAL_LINKS: {
  label: string;
  href: string;
  kind: "fb" | "line" | "yt" | "web" | "promo";
  external?: boolean;
  img?: string;
}[] = [];

try {
  // ถ้ามี "@/config/supportLinks" อยู่จริง ให้ใช้ข้อมูลจากนั้น
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require("@/config/supportLinks");
  EXTERNAL_LINKS = mod.SUPPORT_LINKS || mod.default || [];
} catch {
  // ถ้าไม่มีไฟล์ดังกล่าว จะใช้ fallback ด้านล่างแทน
}

// ====== Fallback (กรณีไม่มีไฟล์คอนฟิก) ======
const FALLBACK_LINKS = [
  { label: "Facebook", href: "https://facebook.com/", kind: "fb", external: true },
  { label: "LINE OA", href: "https://line.me/R/ti/p/~@", kind: "line", external: true },
  { label: "YouTube", href: "https://youtube.com/", kind: "yt", external: true },
  { label: "Website", href: "https://neo-spark.agency", kind: "web", external: true },
] as const;

// ====== ไอคอน LINE (โมโนโทน) สีขาวบนพื้นม่วง ======
function LineMonoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width={18} height={18} aria-hidden focusable="false" {...props}>
      {/* ฟองพูด */}
      <path
        d="M36 22.2c0-5-5.1-9-11.4-9S13.2 17.2 13.2 22.2c0 3.7 2.9 6.8 7 8.2-.22 1.6-.84 3.2-2.1 4.6-.28.3-.07.8.34.8 2.6-.4 4.9-1.5 6.5-3.1 6.4-.2 10.1-4.4 10.1-8.5Z"
        fill="currentColor"
      />
      {/* ตัวหนังสือ LINE เงาอ่อน ๆ (ถ้าอยากขาวล้วนลบพาธนี้ได้) */}
      <path
        d="M19 24.8v-6h2v4.4h2v1.6H19Zm6 0v-6h2v6h-2Zm3.8 0v-6H31c1.4 0 2.4.9 2.4 2.2 0 1-.6 1.6-1.4 1.9l1.6 1.9h-2.2l-1.3-1.6h-.3v1.6h-2Zm2-3.1c.5 0 .8-.3.8-.7s-.3-.7-.8-.7h-.3v1.4h.3Zm6.3 3.1-2.1-3.3v3.3h-2v-6h1.9l2.1 3.3V18.8h2v6h-1.9Z"
        fill="#0b041a"
        opacity=".18"
      />
    </svg>
  );
}

// ====== เลือกไอคอนตามชนิดลิงก์ ======
function KindIcon({
  kind,
  className,
}: {
  kind: "fb" | "line" | "yt" | "web" | "promo";
  className?: string;
}) {
  const c = clsx("h-4 w-4", className);
  switch (kind) {
    case "fb":
      return <Facebook className={c} />;
    case "yt":
      return <Youtube className={c} />;
    case "web":
      return <Globe className={c} />;
    case "line":
      return <LineMonoIcon className={c} />;
    default:
      return <Link2 className={c} />;
  }
}

type TabKey = "links" | "bot";

/** =================================================================
 *  FloatingChat
 *  - ปุ่มแชทลอย + กล่องสนทนา/ลิงก์ด่วน
 *  - โทนม่วงสอดคล้องธีมหลัก
 *  ================================================================= */
export function FloatingChat() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState<TabKey>("links");

  const LINKS = EXTERNAL_LINKS.length ? EXTERNAL_LINKS : FALLBACK_LINKS;

  return (
    <>
      {/* ปุ่มลอย */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        className={clsx(
          "fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full",
          "bg-gradient-to-b from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20",
          "ring-1 ring-white/10 hover:brightness-110 transition"
        )}
      >
        <MessageCircle size={22} />
      </button>

      {/* ม่านหลัง */}
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-[2px]"
        />
      )}

      {/* กล่องสนทนา */}
      <div
        className={clsx(
          "fixed bottom-24 right-6 z-[80] w-[360px] max-w-[calc(100vw-24px)]",
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4",
          "transition-all duration-200"
        )}
      >
        {/* Card */}
        <div
          className={clsx(
            "overflow-hidden rounded-2xl border border-white/10 bg-[#0c0a10]/95 text-white",
            "shadow-2xl shadow-fuchsia-800/20 backdrop-blur"
          )}
        >
          {/* Header */}
          <div className="aurora relative flex items-center justify-between gap-2 border-b border-white/10 p-4">
            <div className="flex items-center gap-2">
              <span
                className={clsx(
                  "inline-flex h-7 w-7 items-center justify-center rounded-lg",
                  "bg-violet-500/20 text-white ring-1 ring-violet-400/30"
                )}
              >
                <MessageCircle size={16} />
              </span>
              <div className="leading-tight">
                <p className="font-semibold">NEO SPARK • Support</p>
                <p className="text-xs text-white/60">ปรึกษาสอบถาม — ทักเลย</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/5"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 p-2">
            <button
              onClick={() => setTab("links")}
              className={clsx(
                "flex-1 rounded-xl px-4 py-2 text-sm font-medium transition",
                tab === "links"
                  ? "bg-violet-500/20 text-white ring-1 ring-violet-400/30"
                  : "text-white/70 hover:bg-white/5"
              )}
            >
              ลิงก์ด่วน
            </button>
            <button
              onClick={() => setTab("bot")}
              className={clsx(
                "flex-1 rounded-xl px-4 py-2 text-sm font-medium transition",
                tab === "bot"
                  ? "bg-violet-500/20 text-white ring-1 ring-violet-400/30"
                  : "text-white/70 hover:bg-white/5"
              )}
            >
              แชตบอท
            </button>
          </div>

          {/* Content */}
          {tab === "links" ? (
            <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">
              {LINKS.map((l) => (
                <Link
                  key={l.label + l.href}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  className={clsx(
                    "group inline-flex items-center gap-2 rounded-xl border border-white/10 p-3",
                    "hover:border-violet-400/40 transition"
                  )}
                >
                  {/* ชิพไอคอน — โทนม่วงทั้งหมด */}
                  <span
                    className={clsx(
                      "inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg",
                      "bg-violet-500/15 text-white ring-1 ring-violet-400/25",
                      "group-hover:brightness-110"
                    )}
                  >
                    {l.kind === "promo" && l.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={l.img}
                        alt=""
                        className="h-5 w-5 rounded-[6px] object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <KindIcon kind={l.kind} />
                    )}
                  </span>

                  <span className="font-medium">{l.label}</span>
                  {l.external && (
                    <ArrowUpRight size={16} className="ml-auto opacity-60 group-hover:opacity-100" />
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
                <span></span>
              </div>
              {/* กล่องอินพุต (เดโม่) */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="mb-2 text-sm text-white/70">
                  ทักมาสอบถามปรึกษาฟรี:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
                  <li>อยากคุยงานผ่าน LINE OA</li>
                  <li>ขอผลงานตัวอย่าง / เรตค่าบริการ</li>
                  <li>ทำเว็บ + ระบบ + โฆษณา ทำได้ไหม</li>
                </ul>
                <div className="mt-3">
                  <a
                    href={
                      (LINKS.find((l) => l.kind === "line")?.href as string) ||
                      "https://line.me/R/ti/p/~@"
                    }
                    target="_blank"
                    className={clsx(
                      "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
                      "bg-gradient-to-b from-violet-500 to-fuchsia-600 text-white",
                      "ring-1 ring-white/10 shadow-md shadow-fuchsia-600/20 hover:brightness-110 transition"
                    )}
                  >
                    คุยกับทีมทาง LINE OA <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FloatingChat;
