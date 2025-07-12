// // 'use client'
// // import { useHeaderTheme } from '@/providers/HeaderTheme'
// // import Link from 'next/link'
// // import { usePathname } from 'next/navigation'
// // import React, { useEffect, useState } from 'react'

// // import type { Header } from '@/payload-types'

// // import { Logo } from '@/components/Logo/Logo'
// // import { HeaderNav } from './Nav'

// // interface HeaderClientProps {
// //   data: Header
// // }

// // export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
// //   /* Storing the value in a useState to avoid hydration errors */
// //   const [theme, setTheme] = useState<string | null>(null)
// //   const { headerTheme, setHeaderTheme } = useHeaderTheme()
// //   const pathname = usePathname()

// //   useEffect(() => {
// //     setHeaderTheme(null)
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [pathname])

// //   useEffect(() => {
// //     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [headerTheme])

// //   return (
// //     <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
// //       <div className="py-8 flex justify-between">
// //         <Link href="/">
// //           <Logo loading="eager" priority="high" className="invert dark:invert-0" />
// //         </Link>
// //         <HeaderNav data={data} />
// //       </div>
// //     </header>
// //   )
// // }

// // 'use client'

// // import { useHeaderTheme } from '@/providers/HeaderTheme'
// // import Link from 'next/link'
// // import { usePathname } from 'next/navigation'
// // import React, { useEffect, useState } from 'react'

// // import type { Header } from '@/payload-types'

// // import { Logo } from '@/components/Logo/Logo'
// // import { HeaderNav } from './Nav'

// // interface HeaderClientProps {
// //   data: Header
// // }

// // export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
// //   const [theme, setTheme] = useState<string | null>(null)
// //   const { headerTheme, setHeaderTheme } = useHeaderTheme()
// //   const pathname = usePathname()

// //   useEffect(() => {
// //     setHeaderTheme(null)
// //   }, [pathname])

// //   useEffect(() => {
// //     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
// //   }, [headerTheme])

// //   return (
// //     <header
// //       className="w-full relative z-50 border-b border-gray-200 bg-white dark:bg-black"
// //       {...(theme ? { 'data-theme': theme } : {})}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
// //         {/* Logo on the left */}
// //         <Link href="/" className="flex items-center gap-2">
// //           <Logo loading="eager" priority="high" className="h-10 w-auto" />
// //         </Link>

// //         {/* Nav items on the right */}
// //         <HeaderNav data={data} />
// //       </div>
// //     </header>
// //   )
// // }

// //This Part where the nav Item inside the Hero
// // 'use client'

// // import { useHeaderTheme } from '@/providers/HeaderTheme'
// // import Link from 'next/link'
// // import { usePathname } from 'next/navigation'
// // import React, { useEffect, useState } from 'react'

// // import type { Header } from '@/payload-types'

// // import { Logo } from '@/components/Logo/Logo'
// // import { HeaderNav } from './Nav'

// // interface HeaderClientProps {
// //   data: Header
// // }

// // export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
// //   const [theme, setTheme] = useState<string | null>(null)
// //   const { headerTheme, setHeaderTheme } = useHeaderTheme()
// //   const pathname = usePathname()

// //   useEffect(() => {
// //     setHeaderTheme(null)
// //   }, [pathname])

// //   useEffect(() => {
// //     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
// //   }, [headerTheme])

// //   return (
// //     <header
// //       className="fixed top-0 left-0 w-full z-50 bg-transparent text-white"
// //       {...(theme ? { 'data-theme': theme } : {})}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-12">
// //         {/* Logo */}
// //         <Link href="/" className="flex items-center">
// //           <Logo loading="eager" priority="high" className="h-10 w-auto" />
// //         </Link>

// //         {/* Nav next to logo */}
// //         <HeaderNav data={data} />
// //       </div>
// //     </header>
// //   )
// // }

// 'use client'

// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

// import type { Header } from '@/payload-types'

// import { Logo } from '@/components/Logo/Logo'
// import { HeaderNav } from './Nav'

// interface HeaderClientProps {
//   data: Header
// }

// export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
//   const [theme, setTheme] = useState<string | null>(null)
//   const { headerTheme, setHeaderTheme } = useHeaderTheme()
//   const pathname = usePathname()

//   useEffect(() => {
//     setHeaderTheme(null)
//   }, [pathname])

//   useEffect(() => {
//     if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
//   }, [headerTheme])

//   return (
//     <header
//       className="w-full z-50 border-b border-gray-200 bg-white dark:bg-black"
//       {...(theme ? { 'data-theme': theme } : {})}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-6">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Logo loading="eager" priority="high" className="h-10 w-auto" />
//         </Link>

//         {/* Nav next to logo */}
//         <HeaderNav data={data} />
//       </div>
//     </header>
//   )
// }

'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  // useEffect(() => {
  //   setHeaderTheme(null)
  // }, [pathname])
  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme, theme])

  return (
    <header
      className="w-full z-50 border-b border-gray-200 bg-white dark:bg-black"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
        {/* Group Logo and Nav with spacing */}
        <div className="flex items-center gap-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo loading="eager" priority="high" className="h-20 w-auto" />
          </Link>

          {/* Nav next to logo */}
          <HeaderNav data={data} />
        </div>
      </div>
    </header>
  )
}
