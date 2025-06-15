import { StatusHero } from "@/components/status/status-hero"
import { StatusOverview } from "@/components/status/status-overview"
import { StatusHistory } from "@/components/status/status-history"
import { StatusSubscribe } from "@/components/status/status-subscribe"

export default function StatusPage() {
  return (
    <div className="min-h-screen">
      <StatusHero />
      <StatusOverview />
      <StatusHistory />
      <StatusSubscribe />
    </div>
  )
}
