import { APIHero } from "@/components/api/api-hero"
import { APIEndpoints } from "@/components/api/api-endpoints"
import { APIAuthentication } from "@/components/api/api-authentication"
import { APIExamples } from "@/components/api/api-examples"

export default function APIPage() {
  return (
    <div className="min-h-screen">
      <APIHero />
      <APIAuthentication />
      <APIEndpoints />
      <APIExamples />
    </div>
  )
}
