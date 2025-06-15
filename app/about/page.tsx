import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
    </div>
  )
}
