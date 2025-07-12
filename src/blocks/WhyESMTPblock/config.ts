import { Block } from 'payload'

export const TextImageGroupBlock: Block = {
  slug: 'textImageGroup',
  labels: {
    singular: 'Text + Image Group',
    plural: 'Text + Image Groups',
  },
  interfaceName: 'TextImageGroupBlock',
  fields: [
    {
      name: 'items',
      label: 'Items (Text + Image)',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
