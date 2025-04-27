import { Code, Zap, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
      <p className="text-gray-400 mb-12">My technical expertise in the blockchain ecosystem</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
            <p className="text-gray-400 mb-4">Developing secure and efficient smart contracts</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-700">
                Solidity
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Rust
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Vyper
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Hardhat
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Truffle
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend & DApps</h3>
            <p className="text-gray-400 mb-4">Building intuitive decentralized applications</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-700">
                React
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Next.js
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                ethers.js
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                web3.js
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                wagmi
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blockchain Protocols</h3>
            <p className="text-gray-400 mb-4">Working with various blockchain networks</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-700">
                Ethereum
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Polygon
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Solana
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Avalanche
              </Badge>
              <Badge variant="outline" className="border-gray-700">
                Arbitrum
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
