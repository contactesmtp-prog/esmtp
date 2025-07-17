// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import { Calendar, Clock, ArrowRight, BookOpen, Users, Sparkles } from 'lucide-react'

// import BackButton from '@/components/ui/backComp'
// import { Formation } from '@/payload-types'

// type Props = {
//   formations: Formation[]
//   themeInfo?: {
//     id: string
//     title: string
//   } | null
// }

// const formatDate = (isoDate: string | null | undefined): string => {
//   if (!isoDate) return ''
//   return new Date(isoDate).toLocaleDateString('fr-FR', {
//     day: 'numeric',
//     month: 'short',
//     year: 'numeric',
//   })
// }

// export const FormationsClient: React.FC<Props> = ({ formations, themeInfo }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6">
//         {/* Header Section */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <BackButton />
//           </div>

//           <div className="text-center">
//             <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <BookOpen className="w-4 h-4" />
//               {themeInfo ? `Thème: ${themeInfo.title}` : 'Toutes les formations'}
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0C2E53] to-[#D78B22] bg-clip-text text-transparent mb-4">
//               {themeInfo ? `Formations ${themeInfo.title}` : 'Liste des Formations'}
//             </h1>

//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               {formations.length > 0
//                 ? `Découvrez nos ${formations.length} formation${formations.length > 1 ? 's' : ''} disponible${formations.length > 1 ? 's' : ''}`
//                 : 'Explorez notre catalogue de formations professionnelles'}
//             </p>
//           </div>
//         </div>

//         {/* Formations Content */}
//         {formations.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-gradient-to-br from-[#0C2E53]/10 to-[#D78B22]/10 rounded-full flex items-center justify-center mx-auto mb-8">
//               <BookOpen className="w-12 h-12 text-[#0C2E53]" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Aucune formation trouvée</h3>
//             <p className="text-gray-600 mb-8 max-w-md mx-auto">
//               {themeInfo
//                 ? `Aucune formation n'est actuellement disponible pour le thème "${themeInfo.title}".`
//                 : 'Aucune formation ne correspond à vos critères de recherche.'}
//             </p>
//             <Link
//               href="/formations"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
//             >
//               <BookOpen className="w-5 h-5" />
//               Voir toutes les formations
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {formations.map((formation, index) => (
//               <div
//                 key={formation.id}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//                 style={{
//                   animationDelay: `${index * 100}ms`,
//                 }}
//               >
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#0C2E53]/5 to-[#D78B22]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                 {/* Top accent line */}
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C2E53] to-[#D78B22]"></div>

//                 <div className="relative p-8">
//                   {/* Formation Title */}
//                   <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-[#0C2E53] transition-colors duration-300 line-clamp-2">
//                     {formation.nom}
//                   </h3>

//                   {/* Formation Details */}
//                   <div className="space-y-4 mb-8">
//                     {/* Date Range */}
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <div className="flex items-center justify-center w-10 h-10 bg-[#0C2E53]/10 rounded-xl group-hover:bg-[#0C2E53]/20 transition-colors">
//                         <Calendar className="w-5 h-5 text-[#0C2E53]" />
//                       </div>
//                       <div className="text-sm">
//                         <div className="font-medium text-gray-800">Période</div>
//                         <div className="text-gray-600">
//                           {formatDate(formation.startDate)} → {formatDate(formation.endDate)}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Duration */}
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <div className="flex items-center justify-center w-10 h-10 bg-[#D78B22]/10 rounded-xl group-hover:bg-[#D78B22]/20 transition-colors">
//                         <Clock className="w-5 h-5 text-[#D78B22]" />
//                       </div>
//                       <div className="text-sm">
//                         <div className="font-medium text-gray-800">Durée</div>
//                         <div className="text-gray-600">{formation.duree}</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <Link
//                     href={`/devis?formation=${formation.id}`}
//                     className="group/btn relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] hover:from-[#0C2E53]/90 hover:to-[#D78B22]/90 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0C2E53]/25 overflow-hidden"
//                   >
//                     <span className="relative z-10">Demander un devis</span>
//                     <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />

//                     {/* Button hover effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#D78B22] to-[#0C2E53] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
//                   </Link>
//                 </div>

//                 {/* Bottom decorative element */}
//                 <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0C2E53]/20 to-[#D78B22]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Bottom Stats Section */}
//         {formations.length > 0 && (
//           <div className="mt-16 text-center">
//             <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-[#0C2E53] rounded-full"></div>
//                 <span className="text-sm font-medium text-gray-700">
//                   {formations.length} formation{formations.length > 1 ? 's' : ''}
//                 </span>
//               </div>
//               <div className="w-px h-6 bg-gray-300"></div>
//               <div className="flex items-center gap-2">
//                 <Users className="w-4 h-4 text-[#D78B22]" />
//                 <span className="text-sm font-medium text-gray-700">Formation professionnelle</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   )
// }
'use client'
import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Users,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Eye,
  Star,
  TrendingUp,
  Grid,
  List,
  SortAsc,
  SortDesc,
} from 'lucide-react'

import BackButton from '@/components/ui/backComp'
import { Formation } from '@/payload-types'

type Props = {
  formations: Formation[]
  themeInfo?: {
    id: string
    title: string
  } | null
}

type SortField = 'nom' | 'startDate' | 'duree'
type SortOrder = 'asc' | 'desc'
type ViewMode = 'table' | 'grid'

const formatDate = (isoDate: string | null | undefined): string => {
  if (!isoDate) return ''
  return new Date(isoDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const formatDateShort = (isoDate: string | null | undefined): string => {
  if (!isoDate) return ''
  return new Date(isoDate).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
  })
}

export const FormationsClient: React.FC<Props> = ({ formations, themeInfo }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState<SortField>('startDate')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

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
    hidden: { opacity: 0, x: -20 },
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
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0C2E53]/8 to-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#D78B22]/8 to-orange-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6">
        {/* Enhanced Header Section */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="text-center mb-8">
            {/* <div className="mb-6 mt-10">
              <div className="flex justify-start">
                <BackButton />
              </div>
            </div> */}
            <div className="mt-6 mb-10 mt-20 px-4 sm:px-6 lg:px-8">
              <div className="mt-6 mb-10 mt-20 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-start">
                  <BackButton />
                </div>
              </div>
            </div>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#0C2E53]/20 text-[#0C2E53] px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BookOpen className="w-4 h-4" />
              {themeInfo ? `Thème: ${themeInfo.title}` : 'Catalogue Formations'}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#0C2E53] via-blue-600 to-[#D78B22] bg-clip-text text-transparent mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {themeInfo ? `Formations ${themeInfo.title}` : 'Nos Formations'}
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {formations.length > 0
                ? `Découvrez notre catalogue de ${formations.length} formation${formations.length > 1 ? 's' : ''} professionnelle${formations.length > 1 ? 's' : ''} soigneusement sélectionnée${formations.length > 1 ? 's' : ''}`
                : 'Explorez notre catalogue complet de formations professionnelles'}
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Controls Section */}
        <motion.div
          className="mb-8 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0C2E53]/20 focus:border-[#0C2E53]/30 transition-all duration-300"
              />
            </div>

            {/* View Toggle & Stats */}
            <div className="flex items-center gap-4">
              {/* Results Count */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 bg-gray-100/80 px-4 py-2 rounded-xl">
                <TrendingUp className="w-4 h-4 text-[#0C2E53]" />
                <span className="font-medium">
                  {filteredAndSortedFormations.length} résultat
                  {filteredAndSortedFormations.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100/80 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'table'
                      ? 'bg-white shadow-md text-[#0C2E53]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
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
                >
                  <Grid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formations Content */}
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
                <Search className="w-16 h-16 text-[#0C2E53]/60" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Aucune formation trouvée</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                {searchTerm
                  ? `Aucune formation ne correspond à "${searchTerm}"`
                  : themeInfo
                    ? `Aucune formation disponible pour "${themeInfo.title}"`
                    : 'Aucune formation disponible'}
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Réinitialiser la recherche
              </button>
            </motion.div>
          ) : viewMode === 'table' ? (
            /* Enhanced Table View */
            <motion.div
              className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden"
              variants={itemVariants}
            >
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#0C2E53]/5 to-[#D78B22]/5 border-b border-gray-200/50">
                <div className="grid grid-cols-12 gap-4 p-6 text-sm font-semibold text-gray-700">
                  <div className="col-span-5 lg:col-span-4">
                    <button
                      onClick={() => handleSort('nom')}
                      className="flex items-center gap-2 hover:text-[#0C2E53] transition-colors duration-200"
                    >
                      Formation
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
                      Période
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
                      Durée
                      {sortField === 'duree' &&
                        (sortOrder === 'asc' ? (
                          <SortAsc className="w-4 h-4" />
                        ) : (
                          <SortDesc className="w-4 h-4" />
                        ))}
                    </button>
                  </div>
                  <div className="col-span-2 lg:col-span-3 text-center">Actions</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-100/50">
                {filteredAndSortedFormations.map((formation, index) => (
                  <motion.div
                    key={formation.id}
                    // className="grid grid-cols-12 gap-4 p-6 hover:bg-gradient-to-r hover:from-[#0C2E53]/5 hover:to-[#D78B22]/5 transition-all duration-300 group cursor-pointer"
                    className="relative grid grid-cols-1 md:grid-cols-12 gap-4 p-4 sm:p-6 hover:bg-gradient-to-r hover:from-[#0C2E53]/5 hover:to-[#D78B22]/5 transition-all duration-300 group cursor-pointer"
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredRow(formation.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {/* Formation Name */}
                    <div className="col-span-5 lg:col-span-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0C2E53] to-[#D78B22] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-[#0C2E53] transition-colors duration-300 line-clamp-2 leading-tight">
                            {formation.nom}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="w-3 h-3 text-[#D78B22]" />
                            <span className="text-xs text-gray-500">Formation certifiante</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="col-span-3 lg:col-span-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0C2E53] flex-shrink-0" />
                        <div className="text-sm">
                          <div className="font-medium text-gray-800">
                            {formatDateShort(formation.startDate)}
                          </div>
                          <div className="text-gray-500 text-xs">
                            → {formatDateShort(formation.endDate)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="col-span-2 lg:col-span-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D78B22] flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{formation.duree}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 lg:col-span-3 flex items-center justify-center gap-2">
                      <div className="w-px h-4 bg-gray-300"></div>
                      <Link
                        href={`/devis?formation=${formation.id}`}
                        className="inline-flex items-center gap-1 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span className="hidden lg:inline">Devis</span>
                      </Link>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0C2E53] to-[#D78B22] rounded-r-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: hoveredRow === formation.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Grid View (Compact Cards) */
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              variants={containerVariants}
            >
              {filteredAndSortedFormations.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C2E53] to-[#D78B22]"></div>

                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0C2E53] to-[#D78B22] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#0C2E53] transition-colors duration-300 line-clamp-2 leading-tight">
                      {formation.nom}
                    </h3>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-[#0C2E53]" />
                        <span>
                          {formatDateShort(formation.startDate)} →{' '}
                          {formatDateShort(formation.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-[#D78B22]" />
                        <span>{formation.duree}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {/* <Link
                        href={`/formations/${formation.id}`}
                        className="flex-1 text-center py-2 text-[#0C2E53] border border-[#0C2E53]/20 rounded-lg hover:bg-[#0C2E53]/5 transition-all duration-300 text-sm font-medium"
                      >
                        Voir
                      </Link> */}
                      <Link
                        href={`/devis?formation=${formation.id}`}
                        className="flex-1 text-center py-2 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      >
                        Devis
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Stats Section */}
        {/* {filteredAndSortedFormations.length > 0 && (
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">
                  {filteredAndSortedFormations.length} formation
                  {filteredAndSortedFormations.length > 1 ? 's' : ''} disponible
                  {filteredAndSortedFormations.length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-[#D78B22]" />
                <span className="text-sm font-semibold text-gray-700">
                  Formation professionnelle certifiante
                </span>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-[#0C2E53]" />
                <span className="text-sm font-semibold text-gray-700">Qualité garantie</span>
              </div>
            </div>
          </motion.div>
        )} */}
        {filteredAndSortedFormations.length > 0 && (
          <motion.div className="mt-12 text-center" variants={itemVariants}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-white/50 text-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-[#0C2E53] to-[#D78B22] rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">
                  {filteredAndSortedFormations.length} formation
                  {filteredAndSortedFormations.length > 1 ? 's' : ''} disponible
                  {filteredAndSortedFormations.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D78B22]" />
                <span className="text-sm font-semibold text-gray-700">
                  Formation professionnelle certifiante
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#0C2E53]" />
                <span className="text-sm font-semibold text-gray-700">Qualité garantie</span>
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
