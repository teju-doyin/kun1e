"use client";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  function backToProjects() {
    return pathname.startsWith("/projects");
  }
  const isBackToProjects = backToProjects();
  return (
    <div className="bg-off-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-[95%] medium:w-[60%] mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-2">
          Looks like you wandered off
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          The {isBackToProjects ? "project" : "page"} {} you&apos;re looking for
          doesn&apos;t exist or has been moved.
        </p>

        <Link
          href={`${isBackToProjects ? "/projects" : "/"}`}
          className="inline-flex items-center gap-2 bg-gray text-white text-sm px-8 py-2.5 hover:bg-black transition-opacity"
        >
          <MoveLeft size={14} />
          <p> Back to {isBackToProjects ? "Projects" : "Home"}</p>
        </Link>
      </div>
    </div>
  );
}
