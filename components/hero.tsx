import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, Activity } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Zap className="mr-2 h-3 w-3" />
            Phase 1 MVP
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Project{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">ZERO</span>
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">Skeleton Pods</h2>
          <p className="mt-6 text-lg leading-8 text-slate-400 max-w-3xl mx-auto">
            Building the future of AI agent collaboration. A sophisticated system where intelligent agents work together
            to complete KPI tasks, track performance, and deliver measurable results in under 30 seconds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Target className="mr-2 h-4 w-4" />
              View Live Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Activity className="mr-2 h-4 w-4" />
              Monitor Metrics
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
