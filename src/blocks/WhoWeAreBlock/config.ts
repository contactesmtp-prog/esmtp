import { Block } from 'payload'
import { link } from '@/fields/link'

export const whoWeAre: Block = {
  slug: 'whoWeAre',
  interfaceName: 'whoweareInter',
  labels: {
    singular: 'Features Section (Tabs)',
    plural: 'Features Sections (Tabs)',
  },

  fields: [
    {
      name: 'header',
      type: 'text',
      label: 'Section Header',
      required: true,
    },
    link(),
    {
      name: 'subheader',
      type: 'text',
      label: 'Sub-heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Image',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Tab Title',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Tab Description',
        },
      ],
    },
  ],
}
