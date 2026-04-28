'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUp, BookOpen, Users, TrendingUp, Zap, Award, Globe, ChevronDown } from 'lucide-react'
import { PrismaHero } from '@/components/ui/prisma-hero'

const productHighlights = [
  {
    num: '01',
    title: 'Lernstand in Echtzeit',
    text: 'Du siehst auf einen Blick, welche Fächer stabil laufen und wo du gezielt nachschärfen solltest.',
  },
  {
    num: '02',
    title: 'Alles an einem Ort',
    text: 'Noten, Mitschriften und wichtige Themen sind zentral organisiert statt auf mehreren Apps verteilt.',
  },
  {
    num: '03',
    title: 'Lernen mit Struktur',
    text: 'HAKTL hilft dir, aus spontanem Lernen eine klare Routine mit Fokus auf deine Ziele zu machen.',
  },
]

const aboutValues = [
  {
    title: 'Von Schülern gedacht',
    text: 'Wir kennen den Schulalltag in HTL und HAK aus erster Hand und bauen Funktionen, die wirklich im Alltag helfen.',
  },
  {
    title: 'Klar statt kompliziert',
    text: 'Weniger Klicks, weniger Chaos: Die Plattform bleibt bewusst simpel, schnell und direkt nutzbar.',
  },
  {
    title: 'Gemeinsam besser',
    text: 'Neben Tools fördern wir Austausch in der Community, damit Wissen nicht isoliert bleibt.',
  },
]

const quickLinks = [
  { label: 'Features', href: 'features' },
  { label: 'App', href: 'app' },
  { label: 'Schulen', href: 'schools' },
  { label: 'Über uns', href: 'about' },
  { label: 'FAQ', href: 'faq' },
]

const faqItems = [
  {
    question: 'Ist HAKTL wirklich kostenlos?',
    answer: 'Ja. Die Kernfunktionen sind dauerhaft kostenlos nutzbar, ohne versteckte Gebühren.',
  },
  {
    question: 'Für wen ist die App gedacht?',
    answer: 'HAKTL richtet sich speziell an Schüler aus HTL und HAK in Österreich.',
  },
  {
    question: 'Welche Funktionen bekomme ich sofort?',
    answer: 'Direkt nach dem Start hast du Zugriff auf Notenrechner, Mitschriften und Community-Bereiche.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
}

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  const [faqQuery, setFaqQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<string | null>(faqItems[0]?.question ?? null)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const filteredFaqItems = useMemo(() => {
    const normalizedQuery = faqQuery.trim().toLowerCase()
    if (!normalizedQuery) return faqItems

    return faqItems.filter((item) => {
      const question = item.question.toLowerCase()
      const answer = item.answer.toLowerCase()

      return question.includes(normalizedQuery) || answer.includes(normalizedQuery)
    })
  }, [faqQuery])

  return (
    <div
      className="w-full bg-black text-white"
      style={{ backgroundColor: '#000', color: '#fff' }}
    >

      {/* HERO */}
      <section className="relative w-full">
        <PrismaHero />
      </section>

      <div className="sticky top-0 z-40 border-y border-white/10 bg-black/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex gap-2 overflow-x-auto landing-scrollbar">
          {quickLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="shrink-0 font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/15 text-white/50 hover:text-white/80 hover:border-white/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label={`${link.label} öffnen`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      {/* FEATURES */}
      <section id="features" className="relative bg-black">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="border-t border-white/10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-4 uppercase">
              01 / Features
            </p>
            <h2 className="font-mono text-4xl lg:text-6xl font-bold leading-none tracking-tight">
              ALLES, WAS DU<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                BRAUCHST.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
          >
            {[
              { icon: TrendingUp, num: '01', title: 'Notenrechner', desc: 'Berechne deine Noten mit Gewichtung — immer wissen wo du stehst.' },
              { icon: BookOpen, num: '02', title: 'Mitschriften Editor', desc: 'Organisiere deine Notizen nach Fächern — schnell und übersichtlich.' },
              { icon: Users, num: '03', title: 'Community', desc: 'Tausche dich mit anderen Schülern aus — gib und erhalte Hilfe.' },
              { icon: Zap, num: '04', title: 'Blitzschnell', desc: 'Responsive Design — perfekt auf Handy, Tablet und Desktop.' },
              { icon: Award, num: '05', title: 'Premium Content', desc: 'Exklusives Lernmaterial speziell für HTL & HAK.' },
              { icon: Globe, num: '06', title: 'Überall Verfügbar', desc: 'Lerne wann und wo du willst — völlig kostenlos.' },
            ].map((feature) => (
              <motion.div
                key={feature.num}
                variants={fadeInUp}
                className="group relative bg-black p-8 lg:p-10 hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
              >
                <span className="font-mono text-[10px] text-white/20 tracking-widest mb-6 block">{feature.num}</span>
                <div className="mb-6">
                  <feature.icon size={20} className="text-white/40 group-hover:text-white/80 transition-colors duration-300" />
                </div>
                <h3 className="font-mono text-sm font-bold tracking-wider mb-3 uppercase">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed font-mono">{feature.desc}</p>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/0 group-hover:border-white/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section id="schools" className="relative bg-black border-t border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-4 uppercase">02 / Schulen</p>
            <h2 className="font-mono text-4xl lg:text-6xl font-bold leading-none tracking-tight">
              SPEZIALISIERT<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>AUF DICH.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 mb-px"
          >
            {[
              {
                code: 'HTL', emoji: '⚙', name: 'Höhere Technische Lehranstalt',
                subjects: ['Mathematik', 'Physik', 'Informatik', 'Elektrotechnik'],
                desc: 'Für technisch interessierte Schüler — mit Fokus auf Naturwissenschaften und Engineering.',
              },
              {
                code: 'HAK', emoji: '◈', name: 'Handelsakademie',
                subjects: ['Rechnungswesen', 'BWL', 'VWL', 'Marketing'],
                desc: 'Für wirtschaftlich interessierte Schüler — mit Fokus auf Business und Management.',
              },
            ].map((school) => (
              <motion.div
                key={school.code}
                variants={fadeInUp}
                className="bg-black p-8 lg:p-10 border border-white/5 group hover:border-white/15 hover:bg-white/[0.02] transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-4xl lg:text-6xl font-black text-white/10 group-hover:text-white/15 transition-colors">
                    {school.code}
                  </span>
                  <span className="text-xl text-white/20">{school.emoji}</span>
                </div>
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E1E0CC' }}>{school.name}</h3>
                <p className="font-mono text-xs text-white/40 leading-relaxed mb-6">{school.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {school.subjects.map((s) => (
                    <span key={s} className="font-mono text-[9px] tracking-wider px-2 py-1 border border-white/10 text-white/35 uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-4"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase whitespace-nowrap">Beiden gemeinsam</span>
            <div className="h-px w-8 bg-white/10 hidden lg:block" />
            <div className="flex gap-3 flex-wrap">
              {['📝 Deutsch', '🇬🇧 Englisch'].map((s) => (
                <span key={s} className="font-mono text-[10px] px-3 py-1.5 border border-white/15 text-white/40 uppercase">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT THE APP DOES */}
      <section id="app" className="relative bg-black border-t border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14"
          >
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-4 uppercase">03 / Was die App macht</p>
              <h2 className="font-mono text-4xl lg:text-6xl font-bold leading-none tracking-tight mb-6">
                EIN SYSTEM<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                  FÜR DEIN LERNEN.
                </span>
              </h2>
              <p className="font-mono text-sm text-white/45 leading-relaxed max-w-xl">
                HAKTL ist dein digitaler Lern-Workspace für HTL & HAK: Noten im Griff behalten, Wissen strukturieren und
                mit anderen effizient zusammenarbeiten.
              </p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-6 lg:p-8">
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase mb-4">In 1 Minute erklärt</p>
              <ul className="space-y-3">
                {[
                  'Du planst pro Fach deine Lernschritte statt nur kurzfristig für Tests.',
                  'Du dokumentierst Fortschritt und erkennst Muster in deiner Leistung.',
                  'Du nutzt Community-Wissen, wenn du bei Themen festhängst.',
                ].map((item) => (
                  <li key={item} className="font-mono text-xs text-white/55 leading-relaxed flex gap-3">
                    <span className="text-white/35">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
          >
            {productHighlights.map((item) => (
              <motion.div key={item.num} variants={fadeInUp} className="bg-black p-8 lg:p-10 hover:bg-white/[0.02] transition-colors">
                <span className="font-mono text-[10px] text-white/25 tracking-widest mb-5 block">{item.num}</span>
                <h3 className="font-mono text-sm font-bold tracking-wider mb-3 uppercase text-white/80">{item.title}</h3>
                <p className="font-mono text-sm text-white/45 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative bg-black border-t border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-4 uppercase">04 / Über uns</p>
            <h2 className="font-mono text-4xl lg:text-6xl font-bold leading-none tracking-tight mb-6">
              WARUM ES<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                HAKTL GIBT.
              </span>
            </h2>
            <p className="font-mono text-sm text-white/45 leading-relaxed max-w-3xl">
              Unsere Mission ist einfach: Schülern in Österreich ein modernes Werkzeug zu geben, das Lernen messbar,
              übersichtlich und motivierend macht — ohne Paywall-Druck und ohne unnötige Komplexität.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 mb-px"
          >
            {aboutValues.map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="bg-black p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors">
                <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-white/60 mb-4">{item.title}</h3>
                <p className="font-mono text-sm text-white/45 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10"
          >
            {[
              { stat: '1000+', label: 'Aktive Schüler', sub: 'und wächst täglich' },
              { stat: '50k+', label: 'Lernstunden', sub: 'protokolliert' },
              { stat: '15', label: 'Fächer', sub: 'verfügbar' },
              { stat: '100%', label: 'Kostenlos', sub: 'keine versteckten Kosten' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeInUp} className="bg-black p-8 lg:p-12 group">
                <div className="font-mono text-4xl lg:text-5xl font-black mb-3 text-white group-hover:text-white/80 transition-colors">
                  {item.stat}
                </div>
                <div className="font-mono text-xs font-bold tracking-widest uppercase text-white/50 mb-1">{item.label}</div>
                <div className="font-mono text-[10px] text-white/20">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-black border-t border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-4 uppercase">05 / FAQ</p>
            <h2 className="font-mono text-3xl lg:text-5xl font-bold leading-none tracking-tight">
              HÄUFIGE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>FRAGEN.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <label htmlFor="faq-search" className="sr-only">FAQ durchsuchen</label>
            <input
              id="faq-search"
              type="text"
              value={faqQuery}
              onChange={(event) => setFaqQuery(event.target.value)}
              placeholder="Frage oder Begriff suchen ..."
              className="w-full lg:w-[28rem] bg-black border border-white/20 px-4 py-3 font-mono text-xs tracking-wide text-white/75 placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="FAQ durchsuchen"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10"
          >
            {filteredFaqItems.map((item) => {
              const isOpen = expandedFaq === item.question
              const answerId = `faq-answer-${item.question
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')}`

              return (
                <motion.div key={item.question} variants={fadeInUp} className="bg-black p-8 lg:p-10">
                  <button
                    onClick={() => setExpandedFaq((current) => (current === item.question ? null : item.question))}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-white/70 group-hover:text-white/90 transition-colors">
                      {item.question}
                    </h3>
                    <ChevronDown
                      size={16}
                      className={`text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <p id={answerId} className="font-mono text-sm text-white/45 leading-relaxed mt-4">
                      {item.answer}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {filteredFaqItems.length === 0 && (
            <div className="mt-6 border border-white/10 bg-white/[0.02] p-5 font-mono text-xs text-white/45">
              Keine FAQ-Treffer für „{faqQuery}“. Versuche einen allgemeineren Begriff.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black border-t border-white/10">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
          <div className="absolute top-12 left-6 lg:left-12 w-6 h-6 border-t border-l border-white/20" />
          <div className="absolute top-12 right-6 lg:right-12 w-6 h-6 border-t border-r border-white/20" />
          <div className="absolute bottom-12 left-6 lg:left-12 w-6 h-6 border-b border-l border-white/20" />
          <div className="absolute bottom-12 right-6 lg:right-12 w-6 h-6 border-b border-r border-white/20" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 mb-6 uppercase">06 / Start</p>
            <h2 className="font-mono text-4xl lg:text-7xl font-black leading-none tracking-tight mb-8">
              BEREIT ZUM<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
                DURCHSTARTEN?
              </span>
            </h2>
            <p className="font-mono text-sm text-white/40 mb-12 max-w-lg mx-auto leading-relaxed">
              Starte kostenlos und verbessere deine Schulnoten — ohne versteckte Kosten, ohne Risiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={onGetStarted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Jetzt anmelden"
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black font-mono text-sm font-bold tracking-wider hover:bg-white/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                JETZT ANMELDEN
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('app')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Mehr über die App erfahren"
                className="inline-flex items-center gap-3 px-8 py-3.5 border border-white/20 text-white/60 font-mono text-sm tracking-wider hover:border-white/40 hover:text-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                MEHR ERFAHREN
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="font-mono text-lg font-black mb-3 tracking-widest">
                <span className="text-blue-400">H</span><span className="text-red-400">AK</span><span className="text-blue-400">TL</span>
              </div>
              <p className="font-mono text-[11px] text-white/30 leading-relaxed">
                Die Premium Lernplattform<br />für Österreichs Schüler.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-4">Navigation</p>
              <div className="space-y-2">
                {[
                  { label: 'Features', href: '#features' },
                  { label: 'Was die App macht', href: '#app' },
                  { label: 'Schulen', href: '#schools' },
                  { label: 'Über uns', href: '#about' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault()
                      scrollToSection(link.href.replace('#', ''))
                    }}
                    className="block font-mono text-xs text-white/40 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-4">Kontakt</p>
              <div className="space-y-2 font-mono text-xs text-white/40">
                <p>info@haktl.at</p>
                <p>+43 XXX XXXXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-white/20">© 2026 HAKTL. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-white/20">SYSTEM.ONLINE · V1.0.0</span>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection('features')}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-3 py-2 border border-white/20 bg-black/80 text-white/70 font-mono text-[10px] tracking-wider hover:text-white hover:border-white/40 transition-colors backdrop-blur-sm"
        aria-label="Nach oben zu den Features"
      >
        <ArrowUp size={13} />
        TOP
      </button>
    </div>
  )
}
