import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Image = () => {
  const imgList = ["batman.jpg", "jinx.jpg", "spidey.jpg"]
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => {
      // Increment the index and loop back to the start
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    },
  });
    
  useEffect(() => {
    // Automatically switch to the next image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
    
  return (
    <div className="md:col-span-3 col-span-6 md:h-[220px] h-[40vw] relative overflow-hidden font-bold bg-[#0e0e0e] rounded-3xl text-white flex items-center justify-center ">
    <animated.img
        src={imgList[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-w-full max-h-full object-cover rounded-md shadow-md"
        style={fadeIn}
    />
    </div>

  )
}

export default Image