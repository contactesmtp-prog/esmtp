import { Block } from 'payload'

export const GroupedItems: Block = {
  slug: 'groupedItems',
  labels: {
    singular: 'Grouped Items & Image Groups',
    plural: 'Grouped Items & Image Groups',
  },
  interfaceName: 'GroupedItems',
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
    },
    {
      name: 'itemGroups',
      label: 'Grouped Text Items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'header',
          label: 'Group Header',
          type: 'text',
          required: true,
        },
        {
          name: 'items',
          label: 'Text Items',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'text',
              label: 'Item Text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'imageGroups',
      label: 'Grouped Images',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Image Group Title',
          type: 'text',
          required: true,
        },
        {
          name: 'images',
          label: 'Images',
          type: 'array',
          required: true,
          fields: [
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
    },
  ],
}
