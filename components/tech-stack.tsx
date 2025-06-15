import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Container, Cpu } from "lucide-react"

const techCategories = [
  {
    title: "Agent Framework",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    technologies: [
      { name: "CrewAI", description: "Multi-agent orchestration" },
      { name: "AutoGen", description: "Conversational AI framework" },
    ],
  },
  {
    title: "Monitoring & Analytics",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
    technologies: [
      { name: "Prometheus", description: "Cost & latency logging" },
      { name: "Custom Telemetry", description: "Performance tracking" },
    ],
  },
  {
    title: "Infrastructure",
    icon: Container,
    color: "from-orange-500 to-red-600",
    technologies: [
      { name: "Docker Compose", description: "Container orchestration" },
      { name: "Microservices", description: "Scalable architecture" },
    ],
  },
  {
    title: "AI Models",
    icon: Cpu,
    color: "from-blue-500 to-indigo-600",
    technologies: [
      { name: "Llama.cpp", description: "Local LLM execution" },
      { name: "GPT4All", description: "Offline AI capabilities" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built with cutting-edge tools for reliability, scalability, and performance
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {techCategories.map((category) => (
            <Card key={category.title} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-start justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-1">
                          {tech.name}
                        </Badge>
                        <p className="text-sm text-slate-600">{tech.description}</p>
                      </div>
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
