import { Block } from 'payload'

export const ESMTPVideosBlock: Block = {
  slug: 'esmtpvideosBlock',
  interfaceName: 'esmtpvideoblockinter',
  labels: {
    singular: 'ESMTP YouTube Video Block',
    plural: 'ESMTP YouTube Video Blocks',
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
