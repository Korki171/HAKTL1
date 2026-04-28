'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, BookOpen, Calculator, Users, LogOut, Menu, X, Sparkles } from 'lucide-react'
import NotesScreen from './notes-screen'
import CalculatorScreen from './calculator-screen'
import CommunityScreen from './community-screen'
import AITutorScreen from './ai-tutor-screen'

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

interface AppScreenProps {
  user: UserProfile
  onLogout: () => void
}

const FAECHER_ALL = [
  { id: 'mathe', emoji: '📐', name: 'Mathematik' },
  { id: 'physik', emoji: '⚛️', name: 'Physik' },
  { id: 'info', emoji: '💻', name: 'Informatik' },
  { id: 'etech', emoji: '⚡', name: 'Elektrotechnik' },
  { id: 'rewe', emoji: '📒', name: 'Rechnungswesen' },
  { id: 'bwl', emoji: '🏢', name: 'Betriebswirtschaft' },
  { id: 'vwl', emoji: '📈', name: 'Volkswirtschaft' },
  { id: 'marketing', emoji: '📣', name: 'Marketing' },
  { id: 'deutsch', emoji: '📝', name: 'Deutsch' },
  { id: 'englisch', emoji: '🇬🇧', name: 'Englisch' },
]

export default function AppScreen({ user, onLogout }: AppScreenProps) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const stats = [
    { label: '⚡ XP Punkte', value: user.xp },
    { label: '🔥 Lern-Streak', value: user.streak },
    { label: '✅ Quizzes', value: user.quizzes_done },
    { label: '🏆 Rang', value: '1.' },
  ]

  const userFaecher = FAECHER_ALL.filter((f) => user.selected_faecher?.includes(f.id))

  const quickActions = [
    { icon: '🎯', label: 'Zufälliges Quiz', desc: 'Aus allen deinen Fächern' },
    { icon: '📝', label: 'Mitschriften', desc: 'Notizen erstellen', tab: 'notes' },
    { icon: '🧮', label: 'Notenrechner', desc: 'Noten berechnen', tab: 'calculator' },
    { icon: '👥', label: 'Community', desc: 'Teile dein Wissen', tab: 'community' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-0 text-2xl font-black">
            <span className="text-gradient-h">H</span>
            <span className="text-red-500">AK</span>
            <span className="text-blue-500">TL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {[
              { id: 'dashboard', label: '📊 Dashboard' },
              { id: 'ai-tutor', label: '🤖 AI Tutor' },
              { id: 'notes', label: '📝 Mitschriften' },
              { id: 'calculator', label: '🧮 Rechner' },
              { id: 'community', label: '👥 Community' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-h text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-h text-white font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-slate-400 hover:text-red-400 transition-colors hidden sm:block"
            >
              Logout
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-400"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-slate-800 p-4 space-y-2"
          >
            {[
              { id: 'dashboard', label: '📊 Dashboard' },
              { id: 'ai-tutor', label: '🤖 AI Tutor' },
              { id: 'notes', label: '📝 Mitschriften' },
              { id: 'calculator', label: '🧮 Rechner' },
              { id: 'community', label: '👥 Community' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setMobileMenuOpen(false)
                }}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 transition-all"
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
            >
              Logout
            </button>
          </motion.div>
        )}
      </nav>

      {/* Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-1">
                Willkommen, {user.name}! 👋
              </h1>
              <p className="text-slate-400">Schöner Tag zum Lernen! Los geht&apos;s 🚀</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500 transition-all"
                >
                  <div className="text-3xl font-bold text-gradient-h mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* My Subjects */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Meine Fächer 📖</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {userFaecher.map((fach, i) => (
                  <motion.div
                    key={fach.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-slate-800 cursor-pointer transition-all"
                  >
                    <div className="text-3xl mb-2">{fach.emoji}</div>
                    <p className="font-semibold">{fach.name}</p>
                    <p className="text-xs text-slate-500 mt-1">Klicke zum Starten</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Schnellstart 🚀</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, i) => (
                  <motion.button
                    key={i}
                    onClick={() => action.tab && setActiveTab(action.tab)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-gradient-to-br from-blue-500/10 to-red-500/10 border border-blue-500/50 rounded-lg hover:from-blue-500/20 hover:to-red-500/20 transition-all text-left"
                  >
                    <div className="text-3xl mb-2">{action.icon}</div>
                    <h3 className="font-bold">{action.label}</h3>
                    <p className="text-xs text-slate-400 mt-1">{action.desc}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* AI Tutor Tab */}
        {activeTab === 'ai-tutor' && (
          <AITutorScreen user={user} />
        )}

        {/* Notes Tab */}
        {activeTab === 'notes' && (
          <NotesScreen onBack={() => setActiveTab('dashboard')} />
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <CalculatorScreen onBack={() => setActiveTab('dashboard')} />
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <CommunityScreen onBack={() => setActiveTab('dashboard')} />
        )}
      </div>
    </div>
  )
}
