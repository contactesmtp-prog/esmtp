import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function searchPages(query: string, locale: 'en' | 'fr' | 'ar') {
  const payload = await getPayload({ config: configPromise })

  const results = await payload.find({
    collection: 'searchGlob',
    where: {
      or: [
        { titleFr: { like: query } },
        { titleAr: { like: query } },
        { 'page.title': { like: query } }, // fallback English
      ],
    },
    depth: 1,
    limit: 20,
  })

  return results.docs.map((doc: any) => {
    const page = doc.page
    const title = locale === 'fr' ? doc.titleFr : locale === 'ar' ? doc.titleAr : page?.title

    return {
      id: doc.id,
      title: title || page?.title,
      url: `/${locale}/${page?.slug}`,
    }
  })
}
