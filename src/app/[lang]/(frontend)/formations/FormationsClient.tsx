'use client'
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import BackButton from '@/components/ui/backComp'
import type { Media } from '@/payload-types'
import {
  FileDown,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Users,
  SearchIcon,
  Star,
  TrendingUp,
  GridIcon,
  List,
  SortAsc,
  SortDesc,
  ArrowLeft,
} from 'lucide-react'

type Formation = {
  id: number
  nom: string
  startDate: string | null
  endDate: string | null
  duree: string | null
  forpdf?: number | Media | null
}

type Props = {
  formations: Formation[]
  themeInfo?: {
    id: string
    title: string
  } | null
  lang: 'fr' | 'en' | 'ar'
}

type SortField = 'nom' | 'startDate' | 'duree'
type SortOrder = 'asc' | 'desc'
type ViewMode = 'table' | 'grid'

// Translations
const translations = {
  fr: {
    catalogue: 'Catalogue Formations',
    theme: 'Thème',
    ourFormations: 'Nos Formations',
    discover: (count: number) =>
      `Découvrez notre catalogue de ${count} formation${count > 1 ? 's' : ''} professionnelle${count > 1 ? 's' : ''}`,
    explore: 'Explorez notre catalogue complet de formations professionnelles',
    searchPlaceholder: 'Rechercher une formation...',
    results: 'résultat',
    noneFound: 'Aucune formation trouvée',
    noneFor: (title: string) => `Aucune formation disponible pour "${title}"`,
    noResultsFor: (term: string) => `Aucune formation ne correspond à "${term}"`,
    reset: 'Réinitialiser la recherche',
    formation: 'Formation',
    period: 'Période',
    duration: 'Durée',
    actions: 'Actions',
    devis: 'Devis',
    available: 'disponible',
    professional: 'Formation professionnelle certifiante',
    quality: 'Qualité garantie',
    certif: 'Formation certifiante',
    back: 'Retour',
    downloadPdf: 'Télécharger PDF',
  },
  en: {
    catalogue: 'Training Catalog',
    theme: 'Theme',
    ourFormations: 'Our Trainings',
    discover: (count: number) =>
      `Discover our catalog of ${count} professional training${count > 1 ? 's' : ''}`,
    explore: 'Explore our complete catalog of professional trainings',
    searchPlaceholder: 'Search for a training...',
    results: 'result',
    noneFound: 'No training found',
    noneFor: (title: string) => `No training available for "${title}"`,
    noResultsFor: (term: string) => `No training matches "${term}"`,
    reset: 'Reset search',
    formation: 'Training',
    period: 'Period',
    duration: 'Duration',
    actions: 'Actions',
    devis: 'Quote',
    available: 'available',
    professional: 'Certified professional training',
    quality: 'Quality guaranteed',
    certif: 'Certified training',
    back: 'Back',
    downloadPdf: 'Download PDF',
  },
  ar: {
    catalogue: 'دليل الدورات',
    theme: 'الموضوع',
    ourFormations: 'دوراتنا',
    discover: (count: number) => `اكتشف ${count} دورة مهني${count > 1 ? 'ة' : ''}`,
    explore: 'استكشف دليلنا الكامل للدورات المهنية',
    searchPlaceholder: 'ابحث عن دورة...',
    results: 'نتيجة',
    noneFound: 'لم يتم العثور على أي دورة',
    noneFor: (title: string) => `لا توجد دورات متاحة لـ "${title}"`,
    noResultsFor: (term: string) => `لا توجد دورات تطابق "${term}"`,
    reset: 'إعادة تعيين البحث',
    formation: 'الدورة',
    period: 'الفترة',
    duration: 'المدة',
    actions: 'الإجراءات',
    devis: 'عرض سعر',
    available: 'متاحة',
    professional: 'دورة مهنية معتمدة',
    quality: 'جودة مضمونة',
    certif: 'دورة معتمدة',
    back: 'عودة',
    downloadPdf: 'تحميل PDF',
  },
}

const formatDateShort = (isoDate: string | null | undefined, lang: string): string => {
  if (!isoDate) return ''

  const date = new Date(isoDate)

  // English: month/day
  if (lang === 'en') {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
    })
  }

  // French & Arabic: day/month (force Latin digits)
  return date.toLocaleDateString('fr-FR-u-nu-latn', {
    day: '2-digit',
    month: '2-digit',
  })
}

export const FormationsClient: React.FC<Props> = ({ formations, themeInfo, lang }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState<SortField>('startDate')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const isRTL = lang === 'ar'
  const t = translations[lang]

  // Filter and sort formations
  const filteredAndSortedFormations = useMemo(() => {
    const filtered = formations.filter((formation) =>
      formation.nom.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    filtered.sort((a, b) => {
      let aValue: any, bValue: any

      switch (sortField) {
        case 'nom':
          aValue = a.nom.toLowerCase()
          bValue = b.nom.toLowerCase()
          break
        case 'startDate':
          aValue = new Date(a.startDate || 0)
          bValue = new Date(b.startDate || 0)
          break
        case 'duree':
          aValue = a.duree || ''
          bValue = b.duree || ''
          break
        default:
          return 0
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  }, [formations, searchTerm, sortField, sortOrder])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0C2E53]/8 to-blue-500/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#D78B22]/8 to-orange-500/8 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative max-w-7xl mx-auto py-8 px-4 sm:px-6 ${isRTL ? 'text-right' : 'text-left'}`}
      >
        {/* Header */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="text-center mb-8">
            <div className="mt-6 mb-10 px-4 sm:px-6 lg:px-8">
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <BackButton lang={lang} />
              </div>
            </div>

            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#0C2E53]/20 text-[#0C2E53] px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BookOpen className="w-4 h-4" />
              {themeInfo ? `${t.theme}: ${themeInfo.title}` : t.catalogue}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#0C2E53] via-blue-600 to-[#D78B22] bg-clip-text text-transparent mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {themeInfo ? `${t.ourFormations} ${themeInfo.title}` : t.ourFormations}
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {formations.length > 0 ? t.discover(formations.length) : t.explore}
            </motion.p>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="mb-8 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SearchIcon
                className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`}
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full ${isRTL ? 'pr-12' : 'pl-12'} py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0C2E53]/20 focus:border-[#0C2E53]/30 transition-all duration-300`}
              />
            </div>

            {/* Stats + Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 bg-gray-100/80 px-4 py-2 rounded-xl">
                <TrendingUp className="w-4 h-4 text-[#0C2E53]" />
                <span className="font-medium">
                  {filteredAndSortedFormations.length} {t.results}
                  {filteredAndSortedFormations.length !== 1 && (lang === 'en' ? 's' : '')}
                </span>
              </div>

              <div className="flex items-center bg-gray-100/80 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'table'
                      ? 'bg-white shadow-md text-[#0C2E53]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-label="Table view"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-white shadow-md text-[#0C2E53]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-label="Grid view"
                >
                  <GridIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {filteredAndSortedFormations.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-[#0C2E53]/10 to-[#D78B22]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <SearchIcon className="w-16 h-16 text-[#0C2E53]/60" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{t.noneFound}</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                {searchTerm
                  ? t.noResultsFor(searchTerm)
                  : themeInfo
                    ? t.noneFor(themeInfo.title)
                    : t.noneFound}
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                {t.reset}
              </button>
            </motion.div>
          ) : viewMode === 'table' ? (
            /* ===== Table View ===== */
            <motion.div
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden"
              variants={itemVariants}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 border-b border-gray-200/50">
                <div
                  className={`grid grid-cols-12 gap-4 p-6 text-sm font-semibold text-gray-700 ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="col-span-4 lg:col-span-3">
                    <button
                      onClick={() => handleSort('nom')}
                      className="flex items-center gap-2 hover:text-[#0C2E53] transition-colors duration-200"
                    >
                      {t.formation}
                      {sortField === 'nom' &&
                        (sortOrder === 'asc' ? (
                          <SortAsc className="w-4 h-4" />
                        ) : (
                          <SortDesc className="w-4 h-4" />
                        ))}
                    </button>
                  </div>

                  <div className="col-span-3 lg:col-span-3">
                    <button
                      onClick={() => handleSort('startDate')}
                      className="flex items-center gap-2 hover:text-[#0C2E53] transition-colors duration-200"
                    >
                      {t.period}
                      {sortField === 'startDate' &&
                        (sortOrder === 'asc' ? (
                          <SortAsc className="w-4 h-4" />
                        ) : (
                          <SortDesc className="w-4 h-4" />
                        ))}
                    </button>
                  </div>

                  <div className="col-span-2 lg:col-span-2">
                    <button
                      onClick={() => handleSort('duree')}
                      className="flex items-center gap-2 hover:text-[#0C2E53] transition-colors duration-200"
                    >
                      {t.duration}
                      {sortField === 'duree' &&
                        (sortOrder === 'asc' ? (
                          <SortAsc className="w-4 h-4" />
                        ) : (
                          <SortDesc className="w-4 h-4" />
                        ))}
                    </button>
                  </div>

                  <div className="col-span-2 lg:col-span-2 text-center">{t.downloadPdf}</div>
                  <div className="col-span-1 lg:col-span-2 text-center">{t.actions}</div>
                </div>
              </div>

              {/* Body */}
              <div className="divide-y divide-gray-100/50">
                {filteredAndSortedFormations.map((formation, index) => (
                  <motion.div
                    key={formation.id}
                    className={`relative grid grid-cols-12 gap-4 p-4 sm:p-6 hover:bg-gradient-to-r hover:from-[#0C2E53]/5 hover:to-[#D78B22]/5 transition-all duration-300 group cursor-pointer ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredRow(formation.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {/* Formation */}
                    <div className="col-span-4 lg:col-span-3 flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0C2E53] to-[#D78B22] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-[#0C2E53] transition-colors duration-300 line-clamp-2 leading-tight">
                          {formation.nom}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-3 h-3 text-[#D78B22]" />
                          <span className="text-xs text-gray-500">{t.certif}</span>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="col-span-3 lg:col-span-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0C2E53] flex-shrink-0" />
                      {/* Force LTR for date values */}
                      <div dir="ltr" className="text-left">
                        <div className="font-medium text-gray-800">
                          {formatDateShort(formation.startDate, lang)}
                        </div>
                        <div className="text-gray-500 text-xs">
                          → {formatDateShort(formation.endDate, lang)}
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="col-span-2 lg:col-span-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D78B22] flex-shrink-0" />
                      {/* Force LTR for numbers */}
                      <span dir="ltr" className="text-sm font-medium text-gray-700">
                        {formation.duree || '—'}
                      </span>
                    </div>

                    {/* PDF */}
                    <div className="col-span-2 lg:col-span-2 flex items-center justify-center">
                      {formation.forpdf &&
                      typeof formation.forpdf === 'object' &&
                      formation.forpdf.url ? (
                        <a
                          href={formation.forpdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 border border-[#0C2E53] text-[#0C2E53] rounded-lg hover:bg-[#0C2E53] hover:text-white transition-all duration-300 text-sm font-medium"
                        >
                          <FileDown className="w-4 h-4" />
                          <span className="hidden sm:inline">{t.downloadPdf}</span>
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">—</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 lg:col-span-2 flex items-center justify-center gap-2">
                      <Link
                        href={`/${lang}/devis?formation=${formation.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-3 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                        <span className="hidden lg:inline">{t.devis}</span>
                      </Link>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#0C2E53] to-[#D78B22] ${
                        isRTL ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'
                      }`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: hoveredRow === formation.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ===== Grid View ===== */
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              variants={containerVariants}
            >
              {filteredAndSortedFormations.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  className="group relative flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C2E53] to-[#D78B22]" />

                  {/* Card content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C2E53] to-[#D78B22] rounded-xl flex items-center justify-center mb-5 self-start">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#0C2E53] transition-colors duration-300 line-clamp-2 leading-snug">
                      {formation.nom}
                    </h3>

                    <div className="space-y-3 mb-6 text-sm text-gray-600">
                      <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Calendar className="w-4 h-4 text-[#0C2E53]" />
                        {/* Force LTR & left alignment for date text in grid */}
                        <span dir="ltr" className="text-left">
                          {formatDateShort(formation.startDate, lang)} →{' '}
                          {formatDateShort(formation.endDate, lang)}
                        </span>
                      </div>
                      <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Clock className="w-4 h-4 text-[#D78B22]" />
                        {/* Force LTR & left alignment for duration in grid */}
                        <span dir="ltr" className="text-left">
                          {formation.duree || '—'}
                        </span>
                      </div>
                    </div>

                    <div className="flex-grow" />

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      {formation.forpdf &&
                        typeof formation.forpdf === 'object' &&
                        formation.forpdf.url && (
                          <a
                            href={formation.forpdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[#0C2E53] text-[#0C2E53] rounded-lg hover:bg-[#0C2E53] hover:text-white transition-all duration-300 text-sm font-medium"
                          >
                            <FileDown className="w-4 h-4" />
                            <span className="hidden sm:inline">{t.downloadPdf}</span>
                          </a>
                        )}
                      <Link
                        href={`/${lang}/devis?formation=${formation.id}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                        {t.devis}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredAndSortedFormations.length > 0 && (
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <div
              className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/50 text-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-4 h-4 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">
                  {filteredAndSortedFormations.length} {t.formation}
                  {filteredAndSortedFormations.length > 1 && (lang === 'en' ? 's' : '')}{' '}
                  {t.available}
                  {filteredAndSortedFormations.length > 1 && (lang === 'en' ? '' : 's')}
                </span>
              </div>

              <div className="hidden md:block w-px h-6 bg-gray-300"></div>

              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Users className="w-4 h-4 text-[#D78B22]" />
                <span className="text-sm font-semibold text-gray-700">{t.professional}</span>
              </div>

              <div className="hidden md:block w-px h-6 bg-gray-300"></div>

              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Star className="w-4 h-4 text-[#0C2E53]" />
                <span className="text-sm font-semibold text-gray-700">{t.quality}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.div>
  )
}
