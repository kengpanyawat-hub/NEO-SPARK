import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'ข้อมูลบริษัท (Site Settings)',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'ชื่อเว็บไซต์', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'คำอธิบายเว็บไซต์', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'โลโก้', type: 'image' }),
    defineField({ name: 'email', title: 'อีเมล', type: 'string' }),
    defineField({ name: 'phone', title: 'เบอร์โทร', type: 'string' }),
    defineField({ name: 'address', title: 'ที่อยู่', type: 'text', rows: 3 }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'tiktok', title: 'TikTok URL', type: 'url' }),
    defineField({ name: 'line', title: 'LINE OA URL', type: 'url' }),
    defineField({
      name: 'stats',
      title: 'สถิติ (Counter)',
      type: 'object',
      fields: [
        { name: 'years', title: 'ปีประสบการณ์', type: 'number', initialValue: 7 },
        { name: 'projects', title: 'โปรเจกต์ที่ทำ', type: 'number', initialValue: 350 },
        { name: 'clients', title: 'ลูกค้าที่ไว้วางใจ', type: 'number', initialValue: 180 },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'ข้อมูลบริษัท' }) },
})
