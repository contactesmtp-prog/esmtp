import { Block } from 'payload'
import { link } from '@/fields/link'

export const DirectorBlock: Block = {
  slug: 'directorBlock',
  interfaceName: 'directorBlockInter',
  labels: {
    singular: 'Director Section',
    plural: 'Director Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      localized: true,
    },
    {
      name: 'highlight',
      type: 'text',
      label: 'Mot en surbrillance',
      localized: true,
      required: false,
      admin: {
        description: 'Le mot à mettre en surbrillance.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Director Image',
      required: true,
    },

    link(),
  ],
}
