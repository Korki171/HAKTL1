"use client"

import React from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-slate-900 text-white rounded-lg p-6 max-w-xl w-full z-10">
        <button className="absolute top-3 right-3 text-slate-400" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  )
}
