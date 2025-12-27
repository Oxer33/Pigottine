/**
 * ============================================
 * CONTACT SECTION - Le Pigottine di Vivina
 * ============================================
 * Sezione contatti minimalista
 * Include: numero WhatsApp come richiesto
 */

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

// ============================================
// COMPONENT
// ============================================
export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="contatti"
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      aria-labelledby="contact-title"
    >
      {/* ============================================
          PATTERN DECORATIVO
          ============================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-rosa-200/30 dark:bg-rosa-800/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-acqua-200/30 dark:bg-acqua-800/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
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
            Contatti
          </span>
          
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Parliamo della Tua{' '}
            <span className="bg-gradient-to-r from-rosa-500 to-salmone-500 bg-clip-text text-transparent">
              Pigottina
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hai un&apos;idea per una creazione <em>personalizzata</em>? 
            Vuoi saperne di più sui miei lavori? Contattami!
          </p>
        </motion.div>

        {/* ============================================
            CONTENUTO PRINCIPALE
            ============================================ */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              'relative p-8 md:p-12 rounded-3xl',
              'bg-white dark:bg-gray-900',
              'border border-gray-100 dark:border-gray-800',
              'shadow-soft-lg'
            )}
          >
            {/* ============================================
                WHATSAPP - CONTATTO PRINCIPALE
                ============================================ */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                <MessageCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Scrivimi su WhatsApp
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Il modo più veloce per contattarmi è tramite WhatsApp.
                <br />Rispondo solitamente entro poche ore!
              </p>
              
              {/* Numero WhatsApp grande */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-3',
                  'px-8 py-4 rounded-2xl',
                  'bg-gradient-to-r from-green-500 to-green-600',
                  'text-white text-xl md:text-2xl font-bold',
                  'shadow-lg shadow-green-500/30',
                  'transition-all duration-300',
                  'hover:shadow-xl hover:shadow-green-500/40 hover:scale-105'
                )}
              >
                <Phone className="w-6 h-6" />
                {SITE_CONFIG.phone}
              </a>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Clicca per aprire WhatsApp direttamente
              </p>
            </div>

            {/* ============================================
                DIVIDER
                ============================================ */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white dark:bg-gray-900 text-sm text-gray-500 dark:text-gray-400">
                  oppure seguimi sui social
                </span>
              </div>
            </div>

            {/* ============================================
                SOCIAL LINKS
                ============================================ */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Instagram */}
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-3',
                  'px-6 py-3 rounded-xl',
                  'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
                  'text-white font-medium',
                  'transition-all duration-300',
                  'hover:shadow-lg hover:scale-105'
                )}
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              
              {/* Facebook */}
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-3',
                  'px-6 py-3 rounded-xl',
                  'bg-blue-600',
                  'text-white font-medium',
                  'transition-all duration-300',
                  'hover:bg-blue-700 hover:shadow-lg hover:scale-105'
                )}
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>

            {/* ============================================
                INFO AGGIUNTIVE
                ============================================ */}
            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rosa-100 dark:bg-rosa-900/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-rosa-600 dark:text-rosa-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-gray-900 dark:text-white font-medium hover:text-rosa-600 dark:hover:text-rosa-400 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                
                {/* Località */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-acqua-100 dark:bg-acqua-900/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-acqua-600 dark:text-acqua-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Località</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {SITE_CONFIG.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================
              NOTA FINALE
              ============================================ */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
          >
            Ogni <em>pigottina</em> è realizzata con <em>cura</em> e <em>amore</em>. 
            I tempi di realizzazione possono variare in base alla complessità del progetto.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
