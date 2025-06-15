import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Container, Shield, Zap, BarChart } from "lucide-react"

const techCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    technologies: [
      { name: "Claude 4 Opus", description: "Advanced language model for intelligent reasoning", version: "Latest" },
      { name: "TensorFlow", description: "Machine learning framework for custom models", version: "2.15+" },
      { name: "PyTorch", description: "Deep learning research and production", version: "2.1+" },
      { name: "Hugging Face", description: "Transformer models and tokenizers", version: "4.36+" },
    ],
  },
  {
    title: "Backend Infrastructure",
    icon: Container,
    color: "from-emerald-500 to-teal-600",
    technologies: [
      { name: "Docker", description: "Containerization and deployment", version: "24.0+" },
      { name: "Kubernetes", description: "Container orchestration at scale", version: "1.28+" },
      { name: "Redis", description: "In-memory data structure store", version: "7.2+" },
      { name: "PostgreSQL", description: "Advanced relational database", version: "16+" },
    ],
  },
  {
    title: "Monitoring & Analytics",
    icon: BarChart,
    color: "from-orange-500 to-red-600",
    technologies: [
      { name: "Prometheus", description: "Metrics collection and alerting", version: "2.47+" },
      { name: "Grafana", description: "Observability and visualization", version: "10.2+" },
      { name: "Jaeger", description: "Distributed tracing system", version: "1.50+" },
      { name: "ELK Stack", description: "Elasticsearch, Logstash, and Kibana", version: "8.11+" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    technologies: [
      { name: "Vault", description: "Secrets management and encryption", version: "1.15+" },
      { name: "OAuth 2.0", description: "Secure authorization framework", version: "RFC 6749" },
      { name: "TLS 1.3", description: "Transport layer security", version: "RFC 8446" },
      { name: "RBAC", description: "Role-based access control", version: "Enterprise" },
    ],
  },
  {
    title: "Performance & Scaling",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    technologies: [
      { name: "NGINX", description: "High-performance web server", version: "1.25+" },
      { name: "HAProxy", description: "Load balancing and proxying", version: "2.8+" },
      { name: "Apache Kafka", description: "Distributed event streaming", version: "3.6+" },
      { name: "Memcached", description: "Distributed memory caching", version: "1.6+" },
    ],
  },
  {
    title: "Data Management",
    icon: Database,
    color: "from-pink-500 to-rose-600",
    technologies: [
      { name: "Apache Spark", description: "Unified analytics engine", version: "3.5+" },
      { name: "ClickHouse", description: "Columnar database for analytics", version: "23.10+" },
      { name: "MinIO", description: "High-performance object storage", version: "2023+" },
      { name: "Apache Airflow", description: "Workflow orchestration platform", version: "2.7+" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Built with cutting-edge tools and frameworks for reliability, scalability, and performance at enterprise
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <Card
              key={category.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${category.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-foreground">{tech.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {tech.version}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
