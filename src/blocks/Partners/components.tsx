// 'use client'

// import React, { useRef } from 'react'
// import { Media } from '@/components/Media' // adjust if your path differs
// import { cn } from '@/utilities/ui' // optional utility; remove if unused
// import type { PartnersInter } from '@/payload-types' // ← your generated interface

// export const Partners: React.FC<PartnersInter> = ({ title, partners }) => {
//   // refs let us scroll smoothly to each partner card
//   const cardRefs = useRef<HTMLDivElement[]>([])

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* section heading */}
//         {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}

//         {/* ───── TOP LOGO SCROLLER ───── */}
//         <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-10">
//           <div className="inline-flex space-x-6">
//             {partners?.map((partner, idx) => (
//               <button
//                 key={partner.id ?? idx}
//                 onClick={() => cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })}
//                 className="flex-shrink-0 focus:outline-none"
//                 aria-label={`Voir ${partner.name}`}
//               >
//                 <div className="w-20 h-20 rounded-full border overflow-hidden grid place-items-center bg-gray-100 hover:scale-105 transition-transform">
//                   <Media resource={partner.logo} imgClassName="object-contain h-full w-full" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ───── VERTICAL CARD LIST ───── */}
//         <div className="flex flex-col gap-12">
//           {partners?.map((partner, idx) => (
//             <div
//               key={partner.id ?? idx}
//               ref={(el) => {
//                 if (el) cardRefs.current[idx] = el
//               }}
//               className="text-center p-8 border rounded-2xl shadow-sm"
//             >
//               {/* logo */}
//               <div className="w-28 h-28 mx-auto mb-4">
//                 <Media resource={partner.logo} imgClassName="object-contain h-full w-full" />
//               </div>

//               {/* name */}
//               <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>

//               {/* description */}
//               {partner.description && (
//                 <p className="text-gray-600 max-w-lg mx-auto">{partner.description}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import React, { useRef } from 'react'
// import { Media } from '@/components/Media'
// import { cn } from '@/utilities/ui'
// import { CMSLink } from '@/components/Link'
// import Link from 'next/link'
// import type { PartnersInter } from '@/payload-types'

// export const Partners: React.FC<PartnersInter> = ({ title, partners }) => {
//   const cardRefs = useRef<HTMLDivElement[]>([])

//   // Get the link URL (internal or external)
//   const resolveLink = (partner: (typeof partners)[number]) => {
//     const link = partner.link
//     if (!link) return '#'

//     if (link.type === 'custom') return link.url || '#'
//     if (typeof link.reference?.value === 'object' && 'slug' in link.reference.value) {
//       return `/${link.reference.value.slug}`
//     }

//     return '#'
//   }

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Section Heading */}
//         {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}

//         {/* ───── TOP LOGO SCROLLER ───── */}
//         <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-10">
//           <div className="inline-flex space-x-6">
//             {partners?.map((partner, idx) => (
//               <button
//                 key={partner.id ?? idx}
//                 onClick={() => cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })}
//                 className="flex-shrink-0 focus:outline-none"
//                 aria-label={`Voir ${partner.name}`}
//               >
//                 <div className="w-20 h-20 rounded-full border overflow-hidden grid place-items-center bg-gray-100 hover:scale-105 transition-transform">
//                   <Media resource={partner.logo} imgClassName="object-contain h-full w-full" />
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ───── VERTICAL CARD LIST ───── */}
//         <div className="flex flex-col gap-12">
//           {partners?.map((partner, idx) => {
//             const href = resolveLink(partner)
//             const isExternal = partner.link?.newTab

//             const Card = (
//               <div
//                 ref={(el) => {
//                   if (el) cardRefs.current[idx] = el
//                 }}
//                 className="text-center p-8 border rounded-2xl shadow-sm hover:shadow-md transition"
//               >
//                 {/* logo */}
//                 <div className="w-28 h-28 mx-auto mb-4">
//                   <Media resource={partner.logo} imgClassName="object-contain h-full w-full" />
//                 </div>

//                 {/* name */}
//                 <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>

//                 {/* description */}
//                 {partner.description && (
//                   <p className="text-gray-600 max-w-lg mx-auto">{partner.description}</p>
//                 )}
//               </div>
//             )

//             return isExternal ? (
//               <a key={partner.id ?? idx} href={href} target="_blank" rel="noopener noreferrer">
//                 {Card}
//               </a>
//             ) : (
//               <Link key={partner.id ?? idx} href={href}>
//                 {Card}
//               </Link>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React, { useRef, useEffect } from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import type { PartnersInter } from '@/payload-types'

export const Partners: React.FC<PartnersInter> = ({ title, partners }) => {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller || !partners?.length) return

    // Clone the partners for seamless infinite scroll
    const scrollContent = scroller.querySelector('.scroll-content')
    if (!scrollContent) return

    // Calculate scroll speed based on content width
    const scrollWidth = scrollContent.scrollWidth
    const duration = scrollWidth / 30 // Adjust speed by changing divisor

    // Set CSS custom property for animation duration
    scroller.style.setProperty('--scroll-duration', `${duration}s`)

    // Pause on hover
    const handleMouseEnter = () => {
      scroller.style.animationPlayState = 'paused'
    }

    const handleMouseLeave = () => {
      scroller.style.animationPlayState = 'running'
    }

    scroller.addEventListener('mouseenter', handleMouseEnter)
    scroller.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      scroller.removeEventListener('mouseenter', handleMouseEnter)
      scroller.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [partners])

  // Get the link URL (internal or external)
  const resolveLink = (partner: (typeof partners)[number]) => {
    const link = partner.link
    if (!link) return '#'

    if (link.type === 'custom') return link.url || '#'
    if (typeof link.reference?.value === 'object' && 'slug' in link.reference.value) {
      return `/${link.reference.value.slug}`
    }

    return '#'
  }

  const PartnerLogo = ({ partner, idx }: { partner: (typeof partners)[number]; idx: number }) => (
    <button
      onClick={() => cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })}
      className="flex-shrink-0 focus:outline-none mx-3"
      aria-label={`Voir ${partner.name}`}
    >
      <div className="w-20 h-20 rounded-full border overflow-hidden grid place-items-center bg-gray-100 hover:scale-105 transition-transform">
        <Media resource={partner.logo} imgClassName="object-contain h-full w-full" />
      </div>
    </button>
  )

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}

        {/* ───── TOP LOGO SCROLLER ───── */}
        <div className="relative overflow-hidden mb-10">
          <div
            ref={scrollerRef}
            className="flex animate-scroll"
            style={
              {
                '--scroll-duration': '20s',
                animation: 'scroll var(--scroll-duration) linear infinite',
              } as React.CSSProperties
            }
          >
            <div className="scroll-content flex shrink-0">
              {partners?.map((partner, idx) => (
                <PartnerLogo key={`original-${partner.id ?? idx}`} partner={partner} idx={idx} />
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="scroll-content flex shrink-0">
              {partners?.map((partner, idx) => (
                <PartnerLogo key={`duplicate-${partner.id ?? idx}`} partner={partner} idx={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* ───── VERTICAL CARD LIST ───── */}
        <div className="flex flex-col gap-12">
          {partners?.map((partner, idx) => {
            const href = resolveLink(partner)
            const isExternal = partner.link?.newTab

            const Card = (
              <div
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el
                }}
                className="text-center p-8 border rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* logo */}
                <div className="w-28 h-28 mx-auto mb-4">
                  <Media resource={partner.logo} imgClassName="object-contain h-full w-full" />
                </div>

                {/* name */}
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>

                {/* description */}
                {partner.description && (
                  <p className="text-gray-600 max-w-lg mx-auto">{partner.description}</p>
                )}
              </div>
            )

            return isExternal ? (
              <a key={partner.id ?? idx} href={href} target="_blank" rel="noopener noreferrer">
                {Card}
              </a>
            ) : (
              <Link key={partner.id ?? idx} href={href}>
                {Card}
              </Link>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
