import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'antd';
import WeatherList from '../../components/WeatherList';
import WeatherAdd from '../WeatherAdd';
import './style.sass';

const App = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorIp, setIsErrorIp] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather`;
  const appId = `e7b7e505b9f6c9fb24a4e048a62eeeab`;

  const fetchData = async () => {
    setIsLoading(true);
    const ip = await axios
      .get(`http://free.ipwhois.io/json/`)
      .then(response => response.data);

    await axios
      .get(`${url}?q=${ip.city}&units=metric&APPID=${appId}`)
      .then(response => setWeather([...weather, response.data]))
      .catch(error => {
        if (error.response) {
          setIsErrorIp(true);
        }
      });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteCity = id => {
    const idx = weather.findIndex(item => item.id === id);
    setWeather([...weather.slice(0, idx), ...weather.slice(idx + 1)]);
  };

  const addCity = async city => {
    setIsError(false);
    await axios
      .get(`${url}?q=${city}&units=metric&APPID=${appId}`)
      .then(response => {
        setWeather([...weather, response.data]);
      })
      .catch(error => {
        if (error.response) {
          setIsError(true);
        }
      });
  };

  return isLoading ? (
    <div className='loading' />
  ) : (
    <>
      <div className='container'>
        {isErrorIp && (
          <Alert
            message='Не удалось определить ваше местоположение'
            type='error'
            banner
            closable
          />
        )}
        {isError && (
          <Alert
            message='Вы ввели неверный город'
            type='error'
            banner
            closable
          />
        )}
      </div>
      <div className='wrapper'>
        <div className='container'>
          <WeatherList weather={weather} deleteCity={deleteCity} />
          <WeatherAdd addCity={addCity} />
        </div>
      </div>
    </>
  );
};

export default App;
