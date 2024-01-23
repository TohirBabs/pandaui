import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Weather = () => {
   const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState('');
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const now = new Date();
    const dayIndex = now.getDay()
    const weekdays = ["sun","mon","tue","wed","thur","fri","sat"]
    

  useEffect(() => {
    const getLocation = async () => {
      try {
        // Get user's location using the browser's geolocation API
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(`Error getting location: ${error.message}`);
            setLoading(false);
          }
        );
      } catch (error) {
        setError(`Error getting location: ${error.message}`);
        setLoading(false);
      }
    };

    getLocation();
  }, []);


  useEffect(() => {
    const getWeather = async () => {
      try {
        // Fetch weather information using OpenWeatherMap API
        const openWeatherApiKey = '54c6fc1cede766e66b898f32c3a3c03e';
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&appid=${openWeatherApiKey}`;

        const response = await fetch(openWeatherUrl);
        const data = await response.json();

        setWeatherForecastData(data);
      } catch (error) {
        setError(`Error fetching weather information: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (latitude !== null && longitude !== null) {
      getWeather();
    }
  }, [latitude, longitude]);

  console.log(weatherForecastData);
  const daysIndex = [0,8,16,24,32]
    return (
        <div className="md:col-span-6 col-span-12 md:h-[230px] h-[40vw] relative overflow-hidden  bg-[#0e0e0e]  rounded-3xl text-white flex items-center justify-center ">
            {weatherForecastData &&
            <div className='flex-col md:p-8 p-4 justify-between w-full h-full flex md:gap-4 gap-2'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <img src="/weather_icons/sun.svg" className='h-12' />                            
                        <p className='text-3xl md:text-6xl font-bold'>                           
                            {Math.round(weatherForecastData.list[0].main.temp - 273.15)}&deg;C</p>
                        </div>
                    <div className='text-right text-xl'>
                        <p className='font-bold text-3xl'>{ weatherForecastData.city.name}</p>
                        <p>{weatherForecastData.list[0].weather[0].description}</p>
                    </div>
                    </div>
                    
            <div className='flex justify-between '>
              {daysIndex.map((day, index) => (
                
              <div key={index} className='flex flex-col gap-1 items-center text-center'>
                  <p className='uppercase'>{ index === 0 ? "today": weekdays[(dayIndex + index)%7]}</p>
                            <img src="/weather_icons/sun.svg" className='h-6' />
                            <p>{Math.round(weatherForecastData.list[day].main.temp - 273.15)}&deg;</p>

                        </div>)
)}
                        
                    </div>
            </div>}
            
        </div>
  )
}
