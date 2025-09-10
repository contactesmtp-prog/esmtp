// 'use client'

// import { useState } from 'react'
// import { Mail, Phone, Building2, Send, User, MessageSquare } from 'lucide-react'
// export default function ContactForm({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     const formData = new FormData(e.currentTarget)
//     const payload = {
//       nom: formData.get('nom'),
//       email: formData.get('email'),
//       entreprise: formData.get('entreprise'),
//       telephone: formData.get('telephone'),
//       message: formData.get('message'),
//     }

//     try {
//       const res = await fetch('/api/submit-contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       })

//       const result = await res.json()

//       if (res.ok) {
//         setSuccess(true)
//         ;(e.currentTarget as HTMLFormElement).reset()
//       } else {
//         throw new Error(result.error || 'Failed to submit')
//       }
//     } catch (err: any) {
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {error && <div className="text-red-600 text-sm">{error}</div>}
//       {success && (
//         <div className="text-green-600 text-sm">
//           {lang === 'ar'
//             ? 'تم إرسال رسالتك بنجاح.'
//             : lang === 'fr'
//               ? 'Votre message a été envoyé avec succès.'
//               : 'Your message was sent successfully.'}
//         </div>
//       )}

//       {/* Same form fields you already have: nom, email, entreprise, telephone, message, consent */}

//       {/* Full Name + Email */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="group">
//           <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//             <User className="w-4 h-4 text-[#0C2E53]" />
//             {lang === 'ar' ? 'الاسم الكامل' : lang === 'fr' ? 'Nom complet' : 'Full name'}
//           </label>
//           <input
//             name="nom"
//             type="text"
//             className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
//             placeholder={
//               lang === 'ar'
//                 ? 'اكتب اسمك الكامل'
//                 : lang === 'fr'
//                   ? 'Votre nom complet'
//                   : 'Your full name'
//             }
//             required
//           />
//         </div>

//         <div className="group">
//           <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//             <Mail className="w-4 h-4 text-[#0C2E53]" />
//             {lang === 'ar' ? 'بريدك الإلكتروني' : lang === 'fr' ? 'adresse email' : 'email address'}
//           </label>
//           <input
//             name="email"
//             type="email"
//             className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
//             placeholder={
//               lang === 'ar'
//                 ? 'بريدك الإلكتروني'
//                 : lang === 'fr'
//                   ? 'Votre adresse email'
//                   : 'Your email address'
//             }
//             required
//           />
//         </div>
//       </div>

//       {/* Company + Phone */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="group">
//           <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//             <Building2 className="w-4 h-4 text-[#0C2E53]" />
//             {lang === 'ar' ? 'المؤسسة' : lang === 'fr' ? 'Entreprise' : 'Company'}
//           </label>
//           <input
//             name="entreprise"
//             type="text"
//             className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
//             placeholder={
//               lang === 'ar'
//                 ? 'اسم مؤسستك'
//                 : lang === 'fr'
//                   ? 'Nom de votre entreprise'
//                   : 'Your company name'
//             }
//           />
//         </div>
//         <div className="group">
//           <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//             <Phone className="w-4 h-4 text-[#0C2E53]" />
//             {lang === 'ar' ? 'الهاتف' : lang === 'fr' ? 'Téléphone' : 'Phone'}
//           </label>
//           <input
//             name="telephone"
//             type="tel"
//             dir={lang === 'ar' ? 'rtl' : 'ltr'}
//             className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
//             placeholder={
//               lang === 'ar'
//                 ? 'رقم هاتفك'
//                 : lang === 'fr'
//                   ? 'Votre numéro de téléphone'
//                   : 'Your phone number'
//             }
//           />
//         </div>
//       </div>

//       {/* Message */}
//       <div className="group">
//         <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
//           <MessageSquare className="w-4 h-4 text-[#0C2E53]" />
//           {lang === 'ar' ? 'الرسالة' : lang === 'fr' ? 'Message' : 'Message'}
//         </label>
//         <textarea
//           name="message"
//           className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 resize-none"
//           rows={5}
//           placeholder={
//             lang === 'ar'
//               ? 'صف مشروعك أو احتياجاتك...'
//               : lang === 'fr'
//                 ? 'Décrivez votre projet ou vos besoins...'
//                 : 'Describe your project or needs...'
//           }
//         />
//       </div>

//       {/* Consent */}
//       <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
//         <input
//           name="consent"
//           type="checkbox"
//           required
//           className="mt-1 w-5 h-5 text-[#0C2E53] border-2 border-gray-300 rounded focus:ring-[#0C2E53] focus:ring-2"
//         />
//         <label className="text-sm text-gray-700 leading-relaxed">
//           {lang === 'ar'
//             ? 'أوافق على استخدام بياناتي الشخصية لمعالجة طلبي.'
//             : lang === 'fr'
//               ? "J'accepte que mes données personnelles soient utilisées pour le traitement de ma demande."
//               : 'I agree that my personal data will be used to process my request.'}
//         </label>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={loading}
//         className="group relative w-full bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
//       >
//         <span className="relative z-10 flex items-center justify-center gap-2">
//           {loading ? (
//             lang === 'ar' ? (
//               'جاري الإرسال...'
//             ) : lang === 'fr' ? (
//               'Envoi...'
//             ) : (
//               'Sending...'
//             )
//           ) : (
//             <>
//               <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               {lang === 'ar'
//                 ? 'إرسال الرسالة'
//                 : lang === 'fr'
//                   ? 'Envoyer le message'
//                   : 'Send message'}
//             </>
//           )}
//         </span>
//         <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </button>
//     </form>
//   )
// }

'use client'

import { useState, useRef } from 'react'
import { Mail, Phone, Building2, Send, User, MessageSquare } from 'lucide-react'

export default function ContactForm({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const formRef = useRef<HTMLFormElement | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formEl = formRef.current
    if (!formEl) return

    const formData = new FormData(formEl)
    const payload = {
      nom: formData.get('nom'),
      email: formData.get('email'),
      entreprise: formData.get('entreprise'),
      telephone: formData.get('telephone'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (res.ok) {
        setSuccess(true)
        formEl.reset() // ✅ no more null issue
      } else {
        throw new Error(result.error || 'Failed to submit')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && (
        <div className="text-green-600 text-sm">
          {lang === 'ar'
            ? 'تم إرسال رسالتك بنجاح.'
            : lang === 'fr'
              ? 'Votre message a été envoyé avec succès.'
              : 'Your message was sent successfully.'}
        </div>
      )}

      {/* --- Full Name + Email --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-[#0C2E53]" />
            {lang === 'ar' ? 'الاسم الكامل' : lang === 'fr' ? 'Nom complet' : 'Full name'}
          </label>
          <input
            name="nom"
            type="text"
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
            placeholder={
              lang === 'ar'
                ? 'اكتب اسمك الكامل'
                : lang === 'fr'
                  ? 'Votre nom complet'
                  : 'Your full name'
            }
            required
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0C2E53]" />
            {lang === 'ar' ? 'بريدك الإلكتروني' : lang === 'fr' ? 'Adresse email' : 'Email address'}
          </label>
          <input
            name="email"
            type="email"
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
            placeholder={
              lang === 'ar'
                ? 'بريدك الإلكتروني'
                : lang === 'fr'
                  ? 'Votre adresse email'
                  : 'Your email address'
            }
            required
          />
        </div>
      </div>

      {/* --- Company + Phone --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#0C2E53]" />
            {lang === 'ar' ? 'المؤسسة' : lang === 'fr' ? 'Entreprise' : 'Company'}
          </label>
          <input
            name="entreprise"
            type="text"
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
            placeholder={
              lang === 'ar'
                ? 'اسم مؤسستك'
                : lang === 'fr'
                  ? 'Nom de votre entreprise'
                  : 'Your company name'
            }
          />
        </div>
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#0C2E53]" />
            {lang === 'ar' ? 'الهاتف' : lang === 'fr' ? 'Téléphone' : 'Phone'}
          </label>
          <input
            name="telephone"
            type="tel"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300"
            placeholder={
              lang === 'ar'
                ? 'رقم هاتفك'
                : lang === 'fr'
                  ? 'Votre numéro de téléphone'
                  : 'Your phone number'
            }
          />
        </div>
      </div>

      {/* --- Message --- */}
      <div className="group">
        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#0C2E53]" />
          {lang === 'ar' ? 'الرسالة' : lang === 'fr' ? 'Message' : 'Message'}
        </label>
        <textarea
          name="message"
          className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 resize-none"
          rows={5}
          placeholder={
            lang === 'ar'
              ? 'صف مشروعك أو احتياجاتك...'
              : lang === 'fr'
                ? 'Décrivez votre projet ou vos besoins...'
                : 'Describe your project or needs...'
          }
        />
      </div>

      {/* --- Consent --- */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 w-5 h-5 text-[#0C2E53] border-2 border-gray-300 rounded focus:ring-[#0C2E53] focus:ring-2"
        />
        <label className="text-sm text-gray-700 leading-relaxed">
          {lang === 'ar'
            ? 'أوافق على استخدام بياناتي الشخصية لمعالجة طلبي.'
            : lang === 'fr'
              ? "J'accepte que mes données personnelles soient utilisées pour le traitement de ma demande."
              : 'I agree that my personal data will be used to process my request.'}
        </label>
      </div>

      {/* --- Submit Button --- */}
      <button
        type="submit"
        disabled={loading}
        className="group relative w-full bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            lang === 'ar' ? (
              'جاري الإرسال...'
            ) : lang === 'fr' ? (
              'Envoi...'
            ) : (
              'Sending...'
            )
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              {lang === 'ar'
                ? 'إرسال الرسالة'
                : lang === 'fr'
                  ? 'Envoyer le message'
                  : 'Send message'}
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </form>
  )
}
