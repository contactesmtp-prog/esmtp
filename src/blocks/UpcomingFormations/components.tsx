import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import UpcomingFormationsClient from './UpcomingFormations.client' // 👈 client UI

type Formation = RequiredDataFromCollectionSlug<'formations'>

export const LastFormationBlock = async ({
  header,
  lang,
}: {
  header: string
  lang: 'en' | 'ar' | 'fr'
}) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 7)

  const { docs } = await payload.find({
    collection: 'formations',
    draft,
    locale: lang,
    overrideAccess: draft,
    pagination: false,
    limit: 10,
    sort: 'startDate',
    where: {
      startDate: {
        greater_than_equal: today.toISOString(),
        less_than_equal: nextWeek.toISOString(),
      },
    },
  })

  return <UpcomingFormationsClient header={header} formations={docs as Formation[]} lang={lang} />
}
