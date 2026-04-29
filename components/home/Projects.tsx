import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import ProjectGrid from "../sharedComponents/ProjectGrid";

export default function Projects() {
  const projects = projectsData.slice(0, 3) as Project[];

  return (
    <div className="bg-[#fff] py-8">
      <div className="w-[95%] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl text-black tracking-[.2rem] font-semibold">
            My Recent Works
          </h3>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
          >
            <span className="text-lg">View all</span> <MoveRight size={14} />
          </Link>
        </div>
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
