import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Formation } from '@/payload-types'
import { DevisForm } from './Form'

type Props = {
  params: { lang: 'en' | 'ar' | 'fr' }
  searchParams: Promise<{
    formation?: string
  }>
}

export default async function DevisPage({ params, searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const formationId = resolvedSearchParams.formation
  const lang = params.lang

  let formation: Formation | null = null

  if (formationId) {
    const payload = await getPayload({ config: configPromise })
    try {
      formation = await payload.findByID({
        collection: 'formations',
        id: formationId,
        locale: lang,
      })
    } catch {
      formation = null
    }
  }

  // Multilingual heading
  const headings: Record<typeof lang, string> = {
    fr: 'Demande de devis',
    en: 'Request a Quote',
    ar: 'طلب عرض أسعار',
  }
  // console.log('the lang from form is', lang)
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center">{headings[lang] ?? headings.fr}</h1>
      <DevisForm formation={formation} lang={lang} />
    </div>
  )
}
