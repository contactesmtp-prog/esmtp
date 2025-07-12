'use client'

import Link from 'next/link'
import type { DirectorBlockInter as DirectorBlockInterProps } from '@/payload-types'
import { Media } from '@/components/Media'
import React from 'react'
import Image from 'next/image'

export const DirectorBlock: React.FC<DirectorBlockInterProps> = (props) => {
  const { heading, highlight, description, image, link } = props

  const resolvedHref =
    link?.type === 'custom'
      ? link?.url || '#'
      : typeof link?.reference?.value === 'object' && 'slug' in link.reference.value
        ? `/${link.reference.value.slug}`
        : '#'

  const isExternal = link?.newTab

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-800 font-playfair-display mb-4 leading-snug">
            {heading} {highlight && <span className="text-[#D78B22]">{highlight}</span>}.
          </h2>
          <p className="text-lg text-slate-600 mb-8">{description}</p>
          {link?.label && resolvedHref && (
            <Link
              href={resolvedHref}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`inline-block px-6 py-3 rounded-md transition duration-200 font-semibold ${
                link.appearance === 'outline'
                  ? 'border text-[#D78B22] border-[#D78B22] hover:bg-[#FFF8F0]'
                  : 'bg-[#D78B22] text-white hover:bg-[#bb6e19]'
              }`}
            >
              {link.label}
            </Link>
          )}
        </div>

        {/* Right: Director Image */}
        {/* <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
          <div
            className="absolute inset-0 z-0 transition duration-300 group-hover:blur-sm"
            style={{
              background: 'linear-gradient(to top right, rgba(215,139,34,0.3), transparent)',
            }}
          />
          <div className="relative w-full h-full z-10">
            {image && (
              <Media
                resource={image}
                className="w-full h-full relative"
                imgClassName="object-contain w-full h-full"
                priority
                loading="eager"
              />
            )}
          </div>
        </div> */}
        <div className="relative w-full h-[280px] md:h-[340px] max-w-md rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
          <div
            className="absolute inset-0 z-0 transition duration-300 group-hover:blur-sm"
            style={{
              background: 'linear-gradient(to top right, rgba(215,139,34,0.3), transparent)',
            }}
          />
          <div className="relative w-full h-full z-10 p-4">
            {image && (
              <Media
                resource={image}
                className="w-full h-full relative"
                imgClassName="object-contain w-full h-full max-h-full"
                priority
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>

      {/* Background SVG for flair */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 opacity-20"
        aria-hidden="true"
      >
        <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(200 200) scale(200)"
            >
              <stop stopColor="#D78B22" stopOpacity="0.4" />
              <stop offset="1" stopColor="#D78B22" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
