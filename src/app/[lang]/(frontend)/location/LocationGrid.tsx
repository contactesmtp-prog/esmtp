'use client'

import { Rentalitem } from '@/payload-types'
import Link from 'next/link'
import BackButton from '@/components/ui/backComp'
import { Media } from '@/components/Media'

type Props = {
  rentalItems: Rentalitem[]
  lang: 'en' | 'fr' | 'ar'
}

const translations = {
  fr: {
    title: 'Articles Disponibles à la Location',
    noItems: 'Aucun article trouvé pour cette catégorie.',
    imageNotAvailable: 'Image non disponible',
    requestQuote: 'Demander un devis',
  },
  en: {
    title: 'Available Rental Items',
    noItems: 'No items found for this category.',
    imageNotAvailable: 'Image not available',
    requestQuote: 'Request a quote',
  },
  ar: {
    title: 'المواد المتاحة للإيجار',
    noItems: 'لم يتم العثور على عناصر لهذه الفئة.',
    imageNotAvailable: 'الصورة غير متوفرة',
    requestQuote: 'اطلب عرض سعر',
  },
}

const LocationGrid = ({ rentalItems, lang }: Props) => {
  const t = translations[lang as keyof typeof translations] || translations.en
  const isArabic = lang === 'ar'

  return (
    <section
      className={`bg-gradient-to-b from-[#f8f9fa] to-white py-20 ${
        isArabic ? 'text-right' : 'text-left'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-10 mt-20 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <BackButton lang={lang} />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-center text-slate-900 mb-16 font-playfair-display">
          {t.title}
        </h1>

        {rentalItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">{t.noItems}</p>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {rentalItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative group rounded-3xl overflow-hidden shadow-xl border bg-white transition-transform hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full"
                >
                  <div className="relative h-80 w-full">
                    {typeof item.image === 'object' && item.image?.url ? (
                      <Media
                        resource={item.image}
                        alt={item.title || t.imageNotAvailable}
                        fill
                        imgClassName="object-cover group-hover:scale-105 transition-transform duration-500"
                        size="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {t.imageNotAvailable}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                      {item.details && item.details.length > 0 && (
                        <ul className="text-gray-600 text-sm space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-[#D78B22]">•</span>
                              <span>{detail.point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/${lang}/devisLoc?rental=${item.id}`}
                        className="inline-block w-full text-center bg-[#0C2E53] text-white font-medium py-2.5 px-6 rounded-xl transition hover:bg-[#133f76]"
                      >
                        {t.requestQuote}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default LocationGrid
