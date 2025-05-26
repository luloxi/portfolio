"use client"

import { useEffect } from "react"

export function N8nChat() {
  useEffect(() => {
    // Check if n8n chat is already loaded
    if (document.querySelector("#n8n-chat-script")) {
      return
    }

    // Load the n8n chat CSS
    const link = document.createElement("link")
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
    link.rel = "stylesheet"
    link.id = "n8n-chat-css"
    document.head.appendChild(link)

    // Load the n8n chat script
    const script = document.createElement("script")
    script.type = "module"
    script.id = "n8n-chat-script"
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://durlock.app.n8n.cloud/webhook/443748b4-2523-4379-8cff-f7cc4055d59f/chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          "Hi, I'm LuloxBot! 👋 What can I help you with?"
        ],
        i18n: {
          en: {
            title: "Chat with Lulox's AI",
            subtitle: "Send me a message and I'll assist you.",
            
            getStarted: "Start Conversation",
            inputPlaceholder: "Type your message...",
          },
        },
      });
    `
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      // Remove the chat script
      const existingScript = document.querySelector("#n8n-chat-script")
      if (existingScript) {
        existingScript.remove()
      }

      // Remove the CSS link
      const existingLink = document.querySelector("#n8n-chat-css")
      if (existingLink) {
        existingLink.remove()
      }

      // Remove the chat element if it exists
      const chatElement = document.querySelector("#n8n-chat")
      if (chatElement) {
        chatElement.remove()
      }
    }
  }, [])

  return (
    <>
      <div id="n8n-chat"></div>
      
    </>
  )
}
