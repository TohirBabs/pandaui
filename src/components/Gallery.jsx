import React from 'react'
import { useState } from 'react'

export const Gallery = () => {
  const [active, setActive] = useState(1)
  return (
      <div className='flex gap-2 justify-between items-center p-3 overflow-hidden m-3 bg-[#0e0e0e] rounded-2xl'>
      <img 
      onMouseEnter={() => setActive(1)}
        onMouseLeave={() => setActive(1)}
        src="spidey.jpg"
        className={`w-${active === 1 ? "[50%]" : "[16%]"} hover:bg-[#fff] h-[450px] bg-[#d9d9d9] rounded-xl transition-all duration-500 object-cover`}/>
    <img onMouseEnter={() => setActive(2)}
        onMouseLeave={() => setActive(1)}
        src="batman.jpg"
        className={`w-${active === 2 ? "[50%]" : "[16%]"} hover:bg-[#fff] h-[450px] bg-[#d9d9d9] rounded-xl transition-all duration-500 object-cover`}/>
      <img onMouseEnter={() => setActive(3)}
        onMouseLeave={() => setActive(1)}
        src="zombie.jpg"
        className={` w-${active === 3 ? "[50%]" : "[16%]"} hover:bg-[#fff] h-[450px] bg-[#d9d9d9] rounded-xl transition-all duration-500 object-cover`}/>
      <img onMouseEnter={() => setActive(4)}
        onMouseLeave={() => setActive(1)}
        src="jinx.jpg"
        className={`w-${active === 4 ? "[50%]" : "[16%]"} hover:bg-[#fff] h-[450px] bg-[#d9d9d9] rounded-xl transition-all duration-500 object-cover`}/>
      </div>  
  )
}
