import type { Block } from 'payload'
import { link } from '@/fields/link'

export const Partners: Block = {
  slug: 'partners',
  interfaceName: 'partnersInter',
  labels: {
    singular: 'Partners Block',
    plural: 'Partners Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'partners',
      label: 'Partners List',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Partner Name',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
