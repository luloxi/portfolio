import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
      <p className="text-gray-400 mb-12">Decentralized applications and blockchain solutions</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="DeFi Lending Protocol"
          description="A decentralized lending platform built on Ethereum with automated interest rates and liquidity pools."
          image="/placeholder.svg?height=300&width=400"
          tags={["Solidity", "React", "Ethers.js"]}
          link="#"
        />
        <ProjectCard
          title="NFT Marketplace"
          description="A marketplace for creating, buying, and selling NFTs with low gas fees and multi-chain support."
          image="/placeholder.svg?height=300&width=400"
          tags={["Next.js", "IPFS", "Polygon"]}
          link="#"
        />
        <ProjectCard
          title="DAO Governance Tool"
          description="A governance platform for DAOs with proposal creation, voting, and treasury management."
          image="/placeholder.svg?height=300&width=400"
          tags={["Solidity", "The Graph", "TypeScript"]}
          link="#"
        />
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400">
          View All Projects <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
