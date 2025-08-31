'use client'

import React, { useEffect, useState } from 'react'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

type Lang = 'en' | 'ar' | 'fr'

type MediumImpactHeroProps = Page['hero'] & {
  lang: Lang
}

export const MediumImpactHero: React.FC<MediumImpactHeroProps> = ({
  links,
  media,
  richText,
  lang,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!Array.isArray(media) || media.length < 2) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % media.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [media])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* 🔁 Background Media (fading) */}
      {Array.isArray(media) &&
        media.map((item, index) => (
          <div
            key={item.id || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0'
            }`}
          >
            <Media
              resource={item.image}
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
              fill
              priority={index === 0}
            />
          </div>
        ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 container max-w-4xl mx-auto px-4 sm:px-6 text-white text-center">
        {/* Rich Text */}
        {richText && (
          <div className="mb-8">
            <RichText
              data={richText}
              enableGutter={false}
              className="
                      prose prose-invert prose-lg max-w-none
                      [&>h1]:text-5xl [&>h1]:md:text-7xl [&>h1]:font-black [&>h1]:leading-tight [&>h1]:mb-6
                      [&>h1]:bg-gradient-to-r [&>h1]:from-white [&>h1]:via-blue-100 [&>h1]:to-white
                      [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h1]:drop-shadow-2xl
                      [&>p]:text-xl [&>p]:md:text-2xl [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-blue-50/90
                    "
            />
          </div>
        )}

        {/* Links */}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map(({ link }, i) => (
              <li key={i}>
                <CMSLink
                  lang={lang}
                  {...link}
                  className="btn text-white bg-blue-600 hover:bg-blue-700 transition px-5 py-2.5 rounded-full text-sm font-medium"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
