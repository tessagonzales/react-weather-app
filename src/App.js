import React, { Component } from 'react';
import './App.css';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import WeatherInfo from './components/WeatherInfo'
const API_KEY = '2a712a7b6e8b9d477185c6f64032d136'


class App extends Component {
  state = {
    currWeather: []
  }

  //fetching...
  componentDidMount(){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=${API_KEY}`)
    .then(currWeather => {
      //console.log('current weather data:', currWeather.data)
      this.setState({ currWeather: currWeather.data })
    })
  }

  render() {
    console.log('api key:', API_KEY)
    console.log('Phx Current Weather:', this.state.currWeather)
    console.log('Phx KtoF temp:', kelvinToFahrenheit(296.85))
    return (
      <div className="App">
        <Navbar />
        <h1>Hello World</h1>
        <WeatherInfo currWeather={this.state.currWeather}/>
        <Footer />
      </div>
    );
  }
}

export default App;
