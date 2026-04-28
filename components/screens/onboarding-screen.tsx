'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface UserProfile {
  id: string
  name: string
  email: string
  schultyp?: string
  selected_faecher?: string[]
  xp: number
  streak: number
  quizzes_done: number
}

interface OnboardingScreenProps {
  user: UserProfile
  onComplete: (user: UserProfile) => void
}

const SCHULTYPEN = [
  { id: 'HTL', emoji: '⚙️', name: 'HTL', desc: 'Höhere Technische Lehranstalt' },
  { id: 'HAK', emoji: '📊', name: 'HAK', desc: 'Handelsakademie' },
]

const FAECHER_HTL = [
  { id: 'mathe', emoji: '📐', name: 'Mathematik' },
  { id: 'physik', emoji: '⚛️', name: 'Physik' },
  { id: 'info', emoji: '💻', name: 'Informatik' },
  { id: 'etech', emoji: '⚡', name: 'Elektrotechnik' },
]

const FAECHER_HAK = [
  { id: 'rewe', emoji: '📒', name: 'Rechnungswesen' },
  { id: 'bwl', emoji: '🏢', name: 'Betriebswirtschaft' },
  { id: 'vwl', emoji: '📈', name: 'Volkswirtschaft' },
  { id: 'marketing', emoji: '📣', name: 'Marketing' },
]

const SHARED_FAECHER = [
  { id: 'deutsch', emoji: '📝', name: 'Deutsch' },
  { id: 'englisch', emoji: '🇬🇧', name: 'Englisch' },
]

export default function OnboardingScreen({ user, onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(0)
  const [selectedSchultyp, setSelectedSchultyp] = useState<string | null>(null)
  const [selectedFaecher, setSelectedFaecher] = useState<string[]>([])

  const handleSchultypSelect = (schultyp: string) => {
    setSelectedSchultyp(schultyp)
    setStep(1)
    setSelectedFaecher([])
  }

  const toggleFach = (fachId: string) => {
    setSelectedFaecher((prev) =>
      prev.includes(fachId) ? prev.filter((f) => f !== fachId) : [...prev, fachId]
    )
  }

  const handleComplete = () => {
    if (selectedFaecher.length >= 2) {
      onComplete({
        ...user,
        schultyp: selectedSchultyp || '',
        selected_faecher: selectedFaecher,
      })
    }
  }

  const faecher =
    selectedSchultyp === 'HTL'
      ? [...FAECHER_HTL, ...SHARED_FAECHER]
      : [...FAECHER_HAK, ...SHARED_FAECHER]

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {step === 0 ? (
          <div>
            <h1 className="text-4xl font-bold mb-2">Welche Schule? 🎓</h1>
            <p className="text-slate-400 mb-8">Wir passen deine Inhalte an deine Schulart an.</p>

            {/* Progress Indicator */}
            <div className="flex gap-2 mb-8">
              <motion.div
                className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full"
                layoutId="progress"
              />
              <div className="h-1 flex-1 bg-slate-700 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCHULTYPEN.map((schultyp, idx) => (
                <motion.button
                  key={schultyp.id}
                  onClick={() => handleSchultypSelect(schultyp.id)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-slate-800/40 backdrop-blur border-2 border-slate-700/50 rounded-lg hover:border-blue-500/50 hover:bg-slate-800/60 transition-all"
                >
                  <motion.div
                    className="text-5xl mb-3 inline-block"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {schultyp.emoji}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-1">{schultyp.name}</h3>
                  <p className="text-sm text-slate-400">{schultyp.desc}</p>
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setStep(0)}
              className="text-slate-400 hover:text-blue-400 mb-6 flex items-center gap-2 transition-colors"
            >
              ← Zurück
            </button>

            <h1 className="text-4xl font-bold mb-2">Deine Fächer 📚</h1>
            <p className="text-slate-400 mb-8">Wähle mindestens 2 Fächer aus.</p>

            {/* Progress Indicator */}
            <div className="flex gap-2 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full" />
              <motion.div
                className={`h-1 flex-1 rounded-full transition-all ${
                  selectedFaecher.length >= 2
                    ? 'bg-gradient-to-r from-blue-500 to-red-500'
                    : 'bg-slate-700'
                }`}
                layoutId="progress"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {faecher.map((fach, idx) => (
                <motion.button
                  key={fach.id}
                  onClick={() => toggleFach(fach.id)}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedFaecher.includes(fach.id)
                      ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-500/20'
                      : 'bg-slate-800/40 border-slate-700 hover:border-blue-400/50 backdrop-blur'
                  }`}
                >
                  <div className="text-3xl mb-2">{fach.emoji}</div>
                  <p className="text-sm font-semibold">{fach.name}</p>
                </motion.button>
              ))}
            </div>

            {/* Info Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 p-4 bg-slate-800/30 backdrop-blur border border-blue-500/30 rounded-lg text-center"
            >
              <p className="text-sm text-slate-300">
                {selectedFaecher.length}/2+ Fächer ausgewählt
              </p>
            </motion.div>

            <motion.button
              onClick={handleComplete}
              disabled={selectedFaecher.length < 2}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all"
            >
              Los geht&apos;s 🚀 ({selectedFaecher.length}/2+)
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
