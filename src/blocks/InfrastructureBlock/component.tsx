// 'use client'

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import type { GroupedItems } from '@/payload-types'
// import { Media } from '@/components/Media'
// import { X, ChevronRight, Grid3X3, Eye } from 'lucide-react'
// import { Dialog } from '@headlessui/react'

// export const GroupedItemsBlock: React.FC<GroupedItems> = ({
//   title,
//   description,
//   itemGroups,
//   imageGroups,
// }) => {
//   const [activeGallery, setActiveGallery] = useState<number | null>(null)

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut' as const,
//       },
//     },
//     hover: {
//       y: -8,
//       scale: 1.02,
//       transition: {
//         duration: 0.3,
//         ease: 'easeOut' as const,
//       },
//     },
//   }

//   return (
//     <motion.section
//       className="relative py-24 px-6 lg:px-12 xl:px-24 overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: '-100px' }}
//       variants={containerVariants}
//     >
//       {/* BACKGROUND DECOR */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/40 to-blue-50/60 -z-10" />
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-[#D78B22]/10 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl -z-10" />

//       <div className="max-w-7xl mx-auto">
//         {/* SECTION HEADER */}
//         <motion.div className="text-center mb-20" variants={itemVariants}>
//           <motion.div
//             className="inline-block mb-6"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-[#0C2E53] to-slate-900 bg-clip-text text-transparent leading-tight">
//               {title}
//             </h2>
//             <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-[#D78B22] mx-auto mt-4 rounded-full" />
//           </motion.div>
//           {description && (
//             <motion.p
//               className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
//               variants={itemVariants}
//             >
//               {description}
//             </motion.p>
//           )}
//         </motion.div>

//         {/* TEXT GROUPS */}
//         {itemGroups?.length > 0 && (
//           <motion.div
//             className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24"
//             variants={containerVariants}
//           >
//             {itemGroups.map((group, i) => (
//               <motion.div
//                 key={group.id || i}
//                 className="group relative"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200/50 hover:shadow-xl hover:border-blue-300/50 transition-all duration-500 h-full">
//                   <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-[#D78B22]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#D78B22] rounded-xl flex items-center justify-center shadow-lg">
//                       <ChevronRight className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
//                       {group.header}
//                     </h3>
//                   </div>

//                   <ul className="space-y-4">
//                     {group.items.map((item, j) => (
//                       <motion.li
//                         key={item.id || j}
//                         className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: j * 0.1, duration: 0.5 }}
//                         viewport={{ once: true }}
//                       >
//                         <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-[#D78B22] rounded-full mt-3 flex-shrink-0" />
//                         <span className="group-hover:text-slate-800 transition-colors duration-300">
//                           {item.text}
//                         </span>
//                       </motion.li>
//                     ))}
//                   </ul>

//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* IMAGE GROUPS */}
//         {Array.isArray(imageGroups) && imageGroups.length > 0 && (
//           <motion.div className="space-y-12" variants={containerVariants}>
//             <motion.div className="text-center" variants={itemVariants}>
//               <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Galerie</h3>
//               <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-[#D78B22] mx-auto rounded-full" />
//             </motion.div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {imageGroups.map((group, i) => {
//                 const firstImage = group.images?.[0]?.image
//                 const imageCount = group.images?.length || 0

//                 return (
//                   <motion.button
//                     key={group.id || i}
//                     onClick={() => setActiveGallery(i)}
//                     className="relative group h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
//                     variants={cardVariants}
//                     whileHover="hover"
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {firstImage && typeof firstImage !== 'number' && (
//                       <Media
//                         resource={firstImage}
//                         fill
//                         imgClassName="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//                       />
//                     )}

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />

//                     <div className="absolute inset-0 bg-[#0C2E53]/0 group-hover:bg-[#0C2E53]/20 transition-all duration-500 flex items-center justify-center">
//                       <motion.div
//                         className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                         initial={{ scale: 0, rotate: -180 }}
//                         whileHover={{ scale: 1, rotate: 0 }}
//                         transition={{ duration: 0.5, ease: 'easeOut' }}
//                       >
//                         <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
//                           <Eye className="w-8 h-8 text-white" />
//                         </div>
//                       </motion.div>
//                     </div>

//                     <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//                       <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 group-hover:text-[#D78B22]/80 transition-colors duration-300">
//                         {group.title}
//                       </h3>
//                       <div className="flex items-center gap-2 text-white/80 text-sm">
//                         <Grid3X3 className="w-4 h-4" />
//                         <span>
//                           {imageCount} {imageCount === 1 ? 'image' : 'images'}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-[#D78B22]/30 rounded-lg backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   </motion.button>
//                 )
//               })}
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {/* GALLERY MODAL */}
//       <AnimatePresence>
//         {activeGallery !== null && (
//           <Dialog
//             open={activeGallery !== null}
//             onClose={() => setActiveGallery(null)}
//             className="relative z-[9999]"
//           >
//             <motion.div
//               className="fixed inset-0 bg-black/90 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             />

//             <div className="fixed inset-0 flex items-center justify-center p-4">
//               <motion.div
//                 className="max-w-6xl w-full max-h-[90vh] overflow-hidden bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
//                 initial={{ opacity: 0, scale: 0.9, y: 50 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: 50 }}
//                 transition={{ duration: 0.4, ease: 'easeOut' }}
//               >
//                 <div className="relative p-8 border-b border-slate-200/50 bg-gradient-to-r from-blue-50/50 to-[#D78B22]/50">
//                   <motion.button
//                     className="absolute top-6 right-6 w-10 h-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 hover:text-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                     onClick={() => setActiveGallery(null)}
//                     whileHover={{ rotate: 90 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <X className="w-5 h-5" />
//                   </motion.button>

//                   {activeGallery !== null && imageGroups?.[activeGallery] && (
//                     <div className="text-center pr-16">
//                       <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
//                         {imageGroups[activeGallery].title}
//                       </h3>
//                       <p className="text-slate-600">
//                         {imageGroups[activeGallery].images.length}{' '}
//                         {imageGroups[activeGallery].images.length === 1 ? 'image' : 'images'}
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
//                   {activeGallery !== null && imageGroups?.[activeGallery] && (
//                     <motion.div
//                       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                       initial="hidden"
//                       animate="visible"
//                       variants={{
//                         visible: {
//                           transition: {
//                             staggerChildren: 0.1,
//                           },
//                         },
//                       }}
//                     >
//                       {imageGroups[activeGallery].images.map((imgObj, idx) => (
//                         <motion.div
//                           key={imgObj.id || idx}
//                           className="relative aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
//                           variants={{
//                             hidden: { opacity: 0, scale: 0.8 },
//                             visible: { opacity: 1, scale: 1 },
//                           }}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           {imgObj.image && typeof imgObj.image !== 'number' && (
//                             <Media
//                               resource={imgObj.image}
//                               imgClassName="object-cover group-hover:scale-110 transition-transform duration-500"
//                             />
//                           )}

//                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
//                             <motion.div
//                               className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                               initial={{ scale: 0 }}
//                               whileHover={{ scale: 1 }}
//                             >
//                               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
//                                 <Eye className="w-6 h-6 text-white" />
//                               </div>
//                             </motion.div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>
//           </Dialog>
//         )}
//       </AnimatePresence>
//     </motion.section>
//   )
// }

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GroupedItems } from '@/payload-types'
import { Media } from '@/components/Media'
import { X, ChevronRight, Grid3X3, Eye } from 'lucide-react'
import { Dialog } from '@headlessui/react'

type SupportedLang = 'ar' | 'fr' | 'en'

interface GroupedItemsBlockProps extends GroupedItems {
  lang?: SupportedLang
}

export const GroupedItemsBlock: React.FC<GroupedItemsBlockProps> = ({
  title,
  description,
  itemGroups,
  imageGroups,
  lang = 'en',
}) => {
  const [activeGallery, setActiveGallery] = useState<number | null>(null)

  // 🔥 Translations for static labels
  const t = {
    gallery: lang === 'ar' ? 'المعرض' : lang === 'fr' ? 'Galerie' : 'Gallery',
    image: lang === 'ar' ? 'صورة' : lang === 'fr' ? 'image' : 'image',
    images: lang === 'ar' ? 'صور' : lang === 'fr' ? 'images' : 'images',
  }

  const isRTL = lang === 'ar'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <motion.section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`relative py-24 px-6 lg:px-12 xl:px-24 overflow-hidden ${
        isRTL ? 'text-right' : 'text-left'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/40 to-blue-50/60 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-[#0C2E53] to-slate-900 bg-clip-text text-transparent leading-tight">
              {title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-[#D78B22] mx-auto mt-4 rounded-full" />
          </motion.div>
          {description && (
            <motion.p
              className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* TEXT GROUPS */}
        {itemGroups?.length > 0 && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24"
            variants={containerVariants}
          >
            {itemGroups.map((group, i) => (
              <motion.div
                key={group.id || i}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-200/50 hover:shadow-xl hover:border-blue-300/50 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#D78B22] rounded-xl flex items-center justify-center shadow-lg">
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {group.header}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {group.items.map((item, j) => (
                      <motion.li
                        key={item.id || j}
                        className="flex items-start gap-3 text-slate-700 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-[#D78B22] rounded-full mt-3 flex-shrink-0" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* IMAGE GROUPS */}
        {Array.isArray(imageGroups) && imageGroups.length > 0 && (
          <motion.div className="space-y-12" variants={containerVariants}>
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{t.gallery}</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-[#D78B22] mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageGroups.map((group, i) => {
                const firstImage = group.images?.[0]?.image
                const imageCount = group.images?.length || 0

                return (
                  <motion.button
                    key={group.id || i}
                    onClick={() => setActiveGallery(i)}
                    className="relative group h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    {firstImage && typeof firstImage !== 'number' && (
                      <Media
                        resource={firstImage}
                        fill
                        imgClassName="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 group-hover:text-[#D78B22]/80 transition-colors duration-300">
                        {group.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Grid3X3 className="w-4 h-4" />
                        <span>
                          {imageCount} {imageCount === 1 ? t.image : t.images}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeGallery !== null && (
          <Dialog
            open={activeGallery !== null}
            onClose={() => setActiveGallery(null)}
            className="relative z-[9999]"
          >
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                className="max-w-6xl w-full max-h-[90vh] overflow-hidden bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <div className="relative p-8 border-b border-slate-200/50 bg-gradient-to-r from-blue-50/50 to-[#D78B22]/50">
                  <motion.button
                    className="absolute top-6 right-6 w-10 h-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 hover:text-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    onClick={() => setActiveGallery(null)}
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>

                  {activeGallery !== null && imageGroups?.[activeGallery] && (
                    <div className="text-center pr-16">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                        {imageGroups[activeGallery].title}
                      </h3>
                      <p className="text-slate-600">
                        {imageGroups[activeGallery].images.length}{' '}
                        {imageGroups[activeGallery].images.length === 1 ? t.image : t.images}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
                  {activeGallery !== null && imageGroups?.[activeGallery] && (
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {imageGroups[activeGallery].images.map((imgObj, idx) => (
                        <motion.div
                          key={imgObj.id || idx}
                          className="relative aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {imgObj.image && typeof imgObj.image !== 'number' && (
                            <Media
                              resource={imgObj.image}
                              imgClassName="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
