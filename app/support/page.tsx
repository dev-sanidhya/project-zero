import { SupportHero } from "@/components/support/support-hero"
import { SupportOptions } from "@/components/support/support-options"
import { SupportFAQ } from "@/components/support/support-faq"
import { SupportResources } from "@/components/support/support-resources"

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <SupportHero />
      <SupportOptions />
      <SupportFAQ />
      <SupportResources />
    </div>
  )
}
