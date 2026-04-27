import projectsData from "@/data/projects.json"
import { Project } from "@/types"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import ProjectGrid from "../sharedComponents/ProjectGrid"

export default function Projects() {
  const projects = projectsData.slice(0, 3) as Project[]

  return (
    <div className="bg-[#fff] py-8">
      <div className="w-[95%] mx-auto">
        <h3 className="text-2xl mb-4 text-black tracking-[.2rem] font-semibold">
          My Recent Works
        </h3>
        <ProjectGrid projects={projects} />
        <Link href="/projects" className="flex justify-end gap-2">
          <span>view all</span> <MoveRight />
        </Link>
      </div>
    </div>
  )
}