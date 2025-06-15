import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, Database, Shield, Zap } from "lucide-react"

const architectureComponents = [
  {
    title: "Agent Layer",
    description: "Intelligent AI agents powered by Claude 4 Opus for autonomous task execution",
    icon: Network,
    color: "from-violet-500 to-purple-600",
    components: ["Navigator Agent", "Backend Agent", "Telemetry Agent"],
  },
  {
    title: "Orchestration Layer",
    description: "Event-driven architecture with blackboard pattern for agent coordination",
    icon: Zap,
    color: "from-emerald-500 to-teal-600",
    components: ["Event Bus", "Task Queue", "State Management", "Workflow Engine"],
  },
  {
    title: "Data Layer",
    description: "Distributed data storage and real-time analytics infrastructure",
    icon: Database,
    color: "from-orange-500 to-red-600",
    components: ["PostgreSQL", "Redis Cache", "Time Series DB", "Object Storage"],
  },
  {
    title: "Security Layer",
    description: "Enterprise-grade security with encryption, authentication, and monitoring",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    components: ["OAuth 2.0", "TLS 1.3", "Vault Secrets", "RBAC"],
  },
]

export function Architecture() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">System Architecture</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Scalable Architecture Design
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Built on a modern, distributed architecture that scales from startup to enterprise with reliability and
            performance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {architectureComponents.map((component) => (
            <Card
              key={component.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${component.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${component.color}`}
                  >
                    <component.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">{component.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">{component.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground mb-3">Key Components</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {component.components.map((comp, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${component.color} mr-2`} />
                        {comp}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Event-Driven Architecture</h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Our system uses an event-driven architecture with the blackboard pattern, enabling agents to
                  communicate asynchronously while maintaining loose coupling and high scalability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">TASK_CREATED</div>
                    <p className="text-sm text-muted-foreground">Navigator emits task events</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">TASK_PROCESSING</div>
                    <p className="text-sm text-muted-foreground">Backend picks up and executes</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">TASK_COMPLETED</div>
                    <p className="text-sm text-muted-foreground">Telemetry logs metrics</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
