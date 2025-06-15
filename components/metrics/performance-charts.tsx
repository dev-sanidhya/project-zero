"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, PieChart, LineChart } from "lucide-react"

export function PerformanceCharts() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-foreground text-background">
            <BarChart3 className="mr-2 h-3 w-3" />
            Performance Analytics
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Visual Performance Data</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive charts and graphs showing system performance trends and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                <CardTitle>Task Completion Trends</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive chart showing task completion over time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-blue-600" />
                <CardTitle>Resource Utilization</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">Resource allocation and usage breakdown</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
