"use client"

import { useEffect } from "react"
import HomePage from "../page"

export default function ContactPage() {
  useEffect(() => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return <HomePage />
}
