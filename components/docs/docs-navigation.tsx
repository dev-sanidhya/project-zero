import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Zap, Settings } from "lucide-react"

const navigationSections = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: ["Quick Start", "Installation", "Configuration", "First Steps"],
  },
  {
    title: "API Reference",
    icon: Code,
    items: ["Authentication", "Endpoints", "Webhooks", "SDKs"],
  },
  {
    title: "Agents",
    icon: Zap,
    items: ["Navigator", "Backend", "Telemetry", "Custom Agents"],
  },
  {
    title: "Advanced",
    icon: Settings,
    items: ["Deployment", "Monitoring", "Troubleshooting", "Best Practices"],
  },
]

export function DocsNavigation() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Documentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-3">
                <section.icon className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium text-foreground">{section.title}</h3>
              </div>
              <ul className="space-y-2 ml-6">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
        <CardContent className="p-6">
          <Badge className="mb-3 bg-emerald-600 text-white">New</Badge>
          <h3 className="font-semibold text-foreground mb-2">Claude 4 Opus Integration</h3>
          <p className="text-sm text-muted-foreground">
            Learn how to leverage the latest Claude 4 Opus capabilities in your Project Zero implementation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
