import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-20 relative z-10"
    >
      <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
      <p className="text-gray-400 mb-12">
        Decentralized applications and blockchain solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="SAMI - AI Game"
          description="Group chatroom game where players can bet crypto on who's the impostor AI in the chat."
          image="/sami-thumbnail.jpg?height=300&width=400"
          tags={[
            "Solidity",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Scaffold-ETH 2",
            "Node.js",
            "Express",
          ]}
          link="https://playsami.fun/"
          github="https://github.com/fabian416/sami"
        />
        <ProjectCard
          title="PunkSociety - Social Network"
          description="Social network where posts are NFTs and likes send USDC to the post author."
          image="/punksociety-thumbnail.jpg?height=300&width=400"
          tags={[
            "Solidity",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Scaffold-ETH 2",
            "IPFS",
          ]}
          link="https://punksociety.xyz/"
          github="https://github.com/luloxi/PunkSociety"
        />
        <ProjectCard
          title="BuidlGuidl projects"
          description="Several prototypes to show Scaffold-ETH 2 usage for creating dApps."
          image="/buidlguidl-thumbnail.jpg?height=300&width=400"
          tags={[
            "Solidity",
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Scaffold-ETH 2",
            "IPFS",
          ]}
          link="https://app.buidlguidl.com/builders/0xfBD9Ca40386A8C632cf0529bbb16b4BEdB59a0A0"
        />
      </div>

      {/* <div className="text-center mt-12">
        <Button
          variant="outline"
          className="border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400"
        >
          View All Projects <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div> */}
    </section>
  );
}
