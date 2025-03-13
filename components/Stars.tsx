"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Star {
  id: number
  size: number
  duration: number
  delay: number
  top: number
  right: number
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate initial stars
    const initialStars = Array.from({ length: 30 }).map((_, index) => createStar(index))
    setStars(initialStars)

    // Continuously add new stars
    const interval = setInterval(() => {
      setStars((prevStars) => {
        // Remove oldest star and add a new one
        const newStars = [...prevStars]
        newStars.shift()
        newStars.push(createStar(prevStars.length + Date.now()))
        return newStars
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Create a new star with random properties
  const createStar = (id: number): Star => {
    return {
      id,
      size: Math.random() * 3 + 2, // Size between 2-5px (increased)
      duration: Math.random() * 3 + 2, // Animation duration 2-5s (slowed down)
      delay: Math.random() * 1, // Reduced delay for more immediate visibility
      top: Math.random() * 30, // Start position from top 0-30%
      right: Math.random() * 30, // Start position from right 0-30%
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            opacity: 0,
            x: `${-star.right}%`,
            y: `${-star.top}%`,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            x: "-100%",
            y: "100%",
            scale: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut",
            times: [0, 0.1, 0.8, 1],
          }}
          className="absolute top-0 right-0"
        >
          {/* Star with trail */}
          <div className="relative">
            {/* The star */}
            <div
              className="absolute rounded-full bg-fuchsia-500"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(217, 70, 239, 0.9)`,
              }}
            />

            {/* The trail */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${40 + star.size * 15}px` }}
              transition={{
                duration: star.duration * 0.4,
                delay: star.delay,
                ease: "easeOut",
              }}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-l from-fuchsia-500 to-transparent"
              style={{
                height: `${Math.max(1.5, star.size / 1.5)}px`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

