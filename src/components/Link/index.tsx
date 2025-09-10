// Wihtout Using the lang //////////////
// import { Button, type ButtonProps } from '@/components/ui/button'
// import { cn } from '@/utilities/ui'
// import Link from 'next/link'
// import React from 'react'

// import type { Page, Post } from '@/payload-types'

// type CMSLinkType = {
//   appearance?: 'inline' | ButtonProps['variant']
//   children?: React.ReactNode
//   className?: string
//   label?: string | null
//   newTab?: boolean | null
//   reference?: {
//     relationTo: 'pages' | 'posts'
//     value: Page | Post | string | number
//   } | null
//   size?: ButtonProps['size'] | null
//   type?: 'custom' | 'reference' | null
//   url?: string | null
// }

// export const CMSLink: React.FC<CMSLinkType> = (props) => {
//   const {
//     type,
//     appearance = 'inline',
//     children,
//     className,
//     label,
//     newTab,
//     reference,
//     size: sizeFromProps,
//     url,
//   } = props

//   const href =
//     type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
//       ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
//           reference.value.slug
//         }`
//       : url

//   if (!href) return null

//   const size = appearance === 'link' ? 'clear' : sizeFromProps
//   const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

//   /* Ensure we don't break any styles set by richText */
//   if (appearance === 'inline') {
//     return (
//       <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
//         {label && label}
//         {children && children}
//       </Link>
//     )
//   }

//   return (
//     <Button asChild className={className} size={size} variant={appearance}>
//       <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
//         {label && label}
//         {children && children}
//       </Link>
//     </Button>
//   )
// }

import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  lang?: 'en' | 'ar' | 'fr' // 👈 added language prop
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
    lang,
  } = props

  // Build href
  let href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url || ''

  // 👇 Prepend language
  if (href && !href.startsWith('http')) {
    href = `/${lang}${href.startsWith('/') ? href : `/${href}`}`
  }

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Inline link (no button styles) */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link className={cn(className)} href={href} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
