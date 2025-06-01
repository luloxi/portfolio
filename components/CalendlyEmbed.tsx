"use client"

import { useEffect } from "react"

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js")
    head?.appendChild(script)
    return () => {
      // Clean up script if needed
    }
  }, [])

  return <div className="calendly-inline-widget w-full h-full" data-url={url} style={{ minWidth: "320px" }}></div>
}

export default CalendlyEmbed
