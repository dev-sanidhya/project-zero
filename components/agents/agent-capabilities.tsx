import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Workflow, Shield, Zap, Target, Users } from "lucide-react"

const capabilities = [
  {
    title: "Collaborative Intelligence",
    description:
      "Agents communicate and coordinate seamlessly, sharing context and insights to optimize overall performance.",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    features: [
      "Inter-agent communication",
      "Shared knowledge base",
      "Coordinated decision making",
      "Conflict resolution",
    ],
  },
  {
    title: "Adaptive Learning",
    description:
      "Each agent continuously learns from interactions, improving performance and adapting to new scenarios.",
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    features: ["Pattern recognition", "Performance optimization", "Behavioral adaptation", "Knowledge retention"],
  },
  {
    title: "Autonomous Operation",
    description:
      "Agents operate independently while maintaining alignment with objectives and organizational policies.",
    icon: Workflow,
    color: "from-orange-500 to-red-600",
    features: ["Self-directed execution", "Policy compliance", "Autonomous decision making", "Goal alignment"],
  },
  {
    title: "Security & Compliance",
    description: "Built-in security measures and compliance frameworks ensure safe and regulated operation.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    features: ["Data encryption", "Access control", "Audit trails", "Compliance monitoring"],
  },
  {
    title: "High Performance",
    description: "Optimized for speed and efficiency, delivering results faster than traditional automation systems.",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    features: ["Parallel processing", "Resource optimization", "Caching strategies", "Performance monitoring"],
  },
  {
    title: "Precision Targeting",
    description: "Laser-focused on achieving specific KPIs and business objectives with measurable outcomes.",
    icon: Target,
    color: "from-pink-500 to-rose-600",
    features: ["KPI tracking", "Goal measurement", "Success metrics", "ROI optimization"],
  },
]

export function AgentCapabilities() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-foreground text-background">Advanced Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Beyond Traditional Automation
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground dark:text-slate-300 px-4">
            Our AI agents possess sophisticated capabilities that enable them to handle complex, dynamic scenarios with
            intelligence and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((capability) => (
            <Card
              key={capability.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-slate-700 dark:border-slate-600"
            >
              <div className={`h-1 bg-gradient-to-r ${capability.color}`} />
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${capability.color}`}
                  >
                    <capability.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-foreground dark:text-white">
                    {capability.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                  {capability.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground dark:text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.color} mr-2`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
