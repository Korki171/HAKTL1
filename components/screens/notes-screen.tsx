'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Save, Plus, ArrowLeft } from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  subject: string
  createdAt: string
  lastEdited: string
}

export default function NotesScreen({ onBack }: { onBack: () => void }) {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Mathematik - Integralrechnung',
      content: 'Die Integralrechnung ist das Gegenteil der Ableitung...',
      subject: 'Mathematik',
      createdAt: '2026-04-20',
      lastEdited: '2026-04-20',
    },
  ])
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>('1')
  const [isCreateNew, setIsCreateNew] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newSubject, setNewSubject] = useState('Mathematik')

  const selectedNote = notes.find((n) => n.id === selectedNoteId)

  const handleCreateNote = () => {
    if (newTitle.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        title: newTitle,
        content: '',
        subject: newSubject,
        createdAt: new Date().toLocaleDateString('de-AT'),
        lastEdited: new Date().toLocaleDateString('de-AT'),
      }
      setNotes([...notes, newNote])
      setSelectedNoteId(newNote.id)
      setNewTitle('')
      setIsCreateNew(false)
    }
  }

  const handleUpdateNote = (content: string) => {
    if (selectedNoteId) {
      setNotes(
        notes.map((note) =>
          note.id === selectedNoteId
            ? { ...note, content, lastEdited: new Date().toLocaleDateString('de-AT') }
            : note
        )
      )
    }
  }

  const handleDeleteNote = (id: string) => {
    const newNotes = notes.filter((n) => n.id !== id)
    setNotes(newNotes)
    if (selectedNoteId === id) {
      setSelectedNoteId(newNotes[0]?.id || null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-72 bg-slate-900/50 backdrop-blur border-r border-slate-700/50 p-4 flex flex-col overflow-y-auto"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} /> Zurück
          </button>

          <motion.button
            onClick={() => setIsCreateNew(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-bold rounded-lg mb-6 flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-pink-500/50"
          >
            <Plus size={20} /> Neue Note
          </motion.button>

          {isCreateNew && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-slate-800/50 backdrop-blur border border-pink-500/30 rounded-lg"
            >
              <input
                autoFocus
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Note Titel..."
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-slate-400 mb-3 focus:outline-none focus:border-pink-500"
              />
              <select
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white mb-3 focus:outline-none focus:border-pink-500"
              >
                <option>Mathematik</option>
                <option>Physik</option>
                <option>Deutsch</option>
                <option>Englisch</option>
              </select>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleCreateNote}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 py-2 bg-pink-500 text-white rounded font-semibold hover:bg-pink-600 transition-colors"
                >
                  Erstellen
                </motion.button>
                <motion.button
                  onClick={() => setIsCreateNew(false)}
                  className="flex-1 py-2 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 transition-colors"
                >
                  Abbrechen
                </motion.button>
              </div>
            </motion.div>
          )}

          <h3 className="text-sm font-bold text-slate-400 mb-3">MEINE NOTIZEN ({notes.length})</h3>
          <div className="space-y-2">
            {notes.map((note, idx) => (
              <motion.button
                key={note.id}
                onClick={() => setSelectedNoteId(note.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all group ${
                  selectedNoteId === note.id
                    ? 'bg-pink-500/10 border-pink-500/50'
                    : 'bg-slate-800/30 border-slate-700 hover:border-pink-500/30'
                }`}
              >
                <p className="font-semibold text-sm truncate">{note.title}</p>
                <p className="text-xs text-slate-400 mt-1">{note.subject}</p>
                <p className="text-xs text-slate-500 mt-1">{note.lastEdited}</p>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteNote(note.id)
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 group-hover:opacity-100 mt-2 text-red-500 hover:text-red-400 transition-all"
                >
                  <Trash2 size={16} />
                </motion.button>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Editor */}
        {selectedNote ? (
          <motion.div
            key={selectedNote.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{selectedNote.title}</h1>
                <p className="text-slate-400">
                  📚 {selectedNote.subject} • Erstellt: {selectedNote.createdAt}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all flex items-center gap-2"
              >
                <Save size={20} /> Speichern
              </motion.button>
            </div>

            <textarea
              value={selectedNote.content}
              onChange={(e) => handleUpdateNote(e.target.value)}
              placeholder="Schreib deine Notizen hier... 📝"
              className="flex-1 bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg p-6 text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/50 resize-none font-mono text-sm"
            />

            <div className="mt-4 flex gap-4 text-sm text-slate-400">
              <span>✏️ Bearbeitet: {selectedNote.lastEdited}</span>
              <span>📝 Words: {selectedNote.content.split(/\s+/).filter((w) => w).length}</span>
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl mb-4">📝</p>
              <p className="text-slate-400 text-lg">Keine Note ausgewählt</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
