// data/works.ts
export type Work = {
  slug: string;
  title: string;
  category: "Web" | "Graphic" | "Motion" | "Video" | "Event" | "Ads";
  cover?: string;
  summary?: string;
  content?: string[];
  gallery?: string[];
};

export const works: Work[] = [
  {
    slug: "neo-corp-website",
    title: "Corporate Website – NEO Corp",
    category: "Web",
    cover: "/works/work01.jpg",
    summary: "เว็บองค์กรสไตล์มินิมอล โหลดไว รองรับ SEO และหลายภาษา",
    content: [
      "ออกแบบและพัฒนาเว็บไซต์ด้วย Next.js + SSR/ISR เพื่อรองรับปริมาณทราฟฟิกสูง",
      "เชื่อมต่อแบบฟอร์มและระบบส่งอีเมล พร้อมแดชบอร์ดรายงานเบื้องต้น",
      "ปรับ Core Web Vitals ให้ได้คะแนนผ่านเกณฑ์ของ Google",
    ],
    gallery: ["/works/work01.jpg", "/works/work01-2.jpg", "/works/work01-3.jpg"],
  },
  {
    slug: "spark-motion-launch",
    title: "Motion Launch Teaser – SPARK",
    category: "Motion",
    cover: "/works/work02.jpg",
    summary: "โมชั่นทีเซอร์เปิดตัวสินค้า ตัดต่อเร็ว จังหวะดึงดูด",
    content: [
      "ออกแบบสตอรี่บอร์ดและไทโปโมชั่นสำหรับวิดีโอ 30 วินาที",
      "จัดทำคีย์วิชวลสำหรับนำไปต่อยอดโฆษณา",
    ],
    gallery: ["/works/work02.jpg"],
  },
  // ใส่รายการตัวอย่างเพิ่ม
  ...Array.from({ length: 10 }).map((_, i) => ({
    slug: `portfolio-${i + 3}`,
    title: `ผลงานเด่น #${i + 3}`,
    category: (["Web", "Graphic", "Motion", "Video", "Event", "Ads"] as const)[i % 6],
    cover: `/works${String(i + 3).padStart(2, "0")}.jpg`,
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
  })),
];
