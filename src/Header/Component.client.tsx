'use client'
import type { Header } from '@/payload-types'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Menu, X, Search } from 'lucide-react'
import { SearchAutocomplete } from '@/app/(frontend)/search/SearchAutocomplete'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#0C2E53]/95 backdrop-blur-md shadow-lg border-b border-[#D78B22]/20'
            : 'bg-[#0C2E53]/90 backdrop-blur-sm border-b border-white/10'
        }`}
        {...(theme ? { 'data-theme': theme } : {})}
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D78B22] via-[#f4a335] to-[#D78B22]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="group flex items-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Logo
                    loading="eager"
                    priority="high"
                    className="h-16 lg:h-20 w-auto transition-all duration-300 group-hover:brightness-110"
                  />
                  {/* Logo glow effect on hover */}
                  <div className="absolute inset-0 bg-[#D78B22] rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <HeaderNav data={data} />
            </div>

            <div className="hidden lg:block">
              <SearchAutocomplete />{' '}
            </div>
            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">{/* CTA Button */}</div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group relative p-2 text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom shadow when scrolled */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D78B22]/30 to-transparent transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0C2E53] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center">
              <Logo className="h-8 w-auto" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6">
              <HeaderNav data={data} isMobile={true} />
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-white/10 space-y-4">
              {/* <Link
                href="/search"
                className="flex items-center w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search className="w-5 h-5 mr-3" />
                Search
              </Link> */}

              {/* <Link
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#D78B22] to-[#f4a335] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
