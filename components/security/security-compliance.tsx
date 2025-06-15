import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Globe, FileCheck } from "lucide-react"

const certifications = [
  {
    title: "SOC 2 Type II",
    description:
      "Comprehensive audit of our security, availability, processing integrity, confidentiality, and privacy controls.",
    icon: Award,
    status: "Certified",
    validUntil: "December 2025",
  },
  {
    title: "ISO 27001",
    description:
      "International standard for information security management systems, ensuring systematic approach to security.",
    icon: Globe,
    status: "Certified",
    validUntil: "March 2025",
  },
  {
    title: "GDPR Compliance",
    description:
      "Full compliance with European Union General Data Protection Regulation for data privacy and protection.",
    icon: FileCheck,
    status: "Compliant",
    validUntil: "Ongoing",
  },
  {
    title: "CCPA Compliance",
    description:
      "California Consumer Privacy Act compliance ensuring transparency and control over personal information.",
    icon: CheckCircle,
    status: "Compliant",
    validUntil: "Ongoing",
  },
]

const practices = [
  "Regular third-party security audits and penetration testing",
  "Employee security training and background checks",
  "Incident response plan with 24/7 security team",
  "Data retention and deletion policies",
  "Vendor security assessment program",
  "Business continuity and disaster recovery planning",
]

export function SecurityCompliance() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Compliance & Certifications</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We maintain the highest standards of compliance and undergo regular audits to ensure your data is protected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert) => (
            <Card key={cert.title} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <cert.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">Valid until {cert.validUntil}</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Security Best Practices</CardTitle>
            <p className="text-muted-foreground">
              Our comprehensive approach to security includes industry-leading practices and continuous improvement.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practices.map((practice, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{practice}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <Card className="inline-block border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-500" />
                <h3 className="text-2xl font-bold text-foreground">Continuously Monitored</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Our security posture is continuously monitored and improved through regular assessments, audits, and
                updates to ensure we maintain the highest standards of protection for your data.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
