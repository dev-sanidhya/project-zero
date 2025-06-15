import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Shield, TrendingUp, Wrench, Building } from "lucide-react"

const categories = [
  { name: "AI Research", count: 12, icon: Brain, color: "from-violet-500 to-purple-600" },
  { name: "Engineering", count: 8, icon: Code, color: "from-emerald-500 to-teal-600" },
  { name: "Security", count: 6, icon: Shield, color: "from-blue-500 to-indigo-600" },
  { name: "Business", count: 5, icon: TrendingUp, color: "from-orange-500 to-red-600" },
  { name: "DevOps", count: 4, icon: Wrench, color: "from-yellow-500 to-orange-600" },
  { name: "Industry", count: 3, icon: Building, color: "from-pink-500 to-rose-600" },
]

export function BlogCategories() {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${category.color}`}
                >
                  <category.icon className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-foreground">{category.name}</span>
              </div>
              <Badge variant="secondary">{category.count}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest insights and updates delivered to your inbox.
          </p>
          <Badge className="bg-emerald-600 text-white">Subscribe</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
