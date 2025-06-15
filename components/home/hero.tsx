"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-emerald-50 dark:to-emerald-950/50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
        {mounted && (
          <>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </>
        )}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-6 sm:mb-8 border-emerald-400/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 sm:px-4 py-2 text-sm sm:text-base animate-fade-in"
          >
            <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Next-Generation AI Collaboration
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-foreground animate-fade-in-up">
            <span className="block">Project</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Zero
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
            Revolutionary AI agent ecosystem that orchestrates intelligent collaboration, automates complex workflows,
            and delivers measurable results at unprecedented speed.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up delay-300 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group"
              asChild
            >
              <Link href="/demo">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border text-foreground hover:bg-muted px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group"
              asChild
            >
              <Link href="/agents">
                <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Explore Agents
              </Link>
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center animate-fade-in-up delay-500 px-4">
            <div className="space-y-2 group hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-500">{"<30s"}</div>
              <div className="text-sm text-muted-foreground">Task Completion</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl font-bold text-teal-500">99.8%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2 group hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-500">24/7</div>
              <div className="text-sm text-muted-foreground">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
