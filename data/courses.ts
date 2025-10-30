// data/courses.ts
export type Course = {
  slug: string;
  title: string;
  price: number;
  summary: string;
  cover?: string;
  syllabus?: string[];
};
export const courses: Course[] = [
  {
    slug: "brand-bootcamp",
    title: "Brand Bootcamp",
    price: 4900,
    summary: "ปูพื้นฐานแบรนด์และคอนเทนต์ให้ขายได้จริง พร้อมเทมเพลตทำงานไว",
    cover: "/covers/course01.jpg",
    syllabus: ["แก่นแบรนด์ & บุคลิก", "ระบบคอนเทนต์รายสัปดาห์", "ตัวชี้วัดและการรีพอร์ต"],
  },
  {
    slug: "web-starter",
    title: "Web Starter Next.js",
    price: 5900,
    summary: "พื้นฐานทำเว็บมืออาชีพ: โครงสร้าง, SEO, ความเร็ว และการดีพลอย",
    cover: "/covers/course02.jpg",
    syllabus: ["โครงสร้างหน้าเว็บที่ Google ชอบ", "Landing/CTA ที่แปลงยอด", "Deploy & โดเมน"],
  },
  {
    slug: "ads-master",
    title: "Ads Master",
    price: 6900,
    summary: "วางโครงโฆษณา 60/30/10, การทดสอบครีเอทีฟ และการวัดผล",
    cover: "/covers/course03.jpg",
    syllabus: ["Framework โฆษณา", "A/B Test ครีเอทีฟ", "แดชบอร์ดสรุปผล"],
  },
];
