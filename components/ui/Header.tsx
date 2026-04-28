"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState<'dark'|'light'>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (typeof window !== 'undefined') localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  return (
    <header className="w-full border-b border-white/10 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="HAKTL" width={40} height={40} className="h-10 w-auto" priority />
          <span className="text-sm text-slate-300">Lern-App</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link href="/" className="text-sm text-slate-300 hover:text-white">Kurse</Link>
          <Link href="/notes" className="text-sm text-slate-300 hover:text-white">Notizen</Link>
          <Link href="/community" className="text-sm text-slate-300 hover:text-white">Community</Link>
          <button onClick={toggleTheme} className="ml-4 px-3 py-1 rounded bg-white/5 text-sm">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
