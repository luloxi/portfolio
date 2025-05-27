"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function HexBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pathname = usePathname()

  // Determine if we're on the automation page
  const isAutomationPage = pathname === "/automation"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Hexagon properties
    const hexSize = 30
    const hexSpacing = 70
    const hexagons: { x: number; y: number; size: number; opacity: number; speed: number }[] = []

    // Create hexagons
    const createHexagons = () => {
      hexagons.length = 0
      const columns = Math.ceil(canvas.width / hexSpacing) + 2
      const rows = Math.ceil(canvas.height / hexSpacing) + 2

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const offsetY = j % 2 === 0 ? 0 : hexSpacing / 2
          hexagons.push({
            x: i * hexSpacing - 100 + offsetY,
            y: j * hexSpacing - 100,
            size: hexSize * (0.2 + Math.random() * 0.3),
            opacity: 0.15 + Math.random() * 0.25,
            speed: 0.1 + Math.random() * 0.2,
          })
        }
      }
    }

    createHexagons()
    window.addEventListener("resize", createHexagons)

    // Draw hexagon
    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      if (!ctx) return

      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const xPos = x + size * Math.cos(angle)
        const yPos = y + size * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(xPos, yPos)
        } else {
          ctx.lineTo(xPos, yPos)
        }
      }
      ctx.closePath()

      // Change color based on current page
      const color = isAutomationPage
        ? `rgba(236, 72, 153, ${opacity})` // Pink for automation page
        : `rgba(16, 185, 129, ${opacity})` // Emerald for home page

      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    // Animation
    let animationFrameId: number

    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw hexagons
      hexagons.forEach((hex) => {
        hex.y += hex.speed
        if (hex.y > canvas.height + 100) {
          hex.y = -100
        }

        drawHexagon(hex.x, hex.y, hex.size, hex.opacity)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", createHexagons)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isAutomationPage]) // Re-run effect when page changes

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80" />
}
