// export const dynamic = 'force-dynamic'
// export const revalidate = 0
// export const fetchCache = 'force-no-store'

// import { unstable_noStore as noStore } from 'next/cache'

// import type { Metadata } from 'next'

// import { PayloadRedirects } from '@/components/PayloadRedirects'
// import configPromise from '@payload-config'
// import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
// import { draftMode } from 'next/headers'
// import React, { cache } from 'react'

// import { RenderBlocks } from '@/blocks/RenderBlocks'
// import { RenderHero } from '@/heros/RenderHero'
// import { generateMeta } from '@/utilities/generateMeta'
// import PageClient from './page.client'
// import { LivePreviewListener } from '@/components/LivePreviewListener'

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise })
//   const pages = await payload.find({
//     collection: 'pages',
//     draft: false,
//     limit: 1000,

//     overrideAccess: false,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   })

//   const params = pages.docs
//     ?.filter((doc) => {
//       return doc.slug !== 'home'
//     })
//     .map(({ slug }) => {
//       return { slug }
//     })

//   return params
// }

// type Args = {
//   params: Promise<{
//     slug?: string
//     lang: 'en' | 'ar' | 'fr'
//   }>
// }

// export default async function Page({ params: paramsPromise }: Args) {
//   const { isEnabled: draft } = await draftMode()
//   const { slug = 'home', lang } = await paramsPromise
//   const url = '/' + slug

//   // let page: RequiredDataFromCollectionSlug<'pages'> | null

//   const page = await queryPageBySlug({
//     slug,
//     lang,
//   })

//   // console.log('the lang is', lang)

//   // Remove this code once your website is seeded

//   if (!page) {
//     return <PayloadRedirects url={url} />
//   }

//   const { hero, layout } = page

//   return (
//     <article className=" pb-24">
//       <PageClient />
//       {/* Allows redirects for valid pages too */}
//       <PayloadRedirects disableNotFound url={url} />

//       {draft && <LivePreviewListener />}

//       <RenderHero {...hero} lang={lang} />
//       <RenderBlocks blocks={layout} lang={lang} />
//     </article>
//   )
// }

// export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
//   const { slug = 'home', lang } = await paramsPromise
//   const page = await queryPageBySlug({
//     slug,
//     lang,
//   })

//   return generateMeta({ doc: page })
// }

// // const queryPageBySlug = cache(
// //   async ({ slug, lang }: { slug: string; lang: 'en' | 'ar' | 'fr' }) => {
// //     const { isEnabled: draft } = await draftMode()

// //     const payload = await getPayload({ config: configPromise })

// //     const result = await payload.find({
// //       collection: 'pages',
// //       draft,
// //       limit: 1,
// //       pagination: false,
// //       overrideAccess: draft,
// //       locale: lang,
// //       where: {
// //         slug: {
// //           equals: slug,
// //         },
// //       },
// //     })

// //     return result.docs?.[0] || null
// //   },
// // )

// const getPayloadClient = cache(async () => {
//   return await getPayload({ config: configPromise })
// })

// async function queryPageBySlug({ slug, lang }: { slug: string; lang: 'en' | 'ar' | 'fr' }) {
//   noStore() // tell Next "do not cache this result"
//   const { isEnabled: draft } = await draftMode()
//   const payload = await getPayloadClient()

//   const result = await payload.find({
//     collection: 'pages',
//     draft,
//     limit: 1,
//     pagination: false,
//     overrideAccess: draft,
//     locale: lang,
//     where: { slug: { equals: slug } },
//   })

//   return result.docs?.[0] ?? null
// }

// /src/app/[lang]/(frontend)/[slug]/page.tsx
// export const dynamic = 'force-dynamic'

// import type { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import { draftMode } from 'next/headers'
// import React, { cache } from 'react'

// import configPromise from '@payload-config'
// import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'

// import { PayloadRedirects } from '@/components/PayloadRedirects'
// import { LivePreviewListener } from '@/components/LivePreviewListener'
// import { RenderHero } from '@/heros/RenderHero'
// import { RenderBlocks } from '@/blocks/RenderBlocks'
// import PageClient from './page.client'
// import { generateMeta } from '@/utilities/generateMeta'

// // --- Locale config (same pattern as CRTI)
// const LOCALES = ['en', 'fr', 'ar'] as const
// type Locale = (typeof LOCALES)[number]
// const DEFAULT_LOCALE: Locale = 'en'

// // --- SSG paths (same pattern as CRTI: build all (lang, slug) pairs)
// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise })

//   const pages = await payload.find({
//     collection: 'pages',
//     draft: false,
//     limit: 1000,
//     depth: 0,
//     overrideAccess: false,
//     pagination: false,
//     select: { slug: true },
//   })

//   const slugs: string[] = (pages.docs ?? [])
//     .map((d: any) => d?.slug)
//     .filter((s: string | undefined): s is string => Boolean(s))

//   const uniqueSlugs = Array.from(new Set([...slugs, 'home']))

//   return LOCALES.flatMap((lang) => uniqueSlugs.map((slug) => ({ lang, slug })))
// }

// type Args = {
//   params: Promise<{ lang: string; slug?: string }>
// }

// // --- Page
// export default async function Page({ params: paramsPromise }: Args) {
//   const { isEnabled: draft } = await draftMode()
//   const { lang, slug = 'home' } = await paramsPromise

//   if (!LOCALES.includes(lang as Locale)) notFound()
//   const locale = lang as Locale

//   // Build canonical url for redirects / 404 component
//   const url = slug === 'home' ? `/${locale}` : `/${locale}/${slug}`

//   // Fetch localized page
//   let page = await queryPageBySlug({ slug, locale, draft })

//   // Fallback to default locale if missing translation
//   if (!page && locale !== DEFAULT_LOCALE) {
//     page = await queryPageBySlug({ slug, locale: DEFAULT_LOCALE, draft })
//   }

//   if (!page) {
//     return <PayloadRedirects url={url} />
//   }

//   const { hero, layout } = page

//   return (
//     <article className="pb-24">
//       <PageClient />
//       {/* Allow redirects for valid pages too */}
//       <PayloadRedirects disableNotFound url={url} />
//       {draft && <LivePreviewListener />}

//       <RenderHero {...hero} lang={locale} />
//       <RenderBlocks blocks={layout} lang={locale} />
//     </article>
//   )
// }

// // --- Metadata (same behavior as CRTI)
// export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
//   const { lang, slug = 'home' } = await paramsPromise
//   const locale = LOCALES.includes(lang as Locale) ? (lang as Locale) : DEFAULT_LOCALE

//   let page = await queryPageBySlug({ slug, locale, draft: false })
//   if (!page && locale !== DEFAULT_LOCALE) {
//     page = await queryPageBySlug({ slug, locale: DEFAULT_LOCALE, draft: false })
//   }

//   return generateMeta({ doc: page })
// }

// // --- Data query (same spirit as CRTI; memoized per-request only)
// const queryPageBySlug = cache(
//   async ({
//     slug,
//     locale,
//     draft,
//   }: {
//     slug: string
//     locale: Locale
//     draft: boolean
//   }): Promise<RequiredDataFromCollectionSlug<'pages'> | null> => {
//     const payload = await getPayload({ config: configPromise })

//     const result = await payload.find({
//       collection: 'pages',
//       draft,
//       limit: 1,
//       pagination: false,
//       overrideAccess: draft,
//       locale,
//       depth: 2,
//       where: { slug: { equals: slug } },
//     })

//     return (result.docs?.[0] as RequiredDataFromCollectionSlug<'pages'> | undefined) ?? null
//   },
// )

// /src/app/[lang]/(frontend)/[slug]/page.tsx
export const dynamic = 'force-dynamic'

import { unstable_noStore as noStore } from 'next/cache'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import type { Metadata } from 'next'
import React from 'react'

import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { RenderHero } from '@/heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import PageClient from './page.client'
import { generateMeta } from '@/utilities/generateMeta'

// ---- locales
const LOCALES = ['en', 'fr', 'ar'] as const
type Locale = (typeof LOCALES)[number]
const DEFAULT_LOCALE: Locale = 'en'

type Args = { params: Promise<{ lang: string; slug?: string }> }

export default async function Page({ params }: Args) {
  // hard opt-out of any caching for this request tree
  noStore()

  const { isEnabled: draft } = await draftMode()
  const { lang, slug = 'home' } = await params

  if (!LOCALES.includes(lang as Locale)) notFound()
  const locale = lang as Locale

  const url = slug === 'home' ? `/${locale}` : `/${locale}/${slug}`

  // fetch localized page (no cache, no memoization)
  let page = await findPage({ slug, locale, draft })

  // fallback to default locale if missing translation
  if (!page && locale !== DEFAULT_LOCALE) {
    page = await findPage({ slug, locale: DEFAULT_LOCALE, draft })
  }

  if (!page) return <PayloadRedirects url={url} />

  const { hero, layout } = page

  return (
    <article className="pb-24">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      <RenderHero {...hero} lang={locale} />
      <RenderBlocks blocks={layout} lang={locale} />
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  // also mark metadata path dynamic
  noStore()

  const { lang, slug = 'home' } = await params
  const locale = LOCALES.includes(lang as Locale) ? (lang as Locale) : DEFAULT_LOCALE

  let page = await findPage({ slug, locale, draft: false })
  if (!page && locale !== DEFAULT_LOCALE) {
    page = await findPage({ slug, locale: DEFAULT_LOCALE, draft: false })
  }

  return generateMeta({ doc: page })
}

async function findPage({
  slug,
  locale,
  draft,
}: {
  slug: string
  locale: Locale
  draft: boolean
}): Promise<RequiredDataFromCollectionSlug<'pages'> | null> {
  // double opt-out inside the data function
  noStore()

  // IMPORTANT: no React `cache()`, no memoized getPayload client
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft, // if draftMode() enabled, read drafts
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    locale,
    depth: 2,
    where: { slug: { equals: slug } },
  })

  return (result.docs?.[0] as RequiredDataFromCollectionSlug<'pages'> | undefined) ?? null
}
