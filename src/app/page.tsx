"use client"

import { ModeToggle } from "@/components/mode-toggle"
import * as React from "react"


export default function Home() {
  return (
    <main className="bg-zinc-950 dark:bg-white h-screen">
      <ModeToggle />
    </main>
  )
}
