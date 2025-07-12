// 'use client'

// import { useState } from 'react'
// import { Rentalitem } from '@/payload-types'
// import Link from 'next/link'

// export const RentalDevisForm: React.FC<{ rental: Rentalitem | null }> = ({ rental }) => {
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     const formData = new FormData(e.currentTarget)
//     const nom = formData.get('nom') as string
//     const email = formData.get('email') as string
//     const entreprise = formData.get('entreprise') as string
//     const telephone = formData.get('telephone') as string
//     const message = formData.get('message') as string
//     const rentalId = rental?.id

//     const res = await fetch('/api/submit-devis-location', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ nom, email, entreprise, telephone, message, rentalId }),
//     })

//     if (res.ok) {
//       setSuccess(true)
//     } else {
//       setError('Une erreur est survenue. Réessayez.')
//     }

//     setLoading(false)
//   }

//   if (success) {
//     return (
//       <div className="flex flex-col items-center justify-center text-center bg-green-50 border border-green-200 p-6 rounded-lg shadow-md">
//         <p className="text-green-700 font-semibold text-lg mb-4">
//           ✅ Votre demande a été envoyée avec succès.
//         </p>
//         <Link
//           href="/"
//           className="inline-block bg-[#0C2E53] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-[#133f76] transition"
//         >
//           Retour à l&apos;accueil
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <div>
//         <label className="block text-sm font-medium mb-1">Nom complet</label>
//         <input
//           name="nom"
//           type="text"
//           className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Email</label>
//         <input
//           name="email"
//           type="email"
//           className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Nom de l`&apos;`entreprise</label>
//         <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={4} />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Téléphone</label>
//         <input
//           name="telephone"
//           type="tel"
//           className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Article</label>
//         <input
//           type="text"
//           value={rental?.title || ''}
//           className="w-full border px-4 py-2 rounded bg-gray-100"
//           readOnly
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Message</label>
//         <textarea
//           name="message"
//           className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
//           rows={4}
//         />
//       </div>

//       {/* Consent checkbox */}
//       <div className="flex items-start gap-2">
//         <input name="consent" type="checkbox" required className="mt-1" />
//         <label className="text-sm">
//           J’accepte que mes données personnelles soient utilisées pour le traitement de ma demande.
//           Voir notre{' '}
//           <Link href="/politique-de-confidentialite" className="underline text-[#0C2E53]">
//             politique de confidentialité
//           </Link>
//           .
//         </label>
//       </div>

//       {error && <p className="text-red-600">{error}</p>}

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-[#D78B22] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#bb7116] transition"
//       >
//         {loading ? 'Envoi en cours…' : '📨 Envoyer la demande'}
//       </button>
//     </form>
//   )
// }

'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import type { Rentalitem } from '@/payload-types'

export const RentalDevisForm: React.FC<{ rental: Rentalitem | null }> = ({ rental }) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openPolicy, setOpenPolicy] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const nom = formData.get('nom') as string
    const email = formData.get('email') as string
    const entreprise = formData.get('entreprise') as string
    const telephone = formData.get('telephone') as string
    const message = formData.get('message') as string
    const rentalId = rental?.id

    const res = await fetch('/api/submit-devis-location', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, entreprise, telephone, message, rentalId }),
    })

    if (res.ok) {
      setSuccess(true)
    } else {
      setError('Une erreur est survenue. Réessayez.')
    }

    setLoading(false)
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center text-center bg-green-50 border border-green-200 p-6 rounded-lg shadow-md">
        <p className="text-green-700 font-semibold text-lg mb-4">
          ✅ Votre demande a été envoyée avec succès.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#0C2E53] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-[#133f76] transition"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* ───── Politique de confidentialité Modal ───── */}
      <Dialog open={openPolicy} onClose={() => setOpenPolicy(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-6 space-y-4">
            <Dialog.Title className="text-xl font-semibold">
              Politique de confidentialité
            </Dialog.Title>
            <div className="prose max-h-[60vh] overflow-y-auto">
              <p>
                Nous collectons vos données exclusivement pour répondre à votre demande de devis.
                Elles ne seront ni vendues ni partagées à des tiers non autorisés. Vous pouvez
                demander leur suppression à tout moment en nous contactant à{' '}
                <a href="mailto:contact@esmtp.dz">contact@esmtp.dz</a>.
              </p>
              <p>
                Pour plus d’informations, contactez notre responsable de la protection des données.
              </p>
            </div>
            <button
              onClick={() => setOpenPolicy(false)}
              className="mt-4 px-5 py-2 rounded-md bg-[#0C2E53] text-white hover:bg-[#133f76] transition"
            >
              Fermer
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* ───── Le formulaire ───── */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Nom complet</label>
          <input
            name="nom"
            type="text"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nom de l’entreprise</label>
          <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={2} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Téléphone</label>
          <input
            name="telephone"
            type="tel"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Article</label>
          <input
            type="text"
            value={rental?.title || ''}
            className="w-full border px-4 py-2 rounded bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-[#D78B22]"
            rows={4}
          />
        </div>

        <div className="flex items-start gap-2">
          <input name="consent" type="checkbox" required className="mt-1" />
          <label className="text-sm">
            J’accepte que mes données personnelles soient utilisées pour le traitement de ma
            demande. Voir notre{' '}
            <button
              type="button"
              onClick={() => setOpenPolicy(true)}
              className="underline text-[#0C2E53] hover:text-[#133f76]"
            >
              politique de confidentialité
            </button>
            .
          </label>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D78B22] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#bb7116] transition"
        >
          {loading ? 'Envoi en cours…' : '📨 Envoyer la demande'}
        </button>
      </form>
    </>
  )
}
