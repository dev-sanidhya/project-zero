import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Plane, GraduationCap, Home, Coffee, Shield } from "lucide-react"

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness stipends",
    icon: Heart,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Unlimited PTO",
    description: "Take the time you need to recharge and maintain work-life balance",
    icon: Plane,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Learning & Development",
    description: "$5,000 annual budget for conferences, courses, and professional development",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and home office setup stipend",
    icon: Home,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Premium Equipment",
    description: "Top-of-the-line MacBook Pro, monitors, and any tools you need to excel",
    icon: Coffee,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Equity & Retirement",
    description: "Competitive equity package and 401(k) matching to secure your future",
    icon: Shield,
    color: "from-yellow-500 to-orange-600",
  },
]

export function CareersBenefits() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Why Work With Us</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We believe in taking care of our team so they can do their best work and build the future of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${benefit.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color}`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
