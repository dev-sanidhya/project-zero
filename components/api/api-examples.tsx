"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Copy } from "lucide-react"
import { useState } from "react"

const examples = [
  {
    title: "Create a Task",
    language: "JavaScript",
    code: `const response = await fetch('https://api.projectzero.ai/v1/tasks', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    goal: 'Create user authentication system',
    priority: 'high',
    deadline: '2024-01-15T10:00:00Z'
  })
});

const task = await response.json();
console.log('Task created:', task.taskId);`,
  },
  {
    title: "Check Task Status",
    language: "Python",
    code: `import requests

headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.projectzero.ai/v1/tasks/task-123',
    headers=headers
)

task = response.json()
print(f"Task status: {task['status']}")
print(f"Progress: {task['progress']}%")`,
  },
  {
    title: "Get Metrics",
    language: "cURL",
    code: `curl -X GET "https://api.projectzero.ai/v1/metrics?timeframe=24h" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json"`,
  },
  {
    title: "List Tasks",
    language: "Node.js",
    code: `const axios = require('axios');

const config = {
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  }
};

try {
  const response = await axios.get(
    'https://api.projectzero.ai/v1/tasks?status=completed&limit=10',
    config
  );
  
  console.log(\`Found \${response.data.total} completed tasks\`);
  response.data.tasks.forEach(task => {
    console.log(\`- \${task.goal} (\${task.status})\`);
  });
} catch (error) {
  console.error('Error:', error.response.data);
}`,
  },
]

export function APIExamples() {
  const [selectedExample, setSelectedExample] = useState(0)

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-600 text-white">
              <Code className="mr-2 h-3 w-3" />
              Code Examples
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Implementation Examples</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready-to-use code examples in multiple programming languages to get you started quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExample(index)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedExample === index
                      ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <div className="font-medium text-foreground">{example.title}</div>
                  <div className="text-sm text-muted-foreground">{example.language}</div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {examples[selectedExample].title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{examples[selectedExample].language}</Badge>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                      {examples[selectedExample].code}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
