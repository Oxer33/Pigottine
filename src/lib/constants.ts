/**
 * ============================================
 * CONSTANTS - Le Pigottine di Vivina
 * ============================================
 * Costanti globali del progetto
 */

// ============================================
// INFORMAZIONI AZIENDALI
// ============================================
export const SITE_CONFIG = {
  name: 'Le Pigottine di Vivina',
  shortName: 'Pigottine di Vivina',
  description: 'Bambole artigianali fatte a mano con amore e dedizione',
  tagline: 'Piccole opere d\'arte create con il cuore',
  url: 'https://www.vivina.pigottine.com',
  email: 'info@vivina.pigottine.com',
  phone: '+39 333 1234567', // Numero da personalizzare
  whatsapp: '+39 333 1234567', // Numero da personalizzare
  address: {
    city: 'Italia',
    country: 'IT',
  },
  social: {
    instagram: 'https://www.instagram.com/pigottinedivivina',
    facebook: 'https://www.facebook.com/pigottinedivivina',
    pinterest: 'https://www.pinterest.it/pigottinedivivina',
  },
}

// ============================================
// NAVIGAZIONE
// ============================================
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#chi-sono', label: 'Chi Sono' },
  { href: '#collezione', label: 'Collezione' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#blog', label: 'Blog' },
  { href: '#contatti', label: 'Contatti' },
]

// ============================================
// SERVIZI OFFERTI
// ============================================
export const SERVICES = [
  {
    id: 'personalizzazione',
    title: 'Personalizzazione',
    description: 'Ogni pigottina può essere personalizzata secondo i tuoi desideri. Scegli colori, vestiti e accessori per creare la tua bambola unica.',
    icon: 'Palette',
    features: [
      'Scelta colori e tessuti',
      'Vestiti su misura',
      'Accessori personalizzati',
      'Nomi ricamati',
    ],
  },
  {
    id: 'spedizione',
    title: 'Spedizione Sicura',
    description: 'Le tue pigottine viaggiano protette con imballaggi speciali. Spediamo in tutta Italia e in Europa con tracking garantito.',
    icon: 'Package',
    features: [
      'Imballaggio protettivo',
      'Spedizione tracciata',
      'Consegna in 3-5 giorni',
      'Spedizione in tutta Italia',
    ],
  },
  {
    id: 'regalo',
    title: 'Confezione Regalo',
    description: 'Rendi il tuo regalo ancora più speciale con la nostra elegante confezione regalo, completa di biglietto personalizzato.',
    icon: 'Gift',
    features: [
      'Scatola elegante',
      'Carta velina',
      'Nastro decorativo',
      'Biglietto personalizzato',
    ],
  },
  {
    id: 'eventi',
    title: 'Eventi Speciali',
    description: 'Pigottine per ogni occasione: battesimi, matrimoni, compleanni, nascite. Creazioni speciali per momenti indimenticabili.',
    icon: 'Heart',
    features: [
      'Bomboniere battesimo',
      'Segnaposto matrimonio',
      'Regali nascita',
      'Decorazioni eventi',
    ],
  },
]

// ============================================
// GALLERIA IMMAGINI
// ============================================
export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/pigottine/pigottina-1.jpg',
    alt: 'Pigottina rosa con vestito in tulle',
    category: 'fatine',
  },
  {
    id: 2,
    src: '/images/pigottine/pigottina-2.jpg',
    alt: 'Coppia di pigottine gemelle',
    category: 'fatine',
  },
  {
    id: 3,
    src: '/images/pigottine/pigottina-3.jpg',
    alt: 'Pigottina con tema stelle',
    category: 'tematiche',
  },
  {
    id: 4,
    src: '/images/pigottine/pigottina-4.jpg',
    alt: 'Pigottina elegante marrone',
    category: 'eleganti',
  },
  {
    id: 5,
    src: '/images/pigottine/pigottina-5.jpg',
    alt: 'Pigottina con fiori',
    category: 'romantiche',
  },
  {
    id: 6,
    src: '/images/pigottine/pigottina-6.jpg',
    alt: 'Pigottina con ali di farfalla',
    category: 'fatine',
  },
  {
    id: 7,
    src: '/images/pigottine/pigottina-7.jpg',
    alt: 'Pigottina country style',
    category: 'country',
  },
  {
    id: 8,
    src: '/images/pigottine/pigottina-8.jpg',
    alt: 'Pigottina shabby chic',
    category: 'shabby',
  },
  {
    id: 9,
    src: '/images/pigottine/pigottina-9.jpg',
    alt: 'Pigottina romantica',
    category: 'romantiche',
  },
  {
    id: 10,
    src: '/images/pigottine/pigottina-10.jpg',
    alt: 'Pigottina con cuori',
    category: 'romantiche',
  },
  {
    id: 11,
    src: '/images/pigottine/pigottina-11.jpg',
    alt: 'Pigottina con base in legno',
    category: 'eleganti',
  },
]

// ============================================
// CATEGORIE PORTFOLIO
// ============================================
export const PORTFOLIO_CATEGORIES = [
  { id: 'tutte', label: 'Tutte' },
  { id: 'fatine', label: 'Fatine' },
  { id: 'romantiche', label: 'Romantiche' },
  { id: 'eleganti', label: 'Eleganti' },
  { id: 'tematiche', label: 'Tematiche' },
  { id: 'country', label: 'Country' },
  { id: 'shabby', label: 'Shabby Chic' },
]

// ============================================
// BLOG POSTS (esempio)
// ============================================
export const BLOG_POSTS = [
  {
    id: 'come-nascono-pigottine',
    title: 'Come Nascono le Pigottine',
    excerpt: 'Scopri il processo creativo dietro ogni pigottina, dalla scelta dei tessuti alla cucitura finale.',
    coverImage: '/images/blog/processo-creativo.jpg',
    date: '2024-12-15',
    readTime: 5,
    tags: ['processo', 'artigianato', 'tutorial'],
  },
  {
    id: 'scegliere-regalo-perfetto',
    title: 'Come Scegliere il Regalo Perfetto',
    excerpt: 'Consigli per scegliere la pigottina giusta per ogni occasione e personalità.',
    coverImage: '/images/blog/regalo-perfetto.jpg',
    date: '2024-12-10',
    readTime: 4,
    tags: ['regali', 'consigli', 'occasioni'],
  },
  {
    id: 'cura-pigottine',
    title: 'Come Prendersi Cura delle Pigottine',
    excerpt: 'Guida completa per mantenere le tue pigottine sempre belle e in perfetto stato.',
    coverImage: '/images/blog/cura-pigottine.jpg',
    date: '2024-12-05',
    readTime: 3,
    tags: ['cura', 'manutenzione', 'consigli'],
  },
]

// ============================================
// ANIMAZIONI TIMING
// ============================================
export const ANIMATION_CONFIG = {
  splash: {
    duration: 4000, // 4 secondi
    fadeOut: 800,
  },
  scroll: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  },
  stagger: {
    children: 0.1,
    section: 0.2,
  },
}

// ============================================
// BREAKPOINTS (sync with Tailwind)
// ============================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
