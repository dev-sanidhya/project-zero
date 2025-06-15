import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export function PrivacyHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-blue-400/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2"
          >
            <Shield className="mr-2 h-4 w-4" />
            Privacy Policy
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Your Privacy
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Matters
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information. This
            policy explains how we collect, use, and safeguard your data.
          </p>

          <div className="mt-12 text-sm text-muted-foreground">Last updated: December 15, 2024</div>
        </div>
      </div>
    </section>
  )
}
