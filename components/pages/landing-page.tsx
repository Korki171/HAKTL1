'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, ClipboardCheck, Lightbulb, Sparkles, ShieldCheck } from 'lucide-react'
import { HeroMain } from '@/components/ui/hero-main'

const coreFeatures = [
    {
        icon: BookOpen,
        title: 'Schnelle Notenplanung',
        description: 'Behalte Gewichtungen und Zielnoten im Blick – direkt im Schulrhythmus.',
    },
    {
        icon: ClipboardCheck,
        title: 'Mitschriften & Zusammenfassungen',
        description: 'Ordne deine Notizen nach Fächern, Klassen und Prüfungen.',
    },
    {
        icon: Lightbulb,
        title: 'Lernziele setzen',
        description: 'Definiere klare Ziele und verfolge deinen Fortschritt jede Woche.',
    },
]

const moreReasons = [
    {
        title: 'Für Schüler entwickelt',
        description: 'Die App ist praktisch, schnell und frei von unnötigem Ballast.',
    },
    {
        title: 'Hinterlegt mit echter Praxis',
        description: 'Funktionen entstanden aus dem Schulalltag in HTL und HAK.',
    },
    {
        title: 'Motivation statt Druck',
        description: 'Zeige deinen Fortschritt klar und feiere kleine Lerngewinne.',
    },
]

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
    return (
        <div className="bg-slate-50 text-slate-900">
            <HeroMain />

            <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
                <div className="mb-12 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Was HAKTL für dich kann</p>
                    <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Alles, was du für den Schulalltag brauchst.</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600">Vom Notenmonitor bis zum Team-Lernplan: eine klare Oberfläche für deinen Lernalltag.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {coreFeatures.map((feature) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70"
                        >
                            <feature.icon className="h-8 w-8 text-blue-500" />
                            <h3 className="mt-6 text-xl font-semibold text-slate-950">{feature.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="app" className="border-t border-slate-200 bg-slate-50 px-6 py-20 lg:px-12">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[0.95fr_0.8fr] lg:items-center lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">App Überblick</p>
                        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Dein Lernort, immer dabei.</h2>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">HAKTL begleitet dich durch jede Woche: Aufgaben, Noten und Lernstoff organisiert an einem Ort.</p>
                        <div className="mt-10 grid gap-4 text-slate-700 sm:grid-cols-2">
                            {moreReasons.map((reason) => (
                                <div key={reason.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                                    <h3 className="font-semibold text-slate-950">{reason.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:px-8 lg:px-10">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-red-500" />
                            <div className="relative">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Live Dashboard</p>
                                <h3 className="mt-4 text-3xl font-black tracking-tight">Übersicht in Sekundenschnelle</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">Noten, Aufgaben und Termine an einem Platz – mit einem Dashboard, das so schnell ist wie dein Unterricht.</p>
                                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                                    <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />Aufgabenstatus, Fachfilter & Priorisierung</li>
                                    <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />Lernfortschritt für jede Prüfung sichtbar</li>
                                    <li className="flex items-start gap-3"><span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />Teamarbeit & Mitschriften teilen</li>
                                </ul>
                                <Link href="#cta" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-slate-600/30 hover:text-slate-100">
                                    Mehr dazu
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                            <div className="pointer-events-none absolute -right-8 top-12 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
                <div className="rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-fuchsia-600 px-8 py-14 text-white shadow-[0_40px_120px_-40px_rgba(59,130,246,0.45)] sm:px-10">
                    <div className="grid gap-8 lg:grid-cols-[0.75fr_0.5fr] lg:items-center lg:gap-16">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100/80">Los geht's</p>
                            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Starte mit HAKTL in eine klarere Schulzeit.</h2>
                            <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100/90">Teste die App kostenlos und sieh selbst, wie Lernen mit Struktur leichter wird.</p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                            <button onClick={onGetStarted} className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-900/10 transition hover:bg-slate-100">
                                Jetzt starten
                            </button>
                            <Link href="#app" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                                Mehr erfahren
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
