import React from 'react'
import { useState } from 'react'

export const Gallery = () => {
  const [active, setActive] = useState(1)
  return (
      <div className='flex gap-2  justify-center items-center p-5 m-3 bg-[#0e0e0e] rounded-3xl'>
      <div onMouseEnter={() => setActive(1)}
        onMouseLeave={() => setActive(1)}
        
        className={`w-${active === 1 ? "[40%]":"1/4"} hover:bg-[#fff] h-[400px] bg-[#d9d9d9] rounded-3xl transition-all duration-500`}></div>
    <div onMouseEnter={() => setActive(2)}
        onMouseLeave={() => setActive(1)}
        
        className={`w-${active === 2? "[40%]":"1/4"} hover:bg-[#fff] h-[400px] bg-[#d9d9d9] rounded-3xl transition-all duration-500`}></div>
      <div onMouseEnter={() => setActive(3)}
        onMouseLeave={() => setActive(1)}
        
        className={` w-${active === 3 ? "[40%]":"1/4"} hover:bg-[#fff] h-[400px] bg-[#d9d9d9] rounded-3xl transition-all duration-500`}></div>
      <div onMouseEnter={() => setActive(4)}
        onMouseLeave={() => setActive(1)}
        
        className={`w-${active === 4 ? "[40%]":"1/4"} hover:bg-[#fff] h-[400px] bg-[#d9d9d9] rounded-3xl transition-all duration-500`}></div>
      </div>  
  )
}
