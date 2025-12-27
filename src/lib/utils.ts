/**
 * ============================================
 * UTILITY FUNCTIONS - Le Pigottine di Vivina
 * ============================================
 * Funzioni di utilità per il progetto
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina classi CSS con clsx e tailwind-merge
 * Risolve conflitti tra classi Tailwind automaticamente
 * 
 * @param inputs - Array di classi CSS
 * @returns Stringa di classi ottimizzate
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Array di parole chiave da evidenziare in corsivo
 * Queste parole verranno automaticamente stilizzate nel testo
 */
export const KEYWORDS = [
  // Termini tecnici artigianato
  'artigianale',
  'artigianali',
  'fatto a mano',
  'fatte a mano',
  'handmade',
  'cucito',
  'stoffa',
  'tessuto',
  'tulle',
  'cotone',
  'lino',
  'seta',
  
  // Termini specifici pigottine
  'pigottina',
  'pigottine',
  'bambola',
  'bambole',
  'doll',
  'dolls',
  
  // Qualità e caratteristiche
  'unico',
  'unica',
  'originale',
  'esclusivo',
  'esclusiva',
  'personalizzato',
  'personalizzata',
  'su misura',
  
  // Emozioni e valori
  'amore',
  'passione',
  'dedizione',
  'cura',
  'dettaglio',
  'dettagli',
  'qualità',
  'eleganza',
  'delicatezza',
  
  // Stili e temi
  'romantico',
  'vintage',
  'shabby chic',
  'country',
  'boho',
  'fairy',
  'fatina',
  'angelo',
  'angeli',
]

/**
 * Evidenzia le parole chiave nel testo con tag <em>
 * 
 * @param text - Testo da processare
 * @returns Testo con parole chiave in corsivo
 */
export function highlightKeywords(text: string): string {
  let result = text
  
  KEYWORDS.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'gi')
    result = result.replace(regex, '<em>$1</em>')
  })
  
  return result
}

/**
 * Formatta un numero con separatore delle migliaia
 * 
 * @param num - Numero da formattare
 * @returns Stringa formattata
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('it-IT').format(num)
}

/**
 * Genera un ID univoco
 * 
 * @returns ID univoco
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Delay asincrono
 * 
 * @param ms - Millisecondi di attesa
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Verifica se siamo lato client
 */
export const isClient = typeof window !== 'undefined'

/**
 * Verifica se l'utente preferisce animazioni ridotte
 */
export function prefersReducedMotion(): boolean {
  if (!isClient) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Smooth scroll a un elemento
 * 
 * @param elementId - ID dell'elemento target
 */
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
