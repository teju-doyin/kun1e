'use client'
import { useState, useMemo } from "react"
import projectsData from "@/data/projects.json"
import { Project } from "@/types"
import ProjectGrid from "@/components/sharedComponents/ProjectGrid"
import ContactShortcut from "@/components/sharedComponents/ContactShortcut"
import Footer from "@/components/sharedComponents/Footer"

const allProjects = projectsData as Project[]
const allTags = ['All','Brand Strategy', 'MoSCow']
const INITIAL_COUNT = 4

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const filtered = useMemo(() =>
    activeTag === 'All'
      ? allProjects
      : allProjects.filter(p => p.tags.includes(activeTag)),
    [activeTag]
  )

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleTagClick(tag: string) {
    setActiveTag(tag)
    setVisibleCount(INITIAL_COUNT) // reset on filter change
  }

  return (
    <div className="bg-[#fff] pt-22 pb-12">
      <div className="w-[95%] mx-auto">
        <h3 className="text-2xl mb-4 text-black tracking-[.2rem] font-semibold">
          Projects
        </h3>

        {/* filters */}
        <ul className="flex gap-4 mb-8">
          {allTags.map(tag => (
            <li
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`text-sm cursor-pointer pb-0.5 transition-colors
                ${activeTag === tag
                  ? 'border-b border-black font-medium'
                  : 'text-gray-500 hover:text-black'
                }`}
            >
              {tag}
            </li>
          ))}
        </ul>

        <ProjectGrid
          projects={visible}
          activeTag={activeTag}
          onTagClick={handleTagClick}
        />

        {hasMore && (
          <button
            onClick={() => setVisibleCount(prev => prev + INITIAL_COUNT)}
            className="mt-8  py-2 px-2 w-[15%] flex justify-center mb-10 mx-auto border border-black text-sm hover:bg-black hover:text-white transition-colors"
          >
            Load more
          </button>
        )}
      </div>
      <div className="flex-col items-center bg-off-white py-8">
        <ContactShortcut/>
      </div>
        <Footer/>
    </div>
  )
}