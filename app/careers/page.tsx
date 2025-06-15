import { CareersHero } from "@/components/careers/careers-hero"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersValues } from "@/components/careers/careers-values"

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <CareersHero />
      <CareersOpenings />
      <CareersBenefits />
      <CareersValues />
    </div>
  )
}
