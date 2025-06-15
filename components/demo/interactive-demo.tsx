"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, RotateCcw, CheckCircle } from "lucide-react"

const demoSteps = [
  { id: 1, name: "Goal Analysis", duration: 3000, status: "pending" },
  { id: 2, name: "Task Decomposition", duration: 2000, status: "pending" },
  { id: 3, name: "Agent Execution", duration: 8000, status: "pending" },
  { id: 4, name: "Quality Assurance", duration: 2000, status: "pending" },
  { id: 5, name: "Results & Metrics", duration: 1000, status: "pending" },
]

export function InteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [steps, setSteps] = useState(demoSteps)

  const startDemo = () => {
    setIsRunning(true)
    setCurrentStep(0)
    setProgress(0)
    setSteps(demoSteps.map((step) => ({ ...step, status: "pending" })))

    runStep(0)
  }

  const runStep = (stepIndex: number) => {
    if (stepIndex >= steps.length) {
      setIsRunning(false)
      return
    }

    setCurrentStep(stepIndex)
    setSteps((prev) =>
      prev.map((step, idx) => ({
        ...step,
        status: idx === stepIndex ? "running" : idx < stepIndex ? "completed" : "pending",
      })),
    )

    const step = steps[stepIndex]
    const startTime = Date.now()

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const stepProgress = Math.min((elapsed / step.duration) * 100, 100)
      setProgress(stepProgress)

      if (stepProgress < 100) {
        requestAnimationFrame(updateProgress)
      } else {
        setSteps((prev) =>
          prev.map((s, idx) => ({
            ...s,
            status: idx === stepIndex ? "completed" : s.status,
          })),
        )
        setTimeout(() => runStep(stepIndex + 1), 500)
      }
    }

    requestAnimationFrame(updateProgress)
  }

  const resetDemo = () => {
    setIsRunning(false)
    setCurrentStep(0)
    setProgress(0)
    setSteps(demoSteps.map((step) => ({ ...step, status: "pending" })))
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <CardTitle className="text-2xl font-bold">Interactive Agent Workflow Demo</CardTitle>
              <p className="text-emerald-100">
                Watch Project Zero agents collaborate to complete a sample task in real-time
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    Sample Task: "Create User Authentication System"
                  </h3>
                  <div className="flex space-x-2">
                    <Button onClick={startDemo} disabled={isRunning} className="bg-emerald-600 hover:bg-emerald-700">
                      <Play className="mr-2 h-4 w-4" />
                      {isRunning ? "Running..." : "Start Demo"}
                    </Button>
                    <Button onClick={resetDemo} variant="outline">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                        step.status === "running"
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
                          : step.status === "completed"
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : "border-border bg-background"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {step.status === "completed" ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : step.status === "running" ? (
                          <div className="h-6 w-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <div className="h-6 w-6 border-2 border-muted rounded-full" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">{step.name}</span>
                          <Badge
                            variant={
                              step.status === "completed"
                                ? "default"
                                : step.status === "running"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {step.status === "completed"
                              ? "Complete"
                              : step.status === "running"
                                ? "Processing"
                                : "Pending"}
                          </Badge>
                        </div>

                        {step.status === "running" && <Progress value={progress} className="h-2" />}
                      </div>
                    </div>
                  ))}
                </div>

                {!isRunning && currentStep === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Click "Start Demo" to see how Project Zero agents work together to complete complex tasks
                    </p>
                  </div>
                )}

                {!isRunning && currentStep >= steps.length && (
                  <div className="text-center py-8 bg-green-50 dark:bg-green-950 rounded-lg">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Task Completed Successfully!</h3>
                    <p className="text-muted-foreground">
                      Total execution time: 16.2 seconds | Success rate: 100% | Cost: $0.023
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
