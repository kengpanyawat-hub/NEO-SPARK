// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import NeoBackground from "@/components/effects/NeoBackground";
import ScrollProgress from "@/components/effects/ScrollProgress";
import MouseGlow from "@/components/effects/MouseGlow";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "NEO SPARK AGENCY — One-Stop Creative & Performance",
  description:
    "เอเจนซี่การตลาดออนไลน์ครบวงจร รับทำเว็บไซต์ กราฟิก โมชัน วิดีโอ โฆษณา และอีเวนต์",
  alternates: { canonical: "https://www.neo-spark-agency.com" },
  openGraph: {
    title: "NEO SPARK AGENCY",
    description: "เอเจนซี่การตลาดออนไลน์ครบวงจร รับทำเว็บไซต์ กราฟิก โมชัน วิดีโอ โฆษณา และอีเวนต์",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "th_TH",
    siteName: "NEO SPARK AGENCY",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEO SPARK AGENCY",
    description: "เอเจนซี่การตลาดออนไลน์ครบวงจร",
    images: ["/og/og-default.jpg"],
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="font-prompt antialiased bg-[#09070E] text-white">
        {/* Analytics */}
        <GoogleAnalytics />
        <MetaPixel />

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

        {/* Cookie Consent PDPA */}
        <CookieConsent />
      </body>
    </html>
  );
}
