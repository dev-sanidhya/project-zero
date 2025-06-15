import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Terminal, CheckCircle } from "lucide-react"

export function QuickStart() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-emerald-600" />
            <CardTitle className="text-2xl font-bold text-foreground">Quick Start Guide</CardTitle>
          </div>
          <p className="text-muted-foreground">Get up and running with Project Zero in minutes</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-emerald-600 text-white">Step 1</Badge>
              <h3 className="font-semibold text-foreground">Installation</h3>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <code className="text-sm font-mono">npm install @project-zero/sdk</code>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-blue-600 text-white">Step 2</Badge>
              <h3 className="font-semibold text-foreground">Configuration</h3>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground">
                {`import { ProjectZero } from '@project-zero/sdk'

const client = new ProjectZero({
  apiKey: 'your-api-key',
  environment: 'production'
})`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge className="bg-orange-600 text-white">Step 3</Badge>
              <h3 className="font-semibold text-foreground">First Task</h3>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground">
                {`const result = await client.createTask({
  goal: "Create user authentication system",
  priority: "high",
  deadline: "2024-01-15"
})

console.log(result.taskId)`}
              </pre>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <p className="text-sm text-emerald-800 dark:text-emerald-200">
              You're all set! Your first task is now being processed by Project Zero agents.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
