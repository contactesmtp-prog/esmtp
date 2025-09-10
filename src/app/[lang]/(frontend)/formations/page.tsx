import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Formation } from '@/payload-types'
import { FormationsClient } from './FormationsClient'

// type Props = {
//   params: { lang: 'en' | 'fr' | 'ar' } // restrict to supported languages
//   searchParams?: {
//     theme?: string
//   }
// }
type Props = {
  params: Promise<{ lang: 'en' | 'fr' | 'ar' }>
  searchParams?: Promise<{ theme?: string }>
}

export default async function FormationsPage(props: Props) {
  const { params, searchParams } = props
  const resolvedParams = await params
  const resolvedSearchParams = searchParams ? await searchParams : {}

  const { lang } = resolvedParams
  const payload = await getPayload({ config: configPromise })

  const themeId = resolvedSearchParams?.theme
  let themeInfo = null

  if (themeId) {
    try {
      themeInfo = await payload.findByID({
        collection: 'themes',
        id: themeId,
        locale: lang, // ✅ fetch theme in correct language
      })
    } catch (error) {
      console.error('Theme not found:', error)
    }
  }

  const result = await payload.find({
    collection: 'formations',
    limit: 100,
    pagination: false,
    locale: lang,
    where: themeId
      ? {
          theme: {
            equals: themeId,
          },
        }
      : {},
  })

  const formations = result.docs as Formation[]

  return (
    <FormationsClient
      lang={lang}
      formations={formations}
      themeInfo={themeInfo ? { id: String(themeInfo.id), title: themeInfo.title } : null}
    />
  )
}
