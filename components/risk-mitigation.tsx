import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Lock, Eye } from "lucide-react"

const risks = [
  {
    risk: "LLM Cost Runaway",
    solution: "Proxy with hard per-call cap",
    icon: Shield,
    color: "from-red-500 to-rose-600",
    status: "Mitigated",
  },
  {
    risk: "Specification Creep",
    solution: "Locked task scope - single trivial task simulation",
    icon: Lock,
    color: "from-amber-500 to-orange-600",
    status: "Controlled",
  },
  {
    risk: "Unclear Logging",
    solution: "Simplified early logging - readable in 2 minutes max",
    icon: Eye,
    color: "from-emerald-500 to-teal-600",
    status: "Resolved",
  },
]

export function RiskMitigation() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 bg-slate-900 text-white">
            <AlertTriangle className="mr-2 h-3 w-3" />
            Risk Management
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Proactive Risk Mitigation</h2>
          <p className="mt-4 text-lg text-slate-600">
            Identified potential challenges with implemented solutions for robust operation
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {risks.map((item) => (
            <Card key={item.risk} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.color}`}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      item.status === "Mitigated"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : item.status === "Controlled"
                          ? "border-amber-200 bg-amber-50 text-amber-700"
                          : "border-blue-200 bg-blue-50 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">{item.risk}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  <span className="font-medium text-slate-900">Solution:</span> {item.solution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Card className="inline-block border-0 shadow-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Ready for Production</h3>
              <p className="text-slate-300">
                All identified risks have been addressed with robust solutions, ensuring reliable operation in
                production environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
