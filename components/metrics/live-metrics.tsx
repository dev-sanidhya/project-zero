"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, DollarSign, Zap, TrendingUp, Activity } from "lucide-react"

const metrics = [
  {
    name: "Task Completion Time",
    value: "24.3s",
    change: "-12%",
    trend: "down",
    icon: Clock,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Success Rate",
    value: "99.8%",
    change: "+0.2%",
    trend: "up",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Cost Per Task",
    value: "$0.023",
    change: "-18%",
    trend: "down",
    icon: DollarSign,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Throughput",
    value: "1,247/hr",
    change: "+23%",
    trend: "up",
    icon: Zap,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "System Efficiency",
    value: "94.7%",
    change: "+5.2%",
    trend: "up",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-600",
  },
  {
    name: "Active Agents",
    value: "3/3",
    change: "100%",
    trend: "stable",
    icon: Activity,
    color: "from-pink-500 to-rose-600",
  },
]

export function LiveMetrics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">
            <Activity className="mr-2 h-3 w-3" />
            Live Data
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Real-Time Performance</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Monitor system performance with live metrics updated every second.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={metric.name}
              className={`group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                mounted ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-1 bg-gradient-to-r ${metric.color}`} />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${metric.color}`}
                  >
                    <metric.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      metric.trend === "up"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400"
                        : metric.trend === "down"
                          ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400"
                          : "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                    }`}
                  >
                    {metric.change}
                  </Badge>
                </div>
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${metric.color} mr-2 animate-pulse`} />
                  Updated now
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
