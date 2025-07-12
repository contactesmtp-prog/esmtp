import { Block } from 'payload'

export const VideosBlock: Block = {
  slug: 'videosBlock',
  interfaceName: 'videoblockinter',
  labels: {
    singular: 'YouTube Video Block',
    plural: 'YouTube Video Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Section Title',
    },
    {
      name: 'videos',
      type: 'array',
      required: true,
      label: 'YouTube Videos',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'YouTube Video URL',
          admin: {
            placeholder: 'https://www.youtube.com/watch?v=...',
          },
        },
      ],
    },
  ],
}
