import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Clock = () => {
const [time, setTime] = useState(new Date());

  const hours = time.getHours();
  const minutes = time.getMinutes();
    const [minuteIndex, setMinuteIndex] = useState(minutes);

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);


  // Format the time as HH:MM
    const formattedHour = `${hours < 10 ? '0' : ''}${hours}:`;
    const formattedMinute = `${minutes < 10 ? '0' : ''}${minutes}`;

  return (
      <div className="md:col-span-3 col-span-6 md:h-[20vw] h-[40vw] relative overflow-hidden font-bold bg-[#0e0e0e] md:rounded-[2.4rem] rounded-3xl text-white flex items-center justify-center ">
          <div className='w-[16vw] relative flex items-center justify-center h-[16vw] rounded-full bg-[#d9d9d9] '>
              <div className='absolute left-[50%] top-[50%] origin-left  animate-spin-perminute w-[50%] h-[2px] bg-[#0e0e0e]'></div>
              <p className='relative top-6 text-2xl text-[#0e0e0e]'>{formattedHour}{formattedMinute}</p>
              <div className='absolute w-3 h-3 rounded-full bg-[#0e0e0e]'></div>
          </div>
        </div>
  )
}
