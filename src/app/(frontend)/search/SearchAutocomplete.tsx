// 'use client'

// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'

// type SearchResult = {
//   title: string
//   slug: string
// }

// export function SearchAutocomplete() {
//   const [query, setQuery] = useState('')
//   const [results, setResults] = useState<SearchResult[]>([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!query || query.length < 2) {
//         setResults([])
//         return
//       }

//       setLoading(true)
//       try {
//         const res = await fetch(`/api/search?q=${query}`)
//         const data = await res.json()
//         setResults(data.docs)
//       } catch (error) {
//         console.error('Search error:', error)
//         setResults([])
//       } finally {
//         setLoading(false)
//       }
//     }

//     const debounce = setTimeout(fetchResults, 300)
//     return () => clearTimeout(debounce)
//   }, [query])

//   return (
//     <div className="relative w-full">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search pages..."
//         className="w-full px-4 py-2 border border-gray-300 rounded-md"
//       />

//       {results.length > 0 && (
//         <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
//           {results.map((result) => (
//             <li key={result.slug}>
//               <Link href={`/${result.slug}`} className="block px-4 py-2 hover:bg-gray-100">
//                 {result.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}

//       {loading && <div className="absolute right-4 top-2.5 text-gray-400 text-sm">...</div>}
//     </div>
//   )
// }

'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Clock, ArrowRight, Loader2 } from 'lucide-react'

type SearchResult = {
  title: string
  slug: string
}

export function SearchAutocomplete() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fetch search results
  useEffect(() => {
    const fetchResults = async () => {
      if (!query || query.length < 2) {
        setResults([])
        return
      }

      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${query}`)
        const data = await res.json()
        setResults(data.docs || [])
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(fetchResults, 300)
    return () => clearTimeout(debounce)
  }, [query])

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const updated = [searchQuery, ...recentSearches.filter((s) => s !== searchQuery)].slice(0, 5)
      setRecentSearches(updated)
      localStorage.setItem('recentSearches', JSON.stringify(updated))
    }
    setIsOpen(false)
    setQuery('')
  }

  const clearQuery = () => {
    setQuery('')
    setResults([])
    inputRef.current?.focus()
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut' as const,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: 'easeIn' as const,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-4">
      {/* Search Input */}
      <div className="relative">
        <motion.div
          className={`relative flex items-center transition-all duration-300 ${
            isFocused
              ? 'bg-white/95 backdrop-blur-md shadow-xl border-2 border-[#D78B22]/50'
              : 'bg-white/80 backdrop-blur-sm shadow-lg border border-white/30 hover:bg-white/90'
          } rounded-xl overflow-hidden`}
          whileTap={{ scale: 0.98 }}
        >
          {/* Search Icon */}
          <div className="absolute left-4 flex items-center pointer-events-none">
            <Search
              className={`w-5 h-5 transition-colors duration-300 ${
                isFocused ? 'text-[#D78B22]' : 'text-gray-400'
              }`}
            />
          </div>

          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setIsFocused(true)
              setIsOpen(true)
            }}
            placeholder="Rechercher..."
            className="w-full pl-12 pr-12 py-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm font-medium"
          />

          {/* Loading/Clear Button */}
          <div className="absolute right-4 flex items-center">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Loader2 className="w-4 h-4 text-[#D78B22] animate-spin" />
                </motion.div>
              ) : query ? (
                <motion.button
                  key="clear"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={clearQuery}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (isFocused || query) && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden z-50 max-h-96 overflow-y-auto"
          >
            {/* Search Results */}
            {query && query.length >= 2 && (
              <div className="p-2">
                {results.length > 0 ? (
                  <>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mb-2">
                      Résultats ({results.length})
                    </div>
                    <motion.div variants={listVariants} initial="hidden" animate="visible">
                      {results.map((result, index) => (
                        <motion.div key={result.slug} variants={itemVariants}>
                          <Link
                            href={`/${result.slug}`}
                            onClick={() => handleSearch(result.title)}
                            className="group flex items-center justify-between px-4 py-3 hover:bg-gradient-to-r hover:from-[#0C2E53]/5 hover:to-[#D78B22]/5 rounded-xl transition-all duration-200 border border-transparent hover:border-[#D78B22]/20"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#0C2E53] to-[#D78B22] rounded-lg flex items-center justify-center">
                                <Search className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-800 font-medium group-hover:text-[#0C2E53] transition-colors duration-200">
                                {result.title}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#D78B22] transform group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  !loading && (
                    <div className="px-4 py-8 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 font-medium">Aucun résultat trouvé</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Essayez avec d&apos;autres mots-clés
                      </p>
                    </div>
                  )
                )}
              </div>
            )}

            {/* Recent Searches */}
            {!query && recentSearches.length > 0 && (
              <div className="p-2">
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Recherches récentes
                  </span>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    Effacer
                  </button>
                </div>
                <motion.div variants={listVariants} initial="hidden" animate="visible">
                  {recentSearches.map((search, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <button
                        onClick={() => {
                          setQuery(search)
                          inputRef.current?.focus()
                        }}
                        className="group w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-all duration-200 text-left"
                      >
                        <Clock className="w-4 h-4 text-gray-400 group-hover:text-[#D78B22] transition-colors duration-200" />
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                          {search}
                        </span>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Empty State */}
            {!query && recentSearches.length === 0 && (
              <div className="px-4 py-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0C2E53]/10 to-[#D78B22]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#0C2E53]" />
                </div>
                <p className="text-gray-500 font-medium">Commencez à taper pour rechercher</p>
                <p className="text-gray-400 text-sm mt-1">
                  Trouvez rapidement ce que vous cherchez
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
