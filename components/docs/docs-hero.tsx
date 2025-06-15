import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DocsHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-slate-50 dark:to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-slate-400/30 bg-slate-500/10 text-slate-600 dark:text-slate-400 px-4 py-2"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Developer Resources
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            <span className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 dark:from-slate-400 dark:via-slate-300 dark:to-slate-200 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides, API references, and examples to help you integrate and maximize Project Zero's
            capabilities.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/api">
                API Reference
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
