"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  slug: string
}

export function ProjectCard({ title, description, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all duration-300 hover:border-emerald-800 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] cursor-pointer h-full">
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
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
