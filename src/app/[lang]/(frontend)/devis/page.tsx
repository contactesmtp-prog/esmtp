// import { getPayload } from 'payload'
// import configPromise from '@payload-config'
// import { Formation } from '@/payload-types'

// type Props = {
//   searchParams: {
//     formation?: string
//   }
// }

// export default async function DevisPage({ searchParams }: Props) {
//   const formationId = searchParams.formation
//   let formation: Formation | null = null

//   if (formationId) {
//     const payload = await getPayload({ config: configPromise })
//     try {
//       formation = await payload.findByID({
//         collection: 'formations',
//         id: formationId,
//       })
//     } catch (err) {
//       // handle not found gracefully
//       formation = null
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-12">
//       <h1 className="text-2xl font-bold mb-6">Demande de devis</h1>

//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Nom complet</label>
//           <input
//             type="text"
//             className="w-full border px-4 py-2 rounded"
//             placeholder="Votre nom"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             className="w-full border px-4 py-2 rounded"
//             placeholder="exemple@mail.com"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Téléphone</label>
//           <input
//             type="tel"
//             className="w-full border px-4 py-2 rounded"
//             placeholder="+213 6 00 00 00 00"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Formation</label>
//           <input
//             type="text"
//             className="w-full border px-4 py-2 rounded bg-gray-100"
//             value={formation?.nom || formationId || ''}
//             readOnly
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Message</label>
//           <textarea
//             className="w-full border px-4 py-2 rounded"
//             rows={4}
//             placeholder="Votre message..."
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-[#D78B22] text-white px-6 py-2 rounded hover:bg-opacity-90"
//         >
//           Envoyer la demande
//         </button>
//       </form>
//     </div>
//   )
// }

// import { getPayload } from 'payload'
// import configPromise from '@payload-config'
// import { Formation } from '@/payload-types'
// import { DevisForm } from './Form'
// // type Props = {
// //   searchParams: {
// //     formation?: string
// //   }
// // }

// type Props = {
//   searchParams: Promise<{
//     formation?: string
//     lang: 'en' | 'ar' | 'fr'
//   }>
// }

// export default async function DevisPage({ searchParams }: Props) {
//   const resolvedSearchParams = await searchParams
//   const formationId = resolvedSearchParams.formation
//   const lang = resolvedSearchParams.lang
//   //   const formationId = searchParams.formation

//   let formation: Formation | null = null

//   if (formationId) {
//     const payload = await getPayload({ config: configPromise })
//     try {
//       formation = await payload.findByID({
//         collection: 'formations',
//         id: formationId,
//         locale: lang,
//       })
//     } catch {
//       formation = null
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-12">
//       <h1 className="text-2xl font-bold mb-6">Demande de devis</h1>
//       <DevisForm formation={formation} />
//     </div>
//   )
// }

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Formation } from '@/payload-types'
import { DevisForm } from './Form'

type Props = {
  params: { lang: 'en' | 'ar' | 'fr' }
  searchParams: Promise<{
    formation?: string
  }>
}

export default async function DevisPage({ params, searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const formationId = resolvedSearchParams.formation
  const lang = params.lang

  let formation: Formation | null = null

  if (formationId) {
    const payload = await getPayload({ config: configPromise })
    try {
      formation = await payload.findByID({
        collection: 'formations',
        id: formationId,
        locale: lang,
      })
    } catch {
      formation = null
    }
  }

  // Multilingual heading
  const headings: Record<typeof lang, string> = {
    fr: 'Demande de devis',
    en: 'Request a Quote',
    ar: 'طلب عرض أسعار',
  }
  console.log('the lang from form is', lang)
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center">{headings[lang] ?? headings.fr}</h1>
      <DevisForm formation={formation} lang={lang} />
    </div>
  )
}
