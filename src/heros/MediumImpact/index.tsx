// import React from 'react'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   return (
//     <div className="">
//       <div className="container mb-8">
//         {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

//         {Array.isArray(links) && links.length > 0 && (
//           <ul className="flex gap-4">
//             {links.map(({ link }, i) => {
//               return (
//                 <li key={i}>
//                   <CMSLink {...link} />
//                 </li>
//               )
//             })}
//           </ul>
//         )}
//       </div>
//       <div className="container ">
//         {media && typeof media === 'object' && (
//           <div>
//             <Media
//               className="-mx-4 md:-mx-8 2xl:-mx-16"
//               imgClassName=""
//               priority
//               resource={media}
//             />
//             {media?.caption && (
//               <div className="mt-3">
//                 <RichText data={media.caption} enableGutter={false} />
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

///////////////////// heeeeereeee
'use client'

import React, { useEffect, useState } from 'react'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!Array.isArray(media) || media.length < 2) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % media.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [media])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* 🔁 Background Media (fading) */}
      {Array.isArray(media) &&
        media.map((item, index) => (
          <div
            key={item.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0'
            }`}
          >
            <Media
              resource={item.image}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
              fill
              priority={index === 0}
            />
          </div>
        ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 container max-w-4xl mx-auto px-4 sm:px-6 text-white text-center">
        {/* Rich Text */}
        {richText && (
          <div className="mb-8">
            <RichText
              className="prose prose-invert prose-lg max-w-none"
              data={richText}
              enableGutter={false}
            />
          </div>
        )}

        {/* Links */}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map(({ link }, i) => (
              <li key={i}>
                <CMSLink
                  {...link}
                  className="btn text-white bg-blue-600 hover:bg-blue-700 transition px-5 py-2.5 rounded-full text-sm font-medium"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
