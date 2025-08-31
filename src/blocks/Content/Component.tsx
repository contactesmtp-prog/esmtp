// import { cn } from '@/utilities/ui'
// import React from 'react'
// import RichText from '@/components/RichText'

// import type { ContentBlock as ContentBlockProps } from '@/payload-types'

// import { CMSLink } from '../../components/Link'

// export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
//   const { columns } = props

//   const colsSpanClasses = {
//     full: '12',
//     half: '6',
//     oneThird: '4',
//     twoThirds: '8',
//   }

//   return (
//     <section className="relative py-24 px-6 lg:px-12 xl:px-24">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/30 -z-10"></div>

//       {/* Main container with constrained width */}
//       <div className="max-w-7xl mx-auto">
//         {/* Content grid */}
//         <div className="grid grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
//           {columns &&
//             columns.length > 0 &&
//             columns.map((col, index) => {
//               const { enableLink, link, richText, size } = col

//               return (
//                 <div
//                   className={cn(
//                     `col-span-4 lg:col-span-${colsSpanClasses[size!]}`,
//                     'group relative',
//                     {
//                       'md:col-span-2': size !== 'full',
//                     },
//                   )}
//                   key={index}
//                 >
//                   {/* Content wrapper with enhanced styling */}
//                   <div className="relative h-full">
//                     {/* Decorative element */}
//                     <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//                     {/* Content container */}
//                     <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200/50 hover:shadow-lg hover:border-slate-300/50 transition-all duration-300 h-full">
//                       {richText && (
//                         <RichText
//                           data={richText}
//                           enableGutter={false}
//                           className="prose prose-slate max-w-none
//                             [&>h1]:text-4xl [&>h1]:lg:text-5xl [&>h1]:font-bold [&>h1]:leading-tight [&>h1]:text-slate-900 [&>h1]:mb-6
//                             [&>h2]:text-3xl [&>h2]:lg:text-4xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:text-slate-800 [&>h2]:mb-5
//                             [&>h3]:text-2xl [&>h3]:lg:text-3xl [&>h3]:font-semibold [&>h3]:leading-snug [&>h3]:text-slate-800 [&>h3]:mb-4
//                             [&>h4]:text-xl [&>h4]:lg:text-2xl [&>h4]:font-semibold [&>h4]:text-slate-700 [&>h4]:mb-3
//                             [&>h5]:text-lg [&>h5]:font-medium [&>h5]:text-slate-700 [&>h5]:mb-3
//                             [&>h6]:text-base [&>h6]:font-medium [&>h6]:text-slate-600 [&>h6]:mb-2
//                             [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>p:last-child]:mb-0
//                             [&>ul]:text-lg [&>ul]:text-slate-600 [&>ul]:mb-6
//                             [&>ol]:text-lg [&>ol]:text-slate-600 [&>ol]:mb-6
//                             [&>li]:mb-2
//                             [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-slate-700 [&>blockquote]:bg-slate-50 [&>blockquote]:py-4 [&>blockquote]:rounded-r-lg
//                             [&>code]:bg-slate-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>code]:text-slate-800
//                             [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto
//                             [&_strong]:font-semibold [&_strong]:text-slate-800
//                             [&_em]:italic [&_em]:text-slate-700
//                             [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2
//                           "
//                         />
//                       )}

//                       {/* {enableLink && (
//                         <div className="mt-8 pt-6 border-t border-slate-200/50">
//                           <CMSLink
//                             {...link}
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                           />
//                         </div>
//                       )} */}
//                       {enableLink && (
//                         <div className="mt-8 pt-6 border-t border-slate-200/50">
//                           <CMSLink
//                             {...link}
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] text-white font-medium rounded-xl hover:from-[#c47d1f] hover:to-[#0a2645] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//         </div>
//       </div>

//       {/* Bottom gradient decoration */}
//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
//     </section>
//   )
// }

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { CMSLink } from '../../components/Link'

// Extend props to also include lang
type Props = ContentBlockProps & {
  lang: 'en' | 'fr' | 'ar'
}

export const ContentBlock: React.FC<Props> = (props) => {
  const { columns, lang } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <section className="relative py-24 px-6 lg:px-12 xl:px-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/30 -z-10"></div>

      {/* Main container with constrained width */}
      <div className="max-w-7xl mx-auto">
        {/* Debug / usage of lang */}

        {/* Content grid */}
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { enableLink, link, richText, size } = col

              return (
                <div
                  className={cn(
                    `col-span-4 lg:col-span-${colsSpanClasses[size!]}`,
                    'group relative',
                    {
                      'md:col-span-2': size !== 'full',
                    },
                  )}
                  key={index}
                >
                  <div className="relative h-full">
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200/50 hover:shadow-lg hover:border-slate-300/50 transition-all duration-300 h-full">
                      {richText && (
                        <RichText
                          data={richText}
                          enableGutter={false}
                          className="prose prose-slate max-w-none ..."
                        />
                      )}

                      {enableLink && (
                        <div className="mt-8 pt-6 border-t border-slate-200/50">
                          <CMSLink
                            lang={lang}
                            {...link}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] text-white font-medium rounded-xl hover:from-[#c47d1f] hover:to-[#0a2645] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
    </section>
  )
}
