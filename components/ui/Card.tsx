import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/5 border border-white/6 rounded-xl p-4 ${className}`}>
      {children}
    </div>
  )
}
