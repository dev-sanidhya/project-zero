import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plug, Cloud, Code, Database, ArrowRight } from "lucide-react"
import Link from "next/link"

const integrations = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    color: "from-blue-500 to-indigo-600",
    services: [
      { name: "AWS", description: "Complete AWS ecosystem integration" },
      { name: "Google Cloud", description: "GCP services and AI/ML tools" },
      { name: "Azure", description: "Microsoft Azure cloud services" },
      { name: "Vercel", description: "Seamless deployment and hosting" },
    ],
  },
  {
    category: "Development Tools",
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    services: [
      { name: "GitHub", description: "Source code management and CI/CD" },
      { name: "Docker", description: "Containerization and deployment" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Terraform", description: "Infrastructure as code" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    color: "from-orange-500 to-red-600",
    services: [
      { name: "PostgreSQL", description: "Primary relational database" },
      { name: "Redis", description: "In-memory caching and sessions" },
      { name: "MongoDB", description: "Document-based storage" },
      { name: "S3", description: "Object storage and file management" },
    ],
  },
  {
    category: "APIs & Webhooks",
    icon: Plug,
    color: "from-violet-500 to-purple-600",
    services: [
      { name: "REST APIs", description: "Standard HTTP API integration" },
      { name: "GraphQL", description: "Flexible query language support" },
      { name: "Webhooks", description: "Real-time event notifications" },
      { name: "WebSockets", description: "Bi-directional communication" },
    ],
  },
]

export function Integration() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-emerald-600 text-white">
            <Plug className="mr-2 h-3 w-3" />
            Seamless Integration
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Connect with Your Existing Stack
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Project Zero integrates seamlessly with your existing tools and infrastructure, providing flexibility and
            compatibility across your entire technology ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {integrations.map((integration) => (
            <Card
              key={integration.category}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${integration.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${integration.color}`}
                  >
                    <integration.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{integration.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {integration.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div>
                        <div className="font-medium text-foreground mb-1">{service.name}</div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Integrate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Our comprehensive API documentation and SDK make integration straightforward. Get started with our
                step-by-step guides and code examples.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <Link href="/docs">
                    View Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/api">API Reference</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
