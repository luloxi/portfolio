"use client"

import type React from "react"
import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface YouTubePlaceholderProps {
  className?: string
}

const YouTubePlaceholder: React.FC<YouTubePlaceholderProps> = ({ className = "" }) => {
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
  }

  return (
    <div className={`relative rounded-lg overflow-hidden bg-gray-800 ${className}`}>
      <div className="aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {showMessage ? (
            <div className="bg-black/80 text-white px-4 py-2 rounded-md">Video will be added soon!</div>
          ) : (
            <Button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <Play className="h-8 w-8 text-white" fill="white" />
            </Button>
          )}
        </div>
        <div className="text-center text-white z-10 font-bold text-xl">See Automation in Action</div>
      </div>
    </div>
  )
}

export default YouTubePlaceholder
