"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How do I get started with Project Zero?",
    answer:
      "Getting started is easy! Sign up for an account, follow our quick start guide, and you'll have your first AI agents running in minutes. Our documentation provides step-by-step instructions for setup and configuration.",
  },
  {
    question: "What's the difference between the agent types?",
    answer:
      "Navigator Agent handles strategic planning and task decomposition, Backend Agent executes tasks and builds features, Frontend Agent creates user interfaces, and Telemetry Agent monitors performance and provides analytics.",
  },
  {
    question: "How much does Project Zero cost?",
    answer:
      "We offer flexible pricing plans starting from $99/month for small teams up to enterprise solutions. Pricing is based on the number of tasks processed and agents deployed. Contact our sales team for custom enterprise pricing.",
  },
  {
    question: "Is my data secure with Project Zero?",
    answer:
      "Absolutely. We use enterprise-grade security including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is never used to train our models and remains completely private to your organization.",
  },
  {
    question: "Can I integrate Project Zero with my existing tools?",
    answer:
      "Yes! Project Zero offers comprehensive APIs and pre-built integrations with popular tools like Slack, GitHub, Jira, and major cloud platforms. Our flexible architecture supports custom integrations as well.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 support through multiple channels including live chat, email, and phone. Enterprise customers get dedicated support with guaranteed response times and a dedicated customer success manager.",
  },
]

export function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">FAQ</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Quick answers to common questions about Project Zero and our AI agent platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
