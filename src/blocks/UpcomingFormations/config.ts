import type { Block } from 'payload'

export const UpcomingFormations: Block = {
  slug: 'upcomingFormations',
  interfaceName: 'UpcomingFormationsBlock',
  labels: {
    singular: 'Upcoming Formations',
    plural: 'Upcoming Formations',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'limit',
      label: 'Nombre de formations à afficher',
      type: 'number',
      required: false,
      defaultValue: 5,
    },
  ],
}
