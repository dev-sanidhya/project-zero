import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AgentHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-8 border-violet-400/30 bg-violet-500/10 text-violet-300 px-4 py-2">
            <Brain className="mr-2 h-4 w-4" />
            AI Agent Intelligence
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Meet Your
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Workforce
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
            Three specialized AI agents powered by Claude 4 Opus, each designed to excel in their domain while
            collaborating seamlessly to achieve your objectives.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/demo">
                Experience Agent Collaboration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
