import React from "react";

import { useWeatherContext } from "../context/WeatherContext";

function Weather() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const { weatherData, selectedCity } = useWeatherContext();

  return (
    <div>
      <h5 className="weather-header">
        Selected City: {selectedCity.toLocaleUpperCase()}
      </h5>
      <div className="weather-container">
        {weatherData.daily.map((day) => (
          <div className="weather-card" key={Math.random() * 100}>
            <h6>{days[new Date(day.dt * 1000).getDay()]}</h6>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="iconimage"
            />
            <h6>
              <span className="temp">
                Min:
                {parseFloat(day.temp.min).toFixed(1)} &deg;C
              </span>
            </h6>
            <h6>
              <span className="temp">
                Maks:
                {parseFloat(day.temp.max).toFixed(1)} &deg;C
              </span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;