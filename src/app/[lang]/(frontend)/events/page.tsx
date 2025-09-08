// import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
// import { PageRange } from '@/components/PageRange'
// import { Pagination } from '@/components/Pagination'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import React from 'react'
// import PageClient from './page.client'

// export const dynamic = 'force-static'
// export const revalidate = 600

// export default async function Page() {
//   const payload = await getPayload({ config: configPromise })

//   const posts = await payload.find({
//     collection: 'events',
//     depth: 2,
//     limit: 12,
//     overrideAccess: false,
//     select: {
//       title: true,
//       titleev:true,
//       slug: true,
//       categories: true,
//       meta: true,
//       content: true,
//       heroImage: true,
//       excerpt: true,
//     },
//   })
//   // {
//   //   console.log('event posts', posts.docs)
//   // }
//   return (
//     <div className="pt-24 pb-24">
//       <PageClient />
//       {/* <div className="container mb-16">
//         <div className="prose dark:prose-invert max-w-none">
//           <h1>Événements</h1>
//         </div>
//       </div> */}

//       {/* <div className="container mb-8">
//         <PageRange
//           collection="posts"
//           currentPage={posts.page}
//           limit={12}
//           totalDocs={posts.totalDocs}
//         />
//       </div> */}

//       <CollectionArchive posts={posts.docs} />

//       <div className="container">
//         {posts.totalPages > 1 && posts.page && (
//           <Pagination page={posts.page} totalPages={posts.totalPages} />
//         )}
//       </div>
//     </div>
//   )
// }

// export function generateMetadata(): Metadata {
//   return {
//     title: `ESMTP`,
//   }
// }

import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

// ✅ Allow dynamic lang param
type Lang = 'en' | 'fr' | 'ar'

export const dynamic = 'force-static'
export const revalidate = 600

const titles: Record<Lang, string> = {
  en: 'All Events',
  fr: 'Tous les événements',
  ar: 'جميع الفعاليات',
}

export default async function Page({ params }: { params: { lang: Lang } }) {
  const { lang } = params

  const payload = await getPayload({ config: configPromise })

  // ✅ Fetch localized events based on lang
  const posts = await payload.find({
    collection: 'events',
    depth: 2,
    limit: 12,
    locale: lang,
    overrideAccess: false,
    select: {
      title: true,
      titleev: true,
      slug: true,
      categories: true,
      meta: true,
      content: true,
      heroImage: true,
      excerpt: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      {/* ✅ Localized heading */}
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center">{titles[lang]}</h1>
        </div>
      </div>

      {/* ✅ Pass localized posts to archive */}
      <div className="container px-6 sm:px-8 lg:px-12">
        <CollectionArchive posts={posts.docs} lang={lang} />
      </div>

      {/* Optional pagination */}
      {/* <div className="container mt-12">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div> */}
    </div>
  )
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const { lang } = params
  return {
    title: titles[lang],
  }
}
