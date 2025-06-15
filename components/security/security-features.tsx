import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Key, Eye, Shield, Server, UserCheck } from "lucide-react"

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description:
      "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption with regularly rotated keys.",
    icon: Lock,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Zero-Trust Architecture",
    description:
      "Every request is authenticated and authorized, with no implicit trust based on network location or user credentials.",
    icon: Key,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Comprehensive Monitoring",
    description:
      "24/7 security monitoring with real-time threat detection, automated incident response, and detailed audit logs.",
    icon: Eye,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Data Protection",
    description:
      "Advanced data loss prevention, backup encryption, and secure data deletion with cryptographic verification.",
    icon: Shield,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Infrastructure Security",
    description:
      "Hardened infrastructure with network segmentation, intrusion detection, and regular penetration testing.",
    icon: Server,
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Identity & Access Management",
    description:
      "Multi-factor authentication, role-based access control, and single sign-on integration with enterprise identity providers.",
    icon: UserCheck,
    color: "from-pink-500 to-rose-600",
  },
]

export function SecurityFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Security Features</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive security measures protecting your data and ensuring the integrity of our AI agent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${feature.color}`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
