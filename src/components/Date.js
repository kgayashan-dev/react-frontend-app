import React, { useState, useEffect } from "react";
// import {AiOutlineCalendar} from 'react-icons/ai'
import Quates from './Quates'
import { FcCalendar } from "react-icons/fc";
// Importing necessary modules

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  // Using state to keep track of the current time

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // Using useEffect to update the time every second
    // setInterval is used to call the function that updates the time every second
    // The second parameter (1000) is the time in milliseconds before the function is called again

    return () => clearInterval(interval);
    // The returned function is used to clear the interval when the component unmounts
  }, []);

  const day = time.getDate();
  const year = time.getFullYear();
  const month = time.toLocaleString("default", { month: "long" });

  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds(); // if we need

  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  // Calculating the hour, minute, and AM/PM

  return (
    <>
      <div className="absolute text-9xl font-medium text-white felx-col gap-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex  items-center">
        <h1 className="">{`${formattedHour}:${minute
          .toString()
          .padStart(2, "0")} ${ampm} `}</h1>
        {/* Displaying the current time in the desired format */}
        {/* Using template literals and the ternary operator to determine the correct AM/PM */}
        {/* Using toString and padStart to ensure that the minutes are always two digits */}

      <Quates />
        
      </div>
      <div className="absolute text-2xl  md:text-4xl md:p-4 text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 items-center bg-gray-800/[.4] p-3 rounded-md">
        <FcCalendar />
        <h2>{`${day} ${month} ${year}`}</h2>


      </div>

    </>
  );
};

export default LiveClock;
// Exporting the component for use in other files */}
