import React from "react";
import Select from "react-select";



import { useWeatherContext } from "../context/WeatherContext";

import { useCityContext } from "../context/CityContext";

function Header() {
  const { cities } = useCityContext();
  const { setSelectedCity } = useWeatherContext();

  const handleChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  const optionList = (cityArr) => {
    return cityArr.map((city) => {
      return { value: city, label: city };
    });
  };

  return (
    <div className="container-fluid">
      <Select
        className="mt-4 mb-4 col-md-4 col-offset-4"
        options={optionList(cities)}
        onChange={handleChange}
      />
    </div>
  );
}

export default Header;