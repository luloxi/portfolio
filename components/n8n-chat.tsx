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
        showWelcomeScreen: true,
        initialMessages: [
          "Hi, I'm LuloxBot! 👋 What's your email address?"
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
      <style jsx global>{`
        :root {
          --chat--color-primary: #10b981;
          --chat--color-primary-shade-50: #059669;
          --chat--color-primary-shade-100: #047857;
          --chat--color-secondary: #6366f1;
          --chat--color-secondary-shade-50: #4f46e5;
          --chat--color-white: #ffffff;
          --chat--color-light: #f9fafb;
          --chat--color-light-shade-50: #f3f4f6;
          --chat--color-light-shade-100: #e5e7eb;
          --chat--color-medium: #6b7280;
          --chat--color-dark: #111827;
          --chat--color-disabled: #9ca3af;
          --chat--color-typing: #4b5563;

          --chat--spacing: 1rem;
          --chat--border-radius: 0.5rem;
          --chat--transition-duration: 0.2s;

          --chat--window--width: 400px;
          --chat--window--height: 600px;

          --chat--header--background: #111827;
          --chat--header--color: #f9fafb;
          --chat--header--border-bottom: 1px solid #374151;

          --chat--message--bot--background: #f3f4f6;
          --chat--message--bot--color: #111827;
          --chat--message--user--background: #10b981;
          --chat--message--user--color: #ffffff;

          --chat--toggle--background: #10b981;
          --chat--toggle--hover--background: #059669;
          --chat--toggle--active--background: #047857;
          --chat--toggle--color: #ffffff;
          --chat--toggle--size: 64px;
        }

        /* Custom positioning for bottom right */
        #n8n-chat {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 1000 !important;
        }

        /* Dark theme adjustments */
        .n8n-chat-window {
          background: #111827 !important;
          border: 1px solid #374151 !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2) !important;
        }

        .n8n-chat-messages {
          background: #111827 !important;
        }

        .n8n-chat-input-container {
          background: #111827 !important;
          border-top: 1px solid #374151 !important;
        }

        .n8n-chat-input {
          background: #1f2937 !important;
          border: 1px solid #374151 !important;
          color: #f9fafb !important;
        }

        .n8n-chat-input::placeholder {
          color: #9ca3af !important;
        }

        .n8n-chat-send-button {
          background: #10b981 !important;
        }

        .n8n-chat-send-button:hover {
          background: #059669 !important;
        }

        /* Additional dark theme styles */
        .n8n-chat-toggle {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2) !important;
        }

        .n8n-chat-message-bot {
          background: #374151 !important;
          color: #f9fafb !important;
        }

        .n8n-chat-welcome-screen {
          background: #111827 !important;
          color: #f9fafb !important;
        }

        .n8n-chat-welcome-title {
          color: #f9fafb !important;
        }

        .n8n-chat-welcome-subtitle {
          color: #d1d5db !important;
        }

        .n8n-chat-get-started-button {
          background: #10b981 !important;
          color: #ffffff !important;
        }

        .n8n-chat-get-started-button:hover {
          background: #059669 !important;
        }
      `}</style>
    </>
  )
}
