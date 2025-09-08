import React from 'react'
import type { Metadata } from 'next'

import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ExternalLink,
  Send,
  User,
  MessageSquare,
  Sparkles,
} from 'lucide-react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' | 'ar' }>
}) {
  const { lang } = await params
  const payload = await getPayload({ config: configPromise })

  // ✅ Fetch localized contact info
  const contactData = await payload.find({
    collection: 'contactuscoll',
    limit: 1,
    locale: lang,
    overrideAccess: false,
  })

  const info = contactData.docs[0] // first doc

  // Build the list dynamically
  const contactInfo = [
    {
      icon: Mail,
      label: lang === 'ar' ? 'البريد الإلكتروني' : lang === 'fr' ? 'Email' : 'Email',
      value: info?.Email || '',
      href: info?.Email ? `mailto:${info.Email}` : null,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: lang === 'ar' ? 'الهاتف' : lang === 'fr' ? 'Téléphone' : 'Phone',
      value: info?.tel || '',
      href: info?.tel ? `tel:${info.tel}` : null,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Phone,
      label: 'Fax',
      value: info?.fax || '',
      href: null,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      label: lang === 'ar' ? 'العنوان' : lang === 'fr' ? 'Adresse' : 'Address',
      value: info?.adresse || '',
      href: null,
      color: 'from-red-500 to-red-600',
    },
  ]

  // ✅ Handle RTL for Arabic
  const rtl = lang === 'ar'

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden ${
        rtl ? 'rtl' : 'ltr'
      }`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {lang === 'ar' ? 'اتصل بنا' : lang === 'fr' ? 'Nous contacter' : 'Contact us'}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
              {lang === 'ar'
                ? 'دعونا نتحدث عن مشروعك'
                : lang === 'fr'
                  ? 'Parlons de votre projet'
                  : 'Let’s talk about your project'}
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              {lang === 'ar'
                ? 'فريقنا هنا لدعمك في مشاريعك التدريبية. تواصل معنا لمناقشة احتياجاتك.'
                : lang === 'fr'
                  ? "Notre équipe d'experts est là pour vous accompagner dans vos projets de formation. Contactez-nous pour discuter de vos besoins spécifiques."
                  : 'Our team is here to support you in your training projects. Contact us to discuss your specific needs.'}
            </p>
          </div>

          {/* Grid Layout */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${rtl ? 'lg:[direction:rtl]' : ''}`}
          >
            {/* LEFT: Contact Information */}
            <div className="space-y-8 order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#0C2E53] mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  {lang === 'ar'
                    ? 'معلومات الاتصال'
                    : lang === 'fr'
                      ? 'Informations de contact'
                      : 'Contact Information'}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map(
                    (item, index) =>
                      item.value && (
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
                                rel={
                                  item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                                }
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
                      ),
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form (kept same as yours, just localized labels) */}
            <div className="order-2">
              <div className="order-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#0C2E53] mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  {lang === 'ar'
                    ? 'أرسل لنا رسالة'
                    : lang === 'fr'
                      ? 'Envoyez-nous un message'
                      : 'Send us a message'}
                </h2>

                <form className="space-y-6">
                  {/* Full Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-[#0C2E53]" />
                        {lang === 'ar'
                          ? 'الاسم الكامل'
                          : lang === 'fr'
                            ? 'Nom complet'
                            : 'Full name'}
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
                        {lang === 'ar'
                          ? 'بريدك الإلكتروني'
                          : lang === 'fr'
                            ? 'adresse email'
                            : 'email address'}
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

                  {/* Company + Phone */}
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

                  {/* Message */}
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

                  {/* Consent */}
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      {lang === 'ar'
                        ? 'إرسال الرسالة'
                        : lang === 'fr'
                          ? 'Envoyer le message'
                          : 'Send message'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'ESMTP | Contact Us', // 👈 fixed title
  description: 'Welcome to ESMTP official website.',
}
