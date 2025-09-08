import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
  const headerData = (await getCachedGlobal('header', 1)(lang)) as Header

  return <HeaderClient data={headerData} lang={lang} />
}
