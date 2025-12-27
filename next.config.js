/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurazione per output statico (necessario per AWS Amplify)
  output: 'export',
  
  // Ottimizzazione immagini - disabilitata per export statico
  images: {
    unoptimized: true,
  },
  
  // Trailing slash per compatibilità hosting statico
  trailingSlash: true,
  
  // Disabilita i controlli ESLint durante la build (opzionale)
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
