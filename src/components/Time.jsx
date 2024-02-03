import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Time = ({mobileView, time}) => {
 const minutesArray = Array.from({ length: 60 }, (_, index) => index < 10? "0"+index : index);

    const formattedHour = `${time.hours < 10 ? '0' : ''}${time.hours}`;
    const formattedMinute = `${time.minutes < 10 ? '0' : ''}${time.minutes}:`;

  return (
      <div className="md:col-span-3 col-span-6 md:h-[230px] h-[40vw] relative overflow-hidden font-bold bg-[#0e0e0e] md:rounded-3xl rounded-2xl text-white flex items-center justify-center md:text-7xl text-5xl">
          <div className='flex items-center'>
          <span className=''>{formattedHour}</span><span className='animate-pulse'>:</span>
              <div className='flex flex-col gap-2 justify-center  relative  transition-all'>
                  <div className='absolute md:h-[230px] h-[40vw] w-full bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e] z-20'></div>
          <div
            className='flex relative flex-col md:w-[90px] md:h-[72px] w-[59px] h-[48px]'>
            <div    
              style={{ transform: `translateY(${mobileView ? time.minutes * -48 : time.minutes * -72}px)` }}
              className={`flex transition-all duration-1000 transition flex-col absolute `}>
                  {minutesArray.map((minute) => <span  key={minute}>{minute}</span>)}</div></div>
        </div>
      </div>
          </div>

  )
}
