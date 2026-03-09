import { CollectionConfig } from 'payload'

export const Content: CollectionConfig = {
  slug: 'content',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
