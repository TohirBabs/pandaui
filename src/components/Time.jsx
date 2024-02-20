import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export const DigitalClock = ({}) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [minutes, setMinutes] = useState(12);
  
   

    useEffect(() => {
      // Update the time every second
      const interval = setInterval(() => {
        setMinutes((minutes + 1)%60);
      }, 3000);
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }, [minutes]);
 const minutesArray = Array.from({ length: 60 }, (_, index) => index < 10? "0"+index : index);

  return (
      <div className=" h-[10rem] border-4 border-indigo-300/70  md:col-span-2 col-span-6  w-full relative overflow-hidden font-bold bg-gradient-to-t from-indigo-700 to-indigo-400 rounded-[2rem] text-white flex items-center justify-center  text-4xl">
                    <div className='absolute  h-full w-full bg-gradient-to-t from-indigo-700 via-transparent to-indigo-400 z-20'></div>

          <div className='flex items-center'>
          <span className=''>09</span><span className='animate-pulse'>:</span>
            <div className='flex flex-col gap-2 justify-center  relative  transition-all'>
          <div
            className='flex relative flex-col  w-[48px] h-[40px]'>
            <div 
              style={{ transform: `translateY(${minutes * -40 }px)` }}
              className={`flex transition-all duration-1000  flex-col absolute `}>
                  {minutesArray.map((minute) => <span  key={minute}>{minute}</span>)}
                </div>
            </div>
        </div>
      </div>
          </div>

  )
}