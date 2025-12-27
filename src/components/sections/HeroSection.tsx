/**
 * ============================================
 * HERO SECTION - Le Pigottine di Vivina
 * ============================================
 * Sezione hero full-screen con immagine di sfondo
 * Effetti: parallax, gradient overlay, animazioni scroll
 */

'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

// ============================================
// COMPONENT
// ============================================
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sezione principale"
    >
      {/* ============================================
          IMMAGINE DI SFONDO CON PARALLAX
          ============================================ */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/pigottine/hero-bg.jpg"
          alt="Pigottine artigianali fatte a mano"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        
        {/* Gradient overlay per leggibilità testo */}
        <div className={cn(
          'absolute inset-0',
          'bg-gradient-to-b from-white/80 via-white/60 to-white/90',
          'dark:from-gray-950/80 dark:via-gray-950/60 dark:to-gray-950/90'
        )} />
        
        {/* Overlay decorativo con pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,168,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(94,234,212,0.2),transparent_50%)]" />
      </motion.div>

      {/* ============================================
          CONTENUTO HERO
          ============================================ */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container-custom text-center px-4"
      >
        {/* Badge decorativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-soft mb-8"
        >
          <Sparkles className="w-4 h-4 text-rosa-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Creazioni <em>artigianali</em> uniche
          </span>
        </motion.div>

        {/* Titolo principale */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={cn(
            'text-hero-sm sm:text-hero-md lg:text-hero-lg',
            'font-bold text-gray-900 dark:text-white',
            'mb-6'
          )}
        >
          <span className="block">Le Pigottine</span>
          <span className="block bg-gradient-to-r from-rosa-500 via-salmone-500 to-acqua-500 bg-clip-text text-transparent">
            di Vivina
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className={cn(
            'text-lg md:text-xl lg:text-2xl',
            'text-gray-600 dark:text-gray-400',
            'max-w-2xl mx-auto mb-10'
          )}
        >
          Piccole opere d&apos;arte <em>fatte a mano</em> con <em>amore</em> e <em>dedizione</em>.
          Ogni <em>pigottina</em> è un pezzo <em>unico</em>, creato per emozionare.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collezione"
            className={cn(
              'px-8 py-4 rounded-full',
              'bg-gradient-to-r from-rosa-400 to-salmone-400',
              'text-white font-semibold text-lg',
              'shadow-lg shadow-rosa-400/30',
              'transition-all duration-300',
              'hover:shadow-xl hover:shadow-rosa-400/40 hover:scale-105 hover:-translate-y-1',
              'focus:outline-none focus:ring-2 focus:ring-rosa-400 focus:ring-offset-2'
            )}
          >
            Scopri la Collezione
          </a>
          
          <a
            href="#chi-sono"
            className={cn(
              'px-8 py-4 rounded-full',
              'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm',
              'border border-gray-200 dark:border-gray-700',
              'text-gray-700 dark:text-gray-300 font-semibold text-lg',
              'transition-all duration-300',
              'hover:bg-white dark:hover:bg-gray-800 hover:border-rosa-300 hover:scale-105',
              'focus:outline-none focus:ring-2 focus:ring-rosa-400 focus:ring-offset-2'
            )}
          >
            Chi Sono
          </a>
        </motion.div>
      </motion.div>

      {/* ============================================
          SCROLL INDICATOR
          ============================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#chi-sono"
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-rosa-500 transition-colors"
          aria-label="Scorri verso il basso"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scorri</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>

      {/* ============================================
          ELEMENTI DECORATIVI FLOATING
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Forma decorativa 1 */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-rosa-200/40 blur-xl"
        />
        
        {/* Forma decorativa 2 */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-acqua-200/40 blur-xl"
        />
        
        {/* Forma decorativa 3 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-salmone-200/40 blur-xl"
        />
      </div>
    </section>
  )
}

export default HeroSection
