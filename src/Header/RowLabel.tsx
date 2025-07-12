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

import { useRowLabel } from '@payloadcms/ui'
import type { Header } from '@/payload-types'
import React from 'react'

export const RowLabel: React.FC = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  const isGroup = data?.data?.isGroup === true

  const label = isGroup
    ? `Group: ${data?.data?.label || 'Untitled Group'}`
    : `Link: ${data?.data?.link?.label || 'Untitled Link'}`

  return <div>{label}</div>
}
