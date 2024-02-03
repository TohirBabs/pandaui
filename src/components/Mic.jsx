import React from 'react'
import { FaMicrophone } from "react-icons/fa";

export const Mic = () => {
  return (
    <div className="md:col-span-3 col-span-6 md:h-[230px] h-[40vw] relative overflow-hidden  bg-[#0e0e0e] md:rounded-3xl rounded-2xl text-white flex items-center justify-center ">
          <div className='flex-col items-center w-full h-full justify-center flex md:gap-3 gap-2'>
<div className='p-8 rounded-full bg-[#fff]'>
              <FaMicrophone className='text-5xl text-black'/>
        </div>
        <p>listening ....</p>
           </div></div>
  )
}
