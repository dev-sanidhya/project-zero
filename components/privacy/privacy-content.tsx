import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:

• Personal information (name, email address, phone number)
• Account credentials and preferences
• Usage data and interaction patterns
• Technical information (IP address, browser type, device information)
• Communication records when you contact our support team`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our AI agent collaboration services
• Process transactions and send related information
• Send technical notices, updates, security alerts, and support messages
• Respond to your comments, questions, and customer service requests
• Monitor and analyze trends, usage, and activities in connection with our services
• Detect, investigate, and prevent fraudulent transactions and other illegal activities`,
  },
  {
    title: "Information Sharing and Disclosure",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:

• With your explicit consent
• To comply with legal obligations or respond to lawful requests
• To protect our rights, property, or safety, or that of our users
• In connection with a merger, acquisition, or sale of assets
• With service providers who assist us in operating our platform (under strict confidentiality agreements)`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:

• End-to-end encryption for data in transit and at rest
• Regular security audits and penetration testing
• Access controls and authentication mechanisms
• Employee training on data protection and privacy
• Compliance with industry-standard security frameworks (SOC 2, ISO 27001)`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:

• Account information: Retained while your account is active
• Usage data: Retained for up to 2 years for analytics and improvement purposes
• Support communications: Retained for up to 3 years
• Legal compliance data: Retained as required by applicable laws
• You may request deletion of your data at any time by contacting us`,
  },
  {
    title: "Your Rights and Choices",
    content: `Depending on your location, you may have certain rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information
• Portability: Request transfer of your data to another service provider
• Objection: Object to certain processing of your personal information
• Restriction: Request restriction of processing in certain circumstances

To exercise these rights, please contact us at privacy@projectzero.ai`,
  },
  {
    title: "International Data Transfers",
    content: `Project Zero operates globally, and your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:

• Standard Contractual Clauses approved by the European Commission
• Adequacy decisions for transfers to countries with adequate protection
• Binding Corporate Rules for intra-group transfers
• Your consent where required by applicable law`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not intended for children under the age of 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information promptly.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:

• Posting the updated policy on our website
• Sending an email notification to registered users
• Providing notice through our services

Your continued use of our services after the effective date of the updated policy constitutes acceptance of the changes.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: privacy@projectzero.ai
Address: Project Zero Privacy Team, 123 Innovation Drive, Suite 400, San Francisco, CA 94105
Phone: +1 (555) 123-4567

For users in the European Union, you may also contact our Data Protection Officer at dpo@projectzero.ai`,
  },
]

export function PrivacyContent() {
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
