// 'use client'

// import { useState } from 'react'
// import { Formation } from '@/payload-types'
// import Link from 'next/link'
// export const DevisForm: React.FC<{ formation: Formation | null }> = ({ formation }) => {
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
//     const formationId = formation?.id

//     const res = await fetch('/api/submit-devis', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ nom, email, telephone, entreprise, message, formationId }),
//     })

//     if (res.ok) {
//       setSuccess(true)
//     } else {
//       setError('Une erreur est survenue. Réessayez.')
//     }

//     setLoading(false)
//   }

//   if (success) {
//     return <p className="text-green-600 font-semibold">Votre demande a été envoyée avec succès.</p>
//   }

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div>
//         <label className="block text-sm font-medium mb-1">Nom complet</label>
//         <input name="nom" type="text" className="w-full border px-4 py-2 rounded" required />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Email</label>
//         <input name="email" type="email" className="w-full border px-4 py-2 rounded" required />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Nom de l`&apos;`entreprise</label>
//         <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={4} />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Téléphone</label>
//         <input name="telephone" type="tel" className="w-full border px-4 py-2 rounded" />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Formation</label>
//         <input
//           type="text"
//           value={formation?.nom || ''}
//           className="w-full border px-4 py-2 rounded bg-gray-100"
//           readOnly
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Message</label>
//         <textarea name="message" className="w-full border px-4 py-2 rounded" rows={4} />
//       </div>

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
//         className="bg-[#D78B22] text-white px-6 py-2 rounded hover:bg-opacity-90"
//       >
//         {loading ? 'Envoi en cours…' : 'Envoyer la demande'}
//       </button>
//     </form>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Formation } from '@/payload-types'
// import Link from 'next/link'

// export const DevisForm: React.FC<{ formation: Formation | null; lang: 'en' | 'ar' | 'fr' }> = ({
//   formation,
//   lang,
// }) => {
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [openPolicy, setOpenPolicy] = useState(false)

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
//     const formationId = formation?.id

//     const res = await fetch('/api/submit-devis', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ nom, email, telephone, entreprise, message, formationId }),
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
//       <div className="text-green-600 font-semibold text-center bg-green-50 border border-green-200 p-6 rounded-lg shadow-md">
//         ✅ Votre demande a été envoyée avec succès.
//       </div>
//     )
//   }

//   return (
//     <>
//       {/* Politique Modal */}
//       <Dialog open={openPolicy} onClose={() => setOpenPolicy(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-6 space-y-4">
//             <Dialog.Title className="text-xl font-semibold">
//               Politique de confidentialité
//             </Dialog.Title>
//             <div className="prose max-h-[60vh] overflow-y-auto">
//               <p>
//                 Nous utilisons vos informations uniquement pour répondre à votre demande. Vos
//                 données ne seront jamais partagées sans votre consentement. Vous pouvez à tout
//                 moment demander la suppression de vos données via notre support.
//               </p>
//               <p>
//                 Contactez-nous à{' '}
//                 <a href="mailto:contact@esmtp.dz" className="text-blue-600 underline">
//                   contact@esmtp.dz
//                 </a>{' '}
//                 pour toute question relative à vos droits.
//               </p>
//             </div>
//             <button
//               onClick={() => setOpenPolicy(false)}
//               className="mt-4 px-5 py-2 rounded-md bg-[#0C2E53] text-white hover:bg-[#133f76] transition"
//             >
//               Fermer
//             </button>
//           </Dialog.Panel>
//         </div>
//       </Dialog>

//       {/* Form */}
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium mb-1">Nom complet</label>
//           <input name="nom" type="text" className="w-full border px-4 py-2 rounded" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input name="email" type="email" className="w-full border px-4 py-2 rounded" required />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Nom de l’entreprise</label>
//           <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={3} />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Téléphone</label>
//           <input name="telephone" type="tel" className="w-full border px-4 py-2 rounded" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Formation</label>
//           <input
//             type="text"
//             value={formation?.nom || ''}
//             className="w-full border px-4 py-2 rounded bg-gray-100"
//             readOnly
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Message</label>
//           <textarea name="message" className="w-full border px-4 py-2 rounded" rows={4} />
//         </div>

//         <div className="flex items-start gap-2">
//           <input name="consent" type="checkbox" required className="mt-1" />
//           <label className="text-sm">
//             J’accepte que mes données personnelles soient utilisées pour le traitement de ma
//             demande. Voir notre{' '}
//             <button
//               type="button"
//               onClick={() => setOpenPolicy(true)}
//               className="underline text-[#0C2E53] hover:text-[#133f76]"
//             >
//               politique de confidentialité
//             </button>
//             .
//           </label>
//         </div>

//         {error && <p className="text-red-600">{error}</p>}

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-[#D78B22] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
//         >
//           {loading ? 'Envoi en cours…' : 'Envoyer la demande'}
//         </button>
//       </form>
//     </>
//   )
// }

'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Formation } from '@/payload-types'

export const DevisForm: React.FC<{ formation: Formation | null; lang: 'en' | 'ar' | 'fr' }> = ({
  formation,
  lang,
}) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openPolicy, setOpenPolicy] = useState(false)

  console.log('the lang from form is', lang)

  // 🔥 Translation dictionary
  const translations: Record<typeof lang, any> = {
    fr: {
      labels: {
        name: 'Nom complet',
        email: 'Email',
        company: 'Nom de l’entreprise',
        phone: 'Téléphone',
        formation: 'Formation',
        message: 'Message',
        consent:
          'J’accepte que mes données personnelles soient utilisées pour le traitement de ma demande. Voir notre',
        policyTitle: 'Politique de confidentialité',
        policyContent1:
          'Nous utilisons vos informations uniquement pour répondre à votre demande. Vos données ne seront jamais partagées sans votre consentement. Vous pouvez à tout moment demander la suppression de vos données via notre support.',
        policyContent2:
          'Contactez-nous à contact@esmtp.dz pour toute question relative à vos droits.',
        close: 'Fermer',
        submit: 'Envoyer la demande',
        submitting: 'Envoi en cours…',
        success: '✅ Votre demande a été envoyée avec succès.',
        error: 'Une erreur est survenue. Réessayez.',
      },
    },
    en: {
      labels: {
        name: 'Full Name',
        email: 'Email',
        company: 'Company Name',
        phone: 'Phone',
        formation: 'Training',
        message: 'Message',
        consent: 'I agree that my personal data will be used to process my request. See our',
        policyTitle: 'Privacy Policy',
        policyContent1:
          'We only use your information to respond to your request. Your data will never be shared without your consent. You can request deletion of your data at any time via our support.',
        policyContent2: 'Contact us at contact@esmtp.dz for any questions regarding your rights.',
        close: 'Close',
        submit: 'Send Request',
        submitting: 'Sending…',
        success: '✅ Your request has been sent successfully.',
        error: 'An error occurred. Please try again.',
      },
    },
    ar: {
      labels: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        company: 'اسم الشركة',
        phone: 'الهاتف',
        formation: 'التكوين',
        message: 'الرسالة',
        consent: 'أوافق على استخدام بياناتي الشخصية لمعالجة طلبي. راجع',
        policyTitle: 'سياسة الخصوصية',
        policyContent1:
          'نستخدم معلوماتك فقط للرد على طلبك. لن تتم مشاركة بياناتك أبداً بدون موافقتك. يمكنك في أي وقت طلب حذف بياناتك عبر الدعم.',
        policyContent2: 'اتصل بنا عبر contact@esmtp.dz لأي أسئلة تتعلق بحقوقك.',
        close: 'إغلاق',
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال…',
        success: '✅ تم إرسال طلبك بنجاح.',
        error: 'حدث خطأ. حاول مرة أخرى.',
      },
    },
  }

  const t = translations[lang] || translations.fr

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
    const formationId = formation?.id

    const res = await fetch('/api/submit-devis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, telephone, entreprise, message, formationId }),
    })

    if (res.ok) {
      setSuccess(true)
    } else {
      setError(t.labels.error)
    }

    setLoading(false)
  }

  if (success) {
    return (
      <div className="text-green-600 font-semibold text-center bg-green-50 border border-green-200 p-6 rounded-lg shadow-md">
        {t.labels.success}
      </div>
    )
  }

  return (
    <>
      {/* Politique / Privacy Policy Modal */}
      <Dialog open={openPolicy} onClose={() => setOpenPolicy(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className={`max-w-2xl w-full bg-white rounded-lg shadow-xl p-6 space-y-4 ${
              lang === 'ar' ? 'text-right' : 'text-left'
            }`}
          >
            <Dialog.Title className="text-xl font-semibold">{t.labels.policyTitle}</Dialog.Title>
            <div className="prose max-h-[60vh] overflow-y-auto">
              <p>{t.labels.policyContent1}</p>
              <p>
                {t.labels.policyContent2.split('contact@esmtp.dz')[0]}
                <a href="mailto:contact@esmtp.dz" className="text-blue-600 underline">
                  contact@esmtp.dz
                </a>
                {t.labels.policyContent2.split('contact@esmtp.dz')[1]}
              </p>
            </div>
            <button
              onClick={() => setOpenPolicy(false)}
              className="mt-4 px-5 py-2 rounded-md bg-[#0C2E53] text-white hover:bg-[#133f76] transition"
            >
              {t.labels.close}
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Form */}
      <form
        className={`space-y-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.name}</label>
          <input name="nom" type="text" className="w-full border px-4 py-2 rounded" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.email}</label>
          <input name="email" type="email" className="w-full border px-4 py-2 rounded" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.phone}</label>
          <input name="telephone" type="tel" className="w-full border px-4 py-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.company}</label>
          <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={3} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.formation}</label>
          <input
            type="text"
            value={formation?.nom || ''}
            className="w-full border px-4 py-2 rounded bg-gray-100"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.message}</label>
          <textarea name="message" className="w-full border px-4 py-2 rounded" rows={4} />
        </div>

        <div className="flex items-start gap-2">
          <input name="consent" type="checkbox" required className="mt-1" />
          <label className="text-sm">
            {t.labels.consent}{' '}
            <button
              type="button"
              onClick={() => setOpenPolicy(true)}
              className="underline text-[#0C2E53] hover:text-[#133f76]"
            >
              {t.labels.policyTitle.toLowerCase()}
            </button>
            .
          </label>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#D78B22] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
        >
          {loading ? t.labels.submitting : t.labels.submit}
        </button>
      </form>
    </>
  )
}
