// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect } from 'react'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()

//   useEffect(() => {
//     setHeaderTheme('dark')
//   })

//   return (
//     <div
//       className="relative -mt-[10.4rem] flex items-center justify-center text-white"
//       data-theme="dark"
//     >
//       <div className="container mb-8 z-10 relative flex items-center justify-center">
//         <div className="max-w-[36.5rem] md:text-center">
//           {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
//           {Array.isArray(links) && links.length > 0 && (
//             <ul className="flex md:justify-center gap-4">
//               {links.map(({ link }, i) => {
//                 return (
//                   <li key={i}>
//                     <CMSLink {...link} />
//                   </li>
//                 )
//               })}
//             </ul>
//           )}
//         </div>
//       </div>
//       <div className="min-h-[80vh] select-none">
//         {media && typeof media === 'object' && (
//           <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
//         )}
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect, useState } from 'react'
// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   useEffect(() => {
//     setHeaderTheme('dark')
//   }, [setHeaderTheme])

//   useEffect(() => {
//     if (!Array.isArray(media) || media.length < 2) return
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % media.length)
//     }, 5000) // change image every 5s
//     return () => clearInterval(interval)
//   }, [media])

//   return (
//     <div
//       className="relative -mt-[10.4rem] flex min-h-[80vh] items-center justify-center text-white overflow-hidden"
//       data-theme="dark"
//     >
//       <div className="container z-10 relative flex flex-col md:flex-row items-center justify-between gap-10">
//         <div className="max-w-[36.5rem]">
//           {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
//           {Array.isArray(links) && links.length > 0 && (
//             <ul className="flex flex-wrap gap-4">
//               {links.map(({ link }, i) => (
//                 <li key={i}>
//                   <CMSLink {...link} />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Display current image with animation */}
//         <div className="relative w-full md:w-[50%] min-h-[20rem] h-full">
//           {Array.isArray(media) && media.length > 0 && (
//             <div className="absolute inset-0 animate-fade-in-top transition-all duration-700">
//               <Media
//                 resource={media[currentImageIndex]?.image}
//                 imgClassName="object-cover w-full h-full rounded-lg shadow-lg"
//                 fill
//                 priority
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect, useState } from 'react'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   useEffect(() => {
//     setHeaderTheme('dark')
//   }, [setHeaderTheme])

//   useEffect(() => {
//     if (!Array.isArray(media) || media.length < 2) return
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % media.length)
//     }, 5000) // Change every 5 seconds
//     return () => clearInterval(interval)
//   }, [media])

//   return (
//     <div
//       className="relative -mt-[10.4rem] min-h-[80vh] flex items-center justify-start text-white overflow-hidden"
//       data-theme="dark"
//     >
//       {/* 🔁 Background image that fades */}
//       {Array.isArray(media) &&
//         media.map((item, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0'
//             }`}
//           >
//             <Media
//               resource={item?.image}
//               imgClassName="object-cover w-full h-full"
//               fill
//               priority={index === 0}
//             />
//           </div>
//         ))}

//       {/* 📦 Foreground content */}

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-20 md:pt-40 md:pb-44">
//           <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
//             {/* Left Side: RichText + Links */}
//             <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
//               {richText && (
//                 <div className="prose prose-lg prose-invert max-w-none mb-8">
//                   <RichText
//                     data={richText}
//                     enableGutter={false}
//                     className="
//                   [&>h1]:text-4xl [&>h1]:font-bold
//                   [&>h2]:text-3xl [&>h2]:font-semibold
//                   [&>h3]:text-2xl [&>h3]:font-semibold
//                   [&>h4]:text-xl [&>h4]:font-medium
//                   [&>p]:text-base
//                 "
//                   />
//                 </div>
//               )}

//               {Array.isArray(links) && links.length > 0 && (
//                 <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
//                   {links.map(({ link }, i) => (
//                     <div key={i}>
//                       <CMSLink
//                         {...link}
//                         className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group"
//                       >
//                         {link.label || 'Learn More'}{' '}
//                         <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//                           -&gt;
//                         </span>
//                       </CMSLink>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   // Set header theme
//   useEffect(() => {
//     setHeaderTheme('dark')
//   }, [setHeaderTheme])

//   // Background slideshow
//   useEffect(() => {
//     if (!Array.isArray(media) || media.length < 2) return
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % media.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [media])

//   return (
//     // <div
//     //   className="relative -mt-[10.4rem] min-h-[80vh] flex items-center justify-start text-white overflow-hidden"
//     //   data-theme="dark"
//     // >
//     <div
//       className="relative min-h-[80vh] flex items-center justify-start text-white overflow-hidden"
//       data-theme="dark"
//     >
//       {/* 🔁 Background image carousel */}
//       {Array.isArray(media) &&
//         media.map((item, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0'
//             }`}
//           >
//             <Media
//               resource={item?.image}
//               imgClassName="object-cover w-full h-full"
//               fill
//               priority={index === 0}
//             />
//           </div>
//         ))}

//       {/* 🌓 Overlay for better text contrast */}
//       <div className="absolute inset-0 bg-black/50 z-[1]" />

//       {/* 🔤 Foreground content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-20 md:pt-40 md:pb-44">
//           <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
//             {/* Left Side: RichText + Links */}
//             <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
//               {richText && (
//                 <div className="prose prose-lg prose-invert max-w-none mb-8">
//                   <RichText
//                     data={richText}
//                     enableGutter={false}
//                     className="
//                       [&>h1]:text-4xl [&>h1]:font-bold
//                       [&>h2]:text-3xl [&>h2]:font-semibold
//                       [&>h3]:text-2xl [&>h3]:font-semibold
//                       [&>h4]:text-xl [&>h4]:font-medium
//                       [&>p]:text-base
//                     "
//                   />
//                 </div>
//               )}

//               {Array.isArray(links) && links.length > 0 && (
//                 <motion.div
//                   className="flex justify-center md:justify-start gap-4 mt-8"
//                   initial="hidden"
//                   animate="visible"
//                   variants={{
//                     visible: {
//                       transition: {
//                         staggerChildren: 0.15,
//                       },
//                     },
//                   }}
//                 >
//                   {links.map(({ link }, i) => {
//                     const backgroundColors = ['#0C2E53', '#D78B22', '#8C4A24', '#1E88E5'] // Add more if needed
//                     const bg = backgroundColors[i % backgroundColors.length]

//                     return (
//                       <motion.div
//                         key={i}
//                         variants={{
//                           hidden: { opacity: 0, x: -100 },
//                           visible: { opacity: 1, x: 0 },
//                         }}
//                         transition={{ type: 'spring', stiffness: 100, damping: 12 }}
//                       >
//                         <div
//                           className="w-32 h-32 flex items-center justify-center rounded-full text-white text-center overflow-hidden"
//                           style={{
//                             backgroundColor: bg,
//                             border: `2px solid ${bg}`,
//                             boxShadow: `0 4px 20px ${bg}66`, // 66 = 40% alpha
//                           }}
//                         >
//                           <CMSLink
//                             {...link}
//                             className="
//                 w-full h-full flex items-center justify-center
//                 rounded-full text-white font-medium text-center
//                 px-2 py-1 leading-tight text-[min(3.2vw,12px)]
//                 whitespace-pre-wrap bg-transparent
//               "
//                           ></CMSLink>
//                         </div>
//                       </motion.div>
//                     )
//                   })}
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)

//   // Set header theme
//   useEffect(() => {
//     setHeaderTheme('dark')
//     setIsLoaded(true)
//   }, [setHeaderTheme])

//   // Enhanced background slideshow with smoother transitions
//   useEffect(() => {
//     if (!Array.isArray(media) || media.length < 2) return
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % media.length)
//     }, 6000) // Slightly longer for better viewing
//     return () => clearInterval(interval)
//   }, [media])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut",
//         staggerChildren: 0.3
//       }
//     }
//   }

//   const contentVariants = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//       scale: 0.95
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 1,
//         ease: [0.25, 0.46, 0.45, 0.94]
//       }
//     }
//   }

//   const linkContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.8
//       }
//     }
//   }

//   const linkVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0,
//       rotate: -180,
//       y: 50
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//         mass: 1
//       }
//     },
//     hover: {
//       scale: 1.15,
//       rotate: 5,
//       y: -8,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     },
//     tap: {
//       scale: 0.95,
//       rotate: -2
//     }
//   }

//   const backgroundVariants = {
//     enter: {
//       opacity: 0,
//       scale: 1.1,
//       filter: "blur(4px)"
//     },
//     center: {
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//       transition: {
//         duration: 2,
//         ease: "easeOut"
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       filter: "blur(4px)",
//       transition: {
//         duration: 1.5,
//         ease: "easeIn"
//       }
//     }
//   }

//   return (
//     <motion.div
//       className="relative min-h-[100vh] flex items-center justify-start text-white overflow-hidden"
//       data-theme="dark"
//       initial="hidden"
//       animate={isLoaded ? "visible" : "hidden"}
//       variants={containerVariants}
//     >
//       {/* Enhanced Background image carousel with better animations */}
//       <AnimatePresence mode="wait">
//         {Array.isArray(media) && media.length > 0 && (
//           <motion.div
//             key={currentImageIndex}
//             className="absolute inset-0"
//             variants={backgroundVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//           >
//             <Media
//               resource={media[currentImageIndex]?.image}
//               imgClassName="object-cover w-full h-full"
//               fill
//               priority={currentImageIndex === 0}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Enhanced overlay with gradient and animated particles */}
//       <div className="absolute inset-0 z-[1]">
//         {/* Main overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

//         {/* Animated gradient overlay */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
//           animate={{
//             background: [
//               "linear-gradient(45deg, rgba(30, 58, 138, 0.2) 0%, transparent 50%, rgba(88, 28, 135, 0.2) 100%)",
//               "linear-gradient(225deg, rgba(88, 28, 135, 0.2) 0%, transparent 50%, rgba(30, 58, 138, 0.2) 100%)",
//               "linear-gradient(45deg, rgba(30, 58, 138, 0.2) 0%, transparent 50%, rgba(88, 28, 135, 0.2) 100%)"
//             ]
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         />

//         {/* Floating particles */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full"
//             style={{
//               left: `${20 + i * 15}%`,
//               top: `${30 + i * 10}%`,
//             }}
//             animate={{
//               y: [-20, 20, -20],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1]
//             }}
//             transition={{
//               duration: 4 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.5
//             }}
//           />
//         ))}
//       </div>

//       {/* Enhanced foreground content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
//         <motion.div
//           className="pt-32 pb-20 md:pt-40 md:pb-44"
//           variants={contentVariants}
//         >
//           <div className="max-w-4xl mx-auto md:max-w-none">
//             {/* Content Section */}
//             <motion.div
//               className="text-center md:text-left max-w-4xl"
//               variants={contentVariants}
//             >
//               {richText && (
//                 <motion.div
//                   className="prose prose-xl prose-invert max-w-none mb-12"
//                   variants={contentVariants}
//                 >
//                   <RichText
//                     data={richText}
//                     enableGutter={false}
//                     className="
//                       [&>h1]:text-5xl [&>h1]:md:text-7xl [&>h1]:font-black [&>h1]:leading-tight [&>h1]:mb-6
//                       [&>h1]:bg-gradient-to-r [&>h1]:from-white [&>h1]:via-blue-100 [&>h1]:to-white
//                       [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h1]:drop-shadow-2xl
//                       [&>h2]:text-4xl [&>h2]:md:text-5xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:mb-5
//                       [&>h2]:text-blue-100 [&>h2]:drop-shadow-lg
//                       [&>h3]:text-3xl [&>h3]:md:text-4xl [&>h3]:font-bold [&>h3]:leading-snug [&>h3]:mb-4
//                       [&>h3]:text-blue-200 [&>h3]:drop-shadow-md
//                       [&>h4]:text-2xl [&>h4]:md:text-3xl [&>h4]:font-semibold [&>h4]:mb-3 [&>h4]:text-blue-200
//                       [&>p]:text-xl [&>p]:md:text-2xl [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-blue-50/90
//                       [&>p]:drop-shadow-sm [&>p]:font-light
//                     "
//                   />
//                 </motion.div>
//               )}

//               {/* Enhanced Links Section */}
//               {Array.isArray(links) && links.length > 0 && (
//                 <motion.div
//                   className="flex flex-wrap justify-center md:justify-start gap-6 mt-12"
//                   variants={linkContainerVariants}
//                 >
//                   {links.map(({ link }, i) => {
//                     const gradients = [
//                       'from-blue-600 via-blue-700 to-blue-800',
//                       'from-amber-500 via-orange-600 to-red-600',
//                       'from-emerald-500 via-teal-600 to-cyan-600',
//                       'from-purple-600 via-violet-700 to-indigo-800',
//                       'from-rose-500 via-pink-600 to-purple-600',
//                       'from-green-500 via-emerald-600 to-teal-700'
//                     ]
//                     const gradient = gradients[i % gradients.length]

//                     return (
//                       <motion.div
//                         key={i}
//                         variants={linkVariants}
//                         whileHover="hover"
//                         whileTap="tap"
//                         className="relative group"
//                       >
//                         {/* Glow effect */}
//                         <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110`} />

//                         {/* Main button */}
//                         <div className={`
//                           relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center
//                           rounded-full text-white text-center overflow-hidden
//                           bg-gradient-to-br ${gradient}
//                           border-2 border-white/20 backdrop-blur-sm
//                           shadow-2xl group-hover:shadow-3xl
//                           transition-all duration-300
//                         `}>
//                           {/* Inner glow */}
//                           <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />

//                           {/* Shine effect */}
//                           <motion.div
//                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
//                             animate={{
//                               x: ['-100%', '200%']
//                             }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               repeatDelay: 2,
//                               ease: "easeInOut"
//                             }}
//                           />

//                           <CMSLink
//                             {...link}
//                             className="
//                               relative z-10 w-full h-full flex items-center justify-center
//                               rounded-full text-white font-bold text-center
//                               px-4 py-2 leading-tight text-sm md:text-base
//                               whitespace-pre-wrap bg-transparent
//                               transition-transform duration-200
//                               group-hover:scale-105
//                             "
//                           />
//                         </div>

//                         {/* Ripple effect on hover */}
//                         <motion.div
//                           className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0`}
//                           animate={{
//                             scale: [1, 1.5, 2],
//                             opacity: [0, 0.3, 0]
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             repeatDelay: 2
//                           }}
//                         />
//                       </motion.div>
//                     )
//                   })}
//                 </motion.div>
//               )}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <motion.div
//           className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
//           animate={{
//             borderColor: ['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.5)']
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <motion.div
//             className="w-1 h-3 bg-white/70 rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// 'use client'

// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence, easeIn, easeOut, easeInOut, Variants } from 'framer-motion'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)

//   /* ───────────────────────── HEADER THEME & SLIDESHOW ─────────────────────── */

//   useEffect(() => {
//     setHeaderTheme('dark')
//     setIsLoaded(true)
//   }, [setHeaderTheme])

//   useEffect(() => {
//     if (!Array.isArray(media) || media.length < 2) return
//     const id = setInterval(() => setCurrentImageIndex((i) => (i + 1) % media.length), 6000)
//     return () => clearInterval(id)
//   }, [media])

//   /* ─────────────────────────── ANIMATION VARIANTS ─────────────────────────── */

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: easeOut,
//         staggerChildren: 0.3,
//       },
//     },
//   }

//   const contentVariants: Variants = {
//     hidden: { opacity: 0, y: 60, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 1,
//         ease: [0.25, 0.46, 0.45, 0.94], // cubic‑bezier
//       },
//     },
//   }

//   const linkContainerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.8 },
//     },
//   }

//   const linkVariants: Variants = {
//     hidden: { opacity: 0, scale: 0, rotate: -180, y: 50 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       y: 0,
//       transition: { type: 'spring', stiffness: 200, damping: 15, mass: 1 },
//     },
//     hover: {
//       scale: 1.15,
//       rotate: 5,
//       y: -8,
//       transition: { type: 'spring', stiffness: 400, damping: 10 },
//     },
//     tap: { scale: 0.95, rotate: -2 },
//   }

//   const backgroundVariants: Variants = {
//     enter: { opacity: 0, scale: 1.1, filter: 'blur(4px)' },
//     center: {
//       opacity: 1,
//       scale: 1,
//       filter: 'blur(0px)',
//       transition: { duration: 2, ease: easeOut },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.9,
//       filter: 'blur(4px)',
//       transition: { duration: 1.5, ease: easeIn },
//     },
//   }

//   /* ────────────────────────────── RENDER ──────────────────────────────────── */

//   return (
//     <motion.div
//       className="relative min-h-[100vh] flex items-center justify-start text-white overflow-hidden"
//       data-theme="dark"
//       initial="hidden"
//       animate={isLoaded ? 'visible' : 'hidden'}
//       variants={containerVariants}
//     >
//       {/* ────────── Background carousel ────────── */}
//       <AnimatePresence mode="wait">
//         {Array.isArray(media) && media.length > 0 && (
//           <motion.div
//             key={currentImageIndex}
//             className="absolute inset-0"
//             variants={backgroundVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//           >
//             <Media
//               resource={media[currentImageIndex]?.image}
//               imgClassName="object-cover w-full h-full"
//               fill
//               priority={currentImageIndex === 0}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ────────── Overlays & particles ────────── */}
//       <div className="absolute inset-0 z-[1]">
//         {/* darkening overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

//         {/* animated tint overlay */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
//           animate={{
//             background: [
//               'linear-gradient(45deg, rgba(30, 58, 138, 0.2) 0%, transparent 50%, rgba(88, 28, 135, 0.2) 100%)',
//               'linear-gradient(225deg, rgba(88, 28, 135, 0.2) 0%, transparent 50%, rgba(30, 58, 138, 0.2) 100%)',
//               'linear-gradient(45deg, rgba(30, 58, 138, 0.2) 0%, transparent 50%, rgba(88, 28, 135, 0.2) 100%)',
//             ],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
//         />

//         {/* floating particles */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full"
//             style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
//             animate={{
//               y: [-20, 20, -20],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 4 + i,
//               repeat: Infinity,
//               ease: easeInOut,
//               delay: i * 0.5,
//             }}
//           />
//         ))}
//       </div>

//       {/* ────────── Foreground content ────────── */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
//         <motion.div className="pt-32 pb-20 md:pt-40 md:pb-44" variants={contentVariants}>
//           <div className="max-w-4xl mx-auto md:max-w-none">
//             <motion.div className="text-center md:text-left max-w-4xl" variants={contentVariants}>
//               {richText && (
//                 <motion.div
//                   className="prose prose-xl prose-invert max-w-none mb-12"
//                   variants={contentVariants}
//                 >
//                   <RichText
//                     data={richText}
//                     enableGutter={false}
//                     className="
//                       [&>h1]:text-5xl [&>h1]:md:text-7xl [&>h1]:font-black [&>h1]:leading-tight [&>h1]:mb-6
//                       [&>h1]:bg-gradient-to-r [&>h1]:from-white [&>h1]:via-blue-100 [&>h1]:to-white
//                       [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h1]:drop-shadow-2xl
//                       [&>h2]:text-4xl [&>h2]:md:text-5xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:mb-5
//                       [&>h2]:text-blue-100 [&>h2]:drop-shadow-lg
//                       [&>h3]:text-3xl [&>h3]:md:text-4xl [&>h3]:font-bold [&>h3]:leading-snug [&>h3]:mb-4
//                       [&>h3]:text-blue-200 [&>h3]:drop-shadow-md
//                       [&>h4]:text-2xl [&>h4]:md:text-3xl [&>h4]:font-semibold [&>h4]:mb-3 [&>h4]:text-blue-200
//                       [&>p]:text-xl [&>p]:md:text-2xl [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-blue-50/90
//                       [&>p]:drop-shadow-sm [&>p]:font-light
//                     "
//                   />
//                 </motion.div>
//               )}

//               {Array.isArray(links) && links.length > 0 && (
//                 <motion.div
//                   className="flex flex-wrap justify-center md:justify-start gap-6 mt-12"
//                   variants={linkContainerVariants}
//                 >
//                   {links.map(({ link }, i) => {
//                     const gradients = [
//                       'from-blue-600 via-blue-700 to-blue-800',
//                       'from-amber-500 via-orange-600 to-red-600',
//                       'from-emerald-500 via-teal-600 to-cyan-600',
//                       'from-purple-600 via-violet-700 to-indigo-800',
//                       'from-rose-500 via-pink-600 to-purple-600',
//                       'from-green-500 via-emerald-600 to-teal-700',
//                     ]
//                     const gradient = gradients[i % gradients.length]

//                     return (
//                       <motion.div
//                         key={i}
//                         variants={linkVariants}
//                         whileHover="hover"
//                         whileTap="tap"
//                         className="relative group"
//                       >
//                         {/* glow */}
//                         <div
//                           className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-110`}
//                         />

//                         {/* main button */}
//                         <div
//                           className={`
//                             relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center
//                             rounded-full text-white text-center overflow-hidden
//                             bg-gradient-to-br ${gradient}
//                             border-2 border-white/20 backdrop-blur-sm
//                             shadow-2xl group-hover:shadow-3xl
//                             transition-all duration-300
//                           `}
//                         >
//                           {/* inner glow */}
//                           <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />

//                           {/* moving shine */}
//                           <motion.div
//                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
//                             animate={{ x: ['-100%', '200%'] }}
//                             transition={{
//                               duration: 3,
//                               repeat: Infinity,
//                               repeatDelay: 2,
//                               ease: easeInOut,
//                             }}
//                           />

//                           <CMSLink
//                             {...link}
//                             className="
//                               relative z-10 w-full h-full flex items-center justify-center
//                               rounded-full text-white font-bold text-center
//                               px-4 py-2 leading-tight text-sm md:text-base
//                               whitespace-pre-wrap bg-transparent
//                               transition-transform duration-200
//                               group-hover:scale-105
//                             "
//                           />
//                         </div>

//                         {/* ripple */}
//                         <motion.div
//                           className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-0`}
//                           animate={{
//                             scale: [1, 1.5, 2],
//                             opacity: [0, 0.3, 0],
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             repeatDelay: 2,
//                           }}
//                         />
//                       </motion.div>
//                     )
//                   })}
//                 </motion.div>
//               )}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* ────────── Scroll indicator ────────── */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <motion.div
//           className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
//           animate={{
//             borderColor: [
//               'rgba(255,255,255,0.5)',
//               'rgba(255,255,255,0.8)',
//               'rgba(255,255,255,0.5)',
//             ],
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <motion.div
//             className="w-1 h-3 bg-white/70 rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const [idx, setIdx] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  /* ───────────── Lifecycle ───────────── */
  useEffect(() => {
    setHeaderTheme('dark')
    setIsLoaded(true)
  }, [setHeaderTheme])

  useEffect(() => {
    if (!Array.isArray(media) || media.length < 2) return
    const id = setInterval(() => setIdx((i) => (i + 1) % media.length), 6000)
    return () => clearInterval(id)
  }, [media])

  /* ───────────── Variants ───────────── */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: [0.42, 0, 1, 1], staggerChildren: 0.3 },
    },
  }

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const linkContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.8 },
    },
  }

  const linkVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -180, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15, mass: 1 },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      y: -8,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95, rotate: -2 },
  }

  const bgVariants: Variants = {
    enter: { opacity: 0, scale: 1.1, filter: 'blur(4px)' },
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 2, ease: [0.42, 0, 1, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(4px)',
      transition: { duration: 1.5, ease: [0.42, 0, 1, 1] },
    },
  }

  /* ───────────── Render ───────────── */
  return (
    <motion.div
      className="relative min-h-[100vh] flex items-center justify-start text-white overflow-hidden"
      data-theme="dark"
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Background slideshow */}
      <AnimatePresence mode="wait">
        {Array.isArray(media) && media.length > 0 && (
          <motion.div
            key={idx}
            className="absolute inset-0"
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Media
              resource={media[idx]?.image}
              imgClassName="object-cover w-full h-full"
              fill
              priority={idx === 0}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(30,58,138,.2) 0%, transparent 50%, rgba(88,28,135,.2) 100%)',
              'linear-gradient(225deg, rgba(88,28,135,.2) 0%, transparent 50%, rgba(30,58,138,.2) 100%)',
              'linear-gradient(45deg, rgba(30,58,138,.2) 0%, transparent 50%, rgba(88,28,135,.2) 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div className="pt-32 pb-20 md:pt-40 md:pb-44" variants={contentVariants}>
          <div className="max-w-4xl mx-auto md:max-w-none">
            <motion.div className="text-center md:text-left max-w-4xl" variants={contentVariants}>
              {richText && (
                <motion.div
                  className="prose prose-xl prose-invert max-w-none mb-12"
                  variants={contentVariants}
                >
                  <RichText
                    data={richText}
                    enableGutter={false}
                    className="
                      [&>h1]:text-5xl [&>h1]:md:text-7xl [&>h1]:font-black [&>h1]:leading-tight [&>h1]:mb-6
                      [&>h1]:bg-gradient-to-r [&>h1]:from-white [&>h1]:via-blue-100 [&>h1]:to-white
                      [&>h1]:bg-clip-text [&>h1]:text-transparent [&>h1]:drop-shadow-2xl
                      [&>p]:text-xl [&>p]:md:text-2xl [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-blue-50/90
                    "
                  />
                </motion.div>
              )}

              {Array.isArray(links) && links.length > 0 && (
                <motion.div
                  className="flex flex-wrap justify-center md:justify-start gap-6 mt-12"
                  variants={linkContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {links.map(({ link }, i) => {
                    const colors = [
                      '#0C2E53',
                      '#D78B22',
                      '#0C2E53',
                      '#D78B22',
                      '#0C2E53',
                      '#D78B22',
                    ]
                    const color = colors[i % colors.length]

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.3,
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group cursor-pointer"
                      >
                        {/* Circle button with solid color */}
                        <div
                          className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center 
              rounded-full overflow-hidden border-2 border-white/20 
              shadow-xl group-hover:shadow-2xl transition-all duration-300"
                          style={{ backgroundColor: color }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/20 -skew-x-12"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatDelay: 2,
                              ease: 'easeInOut',
                            }}
                          />
                          <CMSLink
                            {...link}
                            className="
                relative z-10 w-full h-full flex items-center justify-center
                rounded-full text-white font-bold text-center text-sm md:text-base
                px-4 py-2 whitespace-pre-wrap bg-transparent transition-transform duration-200
                group-hover:scale-105 no-underline hover:no-underline
              "
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{
            borderColor: [
              'rgba(255,255,255,0.5)',
              'rgba(255,255,255,0.8)',
              'rgba(255,255,255,0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
