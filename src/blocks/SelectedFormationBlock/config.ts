import { Block } from 'payload'

export const FeaturedFormationsBlock: Block = {
  slug: 'featuredFormations',
  interfaceName: 'featuredFormations',
  labels: {
    singular: 'Formation sélectionnée',
    plural: 'Formations sélectionnées',
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      label: 'Titre du bloc',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Formations à afficher',
      required: true,
      fields: [
        {
          name: 'formation',
          type: 'relationship',
          relationTo: 'formations',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image de couverture',
          required: true,
        },
      ],
    },
  ],
}
