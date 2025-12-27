/**
 * ============================================
 * ABOUT SECTION - Le Pigottine di Vivina
 * ============================================
 * Sezione "Chi Sono" con layout asimmetrico
 * Split-screen: immagine a sinistra, testo a destra
 */

'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Heart, Star, Award, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

// ============================================
// FEATURES DATA
// ============================================
const features = [
  {
    icon: Heart,
    title: 'Passione Artigianale',
    description: 'Ogni pigottina nasce da ore di lavoro meticoloso e amore per il dettaglio.',
  },
  {
    icon: Star,
    title: 'Pezzi Unici',
    description: 'Non esistono due pigottine identiche, ognuna ha la sua personalità.',
  },
  {
    icon: Award,
    title: 'Materiali Pregiati',
    description: 'Solo tessuti di alta qualità per creazioni destinate a durare nel tempo.',
  },
  {
    icon: Sparkles,
    title: 'Cura dei Dettagli',
    description: 'Dai capelli agli accessori, ogni elemento è curato con precisione.',
  },
]

// ============================================
// ANIMATION VARIANTS
// ============================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// ============================================
// COMPONENT
// ============================================
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="chi-sono"
      className="relative py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* ============================================
          PATTERN DECORATIVO DI SFONDO
          ============================================ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rosa-50/50 to-transparent dark:from-rosa-950/20" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-acqua-50/50 to-transparent dark:from-acqua-950/20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ============================================
              COLONNA SINISTRA - IMMAGINE
              ============================================ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Contenitore immagine con effetti */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Immagine principale */}
              <Image
                src="/images/pigottine/about-vivina.jpg"
                alt="Vivina mentre crea una pigottina artigianale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Card flottante decorativa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={cn(
                'absolute -bottom-6 -right-6 lg:-right-10',
                'bg-white dark:bg-gray-900',
                'rounded-2xl shadow-soft-lg',
                'p-6',
                'max-w-[200px]'
              )}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-rosa-100 dark:bg-rosa-900/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rosa-500" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">15+</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Anni di <em>passione</em> per l&apos;artigianato
              </p>
            </motion.div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br from-rosa-300 to-salmone-300 opacity-60 blur-2xl" />
          </motion.div>

          {/* ============================================
              COLONNA DESTRA - TESTO E FEATURES
              ============================================ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-rosa-100 dark:bg-rosa-900/30 text-rosa-600 dark:text-rosa-400 text-sm font-medium">
                Chi Sono
              </span>
            </motion.div>

            {/* Titolo */}
            <motion.h2
              id="about-title"
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Ciao, sono{' '}
              <span className="bg-gradient-to-r from-rosa-500 to-salmone-500 bg-clip-text text-transparent">
                Vivina
              </span>
            </motion.h2>

            {/* Descrizione */}
            <motion.div variants={itemVariants} className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p className="text-lg">
                Da oltre 15 anni creo <em>pigottine artigianali</em>, 
                trasformando stoffa e fantasia in piccole opere d&apos;arte <em>uniche</em>.
              </p>
              <p>
                Ogni creazione nasce dalla mia <em>passione</em> per il <em>cucito</em> e 
                dall&apos;amore per i <em>dettagli</em>. Utilizzo solo materiali di alta <em>qualità</em>: 
                <em>tulle</em>, <em>cotone</em>, <em>lino</em> e tessuti pregiati che rendono 
                ogni <em>pigottina</em> speciale.
              </p>
              <p>
                Il mio obiettivo è creare emozioni attraverso queste piccole bambole 
                <em>decorative</em>, perfette come <em>regalo</em> per occasioni speciali 
                o per arricchire la tua casa con un tocco di <em>eleganza artigianale</em>.
              </p>
            </motion.div>

            {/* Features grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className={cn(
                    'flex items-start gap-3 p-4',
                    'rounded-xl',
                    'bg-gray-50 dark:bg-gray-900/50',
                    'border border-gray-100 dark:border-gray-800',
                    'transition-all duration-300',
                    'hover:bg-white dark:hover:bg-gray-900',
                    'hover:shadow-soft hover:border-rosa-200 dark:hover:border-rosa-800'
                  )}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-rosa-100 to-salmone-100 dark:from-rosa-900/50 dark:to-salmone-900/50 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-rosa-600 dark:text-rosa-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
