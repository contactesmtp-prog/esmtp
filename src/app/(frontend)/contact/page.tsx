// 'use client'

// import React, { useState } from 'react'
// import { Dialog } from '@headlessui/react'

// export default function ContactPage() {
//   const [openPolicy, setOpenPolicy] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     const form = e.currentTarget
//     const formData = new FormData(form)

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

//       const data = await res.json()

//       if (!res.ok) {
//         throw new Error(data.error || 'Une erreur est survenue.')
//       }

//       form.reset()
//       alert('Demande envoyée avec succès !')
//     } catch (err: any) {
//       setError(err.message || 'Erreur lors de l’envoi.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white py-16 px-6 sm:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
//         {/* LEFT: Contact Information */}
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-[#0C2E53]">Contactez-nous</h2>
//           <p className="text-gray-600">Nous sommes là pour répondre à vos questions.</p>

//           <div className="space-y-4 text-sm text-gray-700">
//             <div>
//               <span className="font-semibold">Email:</span>{' '}
//               <a href="mailto:contact@esmtp.dz" className="text-blue-600 underline">
//                 contact@esmtp.dz
//               </a>
//             </div>
//             <div>
//               <span className="font-semibold">Téléphone:</span> +213 (0) XX XX XX XX
//             </div>
//             <div>
//               <span className="font-semibold">Fax:</span> +213 (0) XX XX XX YY
//             </div>
//             <div>
//               <span className="font-semibold">Adresse:</span> 123 Rue de l’Exemple, Alger, Algérie
//             </div>
//             <div>
//               <span className="font-semibold">Lien utile:</span>{' '}
//               <a href="https://example.com" target="_blank" className="text-blue-600 underline">
//                 www.example.com
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Contact Form */}
//         <div>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium mb-1">Nom complet</label>
//               <input name="nom" type="text" className="w-full border px-4 py-2 rounded" required />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 className="w-full border px-4 py-2 rounded"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Nom de l’entreprise</label>
//               <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={3} />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Téléphone</label>
//               <input name="telephone" type="tel" className="w-full border px-4 py-2 rounded" />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Message</label>
//               <textarea name="message" className="w-full border px-4 py-2 rounded" rows={4} />
//             </div>

//             <div className="flex items-start gap-2">
//               <input name="consent" type="checkbox" required className="mt-1" />
//               <label className="text-sm">
//                 J’accepte que mes données personnelles soient utilisées pour le traitement de ma
//                 demande. Voir notre{' '}
//                 <button
//                   type="button"
//                   onClick={() => setOpenPolicy(true)}
//                   className="underline text-[#0C2E53] hover:text-[#133f76]"
//                 >
//                   politique de confidentialité
//                 </button>
//                 .
//               </label>
//             </div>

//             {error && <p className="text-red-600">{error}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#D78B22] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
//             >
//               {loading ? 'Envoi en cours…' : 'Envoyer la demande'}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Privacy Policy Dialog */}
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
//     </div>
//   )
// }

'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ExternalLink,
  Send,
  User,
  MessageSquare,
  Shield,
  CheckCircle,
  Sparkles,
  Globe,
} from 'lucide-react'

export default function ContactPage() {
  const [openPolicy, setOpenPolicy] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

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

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Une erreur est survenue.')
      }

      form.reset()
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Erreur lors de lenvoi.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@esmtp.dz',
      href: 'mailto:contact@esmtp.dz',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+213 (0) XX XX XX XX',
      href: 'tel:+213XXXXXXXX',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Phone,
      label: 'Fax',
      value: '+213 (0) XX XX XX YY',
      href: null,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: '123 Rue de ',
      href: null,
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Globe,
      label: 'Site web',
      value: 'www.example.com',
      href: 'https://example.com',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Nous contacter
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Notre équipe d`&apos;`experts est là pour vous accompagner dans vos projets de
              formation. Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT: Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#0C2E53] mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  Informations de contact
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[#0C2E53] hover:text-[#D78B22] transition-colors duration-300 flex items-center gap-1 group"
                          >
                            {item.value}
                            {item.href.startsWith('http') && (
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </a>
                        ) : (
                          <span className="text-gray-600">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info Card */}
                <div className="mt-8 p-6 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-2xl border border-[#0C2E53]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#D78B22]" />
                    <span className="font-semibold text-[#0C2E53]">Réponse garantie sous 24h</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Notre équipe s`&apos;`engage à vous répondre dans les plus brefs délais pour
                    étudier votre demande.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0C2E53] mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                Envoyez-nous un message
              </h2>

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Message envoyé avec succès !</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#0C2E53]" />
                      Nom complet
                    </label>
                    <input
                      name="nom"
                      type="text"
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#0C2E53]" />
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#0C2E53]" />
                      Entreprise
                    </label>
                    <input
                      name="entreprise"
                      type="text"
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#0C2E53]" />
                      Téléphone
                    </label>
                    <input
                      name="telephone"
                      type="tel"
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="+213 XX XX XX XX"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#0C2E53]" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-[#0C2E53] focus:ring-4 focus:ring-[#0C2E53]/10 transition-all duration-300 group-hover:border-gray-300 resize-none"
                    rows={5}
                    placeholder="Décrivez votre projet ou vos besoins en formation..."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
                  <input
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-[#0C2E53] border-2 border-gray-300 rounded focus:ring-[#0C2E53] focus:ring-2"
                  />
                  <label className="text-sm text-gray-700 leading-relaxed">
                    J`&apos;`accepte que mes données personnelles soient utilisées pour le
                    traitement de ma demande.
                    <button
                      type="button"
                      onClick={() => setOpenPolicy(true)}
                      className="text-[#0C2E53] hover:text-[#D78B22] font-semibold underline ml-1 transition-colors duration-300"
                    >
                      Voir notre politique de confidentialité
                    </button>
                  </label>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-600 font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Envoyer le message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={openPolicy} onClose={() => setOpenPolicy(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <Dialog.Title className="text-2xl font-bold text-[#0C2E53]">
                Politique de confidentialité
              </Dialog.Title>
            </div>

            <div className="prose max-h-[60vh] overflow-y-auto space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Nous utilisons vos informations uniquement pour répondre à votre demande de contact.
                Vos données personnelles sont traitées avec le plus grand soin et ne seront jamais
                partagées avec des tiers sans votre consentement explicite.
              </p>
              <p className="leading-relaxed">
                Vous disposez d`&apos;`un droit d`&apos;`accès, de rectification et de suppression
                de vos données personnelles. Vous pouvez à tout moment demander la suppression de
                vos données via notre support client.
              </p>
              <p className="leading-relaxed">
                Pour toute question relative à vos droits ou à notre politique de confidentialité,
                contactez-nous à{' '}
                <a
                  href="mailto:contact@esmtp.dz"
                  className="text-[#0C2E53] hover:text-[#D78B22] font-semibold transition-colors"
                >
                  contact@esmtp.dz
                </a>
              </p>
            </div>

            <button
              onClick={() => setOpenPolicy(false)}
              className="w-full bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              J`&apos;`ai compris
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
