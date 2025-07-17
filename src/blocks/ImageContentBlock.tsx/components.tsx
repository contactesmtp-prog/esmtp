import React from 'react'
import Image from 'next/image'
import type { StyledImageInter, Media as MediProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const StyledImageBlock: React.FC<StyledImageInter> = ({
  image,
  alignment = 'center',
  width,
  height,
}) => {
  if (typeof image !== 'object' || !image || !('url' in image)) return null
  const media = image as MediProps

  // Flex alignment
  const alignmentClass =
    alignment === 'full'
      ? ''
      : alignment === 'left'
        ? 'justify-start'
        : alignment === 'right'
          ? 'justify-end'
          : 'justify-center'

  // 👉 Fixed: Add margin on the correct side
  const sideMargin =
    alignment === 'left'
      ? 'ml-20' // ⬅️ space from left edge
      : alignment === 'right'
        ? 'mr-5' // ➡️ space from right edge
        : ''

  const wrapperStyle: React.CSSProperties = {
    width: alignment === 'full' ? '100%' : width || 'auto',
    height: height || (alignment === 'full' ? 'auto' : '300px'),
    maxHeight: alignment === 'full' && !height ? '300px' : undefined,
    objectFit: 'cover',
  }
  //   console.log('🖼️ media:', media)

  //   console.log('🖼️ Final Image URL:', media.url)
  //   console.log('Image dimensions:', media.width, media.height)

  return (
    <div className={`w-full my-8 ${alignment !== 'full' ? `flex ${alignmentClass}` : ''}`}>
      <div
        className={`${sideMargin} ${alignment === 'full' ? 'w-full' : ''} rounded-lg shadow overflow-hidden`}
        style={wrapperStyle}
      >
        <Image
          src={media.url || ''}
          alt={media.alt || ''}
          width={media.width || 1920}
          height={media.height || 1080}
          className="w-full h-full"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
