// import { HeaderClient } from './Component.client'
// import { getCachedGlobal } from '@/utilities/getGlobals'
// import React from 'react'

// import type { Header } from '@/payload-types'

// export async function Header() {
//   const headerData: Header = await getCachedGlobal('header', 1)()

//   return <HeaderClient data={headerData} />
// }

// import { HeaderClient } from './Component.client'
// import { getCachedGlobal } from '@/utilities/getGlobals'
// import React from 'react'

// import type { Header } from '@/payload-types'

// export async function Header({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
//   const headerData: Header = await getCachedGlobal('header', 1)()

//   return <HeaderClient data={headerData} lang={lang} />
// }

// import { HeaderClient } from './Component.client'
// import { getCachedGlobal } from '@/utilities/getGlobals'
// import React from 'react'

// import type { Header } from '@/payload-types'

// export async function Header({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
//   const headerData: Header = await getCachedGlobal('header', 1)()

//   return <HeaderClient data={headerData} lang={lang} />
// }

import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
  const headerData = (await getCachedGlobal('header', 1)(lang)) as Header

  return <HeaderClient data={headerData} lang={lang} />
}
