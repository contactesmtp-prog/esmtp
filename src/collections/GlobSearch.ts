// import { CollectionConfig } from 'payload'

// export const SearchGlob: CollectionConfig = {
//   slug: 'searchGlob',
//   labels: {
//     singular: 'Search Global',
//     plural: 'Search Globals',
//   },
//   admin: {
//     useAsTitle: 'titleFr',
//     defaultColumns: ['page', 'titleFr', 'titleAr'],
//   },
//   fields: [
//     {
//       name: 'page',
//       type: 'relationship',
//       relationTo: 'pages',
//       required: true,
//     },
//     {
//       name: 'titleFr',
//       type: 'text',
//       label: 'Titre (Français)',
//     },
//     {
//       name: 'titleAr',
//       type: 'text',
//       label: 'العنوان (عربي)',
//     },
//   ],
// }

import { CollectionConfig } from 'payload'

export const SearchGlob: CollectionConfig = {
  slug: 'searchGlob',
  labels: {
    singular: 'Search Global',
    plural: 'Search Globals',
  },
  admin: {
    useAsTitle: 'titleFr',
    defaultColumns: ['linkType', 'cmsPage', 'fixedPage', 'titleFr', 'titleAr'],
  },
  fields: [
    {
      name: 'linkType',
      type: 'select',
      label: 'Link Type',
      required: true,
      options: [
        { label: 'CMS Page', value: 'cms' },
        { label: 'Fixed Page', value: 'fixed' },
      ],
      defaultValue: 'cms',
    },
    {
      name: 'cmsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'CMS Page',
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'cms',
      },
    },
    {
      name: 'fixedPage',
      type: 'select',
      label: 'Fixed Page',
      options: [
        { label: 'Contact', value: 'contact' },
        { label: 'Events', value: 'events' },
        { label: 'Services', value: 'services' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.linkType === 'fixed',
      },
    },
    {
      name: 'titleFr',
      type: 'text',
      label: 'Titre (Français)',
      required: true,
    },
    {
      name: 'titleAr',
      type: 'text',
      label: 'العنوان (عربي)',
      required: true,
    },
  ],
}
