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
'use client'

import React, { useState } from 'react'
import type { Videoblockinter } from '@/payload-types'
import { Dialog } from '@headlessui/react'

export const VideosBlock: React.FC<Videoblockinter> = ({ title, videos }) => {
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

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background split left and right */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/2 bg-[#0C2E53]" />
        <div className="w-1/2 bg-[#D78B22]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-playfair-display">
            {title}
          </h2>
        )}

        <div className="flex overflow-x-auto gap-6 pb-4 px-1 md:px-0 ">
          {videos.map((video, index) => {
            const videoID = getYouTubeID(video.url)
            const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg` : null

            return (
              <div
                key={index}
                onClick={() => handleOpen(video.url)}
                className="relative w-64 flex-shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-105 first:ml-1"
              >
                <div className="p-1 bg-transparent">
                  <div className="rounded-xl border-2 border-transparent group-hover:border-white transition-all duration-300 bg-[#0C2E53] shadow-md overflow-hidden">
                    {thumbnail && (
                      <div className="relative w-full h-36">
                        <img
                          src={thumbnail}
                          alt={video.title || 'Video thumbnail'}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                          <span className="bg-black/60 rounded-full p-2">▶</span>
                        </div>
                      </div>
                    )}
                    <div className="text-center py-3 px-2">
                      <p className="text-white font-semibold text-sm leading-snug">{video.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Modal */}
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false)
            setActiveVideo(null)
          }}
          className="fixed z-50 inset-0"
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

            <div className="relative w-full max-w-4xl aspect-video z-10">
              <button
                onClick={() => {
                  setOpen(false)
                  setActiveVideo(null)
                }}
                className="absolute top-2 right-2 z-20 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
                aria-label="Close video"
              >
                ✕
              </button>

              {activeVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  )
}
