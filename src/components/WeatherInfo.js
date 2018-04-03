import React from 'react';
import Current from './Current'

const WeatherInfo = (props) => {
  console.log('props', props.currWeather.main)
  let weather = props.currWeather
  let cardStyle = {
    maxWidth: "50rem"
  }
  return(
    <div className="card border-primary mb-3" style={cardStyle}>
      <div className="card-header">Current Weather</div>
      <div className="card-body">
        <h4 className="card-title">{weather.name}</h4>
        <p className="card-text">Some quick example text to build</p>
      </div>
    </div>
  )
};

export default WeatherInfo;
