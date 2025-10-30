// app/contact/page.tsx
import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "ติดต่อเรา | NEO SPARK",
  description:
    "คุยโจทย์ • ประเมินงบ • นัดเริ่มงานไว — ติดต่อทีม NEO SPARK ได้ทางโทรศัพท์, LINE OA, Facebook หรืออีเมล",
  alternates: { canonical: "https://neo-spark.agency/contact" },
  openGraph: {
    title: "ติดต่อ NEO SPARK",
    description:
      "คุยโจทย์ • ประเมินงบ • นัดเริ่มงานไว — โทร / LINE OA / Facebook พร้อมทีมตอบไวในเวลาทำการ",
    type: "website",
    url: "https://neo-spark.agency/contact",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo.svg" },
};

export default function Page() {
  return (
    <>
      {/* เผื่ออยากวาง JSON-LD ในอนาคต สามารถเติม <script type="application/ld+json"> ได้ที่นี่ */}
      <ContactView />
    </>
  );
}
