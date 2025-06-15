import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink } from "lucide-react"

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/v1/tasks",
    description: "Create a new task for agent processing",
    status: "stable",
  },
  {
    method: "GET",
    endpoint: "/api/v1/tasks/{id}",
    description: "Retrieve task status and results",
    status: "stable",
  },
  {
    method: "GET",
    endpoint: "/api/v1/metrics",
    description: "Get real-time performance metrics",
    status: "stable",
  },
  {
    method: "POST",
    endpoint: "/api/v1/agents/configure",
    description: "Configure agent behavior and parameters",
    status: "beta",
  },
]

export function APIReference() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Code className="h-5 w-5 text-blue-600" />
          <CardTitle className="text-2xl font-bold text-foreground">API Reference</CardTitle>
        </div>
        <p className="text-muted-foreground">RESTful API endpoints for Project Zero integration</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {apiEndpoints.map((endpoint, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Badge
                    variant={endpoint.method === "GET" ? "secondary" : "default"}
                    className={
                      endpoint.method === "GET"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                    }
                  >
                    {endpoint.method}
                  </Badge>
                  <code className="text-sm font-mono text-foreground">{endpoint.endpoint}</code>
                </div>
                <Badge variant={endpoint.status === "stable" ? "default" : "secondary"}>{endpoint.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{endpoint.description}</p>
              <Button size="sm" variant="outline">
                <ExternalLink className="h-3 w-3 mr-1" />
                View Details
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Check out our comprehensive API documentation with examples, authentication guides, and SDKs.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <ExternalLink className="h-4 w-4 mr-2" />
            Full API Documentation
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
