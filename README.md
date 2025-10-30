# NEO SPARK AGENCY (Next.js 14)

เว็บไซต์เอเจนซี่ธีมดำ-ม่วง พร้อมแอนิเมชัน BG, โครงคอมโพเนนต์แก้ง่าย, บทความ 50 ชิ้น (แก้ได้ที่ `/data/posts.ts`), และพร้อม Deploy บน Vercel

## ใช้งาน
```bash
pnpm i
pnpm dev
# ตรวจคุณภาพ
pnpm typecheck && pnpm lint
# สร้าง sitemap จาก SITE_URL
SITE_URL=https://neo-spark.agency pnpm build && pnpm postbuild
```

### แก้คอนเทนต์
- ข้อมูลบริษัท/ลิงก์: `/data/site.ts`
- บริการ: `/data/services.ts`
- ลูกค้า: `/data/clients.ts`
- คำถามพบบ่อย: `/data/faq.ts`
- คอร์ส: `/data/courses.ts` (ปุ่มสั่งซื้อไป LINE OA)
- ผลงาน: `/data/works.ts`
- บทความ: `/data/posts.ts` (50 รายการตัวอย่าง)

### Deploy Vercel
1) สร้างโปรเจกต์ใหม่ใน Vercel แล้วเชื่อม Git repo นี้  
2) ตั้ง Environment Variable: `SITE_URL=https://โดเมนจริง`  
3) Deploy — SSL/HTTPS อัตโนมัติ  
4) Add Domain และตั้ง DNS ตามที่ Vercel แนะนำ

> หมายเหตุ: โปรเจกต์นี้ไม่มี e-commerce และไม่มี CMS ตามสเปก สามารถต่อยอดเป็น Directus/Sanity ภายหลังได้
