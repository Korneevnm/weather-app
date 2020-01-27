import React from 'react';
import { Icon } from 'antd';
import './style.sass';

const WeatherItem = ({
  weather: { name, weather, main, wind, clouds, id },
  deleteCity
}) => {
  return (
    <div className='item'>
      <div
        className='delete'
        onClick={() => deleteCity(id)}
        title='Удалить город'>
        <Icon type='close-circle' />
      </div>
      <div className='name'>{name}</div>
      <div className='box'>
        <div className='img'>
          <img
            src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
            alt={weather[0].main}
            title={weather[0].main}
          />
        </div>
        <div className='temp'>{parseInt(main.temp)}&#176;C</div>
      </div>
      <div className='box2'>
        <p className='humidity'>Влажность: {main.humidity}%</p>
        <p className='wind'>Ветер: {wind.speed}м/с</p>
        <p className='clouds'>Облачность: {clouds.all}%</p>
      </div>
    </div>
  );
};

export default WeatherItem;
