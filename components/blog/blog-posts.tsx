import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI Agent Collaboration",
    excerpt:
      "Exploring how multiple AI agents can work together to solve complex problems more efficiently than single-agent systems.",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    category: "AI Research",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Building Scalable Multi-Agent Systems",
    excerpt:
      "Technical deep-dive into the architecture patterns and design principles behind Project Zero's agent coordination.",
    author: "Marcus Rodriguez",
    date: "December 10, 2024",
    category: "Engineering",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Claude 4 Opus Integration: Lessons Learned",
    excerpt: "Our experience integrating Claude 4 Opus into Project Zero and the performance improvements we achieved.",
    author: "Dr. Emily Watson",
    date: "December 5, 2024",
    category: "AI Research",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Monitoring and Observability in AI Systems",
    excerpt:
      "Best practices for monitoring AI agent performance, detecting anomalies, and ensuring system reliability.",
    author: "David Kim",
    date: "November 28, 2024",
    category: "DevOps",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Economics of AI Automation",
    excerpt: "Analyzing the cost-benefit dynamics of AI-powered automation and its impact on business operations.",
    author: "Dr. Sarah Chen",
    date: "November 20, 2024",
    category: "Business",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Security Considerations for AI Agents",
    excerpt:
      "Comprehensive guide to securing AI agent systems, protecting data, and ensuring compliance in enterprise environments.",
    author: "Marcus Rodriguez",
    date: "November 15, 2024",
    category: "Security",
    readTime: "11 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function BlogPosts() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Latest Posts</h2>
        <Badge variant="secondary">6 articles</Badge>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 lg:h-full object-cover rounded-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground hover:text-emerald-600 transition-colors">
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
