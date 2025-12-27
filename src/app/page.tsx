/**
 * ============================================
 * HOME PAGE - Le Pigottine di Vivina
 * ============================================
 * Pagina principale monopagina con tutte le sezioni
 * Design: ultra-moderno, glassmorphism, animazioni fluide
 */

'use client'

import { Navbar, Footer } from '@/components/layout'
import {
  SplashScreen,
  HeroSection,
  AboutSection,
  PortfolioSection,
  ServicesSection,
  ContactSection,
} from '@/components/sections'

// ============================================
// HOME PAGE COMPONENT
// ============================================
export default function HomePage() {
  return (
    <>
      {/* ============================================
          SPLASH SCREEN - 4 secondi di presentazione
          ============================================ */}
      <SplashScreen />

      {/* ============================================
          NAVIGATION BAR - Sticky con blur effect
          ============================================ */}
      <Navbar />

      {/* ============================================
          CONTENUTO PRINCIPALE
          ============================================ */}
      <main id="main-content">
        {/* Hero Section - Full screen con immagine di sfondo */}
        <HeroSection />

        {/* About Section - Chi è Vivina */}
        <AboutSection />

        {/* Portfolio Section - Galleria delle creazioni */}
        <PortfolioSection />

        {/* Services Section - Servizi offerti */}
        <ServicesSection />

        {/* Contact Section - Contatti e WhatsApp */}
        <ContactSection />
      </main>

      {/* ============================================
          FOOTER - Minimalista con social icons
          ============================================ */}
      <Footer />
    </>
  )
}
