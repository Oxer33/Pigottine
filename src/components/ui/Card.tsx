/**
 * ============================================
 * CARD COMPONENT - Le Pigottine di Vivina
 * ============================================
 * Card moderna con effetto glassmorphism
 * Supporta hover effects e varianti
 */

'use client'

import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ============================================
// TYPES
// ============================================
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Variante visiva */
  variant?: 'default' | 'glass' | 'elevated' | 'outline'
  /** Abilita hover effect */
  hoverable?: boolean
  /** Padding interno */
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

// ============================================
// STYLE VARIANTS
// ============================================
const variants = {
  default: `
    bg-white dark:bg-gray-900
    border border-gray-100 dark:border-gray-800
  `,
  glass: `
    bg-white/70 dark:bg-black/30
    backdrop-blur-xl
    border border-white/20 dark:border-white/10
  `,
  elevated: `
    bg-white dark:bg-gray-900
    shadow-soft
  `,
  outline: `
    bg-transparent
    border-2 border-gray-200 dark:border-gray-700
  `,
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const hoverStyles = `
  transition-all duration-300 ease-out
  hover:shadow-soft-lg
  hover:-translate-y-1
  hover:border-rosa-200 dark:hover:border-rosa-400/30
  cursor-pointer
`

// ============================================
// COMPONENT
// ============================================
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hoverable = false,
      padding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-2xl',
          // Variant styles
          variants[variant],
          // Padding styles
          paddings[padding],
          // Hover styles (conditional)
          hoverable && hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// ============================================
// SUB-COMPONENTS
// ============================================

/** Header della card */
export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-4', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

/** Titolo della card */
export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-xl font-bold text-gray-900 dark:text-white',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

/** Descrizione della card */
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-gray-600 dark:text-gray-400 mt-1',
      className
    )}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

/** Contenuto principale della card */
export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

/** Footer della card */
export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-4 pt-4 border-t border-gray-100 dark:border-gray-800', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export default Card
