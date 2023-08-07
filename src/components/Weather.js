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
import { RiCloudyLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from "react";



function Weather() {
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const weatherPanelRef = useRef();
  const weatherButtonRef = useRef();

  const handleWeather = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    getLocation();
    const apiKey = "f415eea124c11ce6eadab3d75d5cd9d0";
    const city = "Galle";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

    // Add event listener to the document to listen for clicks outside of the weather panel
    window.addEventListener("click", handleClickOutside);
    // Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const getLocation = () => {
    axios
      .get("http://ipapi.co/json")
      .then((response) => {
        setCity(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOutside = (event) => {
    // Check if the click event occurred outside of the weather panel
    if (
      weatherPanelRef.current &&
      !weatherPanelRef.current.contains(event.target) &&
      weatherButtonRef.current &&
      !weatherButtonRef.current.contains(event.target)
    ) {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div>
      <div>
        {/* ref={weatherButtonRef} */}
        <WiDaySunny
          className={`text-4xl lg:hidden absolute md:text-2xl text-white top-0 right-0 mx-4 my-4  cursor-pointer ${
            showDetails ? "hidden md:block" : "block md:block "
          }`}
          onClick={handleWeather}
        />
      </div>

      {weather ? (
        <div
          // ref={weatherPanelRef}
          onClick={handleWeather}
          className={`absolute text-sm md:text-xl  text-white top-0 right-0 mx-4 my-4 flex flex-col  bg-gray-800/[.4] p-4 rounded-md  lg:flex lg: gap-4 lg:text-xl 
          ${showDetails ? "block md:block " : "hidden md:block"}`}
        >
          <div className="flex justify-center bg-white/10 rounded-md">
            <WiDayCloudy className="text-3xl" />
          </div>

          <div className="flex items-center gap-2">
            <GoLocation className="text-xl" />
            <h1>{weather.name}</h1>
          </div>

          {/* change dynamically the icon of clouds rain etc. */}

          <div className="flex items-center gap-2">
            {weather.weather[0].main === "Clouds" ? (
              <RiCloudyLine className="text-2xl" />
            ) : weather.weather[0].main === "Rain" ? (
              <WiRain className="text-2xl" />
            ) : (
              <WiDayCloudy className="text-2xl" />
            )}
            <p>{weather.weather[0].main}</p>
          </div>

          <p>
            {weather.weather[0].description.charAt(0).toUpperCase() +
              weather.weather[0].description.slice(1)}
          </p>

          <div className="flex items-center">
            <TbTemperature className="text-2xl" />
            <p>Temperature: {weather.main.temp}°C</p>
          </div>
          <div className="flex items-center">
            <WiThermometerExterior className="text-2xl" />
            <p>Feels like: {weather.main.feels_like} °C</p>
          </div>
          <div className="flex items-center ">
            <WiHumidity className="text-2xl" />
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
          <div className="flex items-center">
            <WiStrongWind className="text-2xl" />
            <p>Wind speed: {weather.wind.speed} km/h</p>
          </div>
        </div>
      ) : (
        <div>
         {/* weather not available */}
        </div>
      )}
    </div>
  );
}

export default Weather;
