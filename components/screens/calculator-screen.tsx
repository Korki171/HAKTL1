'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, RotateCcw, ArrowLeft } from 'lucide-react'

interface Grade {
  id: string
  name: string
  points: number
  maxPoints: number
  weight: number
}

export default function CalculatorScreen({ onBack }: { onBack: () => void }) {
  const [grades, setGrades] = useState<Grade[]>([
    { id: '1', name: '1. Schularbeit', points: 85, maxPoints: 100, weight: 20 },
    { id: '2', name: 'Mitarbeit', points: 90, maxPoints: 100, weight: 10 },
  ])
  const [newGradeName, setNewGradeName] = useState('')
  const [newGradePoints, setNewGradePoints] = useState('')
  const [newGradeMaxPoints, setNewGradeMaxPoints] = useState('100')
  const [newGradeWeight, setNewGradeWeight] = useState('10')

  const calculateWeightedAverage = (): string => {
    const totalWeight = grades.reduce((sum, g) => sum + g.weight, 0)
    if (totalWeight === 0) return '0'

    const weightedSum = grades.reduce((sum, g) => {
      const percentage = (g.points / g.maxPoints) * 100
      return sum + percentage * g.weight
    }, 0)

    return (weightedSum / totalWeight).toFixed(2)
  }

  const convertToGrade = (percentage: string | number): string => {
    const num = typeof percentage === 'string' ? parseFloat(percentage) : percentage
    if (num >= 90) return '1'
    if (num >= 80) return '2'
    if (num >= 70) return '3'
    if (num >= 60) return '4'
    if (num >= 50) return '5'
    return '6'
  }

  const addGrade = () => {
    if (newGradeName.trim() && newGradePoints && newGradeMaxPoints) {
      const newGrade: Grade = {
        id: Date.now().toString(),
        name: newGradeName,
        points: parseFloat(newGradePoints),
        maxPoints: parseFloat(newGradeMaxPoints),
        weight: parseFloat(newGradeWeight),
      }
      setGrades([...grades, newGrade])
      setNewGradeName('')
      setNewGradePoints('')
      setNewGradeMaxPoints('100')
      setNewGradeWeight('10')
    }
  }

  const updateGrade = (id: string, field: keyof Grade, value: any) => {
    setGrades(
      grades.map((g) => (g.id === id ? { ...g, [field]: isNaN(value) ? value : parseFloat(value) } : g))
    )
  }

  const deleteGrade = (id: string) => {
    setGrades(grades.filter((g) => g.id !== id))
  }

  const resetCalculator = () => {
    setGrades([])
    setNewGradeName('')
    setNewGradePoints('')
    setNewGradeMaxPoints('100')
    setNewGradeWeight('10')
  }

  const average = calculateWeightedAverage()
  const grade = convertToGrade(parseFloat(average))

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Zurück
      </motion.button>

      <div className="max-w-4xl mx-auto">
        {/* Header with Result */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-8">🧮 Notenrechner</h1>

          {grades.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-400/5 backdrop-blur border border-pink-500/30 rounded-lg text-center"
              >
                <p className="text-slate-400 text-sm mb-2">DURCHSCHNITT</p>
                <p className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                  {average}%
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-400/5 backdrop-blur border border-blue-500/30 rounded-lg text-center"
              >
                <p className="text-slate-400 text-sm mb-2">NOTE</p>
                <p className="text-5xl font-bold text-blue-400">{grade}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-400/5 backdrop-blur border border-purple-500/30 rounded-lg text-center"
              >
                <p className="text-slate-400 text-sm mb-2">EINTRÄGE</p>
                <p className="text-5xl font-bold text-purple-400">{grades.length}</p>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg mb-8"
        >
          <h2 className="text-xl font-bold mb-4">➕ Neue Note hinzufügen</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <input
              value={newGradeName}
              onChange={(e) => setNewGradeName(e.target.value)}
              placeholder="Note Name (z.B. SA 1)"
              className="col-span-1 md:col-span-2 bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500"
            />
            <input
              value={newGradePoints}
              onChange={(e) => setNewGradePoints(e.target.value)}
              placeholder="Punkte"
              type="number"
              className="bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500"
            />
            <input
              value={newGradeMaxPoints}
              onChange={(e) => setNewGradeMaxPoints(e.target.value)}
              placeholder="Max Punkte"
              type="number"
              className="bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500"
            />
            <input
              value={newGradeWeight}
              onChange={(e) => setNewGradeWeight(e.target.value)}
              placeholder="Gewicht %"
              type="number"
              className="bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500"
            />
          </div>
          <motion.button
            onClick={addGrade}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Hinzufügen
          </motion.button>
        </motion.div>

        {/* Grades List */}
        {grades.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 mb-8"
          >
            <h2 className="text-xl font-bold mb-4">🎯 Deine Noten</h2>
            {grades.map((grade, idx) => (
              <motion.div
                key={grade.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 group hover:border-pink-500/30 transition-all"
              >
                <div className="flex-1">
                  <input
                    value={grade.name}
                    onChange={(e) => updateGrade(grade.id, 'name', e.target.value)}
                    className="bg-transparent font-bold text-lg text-white border-b border-transparent hover:border-slate-600 focus:outline-none focus:border-pink-500 transition-colors px-1 mb-2 w-full"
                  />
                  <div className="flex gap-4 text-sm text-slate-400">
                    <label>
                      Punkte:{' '}
                      <input
                        value={grade.points}
                        onChange={(e) => updateGrade(grade.id, 'points', e.target.value)}
                        type="number"
                        className="w-16 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white focus:outline-none focus:border-pink-500"
                      />
                    </label>
                    <label>
                      / Max:{' '}
                      <input
                        value={grade.maxPoints}
                        onChange={(e) => updateGrade(grade.id, 'maxPoints', e.target.value)}
                        type="number"
                        className="w-16 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white focus:outline-none focus:border-pink-500"
                      />
                    </label>
                    <label>
                      Gewicht:{' '}
                      <input
                        value={grade.weight}
                        onChange={(e) => updateGrade(grade.id, 'weight', e.target.value)}
                        type="number"
                        className="w-16 bg-slate-700 border border-slate-600 rounded px-2 py-1 text-white focus:outline-none focus:border-pink-500"
                      />
                      %
                    </label>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                    {((grade.points / grade.maxPoints) * 100).toFixed(1)}%
                  </p>
                  <p className="text-sm text-slate-400">
                    {convertToGrade((grade.points / grade.maxPoints) * 100)}er Range
                  </p>
                </div>

                <motion.button
                  onClick={() => deleteGrade(grade.id)}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-400 transition-all p-2"
                >
                  <Trash2 size={20} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-4xl mb-4">📝</p>
            <p className="text-slate-400">Noch keine Noten hinzugefügt</p>
          </motion.div>
        )}

        {/* Reset Button */}
        {grades.length > 0 && (
          <motion.button
            onClick={resetCalculator}
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-slate-800/40 border border-slate-700/50 text-slate-400 font-bold rounded-lg hover:border-red-500/30 hover:text-red-400 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} /> Zurücksetzen
          </motion.button>
        )}
      </div>
    </div>
  )
}
