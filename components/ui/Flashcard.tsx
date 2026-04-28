"use client"

import React, { useState } from 'react'

interface FlashcardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
}

export default function Flashcard({ front, back, className = '' }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false)

  function toggle() {
    setFlipped(prev => !prev)
  }

  return (
    <div
      className={`w-full max-w-md perspective ${className}`}
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } }}
      aria-pressed={flipped}
    >
      <div className={`relative w-full h-44 transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute inset-0 backface-hidden glass flex items-center justify-center p-4 rounded-lg">
          <div className="text-center">{front}</div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass flex items-center justify-center p-4 rounded-lg">
          <div className="text-center">{back}</div>
        </div>
      </div>
    </div>
  )
}
