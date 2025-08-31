// import { getPayload } from 'payload'
// import configPromise from '@payload-config'
// import { Rentalitem } from '@/payload-types'
// import LocationGrid from './LocationGrid'

// type Props = {
//   searchParams: Promise<{
//     category?: string
//   }>
// }

// const LocationPage = async ({ searchParams }: Props) => {
//   const payload = await getPayload({ config: configPromise })

//   const resolvedSearchParams = await searchParams
//   const categoryId = resolvedSearchParams.category

//   const result = await payload.find({
//     collection: 'rentalitems',
//     limit: 100,
//     pagination: false,
//     where: categoryId
//       ? {
//           category: {
//             equals: categoryId,
//           },
//         }
//       : undefined,
//   })

//   return <LocationGrid rentalItems={result.docs as Rentalitem[]} />
// }

// export default LocationPage

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Rentalitem } from '@/payload-types'
import LocationGrid from './LocationGrid'

type Props = {
  params: {
    lang: 'en' | 'fr' | 'ar'
  }
  searchParams: Promise<{
    category?: string
  }>
}

const LocationPage = async ({ params, searchParams }: Props) => {
  const { lang } = params
  const payload = await getPayload({ config: configPromise })

  const resolvedSearchParams = await searchParams
  const categoryId = resolvedSearchParams.category

  const result = await payload.find({
    collection: 'rentalitems',
    limit: 100,
    pagination: false,
    locale: lang,
    where: categoryId
      ? {
          category: {
            equals: categoryId,
          },
        }
      : undefined,
  })

  return <LocationGrid rentalItems={result.docs as Rentalitem[]} lang={lang} />
}

export default LocationPage
