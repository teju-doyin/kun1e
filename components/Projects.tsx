import React from "react";
import { Project } from "@/types";
import projectsData from "@/data/projects.json";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "./FadeIn";

const projects = projectsData.slice(0, 3) as Project[];

const Projects = () => {
  return (
    <div className="bg-[#fff] py-8">
      <div className="w-[95%] mx-auto ">
        <h3 className="text-2xl mb-4 text-black tracking-[.2rem] font-semibold">
          My Recent Works
        </h3>
        <div className="flex-col gap-12 mb-4">
          {projects.map((project) => (
            <div className="" key={project.id}>
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
                    className="text-lg text-black font-semibold"
                  >
                    {project.title}
                  </Link>
                  <p className="text-sm text-gray-800 mb-4">
                    {project.subtitle}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="text-xs text-gray-600 base-border border-gray-400 py-0.5 px-1 text-center"
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
        {/* link to see more */}
        <Link href="/projects" className="flex justify-end gap-2">
          <span>view all</span> <MoveRight />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
