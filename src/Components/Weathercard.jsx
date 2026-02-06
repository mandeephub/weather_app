import React, { useEffect, useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import { FaDroplet, FaWind, FaUmbrella } from "react-icons/fa6";

import loadimage from '../../public/wee.svg'

const Weathercard = ({ city }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [weatherdata, setweatherdata] = useState(null);

  const [loaded, setloaded] = useState(true)

  useEffect(() => {
    if (!city) return;

    const fetchdata = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        console.log(data);
        setweatherdata(data);
        setloaded(false)
      } catch (error) {
        console.error("Weather fetch error:", error);
      }
    };

    fetchdata();
  }, [city]);

  return (
    <>
      {loaded ?  <div className="flex bg-blue-800 w-[400px] h-[400px] items-center shadow-2xl shadow-gray-800 rounded-2xl text-center m-auto text-white p-8 mt-24">
            <img src={loadimage}/>
      </div>
         : <div className="bg-blue-800 w-[400px] shadow-2xl shadow-gray-800 rounded-2xl text-center m-auto text-white p-8 mt-24">
          
          {/* Location */}
          <div className="flex gap-2 items-center justify-center my-4 poppins-semibold">
            <HiMapPin />
            <p>
              {weatherdata.name}, {weatherdata.sys?.country}
            </p>
          </div>

          {/* Temperature */}
          <div className="my-8">
            <h2 className="text-8xl font-extrabold">
              {Math.round(weatherdata.main?.temp)}°C
            </h2>
          </div>

          {/* Weather Description */}
          <div className="flex justify-center gap-4 capitalize">
            <p>{weatherdata.weather?.[0]?.description}</p>
          </div>

          {/* Info Section */}
          <div className="flex justify-between mt-8 bg-blue-700 p-4 rounded-2xl">
            
            {/* Precipitation */}
            <div className="text-center flex flex-col justify-center">
              <div className="m-auto mb-3">
                <FaDroplet className="text-2xl" />
              </div>
              <p className="text-xl font-extrabold mb-1">
                {weatherdata.rain?.["1h"] ?? 0} mm
              </p>
              <p>Rain</p>
            </div>

            {/* Humidity */}
            <div className="text-center flex flex-col justify-center">
              <div className="m-auto mb-3">
                <FaUmbrella className="text-2xl" />
              </div>
              <p className="text-xl font-extrabold mb-1">
                {weatherdata.main?.humidity}%
              </p>
              <p>Humidity</p>
            </div>

            {/* Wind Speed */}
            <div className="text-center flex flex-col justify-center">
              <div className="m-auto mb-3">
                <FaWind className="text-2xl" />
              </div>
              <p className="text-xl font-extrabold mb-1">
                {weatherdata.wind?.speed} m/s
              </p>
              <p>Wind Speed</p>
            </div>

          </div>
        </div>}
    </>
  );
};

export default Weathercard;
