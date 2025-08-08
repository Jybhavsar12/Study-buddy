export interface User {
  id: string
  name: string
  email: string
  courses: string[]
  avatar?: string
}

export interface StudySession {
  id: string
  title: string
  course: string
  date: Date
  participants: User[]
  notes?: string
}

export interface FlashCard {
  id: string
  front: string
  back: string
  deckId: string
}

export interface Deck {
  id: string
  name: string
  cards: FlashCard[]
  isPublic: boolean
  createdBy: string
}