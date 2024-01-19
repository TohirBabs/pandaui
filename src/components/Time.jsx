import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Time = () => {
 const minutesArray = Array.from({ length: 60 }, (_, index) => index < 10? "0"+index : index);

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
    const formattedMinute = `${minutes < 10 ? '0' : ''}${minutes}:`;


  return (
      <div className="md:col-span-3 col-span-6 md:h-[20vw] h-[40vw] relative overflow-hidden font-bold bg-[#0e0e0e] md:rounded-[2.4rem] rounded-3xl text-white flex items-center justify-center md:text-6xl text-5xl">
          <div className='flex items-center'>
          <span className=''>{formattedHour}</span>
              <div className='flex flex-col gap-2 justify-center  relative  transition-all'>
                          <div className='absolute md:h-[20vw] h-[40vw] w-full bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e] z-20'></div>
                  <div className='flex relative bottom-[2rem] flex-col'>

                  {minutesArray.map((minute) => <span key={minute}>{minute}</span>)}</div>


          </div></div>

          </div>

  )
}
