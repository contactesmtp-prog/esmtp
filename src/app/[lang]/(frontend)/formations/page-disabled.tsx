// import { getPayload } from 'payload'
// import configPromise from '@payload-config'
// import { Formation } from '@/payload-types'
// import Link from 'next/link'
// import BackButton from '@/components/ui/backComp'
// // type Props = {
// //   searchParams: {
// //     theme?: string
// //   }
// // }

// type Props = {
//   searchParams: Promise<{
//     theme?: string
//   }>
// }
// const formatDate = (isoDate: string | null | undefined): string =>
//   isoDate ? new Date(isoDate).toISOString().split('T')[0] : ''

// export default async function FormationsPage({ searchParams }: Props) {
//   const payload = await getPayload({ config: configPromise })

//   //const themeId = searchParams.theme
//   const resolvedSearchParams = await searchParams
//   const themeId = resolvedSearchParams.theme
//   const result = await payload.find({
//     collection: 'formations',
//     limit: 100,
//     pagination: false,
//     where: themeId
//       ? {
//           theme: {
//             equals: themeId,
//           },
//         }
//       : undefined,
//   })

//   const formations = result.docs as Formation[]

//   return (
//     <div className="max-w-6xl mx-auto py-12 px-4">
//       <h1 className="text-2xl font-semibold mb-6">Liste des Formations</h1>
//       <div className="mt-6 mb-10 mt-20 px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-start">
//           <BackButton />
//         </div>
//       </div>
//       {formations.length === 0 ? (
//         <p>Aucune formation trouvée pour ce thème.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="text-left py-2 px-4 border-b">Formation</th>
//                 <th className="text-left py-2 px-4 border-b">Période</th>
//                 <th className="text-left py-2 px-4 border-b">Durée</th>
//                 <th className="text-left py-2 px-4 border-b">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {formations.map((formation) => (
//                 <tr key={formation.id}>
//                   <td className="py-2 px-4 border-b font-medium">{formation.nom}</td>
//                   <td className="py-2 px-4 border-b text-gray-600">
//                     {formatDate(formation.startDate)} → {formatDate(formation.endDate)}
//                   </td>
//                   <td className="py-2 px-4 border-b">{formation.duree}</td>
//                   <td className="py-2 px-4 border-b">
//                     <Link
//                       href={`/devis?formation=${formation.id}`}
//                       className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
//                     >
//                       Demander devis
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   )
// }
// // 'use client'

// // import Link from 'next/link'
// // import { Calendar, Clock, ArrowRight, BookOpen, Users } from 'lucide-react'
// // import type { Formation, Theme } from '@/payload-types'
// // import BackButton from '@/components/ui/backComp'

// // const formatDate = (isoDate?: string | null) =>
// //   isoDate
// //     ? new Date(isoDate).toLocaleDateString('fr-FR', {
// //         day: 'numeric',
// //         month: 'short',
// //         year: 'numeric',
// //       })
// //     : ''

// // interface Props {
// //   formations: Formation[]
// //   themeInfo: Theme | null
// // }

// // export default function FormationsClient({ formations = [], themeInfo }: Props) {
// //   console.log('Formations', formations)

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
// //       {/* Background effects */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
// //       </div>

// //       <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6">
// //         {/* Header */}
// //         <div className="mb-12">
// //           <div className="mb-6">
// //             <BackButton />
// //           </div>

// //           <div className="text-center">
// //             <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
// //               <BookOpen className="w-4 h-4" />
// //               {themeInfo ? `Thème: ${themeInfo.title}` : 'Toutes les formations'}
// //             </div>

// //             <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-4">
// //               {themeInfo ? `Formations ${themeInfo.title}` : 'Liste des Formations'}
// //             </h1>

// //             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
// //               {formations.length > 0
// //                 ? `Découvrez nos ${formations.length} formation${
// //                     formations.length > 1 ? 's' : ''
// //                   } disponible${formations.length > 1 ? 's' : ''}`
// //                 : 'Explorez notre catalogue de formations professionnelles'}
// //             </p>
// //           </div>
// //         </div>

// //         {/* Formations List */}
// //         {formations.length === 0 ? (
// //           <div className="text-center py-20">
// //             <div className="w-24 h-24 bg-gradient-to-br from-[#0C2E53]/10 to-[#D78B22]/10 rounded-full flex items-center justify-center mx-auto mb-8">
// //               <BookOpen className="w-12 h-12 text-[#0C2E53]" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Aucune formation trouvée</h3>
// //             <p className="text-gray-600 mb-8 max-w-md mx-auto">
// //               {themeInfo
// //                 ? `Aucune formation n'est actuellement disponible pour le thème "${themeInfo.title}".`
// //                 : 'Aucune formation ne correspond à vos critères de recherche.'}
// //             </p>
// //             <Link
// //               href="/formations"
// //               className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
// //             >
// //               <BookOpen className="w-5 h-5" />
// //               Voir toutes les formations
// //             </Link>
// //           </div>
// //         ) : (
// //           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// //             {formations.map((formation, index) => (
// //               <div
// //                 key={formation.id}
// //                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
// //                 style={{
// //                   animationDelay: `${index * 100}ms`,
// //                 }}
// //               >
// //                 {/* Gradient overlay */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#0C2E53]/5 to-[#D78B22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// //                 {/* Top accent line */}
// //                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C2E53] to-[#D78B22]"></div>

// //                 <div className="relative p-8">
// //                   <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-[#0C2E53] transition-colors duration-300 line-clamp-2">
// //                     {formation.nom}
// //                   </h3>

// //                   <div className="space-y-4 mb-8">
// //                     <div className="flex items-center gap-3 text-gray-600">
// //                       <div className="flex items-center justify-center w-10 h-10 bg-[#0C2E53]/10 rounded-xl group-hover:bg-[#0C2E53]/20 transition-colors">
// //                         <Calendar className="w-5 h-5 text-[#0C2E53]" />
// //                       </div>
// //                       <div className="text-sm">
// //                         <div className="font-medium text-gray-800">Période</div>
// //                         <div className="text-gray-600">
// //                           {formatDate(formation.startDate)} → {formatDate(formation.endDate)}
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-3 text-gray-600">
// //                       <div className="flex items-center justify-center w-10 h-10 bg-[#D78B22]/10 rounded-xl group-hover:bg-[#D78B22]/20 transition-colors">
// //                         <Clock className="w-5 h-5 text-[#D78B22]" />
// //                       </div>
// //                       <div className="text-sm">
// //                         <div className="font-medium text-gray-800">Durée</div>
// //                         <div className="text-gray-600">{formation.duree}</div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <Link
// //                     href={`/devis?formation=${formation.id}`}
// //                     className="group/btn relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 overflow-hidden"
// //                   >
// //                     <span className="relative z-10">Demander un devis</span>
// //                     <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
// //                     <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
// //                   </Link>
// //                 </div>

// //                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0C2E53]/20 to-[#D78B22]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {formations.length > 0 && (
// //           <div className="mt-16 text-center">
// //             <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
// //               <div className="flex items-center gap-2">
// //                 <div className="w-3 h-3 bg-[#0C2E53] rounded-full"></div>
// //                 <span className="text-sm font-medium text-gray-700">
// //                   {formations.length} formation{formations.length > 1 ? 's' : ''}
// //                 </span>
// //               </div>
// //               <div className="w-px h-6 bg-gray-300"></div>
// //               <div className="flex items-center gap-2">
// //                 <Users className="w-4 h-4 text-[#D78B22]" />
// //                 <span className="text-sm font-medium text-gray-700">Formation professionnelle</span>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       <style jsx>{`
// //         .line-clamp-2 {
// //           display: -webkit-box;
// //           -webkit-line-clamp: 2;
// //           -webkit-box-orient: vertical;
// //           overflow: hidden;
// //         }
// //       `}</style>
// //     </div>
// //   )
// // }
