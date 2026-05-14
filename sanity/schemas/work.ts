import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'ผลงาน (Works)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'ชื่อโปรเจกต์', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'ประเภทงาน', type: 'string', options: { list: ['web','graphic','motion','ads','event','retainer'] } }),
    defineField({ name: 'cover', title: 'รูปปก', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'images', title: 'รูปภาพเพิ่มเติม', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'client', title: 'ชื่อลูกค้า', type: 'string' }),
    defineField({ name: 'excerpt', title: 'คำอธิบายสั้น', type: 'text', rows: 3 }),
    defineField({ name: 'content', title: 'รายละเอียดโปรเจกต์', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'tags', title: 'แท็ก', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'วันที่', type: 'date' }),
    defineField({ name: 'featured', title: 'แสดงในหน้าหลัก', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'ลำดับการแสดง', type: 'number' }),
  ],
  orderings: [{ title: 'ลำดับ', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'client', media: 'cover' } },
})
