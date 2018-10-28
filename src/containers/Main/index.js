import React from "react";
import request from "../../utils/request";
import WeatherList from "../../components/WeatherList/index"
import WeatherAdd from "../../components/WeatherAdd/index"

import "./style.css"

export default class Main extends React.Component {
  state = {
    ip: null,
    weather: [],
    erorr: false
  };

  async componentDidMount() {
    const ip = await request("https://ipapi.co/json/");
    const weather = await request(`https://api.openweathermap.org/data/2.5/weather?q=${ip.city}&units=metric&APPID=e7b7e505b9f6c9fb24a4e048a62eeeab`);
    const newweather = [...this.state.weather, weather]
    this.setState({ ip, weather: newweather });
  }

  handleSubmit = async city => {
    const weather = await request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e7b7e505b9f6c9fb24a4e048a62eeeab`);
    if (weather.cod === '404') {
      this.setState({ error: true });
    } else {
      const newweather = [...this.state.weather, weather]
      this.setState({ weather: newweather, error: false });
      localStorage.setItem('weather', JSON.stringify(newweather));
    }
  }

  deleteCity = idx => {
    const newweather = this.state.weather;
    newweather.splice(idx, 1);
    this.setState({ weather: newweather });
  }

  render() {
    const {weather, error} = this.state;
    return (
      <div className="container">
        <WeatherList weather={weather} deleteCity={this.deleteCity} />
        <WeatherAdd onSubmit={this.handleSubmit} />
        {error && <div className="error">Вы ввели неверный город</div>}
      </div>
    );
  }
}
