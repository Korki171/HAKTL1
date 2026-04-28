"use client"

import React from 'react'
import tokens from '../../styles/tokens'

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  ariaLabel?: string
  disabled?: boolean
}

export function ShinyButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  ariaLabel,
  disabled = false,
}: ShinyButtonProps) {
  const isPrimary = variant === 'primary'
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2`

  const sizeClass = size === 'sm' ? 'px-3 py-1 text-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2 text-base'

  const variantClass = isPrimary
    ? 'text-white bg-gradient-to-r from-blue-500 to-red-500 shadow-sm hover:opacity-95'
    : 'text-slate-900 bg-white/90 hover:bg-white'

  const disabledClass = disabled ? 'opacity-50 pointer-events-none' : ''

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${base} ${sizeClass} ${variantClass} ${disabledClass} ${className}`}
      style={{ boxShadow: isPrimary ? '0 6px 20px rgba(59,130,246,0.12)' : undefined }}
    >
      <span>{children}</span>
    </button>
  )
}

export default ShinyButton
