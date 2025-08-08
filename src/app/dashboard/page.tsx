'use client'

import { Button } from '@/components/ui/Button'
import { ReactBits } from '@/components/ui/ReactBits'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// Mock data
const mockPartners = [
  { id: '1', name: 'Alice Johnson', course: 'Computer Science', avatar: '/avatar1.jpg', status: 'online' },
  { id: '2', name: 'Bob Smith', course: 'Mathematics', avatar: '/avatar2.jpg', status: 'offline' },
  { id: '3', name: 'Carol Davis', course: 'Physics', avatar: '/avatar3.jpg', status: 'online' },
  { id: '4', name: 'David Wilson', course: 'Computer Science', avatar: '/avatar4.jpg', status: 'busy' }
]

const mockSessions = [
  { id: '1', title: 'Calculus Study Group', course: 'Mathematics', date: '2024-01-15', time: '14:00', participants: 4 },
  { id: '2', title: 'React Fundamentals', course: 'Computer Science', date: '2024-01-16', time: '16:00', participants: 6 },
  { id: '3', title: 'Physics Lab Review', course: 'Physics', date: '2024-01-17', time: '10:00', participants: 3 }
]

const mockDecks = [
  { id: '1', name: 'JavaScript Basics', cards: 25, mastered: 18, course: 'Computer Science' },
  { id: '2', name: 'Calculus Formulas', cards: 40, mastered: 32, course: 'Mathematics' },
  { id: '3', name: 'Physics Constants', cards: 15, mastered: 12, course: 'Physics' }
]

const mockNotes = [
  { id: '1', title: 'React Hooks Overview', course: 'Computer Science', lastEdited: '2 hours ago', collaborators: 3 },
  { id: '2', title: 'Integration Techniques', course: 'Mathematics', lastEdited: '1 day ago', collaborators: 2 },
  { id: '3', title: 'Quantum Mechanics Notes', course: 'Physics', lastEdited: '3 days ago', collaborators: 4 }
]

export default function Dashboard() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  if (!user) return null

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500 relative">
      <ReactBits />
      
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 relative z-10">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">SB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Study Buddy</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Welcome back, {user.name}!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <img 
                src={user.avatar || '/default-avatar.png'} 
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
            </div>
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <nav className="p-6">
            <div className="space-y-2">
              {[
                { id: 'overview', label: '📊 Overview', icon: '📊' },
                { id: 'partners', label: '👥 Study Partners', icon: '👥' },
                { id: 'sessions', label: '📅 Study Sessions', icon: '📅' },
                { id: 'flashcards', label: '📚 Flashcards', icon: '📚' },
                { id: 'notes', label: '📝 Notes', icon: '📝' },
                { id: 'progress', label: '📈 Progress', icon: '📈' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Overview</h2>
                <p className="text-gray-600 dark:text-gray-300">Your learning journey at a glance</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Study Partners</p>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
                    </div>
                    <div className="text-3xl">👥</div>
                  </div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Sessions This Week</p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">8</p>
                    </div>
                    <div className="text-3xl">📅</div>
                  </div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Flashcards Mastered</p>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">156</p>
                    </div>
                    <div className="text-3xl">📚</div>
                  </div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Study Streak</p>
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">15 days</p>
                    </div>
                    <div className="text-3xl">🔥</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button onClick={() => setActiveTab('partners')} className="justify-center">
                    🔍 Find Study Partner
                  </Button>
                  <Button variant="secondary" onClick={() => setActiveTab('sessions')} className="justify-center">
                    📅 Schedule Session
                  </Button>
                  <Button variant="secondary" onClick={() => setActiveTab('flashcards')} className="justify-center">
                    📚 Create Flashcards
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: 'Completed study session', subject: 'Mathematics', time: '2 hours ago', icon: '✅' },
                    { action: 'Added new flashcards', subject: 'Computer Science', time: '4 hours ago', icon: '📚' },
                    { action: 'Connected with new study partner', subject: 'Physics', time: '1 day ago', icon: '👥' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-2xl">{activity.icon}</span>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{activity.subject} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Study Partners</h2>
                  <p className="text-gray-600 dark:text-gray-300">Connect with students in your courses</p>
                </div>
                <Button>🔍 Find New Partners</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPartners.map(partner => (
                  <div key={partner.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
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
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 text-sm">💬 Message</Button>
                      <Button variant="secondary" className="flex-1 text-sm">📅 Schedule</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Study Sessions</h2>
                  <p className="text-gray-600 dark:text-gray-300">Organize and join collaborative study sessions</p>
                </div>
                <Button>📅 Create Session</Button>
              </div>

              <div className="space-y-4">
                {mockSessions.map(session => (
                  <div key={session.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{session.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span>📚 {session.course}</span>
                          <span>📅 {session.date}</span>
                          <span>🕐 {session.time}</span>
                          <span>👥 {session.participants} participants</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="text-sm">Join Session</Button>
                        <Button variant="secondary" className="text-sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'flashcards' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Flashcards</h2>
                  <p className="text-gray-600 dark:text-gray-300">Build and share custom flashcard decks</p>
                </div>
                <Button>📚 New Deck</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockDecks.map(deck => (
                  <div key={deck.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{deck.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{deck.course}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <span>Progress</span>
                        <span>{deck.mastered}/{deck.cards}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
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

          {activeTab === 'notes' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Collaborative Notes</h2>
                  <p className="text-gray-600 dark:text-gray-300">Real-time note taking with your study partners</p>
                </div>
                <Button>📝 New Note</Button>
              </div>

              <div className="space-y-4">
                {mockNotes.map(note => (
                  <div key={note.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{note.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span>📚 {note.course}</span>
                          <span>🕐 Last edited {note.lastEdited}</span>
                          <span>👥 {note.collaborators} collaborators</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="text-sm">📝 Edit</Button>
                        <Button variant="secondary" className="text-sm">👥 Share</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Progress Tracking</h2>
                <p className="text-gray-600 dark:text-gray-300">Monitor your study progress and achievements</p>
              </div>

              {/* Progress Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Study Time This Week</h3>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24.5 hrs</div>
                  <div className="text-sm text-green-600 dark:text-green-400">↗️ +15% from last week</div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Flashcards Mastered</h3>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">156</div>
                  <div className="text-sm text-green-600 dark:text-green-400">↗️ +23 this week</div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Study Streak</h3>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">15 days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">🔥 Keep it up!</div>
                </div>
              </div>

              {/* Course Progress */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Course Progress</h3>
                <div className="space-y-4">
                  {user.courses.map((course, index) => (
                    <div key={course} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-900 dark:text-white font-medium">{course}</span>
                        <span className="text-gray-600 dark:text-gray-300">{75 + index * 5}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                          style={{ width: `${75 + index * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Study Streak Master', description: '15 days in a row', icon: '🔥', earned: true },
                    { title: 'Flashcard Champion', description: 'Mastered 150+ cards', icon: '🏆', earned: true },
                    { title: 'Social Learner', description: 'Connected with 10+ partners', icon: '👥', earned: true },
                    { title: 'Note Taker', description: 'Created 25+ collaborative notes', icon: '📝', earned: false }
                  ].map((achievement, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-700' 
                        : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <h4 className={`font-semibold ${achievement.earned ? 'text-yellow-800 dark:text-yellow-200' : 'text-gray-600 dark:text-gray-400'}`}>
                            {achievement.title}
                          </h4>
                          <p className={`text-sm ${achievement.earned ? 'text-yellow-600 dark:text-yellow-300' : 'text-gray-500 dark:text-gray-500'}`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
