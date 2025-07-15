// 'use client'

// import React, { useState } from 'react'
// import type { Videoblockinter } from '@/payload-types'
// import { Dialog } from '@headlessui/react'

// export const VideosBlock: React.FC<Videoblockinter> = ({ title, videos }) => {
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

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         {title && <h2 className="text-3xl font-bold mb-10 text-slate-800">{title}</h2>}

//         <div className="flex overflow-x-auto space-x-6 pb-4">
//           {videos.map((video, index) => {
//             const videoID = getYouTubeID(video.url)
//             const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : null

//             return (
//               <div
//                 key={index}
//                 className="w-64 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
//                 onClick={() => handleOpen(video.url)}
//               >
//                 {thumbnail && (
//                   <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-md">
//                     <img
//                       src={thumbnail}
//                       alt={video.title || 'Video thumbnail'}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}
//                 <p className="mt-2 text-sm font-medium text-slate-700">{video.title}</p>
//               </div>
//             )
//           })}
//         </div>

//         {/* Modal */}
//         <Dialog
//           open={open}
//           onClose={() => {
//             setOpen(false)
//             setActiveVideo(null)
//           }}
//           className="fixed z-50 inset-0"
//         >
//           <div className="flex items-center justify-center min-h-screen px-4">
//             {/* Background overlay */}
//             <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

//             {/* Modal content */}
//             <div className="relative w-full max-w-4xl aspect-video z-10">
//               {/* Close button */}
//               <button
//                 onClick={() => {
//                   setOpen(false)
//                   setActiveVideo(null)
//                 }}
//                 className="absolute top-2 right-2 z-20 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
//                 aria-label="Close video"
//               >
//                 ✕
//               </button>

//               {/* Video iframe */}
//               {activeVideo && (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full rounded-lg"
//                 />
//               )}
//             </div>
//           </div>
//         </Dialog>
//       </div>
//     </section>
//   )
// }

//222222
// 'use client'

// import React, { useState } from 'react'
// import type { Videoblockinter } from '@/payload-types'
// import { Dialog } from '@headlessui/react'

// export const VideosBlock: React.FC<Videoblockinter> = ({ title, videos }) => {
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

//   return (
//     <section className="relative py-20 bg-white overflow-hidden">
//       {/* Background split left and right */}
//       <div className="absolute inset-0 z-0 flex">
//         <div className="w-1/2 bg-[#0C2E53]" />
//         <div className="w-1/2 bg-[#D78B22]" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
//         {title && (
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-playfair-display">
//             {title}
//           </h2>
//         )}

//         <div className="flex overflow-x-auto gap-6 pb-4 px-1 md:px-0 ">
//           {videos.map((video, index) => {
//             const videoID = getYouTubeID(video.url)
//             const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : null

//             return (
//               <div
//                 key={index}
//                 onClick={() => handleOpen(video.url)}
//                 className="relative w-64 flex-shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-105 first:ml-1"
//               >
//                 <div className="p-1 bg-transparent">
//                   <div className="rounded-xl border-2 border-transparent group-hover:border-white transition-all duration-300 bg-[#0C2E53] shadow-md overflow-hidden">
//                     {thumbnail && (
//                       <div className="relative w-full h-36">
//                         <img
//                           src={thumbnail}
//                           alt={video.title || 'Video thumbnail'}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
//                           <span className="bg-black/60 rounded-full p-2">▶</span>
//                         </div>
//                       </div>
//                     )}
//                     <div className="text-center py-3 px-2">
//                       <p className="text-white font-semibold text-sm leading-snug">{video.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Modal */}
//         <Dialog
//           open={open}
//           onClose={() => {
//             setOpen(false)
//             setActiveVideo(null)
//           }}
//           className="fixed z-50 inset-0"
//         >
//           <div className="flex items-center justify-center min-h-screen px-4">
//             <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

//             <div className="relative w-full max-w-4xl aspect-video z-10">
//               <button
//                 onClick={() => {
//                   setOpen(false)
//                   setActiveVideo(null)
//                 }}
//                 className="absolute top-2 right-2 z-20 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
//                 aria-label="Close video"
//               >
//                 ✕
//               </button>

//               {activeVideo && (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full rounded-lg"
//                 />
//               )}
//             </div>
//           </div>
//         </Dialog>
//       </div>
//     </section>
//   )
// }

'use client'

import React, { useState, useRef } from 'react'
import type { Videoblockinter } from '@/payload-types'
import { Dialog } from '@headlessui/react'
import { ChevronLeft, ChevronRight, Play, X, Video, Sparkles } from 'lucide-react'

export const VideosBlock: React.FC<Videoblockinter> = ({ title, videos }) => {
  const [open, setOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0C2E53]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D78B22]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2E53]/10 text-[#0C2E53] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            Galerie vidéo
          </div>
          {title && <h2 className="text-4xl md:text-5xl font-bold text-[#0C2E53] mb-6">{title}</h2>}
        </div>

        {/* Videos Container with Scroll Buttons */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#0C2E53]/20 hover:border-[#0C2E53] rounded-full flex items-center justify-center text-[#0C2E53] hover:bg-[#0C2E53] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-[#D78B22]/20 hover:border-[#D78B22] rounded-full flex items-center justify-center text-[#D78B22] hover:bg-[#D78B22] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Videos Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 px-16 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {videos.map((video, index) => {
              const videoID = getYouTubeID(video.url)
              const thumbnail = videoID
                ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`
                : null

              return (
                <div
                  key={index}
                  onClick={() => handleOpen(video.url)}
                  className="group relative w-80 flex-shrink-0 cursor-pointer"
                >
                  {/* Video Card */}
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 ${index % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'}`}
                    ></div>

                    {/* Thumbnail Container */}
                    {thumbnail && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={thumbnail}
                          alt={video.title || 'Video thumbnail'}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div
                            className={`w-16 h-16 ${index % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>

                        {/* Video Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                          <Video className="w-3 h-3 inline mr-1" />
                          HD
                        </div>
                      </div>
                    )}

                    {/* Video Info */}
                    <div className="p-6">
                      <h3
                        className={`font-bold text-lg mb-2 ${index % 2 === 0 ? 'text-[#0C2E53]' : 'text-[#D78B22]'} group-hover:text-gray-800 transition-colors line-clamp-2`}
                      >
                        {video.title}
                      </h3>

                      {/* Video Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <div
                            className={`w-2 h-2 ${index % 2 === 0 ? 'bg-[#0C2E53]' : 'bg-[#D78B22]'} rounded-full`}
                          ></div>
                          <span>Formation</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Qualité HD</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom decorative element */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2 ${index % 2 === 0 ? 'bg-[#0C2E53]/20' : 'bg-[#D78B22]/20'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-[#0C2E53] rounded-full animate-pulse"></div>
              Faites défiler horizontalement pour voir plus de vidéos
              <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
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
            {/* Close Button */}
            <button
              onClick={() => {
                setOpen(false)
                setActiveVideo(null)
              }}
              className="absolute -top-12 right-0 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Fermer la vidéo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {activeVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </Dialog>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
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
