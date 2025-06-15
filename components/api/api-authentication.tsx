import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Key, Copy } from "lucide-react"

export function APIAuthentication() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-foreground text-background">Authentication</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">API Authentication</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Secure your API requests with bearer token authentication.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-xl font-bold text-foreground">Bearer Token Authentication</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Getting Your API Key</h3>
                <p className="text-muted-foreground mb-4">
                  To get started, you'll need to generate an API key from your Project Zero dashboard.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Log in to your Project Zero dashboard</li>
                  <li>Navigate to Settings → API Keys</li>
                  <li>Click "Generate New API Key"</li>
                  <li>Copy and securely store your API key</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Making Authenticated Requests</h3>
                <p className="text-muted-foreground mb-4">
                  Include your API key in the Authorization header of all requests:
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-foreground">Authorization Header</span>
                    <Button size="sm" variant="ghost">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-sm font-mono text-foreground">{`Authorization: Bearer your-api-key-here`}</pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Example Request</h3>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm font-mono text-foreground">
                    {`curl -X GET "https://api.projectzero.ai/v1/tasks" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json"`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
