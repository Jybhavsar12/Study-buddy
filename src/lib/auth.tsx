'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  subjects: string[]
  studyPreferences: {
    timePreference: 'morning' | 'afternoon' | 'evening' | 'night'
    studyStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading'
    groupSize: 'small' | 'medium' | 'large'
  }
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  loading: boolean
}

interface RegisterData {
  name: string
  email: string
  password: string
  subjects: string[]
  studyPreferences: User['studyPreferences']
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('study-buddy-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data - in real app, this would come from your backend
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      subjects: ['Mathematics', 'Computer Science'],
      studyPreferences: {
        timePreference: 'evening',
        studyStyle: 'visual',
        groupSize: 'small'
      }
    }
    
    setUser(mockUser)
    localStorage.setItem('study-buddy-user', JSON.stringify(mockUser))
    return true
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      subjects: userData.subjects,
      studyPreferences: userData.studyPreferences
    }
    
    setUser(newUser)
    localStorage.setItem('study-buddy-user', JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('study-buddy-user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

