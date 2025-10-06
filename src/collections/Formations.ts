import { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
export const Formations: CollectionConfig = {
  slug: 'formations',
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
      label: 'Nom de formation',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'startDate',
      label: 'Date de début',
      type: 'date',
      required: true,
      // admin: {
      //   date: {
      //     pickerAppearance: 'dayOnly',
      //   },
      // },
      admin: {
        hidden: true,
        readOnly: true,
        description: 'Déprécié — sera supprimé plus tard.',
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'endDate',
      label: 'Date de fin',
      type: 'date',
      required: true,
      // admin: {
      //   date: {
      //     pickerAppearance: 'dayOnly',
      //   },
      // },
      admin: {
        hidden: true,
        readOnly: true,
        description: 'Déprécié — sera supprimé plus tard.',
        date: { pickerAppearance: 'dayOnly' },
      },
    },

    {
      name: 'reference',
      label: 'Référence',
      type: 'text',
      unique: true, // creates a unique index via migration
      required: false, // set to true later once data is backfilled
      admin: {
        placeholder: 'Ex: REF-2025-001',
        description: 'Identifiant interne de la formation.',
      },
    },

    {
      name: 'duree',
      label: 'Durée',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'theme',
      label: 'Thème',
      type: 'relationship',
      relationTo: 'themes',
      required: true,
    },
    {
      name: 'forpdf',
      label: 'pdf ',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
