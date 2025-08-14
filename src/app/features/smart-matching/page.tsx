import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load heavy components
const SmartMatchingDemo = dynamic(() => import('@/components/features/SmartMatchingDemo'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
})

export default function SmartMatchingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Suspense fallback={<div>Loading...</div>}>
        <SmartMatchingDemo />
      </Suspense>
    </div>
  )
}
