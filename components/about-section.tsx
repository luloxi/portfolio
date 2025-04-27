import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Profile"
            width={500}
            height={500}
            className="rounded-lg border border-gray-800"
          />
        </div>
        <div>
          <Badge className="mb-4 bg-emerald-900 text-emerald-400 hover:bg-emerald-900">About Me</Badge>
          <h2 className="text-3xl font-bold mb-6">Blockchain Engineer & Web3 Enthusiast</h2>
          <p className="text-gray-400 mb-4">
            I'm a passionate blockchain developer with 5+ years of experience building decentralized applications and
            smart contracts. My journey in Web3 began in 2017, and I've been at the forefront of this technological
            revolution ever since.
          </p>
          <p className="text-gray-400 mb-6">
            I specialize in creating secure, efficient, and user-friendly blockchain solutions that solve real-world
            problems. My goal is to contribute to the growth of the decentralized ecosystem and help bridge the gap
            between traditional systems and Web3.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-emerald-500 font-bold text-4xl">30+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-emerald-500 font-bold text-4xl">15+</p>
              <p className="text-gray-400">Smart Contracts Deployed</p>
            </div>
            <div>
              <p className="text-emerald-500 font-bold text-4xl">$10M+</p>
              <p className="text-gray-400">TVL Managed</p>
            </div>
            <div>
              <p className="text-emerald-500 font-bold text-4xl">5+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Download Resume</Button>
        </div>
      </div>
    </section>
  )
}
