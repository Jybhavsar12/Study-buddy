'use client'

import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import Link from 'next/link'
import { useState } from 'react'

export default function SessionSchedulingPage() {
  const [selectedDate, setSelectedDate] = useState('today')

  const sessions = {
    today: [
      { time: '2:00 PM', title: 'Calculus Study Group', participants: 4, spots: 2, course: 'Mathematics' },
      { time: '4:00 PM', title: 'React Fundamentals', participants: 6, spots: 1, course: 'Computer Science' }
    ],
    tomorrow: [
      { time: '10:00 AM', title: 'Physics Lab Review', participants: 3, spots: 3, course: 'Physics' },
      { time: '3:00 PM', title: 'Database Design', participants: 5, spots: 2, course: 'Computer Science' }
    ],
    week: [
      { time: 'Mon 2:00 PM', title: 'Algorithm Practice', participants: 8, spots: 0, course: 'Computer Science' },
      { time: 'Wed 1:00 PM', title: 'Organic Chemistry', participants: 4, spots: 4, course: 'Chemistry' },
      { time: 'Fri 4:00 PM', title: 'Linear Algebra', participants: 6, spots: 2, course: 'Mathematics' }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Session Scheduling</span>
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
              Smart Session Scheduling
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Organize study sessions effortlessly with integrated calendar management, automatic reminders, and smart conflict detection.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">AI finds optimal times when all participants are available</p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Auto Reminders</h3>
              <p className="text-gray-600 dark:text-gray-300">Never miss a session with smart notifications and reminders</p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Goal Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">Set session objectives and track learning outcomes</p>
            </div>
          </div>

          {/* Interactive Calendar Demo */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Browse Available Sessions</h2>
            
            {/* Date Filter */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                {[
                  { id: 'today', label: 'Today' },
                  { id: 'tomorrow', label: 'Tomorrow' },
                  { id: 'week', label: 'This Week' }
                ].map(date => (
                  <button
                    key={date.id}
                    onClick={() => setSelectedDate(date.id)}
                    className={`px-6 py-2 rounded-md transition-all duration-300 ${
                      selectedDate === date.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {date.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Session List */}
            <div className="space-y-4">
              {sessions[selectedDate as keyof typeof sessions].map((session, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{session.time}</span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                        <span className="flex items-center gap-1">
                          <span>📚</span>
                          {session.course}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>👥</span>
                          {session.participants} joined
                        </span>
                        <span className={`flex items-center gap-1 ${
                          session.spots > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          <span>✨</span>
                          {session.spots > 0 ? `${session.spots} spots left` : 'Full'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="text-sm" 
                        disabled={session.spots === 0}
                      >
                        {session.spots > 0 ? '🚀 Join Session' : '⏰ Join Waitlist'}
                      </Button>
                      <Button variant="secondary" className="text-sm">ℹ️ Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Create Session Demo */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Create Your Own Session</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Session Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Advanced Calculus Review"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Course</label>
                  <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>Mathematics</option>
                    <option>Computer Science</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Time</label>
                    <input 
                      type="time" 
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max Participants</label>
                  <input 
                    type="number" 
                    placeholder="6"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                  <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>Online (Video Call)</option>
                    <option>Library - Study Room A</option>
                    <option>Student Center</option>
                    <option>Coffee Shop</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                  <textarea 
                    placeholder="What will you study in this session?"
                    rows={3}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Button className="px-8">📅 Create Session</Button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your First Session?</h2>
              <p className="text-xl mb-6 opacity-90">Join Study Buddy and start organizing productive study sessions</p>
              <Link href="/auth/register">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  🚀 Start Scheduling
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}