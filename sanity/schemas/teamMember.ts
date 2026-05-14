import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'ทีมงาน (Team)',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'ชื่อ-นามสกุล', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'ตำแหน่ง', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'photo', title: 'รูปภาพ', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'ประวัติสั้น', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'ลำดับการแสดง', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ title: 'ลำดับ', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})
