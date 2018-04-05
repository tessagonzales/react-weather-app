import React from 'react';
import OneDay from './OneDay'

const FiveDay = ({ fiveDay }) => {
//console.log('Five forecast:', fiveDay)

  let cardStyle = {
    maxWidth: "80%",
    margin: "15px"
  }
  let cardColor = {
    color: "blue"
  }
  let width = {
    width: '75%'
  }
  let space = {
    margin: '10px'
  }

  if(!fiveDay) {
  return(
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={width}></div>
    </div>
  )
  } else {


    let timeOfDay = fiveDay.filter(time => time.dt_txt.includes('15:00:00'))
    .map((day, idx)=> <OneDay key={idx} day={day} /> )

    //console.log(timeOfDay)

    return(
      <div className='row' style={space}>
        <div className='col'>
          <div className="card border-primary mb-3" style={cardStyle}>
            <div className="card-header" style={cardColor}><b>Five Day Forecast</b></div>
              <div className="card-body">
                <div className="card-title">

                    {timeOfDay}

                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }

};

export default FiveDay;
