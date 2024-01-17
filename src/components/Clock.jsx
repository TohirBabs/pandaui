import React from 'react'

export const Clock = () => {
  return (
      <div
          style={{
              boxShadow: "0px 8px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset",
              backdropFilter: "blur(50px)" }}         
              className="p-2  text-[#fff] rounded-2xl bg-[#959595]">
          <div className='w-[200px] border-2 border border-[#0e0e0e] h-[100px] bg-[#8fa37e] rounded-xl'>
              <div className='flex justify-between p-2'>
                  <p className='p-1 bg-[#3a4432] text-[#8fa37e] rounded text-xs'>12:35 PM</p>
              </div>
          </div>
          </div>
  )
}
