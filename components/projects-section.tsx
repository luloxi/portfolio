"use client";
import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/contexts/language-context";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-20 relative z-10"
    >
      <h2 className="text-3xl font-bold mb-2">{t("projects.title")}</h2>
      <p className="text-gray-400 mb-12">{t("projects.subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="SAMI - AI Game"
          description={t("projects.sami.description")}
          image="/sami-thumbnail.jpg?height=300&width=400"
          slug="sami"
        />
        {/* <ProjectCard
          title="Tap - Job Search Platform"
          description={t("projects.tap.description")}
          image="/tap-thumbnail.png?height=300&width=400"
          slug="tap"
        /> */}
        <ProjectCard
          title="PunkSociety - Social Network"
          description={t("projects.punksociety.description")}
          image="/punksociety-thumbnail.jpg?height=300&width=400"
          slug="punksociety"
        />
        <ProjectCard
          title="BuidlGuidl Projects"
          description={t("projects.buidlguidl.description")}
          image="/buidlguidl-thumbnail.jpg?height=300&width=400"
          slug="buidlguidl"
        />
        <ProjectCard
          title="Security Audits"
          description={t("projects.security.description")}
          image="/security-thumbnail.jpg?height=300&width=400"
          slug="security"
        />
      </div>
    </section>
  );
}
