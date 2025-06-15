import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Phone, BookOpen, Users, Zap } from "lucide-react"
import Link from "next/link"

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-600",
    availability: "24/7",
    responseTime: "< 2 minutes",
    action: "Start Chat",
  },
  {
    title: "Email Support",
    description: "Detailed technical assistance via email",
    icon: Mail,
    color: "from-blue-500 to-indigo-600",
    availability: "24/7",
    responseTime: "< 4 hours",
    action: "Send Email",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our experts",
    icon: Phone,
    color: "from-violet-500 to-purple-600",
    availability: "Mon-Fri 9AM-6PM PST",
    responseTime: "Immediate",
    action: "Call Now",
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and tutorials",
    icon: BookOpen,
    color: "from-orange-500 to-red-600",
    availability: "Always available",
    responseTime: "Self-service",
    action: "Browse Docs",
  },
  {
    title: "Community Forum",
    description: "Connect with other Project Zero users",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    availability: "24/7",
    responseTime: "Community driven",
    action: "Join Forum",
  },
  {
    title: "Priority Support",
    description: "Dedicated support for enterprise customers",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    availability: "24/7",
    responseTime: "< 1 hour",
    action: "Upgrade Plan",
  },
]

export function SupportOptions() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Choose Your Support Channel</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Multiple ways to get help, from instant chat to comprehensive documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supportOptions.map((option) => (
            <Card
              key={option.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${option.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${option.color}`}
                  >
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Availability:</span>
                    <Badge variant="secondary">{option.availability}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-foreground">{option.responseTime}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">{option.action}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
