import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MetricsHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-background to-orange-50 dark:to-orange-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-orange-400/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Real-Time Analytics
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Performance
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Metrics
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Comprehensive monitoring and analytics providing real-time insights into system performance, cost
            optimization, and success metrics.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/demo">
                View Live Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
