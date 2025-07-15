import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
export const Rentalcategories: CollectionConfig = {
  slug: 'rentalcategories',
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
