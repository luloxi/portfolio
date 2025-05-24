"use client"
import { ProjectCard } from "@/components/project-card"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="container mx-auto px-4 py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-2">{t("projects.title")}</h2>
      <p className="text-gray-400 mb-12">{t("projects.subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="SAMI - AI game"
          description={t("projects.sami.description")}
          image="/sami-thumbnail.jpg?height=300&width=400"
          tags={["Solidity", "React", "Next.js", "TypeScript", "Tailwind CSS", "Scaffold-ETH 2", "Node.js", "Express"]}
          link="https://playsami.fun/"
          github="https://github.com/fabian416/sami"
        />
        <ProjectCard
          title="PunkSociety - Social network"
          description={t("projects.punksociety.description")}
          image="/punksociety-thumbnail.jpg?height=300&width=400"
          tags={["Solidity", "React", "Next.js", "TypeScript", "Tailwind CSS", "Scaffold-ETH 2", "IPFS"]}
          link="https://punksociety.xyz/"
          github="https://github.com/luloxi/PunkSociety"
        />
        <ProjectCard
          title="Tap - Job search platform"
          description={t("projects.tap.description")}
          image="/tap-thumbnail.png?height=300&width=400"
          tags={["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"]}
          link="https://tap-tan-ten.vercel.app/"
          github="https://github.com/luloxi/tap"
        />
        <ProjectCard
          title="BuidlGuidl projects"
          description={t("projects.buidlguidl.description")}
          image="/buidlguidl-thumbnail.jpg?height=300&width=400"
          tags={["Solidity", "React", "Next.js", "TypeScript", "Tailwind CSS", "Scaffold-ETH 2", "IPFS"]}
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
  )
}
