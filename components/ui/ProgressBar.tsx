import React from 'react'

interface ProgressBarProps {
  value: number
  max?: number
  className?: string
}

export default function ProgressBar({ value, max = 100, className = '' }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)))
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-white/6 rounded-full h-3 overflow-hidden">
        <div className="h-3 bg-gradient-to-r from-blue-500 to-red-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="text-xs text-slate-400 mt-1">{pct}%</div>
    </div>
  )
}
