import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bell, Mail, MessageSquare } from "lucide-react"

export function StatusSubscribe() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Stay Informed</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get notified about service updates, maintenance windows, and incidents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-xl font-bold text-foreground">Email Notifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Subscribe to receive email notifications about service status updates and planned maintenance.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe to Updates</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Bell className="h-5 w-5 text-emerald-600" />
                    <h3 className="font-semibold text-foreground">RSS Feed</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our RSS feed for automated status updates.
                  </p>
                  <Button variant="outline" size="sm">
                    Subscribe to RSS
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageSquare className="h-5 w-5 text-violet-600" />
                    <h3 className="font-semibold text-foreground">Slack Integration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get status updates directly in your Slack workspace.
                  </p>
                  <Button variant="outline" size="sm">
                    Add to Slack
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
