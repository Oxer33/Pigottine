/**
 * ============================================
 * SERVICES SECTION - Le Pigottine di Vivina
 * ============================================
 * Sezione servizi con cards glassmorphism
 * Include: personalizzazione, spedizione, regalo, eventi
 */

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palette, Package, Gift, Heart, Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// ============================================
// SERVICES DATA
// ============================================
const services = [
  {
    id: 'personalizzazione',
    icon: Palette,
    title: 'Personalizzazione',
    description: 'Ogni pigottina può essere personalizzata secondo i tuoi desideri. Scegli colori, vestiti e accessori per creare la tua bambola unica.',
    features: [
      'Scelta colori e tessuti',
      'Vestiti su misura',
      'Accessori personalizzati',
      'Nomi ricamati',
    ],
    gradient: 'from-rosa-400 to-pink-400',
    bgGradient: 'from-rosa-50 to-pink-50 dark:from-rosa-950/30 dark:to-pink-950/30',
  },
  {
    id: 'spedizione',
    icon: Package,
    title: 'Spedizione Sicura',
    description: 'Le tue pigottine viaggiano protette con imballaggi speciali. Spediamo in tutta Italia e in Europa con tracking garantito.',
    features: [
      'Imballaggio protettivo',
      'Spedizione tracciata',
      'Consegna in 3-5 giorni',
      'Spedizione in tutta Italia',
    ],
    gradient: 'from-acqua-400 to-teal-400',
    bgGradient: 'from-acqua-50 to-teal-50 dark:from-acqua-950/30 dark:to-teal-950/30',
  },
  {
    id: 'regalo',
    icon: Gift,
    title: 'Confezione Regalo',
    description: 'Rendi il tuo regalo ancora più speciale con la nostra elegante confezione regalo, completa di biglietto personalizzato.',
    features: [
      'Scatola elegante',
      'Carta velina',
      'Nastro decorativo',
      'Biglietto personalizzato',
    ],
    gradient: 'from-salmone-400 to-orange-400',
    bgGradient: 'from-salmone-50 to-orange-50 dark:from-salmone-950/30 dark:to-orange-950/30',
  },
  {
    id: 'eventi',
    icon: Heart,
    title: 'Eventi Speciali',
    description: 'Pigottine per ogni occasione: battesimi, matrimoni, compleanni, nascite. Creazioni speciali per momenti indimenticabili.',
    features: [
      'Bomboniere battesimo',
      'Segnaposto matrimonio',
      'Regali nascita',
      'Decorazioni eventi',
    ],
    gradient: 'from-purple-400 to-violet-400',
    bgGradient: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30',
  },
]

// ============================================
// ANIMATION VARIANTS
// ============================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// ============================================
// COMPONENT
// ============================================
export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="servizi"
      className="relative py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* ============================================
          PATTERN DECORATIVO DI SFONDO
          ============================================ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full rounded-full bg-rosa-100/50 dark:bg-rosa-900/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full rounded-full bg-acqua-100/50 dark:bg-acqua-900/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* ============================================
            HEADER SEZIONE
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-acqua-100 dark:bg-acqua-900/30 text-acqua-600 dark:text-acqua-400 text-sm font-medium mb-4">
            Servizi
          </span>
          
          <h2
            id="services-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Cosa{' '}
            <span className="bg-gradient-to-r from-acqua-500 to-rosa-500 bg-clip-text text-transparent">
              Offro
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dalla <em>personalizzazione</em> alla <em>spedizione</em>, mi prendo cura di ogni dettaglio 
            per offrirti un&apos;esperienza <em>unica</em>.
          </p>
        </motion.div>

        {/* ============================================
            GRID SERVIZI
            ============================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={cn(
                'group relative',
                'p-6 lg:p-8 rounded-3xl',
                'bg-gradient-to-br',
                service.bgGradient,
                'border border-white/50 dark:border-gray-800',
                'transition-all duration-500',
                'hover:shadow-xl hover:-translate-y-1'
              )}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm" />
              
              <div className="relative z-10">
                {/* Header card */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Icona */}
                  <div className={cn(
                    'flex-shrink-0 w-14 h-14 rounded-2xl',
                    'bg-gradient-to-br',
                    service.gradient,
                    'flex items-center justify-center',
                    'shadow-lg',
                    'transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3'
                  )}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Titolo e descrizione */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className={cn(
                        'w-5 h-5 rounded-full flex items-center justify-center',
                        'bg-gradient-to-br',
                        service.gradient
                      )}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contatti"
                  className={cn(
                    'inline-flex items-center gap-2',
                    'text-sm font-semibold',
                    'transition-all duration-300',
                    'group-hover:gap-3'
                  )}
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                >
                  <span className={cn(
                    'bg-gradient-to-r bg-clip-text text-transparent',
                    service.gradient
                  )}>
                    Scopri di più
                  </span>
                  <ArrowRight className={cn(
                    'w-4 h-4 transition-transform duration-300 group-hover:translate-x-1',
                    service.gradient.includes('rosa') ? 'text-rosa-500' :
                    service.gradient.includes('acqua') ? 'text-acqua-500' :
                    service.gradient.includes('salmone') ? 'text-salmone-500' :
                    'text-purple-500'
                  )} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ============================================
            CTA FINALE
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Hai un&apos;idea speciale? Contattami per una <em>creazione su misura</em>!
          </p>
          <a
            href="#contatti"
            className={cn(
              'inline-flex items-center gap-2',
              'px-8 py-4 rounded-full',
              'bg-gradient-to-r from-rosa-400 to-salmone-400',
              'text-white font-semibold',
              'shadow-lg shadow-rosa-400/30',
              'transition-all duration-300',
              'hover:shadow-xl hover:shadow-rosa-400/40 hover:scale-105'
            )}
          >
            Richiedi Informazioni
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
