import React from 'react'
import { IoSunny, IoTicketOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import { RxTimer } from "react-icons/rx";

export const Clock = () => {
  return (
      <div       
          style={{
              boxShadow: "0px 8px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(149, 149, 149, 0.85) inset, 0px -1px 1px 0px rgba(14, 14, 14, 0.20) inset",
              backdropFilter: "blur(20px)"
          }} 
              className="p-4 text-[#fff] rounded-[2.5rem] bg-[#959595]/50">        
          <div style={{
              boxShadow: "0px 1px 1px 0px rgba(225, 225, 225, 0.55) inset, 0px -1px 1px 0px rgba(14, 14, 14, 0.20) inset",
              backdropFilter: "blur(20px)"
          }}  className='w-[320px] border-4 border-[#0e0e0e] h-[200px] bg-[#8fa37e] flex flex-col justify-between rounded-3xl'>
              <div className='flex justify-between p-4 font-bold text-lg'>
                  <p className='p-1 px-2 bg-[#3a4432] text-[#8fa37e] rounded-lg'>12:35 PM</p>
                  <p className='p-1 px-2 bg-[#3a4432]/20 text-[#3a4432] rounded-lg'><IoSunny className='inline-block'/> +16</p>

              </div>
              <div className='flex justify-between items-center p-4 text-lg'>
                  <p className='text-[#3a4432] text-6xl'>45:00</p>
                  <p className=' p-2 bg-[#3a4432]/20 text-[#3a4432] rounded-lg'><RxTimer className='text-xl font-bold'/></p>

              </div>
          </div>
          <div className='mt-10 flex justify-between '>
              <div className='w-[4.5rem] h-[4.5rem] border-4 border border-[#0e0e0e] rounded-full'></div>
              <div clas></div>
              <div className='w-[10rem] h-[4.5rem] bg-[#0e0e0e] border-4 border border-[#0e0e0e] rounded-full'></div>
          </div>
          </div>
  )
}
