/**
 * ============================================
 * PORTFOLIO SECTION - Le Pigottine di Vivina
 * ============================================
 * Galleria fotografica con filtri e lightbox
 * Design: grid stile Instagram con hover effects
 */

'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'

// ============================================
// GALLERIA IMMAGINI - Configurazione dinamica
// Le immagini vengono caricate dalla cartella public/images/pigottine
// ============================================
const galleryImages = [
  { id: 1, src: '/images/pigottine/pigottina-1.jpg', alt: 'Pigottina rosa con vestito in tulle', category: 'fatine' },
  { id: 2, src: '/images/pigottine/pigottina-2.jpg', alt: 'Coppia di pigottine gemelle rosa', category: 'fatine' },
  { id: 3, src: '/images/pigottine/pigottina-3.jpg', alt: 'Pigottina elegante con tema stelle', category: 'eleganti' },
  { id: 4, src: '/images/pigottine/pigottina-4.jpg', alt: 'Pigottina marrone con gonna lunga', category: 'eleganti' },
  { id: 5, src: '/images/pigottine/pigottina-5.jpg', alt: 'Pigottina con fiocco rosa', category: 'romantiche' },
  { id: 6, src: '/images/pigottine/pigottina-6.jpg', alt: 'Pigottina con ali di farfalla', category: 'fatine' },
  { id: 7, src: '/images/pigottine/pigottina-7.jpg', alt: 'Pigottina romantica con tulle', category: 'romantiche' },
  { id: 8, src: '/images/pigottine/pigottina-8.jpg', alt: 'Pigottina shabby chic', category: 'shabby' },
  { id: 9, src: '/images/pigottine/pigottina-9.jpg', alt: 'Pigottina con base in legno naturale', category: 'eleganti' },
  { id: 10, src: '/images/pigottine/pigottina-10.jpg', alt: 'Pigottina delicata con fiori', category: 'romantiche' },
  { id: 11, src: '/images/pigottine/pigottina-11.jpg', alt: 'Pigottina artigianale dettagliata', category: 'fatine' },
]

// ============================================
// ANIMATION VARIANTS
// ============================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
}

// ============================================
// COMPONENT
// ============================================
export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  
  // State per filtri e lightbox
  const [activeCategory, setActiveCategory] = useState('tutte')
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  // Filtra immagini per categoria
  const filteredImages = activeCategory === 'tutte'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  // Navigazione lightbox
  const currentIndex = lightboxImage !== null 
    ? filteredImages.findIndex(img => img.id === lightboxImage) 
    : -1

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return
    
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    
    setLightboxImage(filteredImages[newIndex].id)
  }

  // Chiudi lightbox con ESC
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setLightboxImage(null)
    if (e.key === 'ArrowRight') navigateLightbox('next')
    if (e.key === 'ArrowLeft') navigateLightbox('prev')
  }

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="portfolio-title"
    >
      <div className="container-custom">
        {/* ============================================
            HEADER SEZIONE
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-rosa-100 dark:bg-rosa-900/30 text-rosa-600 dark:text-rosa-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          
          <h2
            id="portfolio-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Le Mie{' '}
            <span className="bg-gradient-to-r from-rosa-500 to-salmone-500 bg-clip-text text-transparent">
              Creazioni
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ogni <em>pigottina</em> è un pezzo <em>unico</em>, creata con <em>amore</em> e attenzione ai <em>dettagli</em>.
            Scopri la collezione completa.
          </p>
        </motion.div>

        {/* ============================================
            FILTRI CATEGORIE
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium',
                'transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-rosa-400 focus:ring-offset-2',
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-rosa-400 to-salmone-400 text-white shadow-lg shadow-rosa-400/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rosa-50 dark:hover:bg-rosa-900/20'
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* ============================================
            GRIGLIA IMMAGINI
            ============================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(image.id)}
              >
                {/* Immagine */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Overlay hover */}
                <div className={cn(
                  'absolute inset-0',
                  'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300',
                  'flex items-end justify-center pb-4'
                )}>
                  <div className="flex items-center gap-2 text-white">
                    <ZoomIn className="w-5 h-5" />
                    <span className="text-sm font-medium">Ingrandisci</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ============================================
            NOTA PER AGGIUNGERE FOTO
            ============================================ */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
        >
          💡 Per aggiungere nuove foto, carica le immagini nella cartella{' '}
          <code className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
            public/images/pigottine/
          </code>
        </motion.p>
      </div>

      {/* ============================================
          LIGHTBOX
          ============================================ */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Visualizzatore immagini"
          >
            {/* Pulsante chiudi */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigazione precedente */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
              className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Immagine */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find(img => img.id === lightboxImage) && (
                <Image
                  src={filteredImages.find(img => img.id === lightboxImage)!.src}
                  alt={filteredImages.find(img => img.id === lightboxImage)!.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </motion.div>

            {/* Navigazione successiva */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
              className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Contatore */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioSection
