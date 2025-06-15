import { SecurityHero } from "@/components/security/security-hero"
import { SecurityFeatures } from "@/components/security/security-features"
import { SecurityCompliance } from "@/components/security/security-compliance"
import { SecurityContact } from "@/components/security/security-contact"

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      <SecurityHero />
      <SecurityFeatures />
      <SecurityCompliance />
      <SecurityContact />
    </div>
  )
}
