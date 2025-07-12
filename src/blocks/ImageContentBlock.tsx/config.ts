import { Block } from 'payload'

export const styledImage: Block = {
  slug: 'styledImage',
  interfaceName: 'styledImageInter',
  labels: {
    singular: 'Image Stylée',
    plural: 'Images Stylées',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alignment',
      label: 'Alignement',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Gauche', value: 'left' },
        { label: 'Centré', value: 'center' },
        { label: 'Droite', value: 'right' },
        { label: 'Plein (full width)', value: 'full' },
      ],
    },
    {
      name: 'width',
      label: 'Largeur personnalisée (ex: 100%, 400px)',
      type: 'text',
      required: false,
    },
    {
      name: 'height',
      label: 'Hauteur personnalisée (ex: auto, 300px, 50vh)',
      type: 'text',
      required: false,
    },
  ],
}
