import { Battery } from "./components/Battery"
import { Time } from "./components/Time"


const App = () => {
  return (<div className="w-screen min-h-screen bg-[#fff] flex-col flex items-center font-mono justify-center">
    <img src="/pandaemoji.svg" className="p-3 h-16 w-16 rounded-xl bg-[#0e0e0e]/70 m-4" />
    <h2 className="text-2xl text-center">minimalistic web widgets </h2>

    <div className="grid grid-cols-12 gap-6 w-full p-6">
      <Time/>
      <Battery />
      <div className="col-span-3 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-3 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-3 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-3 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-6 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-3 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-6 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>
      <div className="col-span-3 h-[20vw] bg-[#0e0e0e] rounded-3xl"></div>


    </div>
  </div>)
}

export default App