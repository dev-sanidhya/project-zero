import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, Server, BarChart3, ArrowRight } from "lucide-react"

const agents = [
  {
    name: "Navigator",
    icon: Navigation,
    description: "Intelligent task decomposition and goal orchestration",
    role: "Breaks down complex goals into actionable tasks",
    color: "from-violet-500 to-purple-600",
    features: ["Goal Analysis", "Task Prioritization", "Resource Allocation"],
  },
  {
    name: "Back-end",
    icon: Server,
    description: "Robust task execution and feature implementation",
    role: "Executes tasks and builds features with precision",
    color: "from-emerald-500 to-teal-600",
    features: ["Task Execution", "Feature Building", "Quality Assurance"],
  },
  {
    name: "Telemetry",
    icon: BarChart3,
    description: "Advanced performance monitoring and analytics",
    role: "Tracks cost, time, and success metrics in real-time",
    color: "from-orange-500 to-red-600",
    features: ["Cost Tracking", "Performance Metrics", "Success Analytics"],
  },
]

export function AgentOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Intelligent Agent Ecosystem</h2>
          <p className="mt-4 text-lg text-slate-600">
            Three specialized AI agents working in perfect harmony to deliver exceptional results
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <Card
              key={agent.name}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              />
              <CardHeader className="relative">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${agent.color} mb-4`}
                >
                  <agent.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">{agent.name}</CardTitle>
                <CardDescription className="text-slate-600">{agent.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm text-slate-700 mb-4 font-medium">{agent.role}</p>
                <div className="space-y-2">
                  {agent.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
