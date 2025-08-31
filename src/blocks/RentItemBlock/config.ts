import type { Block } from 'payload'

export const RentalOverviewBlock: Block = {
  slug: 'rentalOverview',
  interfaceName: 'RentalOverviewBlock',
  fields: [
    {
      name: 'header',
      type: 'text',
      label: 'Header',
      required: true,
      localized: true,
    },
  ],
}
