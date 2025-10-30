// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ✅ ใช้ "named import" สำหรับคอมโพเนนต์ที่ export เป็น named
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";

// ✅ ใช้ "default import" สำหรับคอมโพเนนต์ที่ export default
import NeoBackground from "@/components/effects/NeoBackground";
import ScrollProgress from "@/components/effects/ScrollProgress";
import MouseGlow from "@/components/effects/MouseGlow";

export const metadata: Metadata = {
  title: "NEO SPARK AGENCY — One-Stop Creative & Performance",
  description:
    "เอเจนซี่การตลาดออนไลน์ครบวงจร รับทำเว็บไซต์ กราฟิก โมชัน วิดีโอ โฆษณา และอีเวนต์",
  alternates: { canonical: "https://neo-spark.agency" },
  openGraph: {
    title: "NEO SPARK AGENCY",
    images: ["/og.jpg"],
    type: "website",
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="font-prompt antialiased bg-[#09070E] text-white">
        {/* พื้นหลังเคลื่อนไหว */}
        <NeoBackground />

        {/* เอฟเฟกต์เพิ่มเติม */}
        <MouseGlow />
        <ScrollProgress />

        {/* โครงหลัก */}
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
