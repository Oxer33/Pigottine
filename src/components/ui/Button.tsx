/**
 * ============================================
 * BUTTON COMPONENT - Le Pigottine di Vivina
 * ============================================
 * Pulsante riutilizzabile con varianti moderne
 * Supporta: primary, secondary, ghost, outline
 */

'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ============================================
// TYPES
// ============================================
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visiva del pulsante */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  /** Dimensione del pulsante */
  size?: 'sm' | 'md' | 'lg'
  /** Mostra stato di caricamento */
  isLoading?: boolean
  /** Icona a sinistra */
  leftIcon?: React.ReactNode
  /** Icona a destra */
  rightIcon?: React.ReactNode
}

// ============================================
// STYLE VARIANTS
// ============================================
const variants = {
  primary: `
    bg-gradient-to-r from-rosa-400 to-salmone-400
    text-white font-semibold
    shadow-lg shadow-rosa-400/30
    hover:shadow-xl hover:shadow-rosa-400/40
    hover:scale-105 hover:-translate-y-0.5
    active:scale-95
    focus:ring-rosa-400
  `,
  secondary: `
    bg-white/80 dark:bg-white/10
    border border-rosa-200 dark:border-rosa-400/30
    text-rosa-600 dark:text-rosa-400 font-semibold
    backdrop-blur-sm
    hover:bg-rosa-50 dark:hover:bg-rosa-400/10
    hover:border-rosa-300
    hover:scale-105
    active:scale-95
    focus:ring-rosa-400
  `,
  ghost: `
    bg-transparent
    text-gray-700 dark:text-gray-300 font-medium
    hover:bg-gray-100 dark:hover:bg-gray-800
    hover:text-rosa-600 dark:hover:text-rosa-400
    active:scale-95
    focus:ring-gray-400
  `,
  outline: `
    bg-transparent
    border-2 border-rosa-400
    text-rosa-600 dark:text-rosa-400 font-semibold
    hover:bg-rosa-400 hover:text-white
    active:scale-95
    focus:ring-rosa-400
  `,
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-2xl gap-2.5',
}

// ============================================
// COMPONENT
// ============================================
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'transition-all duration-300 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
          // Variant styles
          variants[variant],
          // Size styles
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Loading spinner */}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {/* Left icon */}
        {!isLoading && leftIcon && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}
        
        {/* Button text */}
        <span>{children}</span>
        
        {/* Right icon */}
        {rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
