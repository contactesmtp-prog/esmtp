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
