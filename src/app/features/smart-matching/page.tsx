'use client'

import { Button } from '@/components/ui/Button'
import { ReactBits } from '@/components/ui/ReactBits'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import Link from 'next/link'
import { useState } from 'react'

export default function SmartMatchingPage() {
  const [selectedCourse, setSelectedCourse] = useState('Computer Science')

  const courses = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology']
  
  const mockMatches = [
    { name: 'Alice Johnson', course: 'Computer Science', match: '95%', status: 'online', skills: ['React', 'JavaScript', 'Python'], studyTime: 'Evenings', location: 'Library' },
    { name: 'Bob Smith', course: 'Computer Science', match: '89%', status: 'busy', skills: ['Java', 'Data Structures', 'Algorithms'], studyTime: 'Mornings', location: 'Online' },
    { name: 'Carol Davis', course: 'Computer Science', match: '92%', status: 'online', skills: ['Web Development', 'Databases', 'APIs'], studyTime: 'Afternoons', location: 'Cafe' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500 relative">
      <ReactBits />
      
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Smart Matching</span>
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
              Smart Study Partner Matching
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our AI-powered algorithm analyzes your learning style, schedule, and academic goals to find the perfect study partners who complement your strengths and help you overcome challenges.
            </p>
          </div>

          {/* How It Works */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced algorithms analyze your learning patterns, strengths, and preferences</p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Perfect Matches</h3>
              <p className="text-gray-600 dark:text-gray-300">Find partners with complementary skills and compatible study schedules</p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Instant Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">Start collaborating immediately with verified study partners</p>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Try Smart Matching</h2>
            
            {/* Course Filter */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select Your Course:</label>
              <div className="flex flex-wrap gap-2">
                {courses.map(course => (
                  <button
                    key={course}
                    onClick={() => setSelectedCourse(course)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCourse === course
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>

            {/* Match Results */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Top Matches for {selectedCourse}</h3>
              {mockMatches.map((match, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{match.name.charAt(0)}</span>
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                          match.status === 'online' ? 'bg-green-500' : 
                          match.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{match.name}</h4>
                          <span className="text-2xl font-bold text-green-600 dark:text-green-400">{match.match}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">match</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300">Skills: </span>
                            <span className="text-gray-600 dark:text-gray-400">{match.skills.join(', ')}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300">Study Time: </span>
                            <span className="text-gray-600 dark:text-gray-400">{match.studyTime}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700 dark:text-gray-300">Location: </span>
                            <span className="text-gray-600 dark:text-gray-400">{match.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="text-sm">💬 Connect</Button>
                      <Button variant="secondary" className="text-sm">👀 Profile</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Study Partners?</h2>
              <p className="text-xl mb-6 opacity-90">Join Study Buddy and let our AI find your perfect matches</p>
              <Link href="/auth/register">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  🚀 Start Matching Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
