"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink } from "lucide-react"
import { useState } from "react"

const endpoints = [
  {
    method: "POST",
    path: "/v1/tasks",
    description: "Create a new task for agent processing",
    parameters: [
      { name: "goal", type: "string", required: true, description: "The objective to accomplish" },
      { name: "priority", type: "string", required: false, description: "Task priority (low, medium, high)" },
      { name: "deadline", type: "string", required: false, description: "ISO 8601 deadline timestamp" },
    ],
    response: {
      taskId: "string",
      status: "string",
      createdAt: "string",
    },
  },
  {
    method: "GET",
    path: "/v1/tasks/{id}",
    description: "Retrieve task status and results",
    parameters: [{ name: "id", type: "string", required: true, description: "Task ID" }],
    response: {
      taskId: "string",
      status: "string",
      progress: "number",
      result: "object",
    },
  },
  {
    method: "GET",
    path: "/v1/tasks",
    description: "List all tasks with optional filtering",
    parameters: [
      { name: "status", type: "string", required: false, description: "Filter by task status" },
      { name: "limit", type: "number", required: false, description: "Number of results to return" },
      { name: "offset", type: "number", required: false, description: "Pagination offset" },
    ],
    response: {
      tasks: "array",
      total: "number",
      hasMore: "boolean",
    },
  },
  {
    method: "GET",
    path: "/v1/metrics",
    description: "Get real-time performance metrics",
    parameters: [
      { name: "timeframe", type: "string", required: false, description: "Metrics timeframe (1h, 24h, 7d)" },
    ],
    response: {
      tasksCompleted: "number",
      averageTime: "number",
      successRate: "number",
    },
  },
]

export function APIEndpoints() {
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">API Endpoints</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Complete reference for all available API endpoints and their parameters.
            </p>
          </div>

          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedEndpoint(expandedEndpoint === index ? null : index)}
                  >
                    <div className="flex items-center space-x-4">
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
                      <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        expandedEndpoint === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </CardHeader>
                {expandedEndpoint === index && (
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Parameters</h4>
                        <div className="space-y-2">
                          {endpoint.parameters.map((param, idx) => (
                            <div key={idx} className="flex items-start justify-between p-3 bg-background rounded-lg">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <code className="text-sm font-mono text-foreground">{param.name}</code>
                                  <Badge variant="outline" className="text-xs">
                                    {param.type}
                                  </Badge>
                                  {param.required && (
                                    <Badge variant="destructive" className="text-xs">
                                      required
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{param.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Response</h4>
                        <div className="bg-background rounded-lg p-4">
                          <pre className="text-sm font-mono text-foreground">
                            {JSON.stringify(endpoint.response, null, 2)}
                          </pre>
                        </div>
                      </div>

                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Try in Playground
                      </Button>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
