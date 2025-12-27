/**
 * ============================================
 * NAVBAR COMPONENT - Le Pigottine di Vivina
 * ============================================
 * Navigation bar sticky con effetto blur glassmorphism
 * Responsive con menu hamburger per mobile
 */

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

// ============================================
// COMPONENT
// ============================================
export function Navbar() {
  // State per menu mobile e scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Rileva scroll per cambiare stile navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Chiudi menu mobile quando si clicca un link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Previeni scroll quando menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* ============================================
          NAVBAR PRINCIPALE
          ============================================ */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300 ease-out',
          isScrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* ============================================
                LOGO
                ============================================ */}
            <a
              href="#home"
              className="flex items-center gap-2 group"
              aria-label="Torna alla home"
            >
              {/* Logo icon stilizzato */}
              <div className="relative w-10 h-10">
                <div className={cn(
                  'absolute inset-0 rounded-full',
                  'bg-gradient-to-br from-rosa-300 to-salmone-400',
                  'transition-transform duration-300 group-hover:scale-110'
                )} />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                  V
                </span>
              </div>
              
              {/* Nome brand */}
              <div className="hidden sm:block">
                <span className={cn(
                  'font-bold text-lg',
                  isScrolled 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-900 dark:text-white'
                )}>
                  Le Pigottine
                </span>
                <span className={cn(
                  'block text-xs font-medium -mt-1',
                  'text-rosa-500'
                )}>
                  di Vivina
                </span>
              </div>
            </a>

            {/* ============================================
                NAVIGATION LINKS - DESKTOP
                ============================================ */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-full',
                      'text-sm font-medium',
                      'transition-all duration-200',
                      isScrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-rosa-600 dark:hover:text-rosa-400 hover:bg-rosa-50 dark:hover:bg-rosa-950'
                        : 'text-gray-700 dark:text-gray-300 hover:text-rosa-600 dark:hover:text-rosa-400 hover:bg-white/50 dark:hover:bg-black/20'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ============================================
                CTA BUTTON - DESKTOP
                ============================================ */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contatti"
                className={cn(
                  'px-5 py-2.5 rounded-full',
                  'bg-gradient-to-r from-rosa-400 to-salmone-400',
                  'text-white text-sm font-semibold',
                  'shadow-lg shadow-rosa-400/30',
                  'transition-all duration-300',
                  'hover:shadow-xl hover:shadow-rosa-400/40 hover:scale-105'
                )}
              >
                Contattami
              </a>
            </div>

            {/* ============================================
                HAMBURGER BUTTON - MOBILE
                ============================================ */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg',
                'transition-colors duration-200',
                isScrolled
                  ? 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-gray-900 dark:text-white hover:bg-white/50 dark:hover:bg-black/20'
              )}
              aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ============================================
          MOBILE MENU OVERLAY
          ============================================ */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 w-[80%] max-w-sm',
                'bg-white dark:bg-gray-950',
                'shadow-2xl z-50 lg:hidden',
                'flex flex-col'
              )}
            >
              {/* Header menu mobile */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                <span className="font-bold text-lg text-gray-900 dark:text-white">
                  Menu
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Chiudi menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links menu mobile */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={handleLinkClick}
                        className={cn(
                          'block px-4 py-3 rounded-xl',
                          'text-gray-700 dark:text-gray-300 font-medium',
                          'transition-colors duration-200',
                          'hover:bg-rosa-50 dark:hover:bg-rosa-950 hover:text-rosa-600 dark:hover:text-rosa-400'
                        )}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer menu mobile */}
              <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href="#contatti"
                  onClick={handleLinkClick}
                  className={cn(
                    'block w-full px-6 py-3 rounded-xl text-center',
                    'bg-gradient-to-r from-rosa-400 to-salmone-400',
                    'text-white font-semibold',
                    'shadow-lg shadow-rosa-400/30'
                  )}
                >
                  Contattami
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
