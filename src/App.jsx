import { Battery } from "./components/Battery"
import { Clock } from "./components/Clock"
import { Dictionary } from "./components/Dictionary"
import Image from "./components/Image"
import { Time } from "./components/Time"
import { Weather } from "./components/Weather"


const App = () => {
  return (<div className="w-screen min-h-screen bg-[#fff] flex-col flex items-center font-mono justify-center">
    <img src="/pandaemoji.svg" className="p-3 h-16 w-16 rounded-xl bg-[#0e0e0e]/70 m-4" />
    <h2 className="md:text-2xl text-lg text-center">minimalistic web widgets </h2>

    <div className="grid grid-cols-12 gap-[3vw] w-full p-[4vw]">
      <Time/>
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