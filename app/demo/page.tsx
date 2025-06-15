import { DemoHero } from "@/components/demo/demo-hero"
import { InteractiveDemo } from "@/components/demo/interactive-demo"
import { DemoFeatures } from "@/components/demo/demo-features"

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <DemoHero />
      <InteractiveDemo />
      <DemoFeatures />
    </div>
  )
}
