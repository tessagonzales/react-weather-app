import React from 'react';


const Current = ({ currWeatherTemp, cityName, currWeatherDesc }) => {
  //console.log('desc', currWeatherDesc)
  //console.log('props city name:', cityName);

  let cardStyle = {
    maxWidth: "30rem"
  }
  let cardColor = {
    color: "blue"
  }
  let space = {
    margin: '20px',
  }

  if(!currWeatherTemp && !currWeatherDesc) {
  return <div>Loading...</div>
  } else {
    return(
      <div className='row' style={space}>
      <div className="col-md-6">
      <h1>{cityName}</h1><br />
        <div className="card border-primary mb-3" style={cardStyle}>
          <div className="card-header" style={cardColor}><b>Today</b></div>
            <div className="card-body">
              <h6 className="card-title">
                Current Temperature: <b>{currWeatherTemp.temp} &#8457;</b><br />
                Humidity: <b>{currWeatherTemp.humidity}</b> <br />
                High: <b>{currWeatherTemp.temp_max} &#8457;</b> <br />
                Low: <b>{currWeatherTemp.temp_min} &#8457;</b> <br />
                <b>{currWeatherDesc[0].main} - {currWeatherDesc[0].description}</b>
              </h6>
            </div>
        </div>
      </div>
      </div>
  )}
};

export default Current;
