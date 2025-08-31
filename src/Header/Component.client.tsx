// 'use client'

// import type { Header } from '@/payload-types'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import { Logo } from '@/components/Logo/Logo'
// import { HeaderNav } from './Nav'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import { Menu, X, Search } from 'lucide-react'
// import { SearchAutocomplete } from '@/app/[lang]/(frontend)/search/SearchAutocomplete'

// interface HeaderClientProps {
//   data: Header
// }

// export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
//   const [theme, setTheme] = useState<string | null>(null)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const { headerTheme, setHeaderTheme } = useHeaderTheme()
//   const pathname = usePathname()

//   useEffect(() => {
//     setHeaderTheme(null)
//   }, [pathname, setHeaderTheme])

//   useEffect(() => {
//     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
//   }, [headerTheme, theme])

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     setIsMobileMenuOpen(false)
//   }, [pathname])

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }

//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [isMobileMenuOpen])

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
//           isScrolled
//             ? 'bg-[#A9A9A9]/95 backdrop-blur-md shadow-lg border-b border-[#D78B22]/20'
//             : 'bg-[#A9A9A9]/90 backdrop-blur-sm border-b border-white/10'
//         }`}
//         {...(theme ? { 'data-theme': theme } : {})}
//       >
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D78B22] via-[#f4a335] to-[#D78B22]"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             <div className="flex-shrink-0">
//               <Link
//                 href="/"
//                 className="group flex items-center transition-transform duration-300 hover:scale-105"
//               >
//                 <div className="relative">
//                   <Logo
//                     loading="eager"
//                     priority="high"
//                     className="h-16 lg:h-20 w-auto transition-all duration-300 group-hover:brightness-110"
//                   />
//                   <div className="absolute inset-0 bg-[#D78B22] rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
//                 </div>
//               </Link>
//             </div>

//             <div className="hidden lg:flex flex-1 justify-center">
//               <HeaderNav data={data} />
//             </div>

//             <div className="hidden lg:block">
//               <SearchAutocomplete />
//             </div>

//             <div className="hidden lg:flex items-center space-x-4">{/* CTA */}</div>

//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="group relative p-2 text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg"
//                 aria-label="Toggle mobile menu"
//               >
//                 <div className="relative w-6 h-6">
//                   <Menu
//                     className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
//                       isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
//                     }`}
//                   />
//                   <X
//                     className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
//                       isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
//                     }`}
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div
//           className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D78B22]/30 to-transparent transition-opacity duration-300 ${
//             isScrolled ? 'opacity-100' : 'opacity-0'
//           }`}
//         ></div>
//       </header>

//       <div
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out ${
//           isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//       >
//         <div
//           className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         <div
//           className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#A9A9A9] shadow-2xl transform transition-transform duration-300 ease-out ${
//             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//           <div className="flex items-center justify-between p-6 border-b border-white/10">
//             <div className="flex items-center">
//               <Logo className="h-8 w-auto" />
//             </div>
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="p-2 text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="flex flex-col h-full">
//             <div className="flex-1 overflow-y-auto py-6">
//               <HeaderNav data={data} isMobile={true} />
//             </div>

//             <div className="p-6 border-t border-white/10 space-y-4">
//               {/* Optional footer content */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

'use client'

import type { Header } from '@/payload-types'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Menu, X } from 'lucide-react'
import { SearchAutocomplete } from '@/app/[lang]/(frontend)/search/SearchAutocomplete'

interface HeaderClientProps {
  data: Header
  lang: 'en' | 'fr' | 'ar'
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, lang }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme, theme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        dir={lang === 'ar' ? 'rtl' : 'ltr'} // 👈 RTL for Arabic
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#102f52]/95 backdrop-blur-md shadow-lg border-b border-[#D78B22]/20'
            : 'bg-[#102f52]/90 backdrop-blur-sm border-b border-white/10'
        }`}
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D78B22] via-[#f4a335] to-[#D78B22]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href={`/${lang}`} // 👈 keep lang in URL
                className="group flex items-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Logo
                    loading="eager"
                    priority="high"
                    className="h-16 lg:h-20 w-auto transition-all duration-300 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-[#D78B22] rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex flex-1 justify-center">
              <HeaderNav data={data} lang={lang} />
            </div>

            {/* Desktop search */}
            <div className="hidden lg:block">
              <SearchAutocomplete />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group relative p-2 text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          dir={lang === 'ar' ? 'rtl' : 'ltr'} // 👈 RTL for Arabic
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#102f52] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Logo className="h-8 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6">
              <HeaderNav data={data} lang={lang} isMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
