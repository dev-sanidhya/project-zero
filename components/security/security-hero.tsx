import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export function SecurityHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-background via-background to-red-50 dark:to-red-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-foreground/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-8 border-red-400/30 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2"
          >
            <Shield className="mr-2 h-4 w-4" />
            Enterprise Security
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Security
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              First
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security built into every layer of Project Zero. We protect your data with industry-leading
            security measures, compliance certifications, and transparent practices.
          </p>

          <div className="mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Security Inquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-500">SOC 2</div>
              <div className="text-sm text-muted-foreground">Type II Certified</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-500">ISO 27001</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-500">GDPR</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
