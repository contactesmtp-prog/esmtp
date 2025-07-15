'use client'

import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
//mport RichText from '@/components/RichText'

// export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>
export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'excerpt'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'events'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo = 'posts', showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  // const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`
  const fallbackImage = metaImage || (doc as any).heroImage
  const description = (doc as any)?.excerpt || ''
  const excerpt = doc?.excerpt

  // console.log({ titleToUse, description, meta })
  // console.log('excerpt', excerpt)

  return (
    <article
      ref={card.ref}
      className={cn(
        'bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition duration-300 group',
        className,
      )}
    >
      <Link href={href} ref={link.ref} className="block">
        {/* Image */}
        {/* <div className="relative aspect-[4/3] overflow-hidden">
          {fallbackImage && typeof fallbackImage !== 'string' ? (
            <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
              <Media resource={fallbackImage} size="100vw" />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              No Image
            </div>
          )}
        </div> */}
        <div className="w-full h-60 bg-white flex items-center justify-center overflow-hidden">
          {fallbackImage && typeof fallbackImage !== 'string' ? (
            <Media
              resource={fallbackImage}
              size="100vw"
              className="object-contain max-h-full max-w-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {showCategories && hasCategories && (
            <div className="text-xs text-gray-400 uppercase mb-2 tracking-wide">
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const catTitle = category?.title || 'Category'
                  const isLast = index === categories.length - 1
                  return (
                    <Fragment key={index}>
                      {catTitle}
                      {!isLast && ', '}
                    </Fragment>
                  )
                }
                return null
              })}
            </div>
          )}

          {titleToUse && (
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#D78B22] leading-snug line-clamp-2">
              {titleToUse}
            </h3>
          )}

          {/* {description && (
            <div className="text-sm text-gray-600 mt-2 line-clamp-3">
              <RichText data={description} />
            </div>
          )} */}
          {excerpt && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{excerpt}</p>}
          {/* {excerpt && (
            <div className="text-sm text-gray-600 mt-2 line-clamp-3">
              <RichText data={excerpt} />
            </div>
          )} */}
        </div>
      </Link>
    </article>
  )
}
