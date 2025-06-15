import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Rocket, Target, Globe } from "lucide-react"

const milestones = [
  {
    year: "2023",
    title: "The Vision",
    description: "Founded with the mission to revolutionize AI agent collaboration and autonomous task execution.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
  },
  {
    year: "2024",
    title: "First Breakthrough",
    description: "Developed the first working prototype of multi-agent collaboration using Claude 4 Opus.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-600",
  },
  {
    year: "2024",
    title: "Project Zero Launch",
    description: "Successfully launched Project Zero with sub-30-second task completion capabilities.",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanding worldwide to help organizations transform their operations with AI collaboration.",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
  },
]

export function AboutStory() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">Our Journey</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">From Idea to Innovation</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The story of how we're transforming the future of AI-powered automation and collaboration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={milestone.year} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${milestone.color} flex-shrink-0`}
                    >
                      <milestone.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge variant="outline" className="font-mono">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-2xl font-bold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
