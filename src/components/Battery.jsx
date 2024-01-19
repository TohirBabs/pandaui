import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsLightningChargeFill } from "react-icons/bs";

export const Battery = () => {
    const [batteryLevel, setBatteryLevel] = useState(100)
    const [chargeOrDischargeTime, setChargeOrDischargeTime] = useState(0)
    const [charging, setCharging] = useState(false)


    const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const getHoursMinutesSeconds = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds: remainingSeconds } = getHoursMinutesSeconds(chargeOrDischargeTime);


    if(navigator.getBattery){
      useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      
    navigator.getBattery()
    .then(function(battery) {

        // Get current battery level .
        setBatteryLevel(battery.level * 100);
        setChargeOrDischargeTime(battery.charging ? battery.chargingTime : battery.dischargingTime)
        setCharging(battery.charging)
        console.log(battery.dischargingTime.getHours());
    })
    .catch(function(e) {
        console.error(e);
    });

    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);
}
else{
    // if battery API is not working
}

  return (
      <div className="md:col-span-3 col-span-6 md:h-[20vw] h-[40vw] relative overflow-hidden  bg-[#0e0e0e] md:rounded-[2.4rem] rounded-3xl text-white flex items-center justify-center ">
          <div className='flex-col items-center w-full h-full justify-center flex gap-2'>
              <span className='md:text-5xl text-3xl text-center font-bold'>{batteryLevel}%</span>
              <div className='h-[28%] w-[75%] md:rounded-2xl rounded-lg bg-[#d9d9d9]/50 overflow-hidden flex items-center justify-center relative'>
                                <div style={{width:`${batteryLevel}%`}} className='h-full absolute left-0 transition-all bg-[#d9d9d9]'></div>
                  { charging && <BsLightningChargeFill className='z-10 md:text-3xl text-xl text-[#0e0e0e]'/>}

              </div>
                            <span className='text-base text-sm text-center'>{formatTime(hours)}hrs {formatTime(minutes)}mins left</span>


         </div>
</div>

  )
}
