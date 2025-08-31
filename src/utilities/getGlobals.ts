// import type { Config } from 'src/payload-types'

// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import { unstable_cache } from 'next/cache'

// type Global = keyof Config['globals']

// async function getGlobal(slug: Global, depth = 0) {
//   const payload = await getPayload({ config: configPromise })

//   const global = await payload.findGlobal({
//     slug,
//     depth,
//   })

//   return global
// }

// /**
//  * Returns a unstable_cache function mapped with the cache tag for the slug
//  */
// export const getCachedGlobal = (slug: Global, depth = 0) =>
//   unstable_cache(async () => getGlobal(slug, depth), [slug], {
//     tags: [`global_${slug}`],
//   })

// import type { Config } from 'src/payload-types'

// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import { unstable_cache } from 'next/cache'

// type Global = keyof Config['globals']

// async function getGlobal(slug: Global, lang: 'en' | 'fr' | 'ar', depth = 0) {
//   const payload = await getPayload({ config: configPromise })

//   const global = await payload.findGlobal({
//     slug,
//     depth,
//     locale: lang, // ✅ use locale
//   })

//   return global
// }

// /**
//  * Returns an unstable_cache function mapped with the cache tag for the slug.
//  */
// export const getCachedGlobal =
//   (slug: Global, depth = 0) =>
//   (lang: 'en' | 'fr' | 'ar') =>
//     unstable_cache(async () => getGlobal(slug, lang, depth), [slug, lang], {
//       tags: [`global_${slug}_${lang}`],
//     })()

import type { Config } from 'src/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, lang: 'en' | 'fr' | 'ar', depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug,
    depth,
    locale: lang,
    fallbackLocale: 'en',
  })

  return global
}

/**
 * Returns a cached fetcher function for a global.
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async (lang: 'en' | 'fr' | 'ar') => getGlobal(slug, lang, depth), [slug], {
    tags: [`global_${slug}`],
  })
