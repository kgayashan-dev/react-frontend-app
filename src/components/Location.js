import axios from "axios";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";


const Location = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentLocationJs, setCurrentLocationJS] = useState({});

  useEffect(() => {
    getLocation();
    getGeoLocation();
  }, []);

  const getLocation = () => {
    axios
      .get("http://ipapi.co/json")
      .then((response) => {
        setCurrentLocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrentLocationJS({ latitude, longitude });
    });
  };

  return (
    <>
      {/* <div>
        <p>Current Location Latitude: {currentLocation.latitude} </p>
        <p>Current Location Longitude: {currentLocation.longitude} </p>
        <p>Current Location city: {currentLocation.city} </p>
      </div>
      <div>
        <p>Second method</p>
        <p>Current Location Latitude: {currentLocation.latitude} </p>
        <p>Current Location Longitude: {currentLocation.longitude} </p>
      </div> */}

      
    </>
  );
};

export default Location;
