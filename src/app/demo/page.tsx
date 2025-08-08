'use client'

import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import Link from 'next/link'
import { useState } from 'react'

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState('partners')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Study Buddy Demo</span>
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience Study Buddy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our key features and see how collaborative learning can transform your study experience
            </p>
          </div>

          {/* Demo Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                {[
                  { id: 'partners', label: '👥 Partners', title: 'Study Partners' },
                  { id: 'sessions', label: '📅 Sessions', title: 'Study Sessions' },
                  { id: 'flashcards', label: '📚 Flashcards', title: 'Flashcards' },
                  { id: 'notes', label: '📝 Notes', title: 'Collaborative Notes' }
                ].map(demo => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemo(demo.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDemo === demo.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {activeDemo === 'partners' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Find Your Perfect Study Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Alice Johnson', course: 'Computer Science', status: 'online', match: '95%' },
                    { name: 'Bob Smith', course: 'Mathematics', status: 'offline', match: '87%' },
                    { name: 'Carol Davis', course: 'Physics', status: 'online', match: '92%' },
                    { name: 'David Wilson', course: 'Computer Science', status: 'busy', match: '89%' }
                  ].map((partner, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{partner.name.charAt(0)}</span>
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                            partner.status === 'online' ? 'bg-green-500' : 
                            partner.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{partner.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{partner.course}</p>
                          <p className="text-xs text-green-600 dark:text-green-400">{partner.match} match</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 text-sm">💬 Connect</Button>
                        <Button variant="secondary" className="flex-1 text-sm">👀 Profile</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDemo === 'sessions' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Join Study Sessions</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Calculus Study Group', course: 'Mathematics', date: 'Today', time: '2:00 PM', participants: 4, spots: 2 },
                    { title: 'React Fundamentals', course: 'Computer Science', date: 'Tomorrow', time: '4:00 PM', participants: 6, spots: 1 },
                    { title: 'Physics Lab Review', course: 'Physics', date: 'Jan 17', time: '10:00 AM', participants: 3, spots: 3 }
                  ].map((session, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{session.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <span>📚 {session.course}</span>
                            <span>📅 {session.date}</span>
                            <span>🕐 {session.time}</span>
                            <span>👥 {session.participants} joined</span>
                            <span className="text-green-600 dark:text-green-400">✨ {session.spots} spots left</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="text-sm">🚀 Join Now</Button>
                          <Button variant="secondary" className="text-sm">ℹ️ Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDemo === 'flashcards' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Interactive Flashcards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'JavaScript Basics', cards: 25, mastered: 18, course: 'Computer Science', shared: true },
                    { name: 'Calculus Formulas', cards: 40, mastered: 32, course: 'Mathematics', shared: false },
                    { name: 'Physics Constants', cards: 15, mastered: 12, course: 'Physics', shared: true }
                  ].map((deck, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{deck.name}</h3>
                          {deck.shared && <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">Shared</span>}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{deck.course}</p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                          <span>Progress</span>
                          <span>{deck.mastered}/{deck.cards}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${(deck.mastered / deck.cards) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 text-sm">📖 Study</Button>
                        <Button variant="secondary" className="flex-1 text-sm">✏️ Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDemo === 'notes' && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Collaborative Notes</h2>
                <div className="space-y-4">
                  {[
                    { title: 'React Hooks Overview', course: 'Computer Science', lastEdited: '2 hours ago', collaborators: 3, live: true },
                    { title: 'Integration Techniques', course: 'Mathematics', lastEdited: '1 day ago', collaborators: 2, live: false },
                    { title: 'Quantum Mechanics Notes', course: 'Physics', lastEdited: '3 days ago', collaborators: 4, live: true }
                  ].map((note, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{note.title}</h3>
                            {note.live && <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                              Live
                            </span>}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <span>📚 {note.course}</span>
                            <span>🕐 Last edited {note.lastEdited}</span>
                            <span>👥 {note.collaborators} collaborators</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="text-sm">📝 Open</Button>
                          <Button variant="secondary" className="text-sm">👥 Share</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-xl mb-6 opacity-90">Join thousands of students already studying together</p>
              <div className="flex gap-4 justify-center">
                <Link href="/auth/register">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    🚀 Sign Up Free
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="secondary" className="border-white text-white hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}