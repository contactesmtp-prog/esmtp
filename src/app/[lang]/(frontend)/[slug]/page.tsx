export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import { unstable_noStore as noStore } from 'next/cache'

import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,

    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    lang: 'en' | 'ar' | 'fr'
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home', lang } = await paramsPromise
  const url = '/' + slug

  // let page: RequiredDataFromCollectionSlug<'pages'> | null

  const page = await queryPageBySlug({
    slug,
    lang,
  })

  // console.log('the lang is', lang)

  // Remove this code once your website is seeded

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className=" pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} lang={lang} />
      <RenderBlocks blocks={layout} lang={lang} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home', lang } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
    lang,
  })

  return generateMeta({ doc: page })
}

// const queryPageBySlug = cache(
//   async ({ slug, lang }: { slug: string; lang: 'en' | 'ar' | 'fr' }) => {
//     const { isEnabled: draft } = await draftMode()

//     const payload = await getPayload({ config: configPromise })

//     const result = await payload.find({
//       collection: 'pages',
//       draft,
//       limit: 1,
//       pagination: false,
//       overrideAccess: draft,
//       locale: lang,
//       where: {
//         slug: {
//           equals: slug,
//         },
//       },
//     })

//     return result.docs?.[0] || null
//   },
// )

const getPayloadClient = cache(async () => {
  return await getPayload({ config: configPromise })
})
async function queryPageBySlug({ slug, lang }: { slug: string; lang: 'en' | 'ar' | 'fr' }) {
  noStore() // tell Next "do not cache this result"
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    locale: lang,
    where: { slug: { equals: slug } },
  })

  return result.docs?.[0] ?? null
}
