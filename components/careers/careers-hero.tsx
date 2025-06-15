import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CareersHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-emerald-50 dark:to-emerald-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-emerald-400/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-2"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            Join Our Team
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Shape the
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              AI Future
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Join a world-class team of AI researchers, engineers, and innovators building the next generation of
            intelligent agent collaboration systems. Help us transform how organizations achieve their goals.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="#openings">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-500">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-500">15+</div>
              <div className="text-sm text-muted-foreground">Open Positions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-500">100%</div>
              <div className="text-sm text-muted-foreground">Remote Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
