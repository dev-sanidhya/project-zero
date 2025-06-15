import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Play, CheckCircle, BarChart, DollarSign, Clock, Target } from "lucide-react"

const workflowSteps = [
  {
    step: 1,
    title: "Goal Reception",
    description: 'Navigator receives KPI target (e.g., "Launch Login Button")',
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    step: 2,
    title: "Task Creation",
    description: "Emits TASK_CREATED event to the Blackboard system",
    icon: Play,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 3,
    title: "Task Execution",
    description: "Back-end Agent picks up and completes the assigned task",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: 4,
    title: "Completion Signal",
    description: "Emits TASK_DONE event upon successful completion",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600",
  },
  {
    step: 5,
    title: "Metrics Logging",
    description: "Telemetry Agent logs time, cost, and performance data",
    icon: BarChart,
    color: "from-orange-500 to-red-600",
  },
  {
    step: 6,
    title: "Score Calculation",
    description: "Composite KPI success rate is computed automatically",
    icon: BarChart,
    color: "from-pink-500 to-rose-600",
  },
  {
    step: 7,
    title: "Budget Update",
    description: "Automated budget message emission and resource allocation",
    icon: DollarSign,
    color: "from-amber-500 to-orange-600",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 bg-slate-900 text-white">
            <Clock className="mr-2 h-3 w-3" />
            {"<30 Second Execution"}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Seamless Workflow Orchestration
          </h2>
          <p className="mt-4 text-lg text-slate-600">From goal to completion in seven precisely orchestrated steps</p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.color} flex-shrink-0`}
                      >
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="text-xs font-mono">
                            STEP {step.step}
                          </Badge>
                          <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                        </div>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowDown className="h-5 w-5 text-slate-400" />
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
