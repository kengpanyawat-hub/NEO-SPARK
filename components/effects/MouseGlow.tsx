"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const fn = (e: MouseEvent) => {
      el.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 350, fill: "forwards" });
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[1] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full
                 blur-3xl opacity-35"
      style={{
        background:
          "radial-gradient(closest-side, rgba(139,92,246,.40), rgba(217,70,239,.28), rgba(236,72,153,.18), transparent 70%)",
      }}
    />
  );
}
