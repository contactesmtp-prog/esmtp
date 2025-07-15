// payload/collections/rentalItems.ts
import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

export const rentalItems: CollectionConfig = {
  slug: 'rentalitems',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },

  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Nom du article de location',
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
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'category',
      label: 'Catégorie',
      type: 'relationship',
      relationTo: 'rentalcategories',
      required: true,
    },
    {
      name: 'details',
      label: 'Détails',
      type: 'array',
      labels: {
        singular: 'Détail',
        plural: 'Détails',
      },
      minRows: 1,
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
