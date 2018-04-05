import React from 'react';

const SixteenDay = () => {

  let cardStyle = {
    maxWidth: "20%",
    margin: "15px"
  }
  let cardColor = {
    color: "blue"
  }
  let space = {
    margin: '10px'
  }
  let font = {
    color: 'red'
  }

  return(
    <div className='row' style={space}>
      <div className='col'>
        <div className="card border-primary mb-3" style={cardStyle}>
          <div className="card-header" style={cardColor}><b>Sixteen Day Forecast</b></div>
            <div className="card-body">
              <h6 className="card-title" style={font}><b>Restricted Access</b></h6>
            </div>
          </div>
      </div>
    </div>
  )
};

export default SixteenDay;
