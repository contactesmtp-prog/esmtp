import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Rentalitem } from '@/payload-types'
import LocationGrid from './LocationGrid'

type Props = {
  searchParams: Promise<{
    category?: string
  }>
}

const LocationPage = async ({ searchParams }: Props) => {
  const payload = await getPayload({ config: configPromise })

  const resolvedSearchParams = await searchParams
  const categoryId = resolvedSearchParams.category

  const result = await payload.find({
    collection: 'rentalitems',
    limit: 100,
    pagination: false,
    where: categoryId
      ? {
          category: {
            equals: categoryId,
          },
        }
      : undefined,
  })

  return <LocationGrid rentalItems={result.docs as Rentalitem[]} />
}

export default LocationPage
