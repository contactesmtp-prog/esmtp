import { CollectionConfig } from 'payload'

export const Rentalcategories: CollectionConfig = {
  slug: 'rentalcategories',
  admin: {
    useAsTitle: 'nom',
  },
  fields: [
    {
      name: 'nom',
      label: 'Nom de la catégorie',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Image illustrative',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
