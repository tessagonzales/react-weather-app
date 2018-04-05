import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import axios from 'axios'
import Current from './components/Current'
import FiveDay from './components/FiveDay'
import SixteenDay from './components/SixteenDay'
import SearchBar from './components/Searchbar'

class App extends Component {
  state = {
    currWeather: {},
    fiveDay: {}
  }

  //fetching...
  componentDidMount(){
    Promise.all([
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Phoenix&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)    ])
    .then(result => {
      //console.log('result', result)
      let [ current, fiveDay ] = result
      this.setState({
        currWeather: current.data,
        fiveDay: fiveDay.data,
      })
    })
  }

  changeCity = (city) => {
    Promise.all([
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)    ])
    .then(result => {
      //console.log('on change', result)
      let [ current, fiveDay ] = result
      this.setState({
        currWeather: current.data,
        fiveDay: fiveDay.data,
      })
    })
  }

  render() {
    //console.log('Phx Current Weather:', this.state.currWeather)
    //console.log('Phx FiveDay:', this.state.fiveDay)
    //console.log('api key', process.env.REACT_APP_API_KEY);
    return (
      <div className="App">
        <SearchBar changeCityFunc={this.changeCity}/>
        <Current
          currWeatherTemp={this.state.currWeather.main}
          cityName={this.state.currWeather.name}
          currWeatherDesc={this.state.currWeather.weather}
        />
        <FiveDay fiveDay = {this.state.fiveDay.list}/>
        <SixteenDay />
        <Footer />
      </div>
    );
  }
}

export default App;
