import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 10,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'isGroup',
          type: 'checkbox',
          label: 'Is this a group?',
        },
        {
          name: 'label',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.isGroup === true,
          },
          localized: true,
        },
        {
          name: 'items',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.isGroup === true,
            initCollapsed: true,
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
        // For single link (when isGroup is false)
        link({
          appearances: false,
          overrides: {
            name: 'link',
            admin: {
              condition: (_, siblingData) => siblingData?.isGroup !== true,
            },
          },
        }),
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
