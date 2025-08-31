// payload/collections/Themes.ts
import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
export const ContactUs: CollectionConfig = {
  slug: 'contactuscoll',
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
    useAsTitle: 'Email',
  },
  fields: [
    {
      name: 'Email',
      label: 'Email',
      type: 'text',
      localized: true,
    },
    {
      name: 'tel',
      label: 'Phne number of the company',
      type: 'text',
      localized: true,
    },
    {
      name: 'fax',
      type: 'text',
      localized: true,
    },
    {
      name: 'adresse',
      type: 'text',
      localized: true,
    },
  ],
}
