import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = ({ loading = 'lazy', priority = 'low', className }: Props) => {
  return (
    <Image
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('h-10 w-auto object-contain', className)}
      src="/lastoneSure.png"
    />
  )
}
