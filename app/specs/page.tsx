"use client"

import { useEffect } from "react"
import HomePage from "../page"

export default function SpecsPage() {
  useEffect(() => {
    const element = document.getElementById("specs")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return <HomePage />
}
