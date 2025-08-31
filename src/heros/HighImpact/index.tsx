'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

type Lang = 'en' | 'ar' | 'fr'

type HighImpactHeroProps = Page['hero'] & {
  lang: Lang
}
export const HighImpactHero: React.FC<HighImpactHeroProps> = ({ links, media, richText, lang }) => {
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

  // const linkVariants: Variants = {
  //   hidden: { opacity: 0, scale: 0, rotate: -180, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     rotate: 0,
  //     y: 0,
  //     transition: { type: 'spring', stiffness: 200, damping: 15, mass: 1 },
  //   },
  //   hover: {
  //     scale: 1.15,
  //     rotate: 5,
  //     y: -8,
  //     transition: { type: 'spring', stiffness: 400, damping: 10 },
  //   },
  //   tap: { scale: 0.95, rotate: -2 },
  // }

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
                          className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center 
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
                            lang={lang}
                            {...link}
                            className="
                relative z-10 w-full h-full flex items-center justify-center
                rounded-full text-white font-bold text-center text-[clamp(0.65rem,1vw,1rem)]
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
