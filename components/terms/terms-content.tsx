import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using Project Zero's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.

These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.`,
  },
  {
    title: "Description of Service",
    content: `Project Zero provides an AI agent collaboration platform that enables organizations to automate complex workflows through intelligent agent coordination. Our services include:

• AI-powered task planning and execution
• Multi-agent collaboration and orchestration
• Real-time performance monitoring and analytics
• API access and integrations
• Customer support and documentation

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.`,
  },
  {
    title: "User Accounts and Registration",
    content: `To access certain features of our services, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Keep your login credentials secure and confidential
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use of your account

You may not create accounts using automated means or for unlawful purposes.`,
  },
  {
    title: "Acceptable Use Policy",
    content: `You agree not to use our services to:

• Violate any applicable laws or regulations
• Infringe upon intellectual property rights of others
• Transmit harmful, offensive, or inappropriate content
• Attempt to gain unauthorized access to our systems
• Interfere with or disrupt our services or servers
• Use our services for competitive intelligence or benchmarking
• Reverse engineer, decompile, or disassemble our software
• Resell or redistribute our services without authorization`,
  },
  {
    title: "Intellectual Property Rights",
    content: `Project Zero and its licensors own all rights, title, and interest in our services, including:

• Software, algorithms, and AI models
• Documentation, content, and materials
• Trademarks, logos, and branding
• Patents and trade secrets

You retain ownership of your data and content. By using our services, you grant us a limited license to process your data solely to provide our services.`,
  },
  {
    title: "Privacy and Data Protection",
    content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.

We implement industry-standard security measures to protect your data, but cannot guarantee absolute security. You acknowledge the inherent risks of internet-based services.`,
  },
  {
    title: "Payment Terms",
    content: `For paid services, you agree to:

• Pay all fees as specified in your subscription plan
• Provide accurate billing information
• Pay fees in advance on a monthly or annual basis
• Accept responsibility for all charges incurred under your account

We may change our pricing with 30 days' notice. Failure to pay may result in service suspension or termination.`,
  },
  {
    title: "Service Level Agreement",
    content: `We strive to maintain high service availability and performance:

• Target uptime: 99.9% monthly availability
• Support response times as specified in your plan
• Regular maintenance windows with advance notice
• Incident communication and resolution procedures

Service credits may be available for significant outages as outlined in our SLA documentation.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Project Zero shall not be liable for:

• Indirect, incidental, special, or consequential damages
• Loss of profits, data, or business opportunities
• Service interruptions or security breaches
• Third-party actions or content
• Damages exceeding the amount paid for services in the preceding 12 months

This limitation applies regardless of the legal theory of liability.`,
  },
  {
    title: "Indemnification",
    content: `You agree to indemnify and hold harmless Project Zero, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:

• Your use of our services
• Your violation of these terms
• Your violation of any rights of another party
• Your content or data processed through our services`,
  },
  {
    title: "Termination",
    content: `Either party may terminate this agreement:

• With 30 days' written notice for convenience
• Immediately for material breach of terms
• Immediately for non-payment of fees

Upon termination:
• Your access to services will cease
• You may export your data for 30 days
• All outstanding fees become immediately due
• Confidentiality obligations survive termination`,
  },
  {
    title: "Governing Law and Disputes",
    content: `These terms are governed by the laws of the State of California, without regard to conflict of law principles.

Any disputes will be resolved through binding arbitration in San Francisco, California, except for:
• Claims for injunctive relief
• Intellectual property disputes
• Small claims court matters

You waive any right to participate in class action lawsuits.`,
  },
  {
    title: "Changes to Terms",
    content: `We may modify these terms at any time by:

• Posting updated terms on our website
• Sending email notification to registered users
• Providing notice through our services

Continued use of our services after changes constitutes acceptance. If you disagree with changes, you may terminate your account.`,
  },
  {
    title: "Contact Information",
    content: `For questions about these terms, please contact us:

Email: legal@projectzero.ai
Address: Project Zero Legal Team, 123 Innovation Drive, Suite 400, San Francisco, CA 94105
Phone: +1 (555) 123-4567

For urgent legal matters, please mark your communication as "URGENT - LEGAL MATTER."`,
  },
]

export function TermsContent() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed">{section.content}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
