import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Cpu, BarChart, CheckCircle } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Goal Analysis",
    description:
      "Navigator agent receives objectives and performs intelligent decomposition into actionable tasks with priority scoring.",
    icon: Target,
    color: "from-violet-500 to-purple-600",
    details: ["Objective parsing", "Task decomposition", "Priority assignment", "Resource estimation"],
  },
  {
    step: 2,
    title: "Intelligent Execution",
    description:
      "Backend agents process tasks using Claude 4 Opus, implementing solutions with precision and efficiency.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-600",
    details: ["Claude 4 Opus integration", "Parallel processing", "Quality assurance", "Error handling"],
  },
  {
    step: 3,
    title: "Performance Monitoring",
    description:
      "Telemetry systems track every metric, providing real-time insights into cost, performance, and success rates.",
    icon: BarChart,
    color: "from-orange-500 to-red-600",
    details: ["Real-time metrics", "Cost tracking", "Performance analysis", "Success measurement"],
  },
  {
    step: 4,
    title: "Continuous Optimization",
    description:
      "System learns from each execution, automatically optimizing workflows and improving future performance.",
    icon: CheckCircle,
    color: "from-blue-500 to-indigo-600",
    details: ["Machine learning", "Workflow optimization", "Performance tuning", "Predictive improvements"],
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-emerald-600 text-white">System Architecture</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How Skeleton Pods Works
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground dark:text-slate-300 px-4">
            A sophisticated four-stage process that transforms objectives into measurable results through intelligent
            automation.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-5xl">
          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-slate-800 dark:border-slate-700">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-5 dark:opacity-10`} />
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                      <div className="flex-shrink-0">
                        <div
                          className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg`}
                        >
                          <step.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                          <Badge variant="outline" className="text-xs font-mono px-3 py-1 w-fit">
                            STEP {step.step}
                          </Badge>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {step.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-foreground dark:text-slate-200 bg-white/50 dark:bg-slate-700/50 rounded-lg px-3 py-2"
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

                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6 sm:mt-8">
                    <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500">
                      <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600" />
                      <ArrowRight className="h-5 w-5" />
                      <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
