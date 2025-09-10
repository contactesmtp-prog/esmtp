'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import type { Rentalitem } from '@/payload-types'

type Lang = 'en' | 'fr' | 'ar'

export const RentalDevisForm: React.FC<{ rental: Rentalitem | null; lang: Lang }> = ({
  rental,
  lang,
}) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openPolicy, setOpenPolicy] = useState(false)

  const t = {
    fr: {
      success: '✅ Votre demande a été envoyée avec succès.',
      error: 'Une erreur est survenue. Réessayez.',
      labels: {
        name: 'Nom complet',
        email: 'Email',
        company: 'Nom de l’entreprise',
        phone: 'Téléphone',
        rental: 'Article',
        message: 'Message',
        consent:
          'J’accepte que mes données personnelles soient utilisées pour le traitement de ma demande.',
        policy: 'politique de confidentialité',
        send: '📨 Envoyer la demande',
        sending: 'Envoi en cours…',
        policyTitle: 'Politique de confidentialité',
        policyText1:
          'Nous collectons vos données exclusivement pour répondre à votre demande de devis. Elles ne seront ni vendues ni partagées à des tiers non autorisés.',
        policyText2: 'Pour plus d’informations, contactez-nous à',
        close: 'Fermer',
        home: "Retour à l'accueil",
      },
    },
    en: {
      success: '✅ Your request has been sent successfully.',
      error: 'An error occurred. Please try again.',
      labels: {
        name: 'Full Name',
        email: 'Email',
        company: 'Company Name',
        phone: 'Phone',
        rental: 'Item',
        message: 'Message',
        consent: 'I agree that my personal data will be used for processing my request.',
        policy: 'privacy policy',
        send: '📨 Send Request',
        sending: 'Sending…',
        policyTitle: 'Privacy Policy',
        policyText1:
          'We collect your data exclusively to respond to your quote request. It will not be sold or shared with unauthorized third parties.',
        policyText2: 'For more information, contact us at',
        close: 'Close',
        home: 'Back to Home',
      },
    },
    ar: {
      success: '✅ تم إرسال طلبك بنجاح.',
      error: 'حدث خطأ ما. حاول مرة أخرى.',
      labels: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        company: 'اسم الشركة',
        phone: 'الهاتف',
        rental: 'المادة',
        message: 'الرسالة',
        consent: 'أوافق على استخدام بياناتي الشخصية لمعالجة طلبي.',
        policy: 'سياسة الخصوصية',
        send: '📨 إرسال الطلب',
        sending: 'جاري الإرسال…',
        policyTitle: 'سياسة الخصوصية',
        policyText1:
          'نقوم بجمع بياناتك فقط للرد على طلب عرض السعر الخاص بك. لن يتم بيعها أو مشاركتها مع أي طرف ثالث غير مصرح به.',
        policyText2: 'لمزيد من المعلومات، تواصل معنا عبر',
        close: 'إغلاق',
        home: 'العودة إلى الصفحة الرئيسية',
      },
    },
  }[lang]

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
      setError(t.error)
    }

    setLoading(false)
  }

  if (success) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center bg-green-50 border border-green-200 p-6 rounded-lg shadow-md ${
          lang === 'ar' ? 'text-right' : ''
        }`}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <p className="text-green-700 font-semibold text-lg mb-4">{t.success}</p>
        <Link
          href={`/${lang}`}
          className="inline-block bg-[#0C2E53] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-[#133f76] transition"
        >
          {t.labels.home}
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* ───── Privacy Policy Modal ───── */}
      <Dialog open={openPolicy} onClose={() => setOpenPolicy(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            className={`max-w-2xl w-full bg-white rounded-lg shadow-xl p-6 space-y-4 ${
              lang === 'ar' ? 'text-right' : ''
            }`}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <Dialog.Title className="text-xl font-semibold">{t.labels.policyTitle}</Dialog.Title>
            <div className="prose max-h-[60vh] overflow-y-auto">
              <p>{t.labels.policyText1}</p>
              <p>
                {t.labels.policyText2}{' '}
                <a href="mailto:contact@esmtp.dz" className="text-blue-600 underline">
                  contact@esmtp.dz
                </a>
                .
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

      {/* ───── Form ───── */}
      <form
        className={`space-y-6 ${lang === 'ar' ? 'text-right' : ''}`}
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
          <textarea name="entreprise" className="w-full border px-4 py-2 rounded" rows={2} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{t.labels.rental}</label>
          <input
            type="text"
            value={rental?.title || ''}
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
              {t.labels.policy}
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
          {loading ? t.labels.sending : t.labels.send}
        </button>
      </form>
    </>
  )
}
