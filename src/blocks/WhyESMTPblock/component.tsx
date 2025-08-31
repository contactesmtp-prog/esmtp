// 'use client'

// import React from 'react'
// import type { TextImageGroupBlock as TextImageGroupBlockProps } from '@/payload-types'
// import { Media } from '@/components/Media'
// import { Sparkles } from 'lucide-react'

// /**
//  * Renders a row of 1–3 circular images with captions underneath.
//  */
// export const TextImageGroup: React.FC<TextImageGroupBlockProps> = (props) => {
//   if (!props) return null

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Optional Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Sparkles className="w-4 h-4" />
//             EMSTP
//           </div>
//         </div>

//         {/* Images Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
//           {props.items.map((item, i) => {
//             const { image, text } = item
//             const isEven = i % 2 === 0

//             return (
//               <div
//                 key={item.id || i}
//                 className="group relative flex flex-col items-center max-w-sm"
//                 style={{
//                   animationDelay: `${i * 200}ms`,
//                 }}
//               >
//                 {/* Image Container with Enhanced Styling */}
//                 <div className="relative mb-6">
//                   {/* Outer decorative ring */}
//                   <div
//                     className={`absolute inset-0 rounded-full border-4 ${isEven ? 'border-[#0C2E53]/20' : 'border-[#D78B22]/20'} group-hover:border-opacity-40 transition-all duration-500 transform group-hover:scale-110`}
//                   ></div>

//                   {/* Main image container */}
//                   <div className="relative">
//                     {image && typeof image !== 'number' && (
//                       <div className="relative overflow-hidden rounded-full">
//                         <Media
//                           resource={image}
//                           imgClassName={`
//                             rounded-full object-cover w-48 h-48 md:w-56 md:h-56
//                             border-4 ${isEven ? 'border-[#0C2E53]' : 'border-[#D78B22]'}
//                             shadow-2xl group-hover:shadow-3xl transition-all duration-500
//                             group-hover:scale-105
//                           `}
//                         />

//                         {/* Hover overlay */}
//                         <div
//                           className={`
//                           absolute inset-0 rounded-full opacity-0 group-hover:opacity-20
//                           transition-opacity duration-500
//                           ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
//                         `}
//                         ></div>
//                       </div>
//                     )}

//                     {/* Floating decorative elements */}
//                     <div
//                       className={`
//                       absolute -top-2 -right-2 w-6 h-6 rounded-full
//                       ${isEven ? 'bg-[#D78B22]' : 'bg-[#0C2E53]'}
//                       shadow-lg transform group-hover:scale-125 transition-transform duration-300
//                     `}
//                     ></div>

//                     <div
//                       className={`
//                       absolute -bottom-2 -left-2 w-4 h-4 rounded-full
//                       ${isEven ? 'bg-[#D78B22]/70' : 'bg-[#0C2E53]/70'}
//                       shadow-lg transform group-hover:scale-125 transition-transform duration-300 delay-100
//                     `}
//                     ></div>
//                   </div>

//                   {/* Animated background glow */}
//                   <div
//                     className={`
//                     absolute inset-0 rounded-full opacity-0 group-hover:opacity-30
//                     transition-opacity duration-500 blur-xl
//                     ${isEven ? 'bg-[#0C2E53]/30' : 'bg-[#D78B22]/30'}
//                     transform scale-150
//                   `}
//                   ></div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="text-center space-y-3">
//                   {/* Name/Title */}
//                   <h3
//                     className={`
//                     text-xl md:text-2xl font-bold transition-colors duration-300
//                     ${isEven ? 'text-[#0C2E53] group-hover:text-[#D78B22]' : 'text-[#D78B22] group-hover:text-[#0C2E53]'}
//                   `}
//                   >
//                     {text?.split('\n')[0] || text}
//                   </h3>

//                   {/* Description */}
//                   {text?.includes('\n') && (
//                     <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
//                       {text.split('\n').slice(1).join('\n')}
//                     </p>
//                   )}

//                   {/* Decorative line */}
//                   <div
//                     className={`
//                     w-16 h-1 mx-auto rounded-full transition-all duration-500
//                     ${isEven ? 'bg-[#0C2E53]/30 group-hover:bg-[#D78B22]' : 'bg-[#D78B22]/30 group-hover:bg-[#0C2E53]'}
//                     group-hover:w-24
//                   `}
//                   ></div>
//                 </div>

//                 {/* Background card effect */}
//                 <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2 scale-95 group-hover:scale-100"></div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Bottom decorative section */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
//             <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
//             <span>Des experts passionnés à votre service</span>
//             <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'
import type { TextImageGroupBlock as TextImageGroupBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { Sparkles } from 'lucide-react'

type Props = TextImageGroupBlockProps & {
  lang: 'en' | 'fr' | 'ar'
}

/**
 * Renders a row of 1–3 circular images with captions underneath.
 */
export const TextImageGroup: React.FC<Props> = (props) => {
  if (!props) return null

  const { items, lang } = props

  // Fixed text translations
  const fixedText = {
    badge: {
      en: 'EMSTP',
      fr: 'EMSTP',
      ar: 'EMSTP', // adjust if needed
    },
    bottom: {
      en: 'Passionate experts at your service',
      fr: 'Des experts passionnés à votre service',
      ar: 'خبراء شغوفون في خدمتك',
    },
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Optional Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {fixedText.badge[lang]}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {items.map((item, i) => {
            const { image, text } = item
            const isEven = i % 2 === 0

            return (
              <div
                key={item.id || i}
                className="group relative flex flex-col items-center max-w-sm"
                style={{
                  animationDelay: `${i * 200}ms`,
                }}
              >
                {/* Image */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 rounded-full border-4 ${
                      isEven ? 'border-[#0C2E53]/20' : 'border-[#D78B22]/20'
                    } group-hover:border-opacity-40 transition-all duration-500 transform group-hover:scale-110`}
                  ></div>

                  <div className="relative">
                    {image && typeof image !== 'number' && (
                      <div className="relative overflow-hidden rounded-full">
                        <Media
                          resource={image}
                          imgClassName={`
                            rounded-full object-cover w-48 h-48 md:w-56 md:h-56
                            border-4 ${isEven ? 'border-[#0C2E53]' : 'border-[#D78B22]'}
                            shadow-2xl group-hover:shadow-3xl transition-all duration-500
                            group-hover:scale-105
                          `}
                        />
                        <div
                          className={`
                          absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 
                          transition-opacity duration-500
                          ${isEven ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}
                        `}
                        ></div>
                      </div>
                    )}

                    {/* Decorative dots */}
                    <div
                      className={`
                      absolute -top-2 -right-2 w-6 h-6 rounded-full 
                      ${isEven ? 'bg-[#D78B22]' : 'bg-[#0C2E53]'}
                      shadow-lg transform group-hover:scale-125 transition-transform duration-300
                    `}
                    ></div>
                    <div
                      className={`
                      absolute -bottom-2 -left-2 w-4 h-4 rounded-full 
                      ${isEven ? 'bg-[#D78B22]/70' : 'bg-[#0C2E53]/70'}
                      shadow-lg transform group-hover:scale-125 transition-transform duration-300 delay-100
                    `}
                    ></div>
                  </div>

                  <div
                    className={`
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 
                    transition-opacity duration-500 blur-xl
                    ${isEven ? 'bg-[#0C2E53]/30' : 'bg-[#D78B22]/30'}
                    transform scale-150
                  `}
                  ></div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3">
                  <h3
                    className={`
                    text-xl md:text-2xl font-bold transition-colors duration-300
                    ${
                      isEven
                        ? 'text-[#0C2E53] group-hover:text-[#D78B22]'
                        : 'text-[#D78B22] group-hover:text-[#0C2E53]'
                    }
                  `}
                  >
                    {text?.split('\n')[0] || text}
                  </h3>

                  {text?.includes('\n') && (
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
                      {text.split('\n').slice(1).join('\n')}
                    </p>
                  )}

                  <div
                    className={`
                    w-16 h-1 mx-auto rounded-full transition-all duration-500
                    ${
                      isEven
                        ? 'bg-[#0C2E53]/30 group-hover:bg-[#D78B22]'
                        : 'bg-[#D78B22]/30 group-hover:bg-[#0C2E53]'
                    }
                    group-hover:w-24
                  `}
                  ></div>
                </div>

                <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2 scale-95 group-hover:scale-100"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
            <span>{fixedText.bottom[lang]}</span>
            <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
