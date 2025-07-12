// import React from 'react'
// import Image from 'next/image'
// import type { StyledImageInter, Media } from '@/payload-types'

// export const StyledImageBlock: React.FC<StyledImageInter> = ({
//   image,
//   alignment = 'center',
//   width,
//   height,
// }) => {
//   // guard: only render when we have a Media object with a URL
//   if (typeof image !== 'object' || !image || !('url' in image)) return null
//   const media = image as Media

//   /* ----- Alignment helpers ----- */
//   const alignmentClass =
//     alignment === 'full'
//       ? '' // full‑width stretches naturally
//       : alignment === 'left'
//         ? 'justify-start'
//         : alignment === 'right'
//           ? 'justify-end'
//           : 'justify-center'

//   /* ----- Styles ----- */
//   const style: React.CSSProperties = {
//     width: alignment === 'full' ? '100%' : width || 'auto',
//     height: height || (alignment === 'full' ? 'auto' : undefined),
//     maxHeight: alignment === 'full' && !height ? '300px' : undefined, // tweak default max height
//     objectFit: 'cover',
//   }

//   return (
//     <div className={`w-full my-8 ${alignment !== 'full' ? `flex ${alignmentClass}` : ''}`}>
//       <div style={style} className={`${alignment !== 'full' ? '' : 'w-full'}`}>
//         <Image
//           src={media.url || ''}
//           alt={media.alt || ''}
//           width={media.width || 1920} // fallback sizes
//           height={media.height || 1080}
//           className="rounded-lg shadow w-full h-full"
//           style={style} // applies maxHeight / objectFit
//         />
//       </div>
//     </div>
//   )
// }

/// --------THIS IS WITH OBJECT FILL BUT LOOK BAD

// import React from 'react'
// import Image from 'next/image'
// import type { StyledImageInter, Media } from '@/payload-types'

// export const StyledImageBlock: React.FC<StyledImageInter> = ({
//   image,
//   alignment = 'center',
//   width,
//   height,
// }) => {
//   if (typeof image !== 'object' || !image || !('url' in image)) return null
//   const media = image as Media

//   const alignmentClass =
//     alignment === 'full'
//       ? ''
//       : alignment === 'left'
//         ? 'justify-start'
//         : alignment === 'right'
//           ? 'justify-end'
//           : 'justify-center'

//   const wrapperStyle: React.CSSProperties = {
//     width: alignment === 'full' ? '100%' : width || 'auto',
//     height: height || (alignment === 'full' ? '400px' : '300px'),
//     maxHeight: alignment === 'full' && !height ? '600px' : undefined,
//   }

//   return (
//     <div className={`w-full my-8 ${alignment !== 'full' ? `flex ${alignmentClass}` : ''}`}>
//       <div
//         style={wrapperStyle}
//         className={`${alignment === 'full' ? 'w-full' : ''} relative rounded-lg shadow overflow-hidden`}
//       >
//         <Image src={media.url || ''} alt={media.alt || ''} fill className="object-fill" />
//       </div>
//     </div>
//   )
// }

// import React from 'react'
// import Image from 'next/image'
// import type { StyledImageInter, Media } from '@/payload-types'

// export const StyledImageBlock: React.FC<StyledImageInter> = ({
//   image,
//   alignment = 'center',
//   width,
//   height,
// }) => {
//   if (typeof image !== 'object' || !image || !('url' in image)) return null
//   const media = image as Media

//   /* Alignment → flex positioning */
//   const alignmentClass =
//     alignment === 'full'
//       ? ''
//       : alignment === 'left'
//         ? 'justify-start'
//         : alignment === 'right'
//           ? 'justify-end'
//           : 'justify-center'

//   /* Side margin only when the image hugs one edge */
//   const sideMargin =
//     alignment === 'left'
//       ? 'mr-20' // space on the right
//       : alignment === 'right'
//         ? 'ml-20' // space on the left
//         : ''

//   /* Wrapper styles */
//   const wrapperStyle: React.CSSProperties = {
//     width: alignment === 'full' ? '100%' : width || 'auto',
//     height: height || (alignment === 'full' ? 'auto' : undefined),
//     maxHeight: alignment === 'full' && !height ? '300px' : undefined,
//     objectFit: 'cover',
//   }

//   return (
//     <div className={`w-full my-8 ${alignment !== 'full' ? `flex ${alignmentClass}` : ''}`}>
//       <div className={`${sideMargin} ${alignment === 'full' ? 'w-full' : ''}`} style={wrapperStyle}>
//         <Image
//           src={media.url || ''}
//           alt={media.alt || ''}
//           width={media.width || 1920}
//           height={media.height || 1080}
//           className="rounded-lg shadow w-full h-full"
//           style={wrapperStyle}
//         />
//       </div>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import type { StyledImageInter, Media } from '@/payload-types'

export const StyledImageBlock: React.FC<StyledImageInter> = ({
  image,
  alignment = 'center',
  width,
  height,
}) => {
  if (typeof image !== 'object' || !image || !('url' in image)) return null
  const media = image as Media

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
