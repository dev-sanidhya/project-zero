import { MetricsHero } from "@/components/metrics/metrics-hero"
import { LiveMetrics } from "@/components/metrics/live-metrics"
import { PerformanceCharts } from "@/components/metrics/performance-charts"
import { SystemHealth } from "@/components/metrics/system-health"

export default function MetricsPage() {
  return (
    <div className="min-h-screen pt-20">
      <MetricsHero />
      <LiveMetrics />
      <PerformanceCharts />
      <SystemHealth />
    </div>
  )
}
