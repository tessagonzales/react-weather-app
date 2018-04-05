import React from 'react';

const OneDay = ({day}) => {

  let styleRow = {
    border: "1px solid black",
    padding: '10px',
    margin: '5px'
  }

  function finalDate(date) {
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October', 'November', 'December'  ]
  //Name of Day
  let dayNum = new Date(date)
  let finalDay = daysOfWeek[dayNum.getDay()]
  //Month
  let monthNum = new Date(date)
  let finalMonth = months[monthNum.getMonth()]
  //Date number
  let dayNumber = new Date(date)
  let finalDayNum = dayNumber.getDate()
  //Year
  let year = new Date(date)
  let finalYear = year.getFullYear()

  return finalDay + ', ' + finalMonth + ' ' + finalDayNum + ', ' + finalYear
}

//console.log(day.weather[0].main)


  return(
    <div className="row" style={styleRow}>
        <div className="col-md-4 col-md-offset-1"><b>{finalDate(day.dt_txt)}</b></div>
        <div className="col-md-2"><b>{day.main.temp} &#8457;</b></div>
        <div className="col-md-2">High: <b>{day.main.temp_max} &#8457;</b></div>
        <div className="col-md-2">Low: <b>{day.main.temp_min} &#8457;</b></div>
        <div className="col-md-2"><b>{day.weather[0].main}</b></div>
    </div>

  )
};

export default OneDay;
