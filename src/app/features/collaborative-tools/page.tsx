'use client'

import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import Link from 'next/link'
import { useState } from 'react'

export default function CollaborativeToolsPage() {
  const [activeTab, setActiveTab] = useState('flashcards')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Collaborative Tools</span>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <Link href="/">
            <Button variant="secondary">← Back to Home</Button>
          </Link>
          <Link href="/auth/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Collaborative Learning Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Share knowledge, create together, and learn faster with our suite of collaborative tools designed for modern students.
            </p>
          </div>

          {/* Tool Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                {[
                  { id: 'flashcards', label: '📚 Flashcards', title: 'Shared Flashcards' },
                  { id: 'notes', label: '📝 Notes', title: 'Real-time Notes' },
                  { id: 'whiteboards', label: '🎨 Whiteboards', title: 'Digital Whiteboards' },
                  { id: 'progress', label: '📊 Progress', title: 'Progress Tracking' }
                ].map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTab(tool.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === tool.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tool.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tool Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-12">
            {activeTab === 'flashcards' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Shared Flashcard Decks</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Create & Share</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Build custom flashcard decks with rich media
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Share decks with study partners instantly
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Collaborative editing and improvements
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Spaced repetition algorithm for optimal learning
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What is React?</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Click to reveal answer...</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 text-sm">👍 Easy</Button>
                      <Button variant="secondary" className="flex-1 text-sm">🤔 Hard</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real-time Collaborative Notes</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Features</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Real-time collaborative editing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Rich text formatting and media embedding
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Version history and change tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Comment and discussion threads
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-green-600 dark:text-green-400">3 people editing</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Calculus Study Notes</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Integration by parts formula:<br/>
                        ∫u dv = uv - ∫v du
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 text-sm">💬 Comment</Button>
                      <Button variant="secondary" className="flex-1 text-sm">📤 Share</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'whiteboards' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Digital Whiteboards</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Visual Learning</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Infinite canvas for brainstorming
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Drawing tools, shapes, and diagrams
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Multi-user real-time collaboration
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Save and export your work
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 h-40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎨</div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Interactive Whiteboard</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 text-sm">✏️ Draw</Button>
                      <Button variant="secondary" className="flex-1 text-sm">📐 Shapes</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Progress Tracking</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Analytics</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Individual and group progress tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Study time and session analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Performance insights and recommendations
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Achievement badges and milestones
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700 dark:text-gray-300">Mathematics</span>
                          <span className="text-gray-600 dark:text-gray-400">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700 dark:text-gray-300">Physics</span>
                          <span className="text-gray-600 dark:text-gray-400">72%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">Start Collaborating Today</h2>
              <p className="text-xl mb-6 opacity-90">Access all collaborative tools with your Study Buddy account</p>
              <Link href="/auth/register">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  🚀 Join Study Buddy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}