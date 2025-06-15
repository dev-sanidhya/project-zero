import { TechHero } from "@/components/technology/tech-hero"
import { TechStack } from "@/components/technology/tech-stack"
import { Architecture } from "@/components/technology/architecture"
import { Integration } from "@/components/technology/integration"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-20">
      <TechHero />
      <TechStack />
      <Architecture />
      <Integration />
    </div>
  )
}
