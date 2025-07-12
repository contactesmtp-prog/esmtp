// import clsx from 'clsx'
// import React from 'react'

// interface Props {
//   className?: string
//   loading?: 'lazy' | 'eager'
//   priority?: 'auto' | 'high' | 'low'
// }

// export const Logo = (props: Props) => {
//   const { loading: loadingFromProps, priority: priorityFromProps, className } = props

//   const loading = loadingFromProps || 'lazy'
//   const priority = priorityFromProps || 'low'

//   return (
//     /* eslint-disable @next/next/no-img-element */
//     <img
//       alt="Payload Logo"
//       width={193}
//       height={34}
//       loading={loading}
//       fetchPriority={priority}
//       decoding="async"
//       // className={clsx(className)}
//       src="/esmtp_logo.png"
//     />
//   )
// }

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
      src="/esmtp_logo.png"
    />
  )
}
