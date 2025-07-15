'use client'

import { Rentalitem } from '@/payload-types'
import Link from 'next/link'

import BackButton from '@/components/ui/backComp'
import { Media } from '@/components/Media'

type Props = {
  rentalItems: Rentalitem[]
}

const LocationGrid = ({ rentalItems }: Props) => {
  return (
    <section className="bg-gradient-to-b from-[#f8f9fa] to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-16 font-playfair-display">
          Articles Disponibles à la Location
        </h1>

        {rentalItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Aucun article trouvé pour cette catégorie.
          </p>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {rentalItems.map((item) => {
              const imageUrl =
                typeof item.image === 'object' && item.image?.url
                  ? item.image.url
                  : '/placeholder.jpg'

              return (
                <div
                  key={item.id}
                  className="relative group rounded-3xl overflow-hidden shadow-xl border bg-white transition-transform hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full"
                >
                  <div className="relative h-80 w-full">
                    {/* <Image
                      src={imageUrl}
                      alt={item.title || 'Image article'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    /> */}
                    {/* <Media
                      resource={imageUrl}
                      alt={item.title || 'Image article'}
                      fill
                      imgClassName="object-cover group-hover:scale-105 transition-transform duration-500"
                      size="(max-width: 768px) 100vw, 33vw"
                    /> */}
                    {typeof item.image === 'object' && item.image?.url ? (
                      <Media
                        resource={item.image}
                        alt={item.title || 'Image article'}
                        fill
                        imgClassName="object-cover group-hover:scale-105 transition-transform duration-500"
                        size="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        Image non disponible
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
                        href={`/devisLoc?rental=${item.id}`}
                        className="inline-block w-full text-center bg-[#0C2E53] text-white font-medium py-2.5 px-6 rounded-xl transition hover:bg-[#133f76]"
                      >
                        Demander un devis
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
