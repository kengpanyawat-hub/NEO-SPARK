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
    gallery: ["/works/work01.jpg", "/works/work01.jpg", "/works/work01.jpg"],
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
  {
    slug: "portfolio-3",
    title: "ผลงานเด่น #3",
    category: "Web",
    cover: "/works/work03.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work03.jpg"],
  },
  {
    slug: "portfolio-4",
    title: "ผลงานเด่น #4",
    category: "Graphic",
    cover: "/works/work04.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work04.jpg"],
  },
  {
    slug: "portfolio-5",
    title: "ผลงานเด่น #5",
    category: "Motion",
    cover: "/works/work05.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work05.jpg"],
  },
  {
    slug: "portfolio-6",
    title: "ผลงานเด่น #6",
    category: "Video",
    cover: "/works/work01.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work01.jpg"],
  },
  {
    slug: "portfolio-7",
    title: "ผลงานเด่น #7",
    category: "Ads",
    cover: "/works/work02.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work02.jpg"],
  },
  {
    slug: "portfolio-8",
    title: "ผลงานเด่น #8",
    category: "Event",
    cover: "/works/work03.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work03.jpg"],
  },
  {
    slug: "portfolio-9",
    title: "ผลงานเด่น #9",
    category: "Web",
    cover: "/works/work04.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work04.jpg"],
  },
  {
    slug: "portfolio-10",
    title: "ผลงานเด่น #10",
    category: "Graphic",
    cover: "/works/work05.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work05.jpg"],
  },
  {
    slug: "portfolio-11",
    title: "ผลงานเด่น #11",
    category: "Motion",
    cover: "/works/work01.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work01.jpg"],
  },
  {
    slug: "portfolio-12",
    title: "ผลงานเด่น #12",
    category: "Ads",
    cover: "/works/work02.jpg",
    summary: "ตัวอย่างชิ้นงานคุณภาพจากอุตสาหกรรมหลากหลาย",
    content: [
      "วางโจทย์และเป้าหมายร่วมกับลูกค้าเพื่อให้วัดผลได้",
      "ออกแบบงานให้สอดคล้องกับภาพลักษณ์แบรนด์",
      "ส่งมอบไฟล์ต้นฉบับพร้อมแนวทางใช้งาน",
    ],
    gallery: ["/works/work02.jpg"],
  },
];
