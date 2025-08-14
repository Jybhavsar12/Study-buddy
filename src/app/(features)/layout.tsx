import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - Study Buddy',
  description: 'Explore Study Buddy features'
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}