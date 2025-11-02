// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

type NavItem = { href: string; label: string; isActive: (path: string) => boolean; badge?: string };

const NAV: NavItem[] = [
  { href: "/", label: "Home", isActive: (p) => p === "/" },
  { href: "/services", label: "Services", isActive: (p) => p.startsWith("/services") },
  { href: "/works", label: "Work", isActive: (p) => p.startsWith("/works") },
  { href: "/about", label: "About", isActive: (p) => p.startsWith("/about") },
  { href: "/courses", label: "Courses", isActive: (p) => p.startsWith("/courses") },
  { href: "/blog", label: "Blog", isActive: (p) => p.startsWith("/blog") },
  { href: "/contact", label: "Contact", isActive: (p) => p.startsWith("/contact") },
    // 👇 เพิ่มเมนู “รวมเครื่องมือ AI”
  {
    href: "/ai-tools",
    label: "รวมเครื่องมือ AI",
    isActive: (p) => p.startsWith("/ai-tools"),
    badge: "ฟรี",
  },
];

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const btnId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    function onClick(e: MouseEvent) {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="container-xl">
        <div className="rounded-[2.25rem] border border-white/10 bg-[#1f1c25]/80 backdrop-blur-md shadow-glow supports-[backdrop-filter]:bg-[#1f1c25]/70">
          <div className="flex h-[64px] items-center gap-3 px-4 sm:px-6">
            {/* Brand */}
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Image src="/logo.svg" alt="NEO SPARK" width={28} height={28} className="rounded-xl shadow-glow" />
              <span className="font-semibold tracking-wide">
                <span className="gradient-text">NEO</span> SPARK
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="ml-4 hidden md:flex flex-1 items-center justify-center gap-1">
              {NAV.map((n) => {
                const active = n.isActive(pathname);
                const isAi = n.href === "/ai-tools";
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "group relative px-3 py-2 rounded-xl text-sm transition",
                      "hover:bg-white/5 hover:text-white",
                      active ? "bg-white/10 text-white" : "text-white/80"
                    )}
                  >
                    <span className="inline-flex items-center gap-1">
                      {isAi && <Sparkles size={16} className="opacity-90" />}
                      {n.label}
                      {/* Badge “ฟรี” */}
                      {n.badge && (
                        <span className="ml-1 rounded-full bg-rose-500 px-1.5 py-[2px] text-[10px] font-semibold text-white shadow-sm">
                          {n.badge}
                        </span>
                      )}
                    </span>
                    {/* underline hover */}
                    <span
                      className={cn(
                        "pointer-events-none absolute -bottom-1 left-3 right-3 h-px bg-white/25 transition opacity-0",
                        "group-hover:opacity-100"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA — ขวา */}
            <div className="ml-auto hidden md:block">
              <Link
                href="https://lin.ee/pORMgWT"
                aria-label="เริ่มต้นคุยงาน"
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-[1.25rem] px-5 py-2.5 text-sm font-semibold text-white",
                  "bg-[linear-gradient(135deg,#a855f7_0%,#8b5cf6_35%,#d946ef_70%,#ec4899_100%)]",
                  "shadow-[0_10px_28px_rgba(168,85,247,.45),0_2px_0_rgba(255,255,255,.08)_inset] ring-1 ring-white/15",
                  "before:absolute before:inset-x-2 before:-top-1.5 before:h-6 before:rounded-full before:bg-white/18 before:blur-md before:content-['']",
                  "hover:shadow-[0_14px_36px_rgba(236,72,153,.45)] hover:saturate-[1.05] hover:-translate-y-0.5 active:translate-y-0 transition"
                )}
              >
                <MessageCircle size={18} className="opacity-95" />
                เริ่มต้นคุยงาน
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="ml-auto md:hidden">
              <button
                id={btnId}
                aria-controls="nav-panel"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/90 ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-neo-violet/60"
              >
                <span className="sr-only">เมนู</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={cn("transition", open && "opacity-0")}>
                  <path d="M4 6h16M4 12h16M8 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={cn("absolute transition", !open && "opacity-0")}>
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile panel */}
          <div
            id="nav-panel"
            ref={panelRef}
            className={cn(
              "md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
              open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="px-4 pb-4 sm:px-6">
              <nav className="grid gap-1">
                {NAV.map((n) => {
                  const active = n.isActive(pathname);
                  return (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-3 text-base",
                        "ring-1 ring-inset ring-white/10 bg-white/[.04] hover:bg-white/10 transition",
                        active ? "text-white" : "text-white/80"
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        {n.href === "/ai-tools" && <Sparkles size={18} className="opacity-90" />}
                        {n.label}
                        {n.badge && (
                          <span className="ml-1 rounded-full bg-rose-500 px-1.5 py-[2px] text-[10px] font-semibold text-white">
                            {n.badge}
                          </span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative inline-flex w-full justify-center items-center gap-2 rounded-[1.25rem] px-5 py-3 text-base font-semibold text-white",
                    "bg-[linear-gradient(135deg,#a855f7_0%,#8b5cf6_35%,#d946ef_70%,#ec4899_100%)]",
                    "shadow-[0_10px_28px_rgba(168,85,247,.45),0_2px_0_rgba(255,255,255,.08)_inset] ring-1 ring-white/15",
                    "before:absolute before:inset-x-3 before:-top-2 before:h-7 before:rounded-full before:bg-white/18 before:blur-md before:content-['']",
                    "hover:shadow-[0_14px_36px_rgba(236,72,153,.45)] hover:saturate-[1.05]"
                  )}
                >
                  <MessageCircle size={18} className="opacity-95" />
                  เริ่มต้นคุยงาน
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
