import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function SupportHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-blue-400/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Help & Support
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            We're Here to
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Help You
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Get the support you need to succeed with Project Zero. Our expert team is available 24/7 to help you
            maximize your AI agent collaboration experience.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
