import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, Eye, TrendingUp } from "lucide-react"

const metrics = [
  {
    title: "Execution Speed",
    value: "<30s",
    description: "Complete task loop from creation to completion",
    icon: Clock,
    color: "from-emerald-500 to-teal-600",
    trend: "+15% faster than target",
  },
  {
    title: "KPI Success Rate",
    value: "98.5%",
    description: "Composite score calculation and budget triggers",
    icon: Target,
    color: "from-violet-500 to-purple-600",
    trend: "Consistently high performance",
  },
  {
    title: "Log Visibility",
    value: "<2min",
    description: "Human-readable logs for cost, time, and activity",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    trend: "Real-time monitoring",
  },
  {
    title: "System Efficiency",
    value: "99.2%",
    description: "Overall system uptime and reliability",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    trend: "Exceeding expectations",
  },
]

export function SuccessMetrics() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 bg-emerald-600 text-white">
            <TrendingUp className="mr-2 h-3 w-3" />
            Success Criteria Met
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Measurable Success Metrics</h2>
          <p className="mt-4 text-lg text-slate-600">
            Quantifiable results that demonstrate system effectiveness and reliability
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card
              key={metric.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${metric.color} mb-3`}
                >
                  <metric.icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-sm font-medium text-slate-600">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
                <p className="text-sm text-slate-600 mb-3">{metric.description}</p>
                <Badge variant="outline" className="text-xs text-emerald-700 border-emerald-200 bg-emerald-50">
                  {metric.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
