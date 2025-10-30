// components/effects/NeoBackground.tsx
"use client";
import { useEffect, useRef } from "react";

export default function NeoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    // สร้างอนุภาคเรืองแสง
    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.7,
      });
    }

    function draw() {
      // พื้นหลังมืดบาง ๆ เพื่อให้อนุภาคเด่นขึ้น
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(10,7,17,0.8)";
      ctx.fillRect(0, 0, w, h);

      // วาดจุดเรืองแสง
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 22);
        g.addColorStop(0, "rgba(168,85,247,0.3)");  // violet
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 22, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      // fixed + -z เพื่อให้อยู่หลังทุกอย่างแบบแน่นอน
      style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}
      aria-hidden
    >
      {/* เลเยอร์ไล่เฉดหลัก (เคลื่อนไหวช้า ๆ) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 60% at 20% 10%, rgba(139,92,246,0.14), transparent 60%)," + // violet
            "radial-gradient(60% 80% at 90% 20%, rgba(236,72,153,0.12), transparent 60%)," + // pink
            "linear-gradient(180deg, rgba(5,2,8,0.9) 0%, rgba(5,2,8,0.6) 100%)",
          animation: "neoFloat 22s ease-in-out infinite",
        }}
      />
      {/* เลเยอร์เสริมให้มีมิติ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          mixBlendMode: "screen",
          background:
            "radial-gradient(50% 50% at 70% 80%, rgba(59,130,246,0.12), transparent 60%)", // blue
          animation: "neoFloatReverse 28s ease-in-out infinite",
        }}
      />
      {/* ผืน Canvas สำหรับอนุภาค */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      />
    </div>
  );
}
