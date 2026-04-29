import React from "react";
import { ExpOrEdu } from "@/types";

const experience: ExpOrEdu[] = [
  {
    id: 0,
    location: "Google",
    role: "Project Manager",
    start: 2020,
    end: 2022,
  },
  { id: 1, location: "Adobe", role: "Project Manager", start: 2022, end: 2024 },
  { id: 2, location: "Atlassian", role: "Product Manager", start: 2024 },
];

const education: ExpOrEdu[] = [
  {
    id: 0,
    location: "University of Science",
    role: "MSc. Information Technology",
    start: 2022,
    end: 2024,
  },
  {
    id: 1,
    location: "Google",
    role: "Project Manager",
    start: 2022,
    end: 2024,
  },
];

const ExperienceList = ({ items }: { items: ExpOrEdu[] }) => (
  <div className="flex flex-col-reverse gap-4">
    {items.map((item) => (
      <div className="flex-between items-start" key={item.id}>
        <div>
          <p className="uppercase text-off-white text-[.8rem] md:text-[1rem]">
            {item.role}
          </p>
          <p className="text-gray-400 text-sm font-light font-esteban md:text-[1rem] ">
            {item.location}
          </p>
        </div>
        <p className="border rounded-xs md:text-[1rem] border-gray-400 text-gray-400 text-sm px-1 py-0.5 shrink-0 ml-4">
          {item.start} - {item.end ?? "Present"}
        </p>
      </div>
    ))}
  </div>
);

const Experience = () => {
  return (
    <div className="bg-black text-white mb-12 pb-8 pt-6">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:flex md:gap-40">
          <div className="mb-10 md:mb-0 md:flex-1">
            <p className="text-2xl mb-4 text-gray-300 tracking-[.3rem] md:text-3xl md:mb-8">
              My Experience
            </p>
            <ExperienceList items={experience} />
          </div>

          <div className="md:flex-1">
            <p className="text-2xl mb-4 tracking-[.3rem] text-gray-300 md:text-3xl md:mb-8">
              My Education
            </p>
            <ExperienceList items={education} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
