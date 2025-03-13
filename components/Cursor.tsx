"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorColor, setCursorColor] = useState("bg-white") // Default white color

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const detectBackgroundColor = () => {
      const bodyBgColor = window.getComputedStyle(document.body).backgroundColor
      const isWhiteBg = bodyBgColor === "rgb(255, 255, 255)" // Check for white page
      setCursorColor(isWhiteBg ? "bg-pink-400" : "bg-white") // Change cursor color accordingly
    }

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("load", detectBackgroundColor)
    window.addEventListener("resize", detectBackgroundColor)

    const timeout = setTimeout(addHoverListeners, 500)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("load", detectBackgroundColor)
      window.removeEventListener("resize", detectBackgroundColor)
      clearTimeout(timeout)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-150 ease-out ${cursorColor} ${
          isHovering ? "w-16 h-16" : "w-8 h-8"
        }`}
      >
        <ArrowUpRight
          className={`transition-all duration-150 text-pink-600 m-4 ${
            isHovering ? "w-12 h-12" : "w-0 h-0"
          }`}
          strokeWidth={3}
        />
      </div>
    </div>
  )
}
