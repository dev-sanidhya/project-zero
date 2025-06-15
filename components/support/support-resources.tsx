import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Code, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides, API references, and tutorials",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    items: ["Quick Start Guide", "API Reference", "Best Practices", "Troubleshooting"],
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides and webinars",
    icon: Video,
    color: "from-emerald-500 to-teal-600",
    items: ["Getting Started", "Advanced Features", "Integration Guides", "Webinar Series"],
  },
  {
    title: "Code Examples",
    description: "Sample code and implementation examples",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    items: ["SDK Examples", "Integration Samples", "Use Case Templates", "GitHub Repository"],
  },
  {
    title: "Community",
    description: "Connect with other developers and users",
    icon: MessageSquare,
    color: "from-orange-500 to-red-600",
    items: ["Discussion Forum", "Discord Server", "User Groups", "Developer Blog"],
  },
]

export function SupportResources() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Additional Resources</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our comprehensive library of resources to help you get the most out of Project Zero.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${resource.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${resource.color}`}
                  >
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">{resource.title}</CardTitle>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${resource.color} mr-3`} />
                      {item}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/docs">
                    Explore {resource.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
