'use client'

import { Button } from '@/components/ui/Button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Something went wrong!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">We encountered an error while loading this page.</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
}