import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2  items-center">
        <div className="flex justify-center md:justify-start md:pl-10">
          <Image
            src="/profile-picture.jpg?height=300&width=300"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-lg border border-gray-800"
          />
        </div>
        <div className="mt-2 text-center md:text-left">
          <Badge className="mb-4 bg-emerald-900 text-emerald-400 hover:bg-emerald-900">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold mb-6">
            Blockchain Engineer & Web3 Enthusiast
          </h2>
          <p className="text-gray-400 mb-4">
            I'm a passionate blockchain developer with 2+ years of experience
            building decentralized applications and smart contracts. My journey
            in Web3 began in 2022, and I've been at the growing in this
            technological niche ever since.
          </p>
          <p className="text-gray-400 mb-6">
            I specialize in creating secure, efficient, and user-friendly
            blockchain solutions. My goal is to contribute to the growth of the
            decentralized ecosystem and help bridge the gap between traditional
            systems and Web3, and make it fun in the process!
          </p>
          {/* <div className="grid grid-cols-2 gap-4 mb-6">
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
          </div> */}
          <Link href="https://github.com/luloxi/Resume" target="_blank">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              See Resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
