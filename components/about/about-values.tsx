import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Users, Target } from "lucide-react"

const values = [
  {
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI, constantly exploring new frontiers in agent collaboration and autonomous systems.",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Trust & Transparency",
    description:
      "We build systems that are reliable, secure, and transparent, ensuring our users always know how their data is being used and protected.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Human-Centric",
    description:
      "Technology should empower people, not replace them. We design AI that augments human capabilities and enhances productivity.",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Excellence Driven",
    description:
      "We're committed to delivering exceptional results, maintaining the highest standards in everything we build and every service we provide.",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Core Values</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The principles that guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${value.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.color}`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
