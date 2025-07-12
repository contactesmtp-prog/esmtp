'use client'

import React from 'react'
import type { FeaturedFormations } from '@/payload-types'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export const FeaturedFormationsBlock: React.FC<FeaturedFormations> = ({ header, items }) => {
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {header && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0C2E53]">{header}</h2>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items?.map((item, i) => {
            const formation = typeof item.formation === 'object' ? item.formation : null

            return (
              <div
                key={item.id || i}
                className="bg-slate-50 border border-gray-200 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-48 bg-gray-100 relative">
                  <Media
                    resource={item.image}
                    imgClassName="object-cover w-full h-full"
                    className="w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {formation?.nom || 'Formation'}
                  </h3>

                  {formation?.startDate && formation?.endDate && (
                    <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(formation.startDate)} - {formatDate(formation.endDate)}
                    </p>
                  )}

                  {formation?.duree && (
                    <p className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      Durée : {formation.duree}
                    </p>
                  )}

                  <div className="mt-4">
                    <Link
                      href={`/devis?formation=${formation?.id}`}
                      className="inline-block bg-[#D78B22] text-white px-5 py-2 rounded-full font-medium hover:bg-[#bb7116] transition"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
