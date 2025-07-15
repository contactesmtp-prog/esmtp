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
//     <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-[#D78B22]/10 relative overflow-hidden">
//       {/* decorations */}
//       <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-[#D78B22]/30 rounded-full blur-3xl" />
//       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto px-4 relative">
//         {/* header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Sparkles className="w-4 h-4" />
//             Formations à venir
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-[#D78B22] bg-clip-text text-transparent mb-4">
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
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-[#D78B22] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg rotate-12">
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
//                           <div className="flex items-center justify-center w-8 h-8 bg-[#D78B22]/10 rounded-lg group-hover:bg-[#D78B22]/20 transition">
//                             <Clock className="w-4 h-4 text-[#D78B22]" />
//                           </div>
//                           <div className="text-sm font-medium text-gray-800">Durée : {f.duree}</div>
//                         </div>
//                       </div>

//                       <Link
//                         href={`/devis?formation=${f.id}`}
//                         className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-[#D78B22] hover:from-indigo-700 hover:to-[#c47617] text-white px-6 py-3 rounded-xl font-semibold transition hover:shadow-lg hover:shadow-indigo-500/25"
//                       >
//                         Demander un devis
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </div>

//                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-[#D78B22] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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

import React, { useRef } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import type { RequiredDataFromCollectionSlug } from 'payload'

type Formation = RequiredDataFromCollectionSlug<'formations'>

interface Props {
  header: string
  formations: Formation[]
}

export default function UpcomingFormationsClient({ header, formations }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0C2E53]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Formations à venir
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-4">{header}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez nos prochaines formations et développez vos compétences avec nos experts
          </p>
        </div>

        {/* Formations List */}
        {formations.length ? (
          <div className="relative">
            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#0C2E53]/20 hover:border-[#0C2E53] hover:bg-[#0C2E53] rounded-full flex items-center justify-center text-[#0C2E53] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#D78B22]/20 hover:border-[#D78B22] hover:bg-[#D78B22] rounded-full flex items-center justify-center text-[#D78B22] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Formations Container */}
            <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4 px-16">
              <div className="flex gap-6 w-max">
                {formations.map((f, i) => (
                  <div
                    key={f.id}
                    className="group relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  >
                    {/* Popular badge for first item */}
                    {i === 0 && (
                      <div className="absolute -top-2 -right-2 bg-[#D78B22] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                        Populaire
                      </div>
                    )}

                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${i % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
                    ></div>

                    <div className="relative p-6">
                      {/* Formation title */}
                      <h3
                        className={`text-xl font-bold mb-4 transition-colors duration-300 line-clamp-2 ${i % 2 === 0 ? 'text-[#0C2E53] group-hover:text-[#D78B22]' : 'text-[#D78B22] group-hover:text-[#0C2E53]'}`}
                      >
                        {f.nom}
                      </h3>

                      {/* Date and duration info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${i % 2 === 0 ? 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20' : 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'}`}
                          >
                            <Calendar
                              className={`w-4 h-4 ${i % 2 === 0 ? 'text-[#0C2E53]' : 'text-[#D78B22]'}`}
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            {formatDate(f.startDate)} - {formatDate(f.endDate)}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${i % 2 === 0 ? 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20' : 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'}`}
                          >
                            <Clock
                              className={`w-4 h-4 ${i % 2 === 0 ? 'text-[#D78B22]' : 'text-[#0C2E53]'}`}
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-800">Durée : {f.duree}</div>
                        </div>
                      </div>

                      {/* Small CTA Button - Left Aligned */}
                      <div className="flex justify-start">
                        <Link
                          href={`/devis?formation=${f.id}`}
                          className={`group/btn inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg ${i % 2 === 0 ? 'bg-[#0C2E53] hover:bg-[#0C2E53]/90 hover:shadow-[#0C2E53]/25' : 'bg-[#D78B22] hover:bg-[#D78B22]/90 hover:shadow-[#D78B22]/25'}`}
                        >
                          <span>Devis</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${i % 2 === 0 ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'}`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
                Faites défiler horizontalement pour voir plus
                <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucune formation à venir</h3>
            <p className="text-gray-600">
              Revenez bientôt pour découvrir nos prochaines formations passionnantes !
            </p>
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
