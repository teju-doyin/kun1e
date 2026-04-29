"use client";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

type Props = {
  projects: Project[];
  activeTag?: string;
  onTagClick?: (tag: string) => void;
};

export default function ProjectGrid({
  projects,
  activeTag,
  onTagClick,
}: Props) {
  return (
    <div className="grid grid-cols-1 medium:grid-cols-2 large:grid-cols-3 gap-8 mb-4">
      {projects.map((project, index) => (
        <FadeIn key={project.id} delay={index * 150}>
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={600}
                height={400}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4 flex flex-col flex-1">
              <Link
                href={`/projects/${project.slug}`}
                className="text-lg text-black font-semibold font-esteban hover:underline"
              >
                {project.title}
              </Link>
              <p className="text-sm text-gray-800 mb-4">{project.subtitle}</p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    onClick={() => onTagClick?.(tag)}
                    className={`text-xs text-gray-600 base-border border-gray-400 py-0.5 px-1 text-center
                      ${onTagClick ? "cursor-pointer hover:border-black hover:text-black transition-colors" : ""}
                      ${activeTag === tag ? "border-black text-black" : ""}
                    `}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
