// import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
// import configPromise from '@payload-config'
// import { draftMode } from 'next/headers'
// import Link from 'next/link'

// type ThemeType = RequiredDataFromCollectionSlug<'themes'>
// type FormationType = RequiredDataFromCollectionSlug<'formations'>

// const queryThemesAndFormations = async (): Promise<{
//   themes: ThemeType[]
//   formations: FormationType[]
// }> => {
//   const { isEnabled: draft } = await draftMode()
//   const payload = await getPayload({ config: configPromise })

//   const [themesResult, formationsResult] = await Promise.all([
//     payload.find({
//       collection: 'themes',
//       draft,
//       limit: 100,
//       pagination: false,
//       overrideAccess: draft,
//     }),
//     payload.find({
//       collection: 'formations',
//       draft,
//       limit: 100,
//       pagination: false,
//       overrideAccess: draft,
//     }),
//   ])

//   return {
//     themes: themesResult.docs as ThemeType[],
//     formations: formationsResult.docs as FormationType[],
//   }
// }

// export const ThemeOverviewBlock = async ({ header }: { header: string }) => {
//   const { themes, formations } = await queryThemesAndFormations()

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12">
//           <h2 className="h2 font-playfair-display text-slate-800">{header}</h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {themes.map((theme, i) => {
//             const formationCount = formations.filter((f) => {
//               if (typeof f.theme === 'object' && f.theme.id === theme.id) return true
//               if (typeof f.theme === 'string' && f.theme === theme.id) return true
//               return false
//             }).length

//             return (
//               <div
//                 key={theme.id}
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//                 className="border p-6 rounded shadow-md bg-gradient-to-br from-[#0C2E53] to-[#D78B22] text-white flex flex-col justify-between transition hover:scale-[1.02]"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
//                   <p className="text-sm">{formationCount} formations</p>
//                 </div>

//                 <div className="mt-6">
//                   <Link
//                     href={`/formations?theme=${theme.id}`}
//                     className="inline-block bg-[#D78B22] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
//                   >
//                     Voir les formations
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
import { BookOpen, ArrowRight, Sparkles, Users } from 'lucide-react'

type ThemeType = RequiredDataFromCollectionSlug<'themes'>
type FormationType = RequiredDataFromCollectionSlug<'formations'>

const queryThemesAndFormations = async (): Promise<{
  themes: ThemeType[]
  formations: FormationType[]
}> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const [themesResult, formationsResult] = await Promise.all([
    payload.find({
      collection: 'themes',
      draft,
      limit: 100,
      pagination: false,
      overrideAccess: draft,
    }),
    payload.find({
      collection: 'formations',
      draft,
      limit: 100,
      pagination: false,
      overrideAccess: draft,
    }),
  ])

  return {
    themes: themesResult.docs as ThemeType[],
    formations: formationsResult.docs as FormationType[],
  }
}

export const ThemeOverviewBlock = async ({ header }: { header: string }) => {
  const { themes, formations } = await queryThemesAndFormations()

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Nos domaines d&apos;expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
            {header}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez nos différents thèmes de formation et trouvez celui qui correspond
            parfaitement à vos besoins professionnels
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, i) => {
            const formationCount = formations.filter((f) => {
              if (typeof f.theme === 'object' && f.theme.id === theme.id) return true
              if (typeof f.theme === 'string' && f.theme === theme.id) return true
              return false
            }).length

            return (
              <div
                key={theme.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C2E53]/5 to-[#D78B22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C2E53] to-[#D78B22]"></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0C2E53] to-[#D78B22] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#0C2E53] transition-colors duration-300">
                      {theme.title}
                    </h3>

                    {/* Formation count with icon */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-[#D78B22]/10 rounded-lg">
                        <Users className="w-4 h-4 text-[#D78B22]" />
                      </div>
                      <span className="font-medium">
                        {formationCount} formation{formationCount !== 1 ? 's' : ''} disponible
                        {formationCount !== 1 ? 's' : ''}
                      </span>
                    </div>

                    {/* Description placeholder */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Explorez nos formations spécialisées dans ce domaine et développez vos
                      compétences avec nos experts.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/formations?theme=${theme.id}`}
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 overflow-hidden"
                  >
                    <span className="relative z-10">Voir les formations</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />

                    {/* Button hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0C2E53]/20 to-[#D78B22]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
            Besoin d&apos;aide pour choisir ?{' '}
            <Link href="/contact"> Contactez nos conseillers</Link>
            <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
