import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'รีวิวลูกค้า (Testimonials)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'ชื่อลูกค้า', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'company', title: 'บริษัท/ร้านค้า', type: 'string' }),
    defineField({ name: 'photo', title: 'รูปโปรไฟล์', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'text', title: 'ข้อความรีวิว', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'rating', title: 'คะแนน (1-5)', type: 'number', validation: (r) => r.min(1).max(5), initialValue: 5 }),
    defineField({ name: 'order', title: 'ลำดับการแสดง', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'company', media: 'photo' } },
})
