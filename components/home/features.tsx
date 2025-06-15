import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Workflow, BarChart3, Shield, Zap, Target } from "lucide-react"

const features = [
  {
    name: "Intelligent Orchestration",
    description:
      "Advanced AI agents that understand context, prioritize tasks, and adapt to changing requirements in real-time.",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    benefits: ["Context-aware decision making", "Dynamic task prioritization", "Adaptive workflow management"],
  },
  {
    name: "Seamless Automation",
    description:
      "End-to-end automation that eliminates manual intervention while maintaining full transparency and control.",
    icon: Workflow,
    color: "from-emerald-500 to-teal-600",
    benefits: ["Zero-touch operations", "Complete audit trails", "Intelligent error recovery"],
  },
  {
    name: "Real-time Analytics",
    description:
      "Comprehensive monitoring and analytics that provide actionable insights into system performance and ROI.",
    icon: BarChart3,
    color: "from-orange-500 to-red-600",
    benefits: ["Live performance metrics", "Cost optimization insights", "Predictive analytics"],
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security with advanced threat detection, data encryption, and compliance management.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    benefits: ["End-to-end encryption", "Threat detection", "Compliance automation"],
  },
  {
    name: "Lightning Performance",
    description: "Optimized for speed with sub-30-second task completion and real-time response capabilities.",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    benefits: ["Sub-30s execution", "Real-time processing", "Scalable architecture"],
  },
  {
    name: "Precision Targeting",
    description: "Laser-focused on KPI achievement with intelligent goal decomposition and success tracking.",
    icon: Target,
    color: "from-pink-500 to-rose-600",
    benefits: ["KPI-driven execution", "Goal decomposition", "Success measurement"],
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-foreground text-background">Core Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Redefining AI Collaboration
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4">
            Our advanced AI agents work together seamlessly to deliver exceptional results across every aspect of your
            operations.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.name}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <CardHeader className="relative p-4 sm:p-6">
                <div
                  className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-foreground/90">
                  {feature.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative p-4 sm:p-6 pt-0">
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mr-3`} />
                      {benefit}
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
