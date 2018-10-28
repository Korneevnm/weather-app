import React from "react"
import WeatherItem from "../WeatherItem/index";
import "./style.css"

function WeatherList({ weather, deleteCity }) {
  return (
    <div className="list">
      {weather.map((weatheritem, idx) => <WeatherItem weather={weatheritem} key={idx} idx={idx} deleteCity={deleteCity} />)}
    </div>
  );
}

export default WeatherList;