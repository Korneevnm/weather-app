import React from "react";
import "./style.css"

function WeatherItem({ weather, idx, deleteCity }) {
  return (
    <div className="item">
      <div className="delete" onClick={() => deleteCity(idx)} title="Удалить город"></div>
      <div className="name">{weather.name}</div>
      <div className="box">
        <div className="img"><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="img" /></div>
        <div className="temp">{weather.main.temp}&#176;C</div>
      </div>
      <div className="box2">
          <p className="humidity">Влажность: {weather.main.humidity}%</p>
          <p className="wind">Ветер: {weather.wind.speed}м/с</p>
          <p className="clouds">Облачность: {weather.clouds.all}%</p>
        </div>
    </div>
  );
}

export default WeatherItem;