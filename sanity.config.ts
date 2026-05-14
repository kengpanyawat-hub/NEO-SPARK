import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'neo-spark-agency',
  title: 'NEO SPARK AGENCY — CMS',
  projectId: 'q1yi73pl',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('เมนูหลัก')
          .items([
            S.listItem()
              .title('⚙️ ข้อมูลบริษัท')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem().title('🏆 ผลงาน (Works)').child(S.documentTypeList('work')),
            S.listItem().title('📝 บทความ (Blog)').child(S.documentTypeList('post')),
            S.listItem().title('👥 ทีมงาน (Team)').child(S.documentTypeList('teamMember')),
            S.listItem().title('🛠️ บริการ (Services)').child(S.documentTypeList('service')),
            S.listItem().title('⭐ รีวิวลูกค้า').child(S.documentTypeList('testimonial')),
            S.listItem().title('🎓 คอร์สเรียน').child(S.documentTypeList('course')),
            S.listItem().title('🤝 พาร์ทเนอร์').child(S.documentTypeList('partner')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
