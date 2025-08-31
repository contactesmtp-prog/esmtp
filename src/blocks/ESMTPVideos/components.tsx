// 'use client'

// import React, { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Play, X, Video, Sparkles } from 'lucide-react'
// import type { Esmtpvideoblockinter as EsmtpvideoblockinterInter } from '@/payload-types'

// export const ESMTPVideosBlock: React.FC<EsmtpvideoblockinterInter> = (props) => {
//   const [open, setOpen] = useState(false)
//   const [activeVideo, setActiveVideo] = useState<string | null>(null)

//   const getYouTubeID = (url: string) => {
//     try {
//       const parsed = new URL(url)
//       if (parsed.hostname.includes('youtu.be')) return parsed.pathname.slice(1)
//       return parsed.searchParams.get('v')
//     } catch {
//       return null
//     }
//   }

//   const handleOpen = (url: string) => {
//     const id = getYouTubeID(url)
//     if (id) {
//       setActiveVideo(id)
//       setOpen(true)
//     }
//   }
//   console.log()

//   return (
//     <section className="relative py-20 bg-slate-50">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <Video className="w-4 h-4" />
//             Galerie vidéo
//           </div>
//           {props.title && (
//             <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-6">{props.title}</h2>
//           )}
//         </div>

//         {/* Grid Videos */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {props.videos.map((video, index) => {
//             const videoID = getYouTubeID(video.url)
//             const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : null

//             return (
//               <div
//                 key={video.id || index}
//                 onClick={() => handleOpen(video.url)}
//                 className="group cursor-pointer"
//               >
//                 <div className="bg-white rounded-2xl shadow-lg border overflow-hidden transition hover:shadow-2xl hover:-translate-y-1 duration-300">
//                   {thumbnail && (
//                     <div className="relative w-full h-48 overflow-hidden">
//                       <img
//                         src={thumbnail}
//                         alt={video.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <div className="w-14 h-14 bg-[#0C2E53] rounded-full flex items-center justify-center">
//                           <Play className="w-6 h-6 text-white ml-1" />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   <div className="p-4">
//                     <h3 className="text-lg font-bold text-[#0C2E53] line-clamp-2">{video.title}</h3>
//                     <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <Sparkles className="w-4 h-4" />
//                         HD
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* Video Dialog */}
//       <Dialog
//         open={open}
//         onClose={() => {
//           setOpen(false)
//           setActiveVideo(null)
//         }}
//         className="fixed z-50 inset-0"
//       >
//         <div className="flex items-center justify-center min-h-screen px-4">
//           <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" aria-hidden="true" />

//           <div className="relative w-full max-w-6xl aspect-video z-10">
//             <button
//               onClick={() => {
//                 setOpen(false)
//                 setActiveVideo(null)
//               }}
//               className="absolute -top-12 right-0 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
//               aria-label="Close"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             {activeVideo && (
//               <iframe
//                 src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
//                 title="Video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full rounded-2xl"
//               />
//             )}
//           </div>
//         </div>
//       </Dialog>

//       <style jsx>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Play, X, Video, Sparkles } from 'lucide-react'
import type { Esmtpvideoblockinter as EsmtpvideoblockinterInter } from '@/payload-types'

interface ESMTPVideosBlockProps extends EsmtpvideoblockinterInter {
  lang: 'fr' | 'en' | 'ar'
}

export const ESMTPVideosBlock: React.FC<ESMTPVideosBlockProps> = ({ lang, ...props }) => {
  const [open, setOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const getYouTubeID = (url: string) => {
    try {
      const parsed = new URL(url)
      if (parsed.hostname.includes('youtu.be')) return parsed.pathname.slice(1)
      return parsed.searchParams.get('v')
    } catch {
      return null
    }
  }

  const handleOpen = (url: string) => {
    const id = getYouTubeID(url)
    if (id) {
      setActiveVideo(id)
      setOpen(true)
    }
  }

  // Simple translations (can be extended or moved to a translation file)
  const translations = {
    fr: { gallery: 'Galerie vidéo', hd: 'HD', close: 'Fermer' },
    en: { gallery: 'Video Gallery', hd: 'HD', close: 'Close' },
    ar: { gallery: 'معرض الفيديو', hd: 'عالي الدقة', close: 'إغلاق' },
  }

  const t = translations[lang] || translations.fr

  return (
    <section className="relative py-20 bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            {t.gallery}
          </div>
          {props.title && (
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-6">{props.title}</h2>
          )}
        </div>

        {/* Grid Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.videos.map((video, index) => {
            const videoID = getYouTubeID(video.url)
            const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : null

            return (
              <div
                key={video.id || index}
                onClick={() => handleOpen(video.url)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg border overflow-hidden transition hover:shadow-2xl hover:-translate-y-1 duration-300">
                  {thumbnail && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 bg-[#0C2E53] rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#0C2E53] line-clamp-2">{video.title}</h3>
                    <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        {t.hd}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false)
          setActiveVideo(null)
        }}
        className="fixed z-50 inset-0"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" aria-hidden="true" />

          <div className="relative w-full max-w-6xl aspect-video z-10">
            <button
              onClick={() => {
                setOpen(false)
                setActiveVideo(null)
              }}
              className="absolute -top-12 right-0 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
            {activeVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            )}
          </div>
        </div>
      </Dialog>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
