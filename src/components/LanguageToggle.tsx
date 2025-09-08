'use client'

import { usePathname, useRouter } from 'next/navigation'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
]

export default function LanguageSelect() {
  const pathname = usePathname()
  const router = useRouter()
  //   console.log('the pathname is ', pathname)
  //   console.log('the router is ', router)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    const segments = pathname.split('/')
    segments[1] = lang // replace lang segment
    router.push(segments.join('/'))
  }

  // detect current lang from URL
  const currentLang = pathname.split('/')[1] || 'en'

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      className="rounded-md border border-gray-300 bg-white pr-8 pl-3 py-1 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 appearance-none relative"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  )
}
