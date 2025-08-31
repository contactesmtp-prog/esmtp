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
      name: 'contactInfo',
      label: 'Contact Info',
      localized: true,
      type: 'group',
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'text',
        },
        {
          name: 'phone',
          label: 'Phone',
          type: 'text',
        },
        {
          name: 'address',
          label: 'Address',
          type: 'textarea',
        },
      ],
    },
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
          localized: true,
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
      localized: false,
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
      name: 'bottomLinks',
      label: 'Bottom Links',
      type: 'array',
      maxRows: 3,
      fields: [link({ appearances: false })],
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
