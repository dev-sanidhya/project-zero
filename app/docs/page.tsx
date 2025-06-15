import { DocsHero } from "@/components/docs/docs-hero"
import { DocsNavigation } from "@/components/docs/docs-navigation"
import { QuickStart } from "@/components/docs/quick-start"
import { APIReference } from "@/components/docs/api-reference"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <DocsHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <DocsNavigation />
          <div className="lg:col-span-3 space-y-12">
            <QuickStart />
            <APIReference />
          </div>
        </div>
      </div>
    </div>
  )
}
