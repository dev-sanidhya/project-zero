import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-violet-50 dark:to-violet-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-violet-400/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 px-4 py-2"
          >
            <Users className="mr-2 h-4 w-4" />
            Our Story
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Building the
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Future
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            We're a team of AI researchers, engineers, and visionaries dedicated to creating the next generation of
            intelligent agent collaboration systems that transform how organizations achieve their goals.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
