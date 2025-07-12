'use client'

import React from 'react'
import type { TextImageGroupBlock as TextImageGroupBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'

/**
 * Renders a row of 1–3 circular images with captions underneath.
 */
export const TextImageGroup: React.FC<TextImageGroupBlockProps> = (props) => {
  if (!props) return null

  return (
    <section className="py-12">
      <div
        className={`mx-auto flex flex-wrap justify-center gap-30 max-w-5xl`}
        /* flex-wrap keeps layout neat on very small screens */
      >
        {props.items.map((item, i) => {
          const { image, text } = item

          return (
            <figure key={item.id || i} className="flex flex-col items-center max-w-[10rem]">
              {/* Circle image */}
              {image && typeof image !== 'number' && (
                <Media
                  resource={image}
                  /* Tailwind classes: round + border + shadow */
                  imgClassName="rounded-full border-4 border-white shadow-md object-cover w-40 h-40"
                />
              )}

              {/* Caption */}
              <figcaption className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                {text}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
