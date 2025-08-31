// import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
// import configPromise from '@payload-config'
// import { draftMode } from 'next/headers'
// import Link from 'next/link'
// import { Package, ArrowRight, Sparkles, Star, Award } from 'lucide-react'
// //import { Media } from '@/components/Media'
// import Image from 'next/image'
// type CategoryType = RequiredDataFromCollectionSlug<'rentalcategories'>
// type ItemType = Omit<RequiredDataFromCollectionSlug<'rentalitems'>, 'category'> & {
//   category: string | CategoryType
// }

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
//     <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: '1s' }}
//         ></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Enhanced Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Package className="w-4 h-4" />
//             Nos catégories de location
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
//             {header}
//           </h2>

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Découvrez notre gamme complète d&apos;équipements professionnels organisés par
//             catégories
//           </p>
//         </div>

//         {/* 3-Column Grid Layout */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {rentalcategories.map((category, i) => {
//             const itemCount = rentalitems.filter((item) => {
//               const categoryId =
//                 typeof item.category === 'object' ? item.category?.id : item.category
//               return String(categoryId) === String(category.id)
//             }).length

//             const imageUrl =
//               typeof category.image === 'object' && category.image?.url
//                 ? category.image.url
//                 : '/placeholder.jpg'

//             const isEven = i % 2 === 0

//             return (
//               <div
//                 key={category.id}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//                 style={{
//                   animationDelay: `${i * 100}ms`,
//                 }}
//               >
//                 {/* Top accent line */}
//                 <div
//                   className={`absolute top-0 left-0 right-0 h-1 ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
//                 ></div>

//                 {/* Premium badge for first few categories */}
//                 {i < 3 && (
//                   <div
//                     className={`
//                     absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg transform rotate-12 z-10
//                     ${i === 0 ? 'bg-[#D78B22]' : isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                   `}
//                   >
//                     {i === 0 ? 'Populaire' : 'Disponible'}
//                   </div>
//                 )}

//                 {/* Image Container */}
//                 <div className="relative h-64 w-full overflow-hidden">
//                   <Image
//                     src={imageUrl}
//                     alt=""
//                     className="absolute inset-0 w-full h-full object-cover object-center ..."
//                     fill
//                   />

//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

//                   {/* Floating icon */}
//                   <div
//                     className={`
//                     absolute top-4 left-4 w-12 h-12 rounded-full
//                     ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                     flex items-center justify-center shadow-lg
//                     transform group-hover:scale-110 transition-transform duration-300
//                   `}
//                   >
//                     <Package className="w-6 h-6 text-white" />
//                   </div>

//                   {/* Item count badge */}
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
//                     {itemCount} espaces
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Category name */}
//                   <h3
//                     className={`
//                     text-xl font-bold mb-4 transition-colors duration-300
//                     ${isEven ? 'text-[#0C2E53] group-hover:text-[#D78B22]' : 'text-[#D78B22] group-hover:text-[#0C2E53]'}
//                   `}
//                   >
//                     {category.nom}
//                   </h3>

//                   {/* Stats */}
//                   <div className="flex items-center gap-3 mb-6 text-gray-600">
//                     <div
//                       className={`
//                       flex items-center justify-center w-8 h-8 rounded-lg transition-colors
//                       ${isEven ? 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20' : 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'}
//                     `}
//                     >
//                       <Star className={`w-4 h-4 ${isEven ? 'text-[#0C2E53]' : 'text-[#D78B22]'}`} />
//                     </div>
//                     <div className="text-sm">
//                       <div className="font-medium text-gray-800">Espaces disponibles</div>
//                       <div className="text-gray-600">
//                         {itemCount} espace{itemCount !== 1 ? 's' : ''} disponible
//                       </div>
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <Link
//                     href={`/location?category=${category.id}`}
//                     className={`
//                       group/btn relative w-full inline-flex items-center justify-center gap-2
//                       text-white px-6 py-3 rounded-xl font-semibold
//                       transition-all duration-300 hover:shadow-lg overflow-hidden
//                       ${isEven ? 'bg-[#0C2E53] hover:bg-[#0C2E53]/90 hover:shadow-[#0C2E53]/25' : 'bg-[#D78B22] hover:bg-[#D78B22]/90 hover:shadow-[#D78B22]/25'}
//                     `}
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       Voir les espaces
//                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                     </span>

//                     {/* Button hover effect */}
//                     <div
//                       className={`
//                       absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300
//                       ${isEven ? 'bg-[#D78B22]' : 'bg-[#0C2E53]'}
//                     `}
//                     ></div>
//                   </Link>
//                 </div>

//                 {/* Bottom decorative element */}
//                 <div
//                   className={`
//                   absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100
//                   transition-transform duration-500 origin-left
//                   ${isEven ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'}
//                 `}
//                 ></div>

//                 {/* Background glow effect */}
//                 <div
//                   className={`
//                   absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500
//                   ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                 `}
//                 ></div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Bottom stats section */}
//         <div className="text-center mt-16">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100 text-center">
//             {/* <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100"> */}
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-[#0C2E53] rounded-full"></div>
//               <span className="text-sm font-medium text-gray-700">
//                 {rentalcategories.length} catégorie{rentalcategories.length > 1 ? 's' : ''}{' '}
//                 disponible{rentalcategories.length > 1 ? 's' : ''}
//               </span>
//             </div>
//             <div className="w-px h-6 bg-gray-300"></div>
//             <div className="flex items-center gap-2">
//               <Award className="w-4 h-4 text-[#D78B22]" />
//               <span className="text-sm font-medium text-gray-700">
//                 {rentalitems.length} espaces au total
//               </span>
//             </div>
//             <div className="w-px h-6 bg-gray-300"></div>
//             <div className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-[#0C2E53]" />
//               <span className="text-sm font-medium text-gray-700">Location professionnelle</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { Package, ArrowRight, ArrowLeft, Sparkles, Star, Award } from 'lucide-react'
import Image from 'next/image'

type CategoryType = RequiredDataFromCollectionSlug<'rentalcategories'>
type ItemType = Omit<RequiredDataFromCollectionSlug<'rentalitems'>, 'category'> & {
  category: string | CategoryType
}

const translations = {
  fr: {
    categories: 'Nos catégories de location',
    description:
      "Découvrez notre gamme complète d'équipements professionnels organisés par catégories",
    popular: 'Populaire',
    available: 'Disponible',
    spaces: 'espaces',
    viewSpaces: 'Voir les espaces',
    totalCategories: 'catégorie',
    totalSpaces: 'espaces au total',
    professional: 'Location professionnelle',
    availableSpaces: 'Espaces disponibles',
  },
  en: {
    categories: 'Our rental categories',
    description: 'Discover our full range of professional equipment organized by category',
    popular: 'Popular',
    available: 'Available',
    spaces: 'spaces',
    viewSpaces: 'View spaces',
    totalCategories: 'category',
    totalSpaces: 'total spaces',
    professional: 'Professional rental',
    availableSpaces: 'Available spaces',
  },
  ar: {
    categories: 'فئات الإيجار لدينا',
    description: 'اكتشف مجموعتنا الكاملة من المعدات المهنية المنظمة حسب الفئة',
    popular: 'شائع',
    available: 'متاح',
    spaces: 'مساحات',
    viewSpaces: 'عرض المساحات',
    totalCategories: 'فئة',
    totalSpaces: 'مساحة إجمالاً',
    professional: 'إيجار احترافي',
    availableSpaces: 'المساحات المتاحة',
  },
}

const queryCategoriesAndItems = async (
  lang: 'fr' | 'en' | 'ar',
): Promise<{
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
      locale: lang, // Fetch localized fields
    }),
    payload.find({
      collection: 'rentalitems',
      draft,
      limit: 100,
      pagination: false,
      overrideAccess: draft,
      locale: lang, // Fetch localized fields
    }),
  ])

  return {
    rentalcategories: categoryResult.docs as CategoryType[],
    rentalitems: itemResult.docs as ItemType[],
  }
}

export const RentalOverviewBlock = async ({
  header,
  lang = 'fr',
}: {
  header: string
  lang?: 'fr' | 'en' | 'ar'
}) => {
  const { rentalcategories, rentalitems } = await queryCategoriesAndItems(lang)
  const t = translations[lang]
  const isRTL = lang === 'ar'

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            {t.categories}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
            {header}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.description}</p>
        </div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            const isEven = i % 2 === 0

            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
                ></div>

                {i < 3 && (
                  <div
                    className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg transform rotate-12 z-10 ${
                      i === 0 ? 'bg-[#D78B22]' : isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'
                    }`}
                  >
                    {i === 0 ? t.popular : t.available}
                  </div>
                )}

                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={category.nom || ''}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-full ${
                      isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'
                    } flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {itemCount} {t.spaces}
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      isEven
                        ? 'text-[#0C2E53] group-hover:text-[#D78B22]'
                        : 'text-[#D78B22] group-hover:text-[#0C2E53]'
                    }`}
                  >
                    {category.nom}
                  </h3>

                  <div className="flex items-center gap-3 mb-6 text-gray-600">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                        isEven
                          ? 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'
                          : 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${isEven ? 'text-[#0C2E53]' : 'text-[#D78B22]'}`} />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-800">{t.availableSpaces}</div>
                      <div className="text-gray-600">
                        {itemCount} {t.spaces}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${lang}/location?category=${category.id}`}
                    className={`group/btn relative w-full inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg overflow-hidden ${
                      isEven
                        ? 'bg-[#0C2E53] hover:bg-[#0C2E53]/90 hover:shadow-[#0C2E53]/25'
                        : 'bg-[#D78B22] hover:bg-[#D78B22]/90 hover:shadow-[#D78B22]/25'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t.viewSpaces}
                      {lang === 'ar' ? (
                        <ArrowLeft className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0C2E53] rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                {rentalcategories.length} {t.totalCategories}
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D78B22]" />
              <span className="text-sm font-medium text-gray-700">
                {rentalitems.length} {t.totalSpaces}
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0C2E53]" />
              <span className="text-sm font-medium text-gray-700">{t.professional}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
