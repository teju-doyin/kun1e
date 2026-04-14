import React from 'react'
import{Skill} from '@/types'

const skillsExpertise:Skill[]=[
    {
        id:0,
        label:"User Experience"
    },
    {
        id:1,
        label:"Motion Design"
    },
    {
        id:2,
        label:"Project Management"
    },
    {
        id:3,
        label:"Conflict Resolution"
    },
    {
        id:4,
        label:"Branding"
    },
    {
        id:5,
        label:"Negotiation"
    },
    {
        id:6,
        label:"Web Design"
    },
]
const skillsSoftware:Skill[]=[
    {
        id:0,
        label:"Excel"
    },
    {
        id:1,
        label:"ExcaliDraw"
    },
    {
        id:2,
        label:"Figma"
    },
    {
        id:3,
        label:"Atlassian"
    }
]
const Skills = () => {
  return (
    <div className='w-[95%] mx-auto mb-12'>
    <h3 className='text-2xl my-4 text-black tracking-[.2rem] font-semibold'>Skills</h3>
    <div className='flex gap-4 mb-2 ml-2'>
        <button>Expertise</button>
        <button>Software</button>
    </div>
    <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 ">
        {
            skillsExpertise.map((skill)=>(
                <p key={skill.id} className='bg-off-white base-border text-center text-sm py-1'>{skill.label}</p>
            ))
        }
    </div>
    </div>
  )
}

export default Skills