'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function BackButton({ lang }: { lang: 'en' | 'fr' | 'ar' }) {
  const router = useRouter()

  const labels: Record<typeof lang, string> = {
    fr: 'Retour',
    en: 'Back',
    ar: 'رجوع',
  }

  const ArrowIcon = lang === 'ar' ? ArrowRight : ArrowLeft

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 text-[#0C2E53] hover:text-[#D78B22] hover:bg-[#D78B22]/10 transition-colors duration-300 rounded-xl px-4 py-2 text-sm font-medium shadow-sm ${
        lang === 'ar' ? 'flex-row-reverse' : ''
      }`}
    >
      <ArrowIcon className="w-4 h-4" />
      {labels[lang]}
    </Button>
  )
}
