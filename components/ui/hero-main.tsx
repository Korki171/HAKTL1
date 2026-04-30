'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu, X, ShieldCheck, Sparkles, Users, BookOpen } from 'lucide-react'

const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'App', href: '#app' },
    { label: 'Start', href: '#cta' },
]

export function HeroMain() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative overflow-hidden bg-slate-50 text-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_42%),radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.12),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.88))] pointer-events-none" />
            <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                    <Link href="/" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.35em] text-slate-900">
                        <span className="text-red-500">H</span>
                        <span className="text-blue-500">A</span>
                        <span className="text-red-500">K</span>
                        <span className="text-blue-500">T</span>
                        <span className="text-red-500">L</span>
                    </Link>
                    <div className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label="Menü öffnen"
                        onClick={() => setMenuOpen((value) => !value)}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
                {menuOpen ? (
                    <div className="lg:hidden border-t border-slate-200 bg-white/95 px-6 py-4">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href} className="text-base font-medium text-slate-700 hover:text-slate-900">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : null}
            </header>

            <main className="relative">
                <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-24 lg:px-12 lg:pt-32">
                    <div className="grid gap-16 lg:grid-cols-[0.95fr_0.99fr] lg:items-end lg:gap-20">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-slate-700 shadow-sm shadow-slate-200/80">
                                Von Schülern für Schüler
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mt-8 text-[3rem] font-black leading-[0.95] tracking-tight text-slate-950 sm:text-[4.5rem] lg:text-[5rem]"
                            >
                                HAKTL macht Lernen
                                <span className="relative block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-fuchsia-600 to-red-500">
                                    einfach, smart und motivierend.
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="mt-8 max-w-2xl text-lg leading-8 text-slate-700"
                            >
                                Organisiere Noten, Mitschriften und Lerngruppen an einem Ort – mit einer App, die wirklich für den Schulalltag gemacht ist.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-10 flex flex-col gap-4 sm:flex-row"
                            >
                                <Link href="#app" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                                    Jetzt starten
                                    <ArrowRight className="ml-2" />
                                </Link>
                                <Link href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50">
                                    Funktionen ansehen
                                </Link>
                            </motion.div>
                        </div>

                        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_45px_80px_-40px_rgba(15,23,42,0.18)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),_transparent_30%)]" />
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
                                alt="Schüler nutzen HAKTL"
                                className="h-full w-full object-cover mix-blend-multiply opacity-95"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent px-8 py-10 text-white">
                                <div className="max-w-xl">
                                    <p className="text-sm uppercase tracking-[0.35em] text-slate-200">Live im Schulalltag</p>
                                    <h2 className="mt-3 text-3xl font-bold tracking-tight">Von Schülern gebaut, für deine Noten optimiert.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-200 bg-white/90 py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 md:grid-cols-3 md:px-8 md:py-10">
                            {[
                                { icon: ShieldCheck, label: 'Von Schülern entwickelt', description: 'Fokus auf echte Schulprobleme, keine unnötigen Extras.' },
                                { icon: Sparkles, label: 'Einfaches Arbeiten', description: 'Schnell starten, Aufgaben planen und Lernfortschritt verfolgen.' },
                                { icon: Users, label: 'Gemeinsam besser', description: 'Lernstoff teilen, Erfahrungen austauschen, Ziele gemeinsam erreichen.' },
                            ].map((item) => (
                                <div key={item.label} className="space-y-3 rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/80">
                                    <item.icon className="h-8 w-8 text-sky-500" />
                                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                                    <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
