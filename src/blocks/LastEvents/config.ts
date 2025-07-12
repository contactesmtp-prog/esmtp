import type { Block, Field } from 'payload'

export const LastEvent: Block = {
  slug: 'lastEvent',

  interfaceName: 'LastEventBlock',
  fields: [
    //header  simpple texet type
    {
      name: 'header',
      type: 'text',
      label: 'Header',
      required: true,
    },
  ],
}
