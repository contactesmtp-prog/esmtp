
import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { unstable_noStore as noStore } from 'next/cache'

type Lang = 'en' | 'fr' | 'ar'

// export const dynamic = 'force-static'
// export const revalidate = 600
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

const titles: Record<Lang, string> = {
  en: 'All Events',
  fr: 'Tous les événements',
  ar: 'جميع الفعاليات',
}

type Props = {
  params: Promise<{ lang: Lang }>
}

export default async function Page({ params }: Props) {
  noStore()
  const { lang } = await params

  const payload = await getPayload({ config: configPromise })

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
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center">{titles[lang]}</h1>
        </div>
      </div>

      <div className="container px-6 sm:px-8 lg:px-12">
        <CollectionArchive posts={posts.docs} lang={lang} />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'ESMTP | Events',
  description: 'Welcome to ESMTP official website.',
}
