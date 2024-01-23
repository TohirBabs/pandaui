import React from 'react'
import { HiSpeakerWave } from "react-icons/hi2";

export const Dictionary = () => {
    return (
<div className="md:col-span-6 col-span-12 md:h-[220px] h-[40vw] relative overflow-hidden  bg-[#0e0e0e] rounded-3xl text-white flex items-center justify-center ">
            <div className='flex-col md:p-8 p-4 justify-center w-full h-full flex md:gap-4 gap-2'>
                <div className='flex justify-between w-full items-center '>
                    <h3 className='md:text-5xl text-3xl font-bold'>perfect</h3>
                    <HiSpeakerWave className='md:text-5xl text-3xl'/>
                </div>
                <p className='italic'>adjective</p>
                <p className='md:text-xl text-base'>completely good; without faults or weaknesses</p>
              </div></div>
  )
}
