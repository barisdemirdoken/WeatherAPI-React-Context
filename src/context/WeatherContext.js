import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState("Istanbul");
  const [weatherData, setWeatherData] = useState(null);
  const [cityCoordinates, setCityCoordinates] = useState([
    { lat: 41.0096334, lon: 28.9651646 },
  ]);

  useEffect(() => {
    console.log(selectedCity);
    const getCoordinates = async (cityname) => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityname.toLocaleLowerCase(
            "en-US"
          )}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response.data);
        setCityCoordinates(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoordinates(selectedCity);
  }, [selectedCity]);

  const values = {
    selectedCity,
    cityCoordinates,
    setSelectedCity,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherContext;