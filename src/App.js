import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

import { useWeatherContext } from "./context/WeatherContext";

function App() {
  const { cityCoordinates, selectedCity, setWeatherData, weatherData } =
    useWeatherContext();

  useEffect(() => {
    console.log(cityCoordinates);
    const getWeatherData = async () => {
      try {
        const coordinates = await cityCoordinates;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&units=metric&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeatherData();
  }, [selectedCity]);

  return (
    <div className="App">
      <Header />
      {!weatherData ? <div>Loading...</div> : <Weather />}
    </div>
  );
}

export default App;