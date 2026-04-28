'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Trash2, ArrowLeft, Search, Send } from 'lucide-react'

interface CommunityPost {
  id: string
  author: string
  avatar: string
  subject: string
  title: string
  content: string
  timestamp: string
  likes: number
  comments: number
  liked: boolean
}

export default function CommunityScreen({ onBack }: { onBack: () => void }) {
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: '1',
      author: 'Anna M.',
      avatar: 'A',
      subject: 'Mathematik',
      title: 'Integralrechnung verstehen',
      content: 'Hat jemand eine gute Erklärung für definite Integrale? Bin etwas verwirrt...',
      timestamp: 'vor 2h',
      likes: 24,
      comments: 8,
      liked: false,
    },
    {
      id: '2',
      author: 'Lukas K.',
      avatar: 'L',
      subject: 'Informatik',
      title: 'Python Tipps & Tricks',
      content: 'Hier sind meine liebsten Python Libraries für Machine Learning 🤖',
      timestamp: 'vor 4h',
      likes: 156,
      comments: 23,
      liked: false,
    },
  ])

  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostContent, setNewPostContent] = useState('')
  const [newPostSubject, setNewPostSubject] = useState('Mathematik')
  const [isCreating, setIsCreating] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const newPost: CommunityPost = {
        id: Date.now().toString(),
        author: 'Du',
        avatar: 'D',
        subject: newPostSubject,
        title: newPostTitle,
        content: newPostContent,
        timestamp: 'jetzt',
        likes: 0,
        comments: 0,
        liked: false,
      }
      setPosts([newPost, ...posts])
      setNewPostTitle('')
      setNewPostContent('')
      setIsCreating(false)
    }
  }

  const toggleLike = (id: string) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
      )
    )
  }

  const deletePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-b border-slate-700/50 p-4 md:p-6"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} /> Zurück
          </button>

          <h1 className="text-4xl font-bold mb-6">👥 Community</h1>

          {/* Search */}
          <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Suche nach Beiträgen..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Create Post Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-b border-slate-700/50 p-4 md:p-6"
        >
          {!isCreating ? (
            <motion.button
              onClick={() => setIsCreating(true)}
              whileHover={{ scale: 1.02 }}
              className="w-full p-4 bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg hover:border-pink-500/30 transition-all text-left text-slate-400 hover:text-white"
            >
              💬 Was möchtest du mit der Community teilen?
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-slate-800/40 backdrop-blur border border-pink-500/30 rounded-lg"
            >
              <input
                autoFocus
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder="Titel deines Beitrags..."
                className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-400 mb-3 focus:outline-none focus:border-pink-500"
              />

              <select
                value={newPostSubject}
                onChange={(e) => setNewPostSubject(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white mb-3 focus:outline-none focus:border-pink-500"
              >
                <option>Mathematik</option>
                <option>Physik</option>
                <option>Informatik</option>
                <option>Deutsch</option>
                <option>Englisch</option>
                <option>Allgemein</option>
              </select>

              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Schreib dein Anliegen..."
                className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 text-white placeholder-slate-400 mb-3 focus:outline-none focus:border-pink-500 resize-none h-24"
              />

              <div className="flex gap-2">
                <motion.button
                  onClick={handleCreatePost}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 py-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Teilen
                </motion.button>
                <motion.button
                  onClick={() => setIsCreating(false)}
                  className="flex-1 py-2 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 transition-colors"
                >
                  Abbrechen
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Posts Feed */}
        <div className="p-4 md:p-6">
          {filteredPosts.length > 0 ? (
            <div className="space-y-4">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-lg hover:border-pink-500/30 transition-all group"
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center text-white font-bold">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-white">{post.author}</p>
                          <span className="px-2 py-0.5 bg-pink-500/10 border border-pink-500/30 rounded text-xs text-pink-400">
                            {post.subject}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">{post.timestamp}</p>
                      </div>
                    </div>
                    {post.author === 'Du' && (
                      <motion.button
                        onClick={() => deletePost(post.id)}
                        whileHover={{ scale: 1.2 }}
                        className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-400 transition-all p-2"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    )}
                  </div>

                  {/* Post Content */}
                  <h3 className="font-bold text-lg mb-2 text-white hover:text-pink-400 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{post.content}</p>

                  {/* Post Footer - Stats */}
                  <div className="flex gap-4 text-sm text-slate-400 border-t border-slate-700/50 pt-4">
                    <motion.button
                      onClick={() => toggleLike(post.id)}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-1 transition-colors ${
                        post.liked ? 'text-pink-500' : 'hover:text-pink-400'
                      }`}
                    >
                      <Heart size={18} fill={post.liked ? 'currentColor' : 'none'} />
                      {post.likes}
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                      <MessageCircle size={18} />
                      {post.comments}
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} className="flex items-center gap-1 hover:text-green-400 transition-colors">
                      <Share2 size={18} />
                      Teilen
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-slate-400">Keine Beiträge gefunden</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
