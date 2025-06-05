"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectDetailProps {
  project: {
    title: string
    description: string
    longDescription: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl?: string
    features: string[]
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="container mx-auto px-4 py-20 relative z-10">
      <Link href="/#projects" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="relative h-96 rounded-lg overflow-hidden mb-6">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="flex gap-4 mb-6">
            <Link href={project.liveUrl} target="_blank">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
            </Link>
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank">
                <Button
                  variant="outline"
                  className="border-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-6">{project.description}</p>
          <p className="text-gray-300 mb-8 leading-relaxed">{project.longDescription}</p>

          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-emerald-400">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-emerald-400">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
