import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { CityProvider } from "./context/CityContext";
import { WeatherProvider } from "./context/WeatherContext";

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <CityProvider>
        <App />
      </CityProvider>
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);