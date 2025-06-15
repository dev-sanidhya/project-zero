import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI Research Director at Google, PhD in Computer Science from Stanford. Expert in multi-agent systems and distributed AI.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Principal Engineer at OpenAI, 15+ years in AI/ML infrastructure. Architect of Project Zero's core systems.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "Former Research Scientist at DeepMind, PhD in Machine Learning from MIT. Leading our Claude 4 Opus integration.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former Engineering Manager at Uber, expert in scalable systems. Building the infrastructure that powers Project Zero.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-emerald-600 text-white">Leadership Team</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Meet Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            World-class experts in AI, engineering, and product development working together to build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
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
