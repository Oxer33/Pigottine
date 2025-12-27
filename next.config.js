/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ottimizzazione immagini
  images: {
    unoptimized: true,
  },
  
  // Trailing slash per URL puliti
  trailingSlash: true,
  
  // Disabilita i controlli ESLint durante la build (opzionale)
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
