// 'use client'

// import React, { useRef } from 'react'
// import Link from 'next/link'
// import {
//   Calendar,
//   Clock,
//   ArrowRight,
//   ArrowLeft,
//   Sparkles,
//   ChevronLeft,
//   ChevronRight,
// } from 'lucide-react'
// import type { RequiredDataFromCollectionSlug } from 'payload'

// type Formation = RequiredDataFromCollectionSlug<'formations'>

// interface Props {
//   header: string
//   formations: Formation[]
//   lang: 'en' | 'ar' | 'fr'
// }

// const translations = {
//   en: {
//     badge: 'Upcoming Trainings',
//     subtitle: 'Discover our upcoming trainings and grow your skills with our experts',
//     popular: 'Popular',
//     duration: 'Duration',
//     cta: 'Get Quote',
//     scroll: 'Scroll horizontally to see more',
//     emptyTitle: 'No upcoming trainings',
//     emptyDesc: 'Check back soon to discover our exciting upcoming trainings!',
//   },
//   fr: {
//     badge: 'Formations à venir',
//     subtitle: 'Découvrez nos prochaines formations et développez vos compétences avec nos experts',
//     popular: 'Populaire',
//     duration: 'Durée',
//     cta: 'Devis',
//     scroll: 'Faites défiler horizontalement pour voir plus',
//     emptyTitle: 'Aucune formation à venir',
//     emptyDesc: 'Revenez bientôt pour découvrir nos prochaines formations passionnantes !',
//   },
//   ar: {
//     badge: 'الدورات القادمة',
//     subtitle: 'اكتشف دوراتنا القادمة وطوّر مهاراتك مع خبرائنا',
//     popular: 'شائع',
//     duration: 'المدة',
//     cta: 'اطلب عرض سعر',
//     scroll: 'قم بالتمرير أفقيًا لرؤية المزيد',
//     emptyTitle: 'لا توجد دورات قادمة',
//     emptyDesc: 'عد لاحقًا لاكتشاف دوراتنا القادمة المثيرة!',
//   },
// }

// export default function UpcomingFormationsClient({ header, formations, lang }: Props) {
//   const scrollContainerRef = useRef<HTMLDivElement>(null)

//   const t = translations[lang]

//   const formatDate = (d: string) =>
//     new Date(d).toLocaleDateString(lang === 'fr' ? 'fr-FR' : lang === 'en' ? 'en-US' : 'ar-DZ', {
//       day: 'numeric',
//       month: 'short',
//       year: 'numeric',
//     })

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
//     }
//   }

//   return (
//     <section
//       className="py-20 bg-slate-50 relative overflow-hidden"
//       dir={lang === 'ar' ? 'rtl' : 'ltr'}
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0C2E53]/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div
//             className={`inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-4 ${
//               lang === 'ar' ? 'flex-row-reverse' : ''
//             }`}
//           >
//             <Sparkles className="w-4 h-4" />
//             {t.badge}
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-4">{header}</h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
//         </div>

//         {/* Formations List */}
//         {formations.length ? (
//           <div className="relative">
//             {/* Left Scroll Button */}
//             <button
//               onClick={scrollLeft}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#0C2E53]/20 hover:border-[#0C2E53] hover:bg-[#0C2E53] rounded-full flex items-center justify-center text-[#0C2E53] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
//               aria-label="Scroll left"
//             >
//               <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
//             </button>

//             {/* Right Scroll Button */}
//             <button
//               onClick={scrollRight}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#D78B22]/20 hover:border-[#D78B22] hover:bg-[#D78B22] rounded-full flex items-center justify-center text-[#D78B22] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
//               aria-label="Scroll right"
//             >
//               <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
//             </button>

//             {/* Formations Container */}
//             <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4 px-16">
//               <div className="flex gap-6 w-max">
//                 {formations.map((f, i) => (
//                   <div
//                     key={f.id}
//                     className="group relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//                   >
//                     {/* Popular badge */}
//                     {i === 0 && (
//                       <div className="absolute -top-2 -right-2 bg-[#D78B22] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
//                         {t.popular}
//                       </div>
//                     )}

//                     {/* Top accent line */}
//                     <div
//                       className={`absolute top-0 left-0 right-0 h-1 ${
//                         i % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'
//                       }`}
//                     ></div>

//                     <div className="relative p-6">
//                       {/* Title */}
//                       <h3
//                         className={`text-xl font-bold mb-4 transition-colors duration-300 line-clamp-2 ${
//                           i % 2 === 0
//                             ? 'text-[#0C2E53] group-hover:text-[#D78B22]'
//                             : 'text-[#D78B22] group-hover:text-[#0C2E53]'
//                         }`}
//                       >
//                         {f.nom}
//                       </h3>

//                       {/* Date + Duration */}
//                       <div className="space-y-3 mb-6">
//                         <div className="flex items-center gap-3 text-gray-600">
//                           <div
//                             className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
//                               i % 2 === 0
//                                 ? 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'
//                                 : 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'
//                             }`}
//                           >
//                             <Calendar
//                               className={`w-4 h-4 ${
//                                 i % 2 === 0 ? 'text-[#0C2E53]' : 'text-[#D78B22]'
//                               }`}
//                             />
//                           </div>
//                           <div className="text-sm font-medium text-gray-800">
//                             {formatDate(f.startDate)} - {formatDate(f.endDate)}
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-3 text-gray-600">
//                           <div
//                             className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
//                               i % 2 === 0
//                                 ? 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'
//                                 : 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'
//                             }`}
//                           >
//                             <Clock
//                               className={`w-4 h-4 ${
//                                 i % 2 === 0 ? 'text-[#D78B22]' : 'text-[#0C2E53]'
//                               }`}
//                             />
//                           </div>
//                           <div className="text-sm font-medium text-gray-800">
//                             {t.duration} : {f.duree}
//                           </div>
//                         </div>
//                       </div>

//                       {/* CTA */}
//                       <div
//                         className={`${lang === 'ar' ? 'flex justify-end' : 'flex justify-start'}`}
//                       >
//                         <Link
//                           href={`/${lang}/devis?formation=${f.id}`}
//                           className={`group/btn inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg ${
//                             i % 2 === 0
//                               ? 'bg-[#0C2E53] hover:bg-[#0C2E53]/90 hover:shadow-[#0C2E53]/25'
//                               : 'bg-[#D78B22] hover:bg-[#D78B22]/90 hover:shadow-[#D78B22]/25'
//                           } ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
//                         >
//                           {lang === 'ar' ? (
//                             <>
//                               <ArrowLeft className="w-4 h-4 transition-transform duration-300" />
//                               <span>{t.cta}</span>
//                             </>
//                           ) : (
//                             <>
//                               <span>{t.cta}</span>
//                               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                             </>
//                           )}
//                         </Link>
//                       </div>
//                     </div>

//                     {/* Bottom accent line */}
//                     <div
//                       className={`absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
//                         i % 2 === 0 ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'
//                       }`}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Scroll indicator */}
//             <div className="flex justify-center mt-6">
//               <div className="flex items-center gap-2 text-sm text-gray-500">
//                 <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
//                 {t.scroll}
//                 <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Calendar className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.emptyTitle}</h3>
//             <p className="text-gray-600">{t.emptyDesc}</p>
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
import {
  Tag,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type { RequiredDataFromCollectionSlug } from 'payload'

type Formation = RequiredDataFromCollectionSlug<'formations'>

interface Props {
  header: string
  formations: Formation[]
  lang: 'en' | 'ar' | 'fr'
}

const translations = {
  en: {
    badge: 'Upcoming Trainings',
    subtitle: 'Discover our upcoming trainings and grow your skills with our experts',
    popular: 'Popular',
    reference: 'Reference',
    duration: 'Duration',
    cta: 'Get Quote',
    scroll: 'Scroll horizontally to see more',
    emptyTitle: 'No upcoming trainings',
    emptyDesc: 'Check back soon to discover our exciting upcoming trainings!',
  },
  fr: {
    badge: 'Formations à venir',
    subtitle: 'Découvrez nos prochaines formations et développez vos compétences avec nos experts',
    popular: 'Populaire',
    reference: 'Référence',
    duration: 'Durée',
    cta: 'Devis',
    scroll: 'Faites défiler horizontalement pour voir plus',
    emptyTitle: 'Aucune formation à venir',
    emptyDesc: 'Revenez bientôt pour découvrir nos prochaines formations passionnantes !',
  },
  ar: {
    badge: 'الدورات القادمة',
    subtitle: 'اكتشف دوراتنا القادمة وطوّر مهاراتك مع خبرائنا',
    popular: 'شائع',
    reference: 'المرجع',
    duration: 'المدة',
    cta: 'اطلب عرض سعر',
    scroll: 'قم بالتمرير أفقيًا لرؤية المزيد',
    emptyTitle: 'لا توجد دورات قادمة',
    emptyDesc: 'عد لاحقًا لاكتشاف دوراتنا القادمة المثيرة!',
  },
}

export default function UpcomingFormationsClient({ header, formations, lang }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const t = translations[lang]

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
  }

  return (
    <section
      className="py-20 bg-slate-50 relative overflow-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0C2E53]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              lang === 'ar' ? 'flex-row-reverse' : ''
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-4">{header}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Formations List */}
        {formations.length ? (
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#0C2E53]/20 hover:border-[#0C2E53] hover:bg-[#0C2E53] rounded-full flex items-center justify-center text-[#0C2E53] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

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
                    {/* Popular badge */}
                    {i === 0 && (
                      <div className="absolute -top-2 -right-2 bg-[#D78B22] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                        {t.popular}
                      </div>
                    )}

                    {/* Accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${
                        i % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'
                      }`}
                    ></div>

                    <div className="relative p-6">
                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-4 transition-colors duration-300 line-clamp-2 ${
                          i % 2 === 0
                            ? 'text-[#0C2E53] group-hover:text-[#D78B22]'
                            : 'text-[#D78B22] group-hover:text-[#0C2E53]'
                        }`}
                      >
                        {f.nom}
                      </h3>

                      {/* Reference + Duration */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                              i % 2 === 0
                                ? 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'
                                : 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'
                            }`}
                          >
                            <Tag
                              className={`w-4 h-4 ${
                                i % 2 === 0 ? 'text-[#0C2E53]' : 'text-[#D78B22]'
                              }`}
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            {t.reference}: {f.reference || '—'}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-600">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                              i % 2 === 0
                                ? 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'
                                : 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'
                            }`}
                          >
                            <Clock
                              className={`w-4 h-4 ${
                                i % 2 === 0 ? 'text-[#D78B22]' : 'text-[#0C2E53]'
                              }`}
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            {t.duration}: {f.duree || '—'}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div
                        className={`${lang === 'ar' ? 'flex justify-end' : 'flex justify-start'}`}
                      >
                        <Link
                          href={`/${lang}/devis?formation=${f.id}`}
                          className={`group/btn inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg ${
                            i % 2 === 0
                              ? 'bg-[#0C2E53] hover:bg-[#0C2E53]/90 hover:shadow-[#0C2E53]/25'
                              : 'bg-[#D78B22] hover:bg-[#D78B22]/90 hover:shadow-[#D78B22]/25'
                          } ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
                        >
                          {lang === 'ar' ? (
                            <>
                              <ArrowLeft className="w-4 h-4 transition-transform duration-300" />
                              <span>{t.cta}</span>
                            </>
                          ) : (
                            <>
                              <span>{t.cta}</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
                {t.scroll}
                <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.emptyTitle}</h3>
            <p className="text-gray-600">{t.emptyDesc}</p>
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
