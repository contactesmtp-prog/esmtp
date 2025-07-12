// 'use client'
// import { Header } from '@/payload-types'
// import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

// export const RowLabel: React.FC<RowLabelProps> = () => {
//   const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

//   const label = data?.data?.link?.label
//     ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
//     : 'Row'

//   return <div>{label}</div>
// }

'use client'

import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

/**
 * RowLabel for the Footer navItems array
 * Displays:  "Group 1: Company", "Group 2: Support", etc.
 */
export const RowLabel: React.FC<RowLabelProps> = () => {
  // Infer the shape of a single nav group in the array
  type NavGroup = {
    title?: string
    links?: unknown[]
  }

  const data = useRowLabel<NavGroup>()

  const label = data?.data?.title
    ? `Group ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data.data.title}`
    : `Group ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}`

  return <div>{label}</div>
}
