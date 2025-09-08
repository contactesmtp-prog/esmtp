import { CollectionConfig } from 'payload'

export const SearchGlob: CollectionConfig = {
  slug: 'searchGlob',
  labels: {
    singular: 'Search Global',
    plural: 'Search Globals',
  },
  admin: {
    useAsTitle: 'titleFr',
    defaultColumns: ['page', 'titleFr', 'titleAr'],
  },
  fields: [
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
    {
      name: 'titleFr',
      type: 'text',
      label: 'Titre (Français)',
    },
    {
      name: 'titleAr',
      type: 'text',
      label: 'العنوان (عربي)',
    },
  ],
}
