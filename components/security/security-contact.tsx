import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Phone, AlertTriangle, FileText, Users } from "lucide-react"
import Link from "next/link"

export function SecurityContact() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-red-600 text-white">
            <Shield className="mr-2 h-3 w-3" />
            Security Contact
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Report Security Issues</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We take security seriously. If you discover a security vulnerability, please report it responsibly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <CardTitle className="text-xl font-bold text-foreground">Security Vulnerability Reporting</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Responsible Disclosure</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We appreciate security researchers who help us maintain the security of our platform. Please follow
                  responsible disclosure practices.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3" />
                    Do not access or modify user data
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3" />
                    Do not perform destructive testing
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3" />
                    Report vulnerabilities privately first
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Mail className="h-4 w-4 text-red-600" />
                    <div>
                      <p className="font-medium text-foreground">security@projectzero.ai</p>
                      <p className="text-xs text-muted-foreground">Encrypted email preferred</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Phone className="h-4 w-4 text-red-600" />
                    <div>
                      <p className="font-medium text-foreground">+1 (555) 123-SECURITY</p>
                      <p className="text-xs text-muted-foreground">Emergency security hotline</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href="/contact">Report Security Issue</Link>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-foreground">Security Documentation</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Access our comprehensive security documentation and best practices.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/docs">View Security Docs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-foreground">Bug Bounty Program</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our bug bounty program and earn rewards for finding security vulnerabilities.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Response Timeline</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Initial Response:</span>
                    <span className="font-medium text-foreground">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Assessment:</span>
                    <span className="font-medium text-foreground">&lt; 72 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resolution:</span>
                    <span className="font-medium text-foreground">&lt; 30 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
