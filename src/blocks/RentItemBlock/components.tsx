// import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
// import configPromise from '@payload-config'
// import { draftMode } from 'next/headers'
// import Link from 'next/link'
// import Image from 'next/image'

// type CategoryType = RequiredDataFromCollectionSlug<'rentalcategories'>
// type ItemType = RequiredDataFromCollectionSlug<'rentalitems'>

// const queryCategoriesAndItems = async (): Promise<{
//   rentalcategories: CategoryType[]
//   rentalitems: ItemType[]
// }> => {
//   const { isEnabled: draft } = await draftMode()
//   const payload = await getPayload({ config: configPromise })

//   const [categoryResult, itemResult] = await Promise.all([
//     payload.find({
//       collection: 'rentalcategories',
//       draft,
//       limit: 100,
//       pagination: false,
//       overrideAccess: draft,
//     }),
//     payload.find({
//       collection: 'rentalitems',
//       draft,
//       limit: 100,
//       pagination: false,
//       overrideAccess: draft,
//     }),
//   ])

//   return {
//     rentalcategories: categoryResult.docs as CategoryType[],
//     rentalitems: itemResult.docs as ItemType[],
//   }
// }

// export const RentalOverviewBlock = async ({ header }: { header: string }) => {
//   const { rentalcategories, rentalitems } = await queryCategoriesAndItems()

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12">
//           <h2 className="h2 font-playfair-display text-slate-800">{header}</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {rentalcategories.map((category, i) => {
//             const itemCount = rentalitems.filter((item) => {
//               if (typeof item.category === 'object' && item.category?.id === category.id)
//                 return true
//               if (typeof item.category === 'string' && item.category === category.id) return true
//               return false
//             }).length

//             return (
//               <div
//                 key={category.id}
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//                 className="border p-6 rounded shadow-md bg-gradient-to-br from-[#0C2E53] to-[#D78B22] text-white flex flex-col justify-between transition hover:scale-[1.02]"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{category.nom}</h3>
//                   <p className="text-sm">{itemCount} articles</p>
//                 </div>

//                 <div className="mt-6">
//                   <Link
//                     href={`/location?category=${category.id}`}
//                     className="inline-block bg-[#D78B22] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
//                   >
//                     Voir les articles
//                   </Link>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'

type CategoryType = RequiredDataFromCollectionSlug<'rentalcategories'>
type ItemType = Omit<RequiredDataFromCollectionSlug<'rentalitems'>, 'category'> & {
  category: string | CategoryType
}

const queryCategoriesAndItems = async (): Promise<{
  rentalcategories: CategoryType[]
  rentalitems: ItemType[]
}> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const [categoryResult, itemResult] = await Promise.all([
    payload.find({
      collection: 'rentalcategories',
      draft,
      limit: 100,
      pagination: false,
      overrideAccess: draft,
    }),
    payload.find({
      collection: 'rentalitems',
      draft,
      limit: 100,
      pagination: false,
      overrideAccess: draft,
    }),
  ])

  return {
    rentalcategories: categoryResult.docs as CategoryType[],
    rentalitems: itemResult.docs as ItemType[],
  }
}

// export const RentalOverviewBlock = async ({ header }: { header: string }) => {
//   const { rentalcategories, rentalitems } = await queryCategoriesAndItems()

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900 font-playfair-display">{header}</h2>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {rentalcategories.map((category, i) => {
//             const itemCount = rentalitems.filter((item) => {
//               if (typeof item.category === 'object' && item.category?.id === category.id)
//                 return true
//               if (
//                 typeof item.category === 'string' &&
//                 String(item.category) === String(category.id)
//               )
//                 return true

//               return false
//             }).length

//             const imageUrl =
//               typeof category.image === 'object' && category.image?.url
//                 ? category.image.url
//                 : '/placeholder.jpg'

//             return (
//               <div
//                 key={category.id}
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//                 className="relative rounded-xl overflow-hidden shadow-lg group h-72 transition-transform hover:scale-[1.02]"
//               >
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${imageUrl})` }}
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
//                 {/* Content */}
//                 <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">{category.nom}</h3>
//                     <p className="text-sm text-gray-200">{itemCount} articles disponibles</p>
//                   </div>

//                   <Link
//                     href={`/location?category=${category.id}`}
//                     className="self-start bg-white text-[#0C2E53] font-semibold px-4 py-2 rounded-md shadow-md hover:bg-slate-100 transition"
//                   >
//                     Voir les articles
//                   </Link>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

export const RentalOverviewBlock = async ({ header }: { header: string }) => {
  const { rentalcategories, rentalitems } = await queryCategoriesAndItems()

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 font-playfair-display">{header}</h2>
        </div>

        {/* Scrollable Card Container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide scroll-smooth">
          {rentalcategories.map((category, i) => {
            const itemCount = rentalitems.filter((item) => {
              const categoryId =
                typeof item.category === 'object' ? item.category?.id : item.category
              return String(categoryId) === String(category.id)
            }).length

            const imageUrl =
              typeof category.image === 'object' && category.image?.url
                ? category.image.url
                : '/placeholder.jpg'

            return (
              <div
                key={category.id}
                className="relative min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-start shrink-0 rounded-xl overflow-hidden shadow-lg group h-72 transition-transform hover:scale-[1.02]"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{category.nom}</h3>
                    <p className="text-sm text-gray-200">{itemCount} articles disponibles</p>
                  </div>

                  <Link
                    href={`/location?category=${category.id}`}
                    className="self-start bg-white text-[#0C2E53] font-semibold px-4 py-2 rounded-md shadow-md hover:bg-slate-100 transition"
                  >
                    Voir les articles
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Animated Gradient Bar (Below the cards) */}
        <div className="mt-6 h-1 animate-gradient-bar rounded-full" />
      </div>
    </section>
  )
}
