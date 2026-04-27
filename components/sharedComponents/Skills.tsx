"use client";
import React, { useState } from "react";
import { SkillCategory } from "@/types";

const skills: SkillCategory[] = [
  {
    id: 0,
    category: "Expertise",
    skillsList: [
      { id: 0, label: "User Experience" },
      { id: 1, label: "Motion Design" },
      { id: 2, label: "Project Management" },
      { id: 3, label: "Conflict Resolution" },
      { id: 4, label: "Branding" },
      { id: 5, label: "Negotiation" },
      { id: 6, label: "Web Design" },
    ],
  },
  {
    id: 1,
    category: "Software",
    skillsList: [
      { id: 0, label: "Excel" },
      { id: 1, label: "ExcaliDraw" },
      { id: 2, label: "Figma" },
      { id: 3, label: "Atlassian" },
    ],
  },
];

const Skills = () => {
  const [switchCategory, setSwitchCategory] = useState(skills[0].id);
  const [activeCategory, setActiveCategory] = useState(skills[0].skillsList);
  function handleSkillsSwitch(id: number) {
    setSwitchCategory(id);
    setActiveCategory(skills[id].skillsList);
  }
  return (
    <div className="w-[95%] mx-auto mb-12">
      <h3 className="text-2xl my-4 text-black tracking-[.2rem] font-semibold uppercase">
        Skills
      </h3>

      {/* 1. Map through categories to create the headers/buttons */}
      <div className="flex gap-4 mb-6 ml-2">
        {skills.map((category) => (
          <button
            key={category.id}
            onClick={() => handleSkillsSwitch(category.id)}
            className={`${switchCategory === category.id ? "border-b border-black" : "text-gray-500"} font-esteban text-sm uppercase tracking-wider`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* 2. Map through categories and then their nested skillsList */}
      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4">
        {activeCategory.map((skill) => (
          <p
            key={`${skill.id}`}
            className="bg-off-white border border-black/10 text-center text-sm py-1 rounded-sm"
          >
            {skill.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
