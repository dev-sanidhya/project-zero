import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Target, Zap, DollarSign, Shield } from "lucide-react"

const stats = [
  {
    name: "Task Completion Speed",
    value: "< 30 seconds",
    change: "+40% faster than traditional systems",
    icon: Clock,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Success Rate",
    value: "99.8%",
    change: "Consistently exceeding targets",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Cost Efficiency",
    value: "85% reduction",
    change: "In operational overhead",
    icon: DollarSign,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "System Uptime",
    value: "99.99%",
    change: "Enterprise-grade reliability",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Processing Power",
    value: "1000+ tasks/hour",
    change: "Scalable performance",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
  },
  {
    name: "ROI Improvement",
    value: "300%+",
    change: "Average client improvement",
    icon: TrendingUp,
    color: "from-pink-500 to-rose-600",
  },
]

export function Stats() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-foreground text-background">
            <TrendingUp className="mr-2 h-3 w-3" />
            Performance Metrics
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Measurable Impact
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground dark:text-slate-300 px-4">
            Real results from organizations that have transformed their operations with Skeleton Pods.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <Card
              key={stat.name}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white dark:bg-slate-800 dark:border-slate-700"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity dark:opacity-10 dark:group-hover:opacity-20`}
              />
              <CardContent className="relative p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}
                  >
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-800 dark:bg-emerald-950"
                  >
                    Live
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground dark:text-slate-400">{stat.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white">{stat.value}</div>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
