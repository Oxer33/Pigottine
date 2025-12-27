/**
 * ============================================
 * ROOT LAYOUT - Le Pigottine di Vivina
 * ============================================
 * Layout principale dell'applicazione Next.js
 * Include meta tags SEO, font loading, e struttura base
 */

import type { Metadata, Viewport } from 'next'
import './globals.css'

// ============================================
// METADATA SEO
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL('https://www.vivina.pigottine.com'),
  title: 'Le Pigottine di Vivina | Bambole Artigianali Fatte a Mano',
  description: 'Scopri le Pigottine di Vivina: bambole artigianali uniche, create a mano con amore e dedizione. Ogni pigottina è un\'opera d\'arte unica, perfetta come regalo speciale o per la tua collezione.',
  keywords: [
    'pigottine',
    'bambole artigianali',
    'bambole fatte a mano',
    'handmade dolls',
    'artigianato italiano',
    'regalo unico',
    'bambole decorative',
    'Vivina',
    'creazioni artigianali'
  ],
  authors: [{ name: 'Vivina' }],
  creator: 'Le Pigottine di Vivina',
  publisher: 'Le Pigottine di Vivina',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.vivina.pigottine.com',
    siteName: 'Le Pigottine di Vivina',
    title: 'Le Pigottine di Vivina | Bambole Artigianali Fatte a Mano',
    description: 'Scopri le Pigottine di Vivina: bambole artigianali uniche, create a mano con amore e dedizione.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Pigottine di Vivina - Bambole Artigianali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Pigottine di Vivina | Bambole Artigianali',
    description: 'Bambole artigianali uniche, create a mano con amore.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

// ============================================
// VIEWPORT CONFIGURATION
// ============================================
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdf2f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Preconnect per performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org markup per SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Le Pigottine di Vivina',
              description: 'Bambole artigianali fatte a mano con amore e dedizione',
              url: 'https://www.vivina.pigottine.com',
              image: '/images/og-image.jpg',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IT',
              },
              sameAs: [
                'https://www.instagram.com/pigottinedivivina',
                'https://www.facebook.com/pigottinedivivina',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-crema-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Skip link per accessibilità */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-rosa-500 text-white px-4 py-2 rounded-lg z-[100]"
        >
          Salta al contenuto principale
        </a>
        
        {children}
      </body>
    </html>
  )
}
