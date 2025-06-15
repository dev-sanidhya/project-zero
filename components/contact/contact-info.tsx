import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, MessageSquare, Users } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help from our technical team",
    contact: "support@projectzero.ai",
    availability: "24/7 response within 4 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri, 9AM-6PM PST",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant support for urgent issues",
    contact: "Available on our website",
    availability: "Mon-Fri, 8AM-8PM PST",
  },
]

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 400",
    timezone: "PST",
  },
  {
    city: "New York",
    address: "456 Tech Avenue, Floor 15",
    timezone: "EST",
  },
  {
    city: "London",
    address: "789 AI Street, Level 8",
    timezone: "GMT",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">Get Support</CardTitle>
          <p className="text-muted-foreground">Multiple ways to reach our expert team</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactMethods.map((method) => (
            <div key={method.title} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                <method.icon className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="text-sm font-medium text-foreground mb-1">{method.contact}</p>
                <Badge variant="secondary" className="text-xs">
                  {method.availability}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-xl font-bold text-foreground">Our Offices</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {offices.map((office) => (
            <div key={office.city} className="p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">{office.city}</h3>
                <Badge variant="outline">{office.timezone}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{office.address}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="h-5 w-5 text-emerald-600" />
            <h3 className="font-semibold text-foreground">Enterprise Support</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Need dedicated support for your organization? Our enterprise team provides priority assistance, custom
            integrations, and dedicated account management.
          </p>
          <Badge className="bg-emerald-600 text-white">Contact Sales</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
