import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export function TermsHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-slate-50 dark:to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-slate-400/30 bg-slate-500/10 text-slate-600 dark:text-slate-400 px-4 py-2"
          >
            <FileText className="mr-2 h-4 w-4" />
            Terms of Service
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Terms of
            <span className="block bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 dark:from-slate-400 dark:via-slate-300 dark:to-slate-200 bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of Project Zero's AI agent collaboration platform and services. Please read them
            carefully.
          </p>

          <div className="mt-12 text-sm text-muted-foreground">Last updated: December 15, 2024</div>
        </div>
      </div>
    </section>
  )
}
