'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AuthScreen from '@/components/screens/auth-screen'
import OnboardingScreen from '@/components/screens/onboarding-screen'
import AppScreen from '@/components/screens/app-screen'
import LandingPage from '@/components/pages/landing-page'

type ScreenType = 'landing' | 'auth' | 'onboarding' | 'app'

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

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('landing')
  const [user, setUser] = useState<UserProfile | null>(null)

  const handleAuthSuccess = (userData: UserProfile) => {
    setUser(userData)
    if (userData.schultyp && userData.selected_faecher?.length) {
      setCurrentScreen('app')
    } else {
      setCurrentScreen('onboarding')
    }
  }

  const handleOnboardingComplete = (userData: UserProfile) => {
    setUser(userData)
    setCurrentScreen('app')
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentScreen('auth')
  }

  return (
    <main className="relative bg-black">
      {/* Screens */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentScreen === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage onGetStarted={() => setCurrentScreen('auth')} />
            </motion.div>
          )}

          {currentScreen === 'auth' && (
            <motion.div
              key="auth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AuthScreen onSuccess={handleAuthSuccess} />
            </motion.div>
          )}

          {currentScreen === 'onboarding' && user && (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <OnboardingScreen user={user} onComplete={handleOnboardingComplete} />
            </motion.div>
          )}

          {currentScreen === 'app' && user && (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AppScreen user={user} onLogout={handleLogout} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
