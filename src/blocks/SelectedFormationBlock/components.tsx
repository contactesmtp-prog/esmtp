'use client'

import React, { useRef, useState, useEffect } from 'react'
import type { FeaturedFormations } from '@/payload-types'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export const FeaturedFormationsBlock: React.FC<FeaturedFormations> = ({ header, items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width >= 1024)
        setItemsPerView(3) // lg
      else if (width >= 768)
        setItemsPerView(2) // md
      else setItemsPerView(1) // sm
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Handle scroll to specific index
  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current || !items) return

    const container = scrollContainerRef.current
    const cardWidth = container.scrollWidth / items.length
    const scrollPosition = index * cardWidth

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  // Handle scroll event to update active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current || !items) return

    const container = scrollContainerRef.current
    const cardWidth = container.scrollWidth / items.length
    const currentIndex = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(currentIndex)
  }

  // Calculate total dots needed
  const totalDots = items ? Math.ceil(items.length / itemsPerView) : 0

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        {header && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Formations vedettes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-6">{header}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos formations les plus populaires et développez vos compétences
            </p>
          </div>
        )}

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {items?.map((item, i) => {
              const formation = typeof item.formation === 'object' ? item.formation : null

              return (
                <div
                  key={item.id || i}
                  className="group relative w-80 flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${i % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
                  ></div>

                  {/* Popular badge for first item */}
                  {i === 0 && (
                    <div className="absolute -top-2 -right-2 bg-[#D78B22] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 z-10">
                      Populaire
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    <Media
                      resource={item.image}
                      imgClassName="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-4 transition-colors duration-300 line-clamp-2 ${i % 2 === 0 ? 'text-[#0C2E53] group-hover:text-[#D78B22]' : 'text-[#D78B22] group-hover:text-[#0C2E53]'}`}
                    >
                      {formation?.nom || 'Formation'}
                    </h3>

                    {/* Formation Details */}
                    <div className="space-y-3 mb-6">
                      {formation?.startDate && formation?.endDate && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${i % 2 === 0 ? 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20' : 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20'}`}
                          >
                            <Calendar
                              className={`w-4 h-4 ${i % 2 === 0 ? 'text-[#0C2E53]' : 'text-[#D78B22]'}`}
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            {formatDate(formation.startDate)} - {formatDate(formation.endDate)}
                          </div>
                        </div>
                      )}

                      {formation?.duree && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${i % 2 === 0 ? 'bg-[#D78B22]/10 group-hover:bg-[#D78B22]/20' : 'bg-[#0C2E53]/10 group-hover:bg-[#0C2E53]/20'}`}
                          >
                            <Clock
                              className={`w-4 h-4 ${i % 2 === 0 ? 'text-[#D78B22]' : 'text-[#0C2E53]'}`}
                            />
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            Durée : {formation.duree}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button - Small and Left Aligned */}
                    <div className="flex justify-start">
                      <Link
                        href={`/devis?formation=${formation?.id}`}
                        className={`group/btn inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg ${i % 2 === 0 ? 'bg-[#0C2E53] hover:bg-[#0C2E53]/90 hover:shadow-[#0C2E53]/25' : 'bg-[#D78B22] hover:bg-[#D78B22]/90 hover:shadow-[#D78B22]/25'}`}
                      >
                        <span>Devis</span>
                        <Calendar className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom decorative element */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${i % 2 === 0 ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'}`}
                  ></div>
                </div>
              )
            })}
          </div>

          {/* Dot Navigation */}
          {items && items.length > itemsPerView && (
            <div className="flex justify-center mt-8 gap-3">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index * itemsPerView)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    Math.floor(activeIndex / itemsPerView) === index
                      ? index % 2 === 0
                        ? 'bg-[#0C2E53] shadow-lg shadow-[#0C2E53]/25'
                        : 'bg-[#D78B22] shadow-lg shadow-[#D78B22]/25'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller à la formation ${index + 1}`}
                >
                  {Math.floor(activeIndex / itemsPerView) === index && (
                    <div
                      className={`absolute inset-0 rounded-full animate-ping ${
                        index % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'
                      } opacity-20`}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
              Faites défiler horizontalement ou utilisez les points
              <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
