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
          'Je consens librement à ce que l’École Supérieure de Management des Travaux Publics (ESMTP) collecte et traite les données personnelles suivantes me concernant : Nom et prénom ; Adresse e-mail ; Numéro de téléphone. Ces données sont collectées exclusivement dans le but d’établir un devis relatif à la formation demandée.',
        policyContent2:
          'Conformément à la loi n° 18-07 du 10 juin 2018, modifiée et complétée par la loi n° 25-11, relative à la protection des personnes physiques dans le traitement des données à caractère personnel, je suis informé(e) que : mes données ne seront utilisées que dans ce cadre, elles ne seront ni cédées ni partagées sans mon autorisation expresse, elles seront conservées pendant la durée nécessaire au traitement de la demande, et je peux exercer mes droits d’accès, de rectification, d’opposition ou de suppression en contactant ESMTP.',
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
          'I freely consent to the École Supérieure de Management des Travaux Publics (ESMTP) collecting and processing the following personal data concerning me: First and last name; Email address; Phone number. This data is collected solely for the purpose of providing a quote for the requested training.',
        policyContent2:
          'In accordance with Law No. 18-07 of June 10, 2018, amended and supplemented by Law No. 25-11, relating to the protection of individuals with regard to the processing of personal data, I am informed that: my data will only be used for this purpose; it will not be transferred or shared with third parties without my express authorization; it will be kept for the time necessary to process the request; I can exercise my rights of access, rectification, opposition, or deletion by contacting ESMTP. I acknowledge that I have read, understood, and accepted this consent.',
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
          'أوافق بحرية على قيام المدرسة العليا لإدارة الأشغال العامة (ESMTP) بجمع ومعالجة البيانات الشخصية التالية المتعلقة بي: الاسم واللقب؛ عنوان البريد الإلكتروني؛ رقم الهاتف. يتم جمع هذه البيانات حصريًا لغرض إعداد عرض أسعار يتعلق بالتدريب المطلوب.',
        policyContent2:
          'وفقًا للقانون رقم 18-07 المؤرخ 10 يونيو 2018، المعدل والمكمل بالقانون رقم 25-11، المتعلق بحماية الأشخاص الطبيعيين في معالجة البيانات الشخصية، أُبلغ بأن: لن يتم استخدام بياناتي إلا في إطار هذا الغرض؛ لن يتم نقلها أو مشاركتها مع أطراف ثالثة دون إذني الصريح؛ سيتم الاحتفاظ بها طوال المدة اللازمة لمعالجة طلب التقدير؛ يمكنني ممارسة حقوقي في الوصول إلى البيانات وتصحيحها ورفضها أو حذفها عن طريق الاتصال بـ ESMTP. أقر بأنني قد قرأت وفهمت وقبلت هذه الموافقة.',
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
