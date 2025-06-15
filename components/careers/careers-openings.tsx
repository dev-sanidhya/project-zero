import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

const openings = [
  {
    title: "Senior AI Research Scientist",
    department: "Research",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$180k - $250k",
    description:
      "Lead research in multi-agent AI systems and contribute to our next-generation agent collaboration platform.",
    requirements: [
      "PhD in AI/ML or related field",
      "5+ years research experience",
      "Published papers in top-tier conferences",
    ],
  },
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$150k - $200k",
    description:
      "Build scalable backend systems that power our AI agent infrastructure and handle millions of tasks daily.",
    requirements: ["5+ years backend development", "Experience with microservices", "Python/Go proficiency"],
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $180k",
    description: "Create beautiful, responsive user interfaces for our AI agent management and monitoring platforms.",
    requirements: ["3+ years React/Next.js", "TypeScript expertise", "UI/UX design sense"],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "London, UK / Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "Manage and scale our cloud infrastructure, ensuring high availability and performance of our AI systems.",
    requirements: ["Kubernetes expertise", "AWS/GCP experience", "Infrastructure as Code"],
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140k - $190k",
    description: "Drive product strategy and roadmap for our AI agent collaboration platform and enterprise solutions.",
    requirements: ["5+ years product management", "B2B SaaS experience", "Technical background preferred"],
  },
  {
    title: "AI Ethics Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $170k",
    description:
      "Ensure our AI systems are developed and deployed responsibly, with focus on fairness, transparency, and safety.",
    requirements: ["PhD in Ethics/Philosophy/AI", "AI safety research", "Policy development experience"],
  },
]

export function CareersOpenings() {
  return (
    <section id="openings" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">Open Positions</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Current Opportunities</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join our mission to revolutionize AI agent collaboration. We're looking for talented individuals who share
            our passion for innovation.
          </p>
        </div>

        <div className="space-y-6">
          {openings.map((opening, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">{opening.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{opening.department}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {opening.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {opening.type}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {opening.salary}
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 lg:mt-0 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <Link href="/contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{opening.description}</p>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {opening.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
