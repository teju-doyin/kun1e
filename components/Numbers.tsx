import React from 'react'
import {NumberDisplay} from '@/types'

const expNumbers:NumberDisplay[] = [
  {
    id:0,
    number:5,
    label:"years of experience",
  },
  {
    id:1,
    number:15,
    label:"project completed",
    differentStyling:true
  },
  {
    id:2,
    number:6,
    label:"happy clients",
  },
]
const Numbers = () => {
  return (
    <div className='w-[95%] mx-auto medium:flex medium:justify-around border border-black mb-12'>
      {
        expNumbers.map((item)=>(
          <div key={item.id} className={`flex-col-center py-4 px- flex-1 ${item.differentStyling?"bg-gray text-off-white":""}`}>
            <p className='font-semibold text-3xl mb-1'>{item.number}+</p>
            <p className='uppercase text-xs '>{item.label}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Numbers