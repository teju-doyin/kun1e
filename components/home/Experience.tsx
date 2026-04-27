import React from "react";
import { ExpOrEdu } from "@/types";

const experience: ExpOrEdu[] = [
  {
    id: 0,
    location: "Google",
    role: "Project Manager",
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
  {
    id: 2,
    location: "Google",
    role: "Product Manager",
    start: 2022,
  },
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
const Experience = () => {
  return (
    <div className="bg-black text-white mb-12 pb-8 pt-6">
      <div className="w-[95%] mx-auto">
        <p className="text-2xl mb-4 text-gray-300 tracking-[.3rem] ">
          My Experience
        </p>
        <div className="flex flex-col-reverse gap-4 mb-10">
          {experience.map((exp) => (
            <div className="flex-between items-start" key={exp.id}>
              <div className="">
                <p className="uppercase text-off-white text-[.8rem]">
                  {exp.role}
                </p>
                <p className="text-gray-400 text-sm font-light font-esteban">
                  {exp.location}
                </p>
              </div>
              <p className="border rounded-xs border-gray-400 text-gray-400 text-sm px-1 py-0.5">
                {exp.start} - {exp.end ?? "Present"}
              </p>
            </div>
          ))}
        </div>
        <p className="text-2xl mb-4 tracking-[.3rem] text-gray-300">
          My Education
        </p>
        <div className="flex flex-col-reverse gap-4">
          {education.map((exp) => (
            <div className="flex-between items-start" key={exp.id}>
              <div className="">
                <p className="uppercase text-off-white text-[.8rem]">
                  {exp.role}
                </p>
                <p className="text-gray-400 text-sm font-light font-esteban">
                  {exp.location}
                </p>
              </div>
              <p className="border rounded-xs border-gray-400 text-gray-400 text-sm px-1 py-0.5">
                {exp.start} - {exp.end ?? "Present"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
