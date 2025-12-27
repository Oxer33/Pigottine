/**
 * ============================================
 * SPLASH SCREEN - Le Pigottine di Vivina
 * ============================================
 * Schermata di caricamento iniziale con animazione
 * Durata: 4 secondi come richiesto
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ANIMATION_CONFIG } from '@/lib/constants'

// ============================================
// COMPONENT
// ============================================
export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Timer per iniziare l'animazione di uscita
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, ANIMATION_CONFIG.splash.duration - ANIMATION_CONFIG.splash.fadeOut)

    // Timer per rimuovere completamente lo splash
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, ANIMATION_CONFIG.splash.duration)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={cn(
            'fixed inset-0 z-[100]',
            'flex flex-col items-center justify-center',
            'bg-gradient-to-br from-rosa-50 via-crema-50 to-acqua-50',
            isExiting && 'splash-exit'
          )}
          aria-label="Caricamento in corso"
          role="status"
        >
          {/* ============================================
              PATTERN DI SFONDO DECORATIVO
              ============================================ */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Cerchi decorativi animati */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-rosa-200/30 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-acqua-200/30 blur-3xl"
            />
          </div>

          {/* ============================================
              CONTENUTO CENTRALE
              ============================================ */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animato */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              className="relative mb-8"
            >
              {/* Cerchio esterno con gradiente */}
              <div className={cn(
                'w-32 h-32 rounded-full',
                'bg-gradient-to-br from-rosa-400 via-salmone-400 to-acqua-400',
                'shadow-2xl shadow-rosa-400/40',
                'flex items-center justify-center',
                'animate-pulse-soft'
              )}>
                {/* Lettera V stilizzata */}
                <span className="text-white text-5xl font-bold drop-shadow-lg">
                  V
                </span>
              </div>
              
              {/* Anello decorativo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-rosa-300/50"
                style={{ margin: '-8px' }}
              />
            </motion.div>

            {/* Titolo */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center"
            >
              Le Pigottine
            </motion.h1>

            {/* Sottotitolo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl text-rosa-600 font-medium mb-8"
            >
              di Vivina
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-gray-600 text-sm md:text-base text-center max-w-xs"
            >
              Piccole opere d&apos;arte <em>fatte a mano</em> con amore
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                  className="w-2 h-2 rounded-full bg-rosa-400"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
