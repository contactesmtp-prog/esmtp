// 'use client'

// import React, { useState } from 'react'
// import type { Header } from '@/payload-types'
// import { CMSLink } from '@/components/Link'
// import { ChevronDown, ChevronRight } from 'lucide-react'

// interface HeaderNavProps {
//   data: Header
//   isMobile?: boolean
// }

// export const HeaderNav: React.FC<HeaderNavProps> = ({ data, isMobile = false }) => {
//   const navItems = data?.navItems || []
//   const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
//   const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<number>>(new Set())

//   const handleMouseEnter = (index: number) => {
//     if (!isMobile) {
//       setActiveDropdown(index)
//     }
//   }

//   const handleMouseLeave = () => {
//     if (!isMobile) {
//       setActiveDropdown(null)
//     }
//   }

//   const toggleMobileDropdown = (index: number) => {
//     const newExpanded = new Set(mobileExpandedItems)
//     if (newExpanded.has(index)) {
//       newExpanded.delete(index)
//     } else {
//       newExpanded.add(index)
//     }
//     setMobileExpandedItems(newExpanded)
//   }

//   if (isMobile) {
//     return (
//       <nav className="px-6">
//         <div className="space-y-2">
//           {navItems.map((item, i) => {
//             if (item.isGroup) {
//               const isExpanded = mobileExpandedItems.has(i)
//               return (
//                 <div key={i} className="space-y-2">
//                   <button
//                     onClick={() => toggleMobileDropdown(i)}
//                     className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
//                   >
//                     <span className="font-medium">{item.label || 'Menu'}</span>
//                     <ChevronRight
//                       className={`w-4 h-4 transition-transform duration-200 ${
//                         isExpanded ? 'rotate-90' : ''
//                       }`}
//                     />
//                   </button>

//                   {/* Mobile Dropdown Items */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-out ${
//                       isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                     }`}
//                   >
//                     <div className="pl-4 space-y-1">
//                       {(item.items || []).map((child, j) => (
//                         <div key={j}>
//                           {child.link && (
//                             <CMSLink
//                               {...child.link}
//                               appearance="link"
//                               className="flex items-center px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm relative group/item"
//                             >
//                               <div className="absolute left-0 top-0 w-1 h-full bg-[#D78B22] transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-center rounded-r"></div>
//                               {/* <span className="relative z-10 ml-2">{child.link.label}</span> */}
//                             </CMSLink>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )
//             }

//             return (
//               <CMSLink
//                 key={i}
//                 {...item.link}
//                 appearance="link"
//                 className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium relative group"
//               >
//                 <div className="absolute left-0 top-0 w-1 h-full bg-[#D78B22] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-r"></div>
//                 {/* <span className="relative z-10 ml-2">{item.link?.label}</span> */}
//               </CMSLink>
//             )
//           })}
//         </div>
//       </nav>
//     )
//   }

//   // Desktop Navigation
//   return (
//     <nav className="flex items-center space-x-8">
//       {navItems.map((item, i) => {
//         if (item.isGroup) {
//           return (
//             <div
//               key={i}
//               className="relative group"
//               onMouseEnter={() => handleMouseEnter(i)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button className="group/button inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 relative">
//                 <span className="relative">
//                   {item.label || 'Menu'}
//                   {/* Underline effect */}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D78B22] transition-all duration-300 group-hover/button:w-full"></span>
//                 </span>
//                 <ChevronDown
//                   className={`w-4 h-4 transition-transform duration-300 ${
//                     activeDropdown === i ? 'rotate-180' : ''
//                   }`}
//                 />
//               </button>

//               {/* Desktop Dropdown Menu */}
//               <div
//                 className={`absolute left-0 top-full mt-2 transition-all duration-300 ease-out ${
//                   activeDropdown === i
//                     ? 'opacity-100 visible transform translate-y-0'
//                     : 'opacity-0 invisible transform -translate-y-2'
//                 }`}
//               >
//                 <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-[#D78B22]/20 rounded-xl min-w-[220px] overflow-hidden">
//                   {/* Dropdown header */}
//                   <div className="bg-gradient-to-r from-[#0C2E53] to-[#1a4470] px-4 py-3">
//                     <h3 className="text-white font-semibold text-sm">{item.label}</h3>
//                   </div>

//                   <ul className="py-2">
//                     {(item.items || []).map((child, j) => (
//                       <li key={j}>
//                         {child.link && (
//                           <CMSLink
//                             {...child.link}
//                             appearance="link"
//                             className="group/item flex items-center px-4 py-3 text-[#0C2E53] hover:bg-[#D78B22]/10 hover:text-[#D78B22] transition-all duration-300 relative overflow-hidden"
//                           >
//                             {/* Hover effect */}
//                             <div className="absolute left-0 top-0 w-1 h-full bg-[#D78B22] transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top"></div>

//                             {/* Arrow icon */}
//                             <svg
//                               className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all duration-300"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 5l7 7-7 7"
//                               />
//                             </svg>
//                           </CMSLink>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )
//         }

//         return (
//           <CMSLink
//             key={i}
//             {...item.link}
//             appearance="link"
//             className="group relative text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
//           >
//             <span className="relative">
//               {/* Underline effect */}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D78B22] transition-all duration-300 group-hover:w-full"></span>
//             </span>
//           </CMSLink>
//         )
//       })}
//     </nav>
//   )
// }

'use client'

import React, { useState } from 'react'
import type { Header } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface HeaderNavProps {
  data: Header
  isMobile?: boolean
  lang: 'en' | 'fr' | 'ar'
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, isMobile = false, lang }) => {
  const navItems = data?.navItems || []
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<number>>(new Set())

  const handleMouseEnter = (index: number) => {
    if (!isMobile) setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    if (!isMobile) setActiveDropdown(null)
  }

  const toggleMobileDropdown = (index: number) => {
    const newExpanded = new Set(mobileExpandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setMobileExpandedItems(newExpanded)
  }
  // RTL/LTR helpers
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const chevronRightClasses = lang === 'ar' ? 'rotate-180' : ''

  if (isMobile) {
    return (
      <nav className="px-6" dir={dir}>
        <div className="space-y-2">
          {navItems.map((item, i) => {
            if (item.isGroup) {
              const isExpanded = mobileExpandedItems.has(i)
              return (
                <div key={i} className="space-y-2">
                  <button
                    onClick={() => toggleMobileDropdown(i)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                  >
                    <span className="font-medium">{item.label || 'Menu'}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${chevronRightClasses} ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 space-y-1">
                      {(item.items || []).map((child, j) => (
                        <div key={j}>
                          {child.link && (
                            <CMSLink
                              lang={lang}
                              {...child.link}
                              appearance="link"
                              className="flex items-center px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm relative group/item"
                            >
                              <div
                                className={`absolute ${
                                  lang === 'ar' ? 'right-0' : 'left-0'
                                } top-0 w-1 h-full bg-[#D78B22] transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-200 origin-center rounded-r`}
                              ></div>
                            </CMSLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <CMSLink
                lang={lang}
                key={i}
                {...item.link}
                appearance="link"
                className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium relative group"
              >
                <div
                  className={`absolute ${lang === 'ar' ? 'right-0' : 'left-0'} top-0 w-1 h-full bg-[#D78B22] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center rounded-r`}
                ></div>
              </CMSLink>
            )
          })}
        </div>
      </nav>
    )
  }

  // Desktop Navigation
  return (
    <nav className="flex items-center space-x-8" dir={dir}>
      {navItems.map((item, i) => {
        if (item.isGroup) {
          return (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="group/button inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10 relative">
                <span className="relative">
                  {item.label || 'Menu'}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D78B22] transition-all duration-300 group-hover/button:w-full"></span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === i ? 'rotate-180' : ''
                  } ${lang === 'ar' ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute ${lang === 'ar' ? 'right-0' : 'left-0'} top-full mt-2 transition-all duration-300 ease-out ${
                  activeDropdown === i
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md shadow-2xl border border-[#D78B22]/20 rounded-xl min-w-[220px] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0C2E53] to-[#1a4470] px-4 py-3">
                    <h3 className="text-white font-semibold text-sm">{item.label}</h3>
                  </div>

                  <ul className="py-2">
                    {(item.items || []).map((child, j) => (
                      <li key={j}>
                        {child.link && (
                          <CMSLink
                            lang={lang}
                            {...child.link}
                            appearance="link"
                            className="group/item flex items-center px-4 py-3 text-[#0C2E53] hover:bg-[#D78B22]/10 hover:text-[#D78B22] transition-all duration-300 relative overflow-hidden"
                          >
                            <div
                              className={`absolute ${
                                lang === 'ar' ? 'right-0' : 'left-0'
                              } top-0 w-1 h-full bg-[#D78B22] transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top`}
                            ></div>

                            <svg
                              className={`w-4 h-4 ${
                                lang === 'ar' ? 'mr-auto rotate-180' : 'ml-auto'
                              } opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all duration-300`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </CMSLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        }

        return (
          <CMSLink
            lang={lang}
            key={i}
            {...item.link}
            appearance="link"
            className="group relative text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
          >
            <span className="relative">
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D78B22] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </CMSLink>
        )
      })}
    </nav>
  )
}
