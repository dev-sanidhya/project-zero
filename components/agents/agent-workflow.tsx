import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageSquare, Cpu, BarChart, CheckCircle } from "lucide-react"

const workflowSteps = [
  {
    step: 1,
    title: "Objective Reception & Analysis",
    description:
      "Navigator Agent receives and analyzes objectives, breaking them down into actionable tasks with priority scoring and resource requirements.",
    icon: MessageSquare,
    color: "from-violet-500 to-purple-600",
    agent: "Navigator",
    details: ["Goal parsing", "Task decomposition", "Priority assignment", "Resource estimation"],
  },
  {
    step: 2,
    title: "Intelligent Task Execution",
    description:
      "Backend Agent processes tasks using Claude 4 Opus, implementing solutions with quality assurance and error handling.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
    agent: "Backend",
    details: ["Task processing", "Solution implementation", "Quality checks", "Error recovery"],
  },
  {
    step: 3,
    title: "Real-time Performance Monitoring",
    description:
      "Telemetry Agent tracks all metrics, providing insights into performance, cost, and success rates in real-time.",
    icon: BarChart,
    color: "from-orange-500 to-red-600",
    agent: "Telemetry",
    details: ["Metric collection", "Performance analysis", "Cost tracking", "Success measurement"],
  },
  {
    step: 4,
    title: "Continuous Optimization",
    description:
      "All agents collaborate to optimize future performance based on learnings and feedback from completed tasks.",
    icon: CheckCircle,
    color: "from-blue-500 to-indigo-600",
    agent: "Collaborative",
    details: ["Performance review", "Process optimization", "Learning integration", "Future planning"],
  },
]

export function AgentWorkflow() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-emerald-600 text-white">Collaborative Workflow</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How Agents Work Together
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground dark:text-slate-300 px-4">
            A sophisticated four-stage collaborative process where each agent contributes their specialized intelligence
            to achieve optimal results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {workflowSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-slate-800 dark:border-slate-700">
                <div className={`h-1 bg-gradient-to-r ${step.color}`} />
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    <div className="flex-shrink-0">
                      <div
                        className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                      >
                        <step.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
                          <Badge variant="outline" className="text-xs font-mono w-fit">
                            STEP {step.step}
                          </Badge>
                          <Badge className={`bg-gradient-to-r ${step.color} text-white w-fit`}>{step.agent}</Badge>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-foreground dark:text-slate-200 bg-slate-50 dark:bg-slate-700/50 rounded-lg px-3 py-2"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-2`} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
