"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a server-side client with service role key for secure operations
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function submitContactForm(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!email || !message) {
    return {
      success: false,
      error: "Email and message are required",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    }
  }

  try {
    const { error } = await supabase.from("contacts").insert([
      {
        email: email.trim(),
        message: message.trim(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to submit your message. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Unexpected error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
