import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  WiHumidity,
  WiDayCloudy,
  WiDaySunny,
  WiStrongWind,
  WiThermometerExterior,
  WiRain,
  
} from "react-icons/wi";
import { TbTemperature } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { BsClouds,BsCloudRain } from "react-icons/bs";

function Weather2() {
  const [city, setCity] = useState();
  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();

  const [weather, setWeather] = useState(null);
  const apiKey = "f415eea124c11ce6eadab3d75d5cd9d0";
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // setLatitude(position.coords.latitude);
      // setLongitude(position.coords.longitude);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
        )
        .then((result) => {
          setWeather(result.data);
          setCity(result.data.name);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  useEffect(() => {
  

    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [city]);

  // ...

  return (
    <div>
      <div className="cursor-pointer">
        {weather && (
          <div className="absolute text-sm md:text-xl text-white top-0 right-0 mx-4 my-4 flex flex-col bg-gray-800/[.4] p-4 rounded-md lg:flex lg:gap-4 lg:text-xl">
            <div className="flex items-center gap-1">
              {weather.weather[0].main === "Clouds" ? (
                <BsClouds className="text-2xl" />
              ) : weather.weather[0].main === "Rain" ? (
                <BsCloudRain className="text-2xl" />
              ) : (
                <WiDayCloudy className="text-2xl" />
              )}
              <p>{Math.round(weather.main.temp)}°C</p>
            </div>
            <div className="flex ml-10 items-center gap-2 -mt-4 text-sm">
              {weather.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather2;
