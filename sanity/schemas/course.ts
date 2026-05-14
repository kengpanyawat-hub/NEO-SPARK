import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'course',
  title: 'คอร์สเรียน (Courses)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'ชื่อคอร์ส', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'cover', title: 'รูปปก', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'price', title: 'ราคา (บาท)', type: 'number' }),
    defineField({ name: 'summary', title: 'คำอธิบายสั้น', type: 'text', rows: 3 }),
    defineField({ name: 'syllabus', title: 'หัวข้อที่เรียน', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'ลำดับการแสดง', type: 'number' }),
  ],
  preview: { select: { title: 'title', subtitle: 'price', media: 'cover' } },
})
