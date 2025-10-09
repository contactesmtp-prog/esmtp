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
        // optionally still search CMS page title if exists
        { 'cmsPage.title': { like: query } },
      ],
    },
    depth: 1,
    limit: 20,
  })

  return results.docs.map((doc: any) => {
    // pick title based on locale
    const title = locale === 'fr' ? doc.titleFr : locale === 'ar' ? doc.titleAr : doc.cmsPage?.title

    // build URL based on linkType
    let url = '#'
    if (doc.linkType === 'cms' && doc.cmsPage?.slug) {
      url = `/${locale}/${doc.cmsPage.slug}`
    }
    if (doc.linkType === 'fixed' && doc.fixedPage) {
      url = `/${locale}/${doc.fixedPage}`
    }

    return {
      id: doc.id,
      title: title || doc.cmsPage?.title,
      url,
    }
  })
}
