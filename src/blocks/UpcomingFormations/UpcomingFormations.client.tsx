// 'use client'

// import Link from 'next/link'
// import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
// import type { RequiredDataFromCollectionSlug } from 'payload'

// type Formation = RequiredDataFromCollectionSlug<'formations'>

// interface Props {
//   header: string
//   formations: Formation[]
// }

// export default function UpcomingFormationsClient({ header, formations }: Props) {
//   const formatDate = (d: string) =>
//     new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })

//   return (
//     <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
//       {/* decorations */}
//       <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl" />
//       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto px-4 relative">
//         {/* header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Sparkles className="w-4 h-4" />
//             Formations à venir
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             {header}
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Découvrez nos prochaines formations et développez vos compétences avec nos experts
//           </p>
//         </div>

//         {/* list */}
//         {formations.length ? (
//           <div className="relative">
//             <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//             <div className="overflow-x-auto scrollbar-hide pb-4">
//               <div className="flex gap-6 w-max">
//                 {formations.map((f, i) => (
//                   <div
//                     key={f.id}
//                     className="group relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//                   >
//                     {i === 0 && (
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg rotate-12">
//                         Populaire
//                       </div>
//                     )}

//                     <div className="relative p-6">
//                       <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
//                         {f.nom}
//                       </h3>

//                       <div className="space-y-3 mb-6">
//                         <div className="flex items-center gap-3 text-gray-600">
//                           <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition">
//                             <Calendar className="w-4 h-4 text-indigo-600" />
//                           </div>
//                           <div className="text-sm font-medium text-gray-800">
//                             {formatDate(f.startDate)} - {formatDate(f.endDate)}
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-3 text-gray-600">
//                           <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition">
//                             <Clock className="w-4 h-4 text-purple-600" />
//                           </div>
//                           <div className="text-sm font-medium text-gray-800">Durée : {f.duree}</div>
//                         </div>
//                       </div>

//                       <Link
//                         href={`/devis?formation=${f.id}`}
//                         className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition hover:shadow-lg hover:shadow-indigo-500/25"
//                       >
//                         Demander un devis
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </div>

//                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-16 text-gray-600">
//             Aucune formation à venir pour le moment.
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
import type { RequiredDataFromCollectionSlug } from 'payload'

type Formation = RequiredDataFromCollectionSlug<'formations'>

interface Props {
  header: string
  formations: Formation[]
}

export default function UpcomingFormationsClient({ header, formations }: Props) {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-[#D78B22]/10 relative overflow-hidden">
      {/* decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-[#D78B22]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Formations à venir
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-[#D78B22] bg-clip-text text-transparent mb-4">
            {header}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos prochaines formations et développez vos compétences avec nos experts
          </p>
        </div>

        {/* list */}
        {formations.length ? (
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-6 w-max">
                {formations.map((f, i) => (
                  <div
                    key={f.id}
                    className="group relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    {i === 0 && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-[#D78B22] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg rotate-12">
                        Populaire
                      </div>
                    )}

                    <div className="relative p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {f.nom}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition">
                            <Calendar className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            {formatDate(f.startDate)} - {formatDate(f.endDate)}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                          <div className="flex items-center justify-center w-8 h-8 bg-[#D78B22]/10 rounded-lg group-hover:bg-[#D78B22]/20 transition">
                            <Clock className="w-4 h-4 text-[#D78B22]" />
                          </div>
                          <div className="text-sm font-medium text-gray-800">Durée : {f.duree}</div>
                        </div>
                      </div>

                      <Link
                        href={`/devis?formation=${f.id}`}
                        className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-[#D78B22] hover:from-indigo-700 hover:to-[#c47617] text-white px-6 py-3 rounded-xl font-semibold transition hover:shadow-lg hover:shadow-indigo-500/25"
                      >
                        Demander un devis
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-[#D78B22] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 text-gray-600">
            Aucune formation à venir pour le moment.
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
