"use client"

import React, { useState } from 'react'

export type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctIndex: number
}

interface QuizEngineProps {
  questions: QuizQuestion[]
}

export default function QuizEngine({ questions }: QuizEngineProps) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [finished, setFinished] = useState(false)

  if (!questions || questions.length === 0) return <div className="text-slate-400">Keine Fragen vorhanden.</div>

  const q = questions[index]

  function select(i: number) {
    setAnswers(prev => {
      const next = [...prev]
      next[index] = i
      return next
    })
  }

  function next() {
    if (index + 1 < questions.length) setIndex(index + 1)
    else setFinished(true)
  }

  function restart() {
    setIndex(0); setAnswers([]); setFinished(false)
  }

  if (finished) {
    const score = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0)
    return (
      <div className="space-y-4">
        <div className="text-xl font-semibold">Ergebnis: {score} / {questions.length}</div>
        <button className="px-4 py-2 bg-blue-500 rounded text-white" onClick={restart}>Neu starten</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-400">Frage {index + 1} / {questions.length}</div>
      <div className="text-lg font-medium">{q.question}</div>
      <div className="grid gap-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => select(i)}
            className={`text-left p-3 rounded border ${answers[index] === i ? 'border-blue-400 bg-blue-500/10' : 'border-white/6'}`}>
            {opt}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button onClick={next} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded">Weiter</button>
      </div>
    </div>
  )
}
