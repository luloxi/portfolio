import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all duration-300 hover:border-emerald-800 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-gray-700">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={link} className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium">
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
