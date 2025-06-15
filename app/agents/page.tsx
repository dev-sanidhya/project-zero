import { AgentHero } from "@/components/agents/agent-hero"
import { AgentDetails } from "@/components/agents/agent-details"
import { AgentCapabilities } from "@/components/agents/agent-capabilities"
import { AgentWorkflow } from "@/components/agents/agent-workflow"

export default function AgentsPage() {
  return (
    <div className="min-h-screen pt-20">
      <AgentHero />
      <AgentDetails />
      <AgentCapabilities />
      <AgentWorkflow />
    </div>
  )
}
