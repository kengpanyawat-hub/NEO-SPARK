import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'บริการ (Services)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'ชื่อบริการ', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'desc', title: 'คำอธิบาย', type: 'text', rows: 3 }),
    defineField({ name: 'features', title: 'จุดเด่น', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'plans',
      title: 'แพ็กเกจราคา',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'ชื่อแพ็กเกจ', type: 'string' },
          { name: 'price', title: 'ราคา (บาท)', type: 'number' },
          { name: 'period', title: 'ช่วงเวลา', type: 'string', options: { list: ['/ครั้ง', '/เดือน'] } },
          { name: 'label', title: 'ป้าย (เช่น แนะนำ)', type: 'string' },
          { name: 'features', title: 'รายละเอียดแพ็กเกจ', type: 'array', of: [{ type: 'string' }] },
        ],
      }],
    }),
    defineField({ name: 'order', title: 'ลำดับการแสดง', type: 'number' }),
  ],
  preview: { select: { title: 'title', subtitle: 'desc' } },
})
