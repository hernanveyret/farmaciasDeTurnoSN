import React from 'react';
import './almanacDay.css';

const AlmanacDay = ({day,monthString,year,dayString}) => {

  return (
    <div className="containerAlmanac">
      <div className="card">
        <div className="infoCard">
          <h3>{monthString}</h3>
          <h4>{year}</h4>
      </div>
        <div className="day">
          <p className="dayString">{dayString[0].toUpperCase() + dayString.slice(1)}</p>
          <p className="dayNumber">{day}</p>
          
        </div>
      </div>
    </div>
  )
}
export default AlmanacDay;