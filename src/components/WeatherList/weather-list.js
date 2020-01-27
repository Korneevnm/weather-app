import React from 'react';
import { TweenOneGroup } from 'rc-tween-one';
import WeatherItem from '../WeatherItem';
import './style.sass';

const WeatherList = ({ weather, deleteCity }) => {
  return (
    <div className='list'>
      <TweenOneGroup
        enter={{
          scale: 0.6,
          opacity: 0,
          type: 'from',
          duration: 200
        }}
        leave={{ opacity: 0, scale: 0, duration: 200 }}
        appear={false}>
        {weather.map(weatherItem => (
          <WeatherItem
            weather={weatherItem}
            key={weatherItem.id}
            deleteCity={deleteCity}
          />
        ))}
      </TweenOneGroup>
    </div>
  );
};

export default WeatherList;
