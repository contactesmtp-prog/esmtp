// import type { GlobalConfig } from 'payload'

// import { link } from '@/fields/link'
// import { revalidateFooter } from './hooks/revalidateFooter'

// export const Footer: GlobalConfig = {
//   slug: 'footer',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'navItems',
//       type: 'array',
//       fields: [
//         link({
//           appearances: false,
//         }),
//       ],
//       maxRows: 6,
//       admin: {
//         initCollapsed: true,
//         components: {
//           RowLabel: '@/Footer/RowLabel#RowLabel',
//         },
//       },
//     },
//   ],
//   hooks: {
//     afterChange: [revalidateFooter],
//   },
// }

// import type { GlobalConfig } from 'payload'
// import { link } from '@/fields/link'
// import { revalidateFooter } from './hooks/revalidateFooter'

// export const Footer: GlobalConfig = {
//   slug: 'footer',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'navItems',
//       label: 'Navigation Groups',
//       type: 'array',
//       maxRows: 6,
//       admin: {
//         initCollapsed: true,
//         components: {
//           RowLabel: '@/Footer/RowLabel#RowLabel',
//         },
//       },
//       fields: [
//         {
//           name: 'title',
//           label: 'Group Title',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'links',
//           label: 'Links',
//           type: 'array',
//           required: true,
//           fields: [
//             link({
//               appearances: false,
//             }),
//           ],
//         },
//       ],
//     },
//   ],
//   hooks: {
//     afterChange: [revalidateFooter],
//   },
// }

// import type { GlobalConfig } from 'payload'
// import { link } from '@/fields/link'
// import { revalidateFooter } from './hooks/revalidateFooter'

// export const Footer: GlobalConfig = {
//   slug: 'footer',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'navItems',
//       label: 'Navigation Groups',
//       type: 'array',
//       maxRows: 6,
//       admin: {
//         initCollapsed: true,
//         components: {
//           RowLabel: '@/Footer/RowLabel#RowLabel',
//         },
//       },
//       fields: [
//         {
//           name: 'title',
//           label: 'Group Title',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'links',
//           label: 'Links',
//           type: 'array',
//           required: true,
//           fields: [
//             link({
//               appearances: false,
//             }),
//           ],
//         },
//       ],
//     },
//     {
//       name: 'socialLinks',
//       label: 'Social Media',
//       type: 'array',
//       maxRows: 4,
//       fields: [
//         {
//           name: 'platform',
//           label: 'Platform',
//           type: 'select',
//           required: true,
//           options: [
//             { label: 'Facebook', value: 'facebook' },
//             { label: 'LinkedIn', value: 'linkedin' },
//             { label: 'Twitter', value: 'twitter' },
//             { label: 'Instagram', value: 'instagram' },
//             { label: 'YouTube', value: 'youtube' },
//           ],
//         },
//         {
//           name: 'url',
//           label: 'URL',
//           type: 'text',
//           required: true,
//         },
//       ],
//     },
//   ],
//   hooks: {
//     afterChange: [revalidateFooter],
//   },
// }

import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      label: 'Navigation Groups',
      type: 'array',
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
      fields: [
        {
          name: 'title',
          label: 'Group Title',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          required: true,
          fields: [link({ appearances: false })],
        },
      ],
    },
    {
      name: 'socialLinks',
      label: 'Social Media',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'platform',
          label: 'Platform',
          type: 'text',
          required: true,
        },
        link({ appearances: false }),
      ],
    },
    {
      name: 'mapEmbed',
      label: 'Google Maps Embed URL',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'https://www.google.com/maps/embed?...',
        description: 'Paste the Google Maps embed URL (iframe src)',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
