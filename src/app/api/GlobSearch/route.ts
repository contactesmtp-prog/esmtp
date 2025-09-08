import { NextResponse } from 'next/server'
import { searchPages } from '@/app/[lang]/(frontend)/searchGlo/searchPages'
export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q') || ''
  const locale = (url.searchParams.get('locale') as 'en' | 'fr' | 'ar') || 'en'

  if (!q) return NextResponse.json([])

  const results = await searchPages(q, locale)
  return NextResponse.json(results)
}
