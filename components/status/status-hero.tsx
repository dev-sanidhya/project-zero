import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function StatusHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-emerald-50 dark:to-emerald-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-emerald-400/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-2"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            System Status
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            All Systems
            <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Operational
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Real-time status of Project Zero services and infrastructure. Monitor system health, uptime, and performance
            metrics.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-500">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime (30 days)</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-500">45ms</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-500">0</div>
              <div className="text-sm text-muted-foreground">Active Incidents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
