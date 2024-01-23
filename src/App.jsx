import { useRef } from "react"
import { Battery } from "./components/Battery"
import { Clock } from "./components/Clock"
import { Dictionary } from "./components/Dictionary"
import Image from "./components/Image"
import { Time } from "./components/Time"
import { Weather } from "./components/Weather"
import { useEffect } from "react"
import { useState } from "react"


const App = () => {

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const [time, setTime] = useState(new Date());

  const hours = time.getHours();
  const minutes = time.getMinutes();
 

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (<div className="w-screen min-h-screen bg-[#fff] flex-col flex items-center font-mono justify-center">
    <img src="/pandaemoji.svg" className="p-3 h-16 w-16 rounded-xl bg-[#0e0e0e]/70 m-4" />
    <h2 className="md:text-2xl text-lg text-center">minimalistic web widgets </h2>

    <div className="grid grid-cols-12 md:gap-[2rem] gap-[1rem] max-w-6xl p-[0.5rem]">
      <Time mobileView={windowSize.current[0] < 768} time={ {hours:hours,minutes:minutes}} />
      <Battery />
      <Weather/>
      <Dictionary />
      <Clock/>
<Image/>      <div className="md:col-span-3 col-span-6  md:h-[20vw] h-[40vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="md:col-span-3 col-span-6  md:h-[20vw] h-[40vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="md:col-span-3 col-span-6  md:h-[20vw] h-[40vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="md:col-span-3 col-span-6  md:h-[20vw] h-[40vw] bg-[#0e0e0e] rounded-3xl"></div>


    </div>
  </div>)
}

export default App