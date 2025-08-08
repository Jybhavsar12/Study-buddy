'use client'

import { useEffect, useState } from 'react'

interface Bit {
  id: number
  x: number
  y: number
  size: number
  speed: number
  rotation: number
  rotationSpeed: number
  symbol: string
  opacity: number
}

export function ReactBits() {
  const [bits, setBits] = useState<Bit[]>([])

  const reactSymbols = ['⚛️', '{}', '<>', '[]', '()', '=>', 'fn', 'JS', 'TS', '💻', '🚀', '⭐', '🔥', '✨', '💡', '🎯', '📚', '🌟', '💎', '🎨']

  useEffect(() => {
    const createBit = (id: number): Bit => ({
      id,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 8,
      speed: Math.random() * 3 + 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      symbol: reactSymbols[Math.floor(Math.random() * reactSymbols.length)],
      opacity: Math.random() * 0.4 + 0.15
    })

    const initialBits = Array.from({ length: 25 }, (_, i) => createBit(i))
    setBits(initialBits)

    const animateBits = () => {
      setBits(prevBits => 
        prevBits.map(bit => {
          let newY = bit.y - bit.speed
          let newX = bit.x + Math.sin(bit.y * 0.01) * 0.5
          let newRotation = bit.rotation + bit.rotationSpeed

          if (newY < -50) {
            newY = window.innerHeight + 50
            newX = Math.random() * window.innerWidth
          }

          return {
            ...bit,
            x: newX,
            y: newY,
            rotation: newRotation
          }
        })
      )
    }

    const interval = setInterval(animateBits, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bits.map(bit => (
        <div
          key={bit.id}
          className="absolute text-blue-400 dark:text-blue-300 select-none"
          style={{
            left: `${bit.x}px`,
            top: `${bit.y}px`,
            fontSize: `${bit.size}px`,
            opacity: bit.opacity,
            transform: `rotate(${bit.rotation}deg)`,
            transition: 'none'
          }}
        >
          {bit.symbol}
        </div>
      ))}
    </div>
  )
}
