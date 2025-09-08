// 'use client'

// import { useState } from 'react'
// import { useRouter, usePathname } from 'next/navigation'

// type Lang = 'en' | 'fr' | 'ar'

// export default function SearchBox({ locale }: { locale: Lang }) {
//   const [query, setQuery] = useState('')
//   const [results, setResults] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)

//   const search = async (q: string) => {
//     if (!q.trim()) {
//       setResults([])
//       return
//     }
//     setLoading(true)
//     const res = await fetch(`/api/GlobSearch?q=${encodeURIComponent(q)}&locale=${locale}`)
//     const data = await res.json()
//     setResults(data)
//     setLoading(false)
//   }

//   return (
//     <div className="relative w-full max-w-md">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {
//           const value = e.target.value
//           setQuery(value)
//           search(value)
//         }}
//         placeholder={locale === 'fr' ? 'Rechercher...' : locale === 'ar' ? 'بحث...' : 'Search...'}
//         className="w-full border p-2 rounded"
//       />

//       {loading && <div className="absolute right-3 top-2">⏳</div>}

//       {results.length > 0 && (
//         <ul className="absolute bg-white border mt-1 w-full rounded shadow-md z-50 max-h-60 overflow-auto">
//           {results.map((item) => (
//             <li key={item.id}>
//               <a href={item.url} className="block px-3 py-2 hover:bg-gray-100">
//                 {item.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Search } from 'lucide-react'

type Lang = 'en' | 'fr' | 'ar'

export default function SearchBox({ locale }: { locale: Lang }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const search = async (q: string) => {
    if (!q.trim()) {
      setResults([])
      return
    }
    setLoading(true)
    const res = await fetch(`/api/GlobSearch?q=${encodeURIComponent(q)}&locale=${locale}`)
    const data = await res.json()
    setResults(data)
    setLoading(false)
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            const value = e.target.value
            setQuery(value)
            search(value)
          }}
          placeholder={locale === 'fr' ? 'Rechercher...' : locale === 'ar' ? 'بحث...' : 'Search...'}
          className="w-full bg-black/40 text-white placeholder-gray-300 border border-white rounded-2xl px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-white shadow-lg backdrop-blur-md"
        />
        <Search className="absolute left-3 top-2.5 text-gray-300" size={18} />
        {loading && <div className="absolute right-3 top-2.5 animate-spin">⏳</div>}
      </div>

      {/* Search results */}
      {results.length > 0 && (
        <ul className="absolute mt-2 w-full rounded-xl border border-white bg-black/80 text-white shadow-2xl backdrop-blur-md z-50 max-h-60 overflow-auto">
          {results.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="block px-4 py-2 hover:bg-white hover:text-black transition rounded-lg"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
