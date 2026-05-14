import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'พาร์ทเนอร์ (Partners)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'ชื่อบริษัท/แบรนด์', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'โลโก้', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'url', title: 'เว็บไซต์ (ถ้ามี)', type: 'url' }),
    defineField({ name: 'order', title: 'ลำดับการแสดง', type: 'number' }),
  ],
  preview: { select: { title: 'name', media: 'logo' } },
})
