import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
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
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Let's Build the
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Future Together
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your operations with AI agent collaboration? Our team is here to help you get started
            with Project Zero and unlock unprecedented efficiency.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/demo">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-muted px-8 py-4 text-lg"
              asChild
            >
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-500">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-teal-500">{"<4hrs"}</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-cyan-500">100%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
