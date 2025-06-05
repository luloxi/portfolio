import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HexBackground } from "@/components/hex-background"
import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"

const projects = {
  sami: {
    title: "SAMI - AI Game",
    description: "Group chatroom game where players can bet crypto on who's the impostor AI in the chat.",
    longDescription:
      "SAMI is an innovative blockchain-based game that combines social interaction with AI detection. Players join group chats where one participant is an AI impostor, and they must identify who it is while placing cryptocurrency bets on their guesses. The game leverages smart contracts for secure betting and fair payouts.",
    image: "/sami-thumbnail.jpg",
    technologies: [
      "Solidity",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Scaffold-ETH 2",
      "Node.js",
      "Express",
      "OpenAI API",
    ],
    liveUrl: "https://playsami.fun/",
    githubUrl: "https://github.com/fabian416/sami",
    features: [
      "Real-time chat with AI integration",
      "Cryptocurrency betting system",
      "Smart contract-based game logic",
      "Multi-player support",
      "Fair payout distribution",
    ],
  },
  tap: {
    title: "Tap - Job Search Platform",
    description: "Web2 platform to connect gamers and streamers with content creators and people in their field.",
    longDescription:
      "Tap is a specialized job search platform designed for the gaming and streaming industry. It connects talented gamers, streamers, and content creators with opportunities in their field, featuring advanced matching algorithms and industry-specific job categories.",
    image: "/tap-thumbnail.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    liveUrl: "https://tap-tan-ten.vercel.app/",
    features: [
      "Advanced job matching algorithms",
      "Industry-specific categories",
      "Profile verification system",
      "Real-time messaging",
      "Portfolio showcase",
    ],
  },
  punksociety: {
    title: "PunkSociety - Social Network",
    description: "Social network where posts are NFTs and likes send USDC to the post author.",
    longDescription:
      "PunkSociety revolutionizes social media by turning posts into NFTs and implementing a unique monetization system where likes directly send USDC to content creators. Built on blockchain technology, it ensures true ownership of content and fair compensation for creators.",
    image: "/punksociety-thumbnail.jpg",
    technologies: ["Solidity", "React", "Next.js", "TypeScript", "Tailwind CSS", "Scaffold-ETH 2", "IPFS", "The Graph"],
    liveUrl: "https://punksociety.xyz/",
    githubUrl: "https://github.com/luloxi/PunkSociety",
    features: [
      "Posts as NFTs",
      "USDC micropayments for likes",
      "Decentralized content storage",
      "Creator monetization",
      "Community governance",
    ],
  },
  buidlguidl: {
    title: "BuidlGuidl Projects",
    description: "Several prototypes to show Scaffold-ETH 2 usage for creating dApps.",
    longDescription:
      "A collection of decentralized application prototypes built using Scaffold-ETH 2, demonstrating various Web3 development patterns and best practices. These projects serve as educational resources and showcase the capabilities of modern blockchain development tools.",
    image: "/buidlguidl-thumbnail.jpg",
    technologies: ["Solidity", "React", "Next.js", "TypeScript", "Tailwind CSS", "Scaffold-ETH 2", "IPFS", "Hardhat"],
    liveUrl: "https://app.buidlguidl.com/builders/0xfBD9Ca40386A8C632cf0529bbb16b4BEdB59a0A0",
    features: [
      "Multiple dApp prototypes",
      "Educational code examples",
      "Best practice demonstrations",
      "Open source contributions",
      "Community learning resources",
    ],
  },
  security: {
    title: "Security Audits",
    description: "Security audits for smart contracts and decentralized applications.",
    longDescription:
      "Comprehensive security audit services for smart contracts and decentralized applications. Using industry-standard tools and methodologies to identify vulnerabilities, ensure code quality, and provide detailed reports with remediation recommendations.",
    image: "/security-thumbnail.jpg",
    technologies: ["Solidity", "Foundry", "Hardhat", "Slither", "Mythril", "Echidna", "Security Analysis"],
    liveUrl: "https://github.com/luloxi/security-reviews",
    features: [
      "Comprehensive vulnerability assessment",
      "Automated testing tools",
      "Manual code review",
      "Detailed audit reports",
      "Remediation guidance",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <HexBackground />
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </div>
  )
}
