// // blocks/ThemeListBlock.ts
// import { Block } from 'payload'

// export const ThemeListBlock: Block = {
//   slug: 'themeList',
//   labels: {
//     singular: 'Liste des Thèmes',
//     plural: 'Listes des Thèmes',
//   },
//   fields: [],
// }

import type { Block } from 'payload'

export const ThemeOverviewBlock: Block = {
  slug: 'themeOverview',
  interfaceName: 'ThemeOverviewBlock',
  fields: [
    {
      name: 'header',
      type: 'text',
      label: 'Header',
      required: true,
    },
  ],
}
