import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import FooterServer from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './css/style.css'
import { getServerSideURL } from '@/utilities/getURL'

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{
    lang: 'en' | 'fr' | 'ar'
  }>
}
export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { isEnabled } = await draftMode()
  const { lang } = await params

  // Decide direction
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang={lang}
      dir={dir} // 👈 RTL for ar, LTR otherwise
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header lang={lang} />
          {children}
          <FooterServer lang={lang} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
