// 'use client'

// import React, { useRef, useEffect } from 'react'
// import { Media } from '@/components/Media'
// import Link from 'next/link'
// import { Sparkles, ExternalLink, Users, Award, Star } from 'lucide-react'
// import type { PartnersInter } from '@/payload-types'

// export const Partners: React.FC<PartnersInter> = ({ title, partners }) => {
//   const cardRefs = useRef<HTMLDivElement[]>([])
//   const scrollerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const scroller = scrollerRef.current
//     if (!scroller || !partners?.length) return

//     // Clone the partners for seamless infinite scroll
//     const scrollContent = scroller.querySelector('.scroll-content')
//     if (!scrollContent) return

//     // Calculate scroll speed based on content width
//     const scrollWidth = scrollContent.scrollWidth
//     const duration = scrollWidth / 40 // Slower, more elegant speed

//     // Set CSS custom property for animation duration
//     scroller.style.setProperty('--scroll-duration', `${duration}s`)

//     // Pause on hover
//     const handleMouseEnter = () => {
//       scroller.style.animationPlayState = 'paused'
//     }

//     const handleMouseLeave = () => {
//       scroller.style.animationPlayState = 'running'
//     }

//     scroller.addEventListener('mouseenter', handleMouseEnter)
//     scroller.addEventListener('mouseleave', handleMouseLeave)

//     return () => {
//       scroller.removeEventListener('mouseenter', handleMouseEnter)
//       scroller.removeEventListener('mouseleave', handleMouseLeave)
//     }
//   }, [partners])

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

//   const PartnerLogo = ({ partner, idx }: { partner: (typeof partners)[number]; idx: number }) => {
//     const isEven = idx % 2 === 0

//     return (
//       <button
//         onClick={() => cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })}
//         className="group flex-shrink-0 focus:outline-none mx-4"
//         aria-label={`Voir ${partner.name}`}
//       >
//         <div className="relative">
//           {/* Outer glow ring */}
//           <div
//             className={`
//             absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500
//             ${isEven ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'} blur-xl scale-150
//           `}
//           ></div>

//           {/* Main logo container */}
//           <div
//             className={`
//             relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden
//             border-3 ${isEven ? 'border-[#0C2E53]/30' : 'border-[#D78B22]/30'}
//             bg-white shadow-xl group-hover:shadow-2xl
//             transform group-hover:scale-110 group-hover:-translate-y-2
//             transition-all duration-500 ease-out
//             ${isEven ? 'group-hover:border-[#0C2E53]' : 'group-hover:border-[#D78B22]'}
//           `}
//           >
//             <Media
//               resource={partner.logo}
//               imgClassName="object-contain h-full w-full p-3 group-hover:scale-110 transition-transform duration-500"
//             />

//             {/* Hover overlay */}
//             <div
//               className={`
//               absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
//               ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//             `}
//             ></div>
//           </div>

//           {/* Floating badge */}
//           <div
//             className={`
//             absolute -top-1 -right-1 w-6 h-6 rounded-full
//             ${isEven ? 'bg-[#D78B22]' : 'bg-[#0C2E53]'}
//             flex items-center justify-center shadow-lg
//             transform group-hover:scale-125 transition-transform duration-300
//           `}
//           >
//             <Star className="w-3 h-3 text-white" fill="currentColor" />
//           </div>
//         </div>
//       </button>
//     )
//   }

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: '1s' }}
//         ></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Enhanced Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Users className="w-4 h-4" />
//             Nos partenaires de confiance
//           </div>

//           {title && (
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
//               {title}
//             </h2>
//           )}

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Découvrez les entreprises et organisations qui nous font confiance pour leur formation
//             professionnelle
//           </p>
//         </div>

//         {/* Enhanced Logo Scroller */}
//         <div className="relative mb-16">
//           {/* Gradient fade edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

//           <div className="relative overflow-hidden py-8">
//             <div
//               ref={scrollerRef}
//               className="flex animate-scroll"
//               style={
//                 {
//                   '--scroll-duration': '25s',
//                   animation: 'scroll var(--scroll-duration) linear infinite',
//                 } as React.CSSProperties
//               }
//             >
//               <div className="scroll-content flex shrink-0">
//                 {partners?.map((partner, idx) => (
//                   <PartnerLogo key={`original-${partner.id ?? idx}`} partner={partner} idx={idx} />
//                 ))}
//               </div>
//               {/* Duplicate for seamless loop */}
//               <div className="scroll-content flex shrink-0">
//                 {partners?.map((partner, idx) => (
//                   <PartnerLogo key={`duplicate-${partner.id ?? idx}`} partner={partner} idx={idx} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Scroll indicator */}
//           <div className="flex justify-center mt-4">
//             <div className="flex items-center gap-2 text-sm text-gray-500">
//               <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
//               <span>Survolez pour mettre en pause</span>
//               <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Partner Cards */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {partners?.map((partner, idx) => {
//             const href = resolveLink(partner)
//             const isExternal = partner.link?.newTab
//             const isEven = idx % 2 === 0

//             const Card = (
//               <div
//                 ref={(el) => {
//                   if (el) cardRefs.current[idx] = el
//                 }}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//                 style={{
//                   animationDelay: `${idx * 100}ms`,
//                 }}
//               >
//                 {/* Top accent line */}
//                 <div
//                   className={`absolute top-0 left-0 right-0 h-1 ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
//                 ></div>

//                 {/* Premium badge for first few partners */}
//                 {/* {idx < 3 && (
//                   <div
//                     className={`
//                     absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg transform rotate-12
//                     ${idx === 0 ? 'bg-[#D78B22]' : isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                   `}
//                   >
//                     {idx === 0 ? 'Premium' : 'Partenaire'}
//                   </div>
//                 )} */}

//                 <div className="p-8 text-center">
//                   {/* Logo container */}
//                   <div className="relative mb-6">
//                     <div
//                       className={`
//                       w-32 h-32 mx-auto rounded-2xl overflow-hidden
//                       border-2 ${isEven ? 'border-[#0C2E53]/20' : 'border-[#D78B22]/20'}
//                       bg-gray-50 group-hover:bg-white
//                       shadow-lg group-hover:shadow-xl
//                       transform group-hover:scale-105 transition-all duration-500
//                       ${isEven ? 'group-hover:border-[#0C2E53]/40' : 'group-hover:border-[#D78B22]/40'}
//                     `}
//                     >
//                       <Media
//                         resource={partner.logo}
//                         imgClassName="object-contain h-full w-full p-4 group-hover:scale-110 transition-transform duration-500"
//                       />
//                     </div>

//                     {/* Floating icon */}
//                     <div
//                       className={`
//                       absolute -bottom-2 -right-2 w-8 h-8 rounded-full
//                       ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                       flex items-center justify-center shadow-lg
//                       transform group-hover:scale-125 transition-transform duration-300
//                     `}
//                     >
//                       <Award className="w-4 h-4 text-white" />
//                     </div>
//                   </div>

//                   {/* Partner name */}
//                   <h3
//                     className={`
//                     text-xl font-bold mb-4 transition-colors duration-300
//                     ${isEven ? 'text-[#0C2E53] group-hover:text-[#D78B22]' : 'text-[#D78B22] group-hover:text-[#0C2E53]'}
//                   `}
//                   >
//                     {partner.name}
//                   </h3>

//                   {/* Description */}
//                   {partner.description && (
//                     <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
//                       {partner.description}
//                     </p>
//                   )}

//                   {/* Link indicator */}
//                   {href !== '#' && (
//                     <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
//                       <ExternalLink className="w-4 h-4" />
//                       <span>Visiter le site</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Bottom decorative element */}
//                 <div
//                   className={`
//                   absolute bottom-0 left-0 right-0 h-2 transform scale-x-0 group-hover:scale-x-100
//                   transition-transform duration-500 origin-left
//                   ${isEven ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'}
//                 `}
//                 ></div>

//                 {/* Background glow effect */}
//                 <div
//                   className={`
//                   absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500
//                   ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                 `}
//                 ></div>
//               </div>
//             )

//             return isExternal ? (
//               <a
//                 key={partner.id ?? idx}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 {Card}
//               </a>
//             ) : (
//               <Link key={partner.id ?? idx} href={href} className="block">
//                 {Card}
//               </Link>
//             )
//           })}
//         </div>

//         {/* Bottom stats section */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-[#0C2E53] rounded-full"></div>
//               <span className="text-sm font-medium text-gray-700">
//                 {partners?.length || 0} partenaires
//               </span>
//             </div>
//             <div className="w-px h-6 bg-gray-300"></div>
//             <div className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-[#D78B22]" />
//               <span className="text-sm font-medium text-gray-700">Confiance mutuelle</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

import React, { useRef, useEffect } from 'react'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { Sparkles, ExternalLink, Users, Award, Star } from 'lucide-react'
import type { PartnersInter } from '@/payload-types'

type Props = PartnersInter & {
  lang: 'en' | 'fr' | 'ar'
}

export const Partners: React.FC<Props> = ({ title, partners, lang }) => {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Fixed text translations
  const fixedText = {
    header: {
      en: 'Our Trusted Partners',
      fr: 'Nos partenaires de confiance',
      ar: 'شركاؤنا الموثوقون',
    },
    description: {
      en: 'Discover the companies and organizations that trust us for their professional training.',
      fr: 'Découvrez les entreprises et organisations qui nous font confiance pour leur formation professionnelle',
      ar: 'اكتشف الشركات والمنظمات التي تثق بنا من أجل تدريبها المهني',
    },
    hoverPause: {
      en: 'Hover to pause',
      fr: 'Survolez pour mettre en pause',
      ar: 'مرر الماوس للإيقاف المؤقت',
    },
    visitSite: {
      en: 'Visit website',
      fr: 'Visiter le site',
      ar: 'زيارة الموقع',
    },
    partnersCount: {
      en: (count: number) => `${count} partners`,
      fr: (count: number) => `${count} partenaires`,
      ar: (count: number) => `${count} شركاء`,
    },
    mutualTrust: {
      en: 'Mutual trust',
      fr: 'Confiance mutuelle',
      ar: 'ثقة متبادلة',
    },
  }

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller || !partners?.length) return

    const scrollContent = scroller.querySelector('.scroll-content')
    if (!scrollContent) return

    const scrollWidth = scrollContent.scrollWidth
    const duration = scrollWidth / 40

    scroller.style.setProperty('--scroll-duration', `${duration}s`)

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

  const resolveLink = (partner: (typeof partners)[number]) => {
    const link = partner.link
    if (!link) return '#'
    if (link.type === 'custom') return link.url || '#'
    if (typeof link.reference?.value === 'object' && 'slug' in link.reference.value) {
      return `/${link.reference.value.slug}`
    }
    return '#'
  }

  const PartnerLogo = ({ partner, idx }: { partner: (typeof partners)[number]; idx: number }) => {
    const isEven = idx % 2 === 0
    return (
      <button
        onClick={() => cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })}
        className="group flex-shrink-0 focus:outline-none mx-4"
        aria-label={`${partner.name}`}
      >
        <div className="relative">
          <div
            className={`
              absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500
              ${isEven ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'} blur-xl scale-150
            `}
          ></div>

          <div
            className={`
              relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden 
              border-3 ${isEven ? 'border-[#0C2E53]/30' : 'border-[#D78B22]/30'}
              bg-white shadow-xl group-hover:shadow-2xl
              transform group-hover:scale-110 group-hover:-translate-y-2
              transition-all duration-500 ease-out
              ${isEven ? 'group-hover:border-[#0C2E53]' : 'group-hover:border-[#D78B22]'}
            `}
          >
            <Media
              resource={partner.logo}
              imgClassName="object-contain h-full w-full p-3 group-hover:scale-110 transition-transform duration-500"
            />
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
              `}
            ></div>
          </div>

          <div
            className={`
              absolute -top-1 -right-1 w-6 h-6 rounded-full 
              ${isEven ? 'bg-[#D78B22]' : 'bg-[#0C2E53]'}
              flex items-center justify-center shadow-lg
              transform group-hover:scale-125 transition-transform duration-300
            `}
          >
            <Star className="w-3 h-3 text-white" fill="currentColor" />
          </div>
        </div>
      </button>
    )
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {fixedText.header[lang]}
          </div>

          {title && (
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-6">
              {title}
            </h2>
          )}

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{fixedText.description[lang]}</p>
        </div>

        {/* Logo Scroller */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          <div className="relative overflow-hidden py-8">
            <div
              ref={scrollerRef}
              className="flex animate-scroll"
              style={
                {
                  '--scroll-duration': '25s',
                  animation: 'scroll var(--scroll-duration) linear infinite',
                } as React.CSSProperties
              }
            >
              <div className="scroll-content flex shrink-0">
                {partners?.map((partner, idx) => (
                  <PartnerLogo key={`original-${partner.id ?? idx}`} partner={partner} idx={idx} />
                ))}
              </div>
              <div className="scroll-content flex shrink-0">
                {partners?.map((partner, idx) => (
                  <PartnerLogo key={`duplicate-${partner.id ?? idx}`} partner={partner} idx={idx} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
              <span>{fixedText.hoverPause[lang]}</span>
              <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Partner Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners?.map((partner, idx) => {
            const href = resolveLink(partner)
            const isExternal = partner.link?.newTab
            const isEven = idx % 2 === 0

            const Card = (
              <div
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el
                }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
                ></div>

                <div className="p-8 text-center">
                  <div
                    className={`
                      relative mb-6 w-32 h-32 mx-auto rounded-2xl overflow-hidden 
                      border-2 ${isEven ? 'border-[#0C2E53]/20' : 'border-[#D78B22]/20'}
                      bg-gray-50 group-hover:bg-white
                      shadow-lg group-hover:shadow-xl
                      transform group-hover:scale-105 transition-all duration-500
                      ${isEven ? 'group-hover:border-[#0C2E53]/40' : 'group-hover:border-[#D78B22]/40'}
                    `}
                  >
                    <Media
                      resource={partner.logo}
                      imgClassName="object-contain h-full w-full p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3
                    className={`
                      text-xl font-bold mb-4 transition-colors duration-300
                      ${isEven ? 'text-[#0C2E53] group-hover:text-[#D78B22]' : 'text-[#D78B22] group-hover:text-[#0C2E53]'}
                    `}
                  >
                    {partner.name}
                  </h3>

                  {partner.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                      {partner.description}
                    </p>
                  )}

                  {href !== '#' && (
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <ExternalLink className="w-4 h-4" />
                      <span>{fixedText.visitSite[lang]}</span>
                    </div>
                  )}
                </div>
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

        {/* Bottom stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0C2E53] rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                {fixedText.partnersCount[lang](partners?.length || 0)}
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D78B22]" />
              <span className="text-sm font-medium text-gray-700">
                {fixedText.mutualTrust[lang]}
              </span>
            </div>
          </div>
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
