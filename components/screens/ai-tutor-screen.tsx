'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles, Loader } from 'lucide-react'
import { TOPICS_SUMMARIES, getTopicsBySubject, type TopicSummary } from '@/data/topics-summaries'

interface AITutorScreenProps {
  user: {
    selected_faecher?: string[]
    name: string
  }
}

interface AIResponse {
  question: string
  answer: string
  relatedTopic?: TopicSummary
  timestamp: Date
}

const SUBJECT_MAP: Record<string, string> = {
  mathe: 'Mathematik',
  physik: 'Physik',
  info: 'Informatik',
  etech: 'Elektrotechnik',
  rewe: 'Rechnungswesen',
  bwl: 'Betriebswirtschaft',
  vwl: 'Volkswirtschaft',
  marketing: 'Marketing',
  deutsch: 'Deutsch',
  englisch: 'Englisch',
}

export default function AITutorScreen({ user }: AITutorScreenProps) {
  const [question, setQuestion] = useState('')
  const [selectedSubject, setSelectedSubject] = useState<string>(
    user.selected_faecher?.[0] || 'mathe'
  )
  const [responses, setResponses] = useState<AIResponse[]>([])
  const [loading, setLoading] = useState(false)
  const [showSummaries, setShowSummaries] = useState(true)

  const userSubjects = user.selected_faecher || []
  const userSubjectNames = userSubjects.map((s) => SUBJECT_MAP[s] || s).filter(Boolean)
  const topicSummaries = getTopicsBySubject(SUBJECT_MAP[selectedSubject] || selectedSubject)

  // Mock AI Response Generator (später durch OpenAI API ersetzen)
  const generateAIResponse = async (q: string): Promise<string> => {
    // Simuliert KI-Verzögerung
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Einfache Heuristik zur Beantwortung basierend auf Schlüsselwörtern
    const keywords = q.toLowerCase().split(' ')
    const relatedTopic = topicSummaries.find((t) =>
      keywords.some((kw) => t.topic.toLowerCase().includes(kw))
    )

    if (relatedTopic) {
      return `Großartig! Du fragst zu "${relatedTopic.topic}". Hier ist eine kurze Erklärung:\n\n${relatedTopic.summary}\n\n**Wichtige Punkte:**\n${relatedTopic.keyPoints.map((p) => `• ${p}`).join('\n')}\n\nSchwierigkeitsstufe: ${relatedTopic.difficulty}\n\nMöchtest du mehr Details zu einem dieser Punkte?`
    }

    return `Das ist eine gute Frage! Basierend auf dem Thema "${SUBJECT_MAP[selectedSubject]}" kann ich dir folgendes erklären:\n\nIn diesem Fach gibt es mehrere wichtige Konzepte zu verstehen. Versuche, deine Frage spezifischer zu formulieren, z.B. "Was ist eine Funktion?" oder "Wie funktioniert...?"\n\nDadurch kann ich dir eine genauere Antwort geben.`
  }

  const handleAsk = async () => {
    if (!question.trim()) return

    setLoading(true)

    try {
      const answer = await generateAIResponse(question)
      const newResponse: AIResponse = {
        question,
        answer,
        timestamp: new Date(),
      }
      setResponses([newResponse, ...responses])
      setQuestion('')
    } catch (error) {
      console.error('Error generating AI response:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-1">🤖 AI Tutor</h1>
        <p className="text-slate-400">Stell deine Fragen zu deinen Fächern & erhalte sofortige Erklärungen</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Area */}
        <div className="lg:col-span-2 space-y-4">
          {/* Subject Selector */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <p className="text-sm font-semibold text-slate-300 mb-3">Fach wählen:</p>
            <div className="flex flex-wrap gap-2">
              {userSubjectNames.map((subject) => {
                const subjectKey = Object.entries(SUBJECT_MAP).find(
                  ([_, name]) => name === subject
                )?.[0]
                return (
                  <button
                    key={subject}
                    onClick={() => setSelectedSubject(subjectKey || 'mathe')}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      SUBJECT_MAP[selectedSubject] === subject
                        ? 'bg-gradient-h text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {subject}
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Question Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg"
          >
            <p className="text-sm font-semibold text-slate-300 mb-3">Deine Frage:</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                placeholder={`Frage etwas zum Thema ${SUBJECT_MAP[selectedSubject] || 'Mathematik'}...`}
                className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={handleAsk}
                disabled={loading || !question.trim()}
                className="px-4 py-2 bg-gradient-h rounded-lg text-white font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

          {/* Responses */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {responses.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg text-center text-slate-400"
              >
                <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Stell mir eine Frage, und ich helfe dir schnell weiter!</p>
              </motion.div>
            )}

            {responses.map((response, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                {/* Question */}
                <div className="p-4 bg-blue-500/20 border border-blue-500/40 rounded-lg">
                  <p className="text-sm font-semibold text-blue-300 mb-1">Du:</p>
                  <p className="text-white">{response.question}</p>
                </div>

                {/* Answer */}
                <div className="p-4 bg-slate-700/40 border border-slate-600 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-300 mb-2">🤖 AI Tutor:</p>
                  <div className="text-slate-200 whitespace-pre-line text-sm leading-relaxed">
                    {response.answer}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {response.timestamp.toLocaleTimeString('de-DE')}
                  </p>
                </div>
              </motion.div>
            ))}

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-slate-700/40 border border-slate-600 rounded-lg"
              >
                <p className="text-slate-300 flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin" />
                  Ich denke nach... 🤔
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Sidebar: Topic Summaries */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <button
              onClick={() => setShowSummaries(!showSummaries)}
              className="w-full mb-4 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 transition-all"
            >
              {showSummaries ? '📚 Themen ausblenden' : '📚 Themen anzeigen'}
            </button>

            {showSummaries && (
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-300">
                  Verfügbare Themen ({topicSummaries.length}):
                </p>
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {topicSummaries.map((topic) => (
                    <motion.button
                      key={topic.id}
                      onClick={() => setQuestion(`Erklär mir ${topic.topic}`)}
                      whileHover={{ x: 4 }}
                      className="w-full text-left p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
                    >
                      <p className="font-semibold text-slate-200 text-sm group-hover:text-blue-300 transition-colors">
                        {topic.topic}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">{topic.difficulty}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
