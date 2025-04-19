"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHoveringImage, setIsHoveringImage] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorColor, setCursorColor] = useState("bg-white")

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const detectBackgroundColor = () => {
      const bodyBgColor = window.getComputedStyle(document.body).backgroundColor
      const isWhiteBg = bodyBgColor === "rgb(255, 255, 255)"
      setCursorColor(isWhiteBg ? "bg-pink-400" : "bg-white")
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Only track hover for elements with the class "custom-cursor-target"
    const addImageHoverListeners = () => {
      const imageElements = document.querySelectorAll(".custom-cursor-target")
      imageElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHoveringImage(true))
        el.addEventListener("mouseleave", () => setIsHoveringImage(false))
      })
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("load", detectBackgroundColor)
    window.addEventListener("resize", detectBackgroundColor)

    const timeout = setTimeout(addImageHoverListeners, 300)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("load", detectBackgroundColor)
      window.removeEventListener("resize", detectBackgroundColor)
      clearTimeout(timeout)
    }
  }, [isVisible])

  if (!isVisible || !isHoveringImage) return null

  return (
    <div
      className="hidden md:flex fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`relative flex items-center justify-center rounded-full transition-all duration-150 ease-out ${cursorColor} w-12 h-12`}
      >
        <ArrowUpRight className="text-pink-600 w-6 h-6" strokeWidth={3} />
      </div>
    </div>
  )
}
