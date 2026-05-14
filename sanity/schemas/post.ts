import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'บทความ (Blog)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'หัวข้อบทความ', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'cover', title: 'รูปปก', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'คำโปรยสั้น', type: 'text', rows: 3 }),
    defineField({ name: 'author', title: 'ผู้เขียน', type: 'string', initialValue: 'NEO SPARK AGENCY' }),
    defineField({ name: 'category', title: 'หมวดหมู่', type: 'string', options: { list: ['Marketing','Design','Web','Video','Ads','Event'] } }),
    defineField({ name: 'tags', title: 'แท็ก', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'content', title: 'เนื้อหา', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'takeaway', title: 'สรุปประเด็นสำคัญ', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'วันที่เผยแพร่', type: 'date' }),
    defineField({ name: 'featured', title: 'แสดงในหน้าหลัก', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'cover' } },
})
