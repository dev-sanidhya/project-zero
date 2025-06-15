import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, Server, BarChart3, Target, Monitor } from "lucide-react"

const agents = [
  {
    name: "Navigator Agent",
    subtitle: "Strategic Intelligence & Task Orchestration",
    icon: Navigation,
    description:
      "The Navigator Agent serves as the strategic brain of the system, analyzing complex objectives and breaking them down into actionable, prioritized tasks. It understands context, dependencies, and resource requirements to create optimal execution plans.",
    color: "from-violet-500 to-purple-600",
    capabilities: [
      "Intelligent goal decomposition",
      "Context-aware task prioritization",
      "Resource allocation optimization",
      "Dependency mapping and resolution",
      "Strategic planning and forecasting",
      "Risk assessment and mitigation",
    ],
    technologies: ["Claude 4 Opus", "Advanced NLP", "Decision Trees", "Graph Analysis"],
    metrics: {
      "Task Accuracy": "99.2%",
      "Planning Speed": "< 5 seconds",
      "Resource Efficiency": "94%",
    },
  },
  {
    name: "Backend Agent",
    subtitle: "Execution Engine & Implementation Specialist",
    icon: Server,
    description:
      "The Backend Agent is the execution powerhouse, transforming plans into reality. It handles complex implementations, manages system integrations, and ensures quality delivery while maintaining optimal performance standards.",
    color: "from-emerald-500 to-teal-600",
    capabilities: [
      "High-performance task execution",
      "System integration management",
      "Quality assurance automation",
      "Error handling and recovery",
      "Scalable processing architecture",
      "Real-time status reporting",
    ],
    technologies: ["Claude 4 Opus", "Microservices", "Docker", "API Integration"],
    metrics: {
      "Execution Speed": "< 25 seconds",
      "Success Rate": "99.8%",
      Throughput: "1000+ tasks/hour",
    },
  },
  {
    name: "Frontend Agent",
    subtitle: "User Interface & Experience Specialist",
    icon: Monitor,
    description:
      "The Frontend Agent specializes in creating intuitive user interfaces and seamless user experiences. It transforms backend functionality into beautiful, responsive, and accessible web applications that users love to interact with.",
    color: "from-cyan-500 to-blue-600",
    capabilities: [
      "Responsive UI/UX design",
      "Component-based architecture",
      "Accessibility optimization",
      "Performance optimization",
      "Cross-browser compatibility",
      "Real-time data visualization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics: {
      "Load Time": "< 2 seconds",
      "Accessibility Score": "98%",
      "User Satisfaction": "96%",
    },
  },
  {
    name: "Telemetry Agent",
    subtitle: "Analytics Intelligence & Performance Optimization",
    icon: BarChart3,
    description:
      "The Telemetry Agent provides comprehensive monitoring, analytics, and optimization insights. It tracks every metric, identifies patterns, and provides actionable intelligence for continuous improvement.",
    color: "from-orange-500 to-red-600",
    capabilities: [
      "Real-time performance monitoring",
      "Advanced analytics and reporting",
      "Cost optimization analysis",
      "Predictive performance modeling",
      "Anomaly detection and alerting",
      "ROI measurement and tracking",
    ],
    technologies: ["Claude 4 Opus", "Prometheus", "Time Series DB", "ML Analytics"],
    metrics: {
      "Monitoring Coverage": "100%",
      "Alert Response": "< 1 second",
      "Data Accuracy": "99.9%",
    },
  },
]

export function AgentDetails() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Specialized AI Agents
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground dark:text-slate-300 px-4">
            Each agent brings unique capabilities and intelligence, working together to deliver exceptional results.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {agents.map((agent, index) => (
            <Card
              key={agent.name}
              className="border-0 shadow-xl overflow-hidden bg-white dark:bg-slate-800 dark:border-slate-700"
            >
              <div className={`h-2 bg-gradient-to-r ${agent.color}`} />
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Agent Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                      <div
                        className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.color} flex-shrink-0`}
                      >
                        <agent.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-2">
                          {agent.name}
                        </h3>
                        <p className="text-base sm:text-lg text-muted-foreground dark:text-slate-300 font-medium">
                          {agent.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                      {agent.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground dark:text-white mb-3">Core Capabilities</h4>
                        <div className="space-y-2">
                          {agent.capabilities.map((capability, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground dark:text-slate-300"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.color} mr-3 flex-shrink-0`}
                              />
                              {capability}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground dark:text-white mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs dark:bg-slate-700 dark:text-slate-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 sm:p-6">
                    <h4 className="font-semibold text-foreground dark:text-white mb-4 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Performance Metrics
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(agent.metrics).map(([metric, value]) => (
                        <div key={metric} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground dark:text-slate-300">{metric}</span>
                          <span className="font-semibold text-foreground dark:text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
