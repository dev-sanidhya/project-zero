import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Users, Target, Zap } from "lucide-react"

const values = [
  {
    title: "Innovation & Curiosity",
    description:
      "We encourage bold thinking, experimentation, and learning from failure. Every team member is empowered to explore new ideas and push boundaries.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Collaboration & Respect",
    description:
      "We believe diverse perspectives make us stronger. We foster an inclusive environment where everyone's voice is heard and valued.",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Excellence & Impact",
    description:
      "We're committed to delivering exceptional results that make a real difference in how organizations operate and succeed.",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Speed & Agility",
    description:
      "We move fast, iterate quickly, and adapt to change. We believe in shipping early, learning fast, and improving continuously.",
    icon: Zap,
    color: "from-blue-500 to-indigo-600",
  },
]

export function CareersValues() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-emerald-600 text-white">Our Culture</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">What We Stand For</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our values guide how we work together, make decisions, and build products that change the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${value.color}`} />
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} flex-shrink-0`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
