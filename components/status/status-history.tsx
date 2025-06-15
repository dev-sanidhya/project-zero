import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const incidents = [
  {
    title: "Scheduled Maintenance - Database Upgrade",
    description: "Planned maintenance window for database cluster upgrade to improve performance.",
    status: "resolved",
    severity: "maintenance",
    startTime: "Dec 10, 2024 02:00 UTC",
    endTime: "Dec 10, 2024 04:30 UTC",
    duration: "2h 30m",
    affectedServices: ["Database Cluster", "API Gateway"],
  },
  {
    title: "Increased API Response Times",
    description: "Temporary increase in API response times due to high traffic volume during product launch.",
    status: "resolved",
    severity: "minor",
    startTime: "Dec 5, 2024 14:15 UTC",
    endTime: "Dec 5, 2024 15:45 UTC",
    duration: "1h 30m",
    affectedServices: ["API Gateway", "Navigator Agent"],
  },
  {
    title: "Telemetry Agent Partial Outage",
    description: "Some metrics collection temporarily unavailable due to service restart.",
    status: "resolved",
    severity: "minor",
    startTime: "Nov 28, 2024 09:20 UTC",
    endTime: "Nov 28, 2024 09:35 UTC",
    duration: "15m",
    affectedServices: ["Telemetry Agent"],
  },
]

export function StatusHistory() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Incident History</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Recent incidents and maintenance activities affecting Project Zero services.
            </p>
          </div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        <CardTitle className="text-lg font-semibold text-foreground">{incident.title}</CardTitle>
                        <Badge
                          variant={incident.severity === "maintenance" ? "secondary" : "outline"}
                          className={
                            incident.severity === "maintenance"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }
                        >
                          {incident.severity}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{incident.description}</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      Resolved
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground mb-1">Start Time</p>
                      <p className="font-medium text-foreground">{incident.startTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">End Time</p>
                      <p className="font-medium text-foreground">{incident.endTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Duration</p>
                      <p className="font-medium text-foreground">{incident.duration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">Affected Services</p>
                    <div className="flex flex-wrap gap-2">
                      {incident.affectedServices.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
