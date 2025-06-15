import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, Activity } from "lucide-react"

const healthMetrics = [
  {
    service: "Navigator Agent",
    status: "healthy",
    uptime: "99.98%",
    lastCheck: "2 minutes ago",
    responseTime: "45ms",
  },
  {
    service: "Backend Agent",
    status: "healthy",
    uptime: "99.95%",
    lastCheck: "1 minute ago",
    responseTime: "67ms",
  },
  {
    service: "Telemetry Agent",
    status: "healthy",
    uptime: "99.99%",
    lastCheck: "30 seconds ago",
    responseTime: "23ms",
  },
  {
    service: "Database Cluster",
    status: "healthy",
    uptime: "99.97%",
    lastCheck: "1 minute ago",
    responseTime: "12ms",
  },
  {
    service: "Cache Layer",
    status: "warning",
    uptime: "99.85%",
    lastCheck: "3 minutes ago",
    responseTime: "156ms",
  },
  {
    service: "Message Queue",
    status: "healthy",
    uptime: "99.96%",
    lastCheck: "45 seconds ago",
    responseTime: "34ms",
  },
]

export function SystemHealth() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-emerald-600 text-white">
            <Activity className="mr-2 h-3 w-3" />
            System Health
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Infrastructure Status</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Real-time monitoring of all system components and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {healthMetrics.map((metric) => (
            <Card key={metric.service} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">{metric.service}</CardTitle>
                  <div className="flex items-center space-x-2">
                    {metric.status === "healthy" ? (
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    ) : metric.status === "warning" ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    <Badge
                      variant={
                        metric.status === "healthy"
                          ? "default"
                          : metric.status === "warning"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        metric.status === "healthy"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                          : metric.status === "warning"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : ""
                      }
                    >
                      {metric.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Uptime</p>
                    <p className="font-semibold text-foreground">{metric.uptime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Response Time</p>
                    <p className="font-semibold text-foreground">{metric.responseTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Last Check</p>
                    <p className="font-semibold text-foreground">{metric.lastCheck}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-500" />
                <h3 className="text-2xl font-bold text-foreground">All Systems Operational</h3>
              </div>
              <p className="text-muted-foreground">All core services are running smoothly with optimal performance.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
