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
    <div className=" h-[10rem] md:col-span-2 col-span-6  w-full relative overflow-hidden font-bold bg-gradient-to-t from-rose-700 to-rose-400 rounded-[2rem] text-white flex items-center justify-center  text-4xl">
    <div className='w-[9rem] relative flex items-center justify-center h-[9rem] rounded-full bg-[#fff] '>
              <div className='absolute left-[50%] top-[50%] origin-left animate-spin-perminute w-[50%] h-[2px] bg-rose-700'></div>
              <p className='relative top-6 text-2xl text-rose-500'>{formattedHour}{formattedMinute}</p>
              <div className='absolute w-3 h-3 rounded-full bg-rose-500'></div>
          </div>
        </div>
  )
}
