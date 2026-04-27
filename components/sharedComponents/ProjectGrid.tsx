'use client'
import { Project } from "@/types"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "./FadeIn"

type Props = {
  projects: Project[]
  activeTag?: string
  onTagClick?: (tag: string) => void
}

export default function ProjectGrid({ projects, activeTag, onTagClick }: Props) {
  return (
    <div className="flex-col gap-12 mb-4">
      {projects.map((project) => (
        <div key={project.id}>
          <FadeIn>
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-xs"
            />
            <div className="mt-4">
              <Link
                href={`/projects/${project.slug}`}
                className="text-lg text-black font-semibold font-esteban"
              >
                {project.title}
              </Link>
              <p className="text-sm text-gray-800 mb-4">{project.subtitle}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    onClick={() => onTagClick?.(tag)}
                    className={`text-xs text-gray-600 base-border border-gray-400 py-0.5 px-1 text-center
                      ${onTagClick ? 'cursor-pointer hover:border-black hover:text-black transition-colors' : ''}
                      ${activeTag === tag ? 'border-black text-black' : ''}
                    `}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      ))}
    </div>
  )
}