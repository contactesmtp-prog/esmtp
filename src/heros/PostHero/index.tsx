// import { formatDateTime } from 'src/utilities/formatDateTime'
// import React from 'react'

// import type { Post } from '@/payload-types'

// import { Media } from '@/components/Media'
// import { formatAuthors } from '@/utilities/formatAuthors'

// export const PostHero: React.FC<{
//   post: Post
// }> = ({ post }) => {
//   const { categories, heroImage, populatedAuthors, publishedAt, title } = post

//   const hasAuthors =
//     populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

//   return (
//     <div className="relative flex items-end min-h-[80vh] overflow-hidden">
//       <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
//         <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
//           <div className="uppercase text-sm mb-6">
//             {categories?.map((category, index) => {
//               if (typeof category === 'object' && category !== null) {
//                 const { title: categoryTitle } = category

//                 const titleToUse = categoryTitle || 'Untitled category'

//                 const isLast = index === categories.length - 1

//                 return (
//                   <React.Fragment key={index}>
//                     {titleToUse}
//                     {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
//                   </React.Fragment>
//                 )
//               }
//               return null
//             })}
//           </div>

//           <div className="">
//             <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
//           </div>

//           <div className="flex flex-col md:flex-row gap-4 md:gap-16">
//             {hasAuthors && (
//               <div className="flex flex-col gap-4">
//                 <div className="flex flex-col gap-1">
//                   <p className="text-sm">Author</p>

//                   <p>{formatAuthors(populatedAuthors)}</p>
//                 </div>
//               </div>
//             )}
//             {publishedAt && (
//               <div className="flex flex-col gap-1">
//                 <p className="text-sm">Date de publication</p>

//                 <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="min-h-[80vh] select-none">
//         {heroImage && typeof heroImage !== 'string' && (
//           <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
//         )}
//         <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
//       </div>
//     </div>
//   )
// }

// // import { formatDateTime } from 'src/utilities/formatDateTime'
// // import React from 'react'

// // import type { Post } from '@/payload-types'
// // import { Media } from '@/components/Media'
// // import { formatAuthors } from '@/utilities/formatAuthors'

// // export const PostHero: React.FC<{ post: Post }> = ({ post }) => {
// //   const { categories, heroImage, populatedAuthors, publishedAt, title } = post

// //   const hasAuthors =
// //     populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

// //   return (
// //     <section className="relative flex items-end min-h-[80vh] overflow-hidden">
// //       {/* ─── Background image ───────────────────────────────────── */}
// //       {heroImage && typeof heroImage !== 'string' && (
// //         // <div className="absolute inset-0 -z-10 pointer-events-none">
// //         <div className="absolute top-0 left-0 right-0 h-full -z-10 pointer-events-none">
// //           <Media fill priority imgClassName="object-cover" resource={heroImage} />
// //           {/* ─── Overlay ───────────────────────────────────────── */}
// //           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
// //         </div>
// //       )}

// //       {/* ─── Foreground content ─────────────────────────────── */}
// //       <div className="relative z-10 w-full text-white pb-8">
// //         <div className="container mx-auto px-4 lg:grid lg:grid-cols-[1fr_48rem_1fr]">
// //           <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
// //             {/* Categories */}
// //             {Array.isArray(categories) && categories.length > 0 && (
// //               <div className="mb-6 text-sm uppercase">
// //                 {categories.map((category, index) => {
// //                   if (typeof category === 'object' && category !== null) {
// //                     const titleToUse = category.title || 'Untitled category'
// //                     const isLast = index === categories.length - 1
// //                     return (
// //                       <React.Fragment key={index}>
// //                         {titleToUse}
// //                         {!isLast && <span>,&nbsp;</span>}
// //                       </React.Fragment>
// //                     )
// //                   }
// //                   return null
// //                 })}
// //               </div>
// //             )}

// //             {/* Title */}
// //             <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>

// //             {/* Meta */}
// //             <div className="flex flex-col gap-4 md:flex-row md:gap-16">
// //               {hasAuthors && (
// //                 <div className="flex flex-col gap-1">
// //                   <p className="text-sm">Author</p>
// //                   <p>{formatAuthors(populatedAuthors)}</p>
// //                 </div>
// //               )}
// //               {publishedAt && (
// //                 <div className="flex flex-col gap-1">
// //                   <p className="text-sm">Date Published</p>
// //                   <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

import React from 'react'
import type { Event } from '@/payload-types'
import { Media } from '@/components/Media'
import { formatDateTime } from 'src/utilities/formatDateTime'
import { formatAuthors } from '@/utilities/formatAuthors'

// Define supported languages
type Lang = 'en' | 'ar' | 'fr'

export const PostHero: React.FC<{
  post: Event
  lang: Lang
}> = ({ post, lang }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title, titleev } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  // Simple localized labels
  const labels = {
    author: {
      en: 'Author',
      fr: 'Auteur',
      ar: 'الكاتب',
    },
    publishedAt: {
      en: 'Published on',
      fr: 'Date de publication',
      ar: 'تاريخ النشر',
    },
  }

  return (
    <div className="relative flex items-end min-h-[80vh] overflow-hidden">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          {/* Categories */}
          <div className="uppercase text-sm mb-6">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category
                const titleToUse = categoryTitle || 'Untitled category'
                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          {/* Title */}
          <div>
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{titleev}</h1>
          </div>

          {/* Authors + Date */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {hasAuthors && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm">{labels.author[lang]}</p>
                  <p>{formatAuthors(populatedAuthors)}</p>
                </div>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">{labels.publishedAt[lang]}</p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="min-h-[80vh] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
