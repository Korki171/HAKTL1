'use client'

import { useEffect, useRef, useCallback, useTransition, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ImageIcon,
  Figma,
  MonitorIcon,
  Sparkles,
  Command,
  ArrowUpIcon,
  Paperclip,
  SendIcon,
  XIcon,
  LoaderIcon,
} from 'lucide-react'

interface CommandSuggestion {
  icon: React.ReactNode
  label: string
  description: string
  prefix: string
}

interface TextareaRef extends HTMLTextAreaElement {}

function useAutoResizeTextarea({ minHeight = 60, maxHeight = 200 }) {
  const textareaRef = useRef<TextareaRef>(null)

  const adjustHeight = useCallback((reset?: boolean) => {
    const textarea = textareaRef.current
    if (!textarea) return

    if (reset) {
      textarea.style.height = `${minHeight}px`
      return
    }

    textarea.style.height = `${minHeight}px`
    const newHeight = Math.max(
      minHeight,
      Math.min(textarea.scrollHeight, maxHeight)
    )
    textarea.style.height = `${newHeight}px`
  }, [minHeight, maxHeight])

  return { textareaRef, adjustHeight }
}

function TypingDots() {
  return (
    <div className="flex items-center ml-1">
      {[1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="w-1.5 h-1.5 bg-white/90 rounded-full mx-0.5"
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: dot * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function AnimatedAIChat() {
  const [value, setValue] = useState('')
  const [attachments, setAttachments] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [activeSuggestion, setActiveSuggestion] = useState<number>(-1)
  const [showCommandPalette, setShowCommandPalette] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({})
  const [inputFocused, setInputFocused] = useState(false)
  const commandPaletteRef = useRef<HTMLDivElement>(null)

  const commandSuggestions: CommandSuggestion[] = [
    {
      icon: <ImageIcon className="w-4 h-4" />,
      label: 'Clone UI',
      description: 'Generate from screenshot',
      prefix: '/clone',
    },
    {
      icon: <Figma className="w-4 h-4" />,
      label: 'Import Figma',
      description: 'Import design',
      prefix: '/figma',
    },
    {
      icon: <MonitorIcon className="w-4 h-4" />,
      label: 'Create Page',
      description: 'Generate new page',
      prefix: '/page',
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      label: 'Improve',
      description: 'Improve design',
      prefix: '/improve',
    },
  ]

  const syncCommandPalette = (nextValue: string) => {
    if (nextValue.startsWith('/') && !nextValue.includes(' ')) {
      setShowCommandPalette(true)
      const idx = commandSuggestions.findIndex((cmd) => cmd.prefix.startsWith(nextValue))
      setActiveSuggestion(idx >= 0 ? idx : -1)
      return
    }

    setShowCommandPalette(false)
    setActiveSuggestion(-1)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (showCommandPalette) {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveSuggestion((prev) =>
          prev < commandSuggestions.length - 1 ? prev + 1 : 0
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveSuggestion((prev) =>
          prev > 0 ? prev - 1 : commandSuggestions.length - 1
        )
      } else if (e.key === 'Tab' || e.key === 'Enter') {
        e.preventDefault()
        if (activeSuggestion >= 0) {
          const nextValue = commandSuggestions[activeSuggestion].prefix + ' '
          setValue(nextValue)
          setShowCommandPalette(false)
          setActiveSuggestion(-1)
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setShowCommandPalette(false)
        setActiveSuggestion(-1)
      }
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim()) {
        handleSendMessage()
      }
    }
  }

  const handleSendMessage = () => {
    if (value.trim()) {
      startTransition(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          setValue('')
          setShowCommandPalette(false)
          setActiveSuggestion(-1)
          adjustHeight(true)
        }, 3000)
      })
    }
  }

  const handleAttachFile = () => {
    const mockFileName = `file-${Math.floor(Math.random() * 1000)}.pdf`
    setAttachments((prev) => [...prev, mockFileName])
  }

  return (
    <div className="min-h-screen flex flex-col w-full items-center justify-center bg-transparent text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="w-full max-w-2xl mx-auto relative z-10">
        <motion.div
          className="relative space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold">Wie kann ich dir heute helfen?</h1>
            <p className="text-slate-400">Starte eine Frage oder nutze einen Command</p>
          </div>

          <motion.div className="glass rounded-2xl">
            {showCommandPalette && (
              <motion.div
                className="absolute left-4 right-4 bottom-full mb-2 glass rounded-lg z-50 overflow-hidden"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="py-1">
                  {commandSuggestions.map((suggestion, index) => (
                    <motion.div
                      key={suggestion.prefix}
                      className={`flex items-center gap-2 px-3 py-2 text-xs transition-colors cursor-pointer ${
                        activeSuggestion === index ? 'bg-white/20' : ''
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-5 h-5">{suggestion.icon}</div>
                      <div className="font-medium">{suggestion.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="p-4">
              <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => {
                  const nextValue = e.target.value
                  setValue(nextValue)
                  syncCommandPalette(nextValue)
                  adjustHeight()
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Stelle eine Frage..."
                className="w-full bg-transparent text-white border-none resize-none focus:outline-none min-h-[60px] font-base"
                style={{ overflow: 'hidden' }}
              />
            </div>

            <div className="p-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAttachFile}
                  className="p-2 text-white/40 hover:text-white transition"
                >
                  <Paperclip className="w-4 h-4" />
                </button>
              </div>

              <motion.button
                onClick={handleSendMessage}
                disabled={isTyping || !value.trim()}
                className="px-4 py-2 bg-gradient-h rounded-lg text-sm font-medium disabled:opacity-50"
              >
                {isTyping ? <LoaderIcon className="w-4 h-4 animate-spin" /> : <SendIcon className="w-4 h-4" />}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
