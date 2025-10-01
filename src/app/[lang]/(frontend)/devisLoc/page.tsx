export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Rentalitem } from '@/payload-types'
import { RentalDevisForm } from './Form'

type Props = {
  params: Promise<{
    lang: 'en' | 'fr' | 'ar'
  }>
  searchParams: Promise<{
    rental?: string
  }>
}

export default async function DevisLocPage({ params, searchParams }: Props) {
  const { lang } = await params
  const resolvedSearchParams = await searchParams
  const rentalId = resolvedSearchParams.rental

  let rental: Rentalitem | null = null

  if (rentalId) {
    const payload = await getPayload({ config: configPromise })
    try {
      rental = await payload.findByID({
        collection: 'rentalitems',
        id: rentalId,
        locale: lang,
      })
    } catch {
      rental = null
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">
        {lang === 'fr' && 'Demande de devis - Article de location'}
        {lang === 'en' && 'Quote Request - Rental Item'}
        {lang === 'ar' && 'طلب عرض سعر - مادة للإيجار'}
      </h1>
      <RentalDevisForm rental={rental} lang={lang} />
    </div>
  )
}
