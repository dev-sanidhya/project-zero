import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const services = [
  {
    name: "API Gateway",
    status: "operational",
    uptime: "99.99%",
    responseTime: "23ms",
    description: "Main API endpoint for all client requests",
  },
  {
    name: "Navigator Agent",
    status: "operational",
    uptime: "99.98%",
    responseTime: "45ms",
    description: "Task planning and orchestration service",
  },
  {
    name: "Backend Agent",
    status: "operational",
    uptime: "99.97%",
    responseTime: "67ms",
    description: "Task execution and implementation service",
  },
  {
    name: "Frontend Agent",
    status: "operational",
    uptime: "99.96%",
    responseTime: "34ms",
    description: "User interface generation service",
  },
  {
    name: "Telemetry Agent",
    status: "operational",
    uptime: "99.99%",
    responseTime: "12ms",
    description: "Monitoring and analytics service",
  },
  {
    name: "Database Cluster",
    status: "operational",
    uptime: "99.98%",
    responseTime: "8ms",
    description: "Primary data storage infrastructure",
  },
  {
    name: "Message Queue",
    status: "operational",
    uptime: "99.95%",
    responseTime: "15ms",
    description: "Inter-service communication system",
  },
  {
    name: "Authentication Service",
    status: "operational",
    uptime: "99.99%",
    responseTime: "28ms",
    description: "User authentication and authorization",
  },
]

export function StatusOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Service Status</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Current operational status of all Project Zero services and components.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.name} className="border-0 shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">{service.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      Operational
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Uptime (30d)</p>
                    <p className="font-semibold text-foreground">{service.uptime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Avg Response</p>
                    <p className="font-semibold text-foreground">{service.responseTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
