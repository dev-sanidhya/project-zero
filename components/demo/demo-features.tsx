import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, BarChart3, Shield } from "lucide-react"

const demoFeatures = [
  {
    title: "Real-Time Execution",
    description: "Watch agents process tasks in real-time with live progress updates and status changes.",
    icon: Zap,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Goal Decomposition",
    description: "See how Navigator agent breaks down complex objectives into actionable, prioritized tasks.",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Performance Metrics",
    description: "Monitor live performance data including execution time, success rates, and resource usage.",
    icon: BarChart3,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Quality Assurance",
    description: "Experience built-in quality checks and error handling throughout the execution process.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
]

export function DemoFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">Demo Features</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">What You'll Experience</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our interactive demo showcases the key capabilities and features of Project Zero's AI agent collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {demoFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
