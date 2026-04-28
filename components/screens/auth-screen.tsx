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

interface AuthScreenProps {
  onSuccess: (user: UserProfile) => void
}

export default function AuthScreen({ onSuccess }: AuthScreenProps) {
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate login
      setTimeout(() => {
        onSuccess({
          id: '1',
          name: 'Max Mustermann',
          email: loginData.email,
          xp: 450,
          streak: 12,
          quizzes_done: 28,
        })
        setLoading(false)
      }, 500)
    } catch (err) {
      setError('Anmeldung fehlgeschlagen')
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate register
      setTimeout(() => {
        onSuccess({
          id: '2',
          name: registerData.name,
          email: registerData.email,
          xp: 0,
          streak: 0,
          quizzes_done: 0,
        })
        setLoading(false)
      }, 500)
    } catch (err) {
      setError('Registrierung fehlgeschlagen')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex gap-0 text-5xl font-black mb-4 justify-center">
            <span className="text-gradient-h">H</span>
            <span className="text-red-500">AK</span>
            <span className="text-blue-500">TL</span>
          </div>
          <p className="text-slate-400">Österreichs Premium Lernplattform</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-1 rounded-lg">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2 rounded-md font-semibold transition-all ${
              tab === 'login'
                ? 'bg-gradient-h text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Anmelden
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-2 rounded-md font-semibold transition-all ${
              tab === 'register'
                ? 'bg-gradient-h text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Registrieren
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
          >
            {error}
          </motion.div>
        )}

        {/* Login Form */}
        {tab === 'login' && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleLogin}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                E-Mail
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="deine@email.at"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-h text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50"
            >
              {loading ? 'Laden...' : 'Anmelden →'}
            </button>
          </motion.form>
        )}

        {/* Register Form */}
        {tab === 'register' && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleRegister}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                placeholder="Dein Name"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                E-Mail
              </label>
              <input
                type="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                placeholder="deine@email.at"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                placeholder="Min. 6 Zeichen"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-h text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50"
            >
              {loading ? 'Laden...' : 'Registrieren →'}
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  )
}
